# 大菜单 Megamenu

> 搬运自 **daisyUI**（<https://daisyui.com/components/megamenu/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

电商 / 内容站顶部的「全部分类」：一排分类按钮，点开是一大块多列链接面板。基于浏览器原生 popover，**零 JavaScript**。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 成品区的「AI 提示词」发给你的 AI；想自己粘贴代码，再复制成品那段 `.megamenu` 结构。
3. 加分类：增删一对 `<button popovertarget="id">` + `<div id popover>`，id 一一对应。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 容器 | `div.megamenu`（带 `popover` 属性） |
| 宽度与容器同宽 | `megamenu-wide` |
| 占满整页宽 | `megamenu-full` |
| 纵向按钮堆叠（窄屏） | `megamenu-vertical` |
| 激活指示器 | `span.megamenu-active` |
| 触发按钮 | `<button popovertarget="面板id">` |
| 面板 | `<div id="面板id" popover>…</div>` |
| 面板内链接列 | `menu` 或 `menu menu-horizontal` |

## 使用要点（给 AI 与新手的提醒）

- **id 必须一一对应**：按钮的 `popovertarget` 指向哪个 id，面板的 `id` 就是它；最多 10 个面板。
- **aria 标注**：每个分类按钮写 `aria-haspopup="true" aria-controls="面板id"`，面板写 `role="group" aria-labelledby="按钮id"`；`aria-expanded` 用面板上一行 `toggle` 监听同步。静态展示的强制展开态不写 `aria-expanded`（那是演示态）。
- **键盘行为**：分类按钮之间用 `←`/`→` 切换焦点（十几行脚本）；进面板后用 `Tab` 逐个走链接。原生 popover 负责点外部关闭、Esc 关闭、关闭后焦点回到触发按钮。**面板是链接集合，不要写成 `role="menu"`**（那才需要方向键 roving）。
- 大菜单只用于**桌面端顶部导航**；手机上隐藏，换成按钮 + 抽屉。
- 开合是原生 popover 行为，不要自己写 JS / fixed 弹层。
- 详情页为了直接展示面板内容，把展开的那一面板写成了普通静态块（浏览器对 popover 的静态展开渲染支持不一致，这样最稳）；真实项目给外层 `div.megamenu` 和面板 `div` 补上 `popover` 属性，面板就恢复锚定弹出。
- 面板内容写真实分类链接；推荐卡不要外链图片，用纯色块 + 文字。

## 兼容性

- 需要支持原生 popover 的现代浏览器（Edge / Chrome 114+、Safari 17+）。
- 纯 CSS + 浏览器原生能力，颜色走主题变量，深浅色自动适配。
