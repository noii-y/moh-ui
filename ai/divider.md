# 分隔线（divider） · 灰墨 MoH_UI

> 登录页「或」、带文字/无文字、起止位置、彩色、并排竖线，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/divider/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：登录卡片里的「或」分隔线。

【场景】一张登录卡片里，账号密码表单和另一种登录方式之间的分隔。
【怎么排】卡片从上到下：标题 → 邮箱输入框 → 密码输入框 → 主色「登录」按钮 → 一条带「或」字的分隔线 → 下方两个并列的次级登录按钮。
- 分隔线 <div class="divider">或</div> 上下自动留均匀间距，文字居中；
- 下方两个按钮用 flex 并排、各占一半，窄屏自动换行。
【精确规格】
- 卡片：<div class="card bg-base-100 border border-base-300 max-w-sm">，内容包 <div class="card-body p-6">。
- 输入框：<input class="input w-full" />，placeholder 写「请输入邮箱」「请输入密码」。
- 主按钮：<button class="btn btn-primary w-full">登录</button>；分隔线后次级按钮 <button class="btn flex-1">扫码登录</button>，不要套第三方品牌图标。
- 分隔线文字写「或」，不要写颜色名；颜色全部走 daisyUI 主题变量，切换主题自动跟随。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="card bg-base-100 border border-base-300 max-w-sm">
  <div class="card-body p-6">
    <h2 class="card-title">登录你的账号</h2>
    <input type="email" placeholder="请输入邮箱" class="input w-full" />
    <input type="password" placeholder="请输入密码" class="input w-full" />
    <button class="btn btn-primary w-full">登录</button>
    <div class="divider">或</div>
    <div class="flex flex-wrap gap-2">
      <button class="btn flex-1">扫码登录</button>
      <button class="btn flex-1">手机验证码登录</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/divider/demo.html
- 上游官方文档：https://daisyui.com/components/divider/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
