# 首屏横幅 Hero

> 搬运自 **daisyUI**（<https://daisyui.com/components/hero/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 布局形态参考了 **Preline**（<https://preline.co/>）、**Flowbite**（<https://flowbite.com/blocks/marketing-ui/hero/>）、**HyperUI**（<https://www.hyperui.dev/components/marketing/hero-sections>）的 hero 区块（均为 MIT/免费），只学布局，HTML 一律用 daisyUI 类重写。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Hero 是页面最顶端的一块大横幅：一句大标题讲清产品价值，配一个主按钮和一张产品预览（或登录卡），是落地页、官网、登录页的开场。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `hero` 结构到自己的页面。
3. 切换灰墨主题时，首屏颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础容器 | `hero`（留白用 `py-20` / `py-24`，别写 `min-h-screen`） |
| 内容列 | `hero-content`（在组件舞台里记得加 `w-full`，否则会收缩成内容宽度） |
| 手机竖排 → 桌面左右 | `flex-col lg:flex-row`（两列都加 `min-w-0`） |
| 图片换到左边 | `flex-col lg:flex-row-reverse` |
| 居中纯文字 | `hero-content text-center` + 内层 `max-w-md` |
| 叠背景遮罩 | 内层加 `hero-overlay` |
| 深色背景上的文字 | `text-neutral-content` |
| 公告胶囊 | `badge badge-soft badge-primary px-4 py-2` |
| 只读星级 | `rating rating-sm` + disabled/checked 的 `mask mask-star-2 bg-orange-400` |

## 使用要点（给 AI 与新手的提醒）

- **一屏只给一个主按钮**：`btn-primary` 只有一个，次要操作用 `btn-soft`；信任元素（星级、用户数）挤在同一行小字里。
- **标题禁止单字孤行**：左右两列都加 `min-w-0`，标题在合理位置主动 `<br />` 断行；手机 `text-2xl`、桌面 `lg:text-5xl`。
- **产品图用占位**：没有截图时用内联 `linear-gradient` 色块 + 单色 SVG，接图时把 `div` 换成 `<img>`；不要外链图片。
- **别写死 `min-h-screen`**：在文档流里它会撑满视口盖住按钮；真要整屏落地页才加。
- 深色渐变/图片背景上必须叠 `hero-overlay` 压暗，文字换 `text-neutral-content`。
- 背景视频、自动轮播需要 JS，纯 CSS 做不了。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
