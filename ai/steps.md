# 步骤条（steps） · 灰墨 MoH_UI

> 横向/纵向、已完成打勾、当前步高亮、未到置灰、data-content 自定义符号、语义色异常步等形态，附电商下单四步成品。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/steps/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商下单四步进度（步骤条 Steps）。

【场景】电商下单结算页顶部的四步进度条：购物车 → 收货地址 → 支付 → 完成，告诉用户当前走到哪一步。
【怎么排】
- 用 <ul class="steps"> 横向一排，四个 <li class="step">，文字写真实步骤名：购物车、收货地址、支付、完成；
- 已完成的前两步用 step-primary + data-content="✓"（节点打勾）；
- 当前步「支付」用 step-primary 高亮，data-content="3"；
- 未走到的「完成」用 step-neutral 置灰，data-content="4"；
- 手机宽度不够时，外层包 <div class="overflow-x-auto w-full">，步骤条在容器内横向滑动，整页不能出现横向滚动条。
【精确规格】
- 步骤名写真实中文动作，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：steps、step、step-primary、step-neutral、step-accent、step-error、step-info、w-full、overflow-x-auto。
- 节点符号只作辅助，步骤名称必须写完整中文。
- 纯展示组件，不需要任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="overflow-x-auto w-full">
  <ul class="steps w-full">
    <li class="step step-primary" data-content="✓">购物车</li>
    <li class="step step-primary" data-content="✓">收货地址</li>
    <li class="step step-primary" data-content="3">支付</li>
    <li class="step step-neutral" data-content="4">完成</li>
  </ul>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/steps/demo.html
- 上游官方文档：https://daisyui.com/components/steps/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
