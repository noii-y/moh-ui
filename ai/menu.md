# 菜单（menu） · 灰墨 MoH_UI

> 垂直侧边栏与横向菜单、分组标题、当前页高亮、数字徽标、details 折叠子菜单（默认展开）、禁用态与尺寸档，零依赖纯 CSS。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/menu/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：后台系统侧边栏菜单（菜单）。

【场景】一个后台管理系统左侧的垂直侧边栏菜单：带图标、当前页高亮、待处理数量徽标、可展开的子菜单，以及一个暂未开放的禁用项。
【怎么排】
- 外层 <ul class="menu bg-base-100 rounded-box w-64 border border-base-300">，固定宽度 w-64、卡片式背景；
- 顶部一个分组标题 <li class="menu-title">工作台</li>；
- 每个条目是 <li><a>…</a></li>，a 内先放一个 h-5 w-5 的单色 SVG 图标（stroke="currentColor"），再放中文条目名；
- 「仪表盘」是普通条目，不加高亮（一个菜单里只允许有一个当前项）；
- 「订单管理」a 的文字后面跟一个 <span class="badge badge-sm">12</span> 提示待处理数量；
- 「商品管理」用 <details open> 包：summary 里放图标+文字，下面 <ul> 放四个子项（全部商品/在售商品/库存管理/商品分类），默认展开（open），当前页是叶子项「在售商品」，只给它的 a 加 menu-active；
- 再放「客户管理」；最后一项「数据导出（即将上线）」用 a.menu-disabled 并加 aria-disabled="true" 置灰，文字里写明原因。
【精确规格】
- 条目文案写真实后台功能名，禁止出现 Primary / 主要 / 成功 这类颜色名当文案。
- 图标统一 h-5 w-5、单色 currentColor，不要用彩色 emoji 当图标。
- 用到的类全部真实存在：menu、menu-title、menu-active、menu-disabled、menu-horizontal、badge、badge-sm、rounded-box、w-64、w-56、w-48、border、border-base-300、bg-base-100、bg-base-200、h-5、w-5；子菜单用原生 details/summary（open 控制默认展开），不要为展开写业务 JS。
- 颜色全部走 daisyUI 主题变量，不要写死颜色。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<ul class="menu bg-base-100 rounded-box w-64 border border-base-300">
  <li class="menu-title">工作台</li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" /></svg>
      仪表盘
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" /></svg>
      订单管理
      <span class="badge badge-sm">12</span>
    </a>
  </li>
  <li>
    <details open>
      <summary>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82ZM7 7h.01" /></svg>
        商品管理
      </summary>
      <ul>
        <li><a>全部商品</a></li>
        <li><a class="menu-active">在售商品</a></li>
        <li><a>库存管理</a></li>
        <li><a>商品分类</a></li>
      </ul>
    </details>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m6-2.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM21 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75" /></svg>
      客户管理
    </a>
  </li>
  <li>
    <a class="menu-disabled" aria-disabled="true">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
      数据导出（即将上线）
    </a>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/menu/demo.html
- 上游官方文档：https://daisyui.com/components/menu/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
