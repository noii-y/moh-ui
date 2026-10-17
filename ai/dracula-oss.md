# 极客紫（OSS 完整版）（dracula-oss） · 灰墨 MoH_UI

> 开源代码协作平台整页（仓库头 + 文件树 + main.py 代码预览 + README 摘要 + PR/Issue 列表）。Dracula 完整 OSS 色板：深紫灰底 + 霓虹紫主色，挂 data-theme="dracula-oss" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Dracula Theme (dracula/dracula-theme)（MIT） · [上游色板](https://github.com/dracula/dracula-theme#color-palette-oss)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/dracula-oss/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 严格照整页源码的配色、字体、留白、圆角与组件结构来，不要自由发挥成另一种风格。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dracula-oss">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>aurora-web 仓库首页 · 极光开源（dracula-oss 主题案例）</title>
  <meta name="description" content="灰墨 dracula-oss 主题完整页面案例：Dracula 完整 OSS 色板的开源代码协作平台整页（仓库头 + 文件树 + 代码预览 + README + PR 列表）。本页只依赖 daisyUI 与主题 tokens.css，零依赖、零 JS。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 dracula-oss · 极客紫（外部 OSS 完整版）—— Dracula 完整色板开发者主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 dracula/dracula-theme 官方 OSS 色板（MIT © 2023 Dracula Theme）。
   注意：vendor 内 daisyUI 官方自带简化版 data-theme=dracula，本目录以 -oss 后缀区分。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="dracula-oss"> 即整站换肤。 */

[data-theme="dracula-oss"] {
  color-scheme: dark;

  /* 底与纸：Dracula 经典深紫灰三层，#282a36 为官方 Background */
  --color-base-100: #282a36;
  --color-base-200: #21222c;
  --color-base-300: #191a21;
  --color-base-content: #f8f8f2;

  /* 主色：霓虹紫（官方 Purple #bd93f9），只留给主操作与选中态 */
  --color-primary: #bd93f9;
  --color-primary-content: #21222c;

  /* 次色 / 强调色：霓虹粉（Pink #ff79c6）与荧光青（Cyan #8be9fd） */
  --color-secondary: #ff79c6;
  --color-secondary-content: #21222c;
  --color-accent: #8be9fd;
  --color-accent-content: #21222c;

  /* 中性面：官方 Selection #44475a，用于侧栏与次级面板 */
  --color-neutral: #44475a;
  --color-neutral-content: #f8f8f2;

  /* 语义色：官方语法色直接映射（青/绿/黄/红），橙 #ffb86c 留给中性提示 */
  --color-info: #8be9fd;
  --color-info-content: #21222c;
  --color-success: #50fa7b;
  --color-success-content: #21222c;
  --color-warning: #f1fa8c;
  --color-warning-content: #21222c;
  --color-error: #ff5555;
  --color-error-content: #f8f8f2;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，开发者终端取向 */
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
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .shell { display: flex; min-height: 100vh; }
    .side { width: 232px; flex: none; border-inline-end: 1px solid var(--color-base-300); background: var(--color-base-200); padding: 16px 10px; display: flex; flex-direction: column; gap: 12px; }
    .brand { font-size: 14px; font-weight: 700; padding: 2px 12px 6px; display: flex; align-items: center; gap: 8px; }
    .brand-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .main { flex: 1; min-width: 0; padding: 18px 22px 30px; display: flex; flex-direction: column; gap: 16px; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .mid-row { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 14px; align-items: start; }
    .tbl-wrap { overflow-x: auto; }
    .tbl-wrap .badge { white-space: nowrap; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    .mono { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); }
    /* 文件树 */
    .tree { list-style: none; margin: 0; padding: 0; font-size: 13px; }
    .tree li a { display: flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: .25rem; color: inherit; text-decoration: none; opacity: .85; white-space: nowrap; }
    .tree li a:hover { opacity: 1; background: var(--color-base-300); }
    .tree .tree-active { background: var(--color-primary); color: var(--color-primary-content); opacity: 1; }
    .tree svg { flex: none; width: 13px; height: 13px; }
    /* 代码预览块 */
    .codebox { background: var(--color-base-300); border-radius: .375rem; overflow: hidden; border: 1px solid var(--color-base-300); }
    .code-tabs { display: flex; gap: 2px; border-bottom: 1px solid var(--color-base-300); background: var(--color-base-200); overflow-x: auto; }
    .code-tabs span { padding: 7px 14px; font-size: 12px; border-bottom: 2px solid transparent; white-space: nowrap; }
    .code-tabs .on { border-bottom-color: var(--color-primary); color: var(--color-primary); background: var(--color-base-300); }
    .code-lines { margin: 0; padding: 12px 0; font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); font-size: 12.5px; line-height: 1.7; overflow-x: auto; }
    .code-lines div { display: flex; white-space: pre; padding-right: 16px; }
    .ln { flex: none; width: 34px; text-align: right; padding-right: 14px; opacity: .3; user-select: none; }
    .c-com { color: #6272a4; }
    .c-kw  { color: #ff79c6; }
    .c-str { color: #f1fa8c; }
    .c-fn  { color: #50fa7b; }
    .c-cls { color: #8be9fd; }
    .c-num { color: #bd93f9; }
    @media (max-width: 900px) {
      .shell { flex-direction: column; }
      .side { width: auto; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); flex-direction: row; align-items: center; flex-wrap: wrap; gap: 8px; padding: 10px; }
      .brand { flex: none; padding: 0 12px 0 2px; }
      .side .tree { flex-direction: row; flex-wrap: wrap; width: auto; display: flex; gap: 4px; }
      .side .tree li a { white-space: nowrap; }
      .navbar-start, .navbar-end { width: 100%; }
      .mid-row { grid-template-columns: minmax(0, 1fr); }
      .main { padding: 14px 12px 24px; }
    }
  </style>
</head>
<body>
  <div class="shell">

    <!-- 侧栏文件树 -->
    <aside class="side">
      <div class="brand"><span class="brand-mark">极</span>aurora-web</div>
      <ul class="tree">
        <li><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          README.md</a></li>
        <li><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75A1.5 1.5 0 0 1 5.25 5.25h2.443a1.5 1.5 0 0 1 1.06.44l1.186 1.187a.375.375 0 0 0 .265.11h8.044a1.5 1.5 0 0 1 1.5 1.5V16.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75Z" /></svg>
          docs/</a></li>
        <li><a href="#" style="padding-left:26px">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          快速上手.md</a></li>
        <li><a href="#" style="padding-left:26px">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          配置参考.md</a></li>
        <li><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75A1.5 1.5 0 0 1 5.25 5.25h2.443a1.5 1.5 0 0 1 1.06.44l1.186 1.187a.375.375 0 0 0 .265.11h8.044a1.5 1.5 0 0 1 1.5 1.5V16.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75Z" /></svg>
          src/</a></li>
        <li><a href="#" class="tree-active" style="padding-left:26px">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          main.py</a></li>
        <li><a href="#" style="padding-left:26px">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          server.py</a></li>
        <li><a href="#" style="padding-left:26px">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          render.py</a></li>
        <li><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75A1.5 1.5 0 0 1 5.25 5.25h2.443a1.5 1.5 0 0 1 1.06.44l1.186 1.187a.375.375 0 0 0 .265.11h8.044a1.5 1.5 0 0 1 1.5 1.5V16.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75Z" /></svg>
          tests/</a></li>
        <li><a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          pyproject.toml</a></li>
      </ul>
    </aside>

    <!-- 主区 -->
    <div class="main">

      <!-- 仓库头 -->
      <div class="navbar rounded-box" style="background:var(--color-base-200);padding:10px 16px;min-height:0;gap:10px;flex-wrap:wrap">
        <div class="navbar-start" style="min-width:0">
          <span class="mono" style="font-size:14px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="opacity:.6">极光开源</span><span style="opacity:.4">/</span><strong>aurora-web</strong>
            <span class="badge badge-sm badge-soft badge-neutral" style="font-family:ui-sans-serif">main</span>
          </span>
        </div>
        <div class="navbar-end" style="gap:8px">
          <button class="btn btn-outline btn-sm" type="button" aria-label="收藏本仓库">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 4.6a.56.56 0 0 0 .45.33l4.87.44c.49.04.68.64.31.96l-3.68 3.17a.56.56 0 0 0-.18.55l1.05 4.78a.56.56 0 0 1-.84.61l-4.18-2.5a.56.56 0 0 0-.58 0l-4.18 2.5a.56.56 0 0 1-.84-.61l1.05-4.78a.56.56 0 0 0-.18-.55L2.69 9.83a.56.56 0 0 1 .31-.96l4.87-.44a.56.56 0 0 0 .45-.33l2.13-4.6Z" /></svg>
            星标 2.4k
          </button>
          <button class="btn btn-ghost btn-sm" type="button">关注</button>
          <button class="btn btn-primary btn-sm" type="button">新建 Issue</button>
        </div>
      </div>

      <!-- 仓库简介 -->
      <div class="row">
        <div>
          <h1 style="font-size:19px;font-weight:700;margin:0">aurora-web</h1>
          <p style="font-size:13px;opacity:.6;margin:4px 0 0">极光开源的 Web 渲染内核，支持服务端渲染与流式输出（示例数据）</p>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span class="badge badge-soft badge-primary">Python 86%</span>
          <span class="badge badge-soft badge-secondary">TypeScript 14%</span>
          <span class="badge badge-soft badge-neutral">MIT</span>
        </div>
      </div>

      <!-- 代码 + README -->
      <div class="mid-row">
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:0;gap:0">
            <div class="code-tabs">
              <span class="on mono">main.py</span>
              <span class="mono" style="opacity:.6">server.py</span>
              <span class="mono" style="opacity:.6">render.py</span>
            </div>
            <div class="codebox" style="border:0;border-radius:0">
              <div class="code-lines" role="img" aria-label="main.py 代码预览（示例）">
                <div><span class="ln">1</span><span class="c-com">"""极光 Web 渲染内核 · 入口"""</span></div>
                <div><span class="ln">2</span><span><span class="c-kw">from</span> <span class="c-cls">fastapi</span> <span class="c-kw">import</span> <span class="c-cls">FastAPI</span>, <span class="c-cls">Request</span></span></div>
                <div><span class="ln">3</span><span><span class="c-kw">from</span> .render <span class="c-kw">import</span> stream_html</span></div>
                <div><span class="ln">4</span> </div>
                <div><span class="ln">5</span><span>app = <span class="c-cls">FastAPI</span>(title=<span class="c-str">"aurora-web"</span>)</span></div>
                <div><span class="ln">6</span> </div>
                <div><span class="ln">7</span><span>@app.get(<span class="c-str">"/"</span>)</span></div>
                <div><span class="ln">8</span><span><span class="c-kw">async def</span> <span class="c-fn">index</span>(request: <span class="c-cls">Request</span>):</span></div>
                <div><span class="ln">9</span><span>    <span class="c-com">"""返回首屏流式 HTML"""</span></span></div>
                <div><span class="ln">10</span><span>    chunks = <span class="c-fn">stream_html</span>(template=<span class="c-str">"home.html"</span>, data={</span></div>
                <div><span class="ln">11</span><span>        <span class="c-str">"repo"</span>: <span class="c-str">"aurora-web"</span>, <span class="c-str">"version"</span>: <span class="c-str">"2.4.1"</span>,</span></div>
                <div><span class="ln">12</span><span>    })</span></div>
                <div><span class="ln">13</span><span>    <span class="c-kw">return</span> <span class="c-cls">HTMLResponse</span>(chunks)</span></div>
                <div><span class="ln">14</span> </div>
                <div><span class="ln">15</span><span><span class="c-kw">if</span> __name__ == <span class="c-str">"__main__"</span>:</span></div>
                <div><span class="ln">16</span><span>    <span class="c-kw">import</span> uvicorn</span></div>
                <div><span class="ln">17</span><span>    uvicorn.<span class="c-fn">run</span>(app, host=<span class="c-str">"0.0.0.0"</span>, port=<span class="c-num">8000</span>)</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:14px 16px;gap:10px">
            <h2 class="card-title" style="font-size:14px;display:flex;align-items:center;gap:6px">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:15px;height:15px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6" /><path stroke-linecap="round" d="M16 13H8" /><path stroke-linecap="round" d="M16 17H8" /></svg>
              README 摘要
            </h2>
            <p style="font-size:12.5px;opacity:.75;margin:0;line-height:1.7">aurora-web 让首屏快到看不到白屏：服务端渲染 + 流式输出，组件级水合，无需等待整包下载。</p>
            <div class="divider" style="margin:2px 0"></div>
            <div style="font-size:12.5px;display:flex;flex-direction:column;gap:6px;opacity:.85">
              <span>发布版本 <span class="mono" style="color:var(--color-accent)">v2.4.1</span></span>
              <span>最近提交 <span class="mono">支持自定义主题色板</span></span>
              <span>打开 Issue 12 · 打开 PR 3</span>
            </div>
            <div class="divider" style="margin:2px 0"></div>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:12px;opacity:.6">贡献者</span>
              <div class="avatar-group">
                <div class="avatar avatar-placeholder"><div style="width:24px;height:24px;border-radius:999px;background:var(--color-primary);color:var(--color-primary-content);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700">林</div></div>
                <div class="avatar avatar-placeholder"><div style="width:24px;height:24px;border-radius:999px;background:var(--color-secondary);color:var(--color-secondary-content);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700">陈</div></div>
                <div class="avatar avatar-placeholder"><div style="width:24px;height:24px;border-radius:999px;background:var(--color-accent);color:var(--color-accent-content);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700">苏</div></div>
                <div class="avatar avatar-placeholder"><div style="width:24px;height:24px;border-radius:999px;background:var(--color-neutral);color:var(--color-neutral-content);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700">赵</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PR / Issue 列表 -->
      <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
        <div class="card-body" style="padding:14px 16px 6px;display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
            <h2 style="font-size:15px;font-weight:700;margin:0">拉取请求与议题</h2>
            <a class="link" href="#" style="font-size:13px;text-decoration:none">查看全部 15 项</a>
          </div>
          <div class="tbl-wrap">
            <table class="table" style="font-size:13px">
              <thead>
                <tr style="opacity:.6;font-size:12px">
                  <th>#</th><th>标题</th><th>标签</th><th>提交者</th><th>状态</th><th>更新时间</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="mono">128</td><td>支持自定义主题色板</td><td><span class="badge badge-sm badge-soft badge-primary">功能</span></td><td>林岚</td><td><span class="badge badge-soft badge-success">已合并</span></td><td style="opacity:.6">今天 09:24</td></tr>
                <tr><td class="mono">127</td><td>修复 Windows 下路径分隔符错误</td><td><span class="badge badge-sm badge-soft badge-error">缺陷</span></td><td>陈默</td><td><span class="badge badge-soft badge-neutral">已关闭</span></td><td style="opacity:.6">今天 08:10</td></tr>
                <tr><td class="mono">126</td><td>文档：补充快速上手章节</td><td><span class="badge badge-sm badge-soft badge-info">文档</span></td><td>苏晴</td><td><span class="badge badge-soft badge-warning">进行中</span></td><td style="opacity:.6">昨天 19:42</td></tr>
                <tr><td class="mono">125</td><td>首屏渲染性能优化</td><td><span class="badge badge-sm badge-soft badge-secondary">优化</span></td><td>赵启</td><td><span class="badge badge-soft badge-info">开放</span></td><td style="opacity:.6">昨天 16:05</td></tr>
                <tr><td class="mono">124</td><td>新增暗色主题自动切换</td><td><span class="badge badge-sm badge-soft badge-primary">功能</span></td><td>林岚</td><td><span class="badge badge-soft badge-success">已合并</span></td><td style="opacity:.6">周二 14:37</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p class="foot">以上仓库、文件与数据均为虚构示例，仅用于展示 dracula-oss 主题整页效果 · 灰墨 MoH_UI</p>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/dracula-oss/tokens.css">
```

② 在 `<html>` 挂 `data-theme="dracula-oss"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="dracula-oss"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 dracula-oss · 极客紫（外部 OSS 完整版）—— Dracula 完整色板开发者主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 dracula/dracula-theme 官方 OSS 色板（MIT © 2023 Dracula Theme）。
   注意：vendor 内 daisyUI 官方自带简化版 data-theme=dracula，本目录以 -oss 后缀区分。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="dracula-oss"> 即整站换肤。 */

[data-theme="dracula-oss"] {
  color-scheme: dark;

  /* 底与纸：Dracula 经典深紫灰三层，#282a36 为官方 Background */
  --color-base-100: #282a36;
  --color-base-200: #21222c;
  --color-base-300: #191a21;
  --color-base-content: #f8f8f2;

  /* 主色：霓虹紫（官方 Purple #bd93f9），只留给主操作与选中态 */
  --color-primary: #bd93f9;
  --color-primary-content: #21222c;

  /* 次色 / 强调色：霓虹粉（Pink #ff79c6）与荧光青（Cyan #8be9fd） */
  --color-secondary: #ff79c6;
  --color-secondary-content: #21222c;
  --color-accent: #8be9fd;
  --color-accent-content: #21222c;

  /* 中性面：官方 Selection #44475a，用于侧栏与次级面板 */
  --color-neutral: #44475a;
  --color-neutral-content: #f8f8f2;

  /* 语义色：官方语法色直接映射（青/绿/黄/红），橙 #ffb86c 留给中性提示 */
  --color-info: #8be9fd;
  --color-info-content: #21222c;
  --color-success: #50fa7b;
  --color-success-content: #21222c;
  --color-warning: #f1fa8c;
  --color-warning-content: #21222c;
  --color-error: #ff5555;
  --color-error-content: #f8f8f2;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，开发者终端取向 */
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/dracula-oss/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
