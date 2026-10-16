# 文件上传 File Input

> 搬运自 **daisyUI**（<https://daisyui.com/components/file-input/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

文件上传是对原生 `<input type="file">` 的样式封装，用来上传头像、证件、合同附件。它只负责「选文件」这一步：已选列表、上传进度、删除单个文件都需要配合 JS 与后端接口，属于业务逻辑。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<input type="file">` 到自己的页面即可。
3. 切换灰墨主题时，上传框颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础上传框 | `<input type="file" class="file-input" />` |
| 占满整行 | 加 `w-full`，需要限宽再加 `max-w-md` |
| 只允许图片 | 加 `accept="image/*"` |
| 限定扩展名 | 加 `accept=".pdf,.doc,.docx"` |
| 多选 | 加 `multiple` 属性 |
| 幽灵（无外框） | `file-input file-input-ghost` |
| 尺寸四档 | `file-input-xs` `file-input-sm`（默认 md）`file-input-lg` |
| 语义状态色 | `file-input-primary` / `file-input-success` / `file-input-error` |
| 标签 + 说明 | `<fieldset class="fieldset">` + `<legend class="fieldset-legend">` + `<p class="fieldset-label">` |
| 禁用 | 加 `disabled` 属性（推荐） |

## 使用要点（给 AI 与新手的提醒）

- **写清传什么、有什么限制**：用 `fieldset-legend` 说明用途，`fieldset-label` 写格式与大小限制，不要只放一个光秃秃的上传框。
- **`accept` 只缩小选择范围**：用户仍能切到「所有文件」选别的，最终格式与大小必须在提交前和后端再校验一次。
- **已选回显、进度、删除是 JS 的活**：监听 `change` 事件拿到 `FileList`，本组件纯 CSS 不包含这些交互。
- 状态色（红框）只在校验失败时用，并配文字说明「超过 2MB」「仅支持图片」；不要默认给上传框涂醒目颜色。
- 禁用优先用 `disabled` 属性；手机上始终 `w-full`，不要写死固定宽度。

## 兼容性

- 纯 CSS + 原生 `<input type="file">`，无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
- 文件选择框外观由操作系统与浏览器决定，各平台略有差异，但功能一致。
