# 新中式（mo-zhongshi · 浅色）

米宣纸底 + 朱砂主色 + 墨褐文字 + 衬线留白的东方气质主题。适合茶叶 / 文创 / 文旅类电商首页与品牌站。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、中性小圆角、1px 细边框）
- `demo.html` — 完整页面案例：茶叶电商首页（顶栏 + 水墨 hero + 分类 + 商品网格 + 品牌故事留白区 + 页脚），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-zhongshi">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；标题想要东方感时，把 `demo.html` 里的 `.song`（`font-family:"Songti SC","STSong","SimSun",serif`）类一并复制到自己的标题元素上，正文仍保持无衬线；商品图位与插画一律用内联线性 SVG，stroke 取墨褐 `#756a58`，不要纯色块。
