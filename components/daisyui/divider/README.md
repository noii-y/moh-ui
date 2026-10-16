# 分隔线 Divider

> 搬运自 **daisyUI**（<https://daisyui.com/components/divider/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

分隔线（Divider）在两组内容之间画一条带文字的线，常见于登录页「或」、设置项分组、并列路径之间的断开。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<div class="divider">` 到自己的页面。
3. 切换灰墨主题时，分隔线颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 横向分隔线（堆叠内容之间） | `<div class="divider">或</div>` |
| 竖线（并排内容之间） | 外层 `flex`，加 `divider-horizontal` |
| 无文字纯线 | `<div class="divider"></div>` |
| 文字靠左 / 靠右 | `divider-start` / `divider-end` |
| 彩色 | `divider-primary` `divider-error` 等 |

## 使用要点（给 AI 与新手的提醒）

- 内容上下堆叠时直接用 `divider`；内容左右并排时才用 `divider-horizontal`，别写反。
- 中间文字是连接两组内容的一句话，登录页用「或」，分组用名词（如「收货地址」），别写长句。
- 分隔线自带上下间距，不要再套 `mt-*` / `mb-*` 重复加距离。
- 颜色默认灰色即可，只有需要强调分组时才用 `divider-primary` 这类语义色。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
