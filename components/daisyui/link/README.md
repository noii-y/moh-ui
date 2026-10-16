# 链接 Link

> 搬运自 **daisyUI**（<https://daisyui.com/components/link/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

链接（Link）指向另一个页面或位置。Tailwind 默认会把链接的下划线重置掉，daisyUI 的 `link` 类把「可点」的下划线加回来，并提供一套跟随主题的语义色。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选在 [demo.html](./demo.html) 点「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，再用「复制成品 HTML」。
3. 改颜色、下划线只改 `class` 即可；切换灰墨主题时链接颜色自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础链接（带下划线） | `<a class="link">文字</a>` |
| 主 / 次 / 强调色 | `link link-primary` / `link-secondary` / `link-accent` |
| 中性 / 信息 / 成功 / 警告 / 错误 | `link-neutral` / `link-info` / `link-success` / `link-warning` / `link-error` |
| 只有 hover 才显示下划线 | `link link-hover` |
| 有颜色、无下划线（正文常见） | `link-primary`（不写 `link`） |
| 外链新窗口 | 加 `target="_blank" rel="noopener"` |

## 使用要点（给 AI 与新手的提醒）

- **跳转才用 `<a>`，动作用 `<button>`**：提交、保存、删除、弹框这类不要用链接假装。
- 正文段落里的链接建议保留下划线（`link`），保证一眼可点；导航、辅助操作可以用 `link-hover` 让排版更干净。
- 新窗口打开外链必须成对写 `target="_blank"` 和 `rel="noopener"`，缺一不可。
- `link-error`、`link-warning` 只在「被驳回」「即将到期」这类含义明确时用，别为了好看染色。
- 链接文字写真实动作（「查看订单」「联系客服」），不要写「Primary」这种颜色名。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--link-color` 主题变量，深浅色主题、灰墨多套主题均自动适配。
