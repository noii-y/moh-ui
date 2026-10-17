# 林径（forest）

daisyUI 官方内置主题，暖调近黑底（oklch 约 21% 明度）配米白文字，主色为松绿（oklch 68.6% · 149 色相），圆角 1rem、大而圆润。气质像入夜后的山林营地：沉静、自然、有呼吸感。适合户外装备 / 生态环保 / 山野民宿 / 自然生活方式类深色品牌页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 forest](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=forest]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构户外装备品牌「野径户外 WILDTRAIL」整页。

## 文件

- `demo.html` — 完整页面案例：户外装备品牌整页（顶栏导航 + Hero 山野层叠线稿与双 CTA + 三张装备卡（登山包 / 徒步鞋 / 帐篷，各含成形内联简影）+ 路线与环保三要点 + 米白会员订阅 CTA 与虚构门店页脚），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="forest">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="forest"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当深色自然品牌落地页模板。
