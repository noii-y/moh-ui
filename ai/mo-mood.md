# 暗黑开发者（mo-mood） · 灰墨 MoH_UI

> 深空底宇宙蓝开发者 API 控制台整页。低光害深色三层底色 + 宇宙蓝主色，适合开发者工具 / 日志查看器 / 数据产品夜间模式；挂 data-theme="mo-mood" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-mood/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-mood"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-mood"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-mood · 暗黑开发者（深色）—— API 控制台主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-mood"> 即整站换肤。
   深空底三层递进 + 宇宙蓝主色，低光害，适合开发者工具夜间工作。 */

[data-theme="mo-mood"] {
  color-scheme: dark;

  /* 底与纸：深空近黑三层，层次靠明度不靠描边 */
  --color-base-100: #0f1117;
  --color-base-200: #151822;
  --color-base-300: #1b1f2b;
  --color-base-content: #e6e8ee;

  /* 主色：宇宙蓝（只留给主操作与选中态） */
  --color-primary: #4a63e0;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：灰蓝与青，用于次级元素与代码高亮 */
  --color-secondary: #6b7a99;
  --color-secondary-content: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-content: #061826;

  --color-neutral: #1b1f2b;
  --color-neutral-content: #e6e8ee;

  /* 语义色：深色版亮语义色，文字用近黑保证对比 */
  --color-info: #38bdf8;
  --color-info-content: #061826;
  --color-success: #34d399;
  --color-success-content: #06281c;
  --color-warning: #fbbf24;
  --color-warning-content: #3a2a05;
  --color-error: #f87171;
  --color-error-content: #3b0d0d;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，控制台取向 */
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

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-mood/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-mood"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-mood/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
