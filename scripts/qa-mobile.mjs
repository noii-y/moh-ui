#!/usr/bin/env node
/* ============================================================
 * 灰墨 · 移动端 390px 自检脚本
 * 用法：node scripts/qa-mobile.mjs components/daisyui/input/demo.html
 *       node scripts/qa-mobile.mjs components/daisyui/input/demo.html --height 2600
 * 结论：页面在 390px 宽下无横向溢出则打印 MOBILE OK 并退出码 0；
 *       否则列出撑宽元素并退出码 1。同时把整页截图存到 D:\Temp\m-<组件>.png。
 * 说明：无头整窗 --window-size=390 会出现“右侧文字被裁”的假象（布局视口与截图
 *       宽度不一致）；本脚本改用真实 390px iframe 探针，结果可信。
 * ============================================================ */
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join, resolve, basename } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, ".."); // 本脚本位于 scripts/，上一级即仓库根

const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith("--"));
if (!target) {
  console.error("用法：node scripts/qa-mobile.mjs <相对仓库的 demo.html 路径> [--height 2600]");
  process.exit(2);
}
const heightArg = args.indexOf("--height");
const H = heightArg >= 0 ? Number(args[heightArg + 1]) : 2600;

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const harness = pathToFileURL(join(repoRoot, "scripts", "qa", "mobile-harness.html")).href;
const harnessUrl = harness + "?p=" + encodeURIComponent(target);
const shotDir = process.env.TEMP || tmpdir();
const shot = join(shotDir, "m-" + basename(dirname(target)) + ".png");
const userDir = join(tmpdir(), "moh-edge-" + process.pid);

const base = [
  "--headless=new",
  "--disable-gpu",
  "--allow-file-access-from-files",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  "--user-data-dir=" + userDir,
  "--virtual-time-budget=2500",
];

function run(extra) {
  const r = spawnSync(EDGE, base.concat(extra), { encoding: "utf8", maxBuffer: 40 * 1024 * 1024 });
  return r.stdout || "";
}

// 1) 截图
run(["--window-size=410," + H, "--screenshot=" + shot, harnessUrl]);

// 2) dump DOM 读横幅判定
const dom = run(["--window-size=410," + H, "--dump-dom", harnessUrl]);
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
