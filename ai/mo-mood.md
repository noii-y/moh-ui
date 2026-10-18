# 暗黑开发者（mo-mood） · 灰墨 MoH_UI

> 深空底宇宙蓝开发者 API 控制台整页。低光害深色三层底色 + 宇宙蓝主色，适合开发者工具 / 日志查看器 / 数据产品夜间模式；挂 data-theme="mo-mood" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-mood/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 深空近黑三层底色：base-100 #0f1117 页面、base-200 #151822 侧栏与卡片、base-300 #1b1f2b，层次只靠明度差、不靠描边；代码块还要比页面更暗一层（#0b0e16）。
- 宇宙蓝主色 #4a63e0 白字，只留给主按钮、菜单选中态（menu-active）与通知角标，绝不大面积铺蓝；亮青 #38bdf8 是强调色，只给关键词、info 徽章与代码键名。
- 代码高亮固定四色约定：键名亮青 #38bdf8、字符串绿 #34d399、数字黄 #fbbf24、注释灰 #8b93a8；等宽字写 font-family:var(--font-mono, ui-monospace, Menlo, Consolas, monospace)，不要去找 .font-mono 工具类（vendor 没有）。
- 小圆角 + 细边：--radius-box 0.5rem / field 0.25rem、--border:1px，分隔线用 #262b3a 系低对比；控制台取向，禁止大圆角、厚边与明显投影。
- 数据密度优先：表格单元格 padding 收窄到 5px 6px、日志行 12px，次级说明用 0.5~0.65 透明度的灰字，靠信息密度而非大留白撑气质。
- 状态徽章统一 badge-soft：成功绿 #34d399、警告黄 #fbbf24、错误红 #f87171，content 用各自的深色变量保证对比，不要写死深色实底徽章。
- ≤900px 侧栏从 220px 竖栏退化为顶部横向换行菜单（flex-direction:row、菜单项 nowrap），代码示例双栏塌成单栏，整页不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-mood">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>API 控制台 · Nebula 开发者平台（mo-mood 主题案例）</title>
  <meta name="description" content="灰墨 mo-mood 主题完整页面案例：深空底宇宙蓝开发者 API 控制台。本页只依赖 daisyUI 与 mo-mood 主题，展示真实开发者后台整页效果。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-mood · 暗黑开发者（深色）—— API 控制台主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-mood"> 即整站换肤。
   深空底三层递进 + 宇宙蓝主色，低光害，适合开发者工具夜间工作。 */

[data-theme="mo-mood"] {
  color-scheme: dark;

  /* 底与纸：深空近黑三层，层次靠明度不靠描边 */
  --color-base-100: #0f1117;
  --color-base-200: #151822;
  --color-base-300: #1b1f2b;
  --color-base-content: #e6e8ee;

  /* 主色：宇宙蓝（只留给主操作与选中态） */
  --color-primary: #4a63e0;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：灰蓝与青，用于次级元素与代码高亮 */
  --color-secondary: #6b7a99;
  --color-secondary-content: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-content: #061826;

  --color-neutral: #1b1f2b;
  --color-neutral-content: #e6e8ee;

  /* 语义色：深色版亮语义色，文字用近黑保证对比 */
  --color-info: #38bdf8;
  --color-info-content: #061826;
  --color-success: #34d399;
  --color-success-content: #06281c;
  --color-warning: #fbbf24;
  --color-warning-content: #3a2a05;
  --color-error: #f87171;
  --color-error-content: #3b0d0d;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，控制台取向 */
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
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 14px; }
    .shell { display: flex; min-height: 100vh; }
    .side { width: 220px; flex: none; border-inline-end: 1px solid #262b3a; background: var(--color-base-200); padding: 18px 12px; display: flex; flex-direction: column; gap: 14px; }
    .brand { font-size: 15px; font-weight: 700; padding: 2px 12px 8px; display: flex; align-items: center; gap: 8px; }
    .brand-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .main { flex: 1; min-width: 0; padding: 20px 24px 32px; display: flex; flex-direction: column; gap: 18px; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .stat-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; }
    .mono { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); font-size: 12.5px; }
    .key-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding: 12px 4px; border-block-end: 1px solid #262b3a; }
    .key-row:last-child { border-block-end: 0; }
    .codeblock { background: #0b0e16; border: 1px solid #262b3a; border-radius: .5rem; padding: 14px 16px; overflow-x: auto; font-size: 12.5px; line-height: 1.7; }
    .codeblock code { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); }
    .code-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .tok-key { color: #38bdf8; }
    .tok-str { color: #34d399; }
    .tok-num { color: #fbbf24; }
    .tok-dim { color: #8b93a8; }
    .tbl-wrap { overflow-x: auto; }
    .log-table th, .log-table td { padding: 5px 6px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    @media (max-width: 900px) {
      .shell { flex-direction: column; }
      .side { width: auto; border-inline-end: 0; border-block-end: 1px solid #262b3a; flex-direction: row; align-items: center; flex-wrap: wrap; gap: 8px 12px; overflow-x: auto; }
      .brand { flex: none; padding: 0 12px 0 4px; }
      .side .menu { flex-direction: row; flex-wrap: wrap; width: auto; gap: 2px; }
      .side .menu li a { white-space: nowrap; padding: 5px 10px; }
      .code-grid { grid-template-columns: 1fr; }
      .main { padding: 16px 14px 24px; }
    }
  </style>
</head>
<body>
  <div class="shell">

    <!-- 侧栏 -->
    <aside class="side">
      <div class="brand"><span class="brand-mark">N</span>Nebula 控制台</div>
      <ul class="menu" style="padding:0">
        <li><a class="menu-active">控制台</a></li>
        <li><a href="#">API 密钥</a></li>
        <li><a href="#">调用日志</a></li>
        <li><a href="#">用量统计</a></li>
        <li><a href="#">计费</a></li>
        <li><a href="#">开发文档</a></li>
        <li><a href="#">设置</a></li>
      </ul>
    </aside>

    <!-- 主区 -->
    <div class="main">

      <!-- 顶栏 -->
      <div class="navbar rounded-box" style="padding:0 16px;background:var(--color-base-200)">
        <div class="navbar-start" style="gap:10px">
          <button class="btn btn-ghost btn-sm" type="button">
            项目：生产环境
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          </button>
        </div>
        <div class="navbar-end" style="gap:10px">
          <label class="input input-sm" style="display:flex;align-items:center;gap:8px;width:220px;background:var(--color-base-100)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;opacity:.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
            <input type="search" placeholder="搜索接口或日志…" style="flex:1;min-width:0;background:none;border:0;outline:none;color:inherit;font-size:13px" />
          </label>
          <button class="btn btn-ghost btn-sm" type="button">
            通知
            <span class="badge badge-sm badge-primary">2</span>
          </button>
          <div class="avatar avatar-placeholder">
            <div class="rounded-full" style="width:32px;height:32px;border-radius:999px;background:var(--color-neutral);color:var(--color-neutral-content);display:flex;align-items:center;justify-content:center;font-size:12px">林</div>
          </div>
        </div>
      </div>

      <!-- 标题行 -->
      <div class="row">
        <div>
          <h1 style="font-size:20px;font-weight:700;margin:0">API 控制台</h1>
          <p style="font-size:13px;opacity:.6;margin:4px 0 0">生产环境 · 最近 24 小时（示例数据）</p>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary btn-sm" type="button">新建密钥</button>
        </div>
      </div>

      <!-- 指标卡 -->
      <div class="stat-row">
        <div class="stat rounded-box" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="stat-title">今日请求数</div>
          <div class="stat-value" style="font-size:24px">1,284,392</div>
          <div class="stat-desc" style="color:var(--color-success)">较昨日 +9.2%</div>
        </div>
        <div class="stat rounded-box" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="stat-title">平均延迟</div>
          <div class="stat-value" style="font-size:24px">86ms</div>
          <div class="stat-desc" style="color:var(--color-success)">P99 210ms</div>
        </div>
        <div class="stat rounded-box" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="stat-title">错误率</div>
          <div class="stat-value" style="font-size:24px">0.32%</div>
          <div class="stat-desc" style="color:var(--color-error)">5xx 占 0.08%</div>
        </div>
        <div class="stat rounded-box" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="stat-title">剩余配额</div>
          <div class="stat-value" style="font-size:24px">42,000</div>
          <div class="stat-desc" style="opacity:.65">本月额度 100,000</div>
        </div>
      </div>

      <!-- API 密钥列表 -->
      <div class="card rounded-box" style="background:var(--color-base-200);border-radius:.5rem">
        <div class="card-body" style="padding:8px 16px;gap:0">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;padding:12px 4px 0">
            <h2 class="card-title" style="font-size:15px">API 密钥</h2>
            <span class="badge badge-soft badge-primary badge-sm">3 把密钥</span>
          </div>
          <div class="key-row">
            <div>
              <div style="font-weight:600">生产环境密钥</div>
              <div class="mono" style="opacity:.6;margin-top:2px">sk-live-4f8a········9c2e</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <span style="font-size:12px;opacity:.55">创建于 2026-09-02</span>
              <span class="badge badge-soft badge-success">启用</span>
              <div style="display:flex;gap:6px">
                <button class="btn btn-ghost btn-sm" type="button">复制</button>
                <button class="btn btn-ghost btn-sm" type="button">撤销</button>
              </div>
            </div>
          </div>
          <div class="key-row">
            <div>
              <div style="font-weight:600">测试环境密钥</div>
              <div class="mono" style="opacity:.6;margin-top:2px">sk-test-9b21········77aa</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <span style="font-size:12px;opacity:.55">创建于 2026-10-11</span>
              <span class="badge badge-soft badge-success">启用</span>
              <div style="display:flex;gap:6px">
                <button class="btn btn-ghost btn-sm" type="button">复制</button>
                <button class="btn btn-ghost btn-sm" type="button">撤销</button>
              </div>
            </div>
          </div>
          <div class="key-row">
            <div>
              <div style="font-weight:600">旧版批量导出密钥</div>
              <div class="mono" style="opacity:.6;margin-top:2px">sk-live-77cd········31f0</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <span style="font-size:12px;opacity:.55">创建于 2025-12-20</span>
              <span class="badge badge-soft badge-warning">已撤销</span>
              <div style="display:flex;gap:6px">
                <button class="btn btn-ghost btn-sm" type="button">复制</button>
                <button class="btn btn-ghost btn-sm" type="button">重新启用</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 代码示例 -->
      <div class="code-grid">
        <div>
          <div style="font-size:13px;font-weight:600;margin-bottom:6px">请求示例（curl）</div>
          <div class="codeblock">
            <code><span class="tok-dim">$</span> curl <span class="tok-str">https://api.example.com/v1/users</span> \<br />
&nbsp;&nbsp;-H <span class="tok-str">"Authorization: Bearer sk-live-4f8a····"</span> \<br />
&nbsp;&nbsp;-H <span class="tok-str">"Content-Type: application/json"</span></code>
          </div>
        </div>
        <div>
          <div style="font-size:13px;font-weight:600;margin-bottom:6px">响应示例（JSON）</div>
          <div class="codeblock">
            <code>{<br />
&nbsp;&nbsp;<span class="tok-key">"id"</span>: <span class="tok-str">"usr_8821"</span>,<br />
&nbsp;&nbsp;<span class="tok-key">"name"</span>: <span class="tok-str">"张伟"</span>,<br />
&nbsp;&nbsp;<span class="tok-key">"active"</span>: <span class="tok-num">true</span>,<br />
&nbsp;&nbsp;<span class="tok-key">"projects"</span>: <span class="tok-num">3</span><br />
}</code>
          </div>
        </div>
      </div>

      <!-- 调用日志 -->
      <div class="card rounded-box" style="background:var(--color-base-200);border-radius:.5rem">
        <div class="card-body" style="padding:16px;gap:10px">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <h2 class="card-title" style="font-size:15px">调用日志</h2>
            <span class="badge badge-soft badge-sm">最近 1 小时</span>
          </div>
          <div class="tbl-wrap">
            <table class="table log-table" style="font-size:12px">
              <thead>
                <tr style="opacity:.6;font-size:11px">
                  <th>时间</th><th>方法</th><th>路径</th><th>状态码</th><th>耗时</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style="opacity:.6">09:41</td><td><span class="badge badge-sm badge-soft badge-success">GET</span></td><td class="mono" style="font-size:11.5px">/v1/users</td><td><span class="badge badge-sm badge-soft badge-success">200</span></td><td>42ms</td></tr>
                <tr><td style="opacity:.6">09:40</td><td><span class="badge badge-sm badge-soft badge-info">POST</span></td><td class="mono" style="font-size:11.5px">/v1/orders</td><td><span class="badge badge-sm badge-soft badge-success">201</span></td><td>128ms</td></tr>
                <tr><td style="opacity:.6">09:40</td><td><span class="badge badge-sm badge-soft badge-success">GET</span></td><td class="mono" style="font-size:11.5px">/v1/metrics</td><td><span class="badge badge-sm badge-soft badge-success">200</span></td><td>55ms</td></tr>
                <tr><td style="opacity:.6">09:40</td><td><span class="badge badge-sm badge-soft badge-success">GET</span></td><td class="mono" style="font-size:11.5px">/v1/reports</td><td><span class="badge badge-sm badge-soft badge-warning">429</span></td><td>8ms</td></tr>
                <tr><td style="opacity:.6">09:40</td><td><span class="badge badge-sm badge-soft badge-neutral">DEL</span></td><td class="mono" style="font-size:11.5px">/v1/sessions/88</td><td><span class="badge badge-sm badge-soft badge-success">204</span></td><td>31ms</td></tr>
                <tr><td style="opacity:.6">09:40</td><td><span class="badge badge-sm badge-soft badge-info">POST</span></td><td class="mono" style="font-size:11.5px">/v1/payments</td><td><span class="badge badge-sm badge-soft badge-error">500</span></td><td>210ms</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p class="foot">以上为示例数据，仅用于展示 mo-mood 主题整页效果 · 灰墨 MoH_UI</p>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-mood/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-mood"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-mood"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-mood · 暗黑开发者（深色）—— API 控制台主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-mood"> 即整站换肤。
   深空底三层递进 + 宇宙蓝主色，低光害，适合开发者工具夜间工作。 */

[data-theme="mo-mood"] {
  color-scheme: dark;

  /* 底与纸：深空近黑三层，层次靠明度不靠描边 */
  --color-base-100: #0f1117;
  --color-base-200: #151822;
  --color-base-300: #1b1f2b;
  --color-base-content: #e6e8ee;

  /* 主色：宇宙蓝（只留给主操作与选中态） */
  --color-primary: #4a63e0;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：灰蓝与青，用于次级元素与代码高亮 */
  --color-secondary: #6b7a99;
  --color-secondary-content: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-content: #061826;

  --color-neutral: #1b1f2b;
  --color-neutral-content: #e6e8ee;

  /* 语义色：深色版亮语义色，文字用近黑保证对比 */
  --color-info: #38bdf8;
  --color-info-content: #061826;
  --color-success: #34d399;
  --color-success-content: #06281c;
  --color-warning: #fbbf24;
  --color-warning-content: #3a2a05;
  --color-error: #f87171;
  --color-error-content: #3b0d0d;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，控制台取向 */
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-mood/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
