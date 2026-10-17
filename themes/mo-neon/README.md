# 霓虹赛博（mo-neon · 深色）

深空底 + 深青实色按钮 + 克制亮青霓虹发光的科技向主题。适合科技活动页、新品发布页、开发者大会与夜间氛围的产品站。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、小圆角、1px 细边框）
- `demo.html` — 完整页面案例：科技活动发布页（顶栏 + 网格 hero + 静态倒计时 + 亮点卡 + 议程表 + 购票 CTA），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-neon">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 里的 `.neon`（`text-shadow:0 0 8px rgba(34,211,238,.55)`）与 `.neon-border`（描边发光）类可一并复制，发光只给关键词、徽章与主 CTA 使用，不要整页铺。倒计时的静态数字块用 daisyUI `.countdown` 纯 CSS 渲染，真实走时需 JS 每秒更新 `--value`。
