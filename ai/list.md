# 列表（list） · 灰墨 MoH_UI

> 收货地址单选列表（默认标签+编辑删除）、带图标设置列表、紧凑条目列表（list-col-grow），零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/list/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：结算页收货地址列表（列表）。

【场景】电商结算页的收货地址选择列表：单选决定本次商品寄到哪个地址，当前选中项标出「默认」，其余项可编辑或删除。
【怎么排】
- 外层 <ul class="list bg-base-100 rounded-box shadow-md">，第一行是小标题（p-4 pb-2 text-xs opacity-60 tracking-wide），之后每个地址是一个 <li class="list-row">。
- 每行内部顺序：圆形单选 radio → 中间信息块（姓名电话一行 font-medium，地址一行 text-xs opacity-60）→ 末尾操作按钮组 flex gap-1。
- 中间信息块是第二个子元素，会自动撑开剩余宽度；末尾按钮不挤压它。
- 单选 input 必须加 aria-label（如「选择默认地址」），保证键盘和读屏可用。
- 选中行旁边加 badge badge-sm badge-soft badge-primary「默认」；未选中行不加。
【精确规格】
- 单选框用 <input type="radio" name="address" class="radio" checked>（同一 name 组互斥）。
- 操作按钮用 btn btn-xs btn-ghost：「编辑」默认幽灵，「删除」加 text-error 但不要用实心红。
- 所有文案写真实中文：收货人姓名、手机号、详细地址；不要用颜色名当按钮文字。
- 手机 390px 下地址文字可以折行，但整行不溢出、按钮不被裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<ul class="list bg-base-100 rounded-box shadow-md">
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">选择收货地址</li>

  <li class="list-row">
    <input type="radio" name="address" class="radio" checked aria-label="选择默认地址" />
    <div>
      <div class="font-medium">
        张伟 138 2716 8842
        <span class="badge badge-sm badge-soft badge-primary ml-1">默认</span>
      </div>
      <div class="text-xs opacity-60">湖北省武汉市洪山区光谷大道 100 号，步行街 B 座 1203</div>
    </div>
    <div class="flex gap-1">
      <button class="btn btn-xs btn-ghost">编辑</button>
      <button class="btn btn-xs btn-ghost text-error">删除</button>
    </div>
  </li>

  <li class="list-row">
    <input type="radio" name="address" class="radio" aria-label="选择深圳地址" />
    <div>
      <div class="font-medium">李娜 139 0710 2266</div>
      <div class="text-xs opacity-60">广东省深圳市南山区科技园南路 88 号 3 栋 502</div>
    </div>
    <div class="flex gap-1">
      <button class="btn btn-xs btn-ghost">编辑</button>
      <button class="btn btn-xs btn-ghost text-error">删除</button>
    </div>
  </li>

  <li class="list-row">
    <input type="radio" name="address" class="radio" aria-label="选择北京地址" />
    <div>
      <div class="font-medium">王强 136 9990 1122</div>
      <div class="text-xs opacity-60">北京市朝阳区望京 SOHO T3 座 1806</div>
    </div>
    <div class="flex gap-1">
      <button class="btn btn-xs btn-ghost">编辑</button>
      <button class="btn btn-xs btn-ghost text-error">删除</button>
    </div>
  </li>
</ul>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/list/demo.html
- 上游官方文档：https://daisyui.com/components/list/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
