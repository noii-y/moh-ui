# 字段分组（fieldset） · 灰墨 MoH_UI

> 字段分组容器：legend 整组标题、fieldset-label 字段名与说明、卡片式分组、标题同行放下拉/开关、label 与控件 for/id 绑定、整组 disabled、join 输入框加按钮，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/fieldset/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：设置页里的通知偏好分组（字段分组容器）。

【场景】设置页里的一组通知偏好：一张卡片里列几个通知开关，下面再放一组当前不可改的会员专属开关，底部一个保存按钮。
【怎么排】
- 每张卡片用 <fieldset class="fieldset rounded-box border border-base-300 bg-base-200 p-4"> 包起，<legend class="fieldset-legend"> 写组标题（如「通知设置」）；
- 每一行用 <label class="fieldset-label justify-between gap-3">，左边 <span> 写中文说明，右边放 <input type="checkbox" class="toggle toggle-primary">（默认开）或 class="toggle"（默认关），点整行都能切换；
- 不可改的那一组在 fieldset 上加 disabled，里面开关自动置灰，组尾加一行 <p class="fieldset-label"> 说明什么时候才能改（如「开通会员后可自定义」）；
- 两组卡片纵向排列（flex flex-col gap-4，最大宽度 max-w-md），底部放主按钮「保存设置」（btn btn-primary），不写任何交互 JS。
【精确规格】
- 组标题字重加粗、次要说明用 fieldset-label 自动弱化；行间距 gap-3、卡片间距 gap-4，全部走 8px 网格。
- 文案写真实业务动作与内容（订单物流更新、每周产品动态、营销活动推送），禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：fieldset、fieldset-legend、fieldset-label、toggle、toggle-primary、rounded-box、border-base-300、bg-base-200、p-4、justify-between、gap-3、gap-4、max-w-md、btn-primary。
- 颜色全部走 daisyUI 主题变量，不要写死颜色；手机窄屏上右侧开关不得溢出或被裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-4 w-full max-w-md">
  <fieldset class="fieldset rounded-box border border-base-300 bg-base-200 p-4">
    <legend class="fieldset-legend">通知设置</legend>
    <label class="fieldset-label justify-between gap-3">
      <span>订单物流更新</span>
      <input type="checkbox" class="toggle toggle-primary" checked="checked" />
    </label>
    <label class="fieldset-label justify-between gap-3">
      <span>每周产品动态</span>
      <input type="checkbox" class="toggle" />
    </label>
    <label class="fieldset-label justify-between gap-3">
      <span>营销活动推送</span>
      <input type="checkbox" class="toggle" />
    </label>
  </fieldset>
  <fieldset class="fieldset rounded-box border border-base-300 bg-base-200 p-4" disabled>
    <legend class="fieldset-legend">会员专属设置</legend>
    <label class="fieldset-label justify-between gap-3">
      <span>专属客服优先接入</span>
      <input type="checkbox" class="toggle" checked="checked" />
    </label>
    <p class="fieldset-label">开通会员后可自定义这一组通知</p>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/fieldset/demo.html
- 上游官方文档：https://daisyui.com/components/fieldset/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
