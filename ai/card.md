# 卡片（card） · 灰墨 MoH_UI

> 定价三档（含删除线对比）、电商商品卡、用户资料卡、card-border/card-dash 描边与虚线、card-xs~xl 五档尺寸，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/card/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：SaaS 定价页三档套餐卡（卡片）。

【场景】SaaS 产品的定价页：并排三档套餐（免费版 / 专业版 / 企业版），让访客一眼看懂各档差别，并直接点对应按钮完成选择。
【怎么排】
- 三档卡片用一行网格排列：桌面三列、手机自动折成单列（grid grid-cols-1 lg:grid-cols-3 gap-4）。
- 中间「专业版」是主推档：用 badge badge-sm badge-warning 标「最受欢迎」，卡片加 shadow-lg 和一圈主色描边（border-2 border-primary）；左右两档保持普通阴影（shadow-sm）。
- 每档结构一致：标题 + 月价 → 功能清单（flex flex-col gap-2 text-sm）→ 底部一个整宽按钮（btn-block）。
- 功能清单里，「本档包含」的项前面用绿色对勾 SVG（h-4 w-4 text-success）；「本档不含」的项用半透明 + 删除线弱化（opacity-50，文字加 line-through），不要直接删掉。
- 按钮按动作区分：免费版用 btn-outline「免费开始」，专业版用 btn-primary「立即订阅」，企业版用 btn-soft「联系销售」；按钮上只写动作，不写颜色名。
【精确规格】
- 卡片本体：div class="card bg-base-100 shadow-sm"，内容包在 div class="card-body" 里；主推档为 card bg-base-100 shadow-lg border-2 border-primary。
- 价格行：flex items-center justify-between，标题 text-2xl font-bold，价格用 text-sm opacity-60 弱化。
- 所有图标是单色 SVG（stroke-current，h-4 w-4），不要用 emoji；颜色全部走主题变量，不写死色值。
- 手机 390px 下三档折成单列，卡片不溢出、按钮不被裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="grid gap-4 grid-cols-1 lg:grid-cols-3">

  <!-- 免费版 -->
  <div class="card bg-base-100 shadow-sm">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">免费版</h2>
        <span class="text-sm opacity-60">¥0 / 月</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-sm">
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>最多 3 个项目</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>5GB 存储空间</span>
        </li>
        <li class="flex items-center gap-2 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
          <span style="text-decoration:line-through">高级数据分析</span>
        </li>
        <li class="flex items-center gap-2 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
          <span style="text-decoration:line-through">团队协作</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-outline btn-block">免费开始</button>
      </div>
    </div>
  </div>

  <!-- 专业版（主推） -->
  <div class="card bg-base-100 shadow-lg border-2 border-primary">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">专业版</h2>
        <span class="badge badge-sm badge-warning">最受欢迎</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm opacity-60">¥39 / 月</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-sm">
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>无限项目数</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>100GB 存储空间</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>高级数据分析</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>团队协作（最多 10 人）</span>
        </li>
        <li class="flex items-center gap-2 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
          <span style="text-decoration:line-through">专属客户经理</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-primary btn-block">立即订阅</button>
      </div>
    </div>
  </div>

  <!-- 企业版 -->
  <div class="card bg-base-100 shadow-sm">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">企业版</h2>
        <span class="text-sm opacity-60">¥99 / 月 起</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-sm">
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>无限项目数</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>1TB 存储空间</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>团队协作不限人数</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>专属客户经理</span>
        </li>
        <li class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-success shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          <span>SLA 服务保障</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-soft btn-block">联系销售</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/card/demo.html
- 上游官方文档：https://daisyui.com/components/card/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
