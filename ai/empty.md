# 空状态（empty） · 灰墨 MoH_UI

> 列表无数据、搜索无结果、加载失败等空状态：线性图标 + 标题 + 说明 + 可选操作按钮，覆盖标准居中、无按钮、表格内嵌紧凑横排、错误重试等形态，零依赖纯 HTML/CSS。

分类：反馈　｜　来源：灰墨自研（MIT）　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：项目列表为空时的空状态。

【场景】一个项目列表第一次被打开时的空状态：列表区域没有任何项目，放一张居中卡片告诉用户现状并引导他建第一个项目。
【怎么排】
- 外层是 daisyUI card（bg-base-100 shadow-sm mx-auto max-w-md），内部 card-body 用 flex flex-col items-center justify-center text-center 居中；
- 从上到下：56px 线性盒子 SVG 图标 → 标题「还没有项目」→ 一句说明 → 主按钮「新建项目」。
【精确规格】
- 图标：内联单色 SVG，fill="none"、stroke="currentColor"、stroke-width="1.5"、style="width:56px;height:56px"、aria-hidden="true"；盒子轮廓路径：<rect x="3" y="4" width="18" height="16" rx="2"/>、<path d="M3 9h18"/>、<path d="M8 14h8"/>。不要用 emoji，不要外链图标库，不要写死灰色。
- 标题用 card-title justify-center（h3 语义）；说明文案：「创建第一个项目，把团队的协作和文档都收拢到一起。」
- 按钮：card-actions justify-center 里放 btn btn-primary「新建项目」，写真实动作，禁止出现颜色名。
- 文案规则：标题说清现状、说明给下一步方向；搜索无结果类空状态不放按钮；加载失败类空状态放「重试」按钮而不是引导按钮。
- 颜色全部走主题变量，不要写死。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="card bg-base-100 shadow-sm mx-auto max-w-md">
  <div class="card-body flex flex-col items-center justify-center text-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:56px;height:56px" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 14h8" />
    </svg>
    <h3 class="card-title justify-center">还没有项目</h3>
    <p>创建第一个项目，把团队的协作和文档都收拢到一起。</p>
    <div class="card-actions justify-center mt-2">
      <button class="btn btn-primary">新建项目</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/empty/demo.html
- 灰墨自研增强组件，基于 daisyUI 底座二次开发。
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
