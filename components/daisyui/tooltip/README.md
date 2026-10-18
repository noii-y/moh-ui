# 悬浮提示 Tooltip

> 搬运自 **daisyUI**（<https://daisyui.com/components/tooltip/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

悬浮提示是鼠标停在元素上时冒出的一句小字，用来解释图标按钮的用途、说明快捷键或提醒风险。纯 CSS 实现，悬停出现、移开消失。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段到自己的页面。
3. 提示文字写在 `data-tip` 属性里，改方向、改颜色只改 `class`。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础用法 | `<div class="tooltip" data-tip="保存 (Ctrl+S)"><button class="btn">…</button></div>` |
| 强制显示（文档 / 截图用） | 加 `tooltip-open` |
| 弹出方向 | `tooltip-top`（上，默认）/ `tooltip-bottom` / `tooltip-left` / `tooltip-right` |
| 语义色 | `tooltip-primary` / `tooltip-secondary` / `tooltip-error` 等 |
| 带自定义内容（图标等） | 用 `<div class="tooltip-content">…</div>` 代替 `data-tip` |
| 仅大屏显示 | `lg:tooltip` |
| 提示文字要被读屏念出 | `tooltip-content` 加 `id`，触发元素挂 `aria-describedby` |

## 使用要点（给 AI 与新手的提醒）

- **一句话，不超过两行**：写「是什么 + 快捷键 / 结果」，如「保存 (Ctrl+S)」「删除后不可恢复」；不要放链接和长段落。
- **纯图标按钮必须配 tooltip**：`data-tip` 给视力用户看，按钮本身还要加 `aria-label` 照顾读屏用户——`data-tip` 是 CSS 伪元素、读屏不念它。两者分工：aria-label 只说动作（如「保存」），快捷键、结果留给气泡（如「保存 (Ctrl+S)」），不要求逐字一致；只有要让读屏念气泡全文时，才用真实 `tooltip-content` + `aria-describedby`，此时两边文案才保持一致。
- **键盘也能弹出，且不拦焦点**：鼠标悬停或键盘 `Tab` 聚焦（`:focus-visible`）时气泡出现，移开即消失。它不是弹层：不圈定焦点、不用 Tab 穿梭、`Esc` 与它无关，不要加任何焦点陷阱或键盘 JS。
- 静态展示加 `tooltip-open` 时，容器四周留足内边距，否则气泡会顶出边界；上线前去掉 `tooltip-open`。
- 默认中性灰最通用；主色 / 错误色只在含义明确时用。
- 颜色走主题变量，不要写死。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 键盘聚焦触发依赖 `:has(:focus-visible)`（近两年的 Chromium / Firefox / Safari 均支持）。
- 颜色走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
