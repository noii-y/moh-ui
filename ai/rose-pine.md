# 暮色松（Rosé Pine）（rose-pine） · 灰墨 MoH_UI

> 独立博客 / 长文杂志整页。暖紫暮色 + 鸢尾紫主色，站点头部、SVG 头图、长文排版（标题 / 引用 / 列表 / 行内代码）、右侧目录与相关文章卡；挂 data-theme="rose-pine" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Rosé Pine（MIT） · [上游色板](https://github.com/rose-pine/neovim/blob/main/lua/rose-pine/palette.lua)

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/rose-pine/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="rose-pine"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="rose-pine"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 rose-pine · 暮色松（Rosé Pine 移植）—— 暖紫暮色、文艺阅读气质
   色板出处：Rosé Pine（MIT，© 2023 Rosé Pine）https://github.com/rose-pine/neovim/blob/main/lua/rose-pine/palette.lua
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="rose-pine"> 即整站换肤。 */

[data-theme="rose-pine"] {
  color-scheme: dark;

  /* 底与纸：base / surface / overlay 三层，暖紫暮色 */
  --color-base-100: #191724;
  --color-base-200: #1f1d2e;
  --color-base-300: #26233a;
  --color-base-content: #e0def4;

  /* 主色：iris 鸢尾紫，只留给当前导航与主操作 */
  --color-primary: #c4a7e7;
  --color-primary-content: #191724;

  /* 次色：rose 玫红 / foam 青，杂志式点缀 */
  --color-secondary: #eb6f92;
  --color-secondary-content: #2a0a14;
  --color-accent: #9ccfd8;
  --color-accent-content: #12242a;

  --color-neutral: #403d52;
  --color-neutral-content: #e0def4;

  /* 语义色：pine / foam / gold / love，长文阅读柔和 */
  --color-info: #31748f;
  --color-info-content: #e0def4;
  --color-success: #9ccfd8;
  --color-success-content: #12242a;
  --color-warning: #f6c177;
  --color-warning-content: #3a2a05;
  --color-error: #eb6f92;
  --color-error-content: #2a0a14;

  /* 圆角 / 尺寸 / 边框：杂志书卷感，中等圆角 */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.625rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/rose-pine/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="rose-pine"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/rose-pine/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
