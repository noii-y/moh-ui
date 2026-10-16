# mo-slate · 纯净灰阶（浅色）

> 灰墨 MoH_UI 主题包。无彩色、零色相：从浅灰白到深炭的灰阶，无彩色主色，专注类产品（写作 / 效率 / 文档 / 知识库）。
> 风格参考来源：shadcn.io 主题 "Clean Slate"（<https://www.shadcn.io/theme/clean-slate>，MIT 社区主题站）。色板为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 写作工具、笔记、知识库、文档平台
- 需要"界面消失、内容优先"的效率类 SaaS
- 不希望被主色干扰的通用后台（商务 / 金融 / 政务中性场合）

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`（路径按项目结构调整）：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景变浅灰白、正文深炭、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#f8f8f8`，卡片 `#ffffff`，主文字 `#1a1a1a`，次级文字 `#6b6b6b`
- 主色 `#262626`（深炭，白字对比 15:1）；状态色用标准语义色（绿/橙/红）
- 字号阶 12/13/14/16/20/24，间距 8px 网格，圆角 4/6/8，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Clean Slate（shadcn.io，MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
