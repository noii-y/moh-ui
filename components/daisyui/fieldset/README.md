# 字段分组 Fieldset

> 搬运自 **daisyUI**（<https://daisyui.com/components/fieldset/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

表单布局的骨架。`<fieldset class="fieldset">` 把相关字段圈成一组，`fieldset-legend` 放组标题，`label` 放字段名或提示，`fieldset-label` 放辅助说明。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的表单结构；
3. 配合 input/select/textarea/button 等组件使用。

## 常用写法速查

| 元素 | 作用 |
|---|---|
| `<fieldset class="fieldset">` | 字段容器 |
| `<legend class="fieldset-legend">` | 组标题 |
| `<label class="label">` | 字段名 |
| `<p class="fieldset-label">` | 底部提示 |
| 卡片外观 | `bg-base-200 border-base-300 rounded-box border p-4` |
| 输入+按钮连体 | 外层 `<div class="join">`，各件加 `join-item` |

## 使用要点

- **每个输入控件都要有字段名**（label），这是表单能不能用的底线，尤其影响读屏用户。
- 字段较多时用多个 fieldset 分组（如"基本信息""收货信息"），不要堆成一长列。
- 关联 label 与控件时用 `for="id"` + `id="id"`，点文字也能聚焦。
- 错误提示放在对应字段下方（`fieldset-label` 位置），不要只在表单顶部统一报错。
- 提交按钮放在表单底部并与字段对齐，主操作放右侧或单独成行。

## 兼容性

纯 CSS + 原生表单元素，无 JS 依赖。
