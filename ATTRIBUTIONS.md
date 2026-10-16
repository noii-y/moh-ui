# 素材来源清单（ATTRIBUTIONS）

> 灰墨 MoH_UI 是开源、非商用项目。凡引入的外部素材（主题 / 组件 / 区块），按 `docs/license-policy.md` 逐项核对许可证后在此登记，并与各资源自带 `moh.json` 的 `source` 字段保持一致。
> 维护规则：新增资源时，同时更新本文件与对应 `moh.json`；`scripts/check-attributions.mjs` 强制校验。

## 汇总

| 资源 | 类型 | 来源 | 许可证 | 原地址 | 改动说明 |
|---|---|---|---|---|---|
| mo-dark（墨夜） | 主题 | 自研（noii-y） | MIT | — | 风格取向参考 Linear 公开 token（见 themes/mo-dark/tokens.css 头注释） |
| mo-light（宣纸） | 主题 | 自研（noii-y） | MIT | — | 风格取向参考 Stripe 公开 token（见 themes/mo-light/tokens.css 头注释） |
| mo-slate（纯净灰阶） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 shadcn Clean Slate（色板自研，见 moh.json inspiration） |
| mo-gray（灰阶中性商务） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 shadcn Graphite（色板自研，见 moh.json inspiration） |
| mo-pastel（粉彩） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 shadcn Marshmallow（色板自研，见 moh.json inspiration） |
| mo-mood（暗黑开发者） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 shadcn Cosmic Night（色板自研，见 moh.json inspiration） |
| mo-brutal（粗野主义） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 shadcn Neo Brutalism（色板自研，见 moh.json inspiration） |
| mo-neon（霓虹） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 shadcn Cyberpunk（色板自研，见 moh.json inspiration） |
| mo-zhongshi（新中式后台） | 主题 | 自研（noii-y） | MIT | — | 中国风设计理念（配色自研，见 moh.json inspiration） |
| mo-classic（经典Bootstrap） | 主题 | 自研（noii-y） | MIT | — | 风格灵感参考 Tabler/AdminLTE（色板自研，见 moh.json inspiration） |
| mo-rules（规则边界包） | 规则 | 自研（noii-y） | MIT | — | 方法论参考 Taste Skill（规则化审美），已中文化并改写为后台场景 |
| button / input / select / table / card / form / navbar / sidebar / tag / modal | 组件 | 自研（noii-y） | MIT | — | 全部原创，零依赖，类名 moh- 前缀 |
| breadcrumb / pagination / empty / skeleton / tabs / drawer / toast / stat-card | 组件 | 自研（noii-y） | MIT | — | 阶段 C 基础组件，零依赖，行为标准参考 shadcn/Headless（见 docs/component-spec-c.md） |
| chart-card / code-block / drag-sort | 组件 | 自研（noii-y） | MIT | — | 阶段 C 增强组件；chart-card 依赖 ECharts（CDN）、code-block 依赖 highlight.js（CDN）、drag-sort 零依赖 |

## 引入外部素材时的登记模板

```markdown
| 资源名 | 类型 | 第三方来源 | 许可证 | 原地址 | 改动说明 |
|---|---|---|---|---|---|
| mo-xxx | 主题/组件/区块 | 原项目名 | 如 MIT | <原仓库地址> | 转换 --moh-* 变量 / 重写 base.css / 新增 preview 等 |
```

## 方法论参考（非代码素材，不影响许可证）

- Taste Skill（<https://github.com/Leonxlnx/taste-skill>，MIT）：规则化审美、四步闭环、三旋钮 → 规则包 v0 的方法来源
- shadcn/ui registry（<https://ui.shadcn.com/docs/registry>，MIT）：`moh.json` 元数据机制参照
- Aceternity UI（<https://ui.aceternity.com>）："基础组件 vs 区块"分层思路参照
- StyleSeed（<https://github.com/bitjaru/styleseed>）：`themes/<name>/` 目录架构参照
- shadcn.io 主题页（<https://www.shadcn.io/theme>，MIT 社区主题站）：阶段 B 首批 8 套主题的风格描述来源（色板均为灰墨自研）

## 校验状态

- 最近校验：2026-10-16，`node scripts/check-attributions.mjs` 全过（32 个 moh.json 合规）
