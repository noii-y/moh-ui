# 多行文本域（textarea） · 灰墨 MoH_UI

> 基础多行、固定高度 h-24/h-32、幽灵 textarea-ghost、fieldset 字段标签、语义状态色边框、五档尺寸、禁用，并以带实时字数统计的意见反馈输入区为成品示例（计数仅一小段 JS）。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/textarea/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：意见反馈输入区（多行文本域）。

【场景】产品里的意见反馈 / 备注输入区：一个多行文本框让用户写问题或建议，有 200 字上限，下方显示已填字数，最后提交反馈。
【怎么排】
- 用 fieldset.fieldset（w-full max-w-lg）把这一栏包起来，legend 写「意见反馈」；
- 文本域用 <textarea class="textarea w-full h-24" maxlength="200" placeholder="…">，placeholder 写引导语，不写字段名；
- 文本域下面一行 <span class="fieldset-label">已填 X/200 字</span>，X 随输入实时更新（监听 input 事件，取 textarea.value.length）；
- 最下面一行放主操作「提交反馈」（btn btn-primary），旁边一个弱化的「保存草稿」（btn btn-ghost），用 flex flex-wrap gap-2 自然排列，不要用 ml-auto 推到右边。
【精确规格】
- 高度用标准类 h-24（约 6 行），不要用 Tailwind 任意值 h-[Npx]。
- 标签、placeholder、按钮写真实中文业务文案，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：textarea、w-full、h-24、fieldset、fieldset-legend、fieldset-label、flex、flex-wrap、gap-2、max-w-lg、btn、btn-primary、btn-ghost。
- 字数统计是本组件唯一允许的一小段 JS（监听 input 更新数字），除此之外不要加别的交互；颜色全部走 daisyUI 主题变量，不要写死颜色。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<fieldset class="fieldset w-full max-w-lg">
  <legend class="fieldset-legend">意见反馈</legend>
  <textarea id="feedback-text" class="textarea w-full h-24" maxlength="200" placeholder="请描述你遇到的问题或具体建议，我们会尽快处理"></textarea>
  <span class="fieldset-label">已填 <span id="feedback-count">0</span>/200 字</span>
  <div class="flex flex-wrap gap-2">
    <button class="btn btn-primary">提交反馈</button>
    <button class="btn btn-ghost">保存草稿</button>
  </div>
</fieldset>
<script>
  (function () {
    var t = document.getElementById("feedback-text"), n = document.getElementById("feedback-count");
    function up() { n.textContent = t.value.length; }
    t.addEventListener("input", up); up();
  })();
</script>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/textarea/demo.html
- 上游官方文档：https://daisyui.com/components/textarea/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
