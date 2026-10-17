# 加载动画（loading） · 灰墨 MoH_UI

> 六种加载形态（spinner/dots/ring/ball/bars/infinity）、xs~xl 五档尺寸，支持按钮内嵌与卡片整块加载，零依赖纯 CSS。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/loading/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：提交按钮与列表加载区（加载动画）。

【场景】一个需要等待后端响应的页面：表单提交后按钮变加载态，同时列表主区展示整块加载提示。
【怎么排】
- 提交按钮：<button class="btn btn-primary" disabled><span class="loading loading-spinner loading-xs"></span>提交中…</button>，必须 disabled 防止重复提交。
- 整块加载区居中：一个大圆环 loading loading-ring loading-lg，旁边一行小字说明（如「正在加载商品列表…」）。
- 两处在同一个 flex flex-col items-center gap-4 容器里上下排列。
【精确规格】
- loading 基类 + 形态类（loading-spinner / loading-dots / loading-ring / loading-ball / loading-bars / loading-infinity）+ 尺寸类（loading-xs ~ loading-xl）。
- 按钮内小圈用 loading-xs 或 loading-sm；整块区域用 loading-lg。
- 文案写真实进行中动作（提交中…/正在加载商品列表…），禁止颜色名。
- 纯装饰转圈加 aria-hidden="true"；承担加载语义的区域外层写 role="status"。
- 颜色跟随主题文字色，不要写死色值。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col items-center gap-4">
  <button class="btn btn-primary" disabled><span class="loading loading-spinner loading-xs"></span>提交中…</button>
  <div class="flex items-center gap-2">
    <span class="loading loading-ring loading-lg"></span>
    <span class="text-sm opacity-70">正在加载商品列表…</span>
  </div>
</div>
```

【灰墨审美硬边界（必须遵守）】
- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。
- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。
- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/loading/demo.html
- 上游官方文档：https://daisyui.com/components/loading/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
