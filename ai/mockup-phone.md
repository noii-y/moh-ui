# 手机样机（mockup-phone） · 灰墨 MoH_UI

> mockup-phone 外壳 + camera 挖孔 + display 屏幕区，屏幕内可放任意 App 界面（外卖首页/信息流/锁屏壁纸），零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/mockup-phone/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：外卖 App 首页手机样机。

【场景】在产品介绍页或需求文档里，画一个手机外框，把某个 App 的首页界面预览放进屏幕里。
【怎么排】
- 外层是 <div class="mockup-phone">，里面先放 <div class="mockup-phone-camera"></div>（顶部挖孔），再放 <div class="mockup-phone-display"> 作为屏幕。
- 屏幕 display 加 flex flex-col，让底部导航用 mt-auto 推到屏幕最下方。
- 状态栏（flex justify-between，左边时间右边信号图标）用 px-6 pt-14，避开顶部挖孔和四角圆角；然后依次是页面标题栏 → 搜索框 → 列表内容 → 底部导航。
- 屏幕宽度有限，内容保持紧凑，店铺/信息流条目用 flex + gap 排列，长文案用 leading-relaxed。
- 演示图块一律用纯色 div 占位（如 bg-base-200、bg-orange-400），禁止外链图片。
【精确规格】
- 外层示例：<div class="mockup-phone max-w-xs mx-auto">，外框自带手机比例，不要再设固定宽高。
- 状态栏时间用 text-xs + opacity-70，信号图标用 h-3 w-3 的单色 SVG。
- 屏幕底色用 bg-base-100，底部导航用 border-t border-base-300 分隔，当前页用 text-primary。
- 所有文案写真实中文（如「附近好店」「川味小馆」），不出现 Primary / Success 这类颜色名。
- 锁屏壁纸变体：display 里直接 grid place-content-center bg-primary text-primary-content，居中放大时间。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="mockup-phone max-w-xs mx-auto">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display bg-base-100 flex flex-col">
    <div class="flex items-center justify-between px-6 pt-14 text-xs opacity-70">
      <span>9:41</span>
      <span class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"/></svg>
        5G
      </span>
    </div>
    <div class="px-4 pt-4">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">附近好店</h3>
        <button class="btn btn-ghost btn-circle btn-sm" aria-label="通知">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/></svg>
        </button>
      </div>
      <div class="mt-3 flex items-center gap-2 rounded-box bg-base-200 px-3 py-2 text-sm opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
        搜索店名或菜名
      </div>
    </div>
    <div class="flex flex-col gap-4 px-4 pt-4">
      <div class="flex items-center gap-3">
        <div class="h-16 w-16 shrink-0 rounded-box bg-orange-400"></div>
        <div class="flex flex-col gap-1">
          <span class="font-medium">川味小馆</span>
          <span class="text-xs opacity-60">川菜 · 月售 1200+</span>
          <span class="text-xs text-warning">满 25 减 8</span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="h-16 w-16 shrink-0 rounded-box bg-green-400"></div>
        <div class="flex flex-col gap-1">
          <span class="font-medium">轻食沙拉铺</span>
          <span class="text-xs opacity-60">健康餐 · 25 分钟达</span>
          <span class="text-xs text-success">新客立减 5 元</span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="h-16 w-16 shrink-0 rounded-box bg-yellow-400"></div>
        <div class="flex flex-col gap-1">
          <span class="font-medium">烘焙日记</span>
          <span class="text-xs opacity-60">甜点 · 刚出炉</span>
          <span class="text-xs opacity-60">免配送费</span>
        </div>
      </div>
    </div>
    <div class="mt-auto flex items-center justify-around border-t border-base-300 py-3 text-xs">
      <span class="font-medium text-primary">首页</span>
      <span class="opacity-60">订单</span>
      <span class="opacity-60">我的</span>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/mockup-phone/demo.html
- 上游官方文档：https://daisyui.com/components/mockup-phone/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
