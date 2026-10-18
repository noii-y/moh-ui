# 青园（garden）

daisyUI 官方内置主题，浅暖米白底（oklch 约 93% 明度、微暖灰）配近黑暖灰文字，主色为玫红、点缀色为鼠尾草灰绿，圆角偏大。气质像清晨的菜畦与温室：干净、新鲜、有土地感。适合有机农场 / 园艺 / 轻食 / 宠物用品类浅色品牌页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 garden](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=garden]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构有机农场品牌「青禾农庄 QINGHE FARM」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 田园线稿 Hero 与双 CTA + 六张应季蔬菜卡（含差异化蔬菜线稿）+ 会员宅配三套餐 + 农场故事图文与四项数据 + 采摘预约 CTA 与虚构门店页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="garden">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="garden"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当生鲜品牌落地页模板。注意：garden 默认 `btn-primary` 的玫红底、以及原生 accent 灰绿底配白小字对比均不足 4.5:1（实测约 4.15 / 4.48），示例页按钮用 `--btn-color: color-mix(in oklab, var(--color-accent) 90%, var(--color-base-content))` 加深后白字对比约 5.3:1，复用时照此覆写。
