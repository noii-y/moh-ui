# 通知浮层（toast） · 灰墨 MoH_UI

> 九宫格弹出位置、多条纵向堆叠、带图标与带按钮的通知，零依赖纯 CSS。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/toast/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：操作后右下角的通知堆叠（通知浮层）。

【场景】用户在系统里做完一个操作后，屏幕右下角自动弹出的通知浮层，多条通知自动纵向堆叠。
【怎么排】外层 div.toast（真实项目里它是 position:fixed，自动贴在屏幕角落；详情页静态展示才加 position:static），里面放一条或多条 div[role=alert].alert：成功结果用 alert-success，普通告知用 alert-info；每条写清发生了什么事。
【精确规格】
- 位置由外层类组合决定：垂直 toast-top / toast-middle / toast-bottom（默认底部）× 水平 toast-start / toast-center / toast-end（默认居右）。
- 本页 .toast 加了内联 position:static 仅为在小舞台里排开展示；其中九宫格的 middle/center 位置类自带 --toast-x/--toast-y 位移变量、静态流里会重叠，这些变体额外加 --toast-x:0;--toast-y:0 清零；复制进真实项目后删掉这些内联，.toast 会自动 fixed 贴到对应角落。
- 多条通知：往 .toast 里继续加 .alert，自动纵向堆叠、间距 8px，不要自己写 margin。
- 文案写真实事件（如「保存成功，可在订单列表查看」「收到 3 条新消息」），禁止出现 Success 这类颜色名；带按钮时按钮写真实动作（查看物流）。
- 真实交互：toast 由 JS 动态创建、停留 3~5 秒后自动移除；本页为静态展示形态。一次最多两三条。
- 颜色全部走 daisyUI 主题变量，不要写死。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="toast" style="position:static">
  <div role="alert" class="alert alert-success">
    <span>保存成功，可在「订单列表」查看</span>
  </div>
  <div role="alert" class="alert alert-info">
    <span>收到 3 条新消息</span>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/toast/demo.html
- 上游官方文档：https://daisyui.com/components/toast/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
