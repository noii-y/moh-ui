# 开源门户（github-light）

中性灰蓝的开发者门户主题。纯白底（`#ffffff`）+ 浅灰卡片（`#f6f8fa`）+ 链接蓝（`#0969da`）与 GitHub 主按钮绿（`#1f883d`），适合开源项目文档、开发者门户、代码工具类浅色页面。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme="github-light"]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：虚构开源 CI 引擎「开流 OpenFlow」整页（顶栏导航 + Hero 与项目指标 + 六张特性卡 + 终端安装命令 + 三条更新日志 + 社区贡献 CTA），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="github-light">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当开发者门户页模板。

## 来源与署名

- 色值取自 [primer/github-vscode-theme](https://github.com/primer/github-vscode-theme) 的 GitHub Light 色板及其依赖 [@primer/primitives](https://github.com/primer/primitives) 官方 light 令牌（canvas.default `#ffffff`、canvas.subtle `#f6f8fa`、border.default `#d1d9e0`、fg.default `#1f2328`、fg.muted `#59636e`、accent `#0969da`、success.emphasis `#1f883d`、done `#8250df`、attention `#9a6700`、danger `#cf222e`），许可证 **MIT** © 2020 Primer。
- 按 MIT 义务：保留原作者版权声明（见本目录 `LICENSE`），本文件为**修改后再分发**（将 VS Code 主题色板映射为 daisyUI 5 的 `--color-base-*` / `--color-primary` 等组件变量）。
- 改造：圆角调小以贴合文档门户气质；`demo.html` 为新写的虚构开源项目门户案例，项目名、指标、版本号与更新内容均为示例数据，未使用 GitHub 章鱼猫等真实品牌资产。
