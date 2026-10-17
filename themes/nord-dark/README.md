# 北极冷（nord-dark · Nord 完整暗色移植）

Nord 完整暗色 port：极地冷灰蓝、低饱和、克制，冰蓝主色，适合邮件 / 日历等效率工具、IDE 与知识管理类暗色 UI。

> 色板出处：Nord（MIT，© 2016-present Sven Greb）— https://www.nordtheme.com/docs/colors-and-palettes （Polar Night nord0 `#2e3440` / nord1 `#3b4252` / nord2 `#434c5e` / nord3 `#4c566a`；Snow Storm nord5 `#e5e9f0`；Frost nord8 `#88c0d0` / nord9 `#81a1c1` / nord10 `#5e81ac`；Aurora nord11 `#bf616a` / nord13 `#ebcb8b` / nord14 `#a3be8c`）。daisyUI 官方自带的 `nord` 是浅色简化版，本目录是完整 16 色暗色版，因此命名为 `nord-dark`。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme=nord-dark]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：邮件客户端三栏整页（标签侧栏 + 收件箱列表 + 邮件阅读窗），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="nord-dark">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当效率工具页面模板。
