# 骨架屏（skeleton） · 灰墨 MoH_UI

> 文章列表加载态成品、卡片骨架、资料行骨架、skeleton-text 渐变文字等待态，形状模拟真实内容排版，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/skeleton/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：文章列表加载骨架屏。

【场景】文章列表数据加载时，用灰色骨架块占位，让页面先有形状，用户不看空白屏。
【怎么排】
- 顶部一行小字加载说明：flex items-center gap-2，左边一个 loading loading-spinner loading-xs 小转圈，文字「正在加载文章列表…」，text-sm opacity-60。
- 每条记录用 flex items-start gap-4：左边圆形头像占位（skeleton h-12 w-12 shrink-0 rounded-full），右边 flex-1 flex flex-col gap-2 放文字条。
- 文字条用 skeleton h-4，宽度错落：标题条 w-32 / w-40，正文条 w-full；带封面的条目末尾加一个 skeleton h-24 w-full。
- 条目之间用 flex flex-col gap-5 排列，整体 max-w-xl mx-auto 居中。
【精确规格】
- 骨架块尺寸模仿真实内容：头像 rounded-full，文字条 h-4，图块 h-24 / h-32，最后一行故意短一截。
- 本库无 w-2/3、space-y-* 类，间距一律用 flex gap-*。
- 加载完后整块替换为真实内容，骨架屏只作加载态。
- 文案写真实中文，不出现颜色名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="max-w-xl mx-auto">
  <div class="mb-3 flex items-center gap-2 text-sm opacity-60">
    <span class="loading loading-spinner loading-xs"></span>
    正在加载文章列表…
  </div>
  <div class="flex flex-col gap-5">
    <div class="flex items-start gap-4">
      <div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
      <div class="flex flex-1 flex-col gap-2 pt-1">
        <div class="skeleton h-4 w-32"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
    </div>
    <div class="flex items-start gap-4">
      <div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
      <div class="flex flex-1 flex-col gap-2 pt-1">
        <div class="skeleton h-4 w-40"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-24 w-full"></div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/skeleton/demo.html
- 上游官方文档：https://daisyui.com/components/skeleton/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
