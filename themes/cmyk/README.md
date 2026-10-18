# 叠色（cmyk）

daisyUI 官方内置主题，纯白底（oklch 100%）配近黑文字（oklch 20%），主色为青蓝、辅色为品红、点缀色为明黄——正是印刷四色里的青品黄，圆角 1rem。气质像打样间与裁纸刀：干净、精准、有纸面感。适合印刷工作室 / 设计公司 / 纸品类 / 文创品牌类浅色页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 cmyk](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=cmyk]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构印刷工作室「叠彩印刷 DIE-CAI PRINT STUDIO」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 印张套准线稿 Hero 与双 CTA + 印刷工艺四步卡（菲林输出/制版晒版/四色套印/裁切装订）+ 三个设计案例剪影卡（画册/包装/海报）+ 打样报价价格表与提交打样需求 + 预约打样 CTA 与虚构打样间页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="cmyk">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="cmyk"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当印刷/纸品类品牌落地页模板。注意：cmyk 默认 `btn-primary` 蓝底配深蓝字实测对比 8.06:1，可直接用；但蓝底上压白字实测仅 2.46:1，四色（青蓝/品红/明黄）只适合做克制的点缀与线稿，不要大面积铺色。
