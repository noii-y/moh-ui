# 滑块 Range

> 搬运自 **daisyUI**（<https://daisyui.com/components/range/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

通过拖动滑块选择一个连续或步进的数值（音量、亮度、百分比、价格区间等）。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<input type="range" class="range">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 / 属性 |
|---|---|
| 基础 | `range`，配 `min` / `max` / `value` |
| 步长 | `step="25"` |
| 刻度 | 下方用 flex 均布刻度线与数字（见 demo） |
| 语义色 | `range-primary` / `range-success` / `range-warning` 等 |
| 尺寸 | `range-xs` `range-sm`（默认 md）`range-lg` `range-xl` |
| 竖向 | `range range-vertical` |

## 使用要点

- 滑块适合**大致调节**的连续值；需要精确输入（如"价格 99 元"）时，旁边配一个数字输入框。
- 始终用 `min` / `max` 明确范围，并在旁边**实时显示当前数值**，否则用户不知道拖到了多少。
- 有明确档位时设 `step` 并画刻度，让用户能对齐。
- 滑块要足够宽（至少 200px），否则在手机上难以精确拖动。

## 兼容性

纯 CSS + 原生 `range` 元素，无 JS 依赖；滑块手柄外观各浏览器略有差异。
