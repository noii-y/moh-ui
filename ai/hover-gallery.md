# 悬停画廊（hover-gallery） · 灰墨 MoH_UI

> 默认露第一张图，鼠标横向滑过图位逐张切换多角度图；覆盖纯画廊、卡片内商品画廊、max-w-60 紧凑商品卡等形态，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/hover-gallery/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商商品卡多角度图（悬停画廊）。

【场景】电商列表里的一张商品卡：同一个商品的 3 张角度图（正面、配件、佩戴）叠在同一个图位里，平时只露第一张，鼠标左右滑过图位就逐张切换，下方是名称、价格和「加入购物车」按钮。
【怎么排】
- 外层是一张商品卡：div class="card bg-base-100 shadow-sm w-full max-w-md"。
- 图位用 figure class="hover-gallery aspect-square"：里面叠 3 个等大的块（正式项目用 <img>，这里演示用渐变+居中线性 SVG 占位）；默认只显示第 1 张，鼠标滑过图位左半切到第 2 张、右半切到第 3 张，这是组件自带的 hover 横滑效果，不用写 JS。
- 卡身 card-body 从上到下：商品名 + 「新品」徽标一行（flex justify-between）→ 大价格 + 划线原价一行 → 一行卖点小字 → 底部操作行（收藏图标按钮 + 主按钮「加入购物车」，靠右 justify-end）。
【精确规格】
- 画廊本体：<figure class="hover-gallery aspect-square">，子元素直接平铺即可，不要额外定位；放几张图就自动出几列感应区。
- 图区用渐变背景 + 居中的白色线性 SVG 图标（h-20 w-20、opacity-70、stroke-current）占位，不要外链图片；正式项目换成 <img src> 并写 alt。
- 按钮写真实动作「加入购物车」，禁止出现 Primary 这类颜色名；收藏是纯图标按钮，必须带 aria-label="收藏"。
- 价格用 text-2xl font-bold，原价用 text-sm + opacity-50 + 删除线弱化；卖点小字 text-sm opacity-70。
- 颜色全部走 daisyUI 主题变量，不写死颜色；手机 390px 下卡片不溢出、按钮不被裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="card bg-base-100 shadow-sm w-full max-w-md">
  <figure class="hover-gallery aspect-square">
    <div class="flex items-center justify-center" style="background:linear-gradient(135deg,#64748b,#94a3b8)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-20 w-20 text-white opacity-70"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
    </div>
    <div class="flex items-center justify-center" style="background:linear-gradient(135deg,#475569,#64748b)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-20 w-20 text-white opacity-70"><rect x="3.5" y="8" width="17" height="11" rx="3"/><line x1="3.5" y1="12.5" x2="20.5" y2="12.5"/><circle cx="17" cy="16.5" r="0.8" fill="currentColor"/></svg>
    </div>
    <div class="flex items-center justify-center" style="background:linear-gradient(135deg,#52657a,#7d8ca3)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-20 w-20 text-white opacity-70"><path d="M5.5 18.5a9 9 0 0 1 0-13"/><path d="M8.5 15.5a5 5 0 0 1 0-7"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/></svg>
    </div>
  </figure>
  <div class="card-body">
    <div class="flex items-center justify-between gap-2">
      <h2 class="card-title">云感无线耳机 Pro</h2>
      <span class="badge badge-warning">新品</span>
    </div>
    <p class="text-2xl font-bold">¥329 <span class="text-sm font-normal opacity-50 line-through">¥399</span></p>
    <p class="text-sm opacity-70">主动降噪 · 30 小时续航 · 支持双设备连接</p>
    <div class="card-actions justify-end">
      <button class="btn btn-circle btn-ghost" aria-label="收藏">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>
      </button>
      <button class="btn btn-primary">加入购物车</button>
    </div>
  </div>
</div>
```

【灰墨审美硬边界（必须遵守）】
- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。
- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。
- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/hover-gallery/demo.html
- 上游官方文档：https://daisyui.com/components/hover-gallery/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
