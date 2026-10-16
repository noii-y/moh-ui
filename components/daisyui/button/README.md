# 按钮 Button

> 搬运自 **daisyUI**（<https://daisyui.com/components/button/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

按钮是最基础的交互元素，用于触发一个动作或做出一个选择——提交表单、打开弹窗、确认操作等。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<button>` 到自己的页面。
3. 切换灰墨主题时，按钮颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础按钮 | `btn` |
| 主要 / 次要 / 强调 | `btn btn-primary` / `btn-secondary` / `btn-accent` |
| 中性 / 信息 / 成功 / 警告 / 错误 | `btn-neutral` / `btn-info` / `btn-success` / `btn-warning` / `btn-error` |
| 幽灵（透明） / 链接样式 | `btn-ghost` / `btn-link` |
| 描边 / 虚线 | `btn-outline` / `btn-dash` |
| 尺寸 | `btn-xs` `btn-sm`（默认 md）`btn-lg` `btn-xl` |
| 加宽 / 整行 | `btn-wide` / `btn-block` |
| 方形 / 圆形图标按钮 | `btn-square` / `btn-circle` |
| 加载中 | 内部加 `<span class="loading loading-spinner"></span>` |
| 禁用 | 加 `disabled` 属性（推荐） |
| 玻璃拟态 | `btn glass`（放在图片/深色背景上） |

## 使用要点（给 AI 与新手的提醒）

- **一个页面里主按钮只应有一个**（`btn-primary`），其余操作降为描边或幽灵，避免处处抢视觉。
- 图标按钮没有文字时，**必须加 `aria-label`**（如 `aria-label="喜欢"`），否则读屏用户听不懂。
- 表示"危险且不可逆"的操作（删除、清空）才用 `btn-error`，不要为了好看滥用红色。
- 禁用优先用 `disabled` 属性，它会同时阻止点击和聚焦；`btn-disabled` 只是样式。
- 按钮内同时放图标和文字时，图标用 `h-5 w-5`，图标与文字的间距由 `btn` 自动处理。
- 不要用 `<a>` 套 `btn` 去做"假按钮"执行 JS 动作；是跳转才用 `<a class="btn">`，是动作用 `<button>`。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
