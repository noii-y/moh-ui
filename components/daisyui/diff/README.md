# 对比 Diff

> 搬运自 **daisyUI**（<https://daisyui.com/components/diff/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

对比组件把两张等大的图叠在一起，中间一条分隔线，左半边露出第一张、右半边露出第二张。最适合设计改版前后对照、照片两种调色、Logo 双方案这类「放在一起比一比」的场景。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里的 `<figure class="diff">` 结构，按顺序放三个东西：`diff-item-1`、`diff-item-2`、空的 `diff-resizer`。
3. 把占位的渐变 SVG 换成你自己的两张 `<img>`；切换主题时，文字对比的底色会自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 对比容器 | `figure.diff` |
| 左半边内容（第一张） | `div.diff-item-1` |
| 右半边内容（第二张） | `div.diff-item-2` |
| 中间分隔条（空 div，放最后） | `div.diff-resizer` |
| 16:9 比例 | `aspect-video` |
| 文字对比·主色底 | `bg-primary text-primary-content grid place-content-center text-9xl` |
| 文字对比·浅灰底 | `bg-base-200 grid place-content-center text-9xl` |

## 使用要点（给 AI 与新手的提醒）

- **顺序不能错**：`diff-item-1` → `diff-item-2` → `diff-resizer`，分隔条那个空 div 必须是最后一个子元素。
- **纯 CSS 就是 50/50**：静态展示时分隔线停在正中间，左右各一半，截图和卡片预览都能直接看到，不需要任何脚本。
- **两张图要等大同比例**：都放在同一个 `aspect-video` 容器里，否则左右对不齐。
- **想真的能拖动**：`diff-resizer` 自带 `resize: horizontal`，但要在鼠标 / 触屏下顺畅拖动，真实项目通常再补一小段 JS。本组件保持零依赖零 JS，只做静态对比。
- **可访问性**：外层 `figure` 加 `tabindex="0"`；两个 `diff-item` 加 `role="img"` 和 `aria-label`，否则读屏用户不知道左右分别是什么。

## 兼容性

- 结构部分纯 CSS，无 JavaScript、无框架依赖，HTML 直接可用。
- 文字对比的底色走 `--color-*` 主题变量，深浅色主题、灰墨多套主题均自动适配。
- 拖动交互需要额外 JS（官方推荐做法），不在本组件零依赖范围内。
