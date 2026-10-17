# 宣纸（mo-light） · 灰墨 MoH_UI

> Stripe 风格浅色 SaaS 计费控制台。浅灰白底 + 白卡 + 克制蓝主色，整页含侧栏导航、套餐卡、用量与 API 密钥、账单表与支付方式；挂 data-theme="mo-light" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-light/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-light"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-light"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-light · 宣纸（浅色）—— Stripe 取向 SaaS 控制台主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-light"> 即整站换肤。
   灵感来源：Stripe 式浅灰白卡 + 克制蓝的干净气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-light"] {
  /* 底与纸：浅灰三层，白卡浮在灰底上，层次靠明度 */
  --color-base-100: #f6f8fa;
  --color-base-200: #ffffff;
  --color-base-300: #f1f3f5;
  --color-base-content: #1a202c;

  /* 主色：克制的蓝，只留给主操作与选中态 */
  --color-primary: #2563eb;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：蓝灰与天蓝，用于次级元素与数据高亮 */
  --color-secondary: #64748b;
  --color-secondary-content: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-content: #083344;

  --color-neutral: #334155;
  --color-neutral-content: #ffffff;

  /* 语义色：白底上的标准可读色 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，SaaS 取向 */
  --radius-selector: .375rem;
  --radius-field: .25rem;
  --radius-box: .5rem;
  --size-selector: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-light/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-light"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-light/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
