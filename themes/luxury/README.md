# 奢金（luxury）

daisyUI 官方内置主题，近黑底（oklch 约 14% 明度）配金色文字（oklch 75.7% · 金黄），主色为纯白、辅色为深紫与深酒红，圆角偏大。气质像黑金腕表橱窗：克制、安静、有分量。适合高端腕表 / 珠宝 / 律所 / 私人银行类深色品牌页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 luxury](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=luxury]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构高端腕表品牌「时计堂 HELIOS」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 金色衬线 Hero 与内联线稿腕表 + 三张黑金产品卡（含公开指导价格区间）+ 工艺传承三要点 + 到店预约 CTA 与虚构门店页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="luxury">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="luxury"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当深色品牌落地页模板。
