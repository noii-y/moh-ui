# 单选框 Radio

> 搬运自 **daisyUI**（<https://daisyui.com/components/radio/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

单选框用于从一组**互斥**选项中选一个，同一组必须使用相同的 `name`。适合付款方式、配送方式、性别这类「只能选其一」的场景；可多选、互相独立的请用复选框 Checkbox。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<label>…<input type="radio">…</label>` 到自己的页面即可。
3. 切换灰墨主题时，单选框颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础单选框 | `radio`（同组所有 `input` 写相同 `name`） |
| 默认选中某项 | 给该 `input` 加 `checked` |
| 语义状态色 | `radio-primary` / `radio-secondary` / `radio-accent` / `radio-neutral` / `radio-info` / `radio-success` / `radio-warning` / `radio-error` |
| 尺寸 | `radio-xs` `radio-sm`（默认 md）`radio-lg` `radio-xl` |
| 点文字也能选 | 用 `<label class="label cursor-pointer">` 包住 input 和文字 |
| 成组互斥 | 多个选项放 `<fieldset class="fieldset rounded-box border border-base-300 p-4">` + `<legend class="fieldset-legend">` |
| 禁用 | 加 `disabled` 属性（推荐） |

## 使用要点（给 AI 与新手的提醒）

- **同一组必须同名 `name`**：互斥是靠 `name` 相同实现的，不同组之间 `name` 要不同，否则会串组。
- **每一项都用 `label` 包住文字**，点击区域从小圆点扩大到整行，手机上尤其好操作。
- 可多选的场景（通知渠道、协议勾选）不要用单选框，那是复选框的活。
- 默认选中最常用、风险最低的一项，但不要替用户做有后果的决定。
- 选项超过 5 个、或选项文字很长时，改用下拉 Select。
- 禁用优先用 `disabled` 属性，它会同时阻止点击和聚焦；颜色全部走主题变量，不要写死颜色。

## 兼容性

- 纯 CSS + 原生表单元素，无框架依赖，无交互 JS，HTML 直接可用。
