# 多行文本域 Textarea

> 搬运自 **daisyUI**（<https://daisyui.com/components/textarea/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

多行文本域让用户输入**多行**文本，适合订单备注、意见反馈、个人简介、发帖这类内容较长、可能换行的场景。一两个词、一行能写完的（姓名、邮箱、地址）用单行 `input` 更合适。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<textarea>…</textarea>` 到自己的页面即可。
3. 切换灰墨主题时，文本域颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础多行 | `<textarea class="textarea">` |
| 占满整行 | 加 `w-full` |
| 固定高度 | 加 `h-24` / `h-32`（替代任意值 h-[Npx]） |
| 幽灵（无外框） | `textarea textarea-ghost` |
| 强调边框 | `textarea-primary` / `textarea-secondary` / `textarea-accent` |
| 语义状态色 | `textarea-info` / `textarea-success` / `textarea-warning` / `textarea-error` |
| 尺寸五档 | `textarea-xs` `textarea-sm`（默认 md）`textarea-lg` `textarea-xl` |
| 标签 + 文本域 + 字数说明 | `<fieldset class="fieldset">` + `<legend class="fieldset-legend">` + `<span class="fieldset-label">` |
| 字数上限 / 计数 | `maxlength="200"` + 一小段 JS 监听 `input` 更新已填字数 |
| 禁用 | 加 `disabled` 属性（推荐） |

## 使用要点（给 AI 与新手的提醒）

- **给足高度**：默认高度偏矮，加 `h-24` / `h-32`，别让它看起来像单行输入框。
- **每个文本域都要有标签**：优先用 `fieldset + fieldset-legend`；只靠 placeholder 的话，一打字占位符就消失了。
- **字数上限要配实时计数**：有 `maxlength` 就在旁边显示「已填 X/N 字」，别只截断不提示。
- **状态色必须配文字**：`textarea-error` / `textarea-warning` 旁边要说清楚错在哪、怎么改，不能只把框变红。
- 不要用 Tailwind 任意值类（如 `h-[100px]`），补丁层不支持，一律换 `h-24` 这类标准类。
- 禁用优先用 `disabled` 属性；颜色全部走主题变量，不要写死颜色。

## 兼容性

- 纯 CSS + 原生 `<textarea>`，无框架依赖；唯一需要的一小段 JS 是字数统计（监听 `input`）。
- 右下角拖拽调大小是浏览器原生能力，各浏览器行为一致。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
