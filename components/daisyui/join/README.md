# 组合容器 Join

> 搬运自 **daisyUI**（<https://daisyui.com/components/join/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Join 把多个元素（输入框、下拉框、按钮等）无缝拼成一组：相邻之间没有间隙，只在整组首尾保留圆角。最典型的用法是「类别下拉 + 搜索框 + 搜索按钮」这条连体工具栏，也可以做分段按钮组、纵向表单。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<div class="join">` 到自己的页面，每个拼进去的元素都加 `join-item`。
3. 中间要占满剩余宽度的输入框加 `min-w-0 flex-1`；切换主题时颜色自动跟随。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 横向拼接容器 | `<div class="join">`（要占满一行加 `w-full`） |
| 每个子元素 | 加 `join-item`（input / select / button / textarea 均可） |
| 中间输入框占满剩余 | `class="input join-item min-w-0 flex-1"` |
| 下拉定宽 | `class="select join-item w-32"` |
| 纵向拼接 | 外层加 `join-vertical` |
| 手机竖排、桌面横排 | 外层加 `join-vertical lg:join-horizontal` |
| 分段选中档 | 按钮加 `btn-active` |

## 使用要点（给 AI 与新手的提醒）

- **中间输入框务必 `min-w-0 flex-1`**：只写 `flex-1` 不够，input 默认 `min-width:auto` 会在窄屏把整组撑破；`min-w-0` 允许它收缩。
- 每个拼进去的元素都要加 `join-item`，否则不会去间隙、圆角也不对。
- 首尾圆角由 join 自动处理，不要手动给中间项加圆角。
- 分段按钮组用 `btn-active` 标当前档；要随点击真实切换需另配 JS 或 radio。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走 `--color-*` 主题变量，深浅色主题自动适配；`lg:join-horizontal` 为 daisyUI 自带响应式类。
