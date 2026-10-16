# 页脚 Footer

> 搬运自 **daisyUI**（<https://daisyui.com/components/footer/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

页脚是落在页面最底部的一条信息区：左边放品牌名和简介，右边放按类分组的帮助与导航链接，最下面一行版权。它是普通文档流，跟在页面内容后面，不需要固定定位。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<footer>` 到自己的页面底部。
3. 改分组标题和链接文字即可；切换灰墨主题时，页脚颜色会自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 页脚容器（手机纵排） | `footer` |
| ≥640px 横排 | `footer sm:footer-horizontal` |
| 一直横排 | `footer footer-horizontal` |
| 内容居中 | `footer footer-center` |
| 列标题 | `<h6 class="footer-title">` |
| 普通链接 | `link link-hover` |
| 深色底 + 对应文字 | `bg-neutral text-neutral-content` |
| 品牌区 | 最左边一个 `<aside>`，品牌名 `text-xl font-bold` |
| 版权分隔行 | `<div class="border-t pt-4 text-sm text-base-content/60">` |
| 圆形图标按钮 | `btn btn-ghost btn-circle btn-sm`（须 `aria-label`） |
| 订阅表单拼接 | `join` 包 `input` + `button`，各加 `join-item` |

## 使用要点（给 AI 与新手的提醒）

- **手机纵排、宽屏横排**：写 `footer sm:footer-horizontal` 即可，不要自己写媒体查询；默认就是纵向堆叠。
- **品牌用 `aside`、链接列用 `nav`**：一个页脚通常一个 `aside`（品牌）加若干 `nav`（分组），分组按用户找东西的习惯命名。
- **版权单独成行**：别把版权塞进链接格，放在 `<footer>` 外面用 `border-t` 顶一条分隔线，文字用弱化色。
- **深色底必须配对应文字色**：`bg-neutral` 配 `text-neutral-content`，否则深字压深底看不清。
- **纯图标按钮必须加 `aria-label`**（如 `aria-label="联系客服"`）；图标语义要对得上入口用途：客服画对话气泡、邮箱画信封、电话画听筒、反馈画留言气泡，不要画可识别的第三方品牌 logo。
- 页脚是文档流，**不要加 `fixed` 定位**——它本来就该跟在页面内容后面。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
