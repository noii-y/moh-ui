# 开关（toggle） · 灰墨 MoH_UI

> 基础开关态、设置行排版（label justify-between）、尺寸 xs~xl、语义状态色、禁用、带图标开关，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/toggle/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：设置页通知开关列表（开关）。

【场景】一个设置页里的通知开关列表：一行一个开关，左侧是名称和说明，右侧是拨杆，默认值符合常识，最后点保存设置。
【怎么排】
- 用 fieldset.fieldset（rounded-box border border-base-300 p-4 max-w-md）把开关包成一组，legend 写「通知设置」；
- 每一行用 <label class="label cursor-pointer justify-between gap-3"> 包住：左侧是名称 + 一行小号说明（text-xs opacity-60），右侧是 <input type="checkbox" class="toggle">；
- 「推送通知」「邮件提醒」默认开（checked，主色用 toggle-primary 标出主项），「营销短信」默认关；
- 各行纵向排列（flex flex-col gap-2）；
- 组尾放一个仅展示的主按钮「保存设置」（btn btn-primary），不要为它写任何 JS。
【精确规格】
- 开关尺寸默认即可，不要每一行都换尺寸。
- 文字写真实业务内容，禁止出现 Primary / 成功 / 主要 这类颜色名当文案；营销类默认关闭，不要默认勾选。
- 用到的类全部真实存在：toggle、toggle-primary、fieldset、fieldset-legend、label、cursor-pointer、justify-between、justify-start、flex-col、gap-2、gap-3、w-full、max-w-md、text-xs、opacity-60。
- 纯 CSS 即可，不要加任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-3 w-full">
<fieldset class="fieldset rounded-box border border-base-300 p-4 max-w-md">
  <legend class="fieldset-legend">通知设置</legend>
  <div class="flex flex-col gap-2">
    <label class="label cursor-pointer justify-between gap-3">
      <span class="flex flex-col gap-0">
        <span>推送通知</span>
        <span class="text-xs opacity-60">订单与物流实时提醒</span>
      </span>
      <input type="checkbox" checked="checked" class="toggle toggle-primary" />
    </label>
    <label class="label cursor-pointer justify-between gap-3">
      <span class="flex flex-col gap-0">
        <span>邮件提醒</span>
        <span class="text-xs opacity-60">每周账单与服务通知</span>
      </span>
      <input type="checkbox" checked="checked" class="toggle" />
    </label>
    <label class="label cursor-pointer justify-between gap-3">
      <span class="flex flex-col gap-0">
        <span>营销短信</span>
        <span class="text-xs opacity-60">活动与优惠推送，默认关闭</span>
      </span>
      <input type="checkbox" class="toggle" />
    </label>
  </div>
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">保存设置</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/toggle/demo.html
- 上游官方文档：https://daisyui.com/components/toggle/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
