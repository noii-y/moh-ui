# 卡片 Card

> 搬运自 **daisyUI**（<https://daisyui.com/components/card/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

卡片把一组相关内容收拢成一块：定价套餐、电商商品、用户资料、文章摘要都能用它承载。一张卡只讲一件事，多张卡用外面的网格并排。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部「SaaS 定价三档」那一段发给你的 AI 直接改写；想自己粘贴代码，再复制任意变体的卡片片段。
3. 改边框、尺寸只改 `class`；切换主题时卡片颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础卡片 | `card bg-base-100 shadow-sm` |
| 卡片内容区 | `card-body`（内含 `card-title` / `card-actions`） |
| 配图位 | `<figure>` 放 `<img>` 或占位色块 |
| 描边卡 | `card-border`（代替阴影） |
| 虚线卡（可点击添加） | `card-dash` |
| 图文左右并排 | `card-side` |
| 五档密度 | `card-xs` `card-sm`（默认）`card-lg` `card-xl` |
| 动作按钮区 | `card-actions`（配 `justify-end` / `justify-center`） |
| 整宽按钮 | 按钮加 `btn-block` |

## 使用要点（给 AI 与新手的提醒）

- **一张卡只讲一件事**；多张并排时外面套 `grid grid-cols-1 lg:grid-cols-3 gap-4`，手机自动折行。
- 定价页主推档用「徽标 + 稍重阴影 + 一圈主色描边」突出，不要换高饱和底色。
- 套餐对比里「不含的功能」用删除线 + 半透明弱化，不要直接删掉。
- 没有商品图时用 `bg-base-200` 色块 + 单色 SVG 占位，不要外链图片、不要写死十六进制色。
- 卡内按钮统一放 `card-actions`，靠右或居中二选一；图标按钮无文字时必须加 `aria-label`。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
