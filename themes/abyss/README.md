# 深渊（abyss）

daisyUI 官方内置主题（v5 新主题），深绿暗色底（oklch 约 20% 明度、青绿色相）配磷光绿主色（oklch 92% · 荧光绿），文字为暖白，语义色蓝 / 绿 / 黄 / 红完整。气质像机房深夜的监控大屏：冷静、高密度、数据会发光。适合物联网 / 服务器监控 / 运维大屏 / 开发者控制台类深色产品页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 abyss](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=abyss]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构运维监控产品「深穹监控 ABYSS OPS」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航与运行状态徽章 + 五个磷光 KPI 指标卡 + 自绘双序列折线图与可用性环形图 + 集群负载 Top 5 横向条形 + 实时事件表（四级 badge）+ 三张节点状态卡（CPU / 内存进度条）+ 底部试用 CTA 与示例数据页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="abyss">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="abyss"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当运维大屏 / 监控后台模板。
