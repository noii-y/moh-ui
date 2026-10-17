# 焦糖拿铁（caramellatte） · 灰墨 MoH_UI

> 社区咖啡店点单整页。奶油拿铁底色配深棕墨黑与焦糖强调色，圆角圆润、手作烘焙温暖感；挂 daisyUI 官方主题 data-theme="caramellatte" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

## 给 AI 的换肤指令

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css">
```

② 在 `<html>` 标签挂 `data-theme="caramellatte"` 即整站换肤：组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 整页案例参考（真实场景成品，页面全部由 daisyUI 组件拼装、零依赖）：https://noii-y.github.io/moh-ui/themes/caramellatte/demo.html

⑤ 审美提示：组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色；要改颜色就覆盖 [data-theme="caramellatte"] 里的 --color-* 变量。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/caramellatte/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库（全部 18 套整页案例）：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
