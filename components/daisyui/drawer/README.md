# 抽屉侧栏 Drawer

> 搬运自 **daisyUI**（<https://daisyui.com/components/drawer/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

后台系统的侧边导航。两种形态：

- **常驻布局**：大屏时左侧菜单常驻，小屏时收成可展开的抽屉，纯 CSS 零 JS。
- **浮层抽屉**：点「筛选」「汉堡按钮」才从侧边滑出的面板，推荐用原生 `<dialog>` 实现，自带焦点圈定、Esc 关闭、关闭后焦点返回。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. **常驻侧栏**用纯 CSS 三层结构；**点按钮开合的浮层抽屉**推荐原生 dialog：

```html
<!-- 浮层抽屉：触发按钮 -->
<button class="btn" onclick="导航.showModal();导航.querySelector('.menu a').focus()">展开导航菜单</button>

<!-- 抽屉本体（左侧 drawer-m，右侧加 drawer-m-end） -->
<dialog id="导航" class="drawer-m" aria-labelledby="nav-title">
  <div class="flex items-center justify-between border-b border-base-300 px-4 py-3">
    <h2 id="nav-title" class="font-semibold">工作台</h2>
    <form method="dialog"><button class="btn btn-sm btn-circle btn-ghost" aria-label="关闭">✕</button></form>
  </div>
  <ul class="menu w-full p-2">
    <li><a class="menu-active">仪表盘</a></li>
    <li><a>订单管理</a></li>
  </ul>
</dialog>

<!-- drawer-m 定位与动画（放到 <head> 或本页样式里） -->
<style>
  dialog.drawer-m{position:fixed;inset:0 auto 0 0;margin:0;width:300px;max-width:85vw;height:100vh;max-height:100vh;border:0;border-radius:0;padding:0;background:var(--color-base-100);color:var(--color-base-content);box-shadow:0 0 40px rgba(0,0,0,.25);}
  dialog.drawer-m-end{inset:0 0 0 auto;}
  dialog.drawer-m::backdrop{background:rgba(0,0,0,.45);}
  @keyframes drawerSlideIn{from{transform:translateX(-100%)}to{transform:translateX(0)}}
  dialog.drawer-m[open]{animation:drawerSlideIn .2s ease;}
  @media (prefers-reduced-motion:reduce){dialog.drawer-m[open]{animation:none;}}
</style>
```

3. 切灰墨主题时，侧栏底色、菜单高亮、抽屉背景全部自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 常驻根容器 | `drawer` + `lg:drawer-open`（大屏常显/小屏抽屉） |
| 隐藏复选框（id 唯一） | `drawer-toggle` |
| 主内容区 / 侧栏 | `drawer-content` / `drawer-side` |
| 半透明遮罩（点按关闭） | `drawer-overlay` |
| 从右侧滑出 | `drawer-end` |
| 浮层抽屉（推荐） | `<dialog class="drawer-m">` + `showModal()` |
| 浮层抽屉停靠右侧 | 再加 `drawer-m-end` |
| 侧栏菜单 | `menu` + `bg-base-200 w-64 p-2` |

## 使用要点（给 AI 与新手的提醒）

- **先分清两种用法**：整页常驻左侧菜单用纯 CSS `drawer`；点按钮才出现的浮层（导航、筛选、购物车）用原生 `<dialog>`。daisyUI 自带的 `.drawer-side` 被复选框 gate 住、不支持 `<dialog>`，浮层别硬套它。
- **dialog 方案键盘原生可用**：`showModal()` 打开后，Tab 只在抽屉内循环、跑不到背景；Esc 关闭；背景内容不可点；关闭后焦点自动回到触发按钮。这些都由浏览器原生提供，**不要自己写焦点陷阱**。
- **焦点落点别落在关闭 ✕ 上**：`showModal()` 后顺手 `querySelector(...).focus()` 到主内容——导航抽屉聚焦第一个菜单项，筛选抽屉聚焦第一个输入框。删除、清空、重置这类危险操作**不要**加 `autofocus`，免得误按回车直接触发。
- 每个 `<dialog>` 加 `aria-labelledby` 指向抽屉标题 id，读屏器会念出抽屉名。右上角 ✕ 与底部按钮都包一层 `<form method="dialog">`，点一下自动关闭、不用写 JS。
- **滑入动画 ≤200ms** 是用户触发的功能性动效，被审美硬边界允许；务必同时写 `@media (prefers-reduced-motion:reduce)` 关掉，照顾减弱动效偏好的用户。
- 常驻菜单结构三层不能乱：`drawer-toggle` 是 `drawer` 第一个孩子，`drawer-side` 最后。当前页 `menu-active`（同一时刻只一个），数量用 `badge badge-sm`，未开通用 `menu-disabled`。
- 纯 CSS 复选框法**不锁背景、不圈焦点、不支持 Esc**，只适合常驻布局、无 JS 环境或静态展示；静态写法必须补 `role="dialog" aria-modal="true" aria-labelledby="标题id"`。
- 详情页成品里的内联高度是**演示限高**用的，真实项目去掉，侧栏会按设计铺满整页高度；常驻根把演示用的 `drawer-open` 换成 `lg:drawer-open`。

## 兼容性

- 常驻布局纯 CSS，浮层抽屉用原生 `<dialog>`（现代 Chromium、Firefox、Safari 均支持 `showModal()`、`::backdrop`、焦点圈定与 Esc）。
- 颜色全部走 `--color-*` 主题变量，深浅色主题自动适配。
- `lg:drawer-open` 断点为 1024px（与补丁层响应式断点一致）。
