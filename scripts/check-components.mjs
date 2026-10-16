#!/usr/bin/env node
/**
 * 灰墨 · MoH_UI — 组件自检脚本
 * 检查 components/ 下每个单文件组件（index.html）：
 *   1. 样式无硬编码颜色（必须用 var(--moh-*)）
 *   2. 类名统一 moh- 前缀（demo 类豁免）
 *   3. 有 :focus / :focus-visible 态
 *   4. 无 lorem ipsum 占位
 *   5. 引用的 CSS 变量均为 --moh-* 命名空间
 * 用法：node scripts/check-components.mjs           # 检查全部组件
 *       node scripts/check-components.mjs button    # 检查单个组件
 * 输出：逐项 ✓/✗ + 汇总；任一失败 exit 1
 */
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const compDir = join(root, "components");
const target = process.argv[2];

function checkOne(name) {
  const htmlPath = join(compDir, name, "index.html");
  if (!existsSync(htmlPath)) return { name, ok: false, issues: ["缺少 index.html"] };

  const html = readFileSync(htmlPath, "utf8");
  const style = (html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || "";
  const issues = [];

  // 1. 硬编码颜色（var() 内联参数中的 rgba 允许，如阴影）
  const hardColors = (style.match(/#[0-9a-fA-F]{3,8}\b/g) || []).filter(
    (c) => !c.toLowerCase().startsWith("#fff")
  );
  if (hardColors.length) {
    issues.push(`样式含硬编码颜色 ${[...new Set(hardColors)].join(", ")}（应改用 var(--moh-*)）`);
  }

  // 2. 类名前缀（moh- 与 demo/md- 豁免；language-*、hljs-* 为第三方库约定类名）
  const classes = [
    ...new Set(
      [...html.matchAll(/class="([^"]+)"/g)]
        .flatMap((m) => m[1].split(/\s+/))
        .filter(
          (c) =>
            c &&
            !c.startsWith("moh-") &&
            !c.startsWith("demo") &&
            !c.startsWith("md-") &&
            !c.startsWith("language-") &&
            !c.startsWith("hljs-")
        )
    ),
  ];
  if (classes.length) issues.push(`类名未用 moh- 前缀: ${classes.join(", ")}`);

  // 3. focus 态
  if (!/:focus-visible|:focus\b/.test(style)) issues.push("缺少 :focus / :focus-visible 态");

  // 4. lorem
  if (/lorem\s+ipsum/i.test(html)) issues.push("含 lorem ipsum 占位文本");

  // 5. 变量命名空间
  const vars = [...new Set([...style.matchAll(/var\(\s*(--[a-z0-9-]+)/gi)].map((m) => m[1]))];
  const badVars = vars.filter((v) => !v.startsWith("--moh-"));
  if (badVars.length) issues.push(`引用了非 moh 变量: ${badVars.join(", ")}`);

  return { name, ok: issues.length === 0, issues };
}

let names;
if (target) {
  names = [target.replace(/^components[\\/]/, "").replace(/[\\/]$/, "")];
} else {
  try {
    names = readdirSync(compDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    names = [];
  }
}

const results = names.map(checkOne);
let pass = true;
for (const r of results) {
  console.log(`${r.ok ? "✓" : "✗"} ${r.name}${r.issues.length ? " → " + r.issues.join("；") : ""}`);
  if (!r.ok) pass = false;
}
console.log(`\n${results.filter((r) => r.ok).length}/${results.length} 通过`);
process.exit(pass ? 0 : 1);
