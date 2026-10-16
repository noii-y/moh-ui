# 多行文本域 Textarea

> 搬运自 **daisyUI**（<https://daisyui.com/components/textarea/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

多行文本输入，用于简介、备注、反馈等内容较长的场景。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<textarea class="textarea">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础 | `textarea` |
| 固定高度 | `textarea h-24`（或 h-32 / h-40） |
| 幽灵 | `textarea textarea-ghost` |
| 语义色 | `textarea-primary` / `textarea-success` / `textarea-warning` / `textarea-error` 等 |
| 尺寸 | `textarea-xs` `textarea-sm`（默认 md）`textarea-lg` `textarea-xl` |
| 标题 + 字数提示 | 包在 `<fieldset class="fieldset">` 里 |

## 使用要点

- 用 `rows` 或 `h-*` 给出能体现"可多行输入"的高度，别让它看起来像单行输入框。
- 有字数上限时，在 `fieldset-label` 位置写明"最多 N 字"，并在 JS 里同步剩余字数。
- 必须有标签；占位符只放示例，不放字段名。
- 提交类反馈、报错用 `textarea-error` 并配文字说明。

## 兼容性

纯 CSS + 原生表单元素，无 JS 依赖。
