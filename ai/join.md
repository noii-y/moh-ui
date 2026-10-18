# 组合容器（join） · 灰墨 MoH_UI

> 搜索框（select+input+按钮）、邮箱订阅、分段按钮组（日/周/月）、竖排、响应式竖转横，首尾自动圆角无缝拼接，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/join/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商搜索框（组合容器）。

【场景】电商商品页顶部的搜索框：左边选类别，中间输关键词，右边点搜索，三者无缝连成一条。
【怎么排】
- 外层 <div class="join w-full">；
- 第一个是定宽下拉 <select class="select join-item w-32">，选项：全部类别、商品、店铺；
- 中间是输入框 <input class="input join-item min-w-0 flex-1" placeholder="搜索商品">，用 min-w-0 flex-1 占满剩余宽度并能随容器收缩；
- 最后是主按钮 <button class="btn btn-primary join-item">「搜索」，按钮左侧内联一个放大镜 SVG（h-5 w-5）。
- 三者首尾自动圆角、相邻无间隙，拼成一整条。
【精确规格】
- 下拉宽度固定 w-32，不要让它伸缩；中间输入框必须同时有 min-w-0 和 flex-1，否则窄屏会被内容撑出屏幕。
- 按钮写真实动作「搜索」，禁止出现颜色名。
- 放大镜用内联 SVG（stroke 当前色），不要外链图标库。
- 390px 窄屏：下拉定宽 + 中间框收缩 + 按钮自然宽度，三者一行放下、不横向溢出、不被裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="join w-full">
  <select class="select join-item w-32">
    <option>全部类别</option>
    <option>商品</option>
    <option>店铺</option>
  </select>
  <input class="input join-item min-w-0 flex-1" placeholder="搜索商品" />
  <button class="btn btn-primary join-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
    搜索
  </button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/join/demo.html
- 上游官方文档：https://daisyui.com/components/join/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
