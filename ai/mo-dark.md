# 墨夜（mo-dark） · 灰墨 MoH_UI

> Linear 风格暗色数据看板。近黑冷灰 + 克制靛蓝主色，适合数据看板 / 监控类后台；挂 data-theme="mo-dark" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-dark/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-dark"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-dark"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-dark · 墨夜（深色）—— Linear 风格数据看板主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-dark"> 即整站换肤。
   灵感来源：Linear.app 冷灰 + 克制蓝紫的暗色气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-dark"] {
  color-scheme: dark;

  /* 底与纸：近黑冷灰三层，层次靠明度不靠描边 */
  --color-base-100: oklch(23% 0.012 253);
  --color-base-200: oklch(20.5% 0.011 253);
  --color-base-300: oklch(17.5% 0.010 253);
  --color-base-content: oklch(96% 0.006 253);

  /* 主色：克制的靛蓝（只留给主操作与选中态，不做大面积亮紫） */
  --color-primary: oklch(66% 0.17 255);
  --color-primary-content: oklch(16% 0.03 255);

  /* 次色 / 强调色：冷灰蓝与青，用于次级元素与数据高亮 */
  --color-secondary: oklch(58% 0.11 258);
  --color-secondary-content: oklch(94% 0.01 258);
  --color-accent: oklch(72% 0.13 200);
  --color-accent-content: oklch(20% 0.03 200);

  --color-neutral: oklch(26% 0.012 253);
  --color-neutral-content: oklch(94% 0.005 253);

  /* 语义色：低饱和，保证暗底下可读、不刺眼 */
  --color-info: oklch(72% 0.12 232);
  --color-info-content: oklch(22% 0.04 232);
  --color-success: oklch(72% 0.14 160);
  --color-success-content: oklch(20% 0.03 160);
  --color-warning: oklch(80% 0.12 85);
  --color-warning-content: oklch(25% 0.05 85);
  --color-error: oklch(68% 0.17 20);
  --color-error-content: oklch(20% 0.04 20);

  /* 圆角 / 尺寸 / 边框：中等圆角、细边框，Linear 取向 */
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

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-dark/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-dark"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-dark/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
