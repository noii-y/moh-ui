# 浅滩紫（Catppuccin Mocha）（catppuccin） · 灰墨 MoH_UI

> 桌面端音乐播放器。软糯马卡龙深色 + 淡紫主色，左侧歌单导航、中部专辑封面与播放队列、底部播放条；挂 data-theme="catppuccin" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Catppuccin（MIT） · [上游色板](https://catppuccin.com/palette/)

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/catppuccin/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="catppuccin"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="catppuccin"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 catppuccin · 浅滩紫（Catppuccin Mocha 移植）—— 软糯马卡龙深色音乐主题
   色板出处：Catppuccin Mocha（MIT，© 2021 Catppuccin）https://catppuccin.com/palette/
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="catppuccin"> 即整站换肤。 */

[data-theme="catppuccin"] {
  color-scheme: dark;

  /* 底与纸：base / mantle / crust 三层，低反差、柔和 */
  --color-base-100: #1e1e2e;
  --color-base-200: #181825;
  --color-base-300: #11111b;
  --color-base-content: #cdd6f4;

  /* 主色：mauve 淡紫，只留给主播放按钮与选中态 */
  --color-primary: #cba6f7;
  --color-primary-content: #181825;

  /* 次色：blue / green，用于次级高亮 */
  --color-secondary: #89b4fa;
  --color-secondary-content: #11111b;
  --color-accent: #a6e3a1;
  --color-accent-content: #11111b;

  --color-neutral: #313244;
  --color-neutral-content: #cdd6f4;

  /* 语义色：sapphire / green / yellow / red，深底配深色字 */
  --color-info: #74c7ec;
  --color-info-content: #11111b;
  --color-success: #a6e3a1;
  --color-success-content: #11111b;
  --color-warning: #f9e2af;
  --color-warning-content: #453a00;
  --color-error: #f38ba8;
  --color-error-content: #450a18;

  /* 圆角 / 尺寸 / 边框：中等偏圆润，cozy 取向 */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.75rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/catppuccin/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="catppuccin"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/catppuccin/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
