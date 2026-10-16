# 标签页 Tab

> 搬运自 **daisyUI**（<https://daisyui.com/components/tab/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

标签页把同一层级的几类内容收进一排标签，点哪个就显示哪块：订单按状态分类、商品详情页的「商品 / 评价 / 详情」、后台面板的子区域切换，都用它。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」整段发给你的 AI；想自己粘贴代码，再复制成品 HTML，保存成 `.html` 双击即可预览。
3. 换形态只改容器 class；切换灰墨主题时，标签颜色自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 容器（一排标签） | `tabs` |
| 单个标签 | `tab` |
| 当前选中标签 | `tab-active` |
| 禁用标签 | `tab-disabled` |
| 标签对应的内容块 | `tab-content` |
| 下划线形态 | `tabs-border` |
| 提升式（与内容连成块） | `tabs-lift` |
| 盒装分段控制器 | `tabs-box` |
| 标签排到内容下方 | `tabs-bottom` |
| 尺寸 | `tabs-sm`（默认 md）`tabs-lg` |
| 纯 CSS 切换 | `<input type="radio" name="同组同名" class="tab">`，每选一个显示它后面紧跟的 `.tab-content` |

## 使用要点（给 AI 与新手的提醒）

- **纯 CSS 零 JS**：一组同名 radio（如 `name="order_status"`）就是标签切换器；想默认打开哪类，就给那个 radio 加 `checked`。
- **每组 name 唯一**：一个页面有多组标签时，各组 name 不能相同，否则互相串台。
- **内容必须紧跟对应 radio**：daisyUI 的规则是「选中的 radio 后面那一块 `.tab-content`」才显示，顺序不能乱。
- **标签太多怎么办**：带 `.tab-content` 的 radio 标签窄屏放不下就自然折行（内容块才能被挤到第二行，别强行 `flex-nowrap`）；只有纯标签、不带内容块的链接式标签，才用 `overflow-x-auto` + 每项 `shrink-0` 做单行横向滑动，都不能把整页撑宽。
- 用 `<a role="tab" class="tab">` 时当前项写 `tab-active`；用 radio 时用 `aria-label` 写中文标签名。
- 标签页切的是「可见内容区块」，表单里二选一的场景请用单选框 Radio。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
