# 林间（everforest）

柔绿暖色的护眼浅色主题。暖纸白底（`#fdf6e3`）+ 浅卡其（`#f4f0d9`）+ 森林绿主色（`#8da101`）与柔蓝（`#3a94c5`），对比度刻意压低但正文仍清晰，适合笔记、长文写作、个人知识管理类前台页面。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme="everforest"]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：虚构笔记应用「林间笔记 Grove Notes」整页（顶栏导航 + 三栏应用简影 SVG + 四张功能卡 + 示例长文 + 三张定价卡），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="everforest">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当知识管理工具前台模板。

## 来源与署名

- 色值取自 [sainnhe/everforest](https://github.com/sainnhe/everforest) 官方 **Medium 浅色**色板（`autoload/everforest.vim` 的 `everforest#get_palette`：bg0 `#fdf6e3`、bg1 `#f4f0d9`、bg3 `#e6e2cc`、fg `#5c6a72`、green `#8da101`、blue `#3a94c5`、orange `#f57d26`、aqua `#35a77c`、yellow `#dfa000`、red `#f85552`、bg5 `#bdc3af`），许可证 **MIT** © 2019 sainnhe。
- 按 MIT 义务：保留原作者版权声明（见本目录 `LICENSE`），本文件为**修改后再分发**（将 Vim 颜色主题色板映射为 daisyUI 5 的 `--color-base-*` / `--color-primary` 等组件变量）。
- 改造：圆角放大为纸感取向（box 0.75rem）；主按钮绿配深墨字底以保证对比度；`demo.html` 为新写的虚构笔记应用案例，界面、短文、价格与功能均为示例数据。
