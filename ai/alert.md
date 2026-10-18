# 提示条（alert） · 灰墨 MoH_UI

> 四种语义色提示条（info/success/warning/error）、带操作按钮、柔和轻提示、可关闭等形态，零依赖纯 CSS。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/alert/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：表单保存后的成功提示条（提示条）。

【场景】一张编辑资料表单保存成功后，页面顶部出现的一条横向提示条。
【怎么排】成功结果用 alert-success：左侧一个圆形勾选图标，中间一句中文说明结果，右侧放一个次要小按钮「查看」；整条提示条横向排列，窄屏自动折行，任何内容不被挤出屏幕。
【精确规格】
- 结构：<div role="alert" class="alert alert-success">，内部依次放 SVG 图标、<span>说明文字、<div>包裹的按钮组。
- 图标用官方 heroicons 同款单色 SVG：stroke="currentColor"、fill="none"、class="h-6 w-6 shrink-0 stroke-current"，路径为勾选圆环（M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z）。
- 文案写真实业务结果（如「修改已保存，可在『账号资料』里继续编辑」），按钮写真实动作（查看），禁止出现 Success / 绿色 这类颜色名。
- 按钮用 btn btn-sm；同一提示条按钮最多两个，主操作用 btn-primary，次要操作用默认样式。
- 真实交互：成功提示停留 3~5 秒后自动消失，错误类保留到用户手动关闭；本页为静态展示全部形态。
- 颜色全部走 daisyUI 主题变量，不要写死。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>修改已保存，可在「账号资料」里继续编辑。</span>
  <div>
    <button class="btn btn-sm">查看</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/alert/demo.html
- 上游官方文档：https://daisyui.com/components/alert/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
