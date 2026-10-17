# 经典 Bootstrap 后台风 · 浅色（mo-classic）

Tabler / AdminLTE 式经典后台节奏。经典深蓝 + 灰蓝白底 + 小圆角，人人熟悉的管理后台观感，适合存量项目迁移 / 通用 CRM、ERP 后台。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：用户管理后台整页（实心底顶栏 + 分组侧栏 + 筛选表单 + 用户表 + 分页 + 新增用户表单），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-classic">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当后台页模板。
