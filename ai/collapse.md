# 折叠面板（collapse） · 灰墨 MoH_UI

> FAQ 手风琴、箭头/加号图标、默认展开、纯文字折叠等形态，零依赖纯 CSS。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/collapse/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：帮助中心常见问题折叠面板（折叠面板）。

【场景】一个帮助中心（常见问题 / FAQ）页面的折叠问题列表：三条真实问题，第一条默认展开给出完整答案，其余收起，用户点标题才展开。
【怎么排】
- 三条折叠项竖向排列，互相之间间距 8px（flex flex-col gap-2）；
- 每一条是原生 details（零依赖、点击标题即切换、键盘可用）：外层 <details class="collapse collapse-arrow bg-base-100 border border-base-300">，标题是 <summary class="collapse-title font-semibold">真实问题</summary>，答案是 <div class="collapse-content text-sm"><p>……</p></div>；
- 第一条 details 加 open 属性，默认展开含完整答案；后两条不加 open，保持收起；
- 标题写完整的真实问题（如「怎么修改登录密码？」），禁止只写「问题一 / 点击展开」。
【精确规格】
- 交互方式：用户点击标题（summary）展开或收起；静态预览时给要展示答案的那条 details 加 open 属性强制展开，不要为展开写任何 JavaScript。
- 键盘与焦点：summary 自带焦点与开关语义——Tab 走到它、Enter / Space 开合；读屏自动播报开合状态，不要手写 aria-expanded；收起时答案内容不进 Tab 序。div tabindex 版（焦点面板）是 Tab 聚焦展开、失焦收起，Enter / Space 不切换，不要混用。
- 用到的类全部真实存在：collapse、collapse-arrow、collapse-title、collapse-content、bg-base-100、border、border-base-300、font-semibold、text-sm、flex、flex-col、gap-2、w-full；不要用 collapse-open / collapse-close 作用在 details 上（它们只对 div 焦点式折叠生效）。
- 颜色全部走 daisyUI 主题变量，不要写死颜色，切换主题自动跟随。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-2 w-full">
  <details class="collapse collapse-arrow bg-base-100 border border-base-300" open>
    <summary class="collapse-title font-semibold">怎么修改登录密码？</summary>
    <div class="collapse-content text-sm">
      <p>打开「我的 → 账号安全 → 修改密码」，输入当前密码后设置新密码（8-20 位，需同时包含字母和数字）。修改成功后，其它设备上的登录状态会自动退出，需要用新密码重新登录。</p>
    </div>
  </details>
  <details class="collapse collapse-arrow bg-base-100 border border-base-300">
    <summary class="collapse-title font-semibold">如何申请退款？</summary>
    <div class="collapse-content text-sm">
      <p>自订单签收日起 7 天内，在「我的订单 → 申请售后」中选择退款原因并提交凭证；审核通过后，退款将在 1-3 个工作日内原路退回你的支付账户。</p>
    </div>
  </details>
  <details class="collapse collapse-arrow bg-base-100 border border-base-300">
    <summary class="collapse-title font-semibold">电子发票怎么开？</summary>
    <div class="collapse-content text-sm">
      <p>订单完成后，在「我的订单 → 发票中心」填写发票抬头和税号并提交；电子普通发票将在 1 个工作日内发送到你预留的邮箱。</p>
    </div>
  </details>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/collapse/demo.html
- 上游官方文档：https://daisyui.com/components/collapse/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
