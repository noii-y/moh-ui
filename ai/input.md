# 文本输入框（input） · 灰墨 MoH_UI

> 覆盖单行各 type、内嵌图标/快捷键/徽标、幽灵、fieldset 字段标签、语义状态色、五档尺寸、禁用、datalist 输入建议、原生 validator 校验，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/input/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：登录表单输入区（文本输入框）。

【场景】登录页里的账号密码输入区：两个字段竖向排开，下方一个主按钮登录。
【怎么排】
- 每个字段用 fieldset + fieldset-legend 组织，legend 写中文标签（邮箱、密码），输入框加 w-full 占满整行宽度；
- 邮箱用 type="email"、密码用 type="password"，placeholder 分别写「请输入邮箱」「请输入密码」；
- 两个字段下方一行放主提交按钮「登录」（btn btn-primary），整组从上到下竖向堆叠、左对齐；
- 标签在上、输入框在下，同组间距一致，任何输入框在手机窄屏上都不能溢出或被裁切。
【精确规格】
- 字段容器：<fieldset class="fieldset w-full">，输入框：<input type="…" class="input w-full" />；不要用 ml-auto 把按钮推到右边（手机端会被挤出屏幕）。
- 邮箱加 autocomplete="email"，密码加 autocomplete="current-password"。
- 标签与 placeholder 写真实中文业务文案，禁止出现 Primary / Success 这类颜色名。
- 颜色全部走 daisyUI 主题变量，不要写死颜色，切换主题时自动跟随。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<fieldset class="fieldset w-full">
  <legend class="fieldset-legend">邮箱</legend>
  <input type="email" class="input w-full" placeholder="请输入邮箱" autocomplete="email" />
</fieldset>
<fieldset class="fieldset w-full">
  <legend class="fieldset-legend">密码</legend>
  <input type="password" class="input w-full" placeholder="请输入密码" autocomplete="current-password" />
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">登录</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/input/demo.html
- 上游官方文档：https://daisyui.com/components/input/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
