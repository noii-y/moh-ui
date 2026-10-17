# 粗野主义（mo-brutal） · 灰墨 MoH_UI

> 个性品牌落地页。3px 厚黑边、直角、零模糊硬阴影、海军蓝 + 撞色红，顶栏 + 超大 hero + 特性卡 + 三档价格 + 订阅 CTA；挂 data-theme="mo-brutal" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-brutal/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-brutal"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-brutal"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-brutal · 粗野主义（浅色）—— 个性品牌落地页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-brutal"> 即整站换肤。
   气质：3px 厚黑边、直角、硬阴影（6px 偏移零模糊）、海军蓝与撞色红。
   灵感来源：neo-brutalism 界面风格（仅风格参考，非品牌素材）。 */

[data-theme="mo-brutal"] {
  color-scheme: light;

  /* 底与纸：浅灰底 + 纯白卡 + 浅灰层，靠厚黑边分隔层次 */
  --color-base-100: #f7f7f7;
  --color-base-200: #ffffff;
  --color-base-300: #ececec;
  --color-base-content: #111111;

  /* 主色：海军蓝（实心按钮与主操作） */
  --color-primary: #1e3a8a;
  --color-primary-content: #ffffff;

  /* 次色：黑块（粗野主义的黑） */
  --color-secondary: #111111;
  --color-secondary-content: #ffffff;

  /* 强调色：撞色红（徽章 / 提示等点缀） */
  --color-accent: #dc2626;
  --color-accent-content: #ffffff;

  --color-neutral: #111111;
  --color-neutral-content: #ffffff;

  /* 语义色 */
  --color-info: #1e40af;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 边框：直角、3px 厚边，粗野主义取向 */
  --radius-selector: 0;
  --radius-field: 0;
  --radius-box: 0;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 3px;
  --depth: 0;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-brutal/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-brutal"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-brutal/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
