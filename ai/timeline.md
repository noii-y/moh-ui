# 时间线（timeline） · 灰墨 MoH_UI

> 垂直/双侧交替/紧凑单侧/彩色进度连线等变体，物流跟踪与里程碑场景，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/timeline/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：订单物流跟踪时间线。

【场景】电商订单详情页底部的物流跟踪时间线，五个节点：下单成功 → 支付成功 → 仓库发货 → 派送中 → 已签收。
【怎么排】从上到下垂直排列：
- 已完成的节点（下单成功、支付成功、仓库发货）中间放绿色对勾图标；
- 当前进行的节点（派送中）中间放主色小徽标，让用户一眼看到"现在到哪了"；
- 还没到的节点（已签收）图标和文字用 opacity-40/60 置灰；
- 时间放在中线左侧（timeline-start），事件说明放在右侧卡片（timeline-end timeline-box）。
【精确规格】
- 外层：<ul class="timeline timeline-vertical">，每个节点是一个 <li>。
- 每个 <li> 内顺序固定：timeline-start（时间）→ timeline-middle（图标或徽标）→ timeline-end timeline-box（说明）。
- 连接线是 <hr />：第一个 <li> 在结尾放一个，中间每个 <li> 开头、结尾各放一个，最后一个 <li> 只在开头放一个、结尾不放，缺了线会断。
- 对勾 SVG 用 text-success 着色，当前徽标用 badge badge-primary badge-sm，未到节点 SVG 外套 span opacity-40。
- 文案写真实物流事件与时间（如"10-16 14:05 仓库已发货"），不要写颜色名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start">10-16 09:20</div>
    <div class="timeline-middle">
      <span class="text-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg></span>
    </div>
    <div class="timeline-end timeline-box">下单成功：订单已提交，等待支付</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start">10-16 09:21</div>
    <div class="timeline-middle">
      <span class="text-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg></span>
    </div>
    <div class="timeline-end timeline-box">支付成功：微信支付 ¥299.00</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start">10-16 14:05</div>
    <div class="timeline-middle">
      <span class="text-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg></span>
    </div>
    <div class="timeline-end timeline-box">仓库已发货：快递员已揽收包裹</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start">预计今天送达</div>
    <div class="timeline-middle"><span class="badge badge-primary badge-sm">派送中</span></div>
    <div class="timeline-end timeline-box">已到武汉武昌区网点，派送员李师傅正在上门</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start">待收货</div>
    <div class="timeline-middle">
      <span class="opacity-40"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg></span>
    </div>
    <div class="timeline-end timeline-box opacity-60">请保持电话畅通，签收后订单完成</div>
  </li>
</ul>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/timeline/demo.html
- 上游官方文档：https://daisyui.com/components/timeline/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
