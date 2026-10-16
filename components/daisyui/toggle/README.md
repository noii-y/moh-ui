# 开关 Toggle

> 搬运自 **daisyUI**（<https://daisyui.com/components/toggle/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

本质是一个被样式化成开关的复选框，表达**开 / 关**两种即时状态（如"深色模式"、"消息推送"）。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<input type="checkbox" class="toggle">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础 | `toggle` |
| 语义色 | `toggle-primary` / `toggle-success` / `toggle-warning` / `toggle-error` 等 |
| 尺寸 | `toggle-xs` `toggle-sm`（默认 md）`toggle-lg` `toggle-xl` |
| 设置项排版 | 用 `<label class="label cursor-pointer">`，文字在左、开关在右 |
| 图标开关 | 外层 `<label class="toggle">`，内放 checkbox + 两个图标 |
| 半选 | JS 设置 `el.indeterminate = true` |

## 使用要点

- Toggle 只用于"即时生效的设置"；**需要点"保存"才生效的表单里不要用开关**，改用普通复选框。
- 每个开关旁边要有明确的状态文字（如"自动更新"），不要只放一个光开关。
- 不要用开关表达"在多个选项中选一个"（那是 Radio）。
- 开关默认状态要谨慎：涉及付费、隐私、通知的默认值通常应为"关"。

## 兼容性

纯 CSS + 原生表单元素（checkbox）；图标开关为纯 CSS 切换。
