#!/usr/bin/env node
/* ============================================================
 * 灰墨 · AI 页「复制 AI 指令」按钮自检脚本
 * 用法：node scripts/qa-copy.mjs ai/button.html
 *       node scripts/qa-copy.mjs ai/chart-card.html
 * 结论：按钮真点击后捕获到剪贴板文本、且内容包含开场白/场景/参考结构/
 *       审美规则/交付要求，打印 COPY_OK 并退出码 0；否则退出码 1。
 *       整页截图（含复制出的全文）存到 D:\Temp\copy-<名>.png。
 * 原理：scripts/qa/copy-harness.html 同源 iframe 加载 AI 页，桩接
 *       navigator.clipboard.writeText 捕获文本后触发按钮真点击（隔离世界的
 *       自动化浏览器点不动主世界监听，同源 iframe 探针可绕过）。
 * ============================================================ */
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join, resolve, basename } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const target = process.argv[2];
if (!target) {
  console.error("用法：node scripts/qa-copy.mjs ai/<name>.html");
  process.exit(2);
}

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const harness = pathToFileURL(join(repoRoot, "scripts", "qa", "copy-harness.html")).href;
const harnessUrl = harness + "?p=" + encodeURIComponent(target);
const name = basename(target).replace(/\.html$/, "");
const shot = join(tmpdir(), "copy-" + name + ".png");
const userDir = join(tmpdir(), "moh-edge-copy-" + process.pid);

const base = [
  "--headless=new",
  "--disable-gpu",
  "--allow-file-access-from-files",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  "--user-data-dir=" + userDir,
  "--virtual-time-budget=6000",
];

function run(extra) {
  const r = spawnSync(EDGE, base.concat(extra), { encoding: "utf8", maxBuffer: 60 * 1024 * 1024 });
  return r.stdout || "";
}

// 1) 截图（先跑一次，给 iframe 与 setTimeout 足够加载时间）
run(["--window-size=1100,1000", "--screenshot=" + shot, harnessUrl]);
// 2) dump DOM 读横幅判定
const dom = run(["--window-size=1100,1000", "--dump-dom", harnessUrl]);
const m = dom.match(/<div id="banner"[^>]*class="(ok|bad)"[^>]*>([\s\S]*?)<\/div>/);

if (!m) {
  console.error("未能从探针读取结果（页面可能未加载），请检查路径：" + target);
  process.exit(2);
}
const ok = m[1] === "ok";
const text = m[2].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
console.log(text);
console.log("截图：" + shot);
process.exit(ok ? 0 : 1);
