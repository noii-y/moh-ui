# 文件上传 File Input

> 搬运自 **daisyUI**（<https://daisyui.com/components/file-input/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

原生文件选择控件（`<input type="file">`），用于上传头像、附件、文档等。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<input type="file" class="file-input">`；
3. 颜色随主题自动变化。

## 常用写法速查

| 想要的效果 | 类名 / 属性 |
|---|---|
| 基础 | `file-input` |
| 多选 | 加 `multiple` |
| 限定类型 | `accept="image/*"` 或 `accept=".pdf,.doc"` |
| 幽灵 | `file-input file-input-ghost` |
| 尺寸 | `file-input-xs` ~ `file-input-xl` |
| 语义色 | `file-input-primary` / `file-input-success` / `file-input-error` |
| 标题/提示 | 包在 `<fieldset class="fieldset">` 里 |

## 使用要点

- 在控件旁**写明限制**：最大体积、允许格式、尺寸要求（如"最大 2MB，jpg/png"），别让用户传完才报错。
- 真正的类型与大小校验必须在 JS/后端做，`accept` 只是过滤器，用户仍可绕过。
- 选完文件后，最好显示文件名与大小，并提供"移除"按钮。
- 多文件上传、拖拽上传、进度条是更重的场景，需要额外 JS 与后端配合。

## 兼容性

纯 CSS + 原生 file 控件；按钮文案随浏览器/系统语言（中文系统显示"选择文件"）。
