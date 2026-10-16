# 光晕 Aura

> 搬运自 **daisyUI**（<https://daisyui.com/components/aura/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

光晕是一圈绕着元素缓慢旋转的光边，纯 CSS 实现。它是一个**外壳**：把它套在任意卡片或按钮外面，就能让这个元素在页面里一眼被看到——典型场景是定价页的主推套餐卡、落地页的主行动按钮。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段结构到自己的页面——外层 `<div class="aura">` 包住你的卡片或按钮。
3. 换光效、换颜色只改 `class`；切换灰墨主题时自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 默认旋转光边 | `aura` |
| 彩虹色光边 | `aura aura-rainbow` |
| 双色光边 | `aura aura-dual` |
| 漫射辉光（不旋转） | `aura aura-glow` |
| 自定义光色 | `aura text-orange-600`（光色跟随文字色） |
| 尺寸（光边粗细） | `aura-xs` `aura-sm`（默认 md）`aura-lg` `aura-xl` |
| 套在按钮外 | `<div class="aura"><button class="btn">…</button></div>` |

## 使用要点（给 AI 与新手的提醒）

- **光晕是外壳**：必须包住一个真实元素（`card`、`btn` 等），光边圆角会自动按被包元素的圆角适配，不要再自己套边框。
- **一个页面只给一个重点加光晕**：三张卡都发光等于没有重点。
- 光的颜色 = 外壳的文字颜色（`currentColor`），所以写 `text-orange-600` 即可给光边上色，卡片内部文字不受影响。
- 想调旋转速度，加内联 `style="animation-duration:8s"`（数字越大越慢）；系统开启「减弱动态效果」时会自动放慢。
- 纯 CSS 动画，不需要 JavaScript。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走 daisyUI 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
