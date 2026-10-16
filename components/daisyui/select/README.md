# 下拉选择 Select

> 搬运自 **daisyUI**（<https://daisyui.com/components/select/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

从一组选项中选一个值（原生 `<select>`）。选项数量多、需要分组或搜索时，再考虑更重的组件，不要一上来就用自定义下拉。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<select class="select">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础 | `select` |
| 幽灵 | `select select-ghost` |
| 语义色 | `select-primary` / `select-success` / `select-warning` / `select-error` 等 |
| 尺寸 | `select-xs` `select-sm`（默认 md）`select-lg` `select-xl` |
| 标题 + 提示 | 包在 `<fieldset class="fieldset">` 里 |
| 原生外观 | 加 `appearance-none` 可去掉自定义箭头 |

## 使用要点

- 第一个 `<option>` 建议设为 `disabled selected`，作为占位提示（如"请选择"），且不应当是一个真实选项。
- 选项少于 5 个且是互斥选择，用**单选组（Radio）**更直观；选项很多才用 Select。
- 必须有标签（fieldset-legend 或 label），不要让用户只靠占位符猜。
- 下拉弹出层是浏览器原生渲染的，样式不受主题控制（这是原生 select 的正常行为）。

## 兼容性

纯 CSS + 原生表单元素，无 JS 依赖。
