# 粉彩（柔和浅色）（mo-pastel） · 灰墨 MoH_UI

> 圆润亲和在线教育课程后台整页。微粉暖白底 + 深莓果主色 + 淡紫暖杏点缀，学员统计、课程卡片网格、本周排课表与待批作业全部用 daisyUI 组件拼装、零依赖；挂 data-theme="mo-pastel" 即整站换肤，适合教育 / 生活服务 / 健康类产品后台。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-pastel/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-pastel"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-pastel"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-pastel · 粉彩柔和（浅色）—— 圆润亲和在线教育后台主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-pastel"> 即整站换肤。
   灵感来源：shadcn Marshmallow 粉彩圆润气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-pastel"] {
  /* 底与纸：微粉暖白三层，柔和不刺眼 */
  --color-base-100: #faf7f8;
  --color-base-200: #ffffff;
  --color-base-300: #f5f0f2;
  --color-base-content: #45343d;

  /* 主色：深莓果（主操作与选中态，白字对比充足） */
  --color-primary: #8e3b5e;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：柔和淡紫与暖杏蜜桃，用于装饰与数据高亮 */
  --color-secondary: #8a63b8;
  --color-secondary-content: #ffffff;
  --color-accent: #e8927c;
  --color-accent-content: #5c2a1a;

  --color-neutral: #45343d;
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

  /* 圆角 / 尺寸 / 边框：大圆角、细边框，亲和圆润取向 */
  --radius-selector: 1rem;
  --radius-field: 0.75rem;
  --radius-box: 1.25rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-pastel/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-pastel"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-pastel/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
