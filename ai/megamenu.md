# 大菜单（megamenu） · 灰墨 MoH_UI

> 电商顶部全部分类导航，覆盖多列链接面板、推荐卡、简洁横向列、垂直版等形态，基于原生 popover 零 JS。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/megamenu/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商顶部的「全部分类」大菜单（大菜单）。

【场景】电商网站顶部的「全部分类」大菜单：一排分类按钮（女装 / 男装 / 数码 / 家电），点开任意一个，下方弹出一大块多列分类链接面板，面板一侧可放一张限时特惠推荐卡。
【怎么排】
- 外层用 div.megamenu.megamenu-wide（带 popover 属性），里面先放 span.megamenu-active 指示器，再依次放分类按钮与对应面板；
- 每个分类按钮写 <button popovertarget="唯一id">分类名</button>，紧跟 <div id="相同id" popover>面板内容</div>，id 一一对应，不要写错；
- 展开的「数码」面板里用 flex flex-wrap 排四列 menu：每列一个 ul.menu，首项 li.menu-title 写列名（手机通讯 / 电脑办公 / 智能设备 / 影音文娱），下面 3 个真实链接；
- 面板尾部放一张推荐卡（rounded-box border border-base-300 p-4）：标题「限时特惠」、一行小号说明（text-sm opacity-60）、主色小按钮「去看看」。
【精确规格】
- 分类名与链接写真实电商文案（连衣裙 / 笔记本 / 智能手表…），禁止出现 Primary / 主要 这类颜色名当文案。
- 开合用浏览器原生 popover（popovertarget / popover 属性），零 JavaScript；不要自己写 fixed 定位或 JS 弹层逻辑。
- 每个分类按钮写 <button popovertarget="面板id" id="按钮id" aria-haspopup="true" aria-controls="面板id">，面板写 <div id="面板id" popover role="group" aria-labelledby="按钮id">；原生 popover 自带点外部关闭、Esc 关闭、关闭后焦点回到触发按钮，不要手写焦点陷阱。
- aria-expanded 用面板上一行 toggle 监听同步（p.matches(':popover-open')）；分类按钮之间用 ←/→ 切换焦点；面板是链接集合，里面用 Tab 逐项走，不要把面板写成 role="menu"。
- 参考结构里那一行 position:static / display / opacity 演示内联 style 只用于详情页让面板静态展开，复制后删除。
- 大菜单只用于桌面端顶部；面板多列在宽屏并排，窄屏自动换行，任何一列链接都不能溢出容器。
- 用到的类全部真实存在：megamenu、megamenu-wide、megamenu-vertical、megamenu-active、menu、menu-horizontal、menu-title、border-base-300、rounded-box、text-sm、opacity-60、btn、btn-sm、btn-primary。
- 颜色全部走 daisyUI 主题变量，不要写死颜色、不要外链图片。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="megamenu megamenu-wide p-2 border-b border-base-300" popover style="position:static!important;display:flex!important;flex-wrap:wrap;opacity:1!important;translate:none!important;scale:1!important;max-block-size:none!important;margin-top:0!important;">
  <span class="megamenu-active"></span>
  <button id="hero-mm-female-btn" popovertarget="hero-mm-female" aria-haspopup="true" aria-controls="hero-mm-female">女装</button>
  <button id="hero-mm-male-btn" popovertarget="hero-mm-male" aria-haspopup="true" aria-controls="hero-mm-male">男装</button>
  <button id="hero-mm-digital-btn" popovertarget="hero-mm-digital" aria-haspopup="true" aria-controls="hero-mm-digital">数码</button>
  <button id="hero-mm-home-btn" popovertarget="hero-mm-home" aria-haspopup="true" aria-controls="hero-mm-home">家电</button>
  <div id="hero-mm-female" popover role="group" aria-labelledby="hero-mm-female-btn">
    <ul class="menu menu-horizontal">
      <li><a>连衣裙</a></li>
      <li><a>上衣 T 恤</a></li>
      <li><a>外套</a></li>
      <li><a>裤装</a></li>
    </ul>
  </div>
  <div id="hero-mm-male" popover role="group" aria-labelledby="hero-mm-male-btn">
    <ul class="menu menu-horizontal">
      <li><a>男士 T 恤</a></li>
      <li><a>休闲裤</a></li>
      <li><a>夹克</a></li>
    </ul>
  </div>
  <div id="hero-mm-digital" popover role="group" aria-labelledby="hero-mm-digital-btn" style="position:static!important;display:block!important;opacity:100%!important;translate:none!important;scale:1!important;width:100%!important;max-height:none!important;background:transparent!important;border:none!important;">
    <div class="flex flex-wrap items-start gap-6 p-4">
      <ul class="menu">
        <li class="menu-title">手机通讯</li>
        <li><a>智能手机</a></li>
        <li><a>手机配件</a></li>
        <li><a>摄影摄像</a></li>
      </ul>
      <ul class="menu">
        <li class="menu-title">电脑办公</li>
        <li><a>笔记本</a></li>
        <li><a>显示器</a></li>
        <li><a>外设配件</a></li>
      </ul>
      <ul class="menu">
        <li class="menu-title">智能设备</li>
        <li><a>智能手表</a></li>
        <li><a>耳机音响</a></li>
        <li><a>智能家居</a></li>
      </ul>
      <ul class="menu">
        <li class="menu-title">影音文娱</li>
        <li><a>数码相机</a></li>
        <li><a>游戏机</a></li>
        <li><a>影音设备</a></li>
      </ul>
      <div class="rounded-box border border-base-300 p-4 max-w-xs">
        <p class="font-semibold">限时特惠</p>
        <p class="text-sm opacity-60 mt-1">蓝牙耳机 5 折起，今晚 24 点截止</p>
        <button class="btn btn-sm btn-primary mt-2">去看看</button>
      </div>
    </div>
  </div>
  <div id="hero-mm-home" popover role="group" aria-labelledby="hero-mm-home-btn">
    <ul class="menu menu-horizontal">
      <li><a>大家电</a></li>
      <li><a>厨房小电</a></li>
      <li><a>生活电器</a></li>
    </ul>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/megamenu/demo.html
- 上游官方文档：https://daisyui.com/components/megamenu/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
