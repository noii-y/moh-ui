# 复选框 Checkbox

> 搬运自 **daisyUI**（<https://daisyui.com/components/checkbox/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

复选框用于勾选或取消一个或多个**互相独立**的选项，可多选、互不影响。适合协议确认、偏好设置、通知渠道这类场景；互斥单选请用单选框 Radio。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<label>…<input type="checkbox">…</label>` 到自己的页面即可。
3. 切换灰墨主题时，勾选框颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础勾选框 | `checkbox` |
| 语义状态色 | `checkbox-primary` / `checkbox-secondary` / `checkbox-accent` / `checkbox-neutral` / `checkbox-info` / `checkbox-success` / `checkbox-warning` / `checkbox-error` |
| 尺寸 | `checkbox-xs` `checkbox-sm`（默认 md）`checkbox-lg` `checkbox-xl` |
| 点文字也能选 | 用 `<label class="label cursor-pointer">` 包住 input 和文字 |
| 成组多选 | 多个选项放 `<fieldset class="fieldset rounded-box border border-base-300 p-4">` + `<legend class="fieldset-legend">` |
| 禁用 | 加 `disabled` 属性（推荐） |
| 半选（部分选中） | JS 设置 `el.indeterminate = true`（仅全选父子场景） |

## 使用要点（给 AI 与新手的提醒）

- **每一项都用 `label` 包住文字**，点击区域从方框扩大到整行，手机上尤其好操作。
- 互斥的选项（性别、付款方式）不要用复选框，那是单选框的活。
- 半选（indeterminate）只用于「父框全选、子框部分选中」的父子关系，且必须由 JS 控制，刷新后会消失。
- 禁用优先用 `disabled` 属性，它会同时阻止点击和聚焦；禁用且选中表示「该状态由系统设定、不可改」。
- 颜色全部走主题变量，不要写死颜色；不要为了好看把每项都涂成醒目色。

## 兼容性

- 纯 CSS + 原生表单元素，无框架依赖，HTML 直接可用。
- 唯一例外：半选状态需一行 JS 设置 `indeterminate` 属性。
