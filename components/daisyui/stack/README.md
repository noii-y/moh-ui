# 叠放 Stack

> 搬运自 **daisyUI**（<https://daisyui.com/components/stack/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

把几张卡片或图片叠成一摞：商品图册、通知堆、头像组都适用。第一个子元素在最上层，后面的卡片依次压在下层。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」发给你的 AI，让它按你的项目生成；想直接粘贴代码，再复制成品 HTML。
3. 把要叠的卡片放进 `stack` 容器，整体用 `w-*` 限宽。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 叠放容器 | `stack` |
| 向上对齐 / 向左 / 向右错开 | `stack-top` / `stack-start` / `stack-end` |
| 整体限宽 | 外层加 `w-48` / `w-64` / `max-w-full` |
| 演示错位 | 子元素加最小内联 `style="transform:translate(1rem,0.5rem)"` |

## 使用要点（给 AI 与新手的提醒）

- **第一个子元素在最上层**（`first-child` 自动给最高层级）：想让哪张卡在最前，就把它放第一个。
- **hover 展开**：本库补丁没有 `hover:` 前缀类，静态演示用内联 `transform` 错开；真实交互请用内联 hover CSS 或项目里的 Tailwind hover 类（如 `hover:-translate-x-4`），不要写 JS。
- 代替官方在线图片的色块用 `bg-primary` / `bg-secondary` / `bg-accent`，保持零依赖。
- 叠摞整体限宽，手机窄屏不溢出。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
