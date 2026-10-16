# 按键 Kbd

> 搬运自 **daisyUI**（<https://daisyui.com/components/kbd/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

按键（Kbd）用一块键帽的样子展示键盘按键或快捷键，常见于快捷键说明卡、操作提示和帮助文档。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<kbd>` 到自己的页面。
3. 切换灰墨主题时，键帽颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 单个键帽 | `<kbd class="kbd">K</kbd>` |
| 尺寸 | `kbd-xs` `kbd-sm`（默认 md）`kbd-lg` `kbd-xl` |
| 组合键 | 多个 `<kbd class="kbd">` 用 `flex items-center gap-1` 排开 |
| 行内嵌入正文 | `<kbd class="kbd kbd-sm">Enter</kbd>` |

## 使用要点（给 AI 与新手的提醒）

- 每个按键单独一个 `<kbd>`，组合键（如 Ctrl+S）拆成 `<kbd>Ctrl</kbd>` `<kbd>S</kbd>` 两块。
- 说明卡里用 `kbd-sm` 让键帽和正文行高匹配；正文行内也用 `kbd-sm` 或 `kbd-xs`。
- 中文界面里键名用「Ctrl」「Shift」「Enter」这类通用英文名，不要自造中文键名。
- 键帽只是视觉样式，读屏软件会读出里面的字符，不要往里塞图标。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
