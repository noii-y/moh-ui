# 文字轮转 Text Rotate

> 搬运自 **daisyUI**（<https://daisyui.com/components/text-rotate/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

文字轮转让一句话里的关键词自动循环轮换：把一组 3~6 个词放进一个只显示一行高的窗口里，词与词之间平滑滚动衔接。纯 CSS 动画，默认 10 秒一轮，鼠标悬停自动暂停，常用于官网首屏大标语。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段结构到自己的句子中间。
3. 把轮换词换成你自己的业务词组；速度、行高用内联 `style` 调整。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 基础轮换（3 词，默认 10 秒） | `<span class="text-rotate"><span><span>词一</span><span>词二</span><span>词三</span></span></span>` |
| 词长短不一时水平居中 | 内层容器加 `justify-items-center` |
| 彩色块轮换词 | 词上加 `bg-teal-400 text-teal-800 px-2` 等 |
| 自定义轮换速度 | 内层容器内联 `style="animation-duration:6s"` |
| 自定义行高（大字号必备） | 外层内联 `style="line-height:2"` |
| 最大词数 | 6 个 |

## 使用要点（给 AI 与新手的提醒）

- **两层结构别搞反**：外层 `text-rotate`（窗口），内层一个 span（词列表 grid），每个词一个 span。
- 一个标语里只放**一个**轮换词，套在主色关键词上，其余文字静止，动多了显廉价。
- 大字号（`text-5xl` 以上）必加 `line-height`，否则滚动时上下行字会相碰。
- 轮换词只是装饰：**页面关键信息不能只放在轮换词里**，读屏软件会把所有词连读。
- 悬停暂停、「减少动态效果」自动跳变，都是纯 CSS 内置，不需要 JS。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走主题变量与标准色阶，深浅色主题均自动适配。
