# 霓虹（mo-neon） · 灰墨 MoH_UI

> 科技活动发布页。深空底 + 深青实色按钮 + 克制亮青霓虹发光，顶栏 + 网格 hero + 静态倒计时 + 亮点卡 + 议程表 + 购票 CTA；挂 data-theme="mo-neon" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-neon/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 深空三层底：base-100 #0a0e14 页面、base-200 #111722 面板、base-300 #161d2b 图标盒；面板层次靠 1px 深青灰描边（#233043 分隔、#2f4057 图标盒）而非阴影，辅助文字统一 muted #8fa0b8。
- 主按钮是深青实色 #0e7490 白字（不是亮青）；亮青 #22d3ee 是唯一霓虹色，只给 hero 关键词、kicker 小标题、幽灵按钮描边（透明底 + 1px 亮青边 + 亮青字）与徽章，徽章文字用深色 #04141a。
- 发光极度克制：text-shadow:0 0 8px rgba(34,211,238,.55) 只用于 hero 里那一个关键词（1 处）；box-shadow:0 0 0 1px #22d3ee, 0 0 12px rgba(34,211,238,.25) 的发光描边只给三处「立即报名」按钮（顶栏 / hero / 购票卡内）、购票卡本体与倒计时秒格（共 5 处），两类合计不超过 6 处；禁止满屏霓虹、禁止多色霓虹、禁止紫粉赛博渐变。
- hero 背景是 36px 细网格线（rgba(35,48,67,.32) 的 1px 横竖线），不是渐变底色；标题用无衬线黑体 800。
- 倒计时用 daisyUI countdown 纯 CSS 静态渲染（--value:N、--digits:2、tabular-nums 38px），真实活动页必须 JS 每秒改 --value；四个数字格里只有「秒」格加亮青描边发光。
- 小圆角（--radius-box 0.5rem / field 0.25rem）、1px 细边；图标盒 44px 深底 + 亮青 currentColor 线条 SVG；议程表 min-width 560px 放 overflow-x:auto 容器里窄屏横向滚动。
- ≤860px 三栏亮点卡塌为单列、hero 标题缩到 36px；≤560px 倒计时格两列排布，整页不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-neon">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NEXUS 2026 未来开发者大会 · 活动页（mo-neon 主题案例）</title>
  <meta name="description" content="灰墨 mo-neon 霓虹赛博主题完整页面案例：深空底 + 亮青霓虹克制发光的科技活动发布页。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-neon · 霓虹赛博（深色）—— 科技活动 / 新品发布页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-neon"> 即整站换肤。
   气质：深空底、深青实色按钮、亮青霓虹点缀（发光仅在 demo.html 自定义类里克制使用）。
   灵感来源：cyberpunk / 科技发布会暗色气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-neon"] {
  color-scheme: dark;

  /* 底与纸：深空三层，层次靠明度与细描边 */
  --color-base-100: #0a0e14;
  --color-base-200: #111722;
  --color-base-300: #161d2b;
  --color-base-content: #eaf0f8;

  /* 主色：深青实色（按钮底） */
  --color-primary: #0e7490;
  --color-primary-content: #ffffff;

  /* 次色：深蓝青 */
  --color-secondary: #155e75;
  --color-secondary-content: #ffffff;

  /* 强调色：亮青霓虹（关键词 / 徽章 / 描边发光） */
  --color-accent: #22d3ee;
  --color-accent-content: #04141a;

  --color-neutral: #111722;
  --color-neutral-content: #eaf0f8;

  /* 语义色：霓虹亮色系，content 用深色保证对比 */
  --color-info: #38bdf8;
  --color-info-content: #08222f;
  --color-success: #34d399;
  --color-success-content: #06281c;
  --color-warning: #fbbf24;
  --color-warning-content: #2b1d02;
  --color-error: #f87171;
  --color-error-content: #330a0a;

  /* 圆角 / 边框：小圆角、1px 细边 */
  --radius-selector: 0.3rem;
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
    html, body { margin: 0; }
    body {
      background: var(--color-base-100);
      color: var(--color-base-content);
      font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    .wrap { max-width: 1020px; margin: 0 auto; padding: 0 20px; }
    .muted { color: #8fa0b8; }
    .accent { color: var(--color-accent); }

    /* 霓虹发光：只用于 hero 关键词、小徽章、主 CTA，克制使用 */
    .neon { text-shadow: 0 0 8px rgba(34, 211, 238, .55); }
    .neon-border { box-shadow: 0 0 0 1px #22d3ee, 0 0 12px rgba(34, 211, 238, .25); }

    /* 卡片与面板 */
    .panel { background: var(--color-base-200); border: 1px solid #233043; border-radius: .5rem; }
    .icon-box { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border: 1px solid #2f4057; border-radius: .5rem; background: var(--color-base-300); color: var(--color-accent); }

    /* 顶栏 */
    .nav { border-bottom: 1px solid #233043; background: rgba(17, 23, 34, .9); }
    .nav-in { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding: 14px 0; }
    .logo { font-size: 17px; font-weight: 800; letter-spacing: 1px; display: flex; align-items: center; gap: 10px; }
    .logo-mark { width: 26px; height: 26px; border-radius: .3rem; background: var(--color-primary); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; }
    .nav-links { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 18px; font-size: 13px; color: #8fa0b8; }
    .nav-links a { color: inherit; text-decoration: none; }
    .nav-links a:hover { color: var(--color-base-content); }

    /* Hero：细网格线背景，不要廉价渐变紫 */
    .banner { padding: 64px 0 56px; background-image: linear-gradient(rgba(35,48,67,.32) 1px, transparent 1px), linear-gradient(90deg, rgba(35,48,67,.32) 1px, transparent 1px); background-size: 36px 36px; }
    .hero-title { font-size: 52px; line-height: 1.12; font-weight: 800; letter-spacing: -1px; margin: 18px 0 0; }
    .hero-meta { display: flex; flex-wrap: wrap; gap: 8px 22px; font-size: 14px; color: #8fa0b8; margin-top: 20px; }
    .hero-cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
    .btn-ghost-cyan { background: transparent !important; border: 1px solid #22d3ee !important; color: #22d3ee !important; }

    /* 区块 */
    .section { padding: 44px 0; }
    .section-kicker { font-size: 12px; font-weight: 700; letter-spacing: 3px; color: var(--color-accent); }
    .section-title { font-size: 28px; font-weight: 800; margin: 6px 0 0; letter-spacing: -.5px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

    /* 倒计时：等宽数字块（纯 daisyUI countdown 静态渲染，无 JS） */
    .cd-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: stretch; }
    .cd-cell { padding: 18px 22px; min-width: 96px; text-align: center; }
    .cd-cell .countdown { font-size: 38px; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--color-base-content); }
    .cd-cell .cd-label { font-size: 12px; color: #8fa0b8; margin-top: 6px; letter-spacing: 2px; }

    /* 亮点卡 */
    .feat { padding: 22px; display: flex; flex-direction: column; gap: 12px; }
    .feat h3 { font-size: 16px; font-weight: 800; margin: 0; }
    .feat p { font-size: 13px; color: #8fa0b8; margin: 0; line-height: 1.7; }

    /* 议程表 */
    .tbl-wrap { overflow-x: auto; }
    @media (max-width: 640px) {
      .tbl-wrap {
        -webkit-mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
        mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
      }
    }
    .agenda { font-size: 14px; min-width: 560px; }
    .agenda th { font-size: 12px; color: #8fa0b8; font-weight: 600; }
    .speaker { display: flex; align-items: center; gap: 8px; }
    .avatar-chip { width: 26px; height: 26px; border-radius: 999px; background: var(--color-primary); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex: none; }

    /* 报名 CTA 区 */
    .ticket { padding: 30px 26px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; }
    .ticket .price { font-size: 36px; font-weight: 800; margin: 6px 0 0; }
    .ticket .price span { font-size: 14px; color: #8fa0b8; font-weight: 500; }

    /* 页脚 */
    .foot { border-top: 1px solid #233043; padding: 22px 0 28px; font-size: 12px; color: #8fa0b8; }

    @media (max-width: 860px) {
      .grid-3 { grid-template-columns: 1fr; }
      .hero-title { font-size: 36px; }
    }
    @media (max-width: 560px) {
      .banner { padding: 40px 0 36px; }
      .hero-title { font-size: 28px; }
      .section { padding: 32px 0; }
      .section-title { font-size: 22px; }
      .cd-cell { min-width: calc(50% - 7px); flex: 1; }
    }
  </style>
</head>
<body>

  <!-- 顶栏 -->
  <nav class="nav">
    <div class="wrap nav-in">
      <div class="logo"><span class="logo-mark">N</span>NEXUS 2026</div>
      <div class="nav-links">
        <a href="#highlights">大会亮点</a>
        <a href="#agenda">议程</a>
        <a href="#ticket">购票</a>
      </div>
      <button class="btn btn-sm btn-ghost-cyan neon-border" type="button">立即报名</button>
    </div>
  </nav>

  <!-- Hero -->
  <header class="banner">
    <div class="wrap">
      <span class="badge badge-soft badge-accent">11 月 21 日 · 武汉</span>
      <h1 class="hero-title">和 <span class="accent neon">未来开发者</span><br />面对面的一整天。</h1>
      <p class="muted" style="font-size:16px;max-width:520px;line-height:1.8;margin:18px 0 0">一场面向独立开发者与技术团队的线下大会：主题演讲、动手工作坊、可上手试玩的互动展区，全部围绕「把 AI 用进日常开发」。</p>
      <div class="hero-meta">
        <span>2026 年 11 月 21 日 09:00</span>
        <span>武汉光谷科技会展中心 · 3 号馆</span>
        <span>预计到场 800 人（示例数据）</span>
      </div>
      <div class="hero-cta">
        <button class="btn btn-primary neon-border" type="button">立即报名</button>
        <button class="btn btn-ghost-cyan" type="button">查看议程</button>
      </div>
    </div>
  </header>

  <!-- 倒计时静态块：daisyUI countdown 纯 CSS 静态渲染，页面为静态展示 -->
  <section class="section" style="padding-top:8px">
    <div class="wrap">
      <div class="cd-row">
        <div class="cd-cell panel"><div class="countdown"><span style="--value:2;--digits:2;">02</span></div><div class="cd-label">天</div></div>
        <div class="cd-cell panel"><div class="countdown"><span style="--value:18;--digits:2;">18</span></div><div class="cd-label">时</div></div>
        <div class="cd-cell panel"><div class="countdown"><span style="--value:45;--digits:2;">45</span></div><div class="cd-label">分</div></div>
        <div class="cd-cell panel neon-border"><div class="countdown"><span style="--value:30;--digits:2;">30</span></div><div class="cd-label">秒</div></div>
      </div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">倒计时为静态展示，真实活动页需 JS 每秒更新 --value。</p>
    </div>
  </section>

  <!-- 亮点 3 张卡 -->
  <section class="section" id="highlights">
    <div class="wrap">
      <div class="section-kicker">大会亮点</div>
      <h2 class="section-title">这一天，你会拿到三样东西</h2>
      <div class="grid-3" style="margin-top:22px">
        <div class="feat panel">
          <div class="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3ZM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z" /></svg>
          </div>
          <h3>主论坛</h3>
          <p>6 场主题演讲，从 AI 工具链讲到开源生态，讲者都是还在一线写代码的人。</p>
        </div>
        <div class="feat panel">
          <div class="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
          </div>
          <h3>动手工作坊</h3>
          <p>每场 40 席，从 0 搭一个自己的设计系统，结束时带走可运行的模板。</p>
        </div>
        <div class="feat panel">
          <div class="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" /></svg>
          </div>
          <h3>互动展区</h3>
          <p>12 个开源项目现场摆台，作者在展位上，直接当面问问题。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 议程表 -->
  <section class="section" id="agenda" style="border-top:1px solid #233043">
    <div class="wrap">
      <div class="section-kicker">大会议程</div>
      <h2 class="section-title">11 月 21 日 · 主会场（示例排期）</h2>
      <div class="panel" style="margin-top:22px">
        <div class="tbl-wrap">
          <table class="table agenda">
            <thead>
              <tr><th>时间</th><th>环节</th><th>嘉宾</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00</td>
                <td>开场主题：AI 之后，开发者还剩什么</td>
                <td><span class="speaker"><span class="avatar-chip">澈</span>张澈 · 首席架构师</span></td>
              </tr>
              <tr>
                <td>10:30</td>
                <td>前端与 AI 工具链的日常搭配</td>
                <td><span class="speaker"><span class="avatar-chip" style="background:var(--color-secondary)">萌</span>李萌 · 开源维护者</span></td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>午间交流 · 自由展区</td>
                <td><span class="muted">组委会</span></td>
              </tr>
              <tr>
                <td>13:30</td>
                <td>工作坊：从 0 搭一个设计系统</td>
                <td><span class="speaker"><span class="avatar-chip" style="background:var(--color-accent);color:#04141a">岸</span>王岸 · 设计工程师</span></td>
              </tr>
              <tr>
                <td>15:30</td>
                <td>圆桌：开源生态的下一个十年</td>
                <td><span class="speaker"><span class="avatar-chip" style="background:var(--color-secondary)">昀</span>赵昀 / 陈拾</span></td>
              </tr>
              <tr>
                <td>17:00</td>
                <td>闭幕与现场抽奖</td>
                <td><span class="muted">组委会</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- 报名 CTA 区 -->
  <section class="section" id="ticket">
    <div class="wrap">
      <div class="ticket panel neon-border">
        <div>
          <span class="badge badge-soft badge-warning">早鸟票 · 剩 3 天</span>
          <h2 style="font-size:24px;font-weight:800;margin:12px 0 0">单人通票</h2>
          <div class="price">¥199 <span>/ 人 · 原价 ¥299（示例价格）</span></div>
          <p class="muted" style="font-size:13px;margin:8px 0 0">剩余 87 个名额 · 含全天场册与午餐自助（示例数据）</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:stretch">
          <button class="btn btn-primary neon-border" type="button">立即报名</button>
          <span class="muted" style="font-size:12px;text-align:center">报名后 24 小时内收到电子票</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="foot">
    <div class="wrap">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px">
        <span>© 2026 NEXUS 开发者大会组委会（示例活动）</span>
        <span>本页时间、嘉宾与票价均为示例数据，仅用于展示 mo-neon 主题整页效果 · 灰墨 MoH_UI</span>
      </div>
    </div>
  </footer>

</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-neon/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-neon"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-neon"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-neon · 霓虹赛博（深色）—— 科技活动 / 新品发布页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-neon"> 即整站换肤。
   气质：深空底、深青实色按钮、亮青霓虹点缀（发光仅在 demo.html 自定义类里克制使用）。
   灵感来源：cyberpunk / 科技发布会暗色气质（仅风格参考，非品牌素材）。 */

[data-theme="mo-neon"] {
  color-scheme: dark;

  /* 底与纸：深空三层，层次靠明度与细描边 */
  --color-base-100: #0a0e14;
  --color-base-200: #111722;
  --color-base-300: #161d2b;
  --color-base-content: #eaf0f8;

  /* 主色：深青实色（按钮底） */
  --color-primary: #0e7490;
  --color-primary-content: #ffffff;

  /* 次色：深蓝青 */
  --color-secondary: #155e75;
  --color-secondary-content: #ffffff;

  /* 强调色：亮青霓虹（关键词 / 徽章 / 描边发光） */
  --color-accent: #22d3ee;
  --color-accent-content: #04141a;

  --color-neutral: #111722;
  --color-neutral-content: #eaf0f8;

  /* 语义色：霓虹亮色系，content 用深色保证对比 */
  --color-info: #38bdf8;
  --color-info-content: #08222f;
  --color-success: #34d399;
  --color-success-content: #06281c;
  --color-warning: #fbbf24;
  --color-warning-content: #2b1d02;
  --color-error: #f87171;
  --color-error-content: #330a0a;

  /* 圆角 / 边框：小圆角、1px 细边 */
  --radius-selector: 0.3rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-neon/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
