# Solarized Light（纸感护眼）（solarized-light） · 灰墨 MoH_UI

> 健康档案 / 预约挂号整页。米纸底色 #fdf6e3 配深青墨文字，低亮度差、长时间阅读不累眼；挂 data-theme="solarized-light" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Solarized（MIT） · [上游色板](https://github.com/altercation/solarized)

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/solarized-light/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="solarized-light"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="solarized-light"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 solarized-light · 纸感护眼——Solarized 浅色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   配色取自 Ethan Schoonover 的 Solarized 色板（MIT，https://github.com/altercation/solarized#the-values）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="solarized-light"> 即整站换肤。 */

[data-theme="solarized-light"] {
  color-scheme: light;

  /* 底与纸：base3 / base2 / 再深一档，米纸三层，层次靠明度 */
  --color-base-100: #fdf6e3;
  --color-base-200: #eee8d5;
  --color-base-300: #e3dccb;
  --color-base-content: #073642; /* base02 深青墨，保证亮底下对比 */

  /* 主色：Solarized blue（只留给主操作与选中态） */
  --color-primary: #268bd2;
  --color-primary-content: #fdf6e3;

  /* 次色 / 强调色：violet 与 cyan */
  --color-secondary: #6c71c4;
  --color-secondary-content: #fdf6e3;
  --color-accent: #2aa198;
  --color-accent-content: #073642;

  --color-neutral: #93a1a1; /* base1 灰青 */
  --color-neutral-content: #073642;

  /* 语义色：cyan 信息 / green 成功 / yellow 警告 / red 错误，均配好对比 */
  --color-info: #2aa198;
  --color-info-content: #073642;
  --color-success: #859900;
  --color-success-content: #002b36;
  --color-warning: #b58900;
  --color-warning-content: #073642;
  --color-error: #dc322f;
  --color-error-content: #fdf6e3;

  /* 圆角 / 尺寸 / 边框：中性圆角、细边框，长文阅读取向 */
  --radius-selector: 0.5rem;
  --radius-field: 0.375rem;
  --radius-box: 0.625rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/solarized-light/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="solarized-light"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/solarized-light/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
