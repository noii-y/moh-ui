# 按钮（button） · 灰墨 MoH_UI

> 颜色/尺寸/描边/虚线/激活/禁用/图标/加载/玻璃等全部变体，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/button/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：表单底部操作栏（按钮）。

【场景】一张表单（比如编辑资料、写文章）底部的操作按钮区。
【怎么排】一个操作区只放一个主按钮，让用户一眼知道该点哪个：
- 主操作「保存修改」用实心主色按钮（btn btn-primary）；
- 次要的「存为草稿」用默认按钮（btn）；
- 「预览」弱化为纯文字按钮（btn btn-ghost）；
- 不可恢复的「删除」用柔和红色提示风险（btn btn-soft btn-error）。
- 按钮在一行里排列，窄屏自动换行，任何一个按钮都不能被挤出屏幕或被裁切。
【精确规格】
- 外层容器：<div class="flex flex-wrap items-center gap-2">；不要用 ml-auto 把按钮推到右边（手机端会把按钮挤出屏幕）。
- 按钮上写真实中文动作，禁止出现 Primary / Success 这类颜色名。
- 只有图标、没有文字的按钮必须加 aria-label（如 aria-label="删除"）。
- 颜色全部走 daisyUI 主题变量，不要写死颜色，切换主题时自动跟随。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-wrap items-center gap-2">
  <button class="btn btn-primary">保存修改</button>
  <button class="btn">存为草稿</button>
  <button class="btn btn-ghost">预览</button>
  <button class="btn btn-soft btn-error">删除</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/button/demo.html
- 上游官方文档：https://daisyui.com/components/button/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
