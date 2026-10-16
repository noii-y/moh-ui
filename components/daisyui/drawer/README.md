# 抽屉侧栏 Drawer

> 搬运自 **daisyUI**（<https://daisyui.com/components/drawer/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

后台系统的侧边导航布局：大屏时左侧菜单常驻，小屏时变成从侧边滑出的抽屉。开合由一个隐藏复选框 + `label` 完成，**零 JavaScript**。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 成品区的「AI 提示词」发给你的 AI；想自己粘贴代码，再复制成品那段 `.drawer` 结构。
3. 切主题时，侧栏底色（`bg-base-200`）、菜单高亮全部自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 根容器 | `drawer` |
| 隐藏复选框（id 要唯一） | `drawer-toggle` |
| 主内容区 | `drawer-content` |
| 侧栏容器 | `drawer-side` |
| 半透明遮罩（点按关闭） | `drawer-overlay` |
| 开关按钮 | `btn` + `drawer-button` |
| 大屏常显 / 小屏抽屉 | `lg:drawer-open`（本页成品即用它） |
| 任何宽度强制常显 | `drawer-open` |
| 从右侧滑出 | `drawer-end` |
| 侧栏菜单 | `menu` + `bg-base-200 w-80 p-2` |

## 使用要点（给 AI 与新手的提醒）

- 结构三层不能乱：`drawer-toggle` 必须是 `drawer` 的第一个孩子，`drawer-side` 最后。
- 按钮 / 遮罩都用 `<label for="复选框id">`，不要写 JS toggle。
- 侧栏里的菜单写真实模块名；当前页 `menu-active`，带数量用 `badge badge-sm`，未开通用 `menu-disabled`。
- 详情页成品里的内联高度是**演示限高**用的，真实项目去掉，侧栏会按设计自带铺满整页高度（drawer-side 本身 100dvh）；成品本身的 `lg:drawer-open` 写法可直接照搬。
- 纯 CSS 实现，无 JavaScript、无框架依赖。

## 兼容性

- 纯 CSS 实现，颜色全部走 `--color-*` 主题变量，深浅色主题自动适配。
- `lg:drawer-open` 的断点为 1024px（与补丁层响应式断点一致）。
