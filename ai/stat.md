# 统计卡（stat） · 灰墨 MoH_UI

> 电商数据看板（涨跌备注+单色图标）、stats-vertical 垂直排列、place-items-center 居中、stat-actions 带操作按钮，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/stat/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商数据看板顶部统计卡（统计卡）。

【场景】电商数据看板顶部的一排统计卡：今日订单、今日销售额、客单价、退款笔数，每个数字配涨跌备注和一个单色图标。
【怎么排】
- 外层 <div class="stats stats-vertical lg:stats-horizontal shadow w-full">：手机上竖排堆叠，桌面一横排。
- 每个指标是一个 div.stat，内部顺序固定：stat-figure（单色 SVG 图标）→ stat-title（小标签）→ stat-value（大数字）→ stat-desc（涨跌备注）。
- 涨跌备注里，对业务有利的涨用 <span class="text-success">▲ 12.5%</span>，不利的（退款上升、客单价下降）用 <span class="text-error">▼ 3.1%</span>；箭头直接用 ▲ / ▼ 字符，不用 emoji。
【精确规格】
- 图标：<div class="stat-figure text-primary"><svg ... class="inline-block h-8 w-8"></div>，四个图标分别用语义色 text-primary / text-secondary / text-accent / text-error。
- 数字加 tabular-nums 类，保证等宽数字、同比环比时个位不跳。
- 文案写真实指标名（今日订单 / 今日销售额 / 客单价 / 退款笔数）和真实数字，不要用颜色名当标签。
- 一屏只放 3–5 个指标；手机 390px 下自动竖排，不溢出、不裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="stats stats-vertical lg:stats-horizontal shadow w-full">

  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="inline-block h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1.75 1.75 0 0 1 1.237.513l4.664 4.664A1.75 1.75 0 0 1 19.5 9.586V17a2 2 0 0 1-2 2Z" /></svg>
    </div>
    <div class="stat-title">今日订单</div>
    <div class="stat-value tabular-nums">128</div>
    <div class="stat-desc"><span class="text-success">▲ 12.5%</span> 较昨日</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="inline-block h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v6m18-4.5h.75a.75.75 0 0 1 .75.75v.75m0 0v-.375c0-.621-.504-1.125-1.125-1.125m0 0h-4.116c-.26 0-.512.068-.733.195l-3.356 1.865c-.504.28-.92.824-.92 1.486v.75m9 0V12m0 0v.75c0 .621-.504 1.125-1.125 1.125h-4.116c-.26 0-.512-.068-.733-.195l-3.356-1.865" /></svg>
    </div>
    <div class="stat-title">今日销售额</div>
    <div class="stat-value tabular-nums">¥86,400</div>
    <div class="stat-desc"><span class="text-success">▲ 8.2%</span> 较昨日</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-accent">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="inline-block h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
    </div>
    <div class="stat-title">客单价</div>
    <div class="stat-value tabular-nums">¥268</div>
    <div class="stat-desc"><span class="text-error">▼ 3.1%</span> 较上周</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-error">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="inline-block h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>
    </div>
    <div class="stat-title">退款笔数</div>
    <div class="stat-value tabular-nums">7</div>
    <div class="stat-desc"><span class="text-error">▲ 2 笔</span> 较昨日</div>
  </div>

</div>
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

## 更多

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/stat/demo.html
- 上游官方文档：https://daisyui.com/components/stat/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
