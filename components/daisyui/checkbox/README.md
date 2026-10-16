# 复选框 Checkbox

> 搬运自 **daisyUI**（<https://daisyui.com/components/checkbox/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

勾选/取消一个或多个独立选项。**可多选**；互斥单选请用单选框 Radio。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<input type="checkbox" class="checkbox">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础 | `checkbox` |
| 语义色 | `checkbox-primary` / `checkbox-success` / `checkbox-warning` / `checkbox-error` 等 |
| 尺寸 | `checkbox-xs` `checkbox-sm`（默认 md）`checkbox-lg` `checkbox-xl` |
| 可点文字 | 用 `<label class="label cursor-pointer">` 包裹 |
| 分组 | 多个选项放 `<fieldset class="fieldset">` |
| 半选 | JS 设置 `el.indeterminate = true` |

## 使用要点

- **一定要用 `<label>` 让文字可点**，点击区域越大越好操作。
- 复选框用于"每个独立、可多选"的设置；像"同意用户协议"这种单一确认也适用。
- 半选（indeterminate）只用于"全选/部分选中"的父子关系，且必须由 JS 控制，刷新后会消失。
- 禁用用 `disabled`；禁用且选中表示"该状态不可改"。

## 兼容性

纯 CSS + 原生表单元素；半选状态需一行 JS。
