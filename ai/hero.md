# 首屏横幅（hero） · 灰墨 MoH_UI

> SaaS 左文右图成品（公告胶囊+大标题+双按钮+星级评分+产品界面缩略卡）、居中纯文字、图文左右、图文反向（lg:flex-row-reverse）、带登录表单卡、内联渐变背景，零依赖纯 CSS。

分类：基础　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/hero/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：SaaS 项目管理工具首页首屏（首屏横幅）。

【场景】SaaS 产品官网的首页首屏：左边大标题 + 副标题 + 双按钮 + 一行星级评分，右边一张产品界面缩略卡，让访客一眼看懂产品长什么样、点哪里注册。
【怎么排】
- 外层 <div class="hero py-20">，内部 <div class="hero-content flex-col gap-12 lg:flex-row w-full">；手机上下堆叠，桌面左右两列（hero-content 加 w-full 撑满舞台，否则在 doc-stage 的 flex 布局里会收缩成内容宽度）。
- 顶部一行公告胶囊：<span class="badge badge-soft badge-primary px-4 py-2"> 带一个 h-4 w-4 单色 SVG 小图标，写真实公告（如「全新 2.0 版本已发布，立即体验」）。
- 左列 <div class="min-w-0 max-w-xl">：标题 text-2xl lg:text-5xl font-bold，在合理位置主动 <br /> 断行，禁止被挤成单字；副标题一行讲产品价值（text-base lg:text-lg opacity-70）；按钮 flex flex-wrap gap-3，主操作 btn btn-primary 一个，次要操作 btn btn-soft 一个；星级评分只读展示：rating rating-sm 里 5 个 disabled + checked 的 mask mask-star-2 bg-orange-400 radio，旁边一行小字「已有 10000+ 团队信赖」。
- 右列是一张真实产品界面缩略卡（card w-full max-w-xs shrink-0 bg-base-100 shadow-2xl，card-body p-4）：从上到下依次是①窗口三圆点（h-3 w-3 rounded-full bg-error/bg-warning/bg-success）+「项目看板」小标题；②左侧 menu menu-sm w-28（3 项，其中一项 menu-active）；③主区 grid grid-cols-2 两个小指标卡（stat-title text-xs + stat-value text-xl，如「进行中任务 24 / 本周完成 18」）；④一条 progress progress-primary w-full value=68；⑤3 行任务清单（label flex items-center gap-2，checkbox checkbox-xs + 任务文字 + avatar avatar-placeholder 小头像 w-6 姓名首字）。
【精确规格】
- 左右两列都加 min-w-0，右列加 shrink-0；标题手机 text-2xl、桌面 lg:text-5xl，宁可主动 <br /> 断行也不许单字孤行。
- 不写 min-h-screen、不用 fixed/absolute 定位；卡片内部全部是普通文档流。
- 按钮写真实动作（免费开始使用 / 查看演示），禁止出现 Primary / 成功 这类颜色名当文案；图标全部是单色内联 SVG，不外链图片、不用 emoji。
- 390px 手机宽下两列折成上下，卡片不溢出、按钮不被裁切、标题不拆字。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="hero py-20">
  <div class="hero-content flex-col gap-12 lg:flex-row w-full">

    <!-- 左列：文案 -->
    <div class="min-w-0 max-w-xl">
      <span class="badge badge-soft badge-primary inline-flex items-center gap-2 px-4 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
        全新 2.0 版本已发布，立即体验
      </span>
      <h1 class="mt-6 text-2xl font-bold leading-tight lg:text-5xl">让团队协作更高效<br />的项目管理工具</h1>
      <p class="mt-4 text-base opacity-70 lg:text-lg">看板、任务、进度一页看全：谁在做什么、做到哪一步，团队不用再靠开会对齐。</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <button class="btn btn-primary">免费开始使用</button>
        <button class="btn btn-soft">查看演示</button>
      </div>
      <div class="mt-8 flex items-center gap-2">
        <div class="rating rating-sm">
          <input type="radio" disabled="disabled" checked="checked" name="hero-star" class="mask mask-star-2 bg-orange-400" aria-label="5 星" />
          <input type="radio" disabled="disabled" checked="checked" name="hero-star" class="mask mask-star-2 bg-orange-400" aria-label="5 星" />
          <input type="radio" disabled="disabled" checked="checked" name="hero-star" class="mask mask-star-2 bg-orange-400" aria-label="5 星" />
          <input type="radio" disabled="disabled" checked="checked" name="hero-star" class="mask mask-star-2 bg-orange-400" aria-label="5 星" />
          <input type="radio" disabled="disabled" checked="checked" name="hero-star" class="mask mask-star-2 bg-orange-400" aria-label="5 星" />
        </div>
        <span class="text-sm opacity-70">已有 10000+ 团队信赖</span>
      </div>
    </div>

    <!-- 右列：产品界面缩略卡 -->
    <div class="card w-full max-w-xs shrink-0 bg-base-100 shadow-2xl">
      <div class="card-body gap-4 p-4">
        <div class="flex items-center gap-1.5">
          <span class="h-3 w-3 rounded-full bg-error"></span>
          <span class="h-3 w-3 rounded-full bg-warning"></span>
          <span class="h-3 w-3 rounded-full bg-success"></span>
          <span class="ml-2 text-sm font-semibold">项目看板</span>
        </div>
        <div class="flex gap-3">
          <ul class="menu menu-sm w-28 shrink-0 rounded-box bg-base-200 p-1">
            <li><a class="menu-active">看板</a></li>
            <li><a>任务</a></li>
            <li><a>成员</a></li>
          </ul>
          <div class="flex min-w-0 flex-1 flex-col gap-3">
            <div class="grid grid-cols-2 gap-2">
              <div class="rounded-lg bg-base-200 p-2">
                <div class="stat-title text-xs">进行中任务</div>
                <div class="stat-value text-xl">24</div>
              </div>
              <div class="rounded-lg bg-base-200 p-2">
                <div class="stat-title text-xs">本周完成</div>
                <div class="stat-value text-xl">18</div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs">
                <span>整体进度</span>
                <span>68%</span>
              </div>
              <progress class="progress progress-primary w-full" value="68" max="100"></progress>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
                <span>首页改版设计稿</span>
                <div class="avatar avatar-placeholder ml-auto shrink-0">
                  <div class="bg-neutral text-neutral-content w-6 rounded-full"><span class="text-xs">张</span></div>
                </div>
              </label>
              <label class="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
                <span>客户合同归档</span>
                <div class="avatar avatar-placeholder ml-auto shrink-0">
                  <div class="bg-neutral text-neutral-content w-6 rounded-full"><span class="text-xs">李</span></div>
                </div>
              </label>
              <label class="flex cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" class="checkbox checkbox-xs" />
                <span>下周迭代排期</span>
                <div class="avatar avatar-placeholder ml-auto shrink-0">
                  <div class="bg-neutral text-neutral-content w-6 rounded-full"><span class="text-xs">王</span></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/hero/demo.html
- 上游官方文档：https://daisyui.com/components/hero/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
