# 丝绸（silk）

daisyUI 官方主题，暖米白底 `#f7f5f3` + 墨蓝文字，留白舒展、圆角中等，气质像香槟丝绸般雅致轻奢。适合精品民宿 / 旅行预订 / 生活方式类轻质感页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 silk](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=silk]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套精品民宿预订整页。

## 文件

- `demo.html` — 完整页面案例：精品民宿预订整页（目的地 hero + 内联 SVG 山景线条画 + 房源卡网格 + 日期选择与价格明细 + 底部预订 CTA），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="silk">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="silk"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当预订类页面模板。
