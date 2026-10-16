# 进度条 Progress

> 搬运自 **daisyUI**（<https://daisyui.com/components/progress/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

原生 `<progress>` 标签的样式封装，用一条横条表示完成度：文件上传、报表导出、任务排队都用它。零 JavaScript，宽度默认撑满容器。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<progress>` 到自己的页面。
3. 进度写在 `value`（0–100）与 `max` 里，颜色加 `progress-primary` 等语义类；切换灰墨主题时自动跟随。

## 常用写法速查

| 想要的效果 | 写法 |
|---|---|
| 确定进度（45%） | `<progress class="progress progress-primary" value="45" max="100"></progress>` |
| 不确定进度（不知走到哪） | `<progress class="progress progress-primary"></progress>`（去掉 value） |
| 主 / 次 / 强调色 | `progress-primary` / `progress-secondary` / `progress-accent` |
| 完成态 | `value="100"` + `progress-success` |
| 警告 / 错误 | `progress-warning` / `progress-error` |
| 细线小号 | 加内联 `style="height:6px"` |
| 撑满容器 | 加 `w-full` |

## 使用要点（给 AI 与新手的提醒）

- **知道多少填多少**：有真实进度才填 `value`；拿不到就留空跑不确定动画，不要伪造慢慢涨的假数字。
- 数字和条必须对上：写「72%」时 `value` 就是 72，更新进度两边同步。
- 100% 换 `progress-success`，文案改成结果（上传完成），别让条永远停在 99%。
- 用原生 `<progress>` 标签，读屏天然认识；不确定进度不要写 `aria-valuenow`。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走主题变量，深浅色主题、灰墨 10 套主题均自动适配。
