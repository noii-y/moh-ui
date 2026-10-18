# 折叠面板 Collapse

> 搬运自 **daisyUI**（<https://daisyui.com/components/collapse/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

折叠面板把一大段内容收进一行标题里，点击标题再展开。最常见的场景是帮助中心的 FAQ 手风琴，也用于长协议、设置项的收纳。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段（推荐 `details` 版）到自己的页面。
3. 想让某一条默认展开，给它的 `<details>` 加 `open` 属性；切换主题时卡片底色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础折叠（焦点式，点失焦收起） | `<div tabindex="0" class="collapse bg-base-100 border border-base-300"><div class="collapse-title">…</div><div class="collapse-content text-sm">…</div></div>` |
| 推荐：原生 details 式（FAQ） | `<details class="collapse"><summary class="collapse-title">…</summary><div class="collapse-content text-sm">…</div></details>` |
| 箭头图标 | 加 `collapse-arrow` |
| 加号图标 | 加 `collapse-plus` |
| 默认展开 | `details` 加 `open` 属性；或给 div 版加 `collapse-open` |
| 收起（仅 div 版） | 加 `collapse-close` |
| 无边框纯文字 | 去掉 `bg-base-100 border border-base-300` |
| 标题 / 答案排版 | 标题 `font-semibold`，答案 `text-sm` |

## 使用要点（给 AI 与新手的提醒）

- **FAQ 一律用 `details/summary`**：原生支持点击切换、键盘操作，且展开后的文字能被浏览器搜索到。
- **键盘行为**：details 版下 `summary` 自带焦点，`Tab` 走到它、`Enter` / `Space` 开合，读屏自动播报开合状态（**不用手写 `aria-expanded`**），收起的答案不进 `Tab` 序；div tabindex 版只是「焦点面板」（聚焦展开、失焦收起），`Enter` / `Space` 不切换，列表类场景不要用它。
- **默认展开用 `open` 属性**，不要用 `collapse-open` 类作用在 `details` 上（官方说明：`collapse-open/close` 只对 div 焦点式折叠生效）。
- 手风琴一次只展开一条；标题写完整问题（「怎么修改登录密码？」），别写「问题一」。
- 多条之间留 8px 间距（`flex flex-col gap-2`），卡片用 `bg-base-100 border border-base-300`。
- 颜色全部走主题变量，不要写死。

## 兼容性

- 纯 CSS 实现，`details` 为原生 HTML，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
