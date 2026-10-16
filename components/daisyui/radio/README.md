# 单选框 Radio

> 搬运自 **daisyUI**（<https://daisyui.com/components/radio/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

从一组互斥选项中**只能选一个**。同一组的 `<input>` 必须使用相同的 `name`，否则会变成可多选。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<input type="radio" class="radio">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础 | `radio` |
| 语义色 | `radio-primary` / `radio-success` / `radio-warning` / `radio-error` 等 |
| 尺寸 | `radio-xs` `radio-sm`（默认 md）`radio-lg` `radio-xl` |
| 可点文字 | 用 `<label class="label cursor-pointer">` 包裹 |
| 分组 | 放 `<fieldset class="fieldset">` |

## 使用要点

- **同组必须同名**：`name="ship"` 写在这一组所有 radio 上，才能互斥。
- 默认选中一项时加 `checked`，避免用户漏选却提交了默认值。
- 选项超过 5 个、或选项文字很长时，改用下拉 Select。
- 必须有分组标题（如"配送方式"），让用户知道在选什么。
- 用 `radio` 表达"在几个并列方案里选一个"，不要用它做"是/否"开关——那是 Toggle 的职责。

## 兼容性

纯 CSS + 原生表单元素，无 JS 依赖。
