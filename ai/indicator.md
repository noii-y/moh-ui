# 角标（indicator） · 灰墨 MoH_UI

> 九种贴附位置/数字角标/纯红点/贴输入框与卡片等变体，导航通知与待办提示场景，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/indicator/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：导航栏通知与购物车角标。

【场景】App 顶部导航栏右侧的两个角标：铃铛通知按钮上挂未读数 3，购物车按钮上挂商品数 12。
【怎么排】每个角标是一对「父子」结构：
- 外层 <div class="indicator">；
- 先写 <span class="indicator-item badge badge-secondary badge-sm">3</span>（要贴上去的小徽章）；
- 再写被贴的本体：铃铛用 btn btn-soft btn-circle 圆形图标按钮，购物车用普通按钮带购物车 SVG。
【精确规格】
- 角标默认贴在右上角；铃铛按钮必须加 aria-label="通知"。
- 徽章数字超过 99 写 99+，没有未读数就不渲染角标，不要留 0。
- 角标小而醒目：数字用 badge-sm，红点用 badge-xs 空徽章。
- 文案写真实业务词（通知/购物车），不要写颜色名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-wrap items-center gap-4">
  <div class="indicator">
    <span class="indicator-item badge badge-secondary badge-sm">3</span>
    <button class="btn btn-soft btn-circle" aria-label="通知">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3.75c0 1.86.28 3.68.82 5.41a1.125 1.125 0 0 1-1.06 1.49H5.24a1.125 1.125 0 0 1-1.06-1.49A23.2 23.2 0 0 0 5 11.25V7.5a7 7 0 1 1 14 0ZM9.75 19.5a2.25 2.25 0 0 0 4.5 0" /></svg>
    </button>
  </div>
  <div class="indicator">
    <span class="indicator-item badge badge-primary badge-sm">12</span>
    <button class="btn">
      购物车
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.5-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
    </button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/indicator/demo.html
- 上游官方文档：https://daisyui.com/components/indicator/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
