# 徽标 Badge

> 搬运自 **daisyUI**（<https://daisyui.com/components/badge/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

徽标是一个小圆角小标签，用来给商品、状态、数字打标记：新品、热卖、售罄、包邮、未读数都用它。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 顶部的「复制 AI 提示词」整段发给你的 AI，让它按你的项目生成；想直接粘贴代码，再打开 demo.html 复制里面具体需要的那一段。
3. 切换灰墨主题时，徽章颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础徽章 | `badge` |
| 语义色 | 加 `badge-primary` / `secondary` / `accent` / `neutral` / `info` / `success` / `warning` / `error` |
| 尺寸 | `badge-xs` `badge-sm`（默认 md）`badge-lg` `badge-xl` |
| 描边 / 虚线 / 柔和 / 幽灵 | `badge-outline` / `badge-dash` / `badge-soft` / `badge-ghost` |
| 嵌进按钮当数字角标 | `<button class="btn">购物车 <span class="badge badge-sm">12</span></button>` |

## 使用要点（给 AI 与新手的提醒）

- 徽章里写真实业务词（新品/热卖/售罄/包邮），**禁止写颜色名**。
- 一排标签最多四五个；次要标签多用 `badge-outline` / `badge-soft`，别一屏实心彩色。
- 数字角标超过 99 显示 `99+`；图标统一 `h-4 w-4`。
- `badge-dash` 虚线描边专用于「待处理、待审核」这类进行中状态。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
