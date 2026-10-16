# 环形进度 Radial Progress

> 搬运自 **daisyUI**（<https://daisyui.com/components/radial-progress/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

用一个圆环表示完成度：目标达成率、任务进度、倒计时。环中央可以直接显示百分比文字。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」发给你的 AI，让它按你的项目生成；想直接粘贴代码，再复制成品 HTML。
3. 进度值、大小、环厚写在 `style` 的三个 CSS 变量上，随主题自动换色。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 基本环 | `<div class="radial-progress" style="--value:70;" role="progressbar" aria-valuenow="70">70%</div>` |
| 改大小 | `style="--value:70;--size:8rem;"` |
| 改环厚 | `style="--value:70;--thickness:4px;"` |
| 语义色 | 加 `text-success` / `text-warning` / `text-error` |
| 实心填充环 | `bg-primary text-primary-content border-primary border-4` |

## 使用要点（给 AI 与新手的提醒）

- **三个 CSS 变量是组件本体**：`--value`（0–100）、`--size`（默认 5rem）、`--thickness`（默认约为 size 的 10%），改数字只动 `style`。
- 用 `div` 不用 `progress` 标签：环内要放文字，且部分浏览器不渲染 `progress` 内的伪元素；必须带 `role="progressbar"` 与 `aria-valuenow`。
- 环的颜色 = 文字颜色，不要写死色值。
- 单指标用环；多指标横向比较请用横条进度，环不要并列超过四个。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
