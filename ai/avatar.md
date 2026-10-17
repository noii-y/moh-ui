# 头像（avatar） · 灰墨 MoH_UI

> 在线状态/mask 轮廓形状/文字占位/多人叠放群组等变体，资料页与评论场景，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/avatar/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：团队成员资料卡头像区。

【场景】团队协作产品里的成员资料卡：左边大头像，旁边姓名职位，右边同组同事的叠放小头像组。
【怎么排】
- 大头像用文字占位：bg-primary text-primary-content 的圆形块，中间放一个大字"张"，挂 avatar-online 在线绿点。
- 旁边两行：名字（text-lg font-semibold）+ 职位状态（text-sm opacity-60）。
- 同组同事用 avatar-group 叠放：三个 w-10 的小头像依次重叠，末尾放一个"+5"占位块表示还有更多人；小头像用 bg-neutral text-neutral-content 文字占位。
【精确规格】
- 头像就两层：外层 <div class="avatar avatar-online">，直接子元素即色块 <div class="bg-primary text-primary-content w-24 rounded-full flex items-center justify-center">；不要再多加一层 div（直接子元素才有正方形比例）。
- 群组：<div class="avatar-group">，从第二个头像起每个 <div class="avatar"> 加 style="margin-left:-1.25rem" 形成重叠（灰墨补丁层暂缺 -space-x 工具类）。
- 群末"+5"块：<div class="avatar avatar-placeholder"><div class="bg-neutral text-neutral-content w-10 rounded-full"><span class="text-xs">+5</span></div></div>。
- 头像一律文字占位、零外部图片；文案写真实姓名职位，不要写颜色名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-wrap items-center gap-4">
  <div class="avatar avatar-online">
    <div class="bg-primary text-primary-content w-24 rounded-full flex items-center justify-center"><span class="text-3xl">张</span></div>
  </div>
  <div>
    <div class="text-lg font-semibold">张明</div>
    <div class="text-sm opacity-60">产品设计师 · 刚刚在线</div>
  </div>
  <div class="avatar-group ml-4">
    <div class="avatar">
      <div class="bg-neutral text-neutral-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">李</span></div>
    </div>
    <div class="avatar" style="margin-left:-1.25rem">
      <div class="bg-neutral text-neutral-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">王</span></div>
    </div>
    <div class="avatar" style="margin-left:-1.25rem">
      <div class="bg-neutral text-neutral-content w-10 rounded-full flex items-center justify-center"><span class="text-xs">陈</span></div>
    </div>
    <div class="avatar avatar-placeholder" style="margin-left:-1.25rem">
      <div class="bg-neutral text-neutral-content w-10 rounded-full"><span class="text-xs">+5</span></div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/avatar/demo.html
- 上游官方文档：https://daisyui.com/components/avatar/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
