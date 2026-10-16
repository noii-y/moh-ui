# mo-brutal · 粗野主义（浅色）

> 灰墨 MoH_UI 主题包。3px 厚黑边、直角、无模糊硬阴影、蓝红撞色——给品牌感强的产品一份"有态度的界面"。
> 风格参考来源：shadcn.io 主题 "Neo Brutalism"（<https://www.shadcn.io/theme/neo-brutalism>，MIT 社区主题站）。色板为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 独立开发者工具、个人品牌站点后台
- 设计感强的新消费 / 文创 / 社区类产品
- 需要"一眼记住"的差异化界面

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景近白、黑厚边、直角硬阴影、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#f7f7f7`，卡片 `#ffffff`，主文字 `#111111`，次级文字 `#555555`
- 主色 `#1e3a8a`（海军蓝，白字对比 9.6:1）；描边 `#111111` 宽 3px；圆角 0；硬阴影
- 字号阶 12/13/14/16/20/24，间距 8px 网格，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Neo Brutalism（shadcn.io，MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
