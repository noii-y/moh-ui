# 评分 Rating

> 搬运自 **daisyUI**（<https://daisyui.com/components/rating/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

评分是一组单选按钮（radio），让用户对商品、服务打分（五星、心形等）。本质是 radio，表单可以直接收集它的值；图形由 daisyUI 的 `mask` 裁剪实现，不需要图片。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<div class="rating">…</div>` 到自己的页面即可。
3. 形状由 `mask mask-star-2` / `mask-heart` 决定，颜色由 `bg-*` 决定；切换灰墨主题时描边自动跟随。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 容器 | `<div class="rating">` |
| 星形 | 每个 radio 加 `mask mask-star-2 bg-orange-400` |
| 心形 | 每个 radio 加 `mask mask-heart bg-red-400` |
| 尺寸四档 | `rating-xs` `rating-sm`（默认 md）`rating-lg` |
| 可清除 | 最前面放 `<input type="radio" class="rating-hidden" />` |
| 半星 | 容器加 `rating-half`，每整星位放 `mask-half-1` / `mask-half-2` 两个 radio |
| 只读展示 | radio 加 `disabled`，按分数 `checked` 前几颗 |
| 图标间距 | 容器加 `gap-1` |

## 使用要点（给 AI 与新手的提醒）

- **同组同名、异组异名**：同一套星星的 radio 共用一个 `name`，页面上多组评分的 `name` 不能重复。
- **每颗星写 aria-label**：如 `aria-label="1 星"`，读屏软件才读得出含义。
- **输入与展示分开**：让用户打分用可点 radio；展示平均分给 radio 加 `disabled`，并在旁边写「4.2 分 · 共 128 人评价」。
- 需要「不强制打分」时，最前面放一个 `rating-hidden` radio，用户可取消已选。
- 颜色用 `bg-orange-400` 这类调色板类，不要写死内联颜色；多色心形只在「满意度表情」这类轻量场景用。

## 兼容性

- 纯 CSS + 原生 radio，无 JavaScript、无框架依赖，HTML 直接可用。
- `mask` 图形由 daisyui.css 提供，无需图片；现代浏览器均支持。
- 半星（`rating-half`）为纯 CSS 结构，无需脚本。
