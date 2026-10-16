# 轮播 Carousel

> 搬运自 **daisyUI**（<https://daisyui.com/components/carousel/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。
> 商品图区线性图标借鉴 **Lucide**（ISC）轮廓、手写内联 24×24 path，未引入任何图标库或外链资源。

## 它是什么

轮播在一条横向（或纵向）轨道上并排展示多张卡片，用户左右滑动翻看，常见于商品推荐、活动 Banner、订单流。本版只做原生滚动 + scroll-snap 的纯 CSS 形态：滑动、吸附、锚点跳转零 JavaScript 即可用。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<div class="carousel">` 结构到自己的页面；item 的 id 与箭头 href 对应好。
3. 切换灰墨主题时，卡片、按钮、价格颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 横向轮播容器 | `carousel flex w-full`（vendor 自带 overflow-x 与 scroll-snap） |
| 每张卡片 | `carousel-item`，宽度用 `w-full` / `w-1/2` / `w-1/3` |
| 滚动对齐 | 父级加 `carousel-start`（左对齐）/ `carousel-center`（居中）/ `carousel-end` |
| 纵向轮播 | `carousel carousel-vertical`，容器给固定高度如 `h-48` |
| 上一张 / 下一张 | `<a href="#item-id" class="btn btn-circle btn-ghost">` 箭头 |
| 数字指示器 | 轮播下方一排 `<a href="#item-id" class="btn btn-circle btn-xs">1</a>` |
| 商品图占位 | 图区 div 写内联 `style="background:linear-gradient(...)"` |

## 使用要点（给 AI 与新手的提醒）

- **纯 CSS 只管滑动与吸附**：自动播放、无限循环、拖拽跟手、当前项高亮，都必须加 JavaScript，本组件不内置。
- **横滑只发生在容器内**：不要给整页加横向滚动，不要给 carousel 加 `fixed` 定位；item 用分数宽（`w-1/2` / `w-1/3`）控制一屏几张。
- **箭头别塞进滚动容器里**：箭头放在 carousel 的兄弟层、外层 `relative` 包裹内做绝对定位，否则会被 `overflow-x` 裁掉；纯图标箭头必须加 `aria-label`。
- **成品图区是渐变占位**：换成真实 `<img>` 时加 `w-full h-40 object-cover rounded-t-box`，卡片其余结构不动。
- **商品名单行省略**：商品名这种可能偏长的文本加 `truncate`（超长省略号截断），不要用 line-clamp。
- **响应式分数宽暂缺**：当前补丁层只有静态 `w-1/2` / `w-1/3`，没有 `lg:w-1/3`；想做「手机两张、桌面三张」，等公共层补齐响应式类后把 item 改成 `w-1/2 lg:w-1/3`。
- 文案写真实动作：「加入购物车」「立即抢购」，不要让按钮写颜色名。

## 兼容性

- 纯 CSS 实现，原生横向滚动 + scroll-snap 在现代移动端与桌面浏览器均可用；无 JavaScript、无框架依赖。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
