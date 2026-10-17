# 宣纸 · 浅色（mo-light）

Stripe 风格浅色 SaaS 控制台主题。浅灰白底 + 白色卡片 + 克制蓝主色，适合 SaaS 控制台 / 计费页 / 表单密集型后台。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：SaaS 计费控制台整页（侧栏 + 顶栏 + 套餐卡 + 用量与密钥 + 账单表 + 支付方式），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-light">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当后台页模板。
