# 北极冷（Nord 暗色版）（nord-dark） · 灰墨 MoH_UI

> 邮件客户端三栏整页。极地冷灰蓝 + 冰蓝主色，左侧文件夹与标签、中部收件箱列表（未读加粗）、右侧邮件阅读窗；挂 data-theme="nord-dark" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Nord（MIT） · [上游色板](https://www.nordtheme.com/docs/colors-and-palettes)

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/nord-dark/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="nord-dark"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="nord-dark"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 nord-dark · 北极冷（Nord 完整暗色移植）—— 极地冷灰蓝、克制专注
   色板出处：Nord（MIT，© 2016-present Sven Greb）https://www.nordtheme.com/docs/colors-and-palettes
   说明：daisyUI 官方自带 nord 为浅色简化版，本目录是完整 16 色 Polar Night /
   Snow Storm / Frost / Aurora 暗色 port，命名为 nord-dark 以区分。
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="nord-dark"> 即整站换肤。 */

[data-theme="nord-dark"] {
  color-scheme: dark;

  /* 底与纸：Polar Night 三层，冷灰克制 */
  --color-base-100: #3b4252;   /* nord1 */
  --color-base-200: #434c5e;   /* nord2 */
  --color-base-300: #2e3440;   /* nord0 */
  --color-base-content: #e5e9f0; /* nord5 */

  /* 主色：nord10 冰蓝，只留给写邮件等主操作 */
  --color-primary: #5e81ac;
  --color-primary-content: #eceff4; /* nord6 */

  /* 次色：nord9 / nord8，冷调次级高亮 */
  --color-secondary: #81a1c1;
  --color-secondary-content: #2e3440;
  --color-accent: #88c0d0;
  --color-accent-content: #2e3440;

  --color-neutral: #4c566a;    /* nord3 */
  --color-neutral-content: #e5e9f0;

  /* 语义色：Aurora 四色，长时阅读不刺眼 */
  --color-info: #88c0d0;
  --color-info-content: #2e3440;
  --color-success: #a3be8c;    /* nord14 */
  --color-success-content: #2e3440;
  --color-warning: #ebcb8b;   /* nord13 */
  --color-warning-content: #3b3209;
  --color-error: #bf616a;       /* nord11 */
  --color-error-content: #eceff4;

  /* 圆角 / 尺寸 / 边框：中性小角，效率工具取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/nord-dark/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="nord-dark"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/nord-dark/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
