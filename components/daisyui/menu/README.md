# 菜单 Menu

> 搬运自 **daisyUI**（<https://daisyui.com/components/menu/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Menu 是一列链接，最常做后台侧边栏，也可以横排放进顶栏。它支持图标、分组标题、当前页高亮、数字徽标、折叠子菜单和禁用态。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 里的**「复制 AI 提示词」**，整段发给你的 AI；想自己粘贴代码，再用「复制成品 HTML」。
3. 改条目、激活态只改 `class` 与文字即可；切换灰墨主题时，菜单底色与高亮色自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 垂直菜单（侧边栏） | `menu`（默认） |
| 横向菜单（顶栏） | `menu menu-horizontal` |
| 固定宽度 | `w-56` / `w-64` 等 |
| 分组标题（不可点） | `<li class="menu-title">标题</li>` |
| 当前所在项 | 项内 `<a class="menu-active">` |
| 禁用项 | 项内 `<a class="menu-disabled" aria-disabled="true">` |
| 数字徽标 | 文字后 `<span class="badge badge-sm">12</span>` |
| 默认展开的子菜单 | `<details open><summary>父项</summary><ul>…</ul></details>` |
| 默认收起的子菜单 | 去掉 `open`：`<details><summary>…</summary></details>` |
| 交给 JS 控制展开 | `menu-dropdown-toggle` + `menu-dropdown`，加 `menu-dropdown-show` 展开 |
| 尺寸 | `menu-sm`（默认 md）`menu-lg` |

## 使用要点（给 AI 与新手的提醒）

- **侧边栏垂直、顶栏横向**：后台菜单用默认垂直；顶栏栏目用 `menu-horizontal`。
- **当前项一定高亮**：父级与子级的当前页都要加 `menu-active`，否则用户不知道在哪。
- 图标统一 `h-5 w-5`、单色 `stroke="currentColor"`，不要用彩色 emoji 当图标。
- 子菜单优先用原生 `<details>`（默认展开就加 `open`），零 JS、自带键盘支持；只有需要 JS 接管展开时才用 `menu-dropdown-toggle` / `menu-dropdown`。
- 禁用项（`menu-disabled`）要在文字里写明原因（「即将上线」「联系管理员开通」），并加 `aria-disabled="true"`，别只留一个灰条。
- 条目用 `<a>`（跳转）或 `<button>`（动作），不要用不能聚焦的 `<div>` 冒充可点项。

## 兼容性

- 纯 CSS 实现，子菜单展开依赖原生 `<details>`，无需 JavaScript；颜色走 `--color-*` 主题变量，深浅色与灰墨 10 套主题均自动适配。
- 响应式切换垂直 / 横向依赖 `lg`（≥1024px）断点；如需更小断点，需自行补充对应工具类。
