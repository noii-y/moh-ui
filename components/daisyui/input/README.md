# 文本输入框 Input

> 搬运自 **daisyUI**（<https://daisyui.com/components/input/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

单行文本输入，适用于 `text`、`password`、`email`、`number`、`date`、`time`、`tel`、`url`、`search` 等所有单行类型。复选框、单选、文件选择、滑块有各自的组件与类名，不在此处。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应变体那一段 `<input>` 到自己的页面即可。
3. 切换灰墨主题时，输入框颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础输入框 | `<input class="input" />` |
| 占满整行 | 加 `w-full` |
| 幽灵（无外框） | `input input-ghost` |
| 强调边框 | `input-primary` / `input-secondary` / `input-accent` / `input-neutral` |
| 语义状态色 | `input-info` / `input-success` / `input-warning` / `input-error` |
| 尺寸五档 | `input-xs` `input-sm`（默认 md）`input-lg` `input-xl` |
| 内嵌图标 / 快捷键 / 徽标 | 外层 `<label class="input">`，内部 `<input class="grow">` |
| 标签 + 输入框 + 提示 | `<fieldset class="fieldset">` + `<legend class="fieldset-legend">` + `<p class="fieldset-label">` |
| 输入建议 | 原生 `<datalist>`，input 加 `list="id"`，无需 JS |
| 原生校验 | 外层 `label.validator`，配 `required` / `pattern` / `minlength`，提示用 `validator-hint` |
| 禁用 / 只读 | `disabled` / `readonly` |

## 使用要点（给 AI 与新手的提醒）

- **每个输入框都要有可见标签**：优先用 `fieldset + fieldset-legend`，或 `<label for="id">` 成对绑定；不要只放 placeholder——输入后占位符会消失。
- **类型写对**：邮箱 `type="email"`、密码 `type="password"`、数字 `type="number"`，手机键盘和浏览器校验都会跟上；登录表单顺手加 `autocomplete`。
- **状态色必须配文字说明**：红框 / 橙框旁边要写清楚错在哪，不能只把框变红。
- 内嵌图标要加 `opacity-50` 弱化，图标尺寸统一 `h-4`；不要用 Tailwind 任意值类（如 `h-[1em]`），补丁层不支持。
- 禁用优先用 `disabled` 属性；需要保留可聚焦但不可改时才用 `readonly`。

## 兼容性

- 纯 CSS + 原生表单元素，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
- `datalist`、`date/time` 选择器、密码可见性切换为浏览器原生能力，各浏览器外观略有差异但功能一致。
