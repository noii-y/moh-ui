# 纯黑（black）

daisyUI 官方内置主题，OLED 纯黑底（oklch 0% 明度）配白灰阶文字（oklch 87.6%），主色与辅色全部退化为中性灰，只保留语义色（info 蓝 / success 绿 / warning 黄 / error 红）。气质像美术馆暗厅与影院：极致克制、黑白分明。适合摄影作品集 / 独立影像工作室 / 影院 / 艺术展览类深色前台页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 black](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=black]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构摄影工作室「白夜影像 WHITE NIGHT STUDIO」整页。

## 文件

- `demo.html` — 完整页面案例：极简顶栏导航 + 纯黑大留白 Hero 与光圈线稿 + 六格 35mm 相框作品网格（山景 / 人像 / 街景 / 建筑 / 静物 / 舞台六种内联简影）+ 两个系列专题卡（无人之境 / 城市午夜）+ 委托拍摄三档公开指导价格 + 预约 CTA 与虚构工作室信息页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="black">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="black"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当纯黑品牌落地页模板。
