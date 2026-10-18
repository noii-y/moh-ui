# 代码块（code-block） · 灰墨 MoH_UI

> 教程与文档里的代码块：语言标签 + 一键复制 + 语法高亮，关键词/字符串/注释/数字配色跟随 daisyUI 主题，支持长代码横向滚动；与零依赖的 mockup-code 互补（需 highlight.js CDN）。

分类：数据展示　｜　来源：灰墨自研（MIT）　｜　依赖：highlight.js@11 (CDN)

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：教程文档里的 JavaScript 代码块。

【场景】教程或文档里的一个 JavaScript 代码块：深色窗口，顶部左边语言标签、右边「复制」按钮，下面是带语法高亮的真实代码。
【怎么排】
- 深色窗口外壳：bg-neutral + text-neutral-content，圆角、overflow-hidden；
- 顶栏左右两端：左边语言标签「JavaScript」，右边一个小幽灵按钮「复制」，点击成功后短暂显示「已复制」再还原；
- 代码区等宽字体，长行不换行、横向滚动（overflow-x-auto），不要换行打散缩进。
【精确规格】
- 先在页面里引入一行 highlight.js CDN 脚本：https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11/build/highlight.min.js （common 版含常用语言）；不要引它的官方主题 CSS。
- 高亮 token 配色写在组件内联样式里，颜色取 daisyUI 变量：关键词 --color-primary、字符串 --color-success、数字 --color-warning、注释用 --color-neutral-content 半透明斜体、函数名 --color-secondary；禁止写死 hex。
- 初始化：hljs.highlightElement(document.querySelector("code"))；复制按钮用 navigator.clipboard.writeText，失败兜底 execCommand("copy")，按钮加 aria-label。
- <code> 里若展示 HTML，尖括号必须转义成 < >；代码内容写真实可读的片段，注释用中文。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<!-- highlight.js（CDN，需联网；common 版含常用语言）。不引它的官方主题 CSS，token 配色由下方内联样式控制 -->
      <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11/build/highlight.min.js"></script>
      <style>
        .cb-window .hljs-keyword,
        .cb-window .hljs-built_in,
        .cb-window .hljs-type { color: var(--color-primary); font-weight: 600; }
        .cb-window .hljs-string,
        .cb-window .hljs-attr { color: var(--color-success); }
        .cb-window .hljs-comment,
        .cb-window .hljs-quote { color: var(--color-neutral-content); opacity: .55; font-style: italic; }
        .cb-window .hljs-number,
        .cb-window .hljs-literal { color: var(--color-warning); }
        .cb-window .hljs-title,
        .cb-window .hljs-function,
        .cb-window .hljs-section { color: var(--color-secondary); font-weight: 600; }
        .cb-window .hljs-params,
        .cb-window .hljs-variable,
        .cb-window .hljs-property { color: var(--color-neutral-content); }
        .cb-window pre { font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace); }
        .cb-window pre code.hljs { background: transparent; padding: 0; }
        .cb-window .cb-copy { color: var(--color-neutral-content); }
        .cb-window .cb-copy:hover { color: var(--color-neutral-content); background-color: color-mix(in oklab, var(--color-neutral-content) 12%, transparent); }
      </style>
      <div class="cb-window bg-neutral text-neutral-content rounded-box overflow-hidden max-w-2xl">
        <div class="flex items-center justify-between px-4 py-2 text-xs" style="border-bottom:1px solid rgba(255,255,255,.12);">
          <span>JavaScript</span>
          <button type="button" class="btn btn-xs btn-ghost cb-copy" aria-label="复制这段代码">复制</button>
        </div>
        <pre class="p-4 overflow-x-auto text-sm leading-relaxed" style="margin:0;"><code class="language-javascript">// 读 daisyUI 主题变量，初始化折线图
const css = getComputedStyle(document.documentElement);
const primary = css.getPropertyValue("--color-primary").trim();

const chart = echarts.init(document.getElementById("chart-trend"));
chart.setOption({
  xAxis: { type: "category", data: ["5月", "6月", "7月"] },
  yAxis: { type: "value" },
  series: [{ type: "line", data: [820, 932, 901], lineStyle: { color: primary } }]
});
window.addEventListener("resize", () => chart.resize());</code></pre>
      </div>
      <script>
      (function () {
        function initAll() {
          if (window.hljs) {
            document.querySelectorAll(".cb-window code").forEach(function (el) {
              try { hljs.highlightElement(el); } catch (e) {}
            });
          }
          document.querySelectorAll(".cb-window .cb-copy").forEach(function (btn) {
            if (btn.dataset.wired) return;
            btn.dataset.wired = "1";
            btn.addEventListener("click", function () {
              var text = btn.closest(".cb-window").querySelector("code").textContent;
              function done() {
                btn.textContent = "已复制";
                setTimeout(function () { btn.textContent = "复制"; }, 1500);
              }
              function legacy() {
                var ta = document.createElement("textarea");
                ta.value = text;
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand("copy"); done(); } catch (e) {}
                ta.remove();
              }
              if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(done, legacy);
              } else {
                legacy();
              }
            });
          });
        }
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", initAll);
        } else {
          initAll();
        }
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

本组件额外依赖：highlight.js@11 (CDN)，需要在参考结构之外再引入对应 CDN：

- https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11/build/highlight.min.js


## 更多

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/code-block/demo.html
- 灰墨自研增强组件，基于 daisyUI 底座二次开发。
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
