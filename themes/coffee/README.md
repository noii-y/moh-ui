# 暖焙（coffee）

daisyUI 官方内置主题，深暖棕底（oklch 24% · 咖啡棕）配暖奶油色正文，主色为焦糖橙（oklch 72%），圆角偏大（1rem），气质温润、慢手工、像街角烘焙工坊。适合咖啡 / 烘焙 / 手作品牌 / 慢生活类深色品牌页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 coffee](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=coffee]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构烘焙坊品牌「暖炉烘焙坊 WARMSTONE」的品牌故事与手作课程整页。

## 文件

- `demo.html` — 完整页面案例：顶栏品牌导航 + 烘焙滚筒手冲壶 Hero 线稿 + 四款豆子溯源卡（含烘焙度深浅条）+ 品牌故事长叙事图文 + 三张手作课程卡（手冲/烘焙/拉花）+ 三步课程流程 + 门店 CTA 与虚构地址页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="coffee">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="coffee"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当深色烘焙品牌落地页模板。
