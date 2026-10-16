# 角标 Indicator

> 搬运自 **daisyUI**（<https://daisyui.com/components/indicator/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

角标把一个小元素贴在另一个元素的角上：铃铛按钮上的未读数、头像上的红点、输入框右上角的「必填」标记、卡片侧边的操作按钮。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 顶部的「复制 AI 提示词」整段发给你的 AI，让它按你的项目生成；想直接粘贴代码，再打开 demo.html 复制里面具体需要的那一段。
3. 切换灰墨主题时，角标颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 角标容器 | `indicator` |
| 要贴上去的小东西 | 容器内第一个子元素 `indicator-item` |
| 横向位置 | `indicator-start` / `indicator-center` / `indicator-end`（默认 end） |
| 纵向位置 | `indicator-top`（默认）/ `indicator-middle` / `indicator-bottom` |
| 数字角标 | `<span class="indicator-item badge badge-secondary badge-sm">3</span>` |
| 纯红点 | `<span class="indicator-item badge badge-primary badge-xs"></span>`（空徽章） |

## 使用要点（给 AI 与新手的提醒）

- **顺序：item 在前、本体在后**——先写 `indicator-item`，再写按钮/卡片/头像。
- 数字超过 99 显示 `99+`；没有未读数就不渲染角标，别留一个 0。
- 图标按钮贴角标最稳；不要把角标压在按钮文字上。
- 导航角标绝大多数用默认的「右上角」，不需要写位置类。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
