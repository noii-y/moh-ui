# 筛选条 Filter

> 搬运自 **daisyUI**（<https://daisyui.com/components/filter/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

筛选条把一组单选 / 多选做成一排按钮，放在商品列表、文章列表顶部，让用户按条件过滤内容。选中某一项后，其余单选会自动收窄、并露出重置按钮；纯 CSS 即可完成这套外观，零 JavaScript。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<form class="filter">` 到自己的页面。
3. 改分类、改多选项只改 `aria-label`；同一组单选共用一个 `name`。切换主题时按钮颜色自动跟随。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 外层容器 | `<form class="filter">`（或 `<div class="filter">`） |
| 单选分类 | `<input type="radio" name="x" class="btn" aria-label="…">` |
| 多选标签 | `<input type="checkbox" name="x" class="btn" aria-label="…">` |
| 清除 / 重置 | `<input type="reset" class="btn btn-square" value="×">` |
| 无表单时的「全部」 | 第一项 `<input type="radio" class="btn filter-reset" aria-label="全部">` |
| 窄屏换行 | `.filter` 自带 `flex-wrap`，选项多了自动折行 |

## 使用要点（给 AI 与新手的提醒）

- **纯 CSS 只做外观**：选中高亮、收起其余单选、露出重置按钮都是 CSS 完成；**真正按条件过滤下方列表必须自己写 JS**（监听 `change` 控制列表显隐），别以为套上组件列表就会自动变。
- 单选互斥用 `radio`（共用一个 `name`），可叠加用 `checkbox`。
- 按钮文字来自 `aria-label`，每个 `radio` / `checkbox` 都要写，否则按钮是空的。
- `type="reset"` 的 × 按钮平时隐藏，选中任一项后才出现；放在行首或行尾都行。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 依赖 `:has()` 选择器（现代浏览器均支持）；颜色走 `--color-*` 主题变量，深浅色主题自动适配。
