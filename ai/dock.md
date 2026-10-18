# 底部停靠导航（dock） · 灰墨 MoH_UI

> 底部停靠导航：带文字标签/纯图标紧凑/大号等形态，附电商 App 底部导航（含中间凸起圆形购物车主按钮与徽标）成品。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/dock/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商 App 底部一级导航（底部停靠导航 Dock）。

【场景】电商 App 屏幕底部的一级导航栏：首页 / 分类 / 购物车 / 消息 / 我的，当前页高亮，中间是一个凸起的圆形购物车主按钮，右上角徽标提示购物车数量。
【怎么排】
- 用 <div class="dock"> 做底栏，五个 <button> 均匀分布（dock 自带 space-around）；
- 每个按钮里是一个 h-6 w-6 的单色 SVG 图标 + <span class="dock-label">中文标签</span>；
- 「首页」加 dock-active 高亮，表示当前所在页；
- 中间「购物车」是主按钮：btn btn-circle btn-primary h-12 w-12，比两侧入口大一圈并向上凸起，右上角叠一个 badge badge-sm badge-primary 显示「3」；
- 纯图标按钮必须加 aria-label（如 aria-label="购物车"）；图标用线性 stroke 图标，不要 emoji。
【精确规格】
- 官方 .dock 默认 fixed 吸在屏幕底部，正式项目保留默认定位即可；如果是嵌在文档流里做演示，再加一个 static 类抵消定位，不要让它盖住页面内容。
- 入口控制在 3–5 个，文案写真实一级入口名，禁止出现 Primary / 成功 这类颜色名当文案。
- 用到的类全部真实存在：dock、dock-label、dock-active、dock-xs、static、w-full、btn、btn-circle、btn-primary、badge、badge-sm、badge-primary、h-5、h-6、w-5、w-6、h-12、w-12、shadow-md。
- 纯展示组件，不需要任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="dock static w-full">
  <button class="dock-active">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h4.875v-6.75h4.5v6.75h4.875a1.125 1.125 0 001.125-1.125V9.75"/></svg>
    <span class="dock-label">首页</span>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg>
    <span class="dock-label">分类</span>
  </button>
  <button aria-label="购物车">
    <span class="btn btn-circle btn-primary h-12 w-12 shadow-md" style="position:relative;top:-1rem">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.909l1.112 11.122c.06.606-.329 1.14-1.02 1.187a48.359 48.359 0 01-10.296 0c-.69-.046-1.08-.58-1.02-1.187l1.112-11.122a1.125 1.125 0 011.118-1.016h8.872c.576 0 1.066.436 1.118 1.016zM9 14.25V17.25m6-3V17.25"/></svg>
      <span class="badge badge-sm badge-primary" style="position:absolute;top:-0.35rem;right:-0.35rem">3</span>
    </span>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>
    <span class="dock-label">消息</span>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
    <span class="dock-label">我的</span>
  </button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/dock/demo.html
- 上游官方文档：https://daisyui.com/components/dock/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
