# 窗口样机 Mockup Window

> 搬运自 **daisyUI**（<https://daisyui.com/components/mockup-window/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

画一个操作系统窗口的轮廓，把文档、登录框或代码预览放进窗口里，让截图感的内容不用真截图也能展示。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」发给你的 AI，让它按你的项目生成；想直接粘贴代码，再复制成品 HTML。
3. 内容区放任意 daisyUI 组件或文档片段，切换主题时自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 窗口外框 | `mockup-window` |
| 描边窗口 | 加 `border border-base-300` |
| 填充底色 | 加 `bg-base-100` |
| 限宽 | 外层加 `max-w-md` / `max-w-2xl mx-auto` |
| 窗口标题行 | 内容区第一行：`border-t border-base-300 px-4 py-2 text-sm opacity-60` |

## 使用要点（给 AI 与新手的提醒）

- **圆点是自动画的**：`mockup-window` 自带一行灰色圆点（CSS 伪元素），不要再加圆点行，否则和自带圆点重复。
- 不要写死像素宽度，用 `max-w-*`；内容多高窗口就多高。
- 内容区可以放文档、表单、代码块，甚至再套别的样机，保持零依赖、不用外链资源。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
