# 轮播（carousel） · 灰墨 MoH_UI

> 商品推荐横滑卡、整屏促销横幅、一屏三张小卡、居中吸附、垂直轮播、锚点箭头与数字指示器，原生滚动 + scroll-snap 零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/carousel/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：商品推荐横滑卡（轮播）。

【场景】电商商品列表里的「猜你喜欢」横滑推荐区：一屏并排展示两张商品卡，用户可左右滑动翻看，左右两侧各有一个圆形箭头跳到相邻一组。
【怎么排】
- 外层用 relative 包裹；内部是 carousel flex w-full，它自带横向滚动与滚动吸附，不要额外加 overflow 类；
- 每个 carousel-item 用 w-1/2（一屏两张），item 内部是一张商品卡：上部图区用内联 linear-gradient 渐变占位（后续换成真实商品图），图区左上角放 badge 角标（如「热卖」「新品」）；下部依次是商品名、价格（价格用 text-primary，可加一条划线原价）、一个「加入购物车」小按钮（btn btn-primary btn-sm）；
- 左右箭头是 a 标签：href 指向相邻 item 的 id（如 #h3），样式 btn btn-circle btn-ghost，绝对定位在轮播左右两侧垂直居中，定位范围只在轮播舞台内，不遮挡页面其它内容；箭头必须加 aria-label 说明用途。
【精确规格】
- 纯 CSS 能力边界：原生触摸横滑、scroll-snap 吸附、锚点箭头与数字指示器跳转都是纯 CSS 实现；自动播放、无限循环、拖拽跟手、到边界后循环这些必须用 JavaScript，本成品不内置。
- 商品图一律用内联渐变或内联 SVG 占位，禁止外链图片与 CDN；按钮写真实中文动作（加入购物车），禁止出现 Primary 这类颜色名。
- 横滑只允许发生在 carousel 容器内部，整个页面不得出现横向滚动；carousel 不要加 fixed 定位。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="relative w-full">
  <div class="carousel flex w-full">
    <div id="h1" class="carousel-item w-1/2">
      <div class="card bg-base-100 shadow-sm w-full">
        <div class="h-40 rounded-t-box relative flex items-center justify-center" style="background:linear-gradient(135deg,#6366f1,#8b5cf6)">
          <svg class="h-16 w-16 text-white opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M4 15a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2Z"/><path d="M20 15a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2Z"/></svg>
          <span class="badge badge-primary absolute left-2 top-2">热卖</span>
        </div>
        <div class="card-body p-3">
          <h3 class="card-title text-base truncate">无线降噪耳机</h3>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-primary font-bold">¥399</span>
            <span class="text-xs opacity-60 line-through">¥599</span>
          </div>
          <button class="btn btn-primary btn-sm w-full mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"/></svg>
            加入购物车
          </button>
        </div>
      </div>
    </div>
    <div id="h2" class="carousel-item w-1/2">
      <div class="card bg-base-100 shadow-sm w-full">
        <div class="h-40 rounded-t-box relative flex items-center justify-center" style="background:linear-gradient(135deg,#10b981,#14b8a6)">
          <svg class="h-16 w-16 text-white opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01"/><path d="M10 10h.01"/><path d="M14 10h.01"/><path d="M18 10h.01"/><path d="M7 14h10"/></svg>
          <span class="badge badge-secondary absolute left-2 top-2">新品</span>
        </div>
        <div class="card-body p-3">
          <h3 class="card-title text-base truncate">机械键盘</h3>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-primary font-bold">¥249</span>
            <span class="text-xs opacity-60 line-through">¥329</span>
          </div>
          <button class="btn btn-primary btn-sm w-full mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"/></svg>
            加入购物车
          </button>
        </div>
      </div>
    </div>
    <div id="h3" class="carousel-item w-1/2">
      <div class="card bg-base-100 shadow-sm w-full">
        <div class="h-40 rounded-t-box relative flex items-center justify-center" style="background:linear-gradient(135deg,#f59e0b,#f97316)">
          <svg class="h-16 w-16 text-white opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4"/><path d="M11 9l-2.5 3.5h3L10 16"/></svg>
          <span class="badge badge-neutral absolute left-2 top-2">热销</span>
        </div>
        <div class="card-body p-3">
          <h3 class="card-title text-base truncate">便携充电宝</h3>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-primary font-bold">¥129</span>
            <span class="text-xs opacity-60 line-through">¥179</span>
          </div>
          <button class="btn btn-primary btn-sm w-full mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"/></svg>
            加入购物车
          </button>
        </div>
      </div>
    </div>
    <div id="h4" class="carousel-item w-1/2">
      <div class="card bg-base-100 shadow-sm w-full">
        <div class="h-40 rounded-t-box relative flex items-center justify-center" style="background:linear-gradient(135deg,#f43f5e,#ec4899)">
          <svg class="h-16 w-16 text-white opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5"/><path d="M9 6l.5-3h5L15 6"/><path d="M9 18l.5 3h5l.5-3"/></svg>
          <span class="badge badge-primary absolute left-2 top-2">直降</span>
        </div>
        <div class="card-body p-3">
          <h3 class="card-title text-base truncate">智能手表</h3>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-primary font-bold">¥899</span>
            <span class="text-xs opacity-60 line-through">¥1099</span>
          </div>
          <button class="btn btn-primary btn-sm w-full mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"/></svg>
            加入购物车
          </button>
        </div>
      </div>
    </div>
  </div>
  <a href="#h1" class="btn btn-circle btn-ghost absolute" style="left:0.25rem;top:50%;transform:translateY(-50%)" aria-label="回到开头的商品">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/></svg>
  </a>
  <a href="#h3" class="btn btn-circle btn-ghost absolute" style="right:0.25rem;top:50%;transform:translateY(-50%)" aria-label="后面的商品">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>
  </a>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/carousel/demo.html
- 上游官方文档：https://daisyui.com/components/carousel/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
