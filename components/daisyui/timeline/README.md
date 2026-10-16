# 时间线 Timeline

> 搬运自 **daisyUI**（<https://daisyui.com/components/timeline/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

时间线把一系列事件按时间顺序排成一条线，用于物流轨迹、项目里程碑、操作日志、公司发展历程等「按时间讲故事」的场景。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 顶部的「复制 AI 提示词」整段发给你的 AI，让它按你的项目生成；想直接粘贴代码，再打开 demo.html 复制里面具体需要的那一段。
3. 切换灰墨主题时，连线与节点颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 时间线容器 | `timeline`（默认水平一排） |
| 垂直排列 | 加 `timeline-vertical` |
| 内容挤在中线一侧 | 加 `timeline-compact` |
| 左侧内容块 | 子元素加 `timeline-start` |
| 中线节点（图标） | 子元素加 `timeline-middle` |
| 右侧内容块 | 子元素加 `timeline-end` |
| 内容块加卡片框 | 与 end/start 合用 `timeline-box` |
| 连接线 | `<hr />`：第一个 `<li>` 结尾放一个，中间 `<li>` 两头各放一个，最后一个 `<li>` 只开头放一个、结尾不放 |
| 连线变主色 | `<hr class="bg-primary" />` |
| 已完成/当前/未到 | 图标套 `text-success` / 中间放 `badge badge-primary` / 套 `opacity-40` |

## 使用要点（给 AI 与新手的提醒）

- **连接线是 `<hr>`，别漏放**：第一个 `<li>` 在结尾放一个，中间每个 `<li>` 开头、结尾各放一个，最后一个 `<li>` 只在开头放一个、结尾不放。
- 节点内容一句话就够，别塞大段段落；节点总数控制在 5 到 7 个。
- 用颜色表达进度：完成=绿、进行中=主色徽标、未到=置灰，别每个节点都上色。
- 垂直时间线在 390px 窄屏天然不会横向溢出，订单跟踪优先用 `timeline-vertical`。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
