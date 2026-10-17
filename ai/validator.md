# 表单校验（validator） · 灰墨 MoH_UI

> input/checkbox 加 validator 配原生 required/pattern/minlength，validator-hint 写规则，覆盖修改密码、邮箱、用户名、手机号、必勾协议、内嵌图标等场景，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/validator/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：账号设置里的修改密码区（表单校验）。

【场景】账号设置里的修改密码区：两个密码字段竖向排列，下方一个确认修改按钮。
【怎么排】
- 每个字段用 <fieldset class="fieldset w-full"> 包起，<legend class="fieldset-legend"> 写中文标签（设置新密码 / 确认新密码）；
- 输入框用 <input type="password" class="input validator w-full">，规则写原生属性：required、minlength="8"、pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"，加 autocomplete="new-password"；
- 每个输入框下方紧跟 <p class="validator-hint"> 用中文写清规则（至少 8 位、含数字和大小写字母）；
- 两个字段下方放主按钮「确认修改」（btn btn-primary），整组 flex flex-col gap-3、最大宽度 max-w-md、左对齐；
- 不要写任何 JS 校验逻辑，颜色变化由 daisyUI validator 配合原生约束自动完成。
【精确规格】
- 第二个「确认新密码」只做 required + minlength 占位提示，不要假装做了两次一致比对（跨字段比对需一行脚本，此处仅文案说明）。
- 文案写真实业务动作与规则，禁止出现 Primary / 成功 / 失败 这类颜色名当提示。
- 用到的类全部真实存在：input、validator、validator-hint、fieldset、fieldset-legend、w-full、max-w-md、flex-col、gap-3、btn-primary。
- 颜色全部走 daisyUI 主题变量；成功绿与错误红只在用户触碰字段后出现，不要额外强制首屏标红。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-3 w-full max-w-md">
  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">设置新密码</legend>
    <input type="password" class="input validator w-full" required minlength="8"
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
      placeholder="请输入新密码" autocomplete="new-password"
      title="至少 8 位，含数字、小写和大写字母" />
    <p class="validator-hint">至少 8 位，且同时包含数字、小写字母和大写字母</p>
  </fieldset>
  <fieldset class="fieldset w-full">
    <legend class="fieldset-legend">确认新密码</legend>
    <input type="password" class="input validator w-full" required minlength="8"
      placeholder="请再次输入新密码" autocomplete="new-password" />
    <p class="validator-hint">两次输入需要完全一致（一致性比对需一行脚本，此处仅占位提示）</p>
  </fieldset>
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-primary" type="submit">确认修改</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/validator/demo.html
- 上游官方文档：https://daisyui.com/components/validator/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
