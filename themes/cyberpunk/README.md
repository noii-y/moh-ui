# 赛博锋芒（cyberpunk）

daisyUI 官方内置主题，荧光黄亮底（oklch 约 94.5% 明度 · 黄绿相）配纯黑文字，主色为偏红的洋红、辅色为青色与洋紫，深色块用海军蓝、字反荧光黄，圆角为 0。气质像街头电竞海报：高对比、棱角、有冲击力。适合电竞俱乐部 / 潮玩 / 街头运动 / 科技活动类高对比品牌落地页。

> 注意：它是**亮色主题**（color-scheme: light），底是荧光黄、字是黑，不是深色霓虹底——别和 synthwave 的 80 年代深紫蓝复古霓虹混淆。

## 来源与许可证

- 主题：[daisyUI 官方主题 cyberpunk](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=cyberpunk]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构电竞俱乐部「极锋电竞 NEONEDGE」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 深色海军蓝 Hero 与棱角城市天际线 SVG + 四张赛事卡（含虚构奖金区间与报名状态徽章）+ 四名首发选手几何头像卡 + 三张外设潮玩产品卡 + 社区战报 CTA 与虚构声明页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="cyberpunk">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="cyberpunk"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当高对比电竞/潮玩落地页模板。
