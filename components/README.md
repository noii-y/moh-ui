# components/

可搬运的组件库。每个组件都是「提示词三件套」：`demo.html`（真实业务成品 + 中文教程）、`README.md`（给看代码的人）、`moh.json`（溯源元数据）。

- `daisyui/` —— 63 个 daisyUI 5 搬运件，覆盖按钮、输入、表单、导航、数据展示、弹窗反馈、区块、特效等官方主要形态。类名就是 daisyUI 官方 class，底座是纯 CSS 的 `vendor/daisyui.css`，不用框架和构建。
- 根目录下的 5 个目录 —— 灰墨自研增强件：`chart-card`（ECharts，CDN）、`code-block`（highlight.js，CDN）、`date-range`（零依赖）、`drag-sort`（零依赖）、`empty`（零依赖）。它们的 `moh.json` 标 `origin:"original"`。
- `_legacy/` —— 已下线的旧版单文件组件（`moh-` 前缀 + `--moh-*` 变量体系），仅存档，不进展示站扫描，也不要参考或复活。

组件页的主用法是复制「AI 提示词」发给 AI，「复制成品 HTML」是进阶辅助。统一的制作与验收规范见仓库根目录 `AGENTS.md`，整库入口与在线预览见根目录 `README.md`。
