# 暗黑开发者（深色）· mo-mood

深空底三层递进 + 宇宙蓝主色，低光害，适合开发者控制台 / API 调试工具 / 日志查看器的夜间工作场景。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：开发者 API 控制台整页（侧栏 + 顶栏 + 指标卡 + 密钥列表 + 代码示例 + 调用日志），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-mood">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当后台页模板。
