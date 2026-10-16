#!/usr/bin/env node
/**
 * 灰墨 · MoH_UI — 清单生成脚本
 * 扫描 themes/ 与 components/ 目录，生成 index.json（主题清单 + 组件清单）
 * 用法：node scripts/build-index.mjs
 * 输出：index.json（仓库根目录）
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const themesDir = join(root, "themes");
const componentsDir = join(root, "components");

/** 读取目录下文件名列表（同步） */
function listDir(dir) {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

/** 读取主题元信息（优先 README 首行，兜底用文件名） */
function readThemeMeta(themeName) {
  const readmePath = join(themesDir, themeName, "README.md");
  if (existsSync(readmePath)) {
    const firstLine = readFileSync(readmePath, "utf8").split("\n")[0] || "";
    return firstLine.replace(/^#+\s*/, "").trim();
  }
  return themeName;
}

const themes = listDir(themesDir).map((name) => {
  const hasTokens = existsSync(join(themesDir, name, "tokens.css"));
  const hasPreview = existsSync(join(themesDir, name, "preview.html"));
  return {
    name,
    display: readThemeMeta(name),
    files: { tokens: hasTokens, preview: hasPreview },
  };
});

const components = listDir(componentsDir).map((name) => {
  const htmlPath = join(componentsDir, name, "index.html");
  const hasHtml = existsSync(htmlPath);
  return { name, hasHtml };
});

const index = {
  generatedAt: new Date().toISOString(),
  project: "moh-ui",
  themes,
  components,
};

const outPath = join(root, "index.json");
writeFileSync(outPath, JSON.stringify(index, null, 2) + "\n", "utf8");
console.log(`[build-index] 主题 ${themes.length} 个，组件 ${components.length} 个 → index.json`);
