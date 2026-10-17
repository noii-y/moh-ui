# 单选框（radio） · 灰墨 MoH_UI

> 基础单选态、label 包裹点文字、fieldset 分组互斥、尺寸 xs~xl、语义状态色、禁用，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/radio/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：结算页付款方式选择区（单选框）。

【场景】一个结算页里的付款方式选择区：几种付款方式互斥、只能选一个，默认选中最常用的一种，选完点确认支付按钮。
【怎么排】
- 用 fieldset.fieldset（rounded-box border border-base-300 p-4 max-w-md）把付款方式包成一组，legend 写「付款方式」；
- 三个选项 name 全部相同（name="pay"）以实现互斥，最常用的「微信支付」加 checked 默认选中，单选框用 radio radio-primary；
- 每一项用 <label class="label cursor-pointer justify-start gap-3"> 包住 input 和文字，文字下面再跟一行小号说明（text-xs opacity-60），如「推荐 · 即时到账」；
- 选项纵向排列（flex flex-col gap-2），文字写真实付款方式名称（微信支付 / 支付宝 / 银行卡），不要放第三方品牌图标；
- 组尾放一个仅展示的主按钮「确认支付 ¥199.00」（btn btn-primary），不要为它写任何 JS。
【精确规格】
- 单选框尺寸默认即可，不要每一项都换尺寸。
- 文字写真实业务内容，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：radio、radio-primary、fieldset、fieldset-legend、label、cursor-pointer、justify-start、flex-col、gap-2、gap-3、w-full、max-w-md、text-xs、opacity-60。
- 纯 CSS 即可，不要加任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-3 w-full">
<fieldset class="fieldset rounded-box border border-base-300 p-4 max-w-md">
  <legend class="fieldset-legend">付款方式</legend>
  <div class="flex flex-col gap-2">
    <label class="label cursor-pointer justify-start gap-3">
      <input type="radio" name="pay" class="radio radio-primary" checked="checked" />
      <span class="flex flex-col gap-0">
        <span>微信支付</span>
        <span class="text-xs opacity-60">推荐 · 即时到账</span>
      </span>
    </label>
    <label class="label cursor-pointer justify-start gap-3">
      <input type="radio" name="pay" class="radio radio-primary" />
      <span class="flex flex-col gap-0">
        <span>支付宝</span>
        <span class="text-xs opacity-60">余额或花呗</span>
      </span>
    </label>
    <label class="label cursor-pointer justify-start gap-3">
      <input type="radio" name="pay" class="radio radio-primary" />
      <span class="flex flex-col gap-0">
        <span>银行卡</span>
        <span class="text-xs opacity-60">储蓄卡 / 信用卡</span>
      </span>
    </label>
  </div>
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">确认支付 ¥199.00</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/radio/demo.html
- 上游官方文档：https://daisyui.com/components/radio/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
