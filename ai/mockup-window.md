# 窗口样机（mockup-window） · 灰墨 MoH_UI

> mockup-window 外框 + border/bg 变体，顶栏三圆点标题用零依赖 div 自拼，内容区可放文档/登录框/代码预览，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/mockup-window/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：组件库快速开始文档窗口样机。

【场景】在产品文档或宣传页里，画一个桌面窗口轮廓，把一段接入文档（或登录框、代码预览）放进窗口中展示。
【怎么排】
- 外层是 <div class="mockup-window border border-base-300 bg-base-100">，用 max-w-* 限宽（文档窗 max-w-2xl，登录窗 max-w-md）。
- 窗口的灰色圆点由 mockup-window 自动绘制（CSS 伪元素），不要重复加圆点。
- 标题行是内容区第一行：border-t border-base-300 px-4 py-2 text-sm opacity-60，如「快速开始 · 灰墨组件库」；正文区再 border-t border-base-300 p-6：标题 h3 + 段落（text-sm leading-relaxed opacity-80）+ 代码引用块（rounded-box bg-base-200 p-3）。
【精确规格】
- daisyUI 没有 mockup-window-toolbar 类，也不要自己加彩色圆点行，否则会和自带圆点重复。
- 文案写真实中文（如「快速开始 · 灰墨组件库」「欢迎回来」），不出现颜色名。
- 整窗不设固定像素宽高，内容自然撑开；窄屏不溢出。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="mockup-window border border-base-300 max-w-2xl mx-auto bg-base-100">
  <div class="border-t border-base-300 px-4 py-2 text-sm opacity-60">快速开始 · 灰墨组件库</div>
  <div class="border-t border-base-300 p-6">
    <h3 class="font-semibold">三步接入你的项目</h3>
    <p class="mt-2 text-sm leading-relaxed opacity-80">灰墨是零依赖的中文组件库：复制两个 CSS 文件，粘贴一个组件片段，就能在任意页面里使用。切换主题时，整站颜色自动跟随。</p>
    <div class="mt-4 rounded-box bg-base-200 p-3 text-sm">
      <code><link rel="stylesheet" href="daisyui.css" /></code>
    </div>
  </div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/mockup-window/demo.html
- 上游官方文档：https://daisyui.com/components/mockup-window/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
