# 表格 Table

> 搬运自 **daisyUI**（<https://daisyui.com/components/table/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

表格用行列结构展示一批同构数据：订单、用户、库存、报表。纯 CSS 实现，类名版 HTML，不依赖任何 JS 表格库。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部「后台订单管理表格」那一段发给你的 AI 直接改写；想自己粘贴代码，再复制任意变体的表格片段。
3. 加斑马纹、粘性表头只改 `class`；切换主题时表格颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础表格 | `table table`（配 `overflow-x-auto` 外层） |
| 斑马纹 | 加 `table-zebra` |
| 悬停整行高亮 | 行 `<tr class="row-hover">` |
| 高亮选中行 | 行 `<tr class="bg-base-200">`（5.7 无独立 active 类） |
| 表头吸顶 | 表加 `table-pin-rows` + 外层定高 `overflow-y-auto` |
| 首列吸左 | 表加 `table-pin-cols` + 外层 `overflow-x-auto` |
| 密度 | `table-xs` `table-sm`（默认 md）`table-lg` |
| 带边框底色 | 外层 `rounded-box border border-base-300 bg-base-100` |
| 行内复选框 | `<input type="checkbox" class="checkbox">` |

## 使用要点（给 AI 与新手的提醒）

- **永远先包 `overflow-x-auto`**：列多窄屏时表内横滑，页面不出现横向滚动条。
- `table-pin-rows` / `table-pin-cols` 必须配独立滚动容器才生效：纵向滚动给 `height + overflow-y-auto`，横向给 `overflow-x-auto`；没有定高容器别加 pin 类。
- 状态枚举用 `badge badge-sm` 语义色，不要只用红绿字体。
- 操作按钮放最后一列：次要 `btn btn-xs btn-ghost`，当前状态主动作才 `btn-primary`；没有该状态动作就留空，别放禁用按钮占位。
- 金额、数量列右对齐 + 等宽数字（`text-right`）。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
