# 纯净灰阶（浅色）· mo-slate

无彩色零色相灰阶主题。浅灰白底 + 深炭文字，界面尽量消失、内容优先，适合文档站 / 帮助中心 / 写作与效率类产品。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：文档中心整页（顶部搜索条 + 三栏布局 + 目录树 + 正文 + 本页目录），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-slate">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当文档页模板。
