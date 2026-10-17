# 图表卡 Chart Card

> 灰墨自研增强组件。基于 daisyUI 卡片外壳 + ECharts 5（CDN），MIT 开源。

## 它是什么

数据看板里的一张图表卡：daisyUI `card` 外壳，里面放一块定高的 ECharts 图表（折线 / 柱状 / 环形），卡头是标题和副标题，卡脚是一行数据来源。图表颜色全部从 daisyUI 主题变量读取，切换深浅主题时自动跟随。

## 怎么用（三步，需一个 CDN）

1. 在页面 `<head>` 引入两个样式文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../assets/utilities-patch.css" />
```

2. 在 `<body>` 里再引入一行 ECharts CDN：

```html
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
```

3. 复制 [demo.html](./demo.html) 里成品卡片的那一段 HTML + 初始化 `<script>`，把 `setOption` 里的数据换成你的；图表容器记得写死高度（示例是 240px）。

## 常用写法速查

| 想要的效果 | 做法 |
|---|---|
| 卡片外壳 | `card bg-base-100 shadow-sm`，内部 `card-body p-4` |
| 折线图 | series `type: "line"`，`smooth: true`，`areaStyle` 加浅色填充 |
| 柱状图 | series `type: "bar"`，`barWidth: 24`，柱顶圆角 `borderRadius: [4,4,0,0]` |
| 环形图 | series `type: "pie"`，`radius: ["45%","70%"]`，`label: { show: false }` |
| 读主题色 | `getComputedStyle(document.documentElement).getPropertyValue("--color-primary")` |
| 无数据空态 | 同尺寸容器里居中放一行「暂无数据」，不渲染坐标轴 |
| 窗口缩放 | `window.addEventListener("resize", () => chart.resize())` |

## 使用要点（给 AI 与新手的提醒）

- **只展示一两个数字时别用图表卡**，用零依赖的 `stat` 统计卡；趋势、对比、占比才上 ECharts。
- 图表容器**必须定高**（这里 240px），ECharts 不会自己撑开高度，只给宽度会渲染成一条线。
- 颜色一律读 `--color-*` 主题变量，不要在 `setOption` 里写死 hex，否则切主题后图表颜色会和页面脱节。
- 每个图表独立 `id`，别重复初始化同一个容器；一个页面多张图各自 `echarts.init`。
- 图表容器加 `role="img"` + `aria-label`，一句话说清这张图是什么。
- 无数据时显示「暂无数据」空态，卡片保持同高，看板布局不会上下跳。

## 兼容性

- 依赖 ECharts 5（CDN 或本地 vendor），除此之外无框架、无构建。
- 颜色全部走 daisyUI `--color-*` 主题变量，深浅色主题、灰墨各套主题均自动适配。
