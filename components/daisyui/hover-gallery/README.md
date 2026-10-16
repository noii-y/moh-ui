# 悬停画廊 Hover Gallery

> 搬运自 **daisyUI**（<https://daisyui.com/components/hover-gallery/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

悬停画廊把同一商品的多张角度图叠在一个图位里：默认只显示第一张，鼠标在图上左右滑过，感应列会逐张切到下一张。电商商品卡的多角度展示、作品集多图预览都用它，纯 CSS、不需要轮播组件。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段：一个 `<figure class="hover-gallery">`，里面直接叠若干 `<img>`（或占位块）。
3. 放几张图就自动切出几列感应列；给图位加 `max-w-60` 限定宽度，或加 `aspect-square` / `aspect-video` 定图位比例。切换主题后卡片颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 画廊容器 | `figure hover-gallery` |
| 限定图位宽度 | `max-w-60` |
| 定图位比例（正方形 / 宽幅） | `aspect-square` / `aspect-video` |
| 放进商品卡 | 外层 `card`，图在上 `figure.hover-gallery`，文字在 `card-body` |
| 紧凑目录小卡 | `card card-sm max-w-60` |
| 图片数量 | 3 张 = 2 列感应区，4 张 = 3 列，最多 10 张 |

## 使用要点（给 AI 与新手的提醒）

- **第一张是默认展示图**，其余图的前后顺序 = 感应列从左到右的顺序；不要乱放顺序。
- 静态截图只能看到第一张，切换发生在鼠标悬停瞬间——这是正常行为，不是失效。
- 正式项目里把演示用的渐变占位块换成 `<img src="…" alt="…" />`，每张图都写 alt。
- 图位一定要有高度：用真实图片时图片比例自动撑开；用占位块时加 `aspect-square` 之类的定高类，否则会塌成一条线。
- 触屏手机没有持续 hover，点按图位对应区域可短暂切换；关键商品角度别只靠 hover 才看得到。
- 图片数量 3～6 张手感最好；感应列太窄不好对准，不要硬塞 10 张。

## 兼容性

- 纯 CSS 实现（`:has()` 选择器驱动），无 JavaScript、无框架依赖，现代浏览器直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
