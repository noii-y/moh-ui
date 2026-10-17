# 极客紫 · OSS 完整版（dracula-oss）

Dracula 完整 OSS 色板的开发者主题。深紫灰底（`#282a36`）+ 霓虹紫 / 粉 / 青语法色，适合代码编辑器、开发者工具、技术社区类暗色页面。

> 为什么叫 `dracula-oss`：daisyUI 官方自带一套简化映射的 `data-theme="dracula"`；本目录收录的是 Dracula 官方 README 里的**完整 OSS 色板**（12 色），以 `-oss` 后缀区分，不与官方重名。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme="dracula-oss"]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：开源代码协作平台整页（仓库头 + 文件树 + 代码预览 + README 摘要 + PR/Issue 列表），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="dracula-oss">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当代码平台页模板。

## 来源与署名

- 色值逐字取自 [Dracula 官方 OSS 色板](https://github.com/dracula/dracula-theme#color-palette-oss)（Background `#282a36`、Foreground `#f8f8f2`、Purple `#bd93f9`、Pink `#ff79c6`、Cyan `#8be9fd`、Green `#50fa7b`、Yellow `#f1fa8c`、Red `#ff5555`、Orange `#ffb86c`），许可证 MIT © 2023 Dracula Theme。
- 改造：将 12 色语法色映射为 daisyUI 5 的 `--color-base-*` / `--color-primary` 等组件变量，base-300 取 `#191a21`、neutral 取官方 Selection `#44475a`；圆角调小以贴合开发者终端气质；`demo.html` 为新写的虚构开源协作平台案例，未使用任何官方品牌标识。
