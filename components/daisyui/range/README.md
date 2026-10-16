# 滑块 Range

> 搬运自 **daisyUI**（<https://daisyui.com/components/range/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

滑块通过拖动滑杆在一个连续区间里选数值，适合价格区间、音量、亮度、透明度这类「大致调节」的场景。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<input type="range">` 到自己的页面即可。
3. 切换灰墨主题时，滑块颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 属性 |
|---|---|
| 基础滑杆 | `range`，配 `min` / `max` / `value` |
| 步长与档位 | `step="100"`，下方用 flex 均布刻度线与数字 |
| 语义状态色 | `range-primary` / `range-secondary` / `range-accent` / `range-neutral` / `range-info` / `range-success` / `range-warning` / `range-error` |
| 尺寸 | `range-xs` `range-sm`（默认 md）`range-lg` `range-xl` |
| 竖向 | `range range-vertical h-40` |

## 使用要点（给 AI 与新手的提醒）

- 滑块适合**大致调节**的连续值；需要精确输入（如「价格 99 元」）时，旁边配一个数字输入框。
- 始终用 `min` / `max` 明确范围，并在旁边**实时显示当前数值**；纯 CSS 做不到回显，需要一行极小 JS 监听 `input` 事件。
- 有明确档位时设 `step` 并画刻度，让用户能对齐；滑块要足够宽，手机上才好精确拖动。
- 不要用自定义 div 拖块替换原生 `<input type="range">`，那会丢掉键盘方向键微调与读屏支持。

## 兼容性

- 原生 `range` 元素 + daisyUI 样式，无框架依赖；实时读数需一行极小 JS，滑块手柄外观各浏览器略有差异。
