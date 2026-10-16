# 浏览器样机 Mockup Browser

> 搬运自 **daisyUI**（<https://daisyui.com/components/mockup-browser/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

浏览器样机（Mockup Browser）画一个带地址栏的浏览器窗口，把页面预览放进框里，常用于产品文档、功能介绍和演示稿。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里的 `<div class="mockup-browser">` 整段到自己的页面，把地址栏文字和框内内容换成你的。
3. 切换灰墨主题时，样机外壳颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 样机外壳 | `<div class="mockup-browser">` |
| 顶栏地址栏 | 内部 `<div class="mockup-browser-toolbar"><div class="input">网址</div></div>` |
| 框内内容分隔线 | 内容区加 `border-t border-base-300` |
| 浅色背景上更清晰 | 外壳加 `border border-base-300` |

## 使用要点（给 AI 与新手的提醒）

- 它只是视觉外壳，不具备前进 / 后退 / 刷新等真实浏览器功能。
- 框里可以放一段用 daisyUI 拼的迷你页面，也可以放一张页面截图 `<img>`。
- 宽度用 `max-w-*`（如 `max-w-3xl`）限制，不要撑满视口；不要加 `fixed` 定位。
- 地址栏写真实网址或示意网址，不要留 `https://example.com` 占位。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
