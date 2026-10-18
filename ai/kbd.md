# 按键（kbd） · 灰墨 MoH_UI

> 快捷键说明卡、组合键、五档尺寸、行内嵌入正文、修饰键符号，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/kbd/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：快捷键说明卡（按键）。

【场景】产品帮助弹窗或设置页里的一张「常用快捷键」说明卡。
【怎么排】一张带边框的卡片，标题写「常用快捷键」，下面一行一条：
- 左边是动作名（保存修改 / 全局搜索 / 撤销），右边用键帽拼出组合键；
- 组合键由多块 kbd 组成，键帽之间留小间距，右对齐；
- 窄屏下动作名和键帽允许折行，但键帽组不能被拆开或裁切。
【精确规格】
- 卡片：<div class="card bg-base-100 border border-base-300 max-w-md">，内容包一层 <div class="card-body p-5">。
- 每一行：<div class="flex flex-wrap items-center justify-between gap-2">，键帽外层再套 <span class="flex items-center gap-1">。
- 键帽统一用 kbd-sm：<kbd class="kbd kbd-sm">Ctrl</kbd> <kbd class="kbd kbd-sm">S</kbd>。
- 动作名写真实中文动作，键帽字符用 Ctrl / Shift / Enter 等通用名，不要写颜色名。
- 颜色全部走 daisyUI 主题变量，不要写死颜色，切换主题时自动跟随。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="card bg-base-100 border border-base-300 max-w-md">
  <div class="card-body p-5">
    <h2 class="card-title">常用快捷键</h2>
    <div class="flex flex-wrap items-center justify-between gap-2 mt-2">
      <span>保存修改</span>
      <span class="flex items-center gap-1">
        <kbd class="kbd kbd-sm">Ctrl</kbd>
        <kbd class="kbd kbd-sm">S</kbd>
      </span>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <span>全局搜索</span>
      <span class="flex items-center gap-1">
        <kbd class="kbd kbd-sm">Ctrl</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
      </span>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <span>撤销</span>
      <span class="flex items-center gap-1">
        <kbd class="kbd kbd-sm">Ctrl</kbd>
        <kbd class="kbd kbd-sm">Z</kbd>
      </span>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/kbd/demo.html
- 上游官方文档：https://daisyui.com/components/kbd/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
