# 页脚（footer） · 灰墨 MoH_UI

> 电商完整页脚（品牌简介+客服/邮箱/电话/反馈四个服务入口+四列链接+版权行）、多列链接、品牌区、邮件订阅表单、居中深色版权条、双行式版权等形态，零依赖纯 CSS。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/footer/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商网站完整页脚。

【场景】一个电商网站落在页面最底部的完整页脚：左边品牌名加简介和四个服务入口（客服、邮箱、电话、反馈），右边四列分组帮助链接，最下面一行版权。
【怎么排】
- 外层用 <footer class="footer sm:footer-horizontal text-base-content">，默认手机纵排、≥640px 自动横排，不要写 fixed 固定，让它跟在页面内容后面；
- 最左边一个 <aside>：品牌名用 <span class="text-xl font-bold">灰墨商城</span>，下面一句简介，再下面一排四个圆形服务图标按钮（btn btn-ghost btn-circle btn-sm，单色内联 SVG，每个都带 aria-label）：客服画对话气泡（aria-label="联系客服"）、邮箱画信封（aria-label="发送邮件"）、电话画听筒（aria-label="拨打客服电话"）、反馈画留言气泡（aria-label="意见反馈"）；
- 右边每个分组一个 <nav>，列标题写 <h6 class="footer-title">购物指南</h6>，下面一组 <a class="link link-hover">新手指南</a>，分组用真实业务名（购物指南 / 配送与售后 / 关于我们 / 联系客服）；
- footer 之外、下面单独一行版权：<div class="border-t pt-4 text-sm text-base-content/60">© 2026 灰墨商城 保留所有权利</div>，用 border-t 顶一条分隔线；
- 手机窄屏（约 390px）下各列自动纵向堆叠，链接和简介都不能横向溢出或被裁切。
【精确规格】
- 文案写真实业务名与动作（新手指南 / 配送说明 / 退换货政策 / 在线客服 / 意见反馈），禁止出现 Primary / 成功 这类颜色名当文案。
- 纯图标按钮必须带 aria-label；图标语义要对得上入口用途（客服=对话气泡、邮箱=信封、电话=听筒、反馈=留言气泡），不画可识别的第三方品牌 logo。
- 用到的类全部真实存在：footer、sm:footer-horizontal、footer-title、link、link-hover、aside、nav、text-xl、font-bold、text-base-content、btn、btn-ghost、btn-circle、btn-sm、flex、gap-2、border-t、pt-4、text-sm、text-base-content/60、h-5、w-5。
- 颜色全部走 daisyUI 主题变量，不要写死颜色；除订阅/客服跳转外不要加业务 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<footer class="footer sm:footer-horizontal text-base-content">
  <aside>
    <span class="text-xl font-bold">灰墨商城</span>
    <p>甄选好物，正品保障。<br />下单后 48 小时内发货，七天无理由退换。</p>
    <div class="flex gap-2">
      <button class="btn btn-ghost btn-circle btn-sm" aria-label="联系客服">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 20l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>
      </button>
      <button class="btn btn-ghost btn-circle btn-sm" aria-label="发送邮件">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
      </button>
      <button class="btn btn-ghost btn-circle btn-sm" aria-label="拨打客服电话">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.382-1.21l1.294-.97c.362-.271.526-.734.417-1.173L6.313 2.852a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.25v2.5z"/></svg>
      </button>
      <button class="btn btn-ghost btn-circle btn-sm" aria-label="意见反馈">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 9h8M8 13h6"/></svg>
      </button>
    </div>
  </aside>
  <nav>
    <h6 class="footer-title">购物指南</h6>
    <a class="link link-hover">新手指南</a>
    <a class="link link-hover">如何下单</a>
    <a class="link link-hover">支付方式</a>
  </nav>
  <nav>
    <h6 class="footer-title">配送与售后</h6>
    <a class="link link-hover">配送说明</a>
    <a class="link link-hover">退换货政策</a>
    <a class="link link-hover">发票服务</a>
  </nav>
  <nav>
    <h6 class="footer-title">关于我们</h6>
    <a class="link link-hover">商家入驻</a>
    <a class="link link-hover">加入我们</a>
    <a class="link link-hover">联系方式</a>
  </nav>
  <nav>
    <h6 class="footer-title">联系客服</h6>
    <a class="link link-hover">在线客服</a>
    <a class="link link-hover">常见问题</a>
    <a class="link link-hover">意见反馈</a>
  </nav>
</footer>
<div class="border-t pt-4 text-sm text-base-content/60">© 2026 灰墨商城 保留所有权利</div>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/footer/demo.html
- 上游官方文档：https://daisyui.com/components/footer/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
