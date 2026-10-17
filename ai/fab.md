# 悬浮动作按钮（fab） · 灰墨 MoH_UI

> 右下角新建主按钮展开写文章/传图片/发视频等动作，覆盖带标签与纯图标垂直排列、fab-flower 花瓣形、单个悬浮按钮，零依赖纯 CSS。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/fab/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：内容平台右下角「新建」按钮与展开动作（悬浮动作按钮）。

【场景】一个内容平台右下角的悬浮动作按钮：主按钮是带加号的圆形主色「新建」，聚焦或悬停后向上依次展开三个动作——写文章、传图片、发视频。
【怎么排】
- 外层容器用 <div class="fab">（真实项目里它默认固定在视口右下角，本详情页为了不遮正文才临时加 static，你的页面不要加 static）；
- 第一个子元素必须是 <div tabindex="0" role="button" aria-label="新建" class="btn btn-circle btn-lg btn-primary">，里面放一个加号 SVG（h-6 w-6）；这是 daisyUI 为兼容 Safari 的标准写法，不要换成普通 button；
- 后面每个动作一行：<div class="flex items-center gap-2">，左边文字标签（text-sm），右边圆形按钮 <button class="btn btn-circle btn-lg" aria-label="..."> 配单色 SVG 图标（h-6 w-6，stroke=currentColor）；
- 三个动作依次是：写文章（铅笔图标）、传图片（图片图标）、发视频（视频图标）。
【精确规格】
- 纯 CSS 即可：speed-dial 子按钮平时隐藏，主按钮 focus/hover 时由 daisyUI 自动展开，不要为展开写任何 JS，也不要复制详情页那段强制展开的演示样式。
- 圆形按钮用 btn btn-circle btn-lg；主按钮加 btn-primary；图标统一 h-6 w-6；纯图标按钮必须带 aria-label。
- 文字写真实动作（新建 / 写文章 / 传图片 / 发视频），禁止出现颜色名当文案。
- 用到的类全部真实存在：fab、static（仅详情页演示用，真实项目去掉）、btn、btn-circle、btn-lg、btn-primary、flex、items-center、gap-2、text-sm、h-6、w-6。
- 颜色全部走 daisyUI 主题变量，不要写死颜色。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="fab static">
  <div tabindex="0" role="button" aria-label="新建" class="btn btn-circle btn-lg btn-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-sm">写文章</span>
    <button class="btn btn-circle btn-lg" aria-label="写文章">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487a2.25 2.25 0 1 1 3.182 3.182L7.74 19.993a2.25 2.25 0 0 1-.97.56l-3.278.868a.563.563 0 0 1-.694-.694l.868-3.278a2.25 2.25 0 0 1 .56-.97L16.862 4.487Z"/></svg>
    </button>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-sm">传图片</span>
    <button class="btn btn-circle btn-lg" aria-label="传图片">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>
    </button>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-sm">发视频</span>
    <button class="btn btn-circle btn-lg" aria-label="发视频">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
    </button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/fab/demo.html
- 上游官方文档：https://daisyui.com/components/fab/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
