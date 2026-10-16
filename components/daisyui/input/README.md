# 文本输入框 Input

> 搬运自 **daisyUI**（<https://daisyui.com/components/input/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

单行文本输入，适用于 `text`、`password`、`email`、`number`、`date`、`time`、`tel`、`url`、`search` 等所有单行类型。复选框、单选、文件、滑块有各自的组件与类名。

## 怎么用（三步，零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中需要的 `<input class="input">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础输入框 | `<input class="input">` |
| 幽灵（无外框） | `input input-ghost` |
| 语义色边框 | `input-primary` / `input-success` / `input-warning` / `input-error` 等 |
| 尺寸 | `input-xs` `input-sm`（默认 md）`input-lg` `input-xl` |
| 内嵌图标 / 快捷键 | 外层用 `<label class="input">`，内部 input 加 `grow` |
| 标题 + 提示 | 用 `<fieldset class="fieldset">` + `fieldset-legend` + `fieldset-label` |
| 输入建议 | 原生 `<datalist>` + `list="id"`，无需 JS |
| 校验状态 | 加 `validator`，配合 `required` / `pattern` / `minlength` |

## 使用要点

- **每个输入框都要有可见标签**：优先用 `fieldset + fieldset-legend`，或 `<label for="id">`；不要只放 placeholder（占位符在输入后会消失）。
- 内嵌图标要加 `opacity-50` 弱化，避免和输入内容争夺注意力。
- 报错用 `input-error` 红框时，**旁边必须配文字说明错在哪**（光变红用户不知道怎么改）。
- 图标尺寸用 `h-4`；不要用 Tailwind 任意值类（如 `h-[1em]`），补丁层不支持。
- 禁用用 `disabled` 属性；只读用 `readonly`（样式不同）。

## 兼容性

纯 CSS + 原生表单元素，无 JS 依赖；`datalist`、`date/time` 选择器为浏览器原生能力，各浏览器外观略有差异但功能一致。
