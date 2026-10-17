# 开源门户（github-light） · 灰墨 MoH_UI

> 虚构开源 CI 引擎「开流 OpenFlow」整页。纯白底配浅灰卡片与链接蓝，顶栏导航 + Hero 项目指标 + 六张特性卡 + 终端安装命令 + 更新日志，信息清晰不堆营销色块；挂 daisyUI 组件拼装、零依赖。

来源：GitHub Light (primer/github-vscode-theme)（MIT） · [上游色板](https://github.com/primer/github-vscode-theme/blob/main/src/colors.js)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/github-light/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 纯白底与浅灰卡（base-100 #ffffff / base-200 #f6f8fa），分层只靠 1px 浅灰边（base-300 #d1d9e0），不写死任何 hex、不堆投影与营销色块。
- 主色蓝 #0969da 只给主 CTA、链接与选中态；次色绿 #1f883d 留给「开始/安装」类实心徽章与次要按钮，绝不大面积铺绿。
- 正文 #1f2328、次要信息用低透明度灰字，标题最多两级、字重中等；文档门户追求信息清晰，不要电商式大标题与堆叠卖点。
- 代码区是门面：等宽字体用 var(--font-mono) 内联兜底，窗口三圆点用 currentColor 不同透明度表达；不引外部高亮库、不写硬编码语法色。
- 按钮只写真实动作（开始使用、查看文档、在 GitHub 查看），不写 Primary 这类颜色名；「在 GitHub 查看」做成幽灵文字按钮，页面不出现任何真实品牌 logo。
- 项目指标（stars/forks/贡献者/版本号）排成一行 stat，数字加粗、标签小灰；凡虚构数据必须在页脚统一声明「示例数据」。
- 390px 窄屏：顶栏自然折行、特性卡单列、代码块在窗口内换行不横向溢出，卡片保持轻边框风格。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="github-light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>开流 OpenFlow · 开源 CI 引擎（github-light 主题案例）</title>
  <meta name="description" content="灰墨 github-light 主题完整页面案例：虚构开源项目门户整页。中性灰蓝、卡片轻边框、代码区为招牌，信息清晰不堆营销色块。本页只依赖 daisyUI 与同目录 tokens.css。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 github-light · 开源门户 —— GitHub Light 中性灰蓝开发者主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 primer/github-vscode-theme（MIT，© 2020 Primer）及其依赖
   @primer/primitives 官方 light 色板（canvas.default #ffffff、canvas.subtle #f6f8fa、
   border.default #d1d9e0、fg.default #1f2328、fg.muted #59636e、accent #0969da、
   success.emphasis #1f883d、done #8250df、attention #9a6700、danger #cf222e）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="github-light"> 即整站换肤。 */

[data-theme="github-light"] {
  color-scheme: light;

  /* 底与纸：canvas.default 纯白 / canvas.subtle 浅灰卡片 / border.default 分层 */
  --color-base-100: #ffffff;
  --color-base-200: #f6f8fa;
  --color-base-300: #d1d9e0;
  --color-base-content: #1f2328;

  /* 主色：accent 链接蓝 #0969da，只留给主操作、链接与选中态 */
  --color-primary: #0969da;
  --color-primary-content: #ffffff;

  /* 次色：success.emphasis 按钮绿 #1f883d（GitHub 主按钮绿）；强调色 done 紫 */
  --color-secondary: #1f883d;
  --color-secondary-content: #ffffff;
  --color-accent: #8250df;
  --color-accent-content: #ffffff;

  /* 中性面：fg.muted 灰 #59636e，用于次要文字与分隔 */
  --color-neutral: #59636e;
  --color-neutral-content: #ffffff;

  /* 语义色：info 蓝 / success 绿 / warning 琥珀 / error 红，均取官方亮底色 */
  --color-info: #0969da;
  --color-info-content: #ffffff;
  --color-success: #1a7f37;
  --color-success-content: #ffffff;
  --color-warning: #9a6700;
  --color-warning-content: #ffffff;
  --color-error: #cf222e;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，文档门户取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
  </style>
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 20px; }
    .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 16px; white-space: nowrap; }
    .brand svg { width: 26px; height: 26px; }
    .brand small { font-weight: 400; font-size: 11px; opacity: .55; letter-spacing: .5px; }
    .navlinks { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; gap: 2px; margin: 0; list-style: none; }
    .navlinks a { padding: 4px 8px; border-radius: var(--radius-selector); font-size: 13px; opacity: .8; text-decoration: none; color: inherit; }
    .navlinks a:hover { background: var(--color-base-200); opacity: 1; }
    .hero { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 38px 8px 26px; }
    .hero h1 { font-size: 36px; line-height: 1.25; margin: 0; letter-spacing: .5px; }
    .hero p { font-size: 14px; opacity: .7; max-width: 560px; margin: 0; line-height: 1.9; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; }
    .stat-item { display: flex; flex-direction: column; gap: 2px; padding: 14px 10px; }
    .stat-item b { font-size: 22px; }
    .stat-item span { font-size: 12px; opacity: .6; }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }
    .feature-item { display: flex; flex-direction: column; gap: 8px; }
    .feature-item svg { width: 30px; height: 30px; }
    .feature-item h3 { font-size: 14px; margin: 0; }
    .feature-item p { font-size: 12px; opacity: .65; margin: 0; line-height: 1.8; }
    .codebody { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); font-size: 12.5px; line-height: 2.1; white-space: pre-wrap; word-break: break-all; margin: 0; }
    .codebody .c { opacity: .55; }
    .release-row { display: flex; flex-direction: column; gap: 6px; }
    .release-row h3 { font-size: 14px; margin: 0; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .release-row p { font-size: 12.5px; opacity: .65; margin: 0; line-height: 1.8; }
    .release-row time { font-size: 11.5px; opacity: .5; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.8; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 20%, transparent); }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero h1 { font-size: 26px; }
      .hero { padding: 26px 4px 18px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏：抽象流线 logo（非任何真实品牌）+ 导航 + 两个文字按钮 -->
    <div class="navbar rounded-box bg-base-200">
      <div class="navbar-start">
        <span class="brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 17c4-8 6 4 8-4s4 4 8-2" />
            <circle cx="4" cy="17" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="20" cy="11" r="1.6" fill="currentColor" stroke="none" />
          </svg>
          开流 <small>OpenFlow CI</small>
        </span>
        <ul class="navlinks">
          <li><a>文档</a></li>
          <li><a>指南</a></li>
          <li><a>API</a></li>
          <li><a>更新</a></li>
          <li><a>社区</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:8px">
        <button class="btn btn-primary btn-sm" type="button">开始使用</button>
        <button class="btn btn-ghost btn-sm" type="button">在 GitHub 查看</button>
      </div>
    </div>

    <!-- Hero：一句话定位 + 主操作 + 虚构项目指标 -->
    <div class="hero">
      <span class="badge badge-soft badge-sm">开源 · MIT</span>
      <h1>让每一次提交，<br />都在一分钟内跑出结果</h1>
      <p>开流 OpenFlow 是一个零配置起步的开源 CI 引擎：提交即触发，流水线即写即跑，从笔记本到自托管集群，同一份配置随处可复现。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn btn-primary" type="button">开始使用</button>
        <button class="btn btn-ghost" type="button">查看文档</button>
      </div>
    </div>

    <!-- 项目指标：虚构数字 -->
    <div class="card bg-base-200 rounded-box">
      <div class="stats-grid" style="padding:6px 10px">
        <div class="stat-item"><b>24.8k</b><span>Stars</span></div>
        <div class="stat-item"><b>3.1k</b><span>Forks</span></div>
        <div class="stat-item"><b>486</b><span>贡献者</span></div>
        <div class="stat-item"><b>v2.4.1</b><span>最新版本</span></div>
      </div>
    </div>

    <!-- 特性卡：6 个 -->
    <div>
      <h2 style="font-size:18px;margin:0 0 12px">为什么选开流</h2>
      <div class="feature-grid">
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            <h3>快速流水线</h3>
            <p>YAML 十行起步，提交后默认 15 秒出结果；缓存命中时，前端项目平均构建只要 38 秒。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
            </svg>
            <h3>多语言</h3>
            <p>Node、Python、Go、Rust、Java 内置运行时镜像；自定义镜像只要一行声明。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="7" rx="1.5" />
              <rect x="3" y="13" width="18" height="7" rx="1.5" />
              <line x1="7" y1="7.5" x2="7" y2="7.5" />
              <line x1="7" y1="16.5" x2="7" y2="16.5" />
            </svg>
            <h3>自托管</h3>
            <p>单个二进制即可启动一个 Runner；内网、离线气隙环境同样支持，数据不出机房。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 12h4l3-8 4 16 3-8h4" />
            </svg>
            <h3>可观测</h3>
            <p>每一步的耗时趋势、失败重试率自动汇总成图；日志保留 90 天，支持按分支筛选。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M10 3.5 4.5 5.5v5H7v3H4.5v5L10 20.5 11.5 15h-3v-3h3L10 3.5z" />
              <path d="M14 3.5 19.5 5.5v6H17v3h2.5v6L14 20.5z" />
            </svg>
            <h3>插件市场</h3>
            <p>200+ 官方与社区插件：钉钉提醒、漏洞扫描、小程序预览，一键装进流水线。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3 5 6v5c0 4.5 3 8.4 7 10 4-1.6 7-5.5 7-10V6l-7-3z" />
              <path d="m9.3 12 2 2 3.6-3.8" />
            </svg>
            <h3>权限模型</h3>
            <p>按仓库、分支、环境三维授权；密钥只在对应流水线运行时解密，日志里自动打码。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 代码区：macOS 窗框 + 安装命令 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:0;gap:0;overflow:hidden">
        <div style="display:flex;align-items:center;gap:7px;padding:10px 14px;border-bottom:1px solid var(--color-base-300)">
          <span style="width:11px;height:11px;border-radius:99px;background:currentColor;opacity:.75"></span>
          <span style="width:11px;height:11px;border-radius:99px;background:currentColor;opacity:.5"></span>
          <span style="width:11px;height:11px;border-radius:99px;background:currentColor;opacity:.28"></span>
          <span style="font-size:12px;opacity:.55;margin-left:6px">terminal — 三分钟跑起第一条流水线</span>
        </div>
        <pre class="codebody" style="padding:16px 18px"><span class="c"># 全局安装命令行工具</span>
$ npm install -g openflow-cli
<span class="c"># 在仓库根目录初始化，选择 Node 模板</span>
$ openflow init --template node
<span class="c"># 手动触发一次主干分支的试跑</span>
$ openflow run --branch main</pre>
      </div>
    </div>

    <!-- 更新日志：3 条 -->
    <div>
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:10px">
        <h2 style="font-size:18px;margin:0">最近更新</h2>
        <span style="font-size:12px;opacity:.55">虚构版本号与日期，仅作版式演示</span>
      </div>
      <div class="card bg-base-200 rounded-box" style="margin-bottom:10px">
        <div class="card-body release-row" style="padding:14px 16px">
          <h3><span class="badge badge-primary badge-sm">v2.4.1</span> 缓存命中率提升 <time>2026-09-28</time></h3>
          <p>Node 依赖缓存默认开启，命中时构建步骤跳过下载；Runner 端修复 Windows 下路径中文目录识别的问题。</p>
        </div>
      </div>
      <div class="card bg-base-200 rounded-box" style="margin-bottom:10px">
        <div class="card-body release-row" style="padding:14px 16px">
          <h3><span class="badge badge-secondary badge-sm">v2.4.0</span> 插件市场上线 <time>2026-08-15</time></h3>
          <p>新的插件分发协议：一次安装跨团队共享；内置 12 个官方插件，社区插件提交流程同步开放。</p>
        </div>
      </div>
      <div class="card bg-base-200 rounded-box">
        <div class="card-body release-row" style="padding:14px 16px">
          <h3><span class="badge badge-soft badge-sm">v2.3.2</span> 密钥打码默认开启 <time>2026-07-02</time></h3>
          <p>日志与构建产物上传前自动扫描常见密钥形态；按仓库维度提供例外开关，默认全部开启。</p>
        </div>
      </div>
    </div>

    <!-- 社区 CTA -->
    <div class="card rounded-box" style="padding:30px 18px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center">
      <h2 style="font-size:20px;margin:0">参与贡献</h2>
      <p style="font-size:13px;opacity:.6;max-width:440px;margin:0;line-height:1.9">新手指引用中文撰写，第一个 good-first-issue 平均 3 天内得到回应。文档错别字、示例工程、插件，都欢迎顺手提交。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn btn-primary" type="button">查看 good-first-issue</button>
        <button class="btn btn-ghost" type="button">阅读贡献指南</button>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">开流 OpenFlow 为虚构开源项目，名称、指标、版本号、更新内容与日期均为示例数据，仅用于展示 github-light 主题整页效果 · 灰墨 MoH_UI</p>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/github-light/tokens.css">
```

② 在 `<html>` 挂 `data-theme="github-light"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="github-light"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 github-light · 开源门户 —— GitHub Light 中性灰蓝开发者主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 primer/github-vscode-theme（MIT，© 2020 Primer）及其依赖
   @primer/primitives 官方 light 色板（canvas.default #ffffff、canvas.subtle #f6f8fa、
   border.default #d1d9e0、fg.default #1f2328、fg.muted #59636e、accent #0969da、
   success.emphasis #1f883d、done #8250df、attention #9a6700、danger #cf222e）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="github-light"> 即整站换肤。 */

[data-theme="github-light"] {
  color-scheme: light;

  /* 底与纸：canvas.default 纯白 / canvas.subtle 浅灰卡片 / border.default 分层 */
  --color-base-100: #ffffff;
  --color-base-200: #f6f8fa;
  --color-base-300: #d1d9e0;
  --color-base-content: #1f2328;

  /* 主色：accent 链接蓝 #0969da，只留给主操作、链接与选中态 */
  --color-primary: #0969da;
  --color-primary-content: #ffffff;

  /* 次色：success.emphasis 按钮绿 #1f883d（GitHub 主按钮绿）；强调色 done 紫 */
  --color-secondary: #1f883d;
  --color-secondary-content: #ffffff;
  --color-accent: #8250df;
  --color-accent-content: #ffffff;

  /* 中性面：fg.muted 灰 #59636e，用于次要文字与分隔 */
  --color-neutral: #59636e;
  --color-neutral-content: #ffffff;

  /* 语义色：info 蓝 / success 绿 / warning 琥珀 / error 红，均取官方亮底色 */
  --color-info: #0969da;
  --color-info-content: #ffffff;
  --color-success: #1a7f37;
  --color-success-content: #ffffff;
  --color-warning: #9a6700;
  --color-warning-content: #ffffff;
  --color-error: #cf222e;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，文档门户取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/github-light/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
