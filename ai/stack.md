# 叠放（stack） · 灰墨 MoH_UI

> stack 容器 + stack-top/start/end 方向修饰，商品图册错位叠放、通知堆阴影递减、主题色块代替外链图，附 hover 展开的诚实实现说明，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/stack/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：商品图册叠放堆叠。

【场景】商品详情页的图册或消息中心的通知堆，把几张卡片叠成一摞，第一张卡在最上层。
【怎么排】
- 外层 <div class="stack w-64 mx-auto">：子元素全部重叠在同一格，第一个子元素在最上层（后面的卡片略微透明压在下层）。
- 每张卡是 <div class="card bg-base-100 border border-base-300 shadow-md">，body p-4：商品名（card-title text-base）+ 一行说明（text-sm opacity-70）+ 价格（font-semibold）。
- 静态演示用最小内联 transform 把后两张错开（如 style="transform:translate(1.5rem,1.2rem)"），让三张卡的边缘都可见；居中在上层的那张不要偏移。
【精确规格】
- 真实 hover 展开：本库补丁没有 hover: 前缀类，请用内联 hover CSS 或你项目里的 Tailwind hover 类（如 hover:-translate-x-4）实现，不要为展开写 JS。
- 叠摞整体用 w-* / max-w-full 限宽，窄屏不溢出。
- 方向修饰：stack-top / stack-start / stack-end 分别向上、向左、向右错开。
- 文案写真实中文（商品名、价格、通知内容），不出现颜色名；代替图片的色块用 bg-primary 等主题色，禁止外链图。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="stack w-64 mx-auto">
  <div class="card bg-base-100 border border-base-300 shadow-md">
    <div class="card-body p-4">
      <h3 class="card-title text-base">无线鼠标</h3>
      <p class="text-sm opacity-70">静音双模 · 可充电</p>
      <p class="font-semibold">¥129</p>
    </div>
  </div>
  <div class="card bg-base-100 border border-base-300 shadow-md" style="transform:translate(1.5rem,1.2rem);">
    <div class="card-body p-4">
      <h3 class="card-title text-base">帆布双肩包</h3>
      <p class="text-sm opacity-70">通勤电脑仓 · 15.6 英寸</p>
      <p class="font-semibold">¥199</p>
    </div>
  </div>
  <div class="card bg-base-100 border border-base-300 shadow-md" style="transform:translate(-1.2rem,-0.6rem);">
    <div class="card-body p-4">
      <h3 class="card-title text-base">保温杯</h3>
      <p class="text-sm opacity-70">316 不锈钢 · 500ml</p>
      <p class="font-semibold">¥89</p>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/stack/demo.html
- 上游官方文档：https://daisyui.com/components/stack/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
