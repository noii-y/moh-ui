# 列表 List

> 搬运自 **daisyUI**（<https://daisyui.com/components/list/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

列表是一个纵向条目容器：收货地址、设置项、播放队列、浏览记录都用它。每行（`list-row`）是一个横向网格，第二个子元素自动撑开剩余宽度。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部「收货地址列表」那一段发给你的 AI 直接改写；想自己粘贴代码，再复制任意变体的列表片段。
3. 加图标、改间距只改 `class`；切换主题时列表颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 列表容器 | `list`（配 `bg-base-100 rounded-box shadow-md` 成卡片） |
| 每一行 | `list-row`（第二个子元素自动撑满） |
| 指定某块撑满 | 子元素加 `list-col-grow` |
| 长文字折到下一行 | 子元素加 `list-col-wrap` |
| 行内单选 | `<input type="radio" class="radio">` |
| 行内图标块 | `flex h-10 w-10 items-center justify-center rounded-box bg-base-200` |

## 使用要点（给 AI 与新手的提醒）

- 用 `<ul>/<li>` 语义标签，不要用 `<div>` 硬拼。
- 行内单选必须加 `aria-label`；同一组单选 `name` 相同。
- 末尾操作统一 `btn btn-xs btn-ghost`；删除加 `text-error`，但不要实心红。
- 需要「浮出来」时才套卡片外壳（bg-base-100 + shadow），嵌在白容器里直接裸用 `list`。
- 图标用单色 SVG（`h-5 w-5`、`text-neutral`），不要外链图片。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
