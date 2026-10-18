# 日期范围（date-range） · 灰墨 MoH_UI

> 订单与数据筛选的日期范围：两个原生 date input 用 join 拼接、「至」分隔，带今天/近 7 天/近 30 天/本月快捷预设（aria-pressed 选中态，预设填充为一小段 JS），零依赖纯 CSS。

分类：表单　｜　来源：灰墨自研（MIT）　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：订单列表顶部的日期范围筛选条。

【场景】订单列表顶部的日期范围筛选条：两个原生日期框拼成一条，带今天/近 7 天/近 30 天/本月快捷预设，以及查询、重置按钮。
【怎么排】
- 第一行是 join：开始日期输入框 +「至」分隔条 + 结束日期输入框，三者首尾圆角、相邻无缝；
- 第二行从左到右：四个快捷预设按钮（柔和态，默认选中「近 7 天」）、主按钮「查询」、弱化按钮「重置」；
- 所有控件放在 flex flex-wrap 容器里，窄屏自动折行，任何按钮不被挤出屏幕。
【精确规格】
- join 结构：<div class="join"> 包三个 join-item——<input type="date" class="input join-item" aria-label="开始日期">、<span class="join-item flex items-center px-3 bg-base-200 text-sm" aria-hidden="true">至</span>、<input type="date" class="input join-item" aria-label="结束日期">。
- 预设按钮：<button type="button" class="btn btn-soft btn-sm" aria-pressed="true/false">，外层 <div class="flex flex-wrap gap-2" role="group" aria-label="快捷预设">；同一时刻只有一个 aria-pressed="true"。
- 查询用 btn btn-primary，重置用默认 btn；按钮写真实动作，禁止出现 Primary 这类颜色名。
- 预设填充逻辑仅一小段原生 JS（随成品一起复制）：点预设 → 其余按钮 aria-pressed 置 false、当前置 true → 按规则填两个 input 的值——今天：起=止=今天；近 7 天：起=今天往前 6 天，止=今天；近 30 天：起=往前 29 天；本月：起=当月 1 号，止=今天；日期格式化用本地时区（YYYY-MM-DD），不要用 toISOString（UTC 会偏一天）。
- 原生 date input 自带日历面板，不要自己手写日历；颜色全部走主题变量，不写死。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex flex-col gap-3">
  <div class="join">
    <input type="date" id="dr-start" class="input join-item" aria-label="开始日期" value="2026-10-11" />
    <span class="join-item flex items-center px-3 bg-base-200 text-sm" aria-hidden="true">至</span>
    <input type="date" id="dr-end" class="input join-item" aria-label="结束日期" value="2026-10-17" />
  </div>
  <div class="flex flex-wrap items-center gap-2">
    <div class="flex flex-wrap gap-2" role="group" aria-label="快捷预设">
      <button type="button" class="btn btn-soft btn-sm" data-preset="today" aria-pressed="false">今天</button>
      <button type="button" class="btn btn-soft btn-sm" data-preset="7" aria-pressed="true">近 7 天</button>
      <button type="button" class="btn btn-soft btn-sm" data-preset="30" aria-pressed="false">近 30 天</button>
      <button type="button" class="btn btn-soft btn-sm" data-preset="month" aria-pressed="false">本月</button>
    </div>
    <button type="button" class="btn btn-primary">查询</button>
    <button type="button" class="btn">重置</button>
  </div>
</div>
<script>
/* 快捷预设：点按钮 → 其他预设取消选中 → 填好起止日期（今天/近7天/近30天/本月）。
   注意：不要依赖 #hero-stage 定位——「复制成品 HTML」只取 hero-stage 内部，
   复制后的独立文件里没有这个容器，id 要写在组件自身元素上。 */
(function () {
  var start = document.getElementById("dr-start");
  var end = document.getElementById("dr-end");
  var buttons = document.querySelectorAll("[data-preset]");
  if (!start || !end) return;
  function fmt(d) {
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var now = new Date();
      var s = now;
      switch (btn.getAttribute("data-preset")) {
        case "today": s = new Date(now); break;
        case "7": s = new Date(now.getTime() - 6 * 86400000); break;
        case "30": s = new Date(now.getTime() - 29 * 86400000); break;
        case "month": s = new Date(now.getFullYear(), now.getMonth(), 1); break;
      }
      start.value = fmt(s);
      end.value = fmt(now);
    });
  });
})();
</script>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/date-range/demo.html
- 灰墨自研增强组件，基于 daisyUI 底座二次开发。
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
