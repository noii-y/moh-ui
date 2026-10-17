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

/* 从主题 tokens.css 解析 daisyUI 5 语义色（驱动卡片色板条）。
   收录的官方主题（如 caramellatte/silk）无 tokens.css，变量在 vendor 里，返回 {}。 */
const THEME_PALETTE_KEYS = [
  ["base", "--color-base-100"], ["surface", "--color-base-200"], ["surface2", "--color-base-300"],
  ["primary", "--color-primary"], ["secondary", "--color-secondary"], ["accent", "--color-accent"]
];
function parseThemePalette(tokensPath) {
  if (!fs.existsSync(tokensPath)) return {};
  const css = fs.readFileSync(tokensPath, "utf8");
  const out = {};
  for (const [key, variable] of THEME_PALETTE_KEYS) {
    const re = new RegExp(variable.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ":\\s*([^;]+);");
    const m = css.match(re);
    if (m) out[key] = m[1].trim();
  }
  return out;
}

/* 组件分类：从 styleTags 映射（未命中归"基础"） */
const CAT_RULES = [
  { cat: "表单", tags: ["表单", "选择"] },
  { cat: "反馈", tags: ["反馈", "状态"] },
  { cat: "导航", tags: ["导航", "菜单", "分页"] },
  { cat: "浮层", tags: ["浮层", "弹窗"] },
  { cat: "数据展示", tags: ["数据展示", "数据", "展示", "表格", "图表"] },
  { cat: "加载状态", tags: ["加载"] }
];
function categorize(styleTags) {
  if (!Array.isArray(styleTags) || styleTags.length === 0) return "基础";
  /* 按组件声明的标签先后顺序归类（组件最显著的分类写在前面），
     避免「导航」组件带了次要标签「选择」时被更早的「表单」规则误判。*/
  for (const t of styleTags) {
    const rule = CAT_RULES.find((r) => r.tags.includes(t));
    if (rule) return rule.cat;
  }
  return "基础";
}

/* ---------- 扫描主题（完整页面案例体系：demo.html + daisyUI 5 变量） ---------- */
const themes = [];
for (const slug of fs.readdirSync(path.join(root, "themes"))) {
  const dir = path.join(root, "themes", slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  const mj = readJson(path.join(dir, "moh.json"));
  if (!mj || mj.type !== "theme") continue;
  const files = Array.isArray(mj.files) ? mj.files : [];
  const hasTokens = files.includes("tokens.css") || fs.existsSync(path.join(dir, "tokens.css"));
  const palette = parseThemePalette(path.join(dir, "tokens.css"));
  const styleTags = mj.styleTags || [];
  themes.push({
    name: mj.name,
    title: mj.title,
    description: mj.description,
    styleTags,
    dark: styleTags.includes("深色"),
    group: mj.source?.origin === "original" ? "二创" : "收录",
    hasTokens,
    license: mj.source?.license || "MIT",
    origin: mj.source?.origin || "original",
    upstream: mj.source?.upstream || null,
    url: mj.source?.url || null,
    inspiration: mj.inspiration || mj.source?.inspiration || [],
    palette,
    slug,
    entry: "demo.html"
  });
}
/* 排序：二创样板组在前（mo-dark 样板第一），收录组在后，组内按固定展示顺序 */
const THEME_ORDER = [
  "mo-dark", "mo-light", "mo-classic", "mo-gray", "mo-pastel", "mo-slate", "mo-mood", "mo-brutal", "mo-neon", "mo-zhongshi",
  "dracula-oss", "catppuccin", "nord-dark", "tokyo-night", "rose-pine", "solarized-light", "caramellatte", "silk"
];
function themeOrder(t) {
  const i = THEME_ORDER.indexOf(t.slug);
  return i >= 0 ? String(i).padStart(2, "0") : "99/" + t.name;
}
themes.sort((a, b) => themeOrder(a).localeCompare(themeOrder(b)));

/* ---------- 扫描组件（递归，支持 components/daisyui/<name> 命名空间） ---------- */
const components = [];
function walkComponents(dir, rel) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue; // _legacy 归档目录跳过
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
const missing = themes.filter((t) => !fs.existsSync(path.join(root, "themes", t.slug, "demo.html")));
if (missing.length) console.warn("⚠ 主题缺 demo.html 整页案例：" + missing.map((t) => t.slug).join(", "));
