# 验证码输入（otp） · 灰墨 MoH_UI

> 4/6 位、otp-joined 连接样式、尺寸 xs~xl、语义状态色、禁用，零依赖纯 CSS（跳格/倒计时为业务 JS 增强，不在组件内）。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/otp/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：登录页短信验证码输入（OTP）。

【场景】登录页里的短信验证码输入区：6 位数字连成一排，下面一行写明发到哪个手机号与重发倒计时，最后放一个「确认」主按钮。
【怎么排】
- 用 fieldset.fieldset（w-full max-w-md）包住验证码，legend（fieldset-legend）写「短信验证码」；
- 外层 <label class="otp otp-joined"> 内先放 6 个空 <span></span>，再放一个 input（autocomplete="one-time-code" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" required）；span 数量必须等于 6；
- 验证码下方一行 fieldset-label 写「验证码已发送至 138****0000 · 重新发送（60s）」；
- 最下方 flex flex-wrap gap-2 放主按钮「确认」（btn btn-primary），整组竖向堆叠、左对齐；倒计时、跳格自动聚焦属于业务增强，本场景不要写任何 JS。
【精确规格】
- 三个 input 属性缺一不可：inputmode="numeric"（弹数字键盘）、autocomplete="one-time-code"（支持 iOS 自动填）、pattern="[0-9]{6}"（限数字）。
- 用到的类全部真实存在：otp、otp-joined、fieldset、fieldset-legend、fieldset-label、flex-wrap、gap-2、btn-primary。
- 文案写真实业务动作（确认、短信验证码、重新发送），禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 6 位在 390px 窄屏上用 otp-joined 紧凑排列，不要用超大尺寸（otp-lg/xl）导致横向溢出；颜色全部走主题变量，不写死颜色。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<fieldset class="fieldset w-full max-w-md">
  <legend class="fieldset-legend">短信验证码</legend>
  <label class="otp otp-joined">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" required />
  </label>
  <p class="fieldset-label">验证码已发送至 138****0000 · 重新发送（60s）</p>
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">确认</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/otp/demo.html
- 上游官方文档：https://daisyui.com/components/otp/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
