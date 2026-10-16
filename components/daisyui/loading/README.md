# 加载动画 Loading

> 搬运自 **daisyUI**（<https://daisyui.com/components/loading/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

一个纯 CSS 的转圈动画，用来告诉用户「正在处理，请稍候」：按钮提交中的小转圈、列表页中间的大圆环都是它。零 JavaScript，一个 `<span>` 就转起来。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<span class="loading …">` 到自己的页面。
3. 换形态改形态类、换大小改尺寸类；切换灰墨主题时颜色自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 转圈（最通用） | `loading loading-spinner` |
| 圆点跳动 | `loading loading-dots` |
| 圆环 | `loading loading-ring` |
| 小球 | `loading loading-ball` |
| 横条 | `loading loading-bars` |
| 无限循环 | `loading loading-infinity` |
| 尺寸 | `loading-xs` `loading-sm`（默认 md）`loading-lg` `loading-xl` |
| 放进按钮 | 按钮内 `<span class="loading loading-spinner loading-xs"></span>` + 按钮加 `disabled` |

## 使用要点（给 AI 与新手的提醒）

- **转圈旁边要写人话**：「正在加载商品列表…」，别只放一个孤零零的圈。
- 按钮进入加载态**必须同时 `disabled`**，否则用户连点会重复提交。
- 按钮内用 `loading-xs` / `loading-sm`，整块区域才用 `loading-lg` 以上。
- 纯装饰的圈加 `aria-hidden="true"`；它承担加载语义时，外层容器写 `role="status"`。
- 不要用超大转圈当页面主视觉，也不要让一个页面上同时出现三种形态。

## 兼容性

- 纯 CSS 动画实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走主题文字色变量，深浅色主题、灰墨 10 套主题均自动适配。
