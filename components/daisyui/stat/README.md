# 统计卡 Stat

> 搬运自 **daisyUI**（<https://daisyui.com/components/stat/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

统计卡把一个关键数字（订单量、销售额、转化率、余额）单独成块展示，通常一排 3–5 个，放在后台看板顶部。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部「电商数据看板」那一段发给你的 AI 直接改写；想自己粘贴代码，再复制任意变体。
3. 改方向、加图标只改 `class`；切换主题时数字颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 容器（多个指标一排） | `stats`（配 `shadow`） |
| 单个指标块 | `stat` |
| 小标签 / 大数字 / 备注 | `stat-title` / `stat-value` / `stat-desc` |
| 图标位 | `stat-figure`（配 `text-primary` 等语义色） |
| 操作按钮位 | `stat-actions` |
| 手机竖排、桌面横排 | `stats stats-vertical lg:stats-horizontal` |
| 全部居中 | 单个 `stat` 加 `place-items-center` |

## 使用要点（给 AI 与新手的提醒）

- 一屏只放 3–5 个指标；每个数字配「涨跌备注」，没有对比的裸数字价值很低。
- 数字加 `tabular-nums`，同比环比时个位不跳。
- 涨跌语义色：有利用 `text-success`，不利用 `text-error`；箭头写 ▲ / ▼ 字符，不要用 emoji。
- `stat-figure` 放单色 SVG（`h-8 w-8`），别贴彩色图标图片。
- 窄屏超过 4 个指标就拆行或减量，不要硬塞。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
