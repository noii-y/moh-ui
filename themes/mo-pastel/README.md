# 粉彩 · 柔和（mo-pastel）

圆润亲和的浅粉色调主题。微粉暖白三层底 + 深莓果主色 + 淡紫与暖杏点缀，适合在线教育 / 生活服务 / 健康类产品后台。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：在线教育课程后台整页（侧栏 + 顶栏 + 学员统计 + 课程卡片网格 + 本周排课表 + 待批作业），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-pastel">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当课程工作台模板。
