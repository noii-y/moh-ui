# 文件上传（file-input） · 灰墨 MoH_UI

> 基础选择、fieldset 字段标签与格式说明、accept 限定类型、multiple 多选、幽灵样式、尺寸 xs~lg、语义状态色、禁用，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/file-input/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：个人资料页上传头像区（文件上传）。

【场景】个人资料页里的上传头像区：字段标签在上、上传框占满整行，下面写清格式与大小限制，最后放一个「保存修改」主按钮。
【怎么排】
- 用 fieldset.fieldset（w-full max-w-md）包住上传控件，legend（fieldset-legend）写「上传头像」；
- 上传框用 <input type="file" class="file-input w-full" accept="image/*" />，只允许选择图片；
- 控件下方一行 fieldset-label 写「支持 JPG / PNG，不超过 2MB」；
- 上传框下方用 flex flex-wrap gap-2 放一个主按钮「保存修改」（btn btn-primary），整组竖向堆叠、左对齐；
- 选中文件回显、上传进度属于业务逻辑，本场景不要写任何 JS。
【精确规格】
- 用到的类全部真实存在：file-input、w-full、max-w-md、fieldset、fieldset-legend、fieldset-label、flex-wrap、gap-2、btn-primary。
- 文案写真实业务动作（保存修改、上传头像），禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 颜色全部走 daisyUI 主题变量，不要写死颜色；手机窄屏上传框 w-full 占满，不横向溢出。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<fieldset class="fieldset w-full max-w-md">
  <legend class="fieldset-legend">上传头像</legend>
  <input type="file" class="file-input w-full" accept="image/*" />
  <p class="fieldset-label">支持 JPG / PNG，不超过 2MB</p>
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">保存修改</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/file-input/demo.html
- 上游官方文档：https://daisyui.com/components/file-input/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
