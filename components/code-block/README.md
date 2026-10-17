# 代码块 Code Block

> 灰墨自研增强组件。基于 daisyUI 深色窗口 + highlight.js 11（CDN），MIT 开源。

## 它是什么

教程与文档里的代码块：深色窗口（`bg-neutral`），顶栏左边是语言标签、右边是一键复制按钮，下面是带真语法高亮的代码。高亮配色不引 highlight.js 官方主题，全部读 daisyUI 主题变量，切换深浅主题时自动协调。

## 怎么用（三步，需一个 CDN）

1. 在页面 `<head>` 引入两个样式文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../assets/utilities-patch.css" />
```

2. 在 `<body>` 里再引入一行 highlight.js CDN（common 版含 JavaScript / Python / Shell 等常用语言）：

```html
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11/build/highlight.min.js"></script>
```

3. 复制 [demo.html](./demo.html) 里成品窗口的那一段 HTML + 内联 `<style>` + 初始化 `<script>`，把 `<code>` 里的内容换成你的代码，并在 class 写对语言名（`language-javascript` / `language-python` / `language-shell`）。

## 常用写法速查

| 想要的效果 | 做法 |
|---|---|
| 深色窗口外壳 | `bg-neutral text-neutral-content rounded-box overflow-hidden` |
| 顶栏 | `flex items-center justify-between px-4 py-2`，左边语言名、右边复制按钮 |
| 代码区 | `pre` 加 `overflow-x-auto text-sm leading-relaxed`、`margin:0`；等宽字体由内联 `style="font-family:var(--font-mono,ui-monospace,SFMono-Regular,Menlo,Consolas,monospace)"` 提供（daisyUI 没有 `.font-mono` 工具类） |
| 高亮初始化 | `hljs.highlightElement(el)` |
| token 配色 | 内联 `<style>` 里写 `.hljs-keyword` 等，值取 daisyUI 变量 |
| 复制反馈 | 成功后按钮短暂显示「已复制」，1.5 秒后还原 |
| 长行 | 不换行，外层横向滚动 |

## 使用要点（给 AI 与新手的提醒）

- **和 mockup-code 二选一**：只展示几行命令、不想引 CDN，用零依赖的 `mockup-code`；要真高亮 + 复制按钮，用本组件。别为三行命令多加载一个库。
- **不引 hljs 官方主题 CSS**：token 配色写在组件内联 style，全走 daisyUI 变量，深浅主题都协调。
- 语言类写错就没有高亮：`language-javascript` / `language-python` / `language-shell`。
- 展示 HTML 代码时尖括号必须转义成 `&lt;` `&gt;`，否则会被当成真元素渲染。
- 复制按钮给 `aria-label`；`navigator.clipboard` 失败时兜底 `execCommand("copy")`。
- 长行不要换行打散缩进，用 `overflow-x-auto` 横向滚动。

## 兼容性

- 依赖 highlight.js 11（CDN 或本地 vendor），除此之外无框架、无构建。
- token 配色全部走 daisyUI `--color-*` 主题变量，深浅色主题、灰墨各套主题均自动适配。
