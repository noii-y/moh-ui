# 粗野主义（mo-brutal · 浅色）

3px 厚黑边、直角、零模糊硬阴影、海军蓝 + 撞色红的个性品牌向主题。适合个人品牌站、独立产品、设计感强的营销落地页。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、边框、硬阴影取向）
- `demo.html` — 完整页面案例：个性品牌落地页（顶栏 + 超大 hero + 特性卡 + 三档价格 + 订阅 CTA + 黑底页脚），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-brutal">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 里的 `.brut` / `.brut-sm` 硬阴影类（`border:3px solid #111; box-shadow:6px 6px 0 #111`）可一并复制到自己的项目，让卡片与按钮呈现粗野主义气质。
