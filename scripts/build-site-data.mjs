#!/usr/bin/env node
/* ============================================================
   build-site-data.mjs · 灰墨 MoH_UI 展示站数据生成器
   扫描 themes/ components/ rules/ 的 moh.json 与 tokens.css，
   汇总生成 site/data.js（站点元数据唯一权威源）。
   用法：node scripts/build-site-data.mjs
   新增主题/组件后重跑本脚本，集市与选择器自动更新。
   ============================================================ */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outFile = path.join(root, "site", "data.js");

/* ---------- 工具 ---------- */
function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    console.warn("⚠ 读取失败（跳过）：" + p);
    return null;
  }
}

/* 从 tokens.css 解析关键设计变量（真实色板，驱动卡片/换肤器） */
const PALETTE_KEYS = [
  "canvas", "surface", "surface-2", "border", "border-strong",
  "ink", "muted", "primary", "primary-hover", "primary-muted",
  "success", "warning", "danger", "radius-md", "control-height"
];
function parsePalette(tokensPath) {
  const css = fs.readFileSync(tokensPath, "utf8");
  const out = {};
  for (const key of PALETTE_KEYS) {
    const m = css.match(new RegExp("--moh-" + key.replace("-", "-") + ":\\s*([^;]+);"));
    out[key] = m ? m[1].trim() : "";
  }
  return out;
}

/* 组件分类：从 styleTags 映射（未命中归"基础"） */
const CAT_RULES = [
  { cat: "表单", tags: ["表单", "选择"] },
  { cat: "反馈", tags: ["反馈", "状态"] },
  { cat: "导航", tags: ["导航", "菜单", "分页"] },
  { cat: "浮层", tags: ["浮层", "弹窗"] },
  { cat: "数据展示", tags: ["数据", "展示", "表格", "图表"] },
  { cat: "加载状态", tags: ["加载"] }
];
function categorize(styleTags) {
  if (!Array.isArray(styleTags) || styleTags.length === 0) return "基础";
  for (const rule of CAT_RULES) {
    if (styleTags.some((t) => rule.tags.includes(t))) return rule.cat;
  }
  return "基础";
}

/* ---------- 扫描主题 ---------- */
const themes = [];
for (const slug of fs.readdirSync(path.join(root, "themes"))) {
  const dir = path.join(root, "themes", slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  const mj = readJson(path.join(dir, "moh.json"));
  if (!mj || mj.type !== "theme") continue;
  const palette = parsePalette(path.join(dir, "tokens.css"));
  themes.push({
    name: mj.name,
    title: mj.title,
    description: mj.description,
    styleTags: mj.styleTags || [],
    audit: mj.audit ?? null,
    license: mj.source?.license || "MIT",
    origin: mj.source?.origin || "original",
    url: mj.source?.url || null,
    inspiration: mj.inspiration || mj.source?.inspiration || [],
    palette,
    slug
  });
}
themes.sort((a, b) => a.name.localeCompare(b.name, "zh"));

/* ---------- 扫描组件（递归，支持 components/daisyui/<name> 命名空间） ---------- */
const components = [];
function walkComponents(dir, rel) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const abs = path.join(dir, entry.name);
    const relDir = rel ? rel + "/" + entry.name : entry.name;
    const mjPath = path.join(abs, "moh.json");
    if (fs.existsSync(mjPath)) {
      const mj = readJson(mjPath);
      if (mj && mj.type === "component") {
        const deps = Array.isArray(mj.dependencies) ? mj.dependencies : [];
        // 新搬运组件入口是 demo.html；老自研组件入口是 index.html
        const entryFile = fs.existsSync(path.join(abs, "demo.html")) ? "demo.html" : "index.html";
        components.push({
          name: mj.name,
          title: mj.title,
          description: mj.description,
          styleTags: mj.styleTags || [],
          category: categorize(mj.styleTags),
          dependencies: deps,
          hasDeps: deps.length > 0,
          license: mj.source?.license || "MIT",
          origin: mj.source?.origin || "original",
          upstream: mj.source?.upstream || null,
          upstreamUrl: mj.source?.url || null,
          slug: relDir,
          entry: entryFile
        });
      }
    }
    walkComponents(abs, relDir); // 递归发现命名空间下的组件
  }
}
walkComponents(path.join(root, "components"), "");

/* daisyUI 搬运组件按表单逻辑顺序排，其余按名称；搬运组件始终排在自研前面 */
const DAI_ORDER = ["button", "input", "select", "textarea", "checkbox", "radio", "toggle", "range",
  "file-input", "fieldset", "rating", "otp", "validator",
  "navbar", "menu", "dropdown", "tabs", "breadcrumbs", "pagination", "link", "steps", "divider", "join",
  "table", "card", "stat", "badge", "list", "avatar", "progress", "radial-progress", "loading",
  "skeleton", "countdown", "kbd", "tooltip", "chat",
  "alert", "modal", "toast", "collapse", "indicator", "swap", "carousel", "hero", "drawer",
  "footer", "timeline", "accordion", "mockup"];
function orderKey(c) {
  if (c.slug.startsWith("daisyui/")) {
    const n = c.slug.split("/")[1];
    const i = DAI_ORDER.indexOf(n);
    return "0/" + String(i < 0 ? 99 : i).padStart(2, "0") + n;
  }
  return "1/" + c.name;
}
components.sort((a, b) => orderKey(a).localeCompare(orderKey(b)));

/* ---------- 规则包 ---------- */
const rulesMeta = readJson(path.join(root, "rules", "moh.json"));

/* ---------- 汇总 ---------- */
const data = {
  generatedAt: new Date().toISOString().slice(0, 10),
  stats: {
    themes: themes.length,
    components: components.length,
    rules: 1,
    resources: themes.length + components.length + 1
  },
  themes,
  components,
  rules: {
    name: rulesMeta?.name || "rules",
    title: rulesMeta?.title || "规则边界包",
    description: rulesMeta?.description || "AI 不易察觉的审美硬边界 + 禁则 + 自检闭环",
    license: rulesMeta?.source?.license || "MIT"
  }
};

/* 分类聚合（供筛选栏） */
const catOrder = ["基础", "表单", "反馈", "导航", "浮层", "数据展示", "加载状态"];
data.categories = catOrder.filter((c) => components.some((x) => x.category === c));
const tagSet = new Set();
for (const t of themes) for (const s of t.styleTags) tagSet.add(s);
data.themeTags = [...tagSet].sort((a, b) => a.localeCompare(b, "zh"));

const js = "/* 本文件由 scripts/build-site-data.mjs 自动生成，请勿手改；新增主题/组件后重跑脚本。 */\nwindow.MOH_DATA = " +
  JSON.stringify(data, null, 2) + ";\n";
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, js, "utf8");

/* ---------- 输出摘要 ---------- */
console.log("✅ site/data.js 已生成");
console.log(`   主题 ${themes.length} 套 · 组件 ${components.length} 个 · 规则 1 包`);
console.log("   主题标签：" + (data.themeTags.join(" / ") || "（无）"));
console.log("   组件分类：" + data.categories.join(" / "));
const missing = themes.filter((t) => !t.palette.primary || !t.palette.canvas);
if (missing.length) console.warn("⚠ 色板缺失：" + missing.map((t) => t.slug).join(", "));
