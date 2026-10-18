# 悬浮动作按钮 FAB / Speed Dial

> 搬运自 **daisyUI**（<https://daisyui.com/components/fab/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

FAB（Floating Action Button）是一个钉在屏幕角落的主按钮，聚焦或悬停时展开一圈常用动作（Speed Dial），适合内容平台、后台这类「新建」「发布」主入口。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选在 [demo.html](./demo.html) 点「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，再用「复制成品 HTML」。
3. 真实项目里 `.fab` 默认 `position:fixed` 钉在视口右下角；详情页为了不遮正文临时加了 `static`，你自己页面里**记得去掉它**。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 容器 | `<div class="fab">…</div>` |
| 主按钮（必须这样） | `<div tabindex="0" role="button" class="btn btn-circle btn-lg btn-primary">…</div>` |
| 展开的动作 | 后面跟若干 `<button class="btn btn-circle btn-lg">…</button>` |
| 带文字标签的动作 | `<div>标签 <button …/></div>` |
| 花瓣形圆弧展开 | 容器加 `fab-flower` |
| 单个悬浮按钮 | 容器里只放一个圆形按钮 |
| 可点可键盘开合版 | 用原生 `<details>` 当主按钮（点 / Enter / Space 开合），见 demo「真实可点」 |

## 使用要点（给 AI 与新手的提醒）

- **主按钮用 `div[tabindex][role=button]` 而不是 `<button>`**：这是 daisyUI 为绕开 Safari 聚焦 bug 的标准写法，照抄即可。
- **展开零 JS**：子按钮平时隐藏，主按钮 `:focus-within` 时纯 CSS 展开，不要为了展开自己写脚本。
- **键盘与焦点**：纯 CSS 版下 `Tab` 聚焦主按钮即展开、继续 `Tab` 依次进入各动作、焦点移出整组自动收起；**没有 `Esc` 收起、鼠标点主按钮也不开关**。要「点一下开合 + 键盘开关 + 读屏自动播报状态」用原生 `<details>` 当主按钮；它收起时菜单项不进 `Tab` 序，但同样没有 `Esc`、没有点外部收起。想要 `Esc` / light-dismiss / 焦点自动返回，需要 HTML Popover（`popovertarget`）或 `<dialog>`，要额外 JS。
- 主按钮加 `aria-haspopup="menu"` 与 `aria-controls`（指向外层菜单容器 id）；纯 CSS 开合无法自动更新 `aria-expanded`，静态演示写 `true` 仅对应当前画面。
- 纯图标按钮必须加 `aria-label`；图标用 `h-6 w-6` 单色 SVG，不要用 emoji。
- 一个页面通常只放一个 FAB，别和底部导航、主按钮职责重复。
- 详情页里为了截图能看到子按钮加了一段「强制展开」的演示样式，**不要复制到你的项目**。

## 兼容性

- 纯 CSS 实现（展开靠 `:focus-within`），无 JavaScript、无框架依赖；details 版开合为原生 HTML 能力。
- 颜色全部走 daisyUI 主题变量，深浅色主题自动适配。
