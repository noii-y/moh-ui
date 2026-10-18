# 滑块（range） · 灰墨 MoH_UI

> 基础滑杆、带刻度档位、尺寸 xs~xl、语义状态色、竖向 range-vertical，零依赖纯 CSS（实时读数仅一行 JS）。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/range/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：筛选栏预算上限滑块（滑块）。

【场景】一个筛选栏里的预算上限滑块：顶部写字段名和当前选中金额，拖动滑杆实时更新金额，滑杆下方标出 ¥0 到 ¥5000 的范围，最后点应用筛选按钮。
【怎么排】
- 一行 <div class="flex justify-between mb-2">：左侧「预算上限」（text-sm），右侧实时金额（text-sm font-semibold，初始 ¥3000）；
- 下面是 <input type="range" min="0" max="5000" step="100" value="3000" class="range range-primary w-full" />，占满容器（max-w-md）；
- 滑杆下方 <div class="flex justify-between mt-1 text-xs opacity-60"> 放两端标签「¥0」「¥5000」；
- 用一行极小 JS 监听 input 的 input 事件，把当前值拼成「¥3000」更新到右侧金额；除此之外不写任何交互；
- 组尾放一个仅展示的主按钮「应用筛选」（btn btn-primary）。
【精确规格】
- 滑块尺寸默认即可，主色用 range-primary 标出当前值填充。
- 文字写真实业务内容，禁止出现 Primary / 成功 / 主要 这类颜色名当文案；金额用等宽数字观感，区间是 0–5000、步长 100。
- 用到的类全部真实存在：range、range-primary、range-vertical、w-full、max-w-md、justify-between、mb-2、mt-1、text-sm、text-xs、font-semibold、opacity-60、h-40。
- 除一行回显当前值的极小 JS 外，不要加其它交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-3 w-full max-w-md">
  <div>
    <div class="flex justify-between mb-2">
      <span class="text-sm">预算上限</span>
      <span class="text-sm font-semibold" id="range-value">¥3000</span>
    </div>
    <input type="range" min="0" max="5000" step="100" value="3000" class="range range-primary w-full" id="range-input" />
    <div class="flex justify-between mt-1 text-xs opacity-60"><span>¥0</span><span>¥5000</span></div>
  </div>
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-primary">应用筛选</button>
  </div>
</div>
<script>
  (function () {
    var input = document.getElementById('range-input');
    var out = document.getElementById('range-value');
    input.addEventListener('input', function () { out.textContent = '¥' + input.value; });
  })();
</script>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/range/demo.html
- 上游官方文档：https://daisyui.com/components/range/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
