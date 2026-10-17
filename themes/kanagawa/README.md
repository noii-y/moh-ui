# 神奈川（kanagawa）

墨彩 + 靛蓝 + 朱赤的日系主题。近墨黑底（`#1F1F28`）+ 靛蓝主色与朱赤克制点睛，灵感来自葛饰北斋《神奈川冲浪里》，适合日式文化品牌、茶器文具、艺术展与高级东方美学页面。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme="kanagawa"]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：虚构日式茶器与艺术品牌「浪见屋 NAMAMIYA」整页（自绘线稿海浪 Hero + 三件器物卡 + 展讯卡 + 匠人工序 + 到店预约 CTA 与虚构门店），全部用 daisyUI 组件拼装、零依赖、零 JS
- `LICENSE` — 上游许可证全文（MIT）

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="kanagawa">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当日式品牌落地页模板。

## 来源与署名

- 色值取自 [rebelot/kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) 官方 wave 深色主题色板（[colors.lua](https://github.com/rebelot/kanagawa.nvim/blob/master/lua/kanagawa/colors.lua)：sumiInk `#1F1F28`、waveBlue1 `#223249`、sumiInk0 `#16161D`、fujiWhite `#DCD7BA`、crystalBlue `#7E9CD8`、oniViolet `#957FB8`、peachRed `#FF5D62`、springBlue `#7FB4CA`、springGreen `#98BB6C`、roninYellow `#FF9E3B`、samuraiRed `#E82424`），许可证 **MIT** © 2021 Tommaso Laurenzi（LICENSE 全文见本目录）。
- 改造：将 Vim 主题色板映射为 daisyUI 5 的 `--color-base-*` / `--color-primary` 等组件变量，圆角调小以贴合日式克制气质；`demo.html` 为新写的虚构日式品牌案例，品牌、器款、价格、展览与门店均为示例数据。
