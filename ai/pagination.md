# 分页（pagination） · 灰墨 MoH_UI

> 基础页码、长列表省略号、五档尺寸、等宽上一页/下一页、radio 选中态，附商品列表分页成品。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/pagination/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：商品列表底部分页（分页 Pagination）。

【场景】电商商品列表底部的分页：一共 20 页，当前在第 5 页，需要一排「上一页 / 1 … 4 5 6 … 20 / 下一页」让用户翻页。
【怎么排】
- daisyUI 5 没有 pagination 类，分页就是 <div class="join"> 容器里一排 <button class="join-item btn">；
- 当前页按钮加 btn-active（主色实心），写 5；
- 第一页 1、最后一页 20 始终露出，中间看不见的页用 <button class="join-item btn btn-disabled" aria-label="更多页">…</button> 占位，不可点；
- 两端是文字按钮「上一页」「下一页」；
- 手机窄屏一排放不下时，给 join 加 flex-wrap justify-center 自动换行，整页不能出现横向滚动条。
【精确规格】
- 页码写数字，按钮文案写真实动作（上一页 / 下一页），禁止出现 Primary / 成功 这类颜色名当文案。
- 当前页加 aria-label="第 5 页，当前页"；省略号按钮加 aria-label="更多页"，别让读屏念「点点点」。
- 用到的类全部真实存在：join、join-item、btn、btn-active、btn-disabled、btn-outline、btn-square、btn-xs、btn-sm、btn-lg、btn-xl、flex-wrap、justify-center、grid、grid-cols-2、w-full、max-w-sm。
- 纯展示组件，翻页跳转由你的路由或数据层处理，这里不写业务 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="join flex-wrap justify-center">
  <button class="join-item btn">上一页</button>
  <button class="join-item btn">1</button>
  <button class="join-item btn btn-disabled" aria-label="更多页">…</button>
  <button class="join-item btn">4</button>
  <button class="join-item btn btn-active" aria-label="第 5 页，当前页">5</button>
  <button class="join-item btn">6</button>
  <button class="join-item btn btn-disabled" aria-label="更多页">…</button>
  <button class="join-item btn">20</button>
  <button class="join-item btn">下一页</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/pagination/demo.html
- 上游官方文档：https://daisyui.com/components/pagination/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
