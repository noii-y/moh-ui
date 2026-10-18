# 纯净灰阶（mo-slate） · 灰墨 MoH_UI

> 无彩色灰阶文档中心整页。浅灰白底 + 深炭文字，零色相专注阅读，适合文档站 / 帮助中心 / 写作效率类产品；挂 data-theme="mo-slate" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-slate/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 全页零色相：primary 是深炭 #262626（主按钮 / 品牌方块 / 右侧目录当前条），secondary / accent / neutral 全是纯灰阶（#737373 / #525252 / #1a1a1a），正文页面里不要出现蓝绿紫；业务需要品牌色时在项目里自行覆盖 --color-primary，不改主题文件本身。
- 语义色是唯一例外：info 蓝 / warning 琥珀 / success 绿只给文档提示块 alert-info、alert-warning 用，绝不给按钮、徽章、链接上色。
- 三栏阅读布局：左 220px 目录树（原生 details 分组折叠，零 JS）+ 正文 + 右 168px 本页目录；正文 max-width 1280px 居中，行高 1.7、正文 14px，H1 26px、H2 18px，正文 opacity .85——一切为长文阅读服务。
- 目录选中态不用主色底：侧栏当前项用 base-300 #f0f0f0 灰底 + 加粗，右侧 toc 当前项用 2px 深炭左边条 + 实色不透明；未读链接 opacity .65。
- 代码块用 base-300 浅灰底（#f0f0f0）+ 同色细边 + 等宽字体 var(--font-mono)、12.5px 行距 1.6，长行容器 overflow-x:auto；不做深色代码块（本主题是浅色纸质取向）。
- 底色极浅三层：页面底 #f8f8f8、顶栏与卡片白 #ffffff、悬浮 / 代码块 #f0f0f0，层次几乎只靠明度差，边框 1px 极淡，圆角 0.5rem，不压阴影。
- 窄屏 ≤900px：右侧 toc 整块隐藏、顶栏搜索框隐藏，左侧目录树折成一行 chip 式分组标签（summary 加灰边圆角），表格包 .tbl-wrap 横滑，正文 padding 收到 20px 14px。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-slate">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>主题变量一览 · 灰墨文档（mo-slate 主题案例）</title>
  <meta name="description" content="灰墨 mo-slate 主题完整页面案例：无彩色灰阶文档站整页。本页只依赖 daisyUI 与 mo-slate 主题，展示真实文档中心效果。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-slate · 纯净灰阶（浅色）—— 文档 / 帮助中心主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-slate"> 即整站换肤。
   无彩色零色相：正文与按钮全部用中性灰，语义色只保留给提示块，专注阅读。 */

[data-theme="mo-slate"] {
  /* 底与纸：浅灰三层，层次靠明度不靠描边 */
  --color-base-100: #f8f8f8;
  --color-base-200: #ffffff;
  --color-base-300: #f0f0f0;
  --color-base-content: #1a1a1a;

  /* 主色：深炭（不是死黑，用于主按钮与选中态，浅底上不刺眼） */
  --color-primary: #262626;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：纯灰阶，零色相 */
  --color-secondary: #737373;
  --color-secondary-content: #ffffff;
  --color-accent: #525252;
  --color-accent-content: #ffffff;

  --color-neutral: #1a1a1a;
  --color-neutral-content: #ffffff;

  /* 语义色：保留色相但压低饱和，只给文档提示块用 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，纸质文档取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
  </style>
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 14px; line-height: 1.7; }
    .topbar { display: flex; align-items: center; gap: 14px; padding: 10px 24px; background: var(--color-base-200); border-bottom: 1px solid var(--color-base-300); position: sticky; top: 0; }
    .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 15px; flex: none; }
    .brand-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .doc-name { font-size: 13px; opacity: .6; flex: none; }
    .search { flex: 1; max-width: 460px; margin: 0 auto; display: flex; }
    .search label { flex: 1; display: flex; align-items: center; gap: 8px; }
    .search input { flex: 1; min-width: 0; background: none; border: 0; outline: none; color: inherit; font-size: 13px; }
    .top-links { display: flex; align-items: center; gap: 12px; flex: none; margin-left: auto; font-size: 13px; }
    .top-links a { color: inherit; text-decoration: none; opacity: .7; }
    .shell { display: grid; grid-template-columns: 220px minmax(0, 1fr) 168px; gap: 0; max-width: 1280px; margin: 0 auto; }
    .side { padding: 24px 16px; border-inline-end: 1px solid var(--color-base-300); }
    .side details { margin-bottom: 6px; }
    .side summary { cursor: pointer; font-size: 13px; font-weight: 600; opacity: .75; padding: 4px 10px; list-style: none; display: flex; align-items: center; gap: 6px; }
    .side summary::before { content: "›"; display: inline-block; transition: transform .15s; }
    .side details[open] summary::before { transform: rotate(90deg); }
    .side ul.menu { padding: 0; }
    .side ul.menu li a { display: block; padding: 4px 10px 4px 22px; font-size: 13px; border-radius: .25rem; text-decoration: none; color: inherit; }
    .side ul.menu li a:hover { background: var(--color-base-300); }
    .side ul.menu li a.menu-active { background: var(--color-base-300); font-weight: 600; }
    .article { padding: 28px 32px 48px; min-width: 0; }
    .article h1 { font-size: 26px; font-weight: 700; margin: 0 0 10px; }
    .article h2 { font-size: 18px; font-weight: 700; margin: 30px 0 8px; }
    .article p { margin: 8px 0; opacity: .85; }
    .article ul, .article ol { padding-left: 22px; margin: 8px 0; }
    .article li { margin: 4px 0; }
    .toc { padding: 28px 16px; font-size: 12.5px; }
    .toc-title { font-weight: 700; font-size: 12px; letter-spacing: .05em; opacity: .55; margin-bottom: 8px; }
    .toc a { display: block; padding: 4px 10px; border-inline-start: 2px solid var(--color-base-300); color: inherit; text-decoration: none; opacity: .65; }
    .toc a.toc-active { border-inline-start-color: var(--color-primary); opacity: 1; font-weight: 600; }
    .codeblock { background: var(--color-base-300); border: 1px solid var(--color-base-300); border-radius: .5rem; padding: 12px 16px; overflow-x: auto; font-size: 12.5px; line-height: 1.6; }
    .codeblock code { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); }
    .tbl-wrap { overflow-x: auto; margin: 10px 0; }
    .article table { font-size: 13px; }
    .article table th { font-size: 12px; opacity: .6; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding: 24px 0 32px; }
    @media (max-width: 900px) {
      .shell { grid-template-columns: 1fr; }
      .toc { display: none; }
      .side { display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 6px 10px; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); padding: 10px 14px; }
      .side details { display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 2px 4px; margin: 0; }
      .side summary { padding: 3px 8px; font-size: 12px; border: 1px solid var(--color-base-300); border-radius: .375rem; }
      .side summary::before { display: none; }
      .side details[open] ul.menu { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; }
      .side details:not([open]) ul.menu { display: none; }
      .side details[open] ul.menu li a { display: inline-block; padding: 3px 8px; font-size: 12.5px; white-space: nowrap; }
      .article { padding: 20px 14px 40px; }
      .search { display: none; }
      .topbar { padding: 10px 14px; }
    }
  </style>
</head>
<body>

  <!-- 顶部搜索条 -->
  <header class="topbar">
    <span class="brand"><span class="brand-mark">灰</span>灰墨文档</span>
    <span class="doc-name">组件库 · v5.2</span>
    <div class="search">
      <label class="input input-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;opacity:.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
        <input type="search" placeholder="搜索文档、组件、主题…" />
      </label>
    </div>
    <div class="top-links">
      <span class="badge badge-sm">v5.2.0</span>
      <a href="#">更新日志</a>
      <a href="#">登录</a>
    </div>
  </header>

  <div class="shell">

    <!-- 左侧目录树 -->
    <nav class="side" aria-label="文档目录">
      <details open>
        <summary>入门</summary>
        <ul class="menu">
          <li><a href="#">快速开始</a></li>
          <li><a href="#">安装方式</a></li>
          <li><a href="#">常见问题</a></li>
        </ul>
      </details>
      <details>
        <summary>组件</summary>
        <ul class="menu">
          <li><a href="#">按钮 Button</a></li>
          <li><a href="#">输入框 Input</a></li>
          <li><a href="#">表格 Table</a></li>
        </ul>
      </details>
      <details open>
        <summary>主题</summary>
        <ul class="menu">
          <li><a href="#">切换主题</a></li>
          <li><a href="#" class="menu-active">主题变量</a></li>
          <li><a href="#">自定义色板</a></li>
        </ul>
      </details>
      <details>
        <summary>指南</summary>
        <ul class="menu">
          <li><a href="#">可访问性</a></li>
          <li><a href="#">响应式布局</a></li>
        </ul>
      </details>
    </nav>

    <!-- 中间正文 -->
    <main class="article">
      <h1>主题变量一览</h1>
      <p>灰墨主题全部通过 daisyUI 5 的 CSS 变量驱动：换主题不换组件，只换一个 <code>data-theme</code> 属性。本页以 mo-slate 为例，说明每个变量控制什么、默认值是多少。</p>

      <h2>引入方式</h2>
      <p>先引入 daisyUI，再把 tokens.css 放在它后面，然后在 <code>&lt;html&gt;</code> 上声明主题名即可生效。</p>
      <div class="codeblock">
        <code>&lt;html data-theme="mo-slate"&gt;<br />
&nbsp;&nbsp;&lt;link rel="stylesheet" href="daisyui.css" /&gt;<br />
&nbsp;&nbsp;&lt;link rel="stylesheet" href="tokens.css" /&gt;</code>
      </div>

      <h2>基础色变量</h2>
      <p>下面是 mo-slate 最常用的一组变量。文档站整体为无彩色灰阶，层次靠明度拉开，不依赖描边。</p>
      <div class="tbl-wrap">
        <table class="table">
          <thead>
            <tr><th>变量名</th><th>说明</th><th>默认值</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--color-base-100</code></td><td>页面底色</td><td>#f8f8f8</td></tr>
            <tr><td><code>--color-base-200</code></td><td>侧栏与卡片底色</td><td>#ffffff</td></tr>
            <tr><td><code>--color-base-300</code></td><td>悬浮与代码块底色</td><td>#f0f0f0</td></tr>
            <tr><td><code>--color-base-content</code></td><td>正文文字</td><td>#1a1a1a</td></tr>
            <tr><td><code>--color-primary</code></td><td>主按钮与选中态</td><td>#262626</td></tr>
          </tbody>
        </table>
      </div>

      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:18px;height:18px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
        <span>把 tokens.css 放在 daisyUI 之后引入，主题变量才会覆盖默认值；顺序反了页面会退回默认主题。</span>
      </div>

      <div class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:18px;height:18px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
        <span>mo-slate 是无彩色灰阶，业务需要品牌色时请在项目里自行覆盖 --color-primary，不要改主题文件本身。</span>
      </div>

      <h2>怎么开始</h2>
      <p>新建一个文档页时，按下面的顺序引入即可：</p>
      <ol>
        <li>引入 daisyUI 5 与本主题 tokens.css 两个文件；</li>
        <li>在 html 标签上加 <code>data-theme="mo-slate"</code>；</li>
        <li>正文用 daisyUI 的表格、提示块、按钮组件拼装，不要手写颜色。</li>
      </ol>
      <ul>
        <li>目录树用原生 <code>&lt;details&gt;</code>，无需 JS；</li>
        <li>窄屏下右侧目录自动隐藏，目录树折叠到正文上方；</li>
        <li>表格包一层 <code>.tbl-wrap</code>，窄屏可横向滚动。</li>
      </ul>
    </main>

    <!-- 右侧本页目录 -->
    <aside class="toc" aria-label="本页目录">
      <div class="toc-title">本页目录</div>
      <a href="#" class="toc-active">主题变量一览</a>
      <a href="#">引入方式</a>
      <a href="#">基础色变量</a>
      <a href="#">怎么开始</a>
    </aside>
  </div>

  <p class="foot">以上为示例数据，仅用于展示 mo-slate 主题整页效果 · 灰墨 MoH_UI</p>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-slate/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-slate"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-slate"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-slate · 纯净灰阶（浅色）—— 文档 / 帮助中心主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-slate"> 即整站换肤。
   无彩色零色相：正文与按钮全部用中性灰，语义色只保留给提示块，专注阅读。 */

[data-theme="mo-slate"] {
  /* 底与纸：浅灰三层，层次靠明度不靠描边 */
  --color-base-100: #f8f8f8;
  --color-base-200: #ffffff;
  --color-base-300: #f0f0f0;
  --color-base-content: #1a1a1a;

  /* 主色：深炭（不是死黑，用于主按钮与选中态，浅底上不刺眼） */
  --color-primary: #262626;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：纯灰阶，零色相 */
  --color-secondary: #737373;
  --color-secondary-content: #ffffff;
  --color-accent: #525252;
  --color-accent-content: #ffffff;

  --color-neutral: #1a1a1a;
  --color-neutral-content: #ffffff;

  /* 语义色：保留色相但压低饱和，只给文档提示块用 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，纸质文档取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-slate/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
