# mo-neon · 霓虹（深色）

> 灰墨 MoH_UI 主题包。深空底、深青主色、hover 亮青霓虹——给未来科技感的产品一份"赛博氛围"。
> 风格参考来源：shadcn.io 主题 "Cyberpunk"（<https://www.shadcn.io/theme/cyberpunk>，MIT 社区主题站）。色板为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 科技 / 极客向产品的控制台与展示页
- 游戏工具、Web3、数据可视化平台
- 夜间氛围强的品牌后台

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景深空黑、主文字近白微青、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#0a0e14`，卡片 `#111722`，主文字 `#eaf0f8`，次级文字 `#8fa0b8`
- 主色 `#0e7490`（深青，白字对比 5.2:1），hover 霓虹亮青 `#22d3ee`
- 字号阶 12/13/14/16/20/24，间距 8px 网格，圆角 3/5/8，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Cyberpunk（shadcn.io，MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
