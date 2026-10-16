# 字段分组 Fieldset

> 搬运自 **daisyUI**（<https://daisyui.com/components/fieldset/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

表单布局的语义骨架：用 `<fieldset class="fieldset">` 把一组相关控件包起来，`<legend class="fieldset-legend">` 作整组标题，`<p class="fieldset-label">` 写字段名或辅助说明。它本身不替代 `input` / `select` / `checkbox`，只负责分组、对齐和整组禁用。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应分组那一段 `<fieldset>` 到自己的页面即可。
3. 切换灰墨主题时，分组背景、边框、文字颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 字段容器 | `<fieldset class="fieldset">` |
| 整组标题 | `<legend class="fieldset-legend">标题</legend>` |
| 次要说明 / 标签行 | `<p class="fieldset-label">说明</p>` 或 `<label class="fieldset-label">…</label>` |
| 卡片式分组 | `fieldset rounded-box border border-base-300 bg-base-200 p-4` |
| 标题同行放控件 | 在 `fieldset-legend` 里右侧放 `<select class="select select-sm">` 或 `<input class="toggle">` |
| 单字段名与控件绑定 | `<label class="label" for="id">` + `<input id="id">` |
| 整组禁用 | 在 `<fieldset disabled>` 上加 `disabled` 属性，组内控件一并置灰 |
| 输入框 + 按钮连成一行 | `<div class="join">`，内部 `input.join-item` + `button.join-item` |

## 使用要点（给 AI 与新手的提醒）

- **legend 是组标题，不是字段名**：一整个分组共用一个 legend；分组内每个字段再用 `label` 配 `for` / `id` 单独命名。
- **点 label 要能聚焦控件**：`for` 与 `id` 必须一致，手机和读屏用户都靠它。
- **整组禁用要说明原因**：`disabled` 之后配一句 `fieldset-label`，告诉用户为什么不可改、什么时候能改。
- **窄屏别硬推右侧控件**：标题同行的下拉/开关用 `fieldset-legend` 自带的两端对齐，不要额外加 `ml-auto`，避免被挤出屏幕。
- 不要写死颜色或渐变，分组背景统一用 `bg-base-200`、边框用 `border-base-300`，深浅色主题自动适配。

## 兼容性

- 纯 CSS + 原生 `<fieldset>` 语义，无 JavaScript、无框架依赖，HTML 直接可用。
- `<fieldset disabled>` 的整组禁用是浏览器原生能力，所有现代浏览器一致。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
