# 东京入夜（tokyo-night） · 灰墨 MoH_UI

> 股票行情交易终端整页（指数行情条 + 自选股涨跌表 + 五档买卖盘 + 手绘 SVG 日 K 线）。Tokyo Night 深蓝紫霓虹色板，挂 data-theme="tokyo-night" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖；涨跌幅按 A 股习惯红涨绿跌。

来源：Tokyo Night (folke/tokyonight.nvim)（Apache-2.0） · [上游色板](https://github.com/folke/tokyonight.nvim/blob/main/lua/tokyonight/colors/storm.lua)

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/tokyo-night/tokens.css">
```

② 在 `<html>` 标签挂 `data-theme="tokyo-night"` 即整站换肤：组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="tokyo-night"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 tokyo-night · 东京入夜 —— 深蓝紫城市霓虹数据终端主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 folke/tokyonight.nvim 官方 Night 色板（Apache-2.0，© Folke Lemaitre）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="tokyo-night"> 即整站换肤。 */

[data-theme="tokyo-night"] {
  color-scheme: dark;

  /* 底与纸：Night 深蓝紫三层，bg #1a1b26 / bg_highlight #292e42 / bg_dark #16161e */
  --color-base-100: #1a1b26;
  --color-base-200: #292e42;
  --color-base-300: #16161e;
  --color-base-content: #c0caf5;

  /* 主色：都市霓虹蓝（blue #7aa2f7），只留给主操作与选中态 */
  --color-primary: #7aa2f7;
  --color-primary-content: #16161e;

  /* 次色 / 强调色：品紫（magenta #bb9af7）与夜青（cyan #7dcfff） */
  --color-secondary: #bb9af7;
  --color-secondary-content: #16161e;
  --color-accent: #7dcfff;
  --color-accent-content: #16161e;

  /* 中性面：terminal_black #414868，用于侧栏与分隔 */
  --color-neutral: #414868;
  --color-neutral-content: #c0caf5;

  /* 语义色：官方数据色直接映射 */
  --color-info: #2ac3de;
  --color-info-content: #16161e;
  --color-success: #9ece6a;
  --color-success-content: #16161e;
  --color-warning: #e0af68;
  --color-warning-content: #16161e;
  --color-error: #f7768e;
  --color-error-content: #16161e;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，交易终端取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/tokyo-night/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="tokyo-night"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/tokyo-night/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
