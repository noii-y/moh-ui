# 墨夜 · 深色（mo-dark）

Linear 风格暗色数据看板主题。近黑冷灰 + 克制靛蓝主色，适合数据看板 / 监控类后台。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：数据看板整页（顶栏 + 侧栏 + 指标卡 + 图表 + 订单表），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-dark">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当后台页模板。
