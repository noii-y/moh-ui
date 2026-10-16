# 顶部导航 Navbar

> 搬运自 **daisyUI**（<https://daisyui.com/components/navbar/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Navbar 是横在页面顶部的一条导航：左边放品牌，中间放栏目，右边放搜索、登录、注册等操作。它本身是一条 flex 横条，由 `navbar-start`、`navbar-center`、`navbar-end` 三段组成。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 里的**「复制 AI 提示词」**，整段发给你的 AI，它会结合你的项目直接生成；想自己粘贴代码，再用「复制成品 HTML」。
3. 改栏目、按钮只改 `class` 与文字即可；切换灰墨主题时，导航底色与按钮颜色自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 顶栏容器 | `navbar` |
| 左 / 中 / 右三段 | `navbar-start` / `navbar-center` / `navbar-end` |
| 横向栏目 | 里面套 `menu menu-horizontal px-1` |
| 当前所在栏目 | 项内 `<a class="menu-active">` |
| 小屏收起、大屏展开栏目 | 中间段加 `hidden lg:flex` |
| 品牌占位 / 主操作占位 | `flex-1` / `flex-none` |
| 圆形图标按钮（搜索、购物车） | `btn btn-ghost btn-circle` + `aria-label` |
| 购物车右上角数字 | `indicator` + 内部 `badge badge-sm indicator-item` |
| 账户头像下拉 | `dropdown dropdown-end`，预览展开加 `dropdown-open` |
| 换底色 | `bg-neutral text-neutral-content` / `bg-base-300` / `bg-primary text-primary-content` |
| 吸顶固定 | 外层加 `sticky top-0 z-10` |

## 使用要点（给 AI 与新手的提醒）

- **一个顶栏只留一个主按钮**：「免费试用」「立即注册」用 `btn-primary`，「登录」这类次要操作降为 `btn-ghost`，别两头都做实心按钮。
- 纯图标按钮**必须加 `aria-label`**（搜索、购物车、汉堡），否则读屏用户听不懂。
- 小屏（约 390px）下中间栏目加 `hidden lg:flex` 收起，品牌与右侧操作始终保留，整条不要横向溢出。
- 在组件舞台 / 预览里**不要加 `fixed` 固定定位**，否则会盖住文档与复制按钮；需要吸顶时在自己项目里加 `sticky top-0 z-10`。
- 下拉菜单（账户、汉堡）在静态预览里用 `dropdown-open` 强制展开以便截图，实际使用时去掉该类、靠原生点击展开，无需写 JS。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
- 响应式只依赖 `lg`（≥1024px）一个断点；如需更小的断点，需自行补充对应工具类。
