# 浏览器样机（mockup-browser） · 灰墨 MoH_UI

> 带地址栏的浏览器外壳，框内可放迷你页面或截图，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/mockup-browser/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：产品官网首页的浏览器样机。

【场景】产品介绍文档里，一个模拟浏览器窗口展示产品官网首页的样子。
【怎么排】外层是浏览器样机外壳，顶栏三色圆点 + 地址栏，框里是一段迷你官网：
- 顶部一条导航（左品牌名，右导航链接和一个「登录」小按钮）；
- 中间居中主标题「让团队更快交付」+ 一行副标题 + 主色按钮「免费开始」；
- 底部三张等宽特性小卡片。
【精确规格】
- 外壳：<div class="mockup-browser border border-base-300 max-w-3xl mx-auto">；地址栏 <div class="mockup-browser-toolbar"><div class="input">https://你的产品官网</div></div>。
- 框内内容包一层 <div class="border-t border-base-300 bg-base-100">；导航用 navbar bg-base-200，卡片用 card bg-base-200。
- 框内不要外链图片，全部用 daisyUI 类拼；宽度用 max-w 限制，不要撑满视口、不要 fixed 定位。
- 文案写真实中文动作（登录 / 免费开始 / 查看文档），不要写颜色名；颜色走主题变量。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="mockup-browser border border-base-300 max-w-3xl mx-auto">
  <div class="mockup-browser-toolbar">
    <div class="input">https://www.huimo.example</div>
  </div>
  <div class="border-t border-base-300 bg-base-100">
    <div class="navbar bg-base-200 px-4">
      <div class="navbar-start">
        <span class="font-bold">灰墨云</span>
      </div>
      <div class="navbar-end flex gap-4 text-sm">
        <span>产品</span>
        <span>定价</span>
        <span>文档</span>
        <button class="btn btn-primary btn-xs">登录</button>
      </div>
    </div>
    <div class="px-6 py-8 text-center">
      <h2 class="text-2xl font-bold">让团队更快交付</h2>
      <p class="opacity-70 mt-2 text-sm">零依赖组件库，复制提示词即可生成界面</p>
      <button class="btn btn-primary mt-4">免费开始</button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 px-6 pb-6">
      <div class="card bg-base-200 p-4"><div class="font-semibold text-sm">提示词驱动</div><p class="text-xs opacity-70 mt-1">把规格发给 AI</p></div>
      <div class="card bg-base-200 p-4"><div class="font-semibold text-sm">零依赖</div><p class="text-xs opacity-70 mt-1">纯 HTML/CSS</p></div>
      <div class="card bg-base-200 p-4"><div class="font-semibold text-sm">多主题</div><p class="text-xs opacity-70 mt-1">切换即跟随</p></div>
    </div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/mockup-browser/demo.html
- 上游官方文档：https://daisyui.com/components/mockup-browser/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
