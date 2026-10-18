# 链接（link） · 灰墨 MoH_UI

> 基础下划线链接、全套语义色、hover 才显示下划线、无下划线彩色链接、外链新窗口写法，零依赖纯 CSS。

分类：导航　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/link/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：登录卡片底部的协议与辅助链接区（链接）。

【场景】一张登录 / 注册卡片底部的链接区：正文是一句登录协议说明，里面嵌「用户服务协议」「隐私政策」几处跳转；底部一行左右分开，左边是低频辅助操作「忘记密码？」，右边是引导新用户的主跳转「立即注册」。
【怎么排】
- 用一个带细边框的浅容器（rounded-box border border-base-300 p-5 max-w-lg w-full）把链接区包起来；
- 协议正文用 text-sm leading-relaxed，正文里的协议名链接用 link link-primary（带下划线的主色）；
- 邮箱地址用 link link-hover（只有 hover 才显示下划线），正文里保持干净；
- 外链「帮助中心」用 link 并跟一个外链小图标（h-4 w-4 的 arrow-up-right SVG）；
- 底部一行用 flex justify-between mt-4 text-sm 左右分开：左边「忘记密码？」用 link link-hover，右边「立即注册」用 link link-primary。
【精确规格】
- 是跳转就用真实 <a>，href 写 # 或真实地址；外链新窗口打开必须同时写 target="_blank" 和 rel="noopener"。
- 链接文字写真实动作，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：link、link-primary、link-secondary、link-hover、rounded-box、border-base-300、p-5、max-w-lg、w-full、text-sm、leading-relaxed、flex、justify-between、mt-4、inline-flex、items-center、gap-1、h-4、w-4。
- 颜色全部走 daisyUI 主题变量，不要写死颜色；除展示外不要加任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="rounded-box border border-base-300 p-5 max-w-lg w-full">
  <p class="text-sm leading-relaxed">
    登录即代表你已阅读并同意
    <a class="link link-primary" href="#">《用户服务协议》</a>、
    <a class="link link-primary" href="#">《隐私政策》</a>
    与 <a class="link link-primary" href="#">《儿童个人信息保护规则》</a>；
    遇到账号问题可发邮件到
    <a class="link link-hover" href="mailto:support@example.cn">support@example.cn</a>，
    或访问
    <span class="inline-flex items-center gap-1">
      <a class="link" href="https://example.cn" target="_blank" rel="noopener">帮助中心</a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
    </span>。
  </p>
  <div class="flex justify-between mt-4 text-sm">
    <a class="link link-hover" href="#">忘记密码？</a>
    <a class="link link-primary" href="#">还没有账号？立即注册</a>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/link/demo.html
- 上游官方文档：https://daisyui.com/components/link/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
