# 骨架屏 Skeleton

> 搬运自 **daisyUI**（<https://daisyui.com/components/skeleton/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

数据加载时用带呼吸动画的灰色块占位，让页面先有形状，用户不会盯着空白发呆。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」发给你的 AI，让它按你的项目生成；想直接粘贴代码，再复制成品 HTML。
3. 把内容区块换成 `skeleton` 块，尺寸用 `h-*` / `w-*` 模拟真实排版。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 占位块 | `skeleton` |
| 圆形头像占位 | `skeleton h-12 w-12 rounded-full` |
| 文字条 | `skeleton h-4 w-32` |
| 图块 | `skeleton h-32 w-full rounded-box` |
| 渐变文字等待态 | `<span class="skeleton skeleton-text">AI 正在生成回复…</span>` |

## 使用要点（给 AI 与新手的提醒）

- **形状要和真实内容一致**：头像就 `rounded-full`，按钮就小矩形，不要随便画几个方块。
- 文字条细一点（`h-4`），图块大一点（`h-24` / `h-32`），最后一行故意短一截。
- 条目纵向间距用 `flex flex-col gap-*`（本库补丁没有 `space-y-*`）；宽度用标准档 `w-*`，不写分数宽。
- 数据到了就整块替换成真实内容，骨架屏只是加载态。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
