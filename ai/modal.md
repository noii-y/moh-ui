# 对话框（modal） · 灰墨 MoH_UI

> 删除确认、右上角关闭、底部抽屉、自定义宽度、纯信息提示等形态，推荐 dialog+showModal 用法，零依赖纯 CSS。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/modal/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：删除收货地址的确认对话框（对话框）。

【场景】用户在收货地址列表点了「删除」后弹出的确认对话框：标题直接问是否确认，正文说清后果，底部两个按钮让用户决定。
【怎么排】居中弹窗 modal-box：标题加粗一行，正文一句说明后果，底部 modal-action 按钮组自动右对齐——次要的「取消」用默认按钮，危险的「确认删除」用 btn-error；整层带半透明遮罩，真实项目里按 Esc 或点遮罩即可关闭。
【精确规格】
- 推荐实现：<dialog id="地址删除确认" class="modal">，用 document.getElementById('地址删除确认').showModal() 打开；Esc 关闭、背景锁定、焦点圈定由 dialog 原生提供；关闭按钮包一层 <form method="dialog">。
- 本页静态展示用复选框法（无 JS）：<input type="checkbox" checked class="modal-toggle"> 必须紧跟 <div class="modal" role="dialog">，内部放 .modal-box（标题 h3.text-lg.font-bold + p.py-4 正文 + div.modal-action 按钮组）。
- 详情页给 .modal 加了内联 style="position:static;pointer-events:none"，仅为在小舞台内排开展示；复制进真实项目后删掉这两行内联样式，弹窗会自动 fixed 铺满全屏并带遮罩。
- 文案写真实决策问题与后果（确认删除这条收货地址？此操作不可撤销，删除后该地址将无法找回），按钮写真实动作（取消 / 确认删除），禁止出现 Error / 红色 这类颜色名。
- 只有删除、清空这类危险确认才用 btn-error；普通弹窗主操作用 btn-primary。
- 每个弹窗 id 唯一；颜色全部走 daisyUI 主题变量，不要写死。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<input type="checkbox" checked class="modal-toggle" aria-hidden="true" tabindex="-1" />
<div class="modal" role="dialog" style="position:static;pointer-events:none">
  <div class="modal-box">
    <h3 class="text-lg font-bold">确认删除这条收货地址？</h3>
    <p class="py-4">此操作不可撤销，删除后该地址将无法找回。</p>
    <div class="modal-action">
      <button class="btn">取消</button>
      <button class="btn btn-error">确认删除</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/modal/demo.html
- 上游官方文档：https://daisyui.com/components/modal/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
