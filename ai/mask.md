# 形状蒙版（mask） · 灰墨 MoH_UI

> 把图片或色块裁成 circle/squircle/heart/hexagon/diamond/star/triangle 等全部 14 种形状，团队头像与勋章点缀场景，纯 CSS 零依赖。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/mask/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：团队页成员头像排（形状蒙版）。

【场景】团队介绍页上一排成员头像，用裁切形状展示，比清一色正圆头像多一点设计感。
【怎么排】
- 一排头像用 flex flex-wrap items-center justify-center gap-4；
- 每张头像是一个固定尺寸的块（h-20 w-20），底色用内联 linear-gradient 渐变；外层套 mask + 形状类（mask-circle / mask-squircle / mask-hexagon）把方块裁成指定形状；
- 头像中央放一个白色人形简影 SVG 居中（flex items-center justify-center）；
- 头像下方一行 text-sm 的成员姓名。
【精确规格】
- 结构：<div class="mask mask-circle h-20 w-20 flex items-center justify-center" style="background:linear-gradient(135deg,#67e8f9,#3b82f6)">…人形 SVG…</div>；mask 类负责裁切，不要再写 border-radius。
- 头像先用内联渐变 + SVG 占位即可；换成真实照片时改成 <img class="mask mask-circle h-20 w-20" src="照片地址" alt="姓名">，形状类保留，img 必须写 alt。
- 一排里形状不要乱用：正圆形最通用，squircle 适合产品团队，心形/星形这类只在活动页少量点缀。
- 颜色全部用一组克制的浅→深渐变，不要高饱和撞色；头像文字用中文真实姓名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-wrap items-center justify-center gap-4">
  <div class="flex flex-col items-center gap-2">
    <div class="mask mask-circle h-20 w-20 flex items-center justify-center" style="background:linear-gradient(135deg,#67e8f9,#3b82f6)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0h-15Z"/></svg>
    </div>
    <span class="text-sm">张伟</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <div class="mask mask-squircle h-20 w-20 flex items-center justify-center" style="background:linear-gradient(135deg,#fde68a,#f59e0b)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0h-15Z"/></svg>
    </div>
    <span class="text-sm">李娜</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <div class="mask mask-hexagon h-20 w-20 flex items-center justify-center" style="background:linear-gradient(135deg,#86efac,#22c55e)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0h-15Z"/></svg>
    </div>
    <span class="text-sm">王强</span>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/mask/demo.html
- 上游官方文档：https://daisyui.com/components/mask/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
