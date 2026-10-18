# 素材来源清单（ATTRIBUTIONS）

> 灰墨 MoH_UI 是开源项目。每个主题、组件的原作者、许可证、原地址、改动说明都登记在各自目录的 `moh.json` 里，`scripts/check-attributions.mjs` 对其做强制校验。
>
> **完整、逐套的来源清单（45 套主题 + 68 个组件）由数据自动生成，见在线溯源页：[site/attributions.html](site/attributions.html)。** 本文件不再手工维护逐条清单，以免与实际脱节；这里只登记不适合放进单个 `moh.json` 的库级来源与方法论参考。

## 库级来源

| 资源 | 类型 | 来源 | 许可证 | 原地址 | 说明 |
|---|---|---|---|---|---|
| daisyui.css / daisyui-themes.css | 运行时底座 | daisyUI（Pouya Saadeghi） | MIT | https://github.com/saadeghi/daisyui | 从 npm 包 daisyui@5.7.50 原样复制，未修改；见 `vendor/LICENSE-daisyui.txt` |
| components/daisyui/* 各组件 demo | 组件 | daisyUI（Pouya Saadeghi） | MIT | https://daisyui.com/components/ | 搬运官网 class 版 demo，补零依赖工具类、中文业务文案与教程；逐套来源与改动见各组件 `moh.json` |
| 外部收录主题（catppuccin、dracula、nord、rose-pine、solarized、tokyo-night、kanagawa、gruvbox、github-light、everforest） | 主题 | 各开源项目 | 见各自目录 | 见各主题 `moh.json` | 保留原许可证与署名，色板映射到 daisyUI 变量；其中 tokyo-night 为 Apache-2.0，目录附完整 LICENSE |

> 灰墨二创主题（mo-*）与自研组件（`chart-card`、`code-block`、`date-range`、`drag-sort`、`empty`）均为 noii-y 原创，MIT 许可。`chart-card` 经 CDN 引入 ECharts、`code-block` 经 CDN 引入 highlight.js，依赖说明见各自 README 与 `moh.json`。

## 新增外部素材时怎么登记

在对应目录的 `moh.json` 的 `source` 字段登记即可，在线溯源页会自动收录：

```json
{
  "origin": "third-party",
  "upstream": "原项目名",
  "url": "原仓库地址",
  "license": "MIT",
  "changes": "做了哪些改动：映射到 daisyUI [data-theme] 变量 / 换成中文业务文案 / 整页案例重写等"
}
```

## 方法论参考（非代码素材，不影响许可证）

- Taste Skill（<https://github.com/Leonxlnx/taste-skill>，MIT）：规则化审美、四步闭环 → `rules/` 规则包的方法来源
- shadcn/ui registry（<https://www.ui.shadcn.com/docs/registry>，MIT）：`moh.json` 元数据机制参照
- Aceternity UI（<https://www.ui.aceternity.com>）："基础组件 vs 区块"分层思路参照
- StyleSeed（<https://github.com/bitjaru/styleseed>）：`themes/<name>/` 目录架构参照

## 校验

- `node scripts/check-attributions.mjs`：校验全部 `moh.json` 的来源、许可证、必填字段与 name 唯一，通过时打印合规数量（随库增长，不写死）。
- 许可证引入流程与对照表见 `docs/license-policy.md`。
