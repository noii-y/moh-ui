# 顶部导航（navbar） · 灰墨 MoH_UI

> 三段式 start/center/end、横向栏目、当前页高亮、搜索框、购物车徽标、头像下拉、彩色底与响应式收起，零依赖纯 CSS。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/navbar/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：内容站顶部导航栏（顶部导航）。

【场景】一个内容站（文档、产品官网类）的顶部导航栏：左边品牌，中间栏目，右边搜索、登录和主操作。
【怎么排】
- 外层用 <div class="navbar bg-base-100 shadow-sm rounded-box w-full">，相对定位、不要 fixed 固定，让它在页面里自然横排；
- 左边 navbar-start 放品牌：<a class="btn btn-ghost text-xl">墨白文档</a>；
- 中间 navbar-center 放横向栏目，小屏收起、大屏展开：<div class="navbar-center hidden lg:flex"> 里包 <ul class="menu menu-horizontal px-1">，四个 <li><a>，当前页那一项加 menu-active（首页）；
- 右边 navbar-end 依次放：搜索图标按钮（btn btn-ghost btn-circle，必须 aria-label="搜索"，内部一个 h-5 w-5 的单色放大镜 SVG）、「登录」纯文字按钮（btn btn-ghost）、主按钮「免费试用」（btn btn-primary）；
- 右侧三个操作之间用 gap-2，小屏（约 390px）下中间栏目自动隐藏后，品牌加三个操作仍要在一行内排下，绝不能横向溢出或把按钮裁掉。
【精确规格】
- 文案写真实业务动作与栏目名（首页 / 产品 / 文档 / 定价 / 免费试用 / 登录），禁止出现 Primary / 主要 / 成功 这类颜色名当文案。
- 纯图标按钮必须带 aria-label；当前页栏目用 menu-active 标识。
- 用到的类全部真实存在：navbar、navbar-start、navbar-center、navbar-end、menu、menu-horizontal、menu-active、btn、btn-ghost、btn-primary、btn-circle、text-xl、hidden、lg:flex、gap-2、w-full、rounded-box、shadow-sm、bg-base-100、h-5、w-5。
- 颜色全部走 daisyUI 主题变量，不要写死颜色；除点击展开下拉的原生交互外不要加任何业务 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="navbar bg-base-100 shadow-sm rounded-box w-full">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">墨白文档</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a class="menu-active">首页</a></li>
      <li><a>产品</a></li>
      <li><a>文档</a></li>
      <li><a>定价</a></li>
    </ul>
  </div>
  <div class="navbar-end gap-2 flex-wrap justify-end">
    <button class="btn btn-ghost btn-circle" aria-label="搜索">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.34-4.34M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
    </button>
    <button class="btn btn-ghost">登录</button>
    <button class="btn btn-primary">免费试用</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/navbar/demo.html
- 上游官方文档：https://daisyui.com/components/navbar/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
