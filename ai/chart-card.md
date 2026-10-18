# 图表卡（chart-card） · 灰墨 MoH_UI

> 数据看板里的图表卡：折线/柱状/环形图与无数据空态，ECharts 渲染，颜色从 daisyUI 主题变量读取、切换主题自动跟随，含数据来源脚注与定高容器（需 ECharts CDN）。

分类：数据展示　｜　来源：灰墨自研（MIT）　｜　依赖：echarts@5 (CDN)

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：数据看板里的月度访问趋势图表卡。

【场景】数据看板里的一张图表卡：展示「月度访问趋势」折线图（近 6 个月页面访问量）。
【怎么排】daisyUI card 外壳，从上到下三段：
- 卡头：标题「月度访问趋势」+ 一行小字副标题「近 6 个月页面访问量」；
- 卡中：一个定高 240px 的图表容器（必须给死高度，不能只给宽度）；
- 卡脚：一行小字「数据来源：演示数据」，顶部一条细分隔线。
- 折线用主色、2px 细线，线下浅色半透明填充；横向网格线用浅灰虚线感，坐标轴文字用正文弱化色。
【精确规格】
- 先在页面里引入一行 ECharts CDN 脚本：https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js （需联网，或下载到本地改相对路径）。
- 图表容器：<div id="chart-trend" role="img" aria-label="近6个月页面访问量折线趋势图" style="width:100%;height:240px;"></div>。
- 初始化：const chart = echarts.init(document.getElementById('chart-trend')); chart.setOption({...}); window.addEventListener('resize', () => chart.resize());
- 颜色全部用 getComputedStyle(document.documentElement) 读 daisyUI 变量：--color-primary（折线与填充）、--color-base-content（坐标轴文字）、--color-base-200（网格线）、--color-base-300（坐标轴线）；禁止写死 hex，切换主题时图表自动跟随。
- 无数据时不要渲染空坐标轴，在同样的定高容器里居中显示一行「暂无数据」。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<!-- ECharts CDN（需联网；也可下载到 vendor 后改相对路径） -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
<div class="card bg-base-100 shadow-sm max-w-md">
  <div class="card-body p-4">
    <div>
      <h3 class="font-semibold">月度访问趋势</h3>
      <p class="text-xs opacity-60 mt-1">近 6 个月页面访问量</p>
    </div>
    <div id="chart-trend" role="img" aria-label="近6个月页面访问量折线趋势图" style="width:100%;height:240px;"></div>
    <div class="border-t pt-2 mt-2 text-xs opacity-60">数据来源：演示数据</div>
  </div>
</div>
<script>
(function () {
  if (typeof echarts === "undefined") {
    document.getElementById("chart-trend").textContent = "图表加载失败：请确认已引入 ECharts（CDN 需联网）。";
    return;
  }
  var css = getComputedStyle(document.documentElement);
  var v = function (name) { return css.getPropertyValue(name).trim(); };
  var chart = echarts.init(document.getElementById("chart-trend"));
  chart.setOption({
    grid: { left: 36, right: 16, top: 20, bottom: 28 },
    tooltip: {
      trigger: "axis",
      backgroundColor: v("--color-base-100"),
      borderColor: v("--color-base-300"),
      textStyle: { color: v("--color-base-content") }
    },
    xAxis: {
      type: "category",
      data: ["5月", "6月", "7月", "8月", "9月", "10月"],
      axisLine: { lineStyle: { color: v("--color-base-300") } },
      axisLabel: { color: v("--color-base-content") }
    },
    yAxis: {
      type: "value",
      splitLine: { lineStyle: { color: v("--color-base-200") } },
      axisLabel: { color: v("--color-base-content") }
    },
    series: [{
      type: "line",
      data: [820, 932, 901, 1290, 1330, 1420],
      smooth: true,
      symbolSize: 6,
      lineStyle: { color: v("--color-primary"), width: 2 },
      itemStyle: { color: v("--color-primary") },
      areaStyle: { color: v("--color-primary"), opacity: 0.08 }
    }]
  });
  window.addEventListener("resize", function () { chart.resize(); });
})();
</script>
```

【灰墨审美硬边界（必须遵守）】
- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。
- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。
- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。
- 凡会弹出覆盖层的组件（对话框、抽屉、下拉菜单、大菜单）：优先用原生 <dialog> + showModal() 或 popover API（popovertarget + [popover]），不要自己写焦点陷阱；做到打开后焦点进入弹层、Tab 只在弹层内循环跑不到背景、Esc 可关（菜单点外部也可关）、关闭后焦点回到触发按钮；触发按钮加 aria-expanded / aria-controls，弹层标题用 aria-labelledby 关联。纯 hover 提示的 tooltip 不拦截焦点，不需要这套。
- 正文对比度 ≥ 4.5:1；主色全库唯一，状态色语义化（成功绿/警告橙/危险红）；不要大面积高饱和撞色、大面积渐变、多层阴影，不要用 emoji 当图标（用单色 SVG）。
- 动效不超过 200ms，不做装饰性的闪烁、缩放、弹跳入场动画；组件自带的功能性状态动画除外（loading 旋转、status 状态点 ping/bounce、toggle/swap 切换、collapse 展开等），保留官方默认即可，不要再额外叠加装饰动画。
- 颜色全部走 CSS 变量（daisyUI 主题变量），不要写死颜色。

【交付要求】
- 给我能直接放进项目的完整 HTML（class 版、不依赖框架；外层标签可按我的项目结构调整）。
- 如果我的项目还没引入 daisyUI 5，请先告诉我需要在 <head> 里加一行 daisyui.css 的引用。
- 做完后在桌面 1280px 和手机 375px 两个宽度下自查：控件不溢出容器、不被裁切、不换行错位、文字不贴边、焦点可见。

---

## 底座引入

本组件基于 daisyUI 5（纯 CSS、零 JS、零构建）。若目标项目还没有引入，在 `<head>` 加这两行即可：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/assets/utilities-patch.css">
```

本组件额外依赖：echarts@5 (CDN)，需要在参考结构之外再引入对应 CDN：

- https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js


## 更多

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/chart-card/demo.html
- 灰墨自研增强组件，基于 daisyUI 底座二次开发。
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
