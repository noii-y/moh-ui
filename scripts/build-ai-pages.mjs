#!/usr/bin/env node
/* ============================================================
   build-ai-pages.mjs · 灰墨 MoH_UI 组件 AI 指令分发（形态 A）
   扫描 site/data.js 的组件清单，从每个 demo.html 提取：
     #moh-prompt（组件规格）+ #hero-stage（参考结构）+ data-component（场景名）
   通用规则从 assets/demo-doc.js 的 COMMON_RULES 直接提取（单一真相，
   保证 AI 页内容与详情页「复制 AI 提示词」逐字一致，不另存一份）。
   生成：
     ai/<slug>.md    每个组件一个干净 Markdown（给 AI 抓，llms.txt 链接）
     ai/<slug>.html  每个组件一个极简人看页（复制指令 + 指向 .md）
     llms.txt        根目录索引（按分类，符合 llmstxt.org v2）
     llms-full.txt   全部组件全文（一次抓全库）
   用法：
     node scripts/build-ai-pages.mjs            全量生成
     node scripts/build-ai-pages.mjs button     只生成单个组件（做样板）
   依赖：先跑过 build-site-data.mjs（site/data.js 为组件清单来源）。
   本脚本只写 ai/ 目录与根目录 llms*.txt，不碰任何组件目录与公共层。
   ============================================================ */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BASE = "https://noii-y.github.io/moh-ui";
const onlySlug = process.argv[2] || null; // 单组件样板模式

/* ---------- 读 site/data.js（浏览器全局语法，替换后求值） ---------- */
function loadSiteData() {
  const p = path.join(root, "site", "data.js");
  if (!fs.existsSync(p)) {
    throw new Error("找不到 site/data.js，请先运行 node scripts/build-site-data.mjs");
  }
  const src = fs.readFileSync(p, "utf8").replace(/window\.MOH_DATA\s*=/, "global.MOH_DATA =");
  global.MOH_DATA = null;
  eval(src);
  return global.MOH_DATA;
}

/* ---------- 从 demo-doc.js 提取 COMMON_RULES 文本（与复制按钮同源） ---------- */
function loadCommonRules() {
  const src = fs.readFileSync(path.join(root, "assets", "demo-doc.js"), "utf8");
  const m = src.match(/var COMMON_RULES\s*=\s*(\[[\s\S]*?\])\.join\("\\n"\);/);
  if (!m) throw new Error("无法从 demo-doc.js 提取 COMMON_RULES（结构可能已变）");
  const arr = new Function("return " + m[1])();
  return arr.join("\n");
}

/* ---------- HTML 实体还原（对齐浏览器 textContent） ---------- */
function decodeEntities(s) {
  return s
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

/* ---------- 提取 #moh-prompt 文本 ---------- */
function extractPromptSpec(html) {
  const m = html.match(/<script\b[^>]*id="moh-prompt"[^>]*>([\s\S]*?)<\/script>/i);
  if (!m) throw new Error("缺少 #moh-prompt");
  return decodeEntities(m[1]).trim();
}

/* ---------- 提取场景名（data-copy-prompt 按钮的 data-component） ---------- */
function extractSceneName(html) {
  const btn = html.match(/<button\b[^>]*data-copy-prompt[^>]*>/i);
  if (!btn) throw new Error("缺少 data-copy-prompt 按钮");
  const dc = btn[0].match(/data-component="([^"]+)"/);
  return dc ? dc[1] : "该组件";
}

/* ---------- 规整参考结构缩进：首行（根元素）已 trim 顶格，
   其余行按"除首行外最小缩进"整体回退，让代码块整洁（不改变任何标签/属性） ---------- */
function tidyHero(s) {
  const lines = s.replace(/\s+$/, "").split("\n");
  let min = Infinity;
  for (let k = 1; k < lines.length; k++) {
    if (!lines[k].trim()) continue;
    const ind = lines[k].match(/^ */)[0].length;
    if (ind < min) min = ind;
  }
  if (!isFinite(min)) return s.trim();
  return lines
    .map((ln, idx) => (idx === 0 ? ln : ln.replace(new RegExp("^ {" + min + "}"), "")))
    .join("\n")
    .trim();
}

/* ---------- 用 div 标签栈提取 #hero-stage 内部 HTML（含嵌套） ---------- */
function extractHero(html) {
  const open = html.match(/<div\b[^>]*\bid="hero-stage"[^>]*>/i);
  if (!open) throw new Error("缺少 #hero-stage");
  const contentStart = open.index + open[0].length;
  let cursor = contentStart;
  let depth = 1;
  const tokenRe = /<!--[\s\S]*?-->|<div\b[^>]*?>|<\/div\s*>/gi;
  for (;;) {
    tokenRe.lastIndex = cursor;
    const t = tokenRe.exec(html);
    if (!t) throw new Error("#hero-stage 未闭合");
    const tok = t[0];
    if (tok.startsWith("<!--")) { cursor = t.index + tok.length; continue; }
    if (tok.startsWith("</div")) depth--;
    else if (!/\/>\s*$/.test(tok)) depth++;
    if (depth === 0) return tidyHero(decodeEntities(html.slice(contentStart, t.index)));
    cursor = t.index + tok.length;
  }
}

/* ---------- 组装「复制 AI 提示词」正文（与 demo-doc.js buildPrompt 完全一致） ---------- */
function buildPrompt(sceneName, spec, heroHtml, commonRules) {
  return [
    "请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：" + sceneName + "。",
    "",
    spec,
    "",
    "【参考结构】（照此实现，外层标签可按我的项目调整）",
    "```html",
    heroHtml.trim(),
    "```",
    "",
    commonRules
  ].join("\n");
}

/* ---------- 从参考结构提取 CDN 外链（带依赖组件用） ---------- */
function extractCdn(heroHtml) {
  const out = [];
  const re = /<script\b[^>]*\bsrc="(https?:[^"]+)"/gi;
  let m;
  while ((m = re.exec(heroHtml))) if (!out.includes(m[1])) out.push(m[1]);
  const reL = /<link\b[^>]*\bhref="(https?:[^"]+)"[^>]*rel="stylesheet"/gi;
  while ((m = reL.exec(heroHtml))) if (!out.includes(m[1])) out.push(m[1]);
  return out;
}

/* ---------- 生成单个组件的 Markdown 文档 ---------- */
function buildMarkdown(c, promptText) {
  const englishName = c.name.replace(/^daisyui-/, "");
  const isThird = c.origin === "third-party";
  const srcLine = isThird
    ? `来源：${c.upstream || "daisyUI"}（${c.license || "MIT"}） · [官方文档](${c.upstreamUrl})`
    : `来源：灰墨自研（${c.license || "MIT"}）`;
  const depLine = c.dependencies && c.dependencies.length
    ? "依赖：" + c.dependencies.join("、")
    : "依赖：无（零依赖）";
  const demoUrl = `${BASE}/components/${c.slug}/${c.entry}`;
  const cdn = extractCdn(promptText);

  const appendix = [
    "---",
    "",
    "## 底座引入",
    "",
    "本组件基于 daisyUI 5（纯 CSS、零 JS、零构建）。若目标项目还没有引入，在 `<head>` 加这两行即可：",
    "",
    "```html",
    '<link rel="stylesheet" href="' + BASE + '/vendor/daisyui.css">',
    '<link rel="stylesheet" href="' + BASE + '/assets/utilities-patch.css">',
    "```",
    "",
    ...(c.dependencies && c.dependencies.length ? [
      "本组件额外依赖：" + c.dependencies.join("、") + "，需要在参考结构之外再引入对应 CDN：",
      "",
      ...cdn.map((u) => "- " + u),
      cdn.length ? "" : "（CDN 地址见上方参考结构中的 `<script src>`）",
      "",
    ] : []),
    "## 更多",
    "",
    `- 完整中文教程与全部变体（在线页面）：${demoUrl}`,
    isThird ? `- 上游官方文档：${c.upstreamUrl}` : "- 灰墨自研增强组件，基于 daisyUI 底座二次开发。",
    `- 全站 68 个组件的 AI 索引：${BASE}/llms.txt`,
    ""
  ].join("\n");

  const head = [
    `# ${c.title}（${englishName}） · 灰墨 MoH_UI`,
    "",
    `> ${c.description}`,
    "",
    `分类：${c.category}　｜　${srcLine}　｜　${depLine}`,
    "",
    "## 给 AI 的实现指令",
    ""
  ].join("\n");

  return head + promptText + "\n\n" + appendix;
}

/* ---------- 极简 Markdown → 静态 HTML（仅处理本脚本生成的受控语法） ---------- */
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function inline(s) {
  // 先转义，再依次替换行内代码、粗体、链接
  let t = esc(s);
  t = t.replace(/`([^`]+)`/g, (_, x) => `<code>${x}</code>`);
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  // 裸 URL
  t = t.replace(/(^|[\s（：])(https?:\/\/[^\s）<]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>');
  return t;
}
function mdToHtml(md) {
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  const listClose = [];
  function closeLists() { while (listClose.length) out.push(listClose.pop() === "ul" ? "</ul>" : "</ol>"); }
  while (i < lines.length) {
    const line = lines[i];
    // 代码围栏
    const fence = line.match(/^```(\w*)\s*$/);
    if (fence) {
      closeLists();
      const lang = fence[1] ? ` class="lang-${esc(fence[1])}"` : "";
      const buf = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++; // 跳过结束围栏
      out.push(`<pre class="fence"><code${lang}>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }
    if (/^# (.+)/.test(line)) { closeLists(); out.push(`<h1>${inline(RegExp.$1)}</h1>`); i++; continue; }
    if (/^## (.+)/.test(line)) { closeLists(); out.push(`<h2>${inline(RegExp.$1)}</h2>`); i++; continue; }
    if (/^### (.+)/.test(line)) { closeLists(); out.push(`<h3>${inline(RegExp.$1)}</h3>`); i++; continue; }
    if (/^---\s*$/.test(line)) { closeLists(); out.push("<hr>"); i++; continue; }
    if (/^> (.+)/.test(line)) {
      closeLists();
      const b = [];
      while (i < lines.length && /^> ?/.test(lines[i])) { b.push(lines[i].replace(/^> ?/, "")); i++; }
      out.push(`<blockquote>${inline(b.join(" "))}</blockquote>`);
      continue;
    }
    const ul = line.match(/^- (.+)/);
    const ol = line.match(/^\d+\. (.+)/);
    if (ul) {
      if (listClose[listClose.length - 1] !== "ul") { closeLists(); out.push("<ul>"); listClose.push("ul"); }
      out.push(`<li>${inline(ul[1])}</li>`); i++; continue;
    }
    if (ol) {
      if (listClose[listClose.length - 1] !== "ol") { closeLists(); out.push("<ol>"); listClose.push("ol"); }
      out.push(`<li>${inline(ol[1])}</li>`); i++; continue;
    }
    if (/^\s*$/.test(line)) { closeLists(); i++; continue; }
    // 普通段落（合并到下一空行）
    closeLists();
    const p = [line];
    i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]) &&
      !/^(#|```|---|> |- |\d+\. )/.test(lines[i])) { p.push(lines[i]); i++; }
    out.push(`<p>${inline(p.join(" "))}</p>`);
  }
  closeLists();
  return out.join("\n");
}

/* ---------- 极简 HTML 页模板（自包含，不引站点 CSS/JS，便于 AI 抓取） ---------- */
const PAGE_CSS = `
:root{--ink:#1f2430;--muted:#5b6472;--line:#e5e8ee;--bg:#fafbfc;--card:#fff;--brand:#2563eb;--code-bg:#0f1420;--code-ink:#e6eaf2}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
  font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;
  line-height:1.75;font-size:15px;-webkit-font-smoothing:antialiased}
.topbar{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);
  border-bottom:1px solid var(--line)}
.topbar-in{max-width:820px;margin:0 auto;padding:10px 20px;display:flex;align-items:center;gap:12px}
.brand{font-weight:700;font-size:14px;color:var(--ink);text-decoration:none}
.brand small{color:var(--muted);font-weight:400;margin-left:6px}
.spacer{flex:1}
.btn{appearance:none;border:0;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;
  font-family:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:6px}
.btn-primary{background:var(--brand);color:#fff}
.btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--line)}
.wrap{max-width:820px;margin:0 auto;padding:28px 20px 80px}
article{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:32px 36px}
h1{font-size:23px;line-height:1.4;margin:0 0 12px}
h2{font-size:17px;margin:30px 0 10px;padding-top:16px;border-top:1px solid var(--line)}
h2:first-child{border-top:0;padding-top:0}
h3{font-size:15px;margin:20px 0 8px}
p{margin:8px 0}
blockquote{margin:10px 0;padding:10px 16px;background:#f1f5ff;border-left:3px solid var(--brand);
  border-radius:0 8px 8px 0;color:#2b3650;font-size:14px}
blockquote p{margin:0}
ul,ol{margin:8px 0;padding-left:24px}
li{margin:3px 0}
hr{border:0;border-top:1px solid var(--line);margin:24px 0}
a{color:var(--brand);text-decoration:none}
a:hover{text-decoration:underline}
code{font-family:ui-monospace,"JetBrains Mono",Consolas,Menlo,monospace;font-size:13px;
  background:#eef1f6;padding:1px 6px;border-radius:5px;color:#263044}
pre.fence{background:var(--code-bg);color:var(--code-ink);padding:16px 18px;border-radius:10px;
  overflow-x:auto;font-size:13px;line-height:1.65;margin:10px 0}
pre.fence code{background:transparent;padding:0;color:inherit;font-size:13px}
.meta{color:var(--muted);font-size:13px;margin:4px 0 0}
.copy-note{font-size:12px;color:var(--muted);margin-top:8px}
.toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);
  background:#111827;color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;opacity:0;
  transition:all .2s;pointer-events:none}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
@media(max-width:560px){.wrap{padding:16px 12px 60px}article{padding:22px 18px;border-radius:10px}
  .topbar-in{padding:10px 14px}.btn-ghost{display:none}h1{font-size:19px}
  pre.fence{padding:13px 14px;border-radius:8px}pre.fence code{font-size:11.5px;line-height:1.6}}
`;

function buildHtml(c, md, promptText) {
  const englishName = c.name.replace(/^daisyui-/, "");
  const demoUrl = `${BASE}/components/${c.slug}/${c.entry}`;
  const body = mdToHtml(md);
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${c.title}（${englishName}）· AI 指令 · 灰墨 MoH_UI</title>
<meta name="description" content="把本页链接发给任意 AI，即可按灰墨审美生成「${c.title}」组件。${esc(c.description)}">
<link rel="alternate" type="text/markdown" href="${englishName}.md">
<link rel="describedby" href="../llms.txt">
<style>${PAGE_CSS}</style>
</head>
<body>
<div class="topbar"><div class="topbar-in">
  <a class="brand" href="../index.html">灰墨 MoH_UI<small>AI 组件指令</small></a>
  <span class="spacer"></span>
  <a class="btn btn-ghost" href="${demoUrl}" target="_blank" rel="noopener">完整教程</a>
  <button class="btn btn-primary" id="copy-btn" type="button">复制 AI 指令</button>
</div></div>
<div class="wrap"><article>
${body}
<p class="copy-note">提示：把本页链接（或点「复制 AI 指令」得到的纯文本）发给豆包 / Cursor / Claude Code 等任意 AI，它会结合你的项目生成代码。</p>
</article></div>
<div class="toast" id="toast">AI 指令已复制 ✓</div>
<script>
(function(){
  // 内联文本的尖括号已转义为 unicode，避免参考结构里的脚本闭合标签提前终止本脚本（运行时还原）
  var text = ${JSON.stringify(promptText).replace(/</g, "\\u003c")};
  function legacy(t){var ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.focus();ta.select();try{document.execCommand('copy')}catch(e){}ta.remove();}
  function copy(t){
    if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t).catch(function(){legacy(t)});
    return Promise.resolve(legacy(t));
  }
  var btn=document.getElementById('copy-btn'),toast=document.getElementById('toast');
  btn.addEventListener('click',function(){copy(text).then(function(){toast.classList.add('show');
    setTimeout(function(){toast.classList.remove('show')},1600);});});
})();
</script>
</body>
</html>
`;
}

/* ---------- 主流程 ---------- */
const data = loadSiteData();
const commonRules = loadCommonRules();
const aiDir = path.join(root, "ai");
fs.mkdirSync(aiDir, { recursive: true });

const list = (data.components || []).filter((c) => {
  const slug = c.slug.split("/").pop();
  return !onlySlug || slug === onlySlug;
});

if (onlySlug && list.length === 0) {
  console.error(`✗ 未找到组件：${onlySlug}（slug 取目录名，如 button、chart-card）`);
  process.exit(1);
}

const records = [];
for (const c of list) {
  const slug = c.slug.split("/").pop();
  const demoPath = path.join(root, "components", c.slug, c.entry);
  const html = fs.readFileSync(demoPath, "utf8");
  const scene = extractSceneName(html);
  const spec = extractPromptSpec(html);
  const heroHtml = extractHero(html);
  const promptText = buildPrompt(scene, spec, heroHtml, commonRules);
  const md = buildMarkdown(c, promptText);
  const page = buildHtml(c, md, promptText);
  fs.writeFileSync(path.join(aiDir, slug + ".md"), md, "utf8");
  fs.writeFileSync(path.join(aiDir, slug + ".html"), page, "utf8");
  records.push({ c, slug });
  console.log(`✓ ${slug}.md / ${slug}.html`);
}

/* 单组件样板模式：不生成索引 */
if (onlySlug) {
  console.log(`\n（单组件样板模式：仅生成 ${onlySlug}，未生成 llms.txt / llms-full.txt）`);
  process.exit(0);
}

/* ---------- llms.txt（根目录索引，按分类） ---------- */
const catOrder = data.categories && data.categories.length
  ? data.categories
  : ["基础", "表单", "反馈", "导航", "数据展示"];
const L = [];
L.push("# 灰墨 MoH_UI");
L.push("");
L.push("> 零依赖、纯 HTML/CSS、可直接复制给 AI 的中文前端组件库，基于 daisyUI 5（MIT）。每个组件都有一个 AI 友好页面，内含完整实现指令（真实场景 + 精确规格 + 参考结构 + 审美硬边界 + 交付自查）。把组件链接发给任意 AI（豆包 / Cursor / Claude Code 等），它即可抓取并按你的项目生成；页面里也有一键复制的纯文本指令。");
L.push("");
L.push(`- 组件总数：${data.components.length} 个（daisyUI 搬运件 ${data.components.filter((x) => x.origin === "third-party").length} 个 + 灰墨自研增强 ${data.components.filter((x) => x.origin !== "third-party").length} 个），主题 ${data.themes.length} 套（主题 AI 页随主题层重做后提供）`);
L.push(`- 全部组件完整指令一次抓取：[llms-full.txt](${BASE}/llms-full.txt)`);
L.push(`- 在线组件库（可交互预览）：${BASE}/site/components.html`);
L.push("- 组件页同目录下有同名 `.md`（纯文本版）与 `.html`（人看版），下方链接指向 `.md`");
L.push("");
for (const cat of catOrder) {
  const items = data.components.filter((c) => c.category === cat);
  if (!items.length) continue;
  L.push(`## ${cat}（${items.length}）`);
  L.push("");
  for (const c of items) {
    const slug = c.slug.split("/").pop();
    const en = c.name.replace(/^daisyui-/, "");
    const desc = c.description.replace(/\s+/g, " ").trim();
    L.push(`- [${c.title}（${en}）](${BASE}/ai/${slug}.md): ${desc}`);
  }
  L.push("");
}
L.push("## Optional");
L.push("");
L.push(`- [素材溯源与许可证](${BASE}/site/attributions.html): 每个组件的上游名称、原版地址与许可证登记`);
L.push(`- [AI 审美硬边界](${BASE}/site/rules.html): 组件背后的排版与审美规则`);
L.push("");
fs.writeFileSync(path.join(root, "llms.txt"), L.join("\n"), "utf8");

/* ---------- llms-full.txt（全部组件全文拼接） ---------- */
const full = [];
full.push("# 灰墨 MoH_UI · 组件 AI 指令全集（llms-full.txt）");
full.push("");
full.push(`> 本文件由脚本自动拼接，含全部 ${data.components.length} 个组件的完整 AI 指令。需要单个组件时优先用 llms.txt 里的链接以节省上下文；需要整体了解或批量生成时再读本文件。`);
full.push("");
for (const rec of records) {
  const { c, slug } = rec;
  const md = fs.readFileSync(path.join(aiDir, slug + ".md"), "utf8");
  full.push(md);
  full.push("\n---\n");
}
fs.writeFileSync(path.join(root, "llms-full.txt"), full.join("\n"), "utf8");

console.log(`\n✅ 完成：${records.length} 个组件 → ai/（.md + .html）`);
console.log(`   根目录 llms.txt（索引）+ llms-full.txt（${(fs.statSync(path.join(root, "llms-full.txt")).size / 1024).toFixed(1)} KB）`);
