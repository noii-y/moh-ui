# 霓虹（mo-neon） · 灰墨 MoH_UI

> 科技活动发布页。深空底 + 深青实色按钮 + 克制亮青霓虹发光，顶栏 + 网格 hero + 静态倒计时 + 亮点卡 + 议程表 + 购票 CTA；挂 data-theme="mo-neon" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-neon/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-neon"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-neon"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-neon · 霓虹赛博（深色）—— 科技活动 / 新品发布页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-neon"> 即整站换肤。
   气质：深空底、深青实色按钮、亮青霓虹点缀（发光仅在 demo.html 自定义类里克制使用）。
   灵感来源：cyberpunk / 科技发布会暗色气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-neon"] {
  color-scheme: dark;

  /* 底与纸：深空三层，层次靠明度与细描边 */
  --color-base-100: #0a0e14;
  --color-base-200: #111722;
  --color-base-300: #161d2b;
  --color-base-content: #eaf0f8;

  /* 主色：深青实色（按钮底） */
  --color-primary: #0e7490;
  --color-primary-content: #ffffff;

  /* 次色：深蓝青 */
  --color-secondary: #155e75;
  --color-secondary-content: #ffffff;

  /* 强调色：亮青霓虹（关键词 / 徽章 / 描边发光） */
  --color-accent: #22d3ee;
  --color-accent-content: #04141a;

  --color-neutral: #111722;
  --color-neutral-content: #eaf0f8;

  /* 语义色：霓虹亮色系，content 用深色保证对比 */
  --color-info: #38bdf8;
  --color-info-content: #08222f;
  --color-success: #34d399;
  --color-success-content: #06281c;
  --color-warning: #fbbf24;
  --color-warning-content: #2b1d02;
  --color-error: #f87171;
  --color-error-content: #330a0a;

  /* 圆角 / 边框：小圆角、1px 细边 */
  --radius-selector: 0.3rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-neon/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-neon"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-neon/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
