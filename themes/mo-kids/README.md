# 童趣 · 浅色（mo-kids）

儿童学习 App 前台糖果色主题。奶油白暖底配天蓝、草绿、橙红、粉紫点缀，大圆角、大图标，适合 6–12 岁孩子与家长看的教育类落地页。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：虚构儿童学习 App「小步学堂」前台（顶栏 + Hero 插画 + 六门兴趣课卡 + 闯关打卡勋章 + 家长证言 + 三档定价 + 适龄页脚），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-kids">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当儿童教育类落地页模板。
