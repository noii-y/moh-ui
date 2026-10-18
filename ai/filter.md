# 筛选条（filter） · 灰墨 MoH_UI

> 筛选条：form + radio 单选分类、checkbox 多选标签、无 form 时用 filter-reset 当「全部」，选中高亮并自动露出重置按钮，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/filter/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：电商商品列表筛选条（筛选条）。

【场景】电商商品列表（或文章列表、内容流）顶部的筛选条：上面一排单选分类，下面一排多选标签。
【怎么排】
- 外层一个 <div class="flex flex-col gap-4"> 把两行隔开；
- 每行是一个 <form class="filter flex-wrap">：单选行里是一组 <input type="radio" name="cat" class="btn" aria-label="…">，多选行里是一组 <input type="checkbox" name="tag" class="btn" aria-label="…">；
- 每行末尾放一个 <input type="reset" class="btn btn-square" value="×"> 作为清除；
- 选中的分类按钮高亮，其余单选项自动收窄，重置按钮自动出现；多选行各项始终并列可见。
【精确规格】
- 单选项：全部、数码家电、服饰鞋包、家居生活、美妆个护，name 统一为 cat；其中「数码家电」默认 checked。
- 多选项：包邮、促销、新品、旗舰店，name 统一为 tag；其中「包邮」默认 checked。
- 每个 radio / checkbox 都要写 aria-label（按钮文字就显示在这里）；重置按钮补 aria-label="清除筛选"。
- 诚实边界：filter 这套类只做「选中高亮 + 露出重置按钮」的纯 CSS 外观，真正按选中条件过滤下方列表项必须另外写 JS（监听 change 控制列表显隐），不要声称纯 CSS 就能过滤列表。
- 窄屏选项多时自动 flex-wrap 换行，任何按钮不得被挤出屏幕或裁切。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-4">
  <form class="filter flex-wrap">
    <input class="btn" type="radio" name="cat" aria-label="全部" />
    <input class="btn" type="radio" name="cat" aria-label="数码家电" checked />
    <input class="btn" type="radio" name="cat" aria-label="服饰鞋包" />
    <input class="btn" type="radio" name="cat" aria-label="家居生活" />
    <input class="btn" type="radio" name="cat" aria-label="美妆个护" />
    <input class="btn btn-square" type="reset" value="×" aria-label="清除筛选" />
  </form>
  <form class="filter flex-wrap">
    <input class="btn" type="checkbox" name="tag" aria-label="包邮" checked />
    <input class="btn" type="checkbox" name="tag" aria-label="促销" />
    <input class="btn" type="checkbox" name="tag" aria-label="新品" />
    <input class="btn" type="checkbox" name="tag" aria-label="旗舰店" />
    <input class="btn btn-square" type="reset" value="×" aria-label="清除筛选" />
  </form>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/filter/demo.html
- 上游官方文档：https://daisyui.com/components/filter/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
