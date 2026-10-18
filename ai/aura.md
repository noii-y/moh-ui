# 光晕（aura） · 灰墨 MoH_UI

> 给最重要的卡片或按钮套一圈旋转光边，含 rainbow 彩虹 / dual 双光 / glow 辉光 / 自定义颜色 / XS~XL 尺寸全部变体，纯 CSS 零依赖。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/aura/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：定价页最受欢迎套餐卡（光晕）。

【场景】SaaS 定价页里并列几张套餐卡，把「最受欢迎」的那一张整卡套一圈旋转的彩虹光晕，让访客不读价格就知道主推哪一档。
【怎么排】
- 外层 <div class="aura aura-rainbow"> 包住整张卡片（card），光晕是组件自带的旋转动画，不需要写 JS；
- 卡内顶部放 badge-warning「最受欢迎」标签；标题行左侧套餐名（text-3xl font-bold）、右侧价格（text-xl，如 ¥199/月）；
- 功能列表用 ul，每项前面一个 h-4 w-4 的对勾 SVG（text-success）；本档不含的功能整行 opacity-50，并给文字加 line-through；
- 底部一个 btn btn-primary btn-block「立即订阅」主按钮，整卡只此一个主操作。
【精确规格】
- 光晕外壳：<div class="aura aura-rainbow w-full max-w-sm">；卡片用 card w-full bg-base-100 shadow-sm（手机窄屏不要写死 w-96，用 w-full max-w-sm 自适应）。
- 按钮、标签上写真实中文动作与状态，禁止出现 Primary / Rainbow 这类颜色名。
- 想让光晕转慢一点，在外壳加内联 style="animation-duration:8s"；彩虹光晕的颜色由 aura-rainbow 自带，不要写死颜色。
- 一个定价区里只给主推的那一张卡加光晕，其余卡保持素净——光晕是用来突出唯一重点的。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="aura aura-rainbow w-full max-w-sm">
  <div class="card w-full bg-base-100 shadow-sm">
    <div class="card-body">
      <span class="badge badge-xs badge-warning">最受欢迎</span>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">专业版</h2>
        <span class="text-xl">¥199/月</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-xs">
        <li><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>不限项目数量</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>每月 100 次 AI 生成额度</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>团队协作与权限管理</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>优先工单响应</li>
        <li class="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="line-through">私有化部署</span></li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-primary btn-block">立即订阅</button>
      </div>
    </div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/aura/demo.html
- 上游官方文档：https://daisyui.com/components/aura/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
