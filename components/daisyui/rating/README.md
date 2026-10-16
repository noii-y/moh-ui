# 评分 Rating

> 搬运自 **daisyUI**（<https://daisyui.com/components/rating/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

一组单选按钮，让用户对内容打分（星级、心形等）。本质是 radio，因此表单可直接收集它的值。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<div class="rating">`；
3. 形状由 `mask mask-star-2` / `mask-heart` 决定，颜色由 `bg-*` 决定。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 容器 | `rating` |
| 形状 | `mask mask-star-2`（星）/ `mask-heart`（心） |
| 颜色 | `bg-orange-400` / `bg-green-500` 等 |
| 尺寸 | `rating-xs` ~ `rating-xl` |
| 半星 | 容器加 `rating-half`，每整星位放 `mask-half-1` / `mask-half-2` 两个 radio |
| 可清除 | 第一个放 `class="rating-hidden"` 的 radio |
| 图标间距 | 容器加 `gap-1` |

## 使用要点

- 每个评分组的 radio 必须用**相同的 name**，且不同评分组的 name 不能重复。
- 每个 radio 都要有 `aria-label`（如"1 星""2 星"），读屏软件才读得出含义。
- 展示平均分用静态图标即可；只有需要用户打分时才用可点的 radio。
- 评分后通常要在旁边显示"4.0 分 / 共 128 人评价"，别只给星星不给数字。

## 兼容性

纯 CSS + 原生 radio；mask 形状由 daisyui.css 提供，无需图片。
