# 开关 Toggle

> 搬运自 **daisyUI**（<https://daisyui.com/components/toggle/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

开关本质是被样式化成拨杆的复选框，用于表达**开 / 关**两种即时状态（推送通知、深色模式、自动更新）。拨动即生效，适合设置项。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一行 `<label>…<input type="checkbox" class="toggle">…</label>` 到自己的页面即可。
3. 切换灰墨主题时，开关颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础开关 | `toggle`（`type="checkbox"`，选中即「开」，默认开加 `checked`） |
| 语义状态色 | `toggle-primary` / `toggle-secondary` / `toggle-accent` / `toggle-neutral` / `toggle-info` / `toggle-success` / `toggle-warning` / `toggle-error` |
| 尺寸 | `toggle-xs` `toggle-sm`（默认 md）`toggle-lg` `toggle-xl` |
| 设置行排版 | `<label class="label cursor-pointer justify-between">`，文字在左、拨杆在右 |
| 开关上带图标 | 外层 `<label class="toggle">`，内放 checkbox + 两个单色 SVG 图标 |
| 禁用 | 加 `disabled` 属性（推荐） |

## 使用要点（给 AI 与新手的提醒）

- **开关用于「即时生效」的设置**；需要点「保存」才统一提交的一组独立勾选项，改用复选框。
- 每个开关旁边要有明确的状态文字（如「推送通知」），不要只放一个光秃秃的拨杆。
- 不要用开关表达「在多个选项里选一个」，那是单选框 Radio 的活。
- 默认值要谨慎：用户需要的功能默认开，营销、付费、隐私类默认关。
- 禁用优先用 `disabled` 属性，它会同时阻止点击和聚焦；颜色全部走主题变量，不要写死颜色。

## 兼容性

- 纯 CSS + 原生复选框，无框架依赖，无交互 JS，HTML 直接可用。
