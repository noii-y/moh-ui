# 纯净灰阶（mo-slate） · 灰墨 MoH_UI

> 无彩色灰阶文档中心整页。浅灰白底 + 深炭文字，零色相专注阅读，适合文档站 / 帮助中心 / 写作效率类产品；挂 data-theme="mo-slate" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-slate/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-slate"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-slate"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-slate · 纯净灰阶（浅色）—— 文档 / 帮助中心主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-slate"> 即整站换肤。
   无彩色零色相：正文与按钮全部用中性灰，语义色只保留给提示块，专注阅读。 */

[data-theme="mo-slate"] {
  /* 底与纸：浅灰三层，层次靠明度不靠描边 */
  --color-base-100: #f8f8f8;
  --color-base-200: #ffffff;
  --color-base-300: #f0f0f0;
  --color-base-content: #1a1a1a;

  /* 主色：深炭（不是死黑，用于主按钮与选中态，浅底上不刺眼） */
  --color-primary: #262626;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：纯灰阶，零色相 */
  --color-secondary: #737373;
  --color-secondary-content: #ffffff;
  --color-accent: #525252;
  --color-accent-content: #ffffff;

  --color-neutral: #1a1a1a;
  --color-neutral-content: #ffffff;

  /* 语义色：保留色相但压低饱和，只给文档提示块用 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，纸质文档取向 */
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

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-slate/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-slate"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-slate/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
