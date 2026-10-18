# 对比（diff） · 灰墨 MoH_UI

> 左右叠放两张等大内容，中间分隔线一压对照差别，含设计稿前后对比、照片两种调色、大字劈开对比三种用法，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/diff/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：设计改版前后对比（对比 Diff）。

【场景】一个设计改版展示页，需要让客户直观看到「优化前」和「优化后」两张设计稿的差别（同样的用法也适合照片两种调色、Logo 双方案对照）。
【怎么排】
- 外层用 <figure class="diff aspect-video"> 做 16:9 的左右对比容器，加 tabindex="0" 可键盘聚焦；
- diff-item-1 放「优化前」稿，diff-item-2 放「优化后」稿，最后放一个空的 <div class="diff-resizer"></div>（顺序固定，resizer 必须在最后）；
- 两个 item 都加 role="img"，分别用 aria-label 写清「优化前」「优化后」；
- 纯 CSS 下分隔线默认停在正中（左右各一半），自带白色分隔线和圆形把手，静态即见效果，不需要 JS。
【精确规格】
- 容器：<figure class="diff aspect-video" tabindex="0">；不要固定死高度，靠 aspect-video 定比例。
- 左右两张稿要等大同比例，否则对不齐；占位用内联渐变加手绘线框 SVG，真实项目换成两张等大的 <img>，不要外链图片。
- 文字对比变体：同一个超大字，左边 bg-primary text-primary-content，右边 bg-base-200，grid place-content-center 居中，字号 text-9xl font-bold，分隔线从笔画中间切过。
- 底色全部走主题变量（bg-primary / bg-base-200），不要写死十六进制颜色，切主题时自动跟随。
- 想要分隔线真的能拖动，需在真实项目里另补一小段 JS；本组件保持零依赖，不内置脚本。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<figure class="diff aspect-video" tabindex="0" aria-label="设计改版前后对比">
  <div class="diff-item-1" role="img" tabindex="0" aria-label="优化前：拥挤灰暗的旧版界面">
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" style="background:linear-gradient(160deg,#9aa5b1 0%,#6b7684 100%)" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" width="300" height="10" fill="#55606e"/>
      <rect x="10" y="44" width="180" height="12" fill="#c3ccd6"/>
      <rect x="10" y="64" width="120" height="7" fill="#aeb8c4"/>
      <rect x="10" y="84" width="300" height="72" fill="#7e8a97"/>
      <rect x="20" y="96" width="70" height="16" fill="#4b5563"/>
      <rect x="20" y="122" width="110" height="5" fill="#9aa5b1"/>
      <rect x="20" y="134" width="140" height="5" fill="#9aa5b1"/>
      <rect x="12" y="162" width="56" height="16" fill="#1f2937"/>
      <text x="40" y="173" text-anchor="middle" font-size="9" fill="#d1d5db" font-family="sans-serif">优化前</text>
    </svg>
  </div>
  <div class="diff-item-2" role="img" aria-label="优化后：留白充足的新版界面">
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" style="background:linear-gradient(160deg,#4f46e5 0%,#7c3aed 100%)" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" width="300" height="10" fill="rgba(255,255,255,0.25)"/>
      <rect x="10" y="44" width="180" height="12" fill="#ffffff"/>
      <rect x="10" y="64" width="120" height="7" fill="rgba(255,255,255,0.7)"/>
      <rect x="10" y="84" width="300" height="72" rx="6" fill="#ffffff"/>
      <rect x="20" y="96" width="70" height="18" rx="9" fill="#4f46e5"/>
      <rect x="20" y="124" width="120" height="5" fill="#e0e7ff"/>
      <rect x="20" y="136" width="90" height="5" fill="#eef2ff"/>
      <rect x="252" y="162" width="56" height="16" rx="8" fill="#ffffff"/>
      <text x="280" y="173" text-anchor="middle" font-size="9" fill="#4f46e5" font-family="sans-serif">优化后</text>
    </svg>
  </div>
  <div class="diff-resizer"></div>
</figure>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/diff/demo.html
- 上游官方文档：https://daisyui.com/components/diff/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
