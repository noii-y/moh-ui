# 新中式（mo-zhongshi） · 灰墨 MoH_UI

> 茶叶文创电商首页。米宣纸底 + 朱砂主色 + 墨褐文字 + 衬线留白，顶栏 + 水墨 hero + 分类 + 商品网格 + 品牌故事留白区；挂 data-theme="mo-zhongshi" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-zhongshi/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-zhongshi"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-zhongshi"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-zhongshi · 新中式（浅色）—— 文创 / 茶叶电商首页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-zhongshi"> 即整站换肤。
   气质：米宣纸底、朱砂主色、墨褐文字、青瓷点缀、克制留白。
   灵感来源：中式宋明美学与茶饮品牌页面（仅风格参考，非品牌素材）。 */

[data-theme="mo-zhongshi"] {
  color-scheme: light;

  /* 底与纸：米宣纸三层，层次靠暖明度 */
  --color-base-100: #f6f3ec;
  --color-base-200: #fffdf8;
  --color-base-300: #efe9dd;
  --color-base-content: #3f3730;

  /* 主色：朱砂 */
  --color-primary: #c23b22;
  --color-primary-content: #ffffff;

  /* 次色：茶褐 / 赭石 */
  --color-secondary: #8a6d4a;
  --color-secondary-content: #ffffff;

  /* 强调色：青瓷低饱和绿 */
  --color-accent: #6b8e7f;
  --color-accent-content: #ffffff;

  --color-neutral: #3f3730;
  --color-neutral-content: #ffffff;

  /* 语义色 */
  --color-info: #3a6ea5;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 边框：中性小圆角、1px 细边 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.375rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-zhongshi/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-zhongshi"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-zhongshi/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
