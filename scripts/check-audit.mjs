#!/usr/bin/env node
/**
 * 灰墨 · MoH_UI — 审美体检脚本 v1（纯 Node 静态检查，无需浏览器）
 * 检查项对应《开发计划》5.6：
 *   check-a11y  文本对比度 ≥ 4.5（WCAG AA），关键色组合
 *   check-type  CJK 字体栈；字号阶 ≥ 4 级且 ≤ 6 级
 *   check-space 间距均为 4 的倍数（8px 网格）
 *   check-slop  禁纯黑 #000 / 纯白 #fff、禁紫色渐变、必须有 :focus 态、禁 lorem ipsum
 * 用法：node scripts/check-audit.mjs themes/mo-dark
 * 输出：JSON 报告（总分 0–100 + 各项明细 + 修复建议）
 * 发布门槛：总分 < 90 不许发布
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const target = process.argv[2];
if (!target) {
  console.error("用法：node scripts/check-audit.mjs themes/mo-dark");
  process.exit(1);
}

const dir = target;
const tokensPath = join(dir, "tokens.css");
const basePath = join(dir, "base.css");

if (!existsSync(tokensPath)) {
  console.error(`未找到 ${tokensPath}`);
  process.exit(1);
}

const tokens = readFileSync(tokensPath, "utf8");
const base = existsSync(basePath) ? readFileSync(basePath, "utf8") : "";

/* ---------- 工具：颜色解析与对比度 ---------- */
function hexToRgb(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function lum({ r, g, b }) {
  const f = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(a, b) {
  const la = lum(a);
  const lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** 从 tokens.css 提取 --moh-* 变量表 */
function extractTokens(css) {
  const vars = {};
  const re = /--moh-([a-z0-9-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(css))) vars[m[1]] = m[2].trim();
  return vars;
}

const vars = extractTokens(tokens);
const colorOf = (name) => hexToRgb(vars[name] || "");
const fmt = (v) => (v ? v.toFixed(2) : "-");

/* ---------- 评分器 ---------- */
const report = { checks: {}, total: 0, pass: true, suggestions: [] };
const MAX = { a11y: 30, type: 20, space: 20, slop: 30 };

/* 1. check-a11y：关键色组合对比度（muted 是次级文字，最容易挂） */
const combos = [
  ["ink", "canvas", "主文字/页面底"],
  ["ink", "surface", "主文字/卡片底"],
  ["muted", "canvas", "次级文字/页面底"],
  ["muted", "surface", "次级文字/卡片底"],
  ["primary", "#ffffff", "主色按钮/白字"],
];
let a11yScore = 0;
const a11yDetail = [];
for (const [fgName, bgName, label] of combos) {
  const fg = colorOf(fgName);
  const bg = bgName.startsWith("#") ? hexToRgb(bgName) : colorOf(bgName);
  if (!fg || !bg) {
    a11yDetail.push({ pair: label, ratio: "缺失", ok: false });
    report.suggestions.push(`tokens.css 缺少 ${fgName}/${bgName} 颜色定义`);
    continue;
  }
  const ratio = contrast(fg, bg);
  const ok = ratio >= 4.5;
  if (ok) a11yScore += MAX.a11y / combos.length;
  a11yDetail.push({ pair: label, ratio: fmt(ratio), ok });
  if (!ok) {
    report.suggestions.push(
      `${label} 对比度 ${fmt(ratio)} < 4.5：将 ${fgName} 加深/提亮（或换底色），
       例：muted 在 canvas 上不达标时，加深 muted 至 #60698a 一类（对比度可到 ~5.1）`
    );
  }
}
report.checks.a11y = { score: Math.round(a11yScore), detail: a11yDetail };

/* 2. check-type：CJK 字体栈 + 字号阶 */
let typeScore = 0;
const cjkOk = /(HarmonyOS Sans SC|MiSans|Source Han Sans SC|PingFang SC|Microsoft YaHei)/.test(tokens);
if (cjkOk) typeScore += 10;
else report.suggestions.push("字体栈缺少中文（CJK）字体，必须包含 PingFang SC / Microsoft YaHei 之一");

const sizes = [];
const sizeRe = /--moh-text-(xs|sm|base|md|lg|xl)\s*:\s*(\d+)px/g;
let ms;
while ((ms = sizeRe.exec(tokens))) sizes.push(Number(ms[2]));
const sizeOk = sizes.length >= 4 && sizes.length <= 6;
if (sizeOk) typeScore += 10;
else report.suggestions.push(`字号阶应为 4–6 级，当前 ${sizes.length} 级`);
report.checks.type = { score: typeScore, sizes, cjkOk, ok: sizeOk };

/* 3. check-space：间距 4 的倍数（8px 网格） */
let spaceScore = 0;
const spaces = [];
const spaceRe = /--moh-space-\d+\s*:\s*(\d+)px/g;
let ss;
while ((ss = spaceRe.exec(tokens))) spaces.push(Number(ss[1]));
const badSpaces = spaces.filter((v) => v % 4 !== 0);
if (badSpaces.length === 0 && spaces.length >= 4) spaceScore = MAX.space;
else report.suggestions.push(`间距必须是 4 的倍数，违规值：${badSpaces.join(", ")}`);
report.checks.space = { score: spaceScore, values: spaces, ok: badSpaces.length === 0 };

/* 4. check-slop：反 AI 味 / 反低级错误 */
let slopScore = 0;
const slopChecks = [];
// 大面积底色（canvas / surface-2）禁纯黑 #000、禁纯白 #fff；近黑底 #0f0f0f、白卡 #ffffff 豁免
const canvasColor = vars["canvas"] || "";
const surface2Color = vars["surface-2"] || "";
const noPureBlack = !/^#?0{3,6}$/i.test(canvasColor.replace("#", "")) && !/^#?0{3,6}$/i.test(surface2Color.replace("#", ""));
const noPureWhite = !/^#?fff{3}$/i.test(canvasColor.replace("#", "")) && !/^#?fff{3}$/i.test(surface2Color.replace("#", ""));
const noPurpleGradient = !/gradient\([^)]*(purple|violet|#8b5cf6|#a855f7)/i.test(base);
const hasFocus = /:focus-visible|:focus\b/.test(base);
const noLorem = !/lorem\s+ipsum/i.test(base);
if (noPureBlack) slopScore += 10; else report.suggestions.push("禁纯黑 #000 作为颜色值（近黑底可用 #0f0f0f 等）");
if (noPureWhite) slopScore += 5; else report.suggestions.push("禁纯白 #fff 作为颜色值（按钮文字白可用 #fff，此处针对大面积底色，请复核）");
if (noPurpleGradient) slopScore += 5; else report.suggestions.push("禁用默认紫渐变（AI 味重灾区）");
if (hasFocus) slopScore += 5; else report.suggestions.push("必须有 :focus / :focus-visible 态（可访问性）");
if (noLorem) slopScore += 5; else report.suggestions.push("禁止 lorem ipsum 占位文本");
slopChecks.push({ noPureBlack, noPureWhite, noPurpleGradient, hasFocus, noLorem });
report.checks.slop = { score: slopScore, detail: slopChecks };

/* ---------- 汇总 ---------- */
report.total = report.checks.a11y.score + report.checks.type.score + report.checks.space.score + report.checks.slop.score;
report.pass = report.total >= 90;

console.log(JSON.stringify(report, null, 2));
console.log(`\n总分：${report.total}/100 → ${report.pass ? "通过（可发布）" : "不通过（<90 不许发布）"}`);
process.exit(report.pass ? 0 : 1);
