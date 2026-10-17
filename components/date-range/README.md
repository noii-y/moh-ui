# 日期范围 Date Range

> 灰墨自研增强组件（基于 daisyUI 的 input / join / btn，MIT 开源）。

## 它是什么

订单、报表、数据列表顶部的日期筛选条：两个原生 `<input type="date">` 用 join 无缝拼成一条，中间「至」分隔，配上今天 / 近 7 天 / 近 30 天 / 本月四个快捷预设。原生日期框自带日历面板，预设填充只需要一小段原生 JS。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 成品区里那段 `<div class="join">` 和预设按钮组；要预设自动填日期，再把里面那一小段 `<script>` 一起搬过去。
3. 切换灰墨主题时，日期框和预设按钮颜色自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 起止日期拼接条 | `<div class="join">` 包两个 `<input type="date" class="input join-item">` |
| 中间「至」分隔 | `<span class="join-item flex items-center px-3 bg-base-200" aria-hidden="true">至</span>` |
| 读屏标注 | 两个 input 分别加 `aria-label="开始日期"` / `"结束日期"` |
| 快捷预设按钮 | `btn btn-soft btn-sm`，选中项 `aria-pressed="true"` |
| 预设按钮组 | `role="group" aria-label="快捷预设"` 包一组按钮 |
| 查询 / 重置 | 主操作 `btn btn-primary`，重置用默认 `btn` |
| 窄屏折行 | 外层 `flex flex-wrap items-center gap-2`，不写响应式类 |

## 使用要点（给 AI 与新手的提醒）

- **用原生 date input，别自己写日历**：浏览器自带日历面板、键盘输入和移动端滚轮，零依赖；自己手写日历是一大坨 JS，不值得。
- **选中态用 `aria-pressed`**：柔和态预设按钮只是外观，`aria-pressed="true"` 才是语义；同组同时只有一个为 true。
- **日期格式化用本地时区**：直接拼 `getFullYear()-月-日`，不要用 `toISOString().slice(0,10)`——它按 UTC 算，在中国时区会让日期偏一天。
- **预设口径**：近 7 天 = 今天往前 6 天（含今天共 7 天）；近 30 天 = 往前 29 天；本月 = 当月 1 号到今天。
- **不要用 `ml-auto` 推按钮**：手机窄屏会把「查询 / 重置」挤出屏幕，按钮放自然顺序的 `flex flex-wrap` 里即可。
- 真实项目里，点「查询」后再带着两个 input 的值发请求；本组件只负责把起止日期填对、填整齐。

## 兼容性

- 零外部依赖：样式全部来自 daisyUI 5 + 工具类补丁；预设填充是约 30 行原生 JS，不依赖任何框架。
- 颜色全部走 daisyUI 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
