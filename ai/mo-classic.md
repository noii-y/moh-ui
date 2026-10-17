# 经典 Bootstrap 后台风（mo-classic） · 灰墨 MoH_UI

> 经典 Bootstrap 风用户管理后台。经典深蓝顶栏 + 分组侧栏 + 筛选表单 + 用户分页表 + 新增用户表单，Tabler / AdminLTE 式人人熟悉的后台节奏；挂 data-theme="mo-classic" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-classic/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="mo-classic"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-classic"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-classic · 经典 Bootstrap 后台风（浅色）
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-classic"> 即整站换肤。
   灵感来源：Tabler / AdminLTE 经典后台节奏（经典蓝 + 灰蓝白底，仅风格参考，非品牌素材）。 */

[data-theme="mo-classic"] {
  /* 底与纸：经典灰蓝白三层 */
  --color-base-100: #f5f7fa;
  --color-base-200: #ffffff;
  --color-base-300: #eef1f5;
  --color-base-content: #212a35;

  /* 主色：Bootstrap 经典深蓝 */
  --color-primary: #0b5ed7;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：经典灰蓝与青蓝 */
  --color-secondary: #6c7a89;
  --color-secondary-content: #ffffff;
  --color-accent: #0aa2c0;
  --color-accent-content: #ffffff;

  --color-neutral: #364152;
  --color-neutral-content: #ffffff;

  /* 语义色：标准可读色 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：经典 3–6px 小圆角、细边框 */
  --radius-selector: .25rem;
  --radius-field: .25rem;
  --radius-box: .375rem;
  --size-selector: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/mo-classic/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="mo-classic"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-classic/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
