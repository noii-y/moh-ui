# 代码窗口样机 Mockup Code

> 搬运自 **daisyUI**（<https://daisyui.com/components/mockup-code/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

代码窗口样机（Mockup Code）画一个深色代码编辑器窗口，带行号或符号前缀，用来在文档里展示一段代码的样子。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里的 `<div class="mockup-code">` 整段，把每行 `<code>` 内容换成你的代码（尖括号转义成 `&lt;` / `&gt;`）。
3. 切换灰墨主题时，窗口底色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 窗口外壳 | `<div class="mockup-code">` |
| 带行号 | 每行 `<pre data-prefix="1"><code>…</code></pre>` |
| 符号前缀 | `data-prefix="$"` 或 `data-prefix=">"` |
| 不带前缀 | `<pre><code>…</code></pre>` |
| 高亮一行 | 该 `<pre>` 加 `bg-warning text-warning-content` |
| 成功色文字 | 该 `<pre>` 加 `text-success` |

## 使用要点（给 AI 与新手的提醒）

- 一行代码写一个 `<pre data-prefix="…">`，不要把多行塞进一个 pre。
- 在 `<code>` 里展示 HTML 时，尖括号必须转义成 `&lt;` / `&gt;`，否则会被当成真实元素渲染。
- 只高亮关键一行（报错、新增、警告），不要每行都上色。
- 它只展示代码样子，不带复制按钮和语法高亮配色；需要这些功能时用代码高亮库。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
