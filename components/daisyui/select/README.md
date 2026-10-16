# 下拉选择 Select

> 搬运自 **daisyUI**（<https://daisyui.com/components/select/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

下拉选择让用户从一组固定选项里选一个值，比手敲更稳、不易输错。适合选项较多、一行铺不开的场景：省市区、城市、商品类目、配送时段等。选项只有两三个时，直接用单选按钮铺开更省事。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<select>…</select>` 到自己的页面即可。
3. 切换灰墨主题时，下拉颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础下拉 | `<select class="select">` |
| 占满整行 | 加 `w-full` |
| 必选占位项 | 第一项 `<option disabled selected>请选择…</option>` |
| 幽灵（无外框） | `select select-ghost` |
| 强调边框 | `select-primary` / `select-secondary` / `select-accent` |
| 语义状态色 | `select-info` / `select-success` / `select-warning` / `select-error` |
| 尺寸五档 | `select-xs` `select-sm`（默认 md）`select-lg` `select-xl` |
| 标签 + 下拉 + 说明 | `<fieldset class="fieldset">` + `<legend class="fieldset-legend">` + `<span class="fieldset-label">` |
| 禁用 | 加 `disabled` 属性（推荐） |

## 使用要点（给 AI 与新手的提醒）

- **必选就放占位项**：第一项用 `<option disabled selected>请选择…</option>`，别默认选中一个真实选项，用户容易漏看直接提交。
- **每个下拉都要有可见标签**：优先用 `fieldset + fieldset-legend`；只靠占位项的话，一旦选定，用户就看不到这一栏在问什么。
- **状态色必须配文字**：`select-error` / `select-warning` 旁边要说清楚为什么是这个状态，不能只把框变色。
- **选项别太多太长**：超过十几项就考虑可搜索的下拉（combobox），原生下拉找长列表很累。
- 禁用优先用 `disabled` 属性，它会同时阻止展开和聚焦；里面放一个说人话的当前值。
- 颜色全部走主题变量，不要写死颜色。

## 兼容性

- 纯 CSS + 原生 `<select>`，无 JavaScript、无框架依赖，HTML 直接可用。
- 下拉弹出层的外观随操作系统 / 浏览器略有差异，但功能一致。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
