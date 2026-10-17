# 暮色松（rose-pine · Rosé Pine）

Rosé Pine 完整移植：暖紫暮色 + 玫瑰金点缀，鸢尾紫主色，适合博客 / 杂志 / 阅读类站点与独立品牌、手作文创的暗色 UI。

> 色板出处：Rosé Pine（MIT，© 2023 Rosé Pine）— https://github.com/rose-pine/neovim/blob/main/lua/rose-pine/palette.lua （main 版：base `#191724`、surface `#1f1d2e`、overlay `#26233a`、text `#e0def4`、iris `#c4a7e7`、rose `#eb6f92`、foam `#9ccfd8`、pine `#31748f`、gold `#f6c177`）。本目录仅移植色板为 daisyUI 5 主题变量，未使用官方任何图标或品牌素材。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme=rose-pine]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：独立博客 / 长文杂志整页（站点头部 + SVG 头图 + 长文排版 + 右侧目录 + 相关文章），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="rose-pine">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当阅读类站点模板。
