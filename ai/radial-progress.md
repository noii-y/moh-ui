# 环形进度（radial-progress） · 灰墨 MoH_UI

> --value/--size/--thickness 三变量机制、多完成度对照、语义色环、尺寸与环厚变体、实心填充环，附数据看板统计卡实战，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/radial-progress/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：数据看板本月目标完成环形进度。

【场景】数据看板上的一张统计卡，用一个大圆环表示本月目标完成度，环中央显示百分比，下方一句差距说明和操作按钮。
【怎么排】
- 外层卡片：<div class="card bg-base-100 border border-base-300 max-w-sm mx-auto">，body 居中（items-center text-center）。
- 环是本体：<div class="radial-progress" style="--value:75;--size:9rem;--thickness:8px;" role="progressbar" aria-valuenow="75">75%</div>。
- 三个 CSS 变量必须写明：--value 是进度值（0–100）、--size 是圆环直径（默认 5rem）、--thickness 是环厚。
- 环下面一行小字说明（如「已完成 75%，还差 3.75 万元达标」），再一个 btn btn-primary btn-sm 的「查看明细」。
【精确规格】
- 用 div 不用 progress 标签：环内要放文字，必须带 role="progressbar" 和 aria-valuenow。
- 环的颜色 = 文字颜色，默认跟随主题主色；要语义色就加 text-success / text-warning / text-error，禁止写死色值。
- 文案写真实中文业务数据，不出现颜色名。
- 整卡不写死像素宽，max-w-sm 限宽，窄屏居中不溢出。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="card bg-base-100 border border-base-300 max-w-sm mx-auto">
  <div class="card-body items-center text-center">
    <h3 class="card-title">本月销售目标</h3>
    <div class="radial-progress my-4" style="--value:75;--size:9rem;--thickness:8px;" role="progressbar" aria-valuenow="75">75%</div>
    <p class="text-sm opacity-70">已完成 75%，还差 3.75 万元达标</p>
    <button class="btn btn-primary btn-sm">查看明细</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/radial-progress/demo.html
- 上游官方文档：https://daisyui.com/components/radial-progress/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
