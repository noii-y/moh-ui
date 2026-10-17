# 抽屉侧栏（drawer） · 灰墨 MoH_UI

> 后台可折叠侧边导航，覆盖强制常显、左侧滑出、右侧滑出、响应式大屏常显等形态，复选框纯 CSS 开合，零依赖。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/drawer/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：后台管理系统的左侧菜单抽屉（抽屉侧栏）。

【场景】一个后台管理系统的左侧菜单布局：侧栏常驻可见，带图标导航，主内容区在右侧自适应剩余宽度。
【怎么排】
- 根容器用 div.drawer + drawer-open（详情页为了让缩略图也能看到侧栏用无条件 drawer-open；真实项目改成 lg:drawer-open 实现「大屏常显、小屏抽屉」，不要在根上加演示用的固定高度）；
- 第一个孩子是隐藏复选框 input.drawer-toggle（id 唯一，如 demo-menu）；
- 第二个孩子 div.drawer-content 放主内容：顶部一行标题栏（汉堡按钮 label + 当前页标题），下面放业务内容；
- 第三个孩子 div.drawer-side 放侧栏：紧跟一个 label.drawer-overlay（aria-label="关闭侧栏"），再放 ul.menu（bg-base-200、w-64、p-2；宽屏可换 w-80）；
- 菜单项写真实后台模块名：仪表盘（menu-active 当前页）、订单管理（文字后跟 badge badge-sm 数字徽标）、商品管理（li 内再嵌套 ul 放「在售商品 / 下架商品」）、设置、数据报表（menu-disabled 置灰）。
【精确规格】
- 菜单项图标统一 h-5 w-5 单色 SVG，文字写真实动作与模块名，禁止出现 Primary / 主要 这类颜色名当文案。
- 开合完全靠 label 的 for 关联复选框，零 JavaScript；不要自己写 fixed 定位或遮罩逻辑。
- 真实项目侧栏铺满整页高度、内容区不被侧栏遮挡；不要让侧栏盖住页面其它内容或按钮。
- 参考结构里的舞台限高 height、overlay 静态化内联 style 只用于详情页演示，复制进真实项目后删除。
- 用到的类全部真实存在：drawer、drawer-toggle、drawer-content、drawer-side、drawer-overlay、drawer-button、lg:drawer-open、menu、menu-active、menu-disabled、menu-title、badge、badge-sm。
- 颜色全部走 daisyUI 主题变量，不要写死颜色。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="drawer drawer-open" style="height:320px;">
  <input id="demo-hero-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col w-full">
    <div class="flex flex-wrap items-center gap-2 border-b border-base-300 px-4 py-3">
      <label for="demo-hero-drawer" class="btn btn-sm btn-ghost drawer-button" aria-label="打开侧栏">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
      </label>
      <span class="font-semibold">仪表盘</span>
    </div>
    <div class="p-4">
      <p class="text-sm opacity-60">这里是后台主内容区：侧栏负责切换模块，内容区展示对应列表与图表。真实项目里侧栏铺满整页高度，内容区自适应剩余空间。</p>
    </div>
  </div>
  <div class="drawer-side" style="height:100%;">
    <label for="demo-hero-drawer" aria-label="关闭侧栏" class="drawer-overlay" style="position:static;inset:auto;background:transparent;"></label>
    <ul class="menu bg-base-200 w-64 p-2" style="min-height:100%">
      <li class="menu-title">工作台</li>
      <li>
        <a class="menu-active">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75h6v6h-6v-6zm10.5 0h6v6h-6v-6zm-10.5 10.5h6v6h-6v-6zm10.5 0h6v6h-6v-6z" /></svg>
          仪表盘
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" /></svg>
          订单管理
          <span class="badge badge-sm">12</span>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3.594A.75.75 0 0 0 9.125 3.5h-4.5a.75.75 0 0 0-.75.75v4.5c0 .199.079.39.22.531l8.37 8.37a.75.75 0 0 0 1.06 0l4.47-4.47a.75.75 0 0 0 0-1.06l-8.37-8.371a.75.75 0 0 0-.347-.206zM10 8.65a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" /></svg>
          商品管理
        </a>
        <ul>
          <li><a>在售商品</a></li>
          <li><a>下架商品</a></li>
        </ul>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
          设置
        </a>
      </li>
      <li class="menu-disabled">
        <a>数据报表（升级后可用）</a>
      </li>
    </ul>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/drawer/demo.html
- 上游官方文档：https://daisyui.com/components/drawer/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
