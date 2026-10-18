# 复选框（checkbox） · 灰墨 MoH_UI

> 基础勾选态、label 包裹点文字、fieldset 分组多选、半选 indeterminate、尺寸 xs~xl、语义状态色、禁用，零依赖纯 CSS（半选仅一行 JS）。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/checkbox/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：注册协议与偏好勾选区（复选框）。

【场景】一个注册 / 开通流程里的协议与偏好勾选区：先让用户主动勾选同意协议，再顺手勾选几个可选偏好，最后点注册按钮。
【怎么排】
- 用 fieldset.fieldset（rounded-box border border-base-300 p-4 max-w-md）把勾选项包成一组，legend 写「注册确认」；
- 提交前必须勾选的主项「我已阅读并同意《用户协议》和《隐私政策》」用 checkbox checkbox-primary，但不要默认勾选，让用户主动同意；
- 可选偏好（记住我、订阅产品更新和优惠邮件）用默认 checkbox，想默认选中哪项就加 checked；
- 每一项用 <label class="label cursor-pointer justify-start gap-3"> 包住 input 和文字，点文字也能勾；各项纵向排列（flex flex-col gap-2）；
- 组尾放一个仅展示的主按钮「注册账号」（btn btn-primary），不要为它写任何 JS。
【精确规格】
- 勾选框尺寸默认即可，不要每一项都换尺寸。
- 文字写真实业务内容，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：checkbox、checkbox-primary、fieldset、fieldset-legend、label、cursor-pointer、justify-start、flex-col、gap-2、gap-3、w-full、max-w-md。
- 除「半选全选」场景外不要加任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-3 w-full">
<fieldset class="fieldset rounded-box border border-base-300 p-4 max-w-md">
  <legend class="fieldset-legend">注册确认</legend>
  <div class="flex flex-col gap-2">
    <label class="label cursor-pointer justify-start gap-3">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span>我已阅读并同意《用户协议》和《隐私政策》</span>
    </label>
    <label class="label cursor-pointer justify-start gap-3">
      <input type="checkbox" class="checkbox" />
      <span>记住我，下次自动登录</span>
    </label>
    <label class="label cursor-pointer justify-start gap-3">
      <input type="checkbox" checked="checked" class="checkbox" />
      <span>订阅产品更新和优惠邮件</span>
    </label>
  </div>
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">注册账号</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/checkbox/demo.html
- 上游官方文档：https://daisyui.com/components/checkbox/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
