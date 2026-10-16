#!/usr/bin/env node
/**
 * 灰墨 MoH_UI · 展示站链接验证
 * 扫描仓库根 index.html 与 site 目录下所有 HTML 中的 href/src 相对引用，
 * 解析为真实路径并检查文件是否存在。
 * 用法：node scripts/check-site.mjs
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const issues = [];
let checked = 0;

function collectHtmlFiles(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) collectHtmlFiles(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function resolveRef(filePath, ref) {
  if (/^(https?:|mailto:|#|data:)/.test(ref)) return null; // 外部/锚点/内联，跳过
  const base = dirname(filePath);
  return resolve(base, decodeURIComponent(ref.split(/[?#]/)[0]));
}

const htmlFiles = [join(root, "index.html"), ...collectHtmlFiles(join(root, "site"))];

for (const f of htmlFiles) {
  let html = readFileSync(f, "utf8");
  // 剔除代码示例块（给 AI/用户看的示例代码，非真实引用）
  html = html.replace(/<(code|pre)[\s\S]*?<\/\1>/gi, "");
  const refs = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (ref.includes("+")) continue; // JS 动态拼接，跳过
    const target = resolveRef(f, ref);
    if (!target) continue;
    checked++;
    if (!existsSync(target)) issues.push(`${f.replace(root + "\\", "").replace(root + "/", "")} → 缺失: ${ref}`);
  }
}

if (issues.length) {
  console.log(`✗ ${issues.length} 个引用缺失（共检查 ${checked} 个）`);
  issues.forEach((i) => console.log("  " + i));
  process.exit(1);
} else {
  console.log(`✓ 展示站链接全部有效（共检查 ${checked} 个引用，${htmlFiles.length} 个 HTML）`);
}
