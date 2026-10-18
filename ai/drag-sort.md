# 拖拽排序（drag-sort） · 灰墨 MoH_UI

> 后台菜单与列表的拖拽排序：HTML5 拖拽换序、把手聚焦后 ↑/↓ 键盘移动、目标位高亮、aria-live 播报移动结果（换序为一小段原生 JS，样式零依赖）。

分类：数据展示　｜　来源：灰墨自研（MIT）　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：后台菜单管理的排序列表（拖拽排序）。

【场景】后台系统的「菜单管理」页：管理员按使用频率调整后台菜单的显示顺序，4 个菜单项可上下拖动换序。
【怎么排】
- 一列纵向排列的卡片行：每行左侧一个拖拽把手（单色 SVG 六点 grip 图标，不要用 ≡ 字符），中间是菜单名称，行与行间距 4px。
- 拖拽中被拖动项半透明，当前目标行主色描边高亮；拖动过程中列表实时跟随，松开后顺序即生效。
- 把手是一个小方形幽灵按钮（btn btn-ghost btn-sm btn-square），可以用 Tab 聚焦，聚焦后按 ↑/↓ 键上下移动这一项，焦点留在原把手上。
- 屏幕阅读器通过隐藏的 aria-live 区域播报「已将 X 移动到第 N 位」。
【精确规格】
- 每行是 <li draggable="true" data-label="真实名称">，类名：flex items-center gap-2 rounded-box border border-base-300 bg-base-100 p-3；ul 用 flex flex-col gap-1，内联去掉列表圆点与默认边距。
- 把手按钮 aria-label 写「拖拽排序：+ 行名」；行名用真实中文：用户管理 / 角色与权限 / 审计日志 / 系统设置。
- 行为由页面内嵌一小段原生 JS 完成（不引入任何第三方拖拽库）：dragstart 给被拖行加 opacity-50；dragover 里 e.preventDefault()，按鼠标在目标行上半部/下半部决定 insertBefore 位置，并给目标行切换 border-primary 高亮；dragend 清除高亮、读出行的新位置并播报；键盘在把手 keydown ArrowUp/ArrowDown 时相邻 insertBefore 并播报。
- 隐藏播报区域：aria-live="polite"，最小内联样式视觉隐藏（position:absolute; 1px 尺寸; clip-path:inset(50%)）。
- 所有颜色走 daisyUI 主题变量，不写死颜色；图标全部内联单色 SVG。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<ul id="menu-sort" class="flex flex-col gap-1 max-w-md w-full" style="list-style:none;margin:0;padding:0">
  <li draggable="true" data-label="用户管理" class="flex items-center gap-2 rounded-box border border-base-300 bg-base-100 p-3">
    <button type="button" class="btn btn-ghost btn-sm btn-square sort-handle" style="cursor:grab" aria-label="拖拽排序：用户管理" aria-describedby="menu-sort-live">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>
    </button>
    <span class="flex-1 text-sm">用户管理</span>
  </li>
  <li draggable="true" data-label="角色与权限" class="flex items-center gap-2 rounded-box border border-base-300 bg-base-100 p-3">
    <button type="button" class="btn btn-ghost btn-sm btn-square sort-handle" style="cursor:grab" aria-label="拖拽排序：角色与权限" aria-describedby="menu-sort-live">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>
    </button>
    <span class="flex-1 text-sm">角色与权限</span>
  </li>
  <li draggable="true" data-label="审计日志" class="flex items-center gap-2 rounded-box border border-base-300 bg-base-100 p-3">
    <button type="button" class="btn btn-ghost btn-sm btn-square sort-handle" style="cursor:grab" aria-label="拖拽排序：审计日志" aria-describedby="menu-sort-live">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>
    </button>
    <span class="flex-1 text-sm">审计日志</span>
  </li>
  <li draggable="true" data-label="系统设置" class="flex items-center gap-2 rounded-box border border-base-300 bg-base-100 p-3">
    <button type="button" class="btn btn-ghost btn-sm btn-square sort-handle" style="cursor:grab" aria-label="拖拽排序：系统设置" aria-describedby="menu-sort-live">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg>
    </button>
    <span class="flex-1 text-sm">系统设置</span>
  </li>
</ul>
<div id="menu-sort-live" aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap"></div>
<script>
(function () {
  var list = document.getElementById('menu-sort');
  var live = document.getElementById('menu-sort-live');
  if (!list || !live) return;
  var items = function () {
    return Array.prototype.slice.call(list.children);
  };
  var dragging = null;

  function speak(text) {
    live.textContent = '';
    requestAnimationFrame(function () { live.textContent = text; });
  }

  list.addEventListener('dragstart', function (e) {
    var item = e.target.closest('li');
    if (!item || item.hasAttribute('aria-disabled')) return;
    dragging = item;
    item.classList.add('opacity-50');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', item.dataset.label || '');
  });

  list.addEventListener('dragover', function (e) {
    e.preventDefault();
    if (!dragging) return;
    var item = e.target.closest('li');
    if (!item || item === dragging || item.hasAttribute('aria-disabled')) return;
    var rect = item.getBoundingClientRect();
    var after = e.clientY > rect.top + rect.height / 2;
    list.insertBefore(dragging, after ? item.nextSibling : item);
    items().forEach(function (el) { el.classList.remove('border-primary'); });
    item.classList.add('border-primary');
  });

  list.addEventListener('drop', function (e) { e.preventDefault(); });

  list.addEventListener('dragend', function () {
    if (!dragging) return;
    var label = dragging.dataset.label;
    var pos = items().indexOf(dragging) + 1;
    dragging.classList.remove('opacity-50');
    items().forEach(function (el) { el.classList.remove('border-primary'); });
    dragging = null;
    speak('已将 ' + label + ' 移动到第 ' + pos + ' 位');
  });

  list.addEventListener('keydown', function (e) {
    var handle = e.target.closest('.sort-handle');
    if (!handle) return;
    var item = handle.closest('li');
    if (!item || item.hasAttribute('aria-disabled')) return;
    var arr = items();
    var idx = arr.indexOf(item);
    if (e.key === 'ArrowUp' && idx > 0) {
      e.preventDefault();
      list.insertBefore(item, arr[idx - 1]);
      speak('已将 ' + item.dataset.label + ' 移动到第 ' + idx + ' 位');
      handle.focus();
    } else if (e.key === 'ArrowDown' && idx < arr.length - 1) {
      e.preventDefault();
      list.insertBefore(item, arr[idx + 2] || null);
      speak('已将 ' + item.dataset.label + ' 移动到第 ' + (idx + 2) + ' 位');
      handle.focus();
    }
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/drag-sort/demo.html
- 灰墨自研增强组件，基于 daisyUI 底座二次开发。
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
