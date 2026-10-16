# 切换状态 Swap

> 搬运自 **daisyUI**（<https://daisyui.com/components/swap/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Swap 让同一个位置上的两副图标「翻个面」切换：收藏 ↔ 已收藏、有声 ↔ 静音、白天 ↔ 黑夜、显示密码 ↔ 隐藏密码。全程纯 CSS，靠一个隐藏的 checkbox 完成，不需要 JavaScript。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `label.swap` 到自己的页面。
3. 切换灰墨主题时，图标配色（`text-warning` / `text-error` 等）会自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 基础切换（淡入淡出） | `<label class="swap"><input type="checkbox" /><div class="swap-off">…</div><div class="swap-on">…</div></label>` |
| 旋转 45° 动画 | `<label class="swap swap-rotate">…` |
| 垂直翻面动画 | `<label class="swap swap-flip">…` |
| 默认选中（打开就是 on 态） | input 加 `checked` 属性 |
| 静态强制 on 态（无 input 也行） | label 上加 `swap-active` 类 |
| 图标染色 | 给 SVG 加 `text-warning` / `text-success` / `text-info` / `text-error` |

结构三件套缺一不可：隐藏的 `input[type=checkbox]`、`swap-off`（默认态）、`swap-on`（选中态）。

## 使用要点（给 AI 与新手的提醒）

- **checkbox 是隐藏的**，必须给它加 `aria-label`（如 `aria-label="收藏商品"`），否则读屏用户只听到一个无名复选框。
- 想展示「已选中」的静态效果，直接给 input 加 `checked`，这是官方推荐做法；不依赖 input 时才用 `swap-active` 类。
- 图标大小统一用 `h-8 w-8` / `h-9 w-9`，颜色走 `text-*` 语义类，**禁止写死色值**。
- 两副图标的 viewBox 与尺寸要一致，翻面时才不会跳。
- 这是「单个开关」，不是「按钮触发动作」：收藏、静音这类状态切换用它；打开弹窗、提交表单请用 `btn`。

## 兼容性

- 纯 CSS 实现（`:checked` 选择器），无 JavaScript、无框架依赖，HTML 直接可用。
- 动画遵循系统「减弱动态效果」设置（`prefers-reduced-motion`）。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
