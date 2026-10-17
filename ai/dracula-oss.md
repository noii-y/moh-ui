# 极客紫（OSS 完整版）（dracula-oss） · 灰墨 MoH_UI

> 开源代码协作平台整页（仓库头 + 文件树 + main.py 代码预览 + README 摘要 + PR/Issue 列表）。Dracula 完整 OSS 色板：深紫灰底 + 霓虹紫主色，挂 data-theme="dracula-oss" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Dracula Theme (dracula/dracula-theme)（MIT） · [上游色板](https://github.com/dracula/dracula-theme#color-palette-oss)

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/dracula-oss/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="dracula-oss"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="dracula-oss"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 dracula-oss · 极客紫（外部 OSS 完整版）—— Dracula 完整色板开发者主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 dracula/dracula-theme 官方 OSS 色板（MIT © 2023 Dracula Theme）。
   注意：vendor 内 daisyUI 官方自带简化版 data-theme=dracula，本目录以 -oss 后缀区分。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="dracula-oss"> 即整站换肤。 */

[data-theme="dracula-oss"] {
  color-scheme: dark;

  /* 底与纸：Dracula 经典深紫灰三层，#282a36 为官方 Background */
  --color-base-100: #282a36;
  --color-base-200: #21222c;
  --color-base-300: #191a21;
  --color-base-content: #f8f8f2;

  /* 主色：霓虹紫（官方 Purple #bd93f9），只留给主操作与选中态 */
  --color-primary: #bd93f9;
  --color-primary-content: #21222c;

  /* 次色 / 强调色：霓虹粉（Pink #ff79c6）与荧光青（Cyan #8be9fd） */
  --color-secondary: #ff79c6;
  --color-secondary-content: #21222c;
  --color-accent: #8be9fd;
  --color-accent-content: #21222c;

  /* 中性面：官方 Selection #44475a，用于侧栏与次级面板 */
  --color-neutral: #44475a;
  --color-neutral-content: #f8f8f2;

  /* 语义色：官方语法色直接映射（青/绿/黄/红），橙 #ffb86c 留给中性提示 */
  --color-info: #8be9fd;
  --color-info-content: #21222c;
  --color-success: #50fa7b;
  --color-success-content: #21222c;
  --color-warning: #f1fa8c;
  --color-warning-content: #21222c;
  --color-error: #ff5555;
  --color-error-content: #f8f8f2;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，开发者终端取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/dracula-oss/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="dracula-oss"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/dracula-oss/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
