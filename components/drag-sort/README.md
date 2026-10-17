# 拖拽排序 Drag & Drop Sort

> 灰墨自研增强组件：样式基于 daisyUI 类（零依赖、随主题变色），换序行为是页面内嵌的一小段原生 JavaScript，无第三方拖拽库。

## 它是什么

后台菜单、配置列表、看板卡片的顺序调整组件：鼠标按住一行拖动即可换序；把手聚焦后键盘 ↑/↓ 也能移动；目标位高亮、被拖项半透明，屏幕阅读器通过 `aria-live` 播报移动结果。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../assets/utilities-patch.css" />
```

2. 首选在灰墨详情页点「复制 AI 提示词」，整段发给你的 AI；想自己动手，就把 [demo.html](./demo.html) 成品区那一段 `<ul>` 连同后面的 `<script>` 一起复制到自己的页面——保存为 `.html` 双击即可预览。

3. 增删菜单项只改 `<li>`：`data-label` 与可见名称保持一致；换序后按 `ul` 当前子节点顺序把业务 id 数组提交给后端保存。

## 常用写法速查

| 想要的效果 | 做法 |
|---|---|
| 可拖动行 | `<li draggable="true" data-label="用户管理">` |
| 拖拽把手（键盘入口） | `<button class="btn btn-ghost btn-sm btn-square sort-handle" aria-label="拖拽排序：用户管理">` 内联 grip SVG |
| 被拖项半透明 | 脚本里拖起时加 `opacity-50`，结束时移除 |
| 目标位高亮 | 脚本里给悬停目标行切 `border-primary` |
| 屏幕阅读器播报 | 隐藏 `<div aria-live="polite">`，移动后写入「已将 X 移动到第 N 位」 |
| 带序号 | 行内加 `<span class="sort-no text-sm opacity-50 w-5 text-center">1</span>`，换序后重排 |
| 行尾删除按钮 | `<button class="btn btn-ghost btn-xs" data-del>`，点击 `li.remove()` |
| 锁定不可排序行 | 不写 `draggable`，加 `aria-disabled="true"` 与锁图标，脚本跳过 |

## 使用要点（给 AI 与新手的提醒）

- **纯 CSS 做不到拖拽换序**，这是 HTML5 Drag & Drop API 的活；本组件只用原生 `dragstart / dragover / drop / dragend` + `insertBefore`，约 50 行，不要为了它引入 SortableJS 这类库。
- 拖拽只是改前端 DOM，**顺序不会自动保存**：用户点保存时把行的 id 数组提交后端，刷新后按后端顺序渲染。
- 把手必须是真实 `<button>`（不是 ≡ 字符），带 `aria-label`；键盘用户靠 Tab 聚焦把手、↑/↓ 移动，`keydown` 里记得 `e.preventDefault()` 防止页面滚动。
- 禁用行用 `aria-disabled="true"` 而不是 `disabled`：`li` 上没有 disabled 属性，脚本里判断 `hasAttribute('aria-disabled')` 并跳过它。
- `dragover` 一定要 `e.preventDefault()`，否则浏览器不允许 drop；判断插入位置用鼠标在目标行上半段还是下半段。
- 图标全部用内联单色 SVG（grip 六点、锁、删除），不用 emoji。

## 兼容性

- 样式：纯 daisyUI 类 + 极少量内联（去掉列表圆点、隐藏播报区、把手 grab 光标），深浅色主题自动适配。
- 交互：HTML5 拖拽在桌面 Chrome / Edge / Firefox / Safari 均可用；触屏设备上拖拽支持有限，键盘 ↑/↓ 是兜底通道。
