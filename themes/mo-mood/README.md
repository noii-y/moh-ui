# mo-mood · 暗黑开发者（深色）

> 灰墨 MoH_UI 主题包。深空底、宇宙蓝主色、低光害，让开发者工具和数据产品在夜间也看得舒服。
> 风格参考来源：shadcn.io 主题 "Cosmic Night"（<https://www.shadcn.io/theme/cosmic-night>，MIT 社区主题站）。色板为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 开发者控制台、日志查看器、API 调试工具
- 数据看板 / BI 的夜间模式
- 任何"越暗越专业"的工具型产品

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景深空近黑、主文字近白微蓝、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#0f1117`，卡片 `#151822`，主文字 `#e6e8ee`，次级文字 `#8b93a8`
- 主色 `#4a63e0`（宇宙蓝，白字对比 5.1:1）；状态色用标准深色语义色
- 字号阶 12/13/14/16/20/24，间距 8px 网格，圆角 4/6/8，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Cosmic Night（shadcn.io，MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
