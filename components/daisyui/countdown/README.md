# 倒计时 Countdown

> 搬运自 **daisyUI**（<https://daisyui.com/components/countdown/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Countdown 是一组纯 CSS 数字块：每个数字单位渲染成一位或两位阿拉伯数字，并在数字变化时自带滚动过渡。秒杀、开抢提醒、活动截止、课程优惠到期都用它。组件本体零 JS，数字写在 CSS 变量里。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段倒计时到自己的页面。
3. 切换灰墨主题时，盒装颜色（`bg-neutral` 等）会自动跟随主题变量。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 两位数（24） | `<div class="countdown"><span style="--value:24;">24</span></div>` |
| 补零两位数（02） | `<div class="countdown"><span style="--value:2;--digits:2;">02</span></div>` |
| 三位数（库存 120） | `--value:120;--digits:3` |
| 数字大小 | 外层加 `text-2xl` / `text-3xl` / `text-5xl` |
| 盒装 | 外包 `rounded-box bg-neutral px-4 py-2 text-neutral-content` |
| 多个单位横排 | `grid grid-flow-col auto-cols-max gap-2` |
| 读屏说明 | 整组加 `role="timer"` 和 `aria-label` |

## 使用要点（给 AI 与新手的提醒）

- **`--value` 和 span 文本要写同一个数**：`--value` 负责渲染，span 文本是写死的标注；改数字时两边一起改。
- 小于 10 的数默认只显示一位，**时 / 分 / 秒建议统一 `--digits:2`**，否则位数跳动会让盒子宽度忽宽忽窄。
- 真实倒计时由你自己的 JS 驱动：每秒 `span.style.setProperty('--value', n)` 并同步改 span 文本，组件自动带滚动过渡；不要把计时逻辑写进组件。
- span 的文本本身是隐藏的（组件用伪元素渲染数字），所以读屏要靠外层 `aria-label` 补上完整剩余时间。
- 颜色用 `bg-neutral` / `text-neutral-content` 这类主题语义类，禁止写死色值。

## 兼容性

- 纯 CSS 渲染（CSS 变量 + 伪元素滚动条），现代浏览器（Edge / Chrome / Firefox / Safari 近两个大版本）均可正常显示数字。
- 不支持 `round()` / `mod()` 等 CSS 函数的极旧浏览器上数字不会渲染——此时应升级浏览器；本库不为旧浏览器提供 fallback 脚本。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
