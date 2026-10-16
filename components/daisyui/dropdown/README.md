# 下拉菜单 Dropdown

> 搬运自 **daisyUI**（<https://daisyui.com/components/dropdown/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

下拉菜单在触发元素（按钮、头像、图标）旁边展开一列菜单或一块卡片。顶栏的个人中心、表格行的「更多操作」、通知预览都是它。daisyUI 5 提供 details、Popover API、CSS focus 三种写法，本库统一采用零 JavaScript 的 CSS focus 写法。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段到自己的页面。
3. 改弹出方向、菜单项只改 `class` 与文案；切换主题时菜单底色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础结构（CSS focus 写法） | `<div class="dropdown"><div tabindex="0" role="button" class="btn">按钮</div><ul tabindex="-1" class="dropdown-content menu …">…</ul></div>` |
| 菜单容器 | `dropdown-content menu bg-base-100 rounded-box w-52 border border-base-300 p-2` |
| 强制展开（文档 / 截图用） | 容器加 `dropdown-open` |
| 悬停也可触发（保留点击兜底） | 容器加 `dropdown-hover` |
| 对齐按钮末尾 / 起始 / 居中 | `dropdown-end` / `dropdown-start` / `dropdown-center` |
| 弹出方向 | `dropdown-top`（上）/ `dropdown-bottom`（下，默认）/ `dropdown-left` / `dropdown-right` |
| 卡片式弹层 | `dropdown-content` 换成 `<div class="card …">` |
| 菜单分组 | `<li class="menu-title">组名</li>`；分隔 `<li><hr class="divider"></li>` |
| 危险操作项 | `<a class="text-error">退出登录</a>` |

## 使用要点（给 AI 与新手的提醒）

- **触发元素用 `<div tabindex="0" role="button">` 而不是 `<button>`**：Safari 对原生 button 聚焦有多年 bug，官方因此用 div 兜底，这样 Tab 键盘可达、失焦自动收起。
- **静态展示时加 `dropdown-open`**，并给容器留出高度（内联 `min-height`），否则展开的菜单会被下一个元素裁切；上线前去掉 `dropdown-open`。
- 靠近页面边缘的按钮要选对方向：靠近上边缘用 `dropdown-top`，靠近右边缘用 `dropdown-end` + `dropdown-left`。
- 危险操作（退出登录）用 `text-error`；菜单项是真实功能名，一个菜单最多一个当前高亮项。
- 不要写 `z-1`、`shadow-sm`（本库 vendor 未打包这两个工具类，菜单本身已有 `z-index` 与卡片底色）。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
