# 倒计时（countdown） · 灰墨 MoH_UI

> 用 --value/--digits 变量驱动数字渲染，覆盖秒杀盒装、冒号时钟、大号带标签、促销卡、句内嵌数字等真实场景，零 JS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/countdown/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：限时秒杀倒计时。

【场景】电商商品页上的限时秒杀倒计时：三个中性色盒子横排，分别显示时、分、秒，下方标注单位，上面一行小字「距秒杀结束」。
【怎么排】
- 外层居中：<div class="text-center">，先一行 <p class="text-sm opacity-70 mb-3">距秒杀结束</p>。
- 盒子横排：<div class="grid grid-flow-col auto-cols-max gap-2 justify-center">；每个单位是「盒装数字 + 下方单位」的纵向小列（flex flex-col items-center）。
- 盒装数字：<div class="rounded-box bg-neutral px-4 py-2 text-neutral-content"><div class="countdown text-3xl"><span style="--value:24;">24</span></div></div>，盒下 <span class="text-xs opacity-70 mt-1">分</span>。
【精确规格】
- 每个数字单位必须是 <div class="countdown"><span style="--value:N;">N</span></div>：--value 与 span 文本两边写死同一数字；单个数补零两位时加 --digits:2（如 --value:2;--digits:2; 显示 02）。
- 纯 CSS 静态：组件本身不写 JS；真实倒计时由 JS 每秒改 span 的 --value 与文本（span.style.setProperty('--value', n)），组件自动带滚动过渡。
- 整组外包 role="timer" + aria-label（如「2 时 24 分 59 秒」）方便读屏。
- 颜色走主题语义色（bg-neutral / text-neutral-content），禁止写死色值；文案写真实中文，不出现颜色名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="text-center">
  <p class="text-sm opacity-70 mb-3">距秒杀结束</p>
  <div class="grid grid-flow-col auto-cols-max gap-2 justify-center" role="timer" aria-label="距秒杀结束 2 时 24 分 59 秒">
    <div class="flex flex-col items-center">
      <div class="rounded-box bg-neutral px-4 py-2 text-neutral-content">
        <div class="countdown text-3xl" aria-label="2 时">
          <span style="--value:2;--digits:2;">02</span>
        </div>
      </div>
      <span class="text-xs opacity-70 mt-1">时</span>
    </div>
    <div class="flex flex-col items-center">
      <div class="rounded-box bg-neutral px-4 py-2 text-neutral-content">
        <div class="countdown text-3xl" aria-label="24 分">
          <span style="--value:24;">24</span>
        </div>
      </div>
      <span class="text-xs opacity-70 mt-1">分</span>
    </div>
    <div class="flex flex-col items-center">
      <div class="rounded-box bg-neutral px-4 py-2 text-neutral-content">
        <div class="countdown text-3xl" aria-label="59 秒">
          <span style="--value:59;">59</span>
        </div>
      </div>
      <span class="text-xs opacity-70 mt-1">秒</span>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/countdown/demo.html
- 上游官方文档：https://daisyui.com/components/countdown/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
