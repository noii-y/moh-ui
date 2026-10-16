# 面包屑 Breadcrumbs

> 搬运自 **daisyUI**（<https://daisyui.com/components/breadcrumbs/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

一行小路径，告诉用户「当前在哪一层、能回退到哪一级」。常见于电商详情页、帮助中心和后台列表页。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部成品区的「AI 提示词」，整段发给你的 AI；想自己粘贴代码，再复制成品那段 `<nav>`。
3. 切换灰墨主题时，面包屑颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础容器 | `nav.breadcrumbs`（包一个 `ul`） |
| 字号 | 加 `text-sm`（与正文 14px 一致） |
| 可点层级 | `<li><a>分类名</a></li>` |
| 当前页 | `<li><span aria-current="page">商品名</span></li>`（不要套 `<a>`） |
| 带首页图标 | 第一项 `<a>` 内放 `h-4 w-4` 单色 SVG |
| 窄屏层级过长 | 给 `ul` 加 `flex-wrap:wrap`，折行展示（不整页横向滚动） |

## 使用要点（给 AI 与新手的提醒）

- **最后一层永远是纯文本**，标 `aria-current="page"`，不要做成链接。
- 层级控制在 3–5 层；手机上放不下就省略中间层，只留「首页 / 当前页」。
- 分隔箭头（/）由组件自动生成，不要手写斜杠或箭头字符。
- 可点的层级用真实 `<a>` 指向对应分类页；键盘 Tab + 回车就能回退，焦点描边不要去掉。
- 纯 CSS 实现，零 JavaScript。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
