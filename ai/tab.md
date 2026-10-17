# 标签页（tab） · 灰墨 MoH_UI

> 下划线/提升/盒装/标签置底/禁用/尺寸等形态，纯 CSS radio 实现内容切换、零 JS，附订单中心成品。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/tab/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：订单中心按状态切换的标签页（标签页 Tab）。

【场景】电商订单中心：订单按状态分成 全部 / 待付款 / 待发货 / 待收货 / 已完成 / 售后 六类，点标签切换下方订单列表，默认选中并显示「待发货」。
【怎么排】
- 容器用 <div class="tabs tabs-border">，六个标签是一组同名 radio（name="order_status"），class 写 "tab"，用 aria-label 写中文标签名；
- 每个 radio 后面紧跟一块 <div class="tab-content border-base-300 bg-base-100 p-4">，只显示当前选中项对应的那块内容；
- 「待发货」radio 加 checked 默认选中，内容里列出 2 笔订单（商品名 + 金额用 text-sm），每笔右侧一个 btn btn-sm btn-primary「提醒发货」，整行用 flex flex-wrap items-center justify-between gap-2；
- 其它标签内容也写真实短句（如「待付款 1 单：请在今天 23:59 前完成支付」），不要留空；
- 标签行在手机宽度放不下时允许自然折成两行（六个标签都看得到，不能被截断），整页不允许出现横向滚动条；不要为了单行把标签缩得很窄。
【精确规格】
- 六组标签 name 必须全部相同（order_status）；同一页面若还有别的标签组，name 要另起一个。
- 文案写真实订单业务内容，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：tabs、tabs-border、tab、tab-content、tab-active、border-base-300、bg-base-100、p-4、w-full、shrink-0、flex、flex-wrap、flex-col、items-center、justify-between、gap-2、gap-3、text-sm、btn、btn-sm、btn-primary。
- 纯 CSS 即可，切换靠 radio checked，不要写任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="w-full">
  <div class="tabs tabs-border w-full">
    <input type="radio" name="order_status" class="tab shrink-0" aria-label="全部" />
    <div class="tab-content border-base-300 bg-base-100 p-4">
      <span class="text-sm">全部订单共 12 笔，按最近下单时间排列。</span>
    </div>
    <input type="radio" name="order_status" class="tab shrink-0" aria-label="待付款" />
    <div class="tab-content border-base-300 bg-base-100 p-4">
      <span class="text-sm">待付款 1 单：请在今天 23:59 前完成支付，超时自动取消。</span>
    </div>
    <input type="radio" name="order_status" class="tab shrink-0" aria-label="待发货" checked="checked" />
    <div class="tab-content border-base-300 bg-base-100 p-4">
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-sm">慕思双人床架 1.8m · ¥2,399.00</span>
          <button class="btn btn-sm btn-primary">提醒发货</button>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-sm">全棉四件套 高级灰 · ¥329.00</span>
          <button class="btn btn-sm btn-primary">提醒发货</button>
        </div>
      </div>
    </div>
    <input type="radio" name="order_status" class="tab shrink-0" aria-label="待收货" />
    <div class="tab-content border-base-300 bg-base-100 p-4">
      <span class="text-sm">待收货 3 单：物流均已更新，预计明天送达。</span>
    </div>
    <input type="radio" name="order_status" class="tab shrink-0" aria-label="已完成" />
    <div class="tab-content border-base-300 bg-base-100 p-4">
      <span class="text-sm">已完成订单 6 笔，交易关闭后 15 天内可申请售后。</span>
    </div>
    <input type="radio" name="order_status" class="tab shrink-0" aria-label="售后" />
    <div class="tab-content border-base-300 bg-base-100 p-4">
      <span class="text-sm">售后 0 笔：暂无进行中的工单。</span>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/tab/demo.html
- 上游官方文档：https://daisyui.com/components/tab/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
