# 空状态 Empty State

> 灰墨自研增强组件（基于 daisyUI 的 card / btn，MIT 开源）。

## 它是什么

列表没有数据、搜索没有结果、页面加载失败时的占位内容：一个线性单色图标 + 标题 + 一句说明，再放不放操作按钮，取决于用户下一步该干什么。纯 HTML/CSS，零 JS、零外链图标。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段居中结构到自己的页面，把标题、说明和按钮文案换成你自己业务的。
3. 切换灰墨主题时，图标和按钮颜色自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 整页居中卡片 | `card bg-base-100 shadow-sm mx-auto max-w-md` + `card-body flex flex-col items-center justify-center text-center` |
| 居中图标 | 内联 SVG，`stroke="currentColor"`，整页 56px、表格内嵌 32px |
| 标题 | `card-title justify-center`（或 `text-lg font-semibold`） |
| 主操作按钮 | `card-actions justify-center` 里放 `btn btn-primary` |
| 表格内嵌紧凑横排 | `flex flex-row items-center gap-3`，图标 32px，文字左对齐 |
| 图标无障碍 | 图标加 `aria-hidden="true"`，读屏只读标题与说明 |

## 使用要点（给 AI 与新手的提醒）

- **文案写「下一步」**：「暂无数据」是空话；写清现状（还没有项目）+ 给方向（点这里建第一个）。
- **什么时候放按钮**：用户能立刻行动 → 放主按钮；搜索无结果 → 不放按钮；加载失败 → 放「重试」，别放引导新建。
- **图标用单色 SVG**：`stroke="currentColor"` 跟随主题文字色，不要写死灰色，不要用 emoji。
- **表格里别整页居中**：筛出 0 行时用紧凑横排（32px 图标 + 一行说明），高度贴近一行数据。
- 标题用语义标签（h3），别只用加粗 div。

## 兼容性

- 纯 HTML/CSS 实现，无 JavaScript、无框架依赖、无外链图标库，HTML 直接可用。
- 颜色全部走 daisyUI 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
