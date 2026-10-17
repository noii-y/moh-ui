# 对话气泡（chat） · 灰墨 MoH_UI

> 左右分边/头像时间头尾/气泡语义色等变体，客服对话与留言场景，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/chat/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商客服对话窗口（对话气泡）。

【场景】一个电商 App 里的客服对话窗口，买家和客服小助手交替发言。
【怎么排】
- 我方（买家）消息靠右，容器加 chat chat-end；对方（客服）消息靠左，容器加 chat chat-start。
- 每条消息结构：chat-image（头像）→ chat-header（名字 + 灰色时间）→ chat-bubble（气泡正文）→ chat-footer（已读/已送达，小字灰色）。
- 头像用文字占位圆块（bg-primary text-primary-content 表示我方、bg-neutral text-neutral-content 表示对方），块里放一个汉字，不引用任何外部图片。
【精确规格】
- 头像外层：<div class="chat-image avatar"><div class="w-10 rounded-full">…</div></div>。
- 时间小字：<time class="text-xs opacity-50">14:02</time>；底部状态：<div class="chat-footer opacity-50">已读</div>。
- 对话内容用真实客服语境，如"我的订单怎么还没发货？""已帮您催单，仓库今天会发出"。
- 普通气泡不涂颜色；只有结果类系统消息才用 chat-bubble-success / warning / error。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="chat chat-end">
  <div class="chat-image avatar">
    <div class="bg-primary text-primary-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">我</span></div>
  </div>
  <div class="chat-header">我 <time class="text-xs opacity-50">14:01</time></div>
  <div class="chat-bubble">你好，我的订单怎么还没发货？</div>
  <div class="chat-footer opacity-50">已读</div>
</div>
<div class="chat chat-start">
  <div class="chat-image avatar">
    <div class="bg-neutral text-neutral-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">客</span></div>
  </div>
  <div class="chat-header">客服小助手 <time class="text-xs opacity-50">14:02</time></div>
  <div class="chat-bubble">您好，已帮您催单，仓库今天会发出，请稍等。</div>
</div>
<div class="chat chat-end">
  <div class="chat-image avatar">
    <div class="bg-primary text-primary-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">我</span></div>
  </div>
  <div class="chat-header">我 <time class="text-xs opacity-50">14:03</time></div>
  <div class="chat-bubble">好的，大概几天能到武汉？</div>
  <div class="chat-footer opacity-50">已读</div>
</div>
<div class="chat chat-start">
  <div class="chat-image avatar">
    <div class="bg-neutral text-neutral-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">客</span></div>
  </div>
  <div class="chat-header">客服小助手 <time class="text-xs opacity-50">14:03</time></div>
  <div class="chat-bubble">顺利的话明天送达，物流单号稍后短信发给您。</div>
  <div class="chat-footer opacity-50">已送达</div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/chat/demo.html
- 上游官方文档：https://daisyui.com/components/chat/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
