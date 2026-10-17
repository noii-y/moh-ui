# 冷调商务 · 浅色（mo-gray）

灰阶克制的浅色商务主题。冷灰白三层底色 + 金属深灰主色 + 低饱和石墨蓝强调，适合 CRM / 客户管理 / 经营分析类后台。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：CRM 客户管理整页（侧栏 + 顶栏 + 漏斗指标 + 客户阶段看板 + 跟进时间线 + 漏斗转化），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-gray">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当 CRM 工作台模板。
