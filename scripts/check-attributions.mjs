#!/usr/bin/env node
/**
 * 灰墨 MoH_UI · 素材清单完整性校验（check-attributions）
 * 扫描 themes 与 components 各子目录的 moh.json、rules 顶层 moh.json，
 * 按 docs/moh-json-spec.md 第 3 节校验：
 *   1. name/type/title/description/source.origin/source.license 必填
 *   2. origin=third-party 时 upstream/url/changes 必填
 *   3. type=theme 时 audit 必填且 ≥90
 *   4. name 全局唯一
 *   5. styleTags 非空数组
 * 用法：node scripts/check-attributions.mjs
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const names = new Map();
const issues = [];
let count = 0;

function collectJson(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  // 递归收集任意层级的 moh.json（支持 components/daisyui/<name>/ 等命名空间）
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      const sub = join(d, e.name);
      const p = join(sub, "moh.json");
      if (existsSync(p)) out.push(p);
      walk(sub);
    }
  };
  walk(dir);
  return out;
}

// rules 规则包是单个整体资源（rules/moh.json），非子目录模式
function collectTopJson(dir) {
  const p = join(dir, "moh.json");
  return existsSync(p) ? [p] : [];
}

const dirs = ["themes", "components"].map((d) => join(root, d));
const files = [...dirs.flatMap(collectJson), ...collectTopJson(join(root, "rules"))];

for (const f of files) {
  count++;
  const rel = f.replace(root + "\\", "").replace(root + "/", "");
  let m;
  try {
    m = JSON.parse(readFileSync(f, "utf8"));
  } catch (e) {
    issues.push(`${rel}: JSON 解析失败（${e.message}）`);
    continue;
  }

  const requireField = (value, label) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      issues.push(`${rel}: 缺少必填字段 ${label}`);
    }
  };
  requireField(m.name, "name");
  requireField(m.type, "type");
  requireField(m.title, "title");
  requireField(m.description, "description");

  if (m.source) {
    requireField(m.source.origin, "source.origin");
    requireField(m.source.license, "source.license");
    if (m.source.origin === "third-party") {
      requireField(m.source.upstream, "source.upstream");
      requireField(m.source.url, "source.url");
      requireField(m.source.changes, "source.changes");
    }
  } else {
    issues.push(`${rel}: 缺少必填字段 source（素材溯源）`);
  }

  if (m.type === "theme") {
    if (typeof m.audit !== "number") {
      issues.push(`${rel}: type=theme 缺少 audit 分数`);
    } else if (m.audit < 90) {
      issues.push(`${rel}: 体检分 ${m.audit} < 90，不允许发布`);
    }
  }

  if (!Array.isArray(m.styleTags) || m.styleTags.length === 0) {
    issues.push(`${rel}: styleTags 必须为非空数组`);
  }

  if (m.name) {
    if (names.has(m.name)) {
      issues.push(`${rel}: name "${m.name}" 与 ${names.get(m.name)} 重复`);
    } else {
      names.set(m.name, rel);
    }
  }
}

if (issues.length) {
  console.log(`✗ 素材清单校验失败：${issues.length} 个问题（共 ${count} 个 moh.json）`);
  issues.forEach((i) => console.log("  " + i));
  process.exit(1);
} else {
  console.log(`✓ 素材清单校验通过：${count} 个 moh.json 全部合规（name 全局唯一、溯源与许可证齐全）`);
}
