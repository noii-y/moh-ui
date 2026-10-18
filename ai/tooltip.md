# 悬浮提示（tooltip） · 灰墨 MoH_UI

> 工具栏图标按钮提示、四个弹出方向、语义色、带图标内容（tooltip-content），零依赖纯 CSS。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/tooltip/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：编辑器工具栏图标按钮悬浮提示（悬浮提示）。

【场景】一个编辑器 / 工具栏上的一排纯图标按钮：保存、加粗、删除，鼠标停在按钮上时弹出一句中文说明（含快捷键）。
【怎么排】
- 每个按钮外包一层 <div class="tooltip" data-tip="保存 (Ctrl+S)">，tooltip 外层包住按钮；
- 按钮是 <button class="btn btn-square" aria-label="保存">，里面放一个 h-5 w-5 的单色 SVG 图标（stroke="currentColor"），不要外链图片；
- 相邻按钮一行排列；并排间距留 16px 以上（提示气泡通常比按钮宽，多个气泡同时露出时不能互相压住）。
- 删除按钮用 btn-ghost 弱化外观，但 aria-label 仍写「删除」。
【精确规格】
- 真实交互：鼠标悬停在按钮上时气泡出现，键盘 Tab 把焦点移到按钮上（:focus-visible）同样出现，移开 / 焦点移走即消失，零 JavaScript；静态预览（截图 / 文档）时给 tooltip 外层临时加 tooltip-open 强制显示，并在容器四周留出内边距，避免气泡顶出边界。
- 焦点行为：tooltip 不是弹层——不拦截焦点、不用 Tab 圈定、Esc 无关；不要给它加 role="tooltip" 容器陷阱，也不要为此写任何键盘 JS。
- 可访问性：data-tip 文字是 CSS 伪元素渲染、读屏不念，所以纯图标按钮必须自带 aria-label；aria-label 只说动作（如「保存」），快捷键说明留给 data-tip 气泡（如「保存 (Ctrl+S)」），两者不要求逐字一致；需要读屏读到气泡全文时，改用真实元素 div.tooltip-content 并加 id，触发元素挂 aria-describedby 指向它，此时两边文案才保持一致。
- 用到的类全部真实存在：tooltip、tooltip-open、tooltip-bottom、tooltip-left、tooltip-right、tooltip-primary、tooltip-error、tooltip-content、btn、btn-square、btn-ghost、btn-error；提示文字只写在 data-tip 属性里（如 data-tip="保存 (Ctrl+S)"），不要额外写元素。
- 提示文案写真实动作与快捷键（保存 (Ctrl+S) / 删除），禁止颜色名；气泡颜色全部走 daisyUI 主题变量，不要写死。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="tooltip tooltip-open" data-tip="保存 (Ctrl+S)">
  <button class="btn btn-square" aria-label="保存">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3h10l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 3v5h7V3M8 21v-7h8v7"/></svg>
  </button>
</div>
<div class="tooltip tooltip-open" data-tip="加粗 (Ctrl+B)">
  <button class="btn btn-square" aria-label="加粗">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6V4Zm0 8h9a4 4 0 0 1 0 8H6v-8Z"/></svg>
  </button>
</div>
<div class="tooltip tooltip-open" data-tip="删除">
  <button class="btn btn-square btn-ghost" aria-label="删除">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>
  </button>
</div>
```

【灰墨审美硬边界（必须遵守）】
- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。
- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。
- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。
- 凡会弹出覆盖层的组件（对话框、抽屉、下拉菜单、大菜单）：优先用原生 <dialog> + showModal() 或 popover API（popovertarget + [popover]），不要自己写焦点陷阱；做到打开后焦点进入弹层、Tab 只在弹层内循环跑不到背景、Esc 可关（菜单点外部也可关）、关闭后焦点回到触发按钮；触发按钮加 aria-expanded / aria-controls，弹层标题用 aria-labelledby 关联。纯 hover 提示的 tooltip 不拦截焦点，不需要这套。
- 正文对比度 ≥ 4.5:1；主色全库唯一，状态色语义化（成功绿/警告橙/危险红）；不要大面积高饱和撞色、大面积渐变、多层阴影，不要用 emoji 当图标（用单色 SVG）。
- 动效不超过 200ms，不做装饰性的闪烁、缩放、弹跳入场动画；组件自带的功能性状态动画除外（loading 旋转、status 状态点 ping/bounce、toggle/swap 切换、collapse 展开等），保留官方默认即可，不要再额外叠加装饰动画。
- 颜色全部走 CSS 变量（daisyUI 主题变量），不要写死颜色。

【交付要求】
- 给我能直接放进项目的完整 HTML（class 版、不依赖框架；外层标签可按我的项目结构调整）。
- 如果我的项目还没引入 daisyUI 5，请先告诉我需要在 <head> 里加一行 daisyui.css 的引用。
- 做完后在桌面 1280px 和手机 375px 两个宽度下自查：控件不溢出容器、不被裁切、不换行错位、文字不贴边、焦点可见。

---

## 底座引入

本组件基于 daisyUI 5（纯 CSS、零 JS、零构建）。若目标项目还没有引入，在 `<head>` 加这两行即可：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/assets/utilities-patch.css">
```

## 更多

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/tooltip/demo.html
- 上游官方文档：https://daisyui.com/components/tooltip/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
