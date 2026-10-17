# 灰阶中性（商务浅色）（mo-gray） · 灰墨 MoH_UI

> 冷调商务 CRM 客户管理整页。冷灰白三层底 + 金属深灰主色 + 低饱和石墨蓝强调，客户阶段看板、跟进时间线与销售漏斗全部用 daisyUI 组件拼装、零依赖；挂 data-theme="mo-gray" 即整站换肤，适合企业级经营管理后台。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-gray/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-gray"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-gray"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-gray · 冷调商务（浅色）—— 灰阶克制 CRM 后台主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-gray"> 即整站换肤。
   灵感来源：shadcn Graphite 石墨灰的冷调商务气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-gray"] {
  /* 底与纸：浅灰白三层，层次靠明度与细描边区分 */
  --color-base-100: #f4f4f6;
  --color-base-200: #ffffff;
  --color-base-300: #ececef;
  --color-base-content: #1f1f24;

  /* 主色：金属深灰（主操作与选中态，不做大面积黑色块） */
  --color-primary: #2b2b31;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：中灰与低饱和冷青石墨蓝，用于头像、标签与数据高亮 */
  --color-secondary: #71717a;
  --color-secondary-content: #ffffff;
  --color-accent: #4a6fa5;
  --color-accent-content: #ffffff;

  --color-neutral: #1f1f24;
  --color-neutral-content: #ffffff;

  /* 语义色：标准可读色，content 白 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，企业级克制取向 */
  --radius-selector: 0.3rem;
  --radius-field: 0.25rem;
  --radius-box: 0.45rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-gray/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-gray"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-gray/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
