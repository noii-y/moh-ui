# 穹览指挥中心（超深色）（mo-command） · 灰墨 MoH_UI

> 虚构 16:9 数据指挥中心大屏「穹览 OVERVIEW COMMAND · 运营态势」整页。比常规后台更深的近黑底、大字号 KPI 带、巨幅 SVG 折线/地图热力/柱状/环形/雷达栅格与实时事件流，投屏远距离可读；挂 data-theme="mo-command" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-command/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 引入方式：项目已引 daisyUI 后，<link rel="stylesheet" href="tokens.css" /> 并在 <html data-theme="mo-command"> 即整站换肤；底色是比 mo-dark 更深的近黑海军（--color-base-100 oklch(15% …)，mo-dark 是 23%），面板 base-200 更深一档 12.5%，层次只靠明度微差不靠描边。
- 正文与对比度已实测：正文 oklch94 on base100 达 16.5:1、次级文字 oklch72 on base100 7.9:1、大屏青色 --color-primary oklch76 195 on 底 9.7:1（按钮深字 content 与青底 9.2:1）、error 红 on 底 6.3:1；所有图表文字、KPI 数字、事件流正文都在这条线上，不要给文字加 opacity 低于 .7 的弱化。
- 这是投屏大屏不是后台：无侧边栏，顶栏一行带 + 密集栅格；KPI 大数字 30px 加粗、tabular-nums，标签 12px 弱化，趋势箭头用语义色（成功绿 ▲ 向好、警告棕 ▲ 接近阈值、错误红只给告警数）；字号比常规后台大两号，禁止把大屏做成 14px 小字段落表单。
- 图表系列配色固定：折线与主柱状用 --color-primary 屏幕青，次级柱/系列用 --color-secondary 数据蓝与 --color-accent 翠绿，热力点按片区密度叠语义色（success/primary/warning/error）；所有图表为成形内联 SVG（网格线 + 数据点 + 末端标注 + 中文图例），禁止空灰块占位、禁止 emoji。
- 事件流必须带级别中文徽章：恢复/达成/正常用 badge-soft badge-success、警告用 badge-warning、严重用 badge-error、普通通知用 badge-info；时间戳 tabular-nums，每条一行不省略级别词。
- 与 mo-dark 的差异是硬红线：mo-dark 是带侧边栏、卡片密度常规的后台；本套是 16:9 满屏大屏——无侧边栏、无操作表单、无客户叙事，整页只有 KPI 带 + 大图表 + 事件流；与 abyss 的差异在于本套青绿高亮、大屏栅格密度，abyss 是深渊暗紫气质。
- 圆角走方正档（box 0.5rem、selector 0.25rem）、细 1px base-300 描边、允许轻微 depth:1；禁止大面积发光/霓虹渐变，主色只用于关键数字与当前高亮。
- 390px 窄屏规则：大屏栅格自然退单列（KPI 6→3→2 列、三图表行→单列堆叠），所有 SVG width:100% 等比缩放、文字随 viewBox 缩放不溢出；整页无 position:fixed、无横向滚动。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-command">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>穹览指挥中心 · 运营态势大屏（mo-command 主题案例）</title>
  <meta name="description" content="灰墨 mo-command 主题完整页面案例：虚构 16:9 数据指挥中心大屏整页。超深近黑底、大字号 KPI 带、巨幅 SVG 图表栅格与实时事件流，挂 data-theme=&quot;mo-command&quot; 即整站换肤。本页只依赖 daisyUI 与 mo-command 主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-command · 穹览指挥中心（超深色）—— 16:9 运营大屏主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-command"> 即整站换肤。
   设计目标：比常规后台更深的近黑底色，大字号大屏 KPI，青绿高亮不刺眼；投屏远距离可读。 */

[data-theme="mo-command"] {
  color-scheme: dark;

  /* 底与纸：比 mo-dark 更深的近黑海军三层，层次靠明度微差 */
  --color-base-100: oklch(15% 0.015 245);
  --color-base-200: oklch(12.5% 0.014 245);
  --color-base-300: oklch(18.5% 0.014 245);
  --color-base-content: oklch(94% 0.008 230);

  /* 主色：屏幕青（深字 9.2:1），大屏高亮主色，只留给关键数字与主操作 */
  --color-primary: oklch(76% 0.14 195);
  --color-primary-content: oklch(18% 0.04 195);

  /* 次色：数据蓝，用于次级图表系列 */
  --color-secondary: oklch(72% 0.12 255);
  --color-secondary-content: oklch(18% 0.03 255);

  /* 强调：翠绿，用于增长/达标系列 */
  --color-accent: oklch(76% 0.13 160);
  --color-accent-content: oklch(18% 0.03 160);

  --color-neutral: oklch(20% 0.012 245);
  --color-neutral-content: oklch(90% 0.006 230);

  /* 语义色：大屏高明度，暗底下 6:1 以上、不刺眼 */
  --color-info: oklch(74% 0.11 230);
  --color-info-content: oklch(18% 0.03 230);
  --color-success: oklch(76% 0.13 155);
  --color-success-content: oklch(18% 0.03 155);
  --color-warning: oklch(82% 0.12 85);
  --color-warning-content: oklch(22% 0.05 85);
  --color-error: oklch(68% 0.17 25);
  --color-error-content: oklch(18% 0.04 25);

  /* 圆角 / 尺寸 / 边框：大屏偏方正、细描边、轻微深度 */
  --radius-selector: 0.25rem;
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
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 14px; line-height: 1.5; }
    a:focus-visible, button:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; border-radius: 4px; }

    /* 顶栏 */
    .cc-topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding: 12px 22px; border-bottom: 1px solid var(--color-base-300); }
    .cc-brand { display: flex; align-items: baseline; gap: 12px; }
    .cc-brand h1 { font-size: 22px; margin: 0; font-weight: 800; letter-spacing: 2px; }
    .cc-brand span { font-size: 12px; color: var(--color-neutral-content); opacity: .7; letter-spacing: 1px; }
    .cc-clock { font-size: 13px; color: var(--color-neutral-content); font-variant-numeric: tabular-nums; }
    .cc-topside { display: flex; align-items: center; gap: 12px; }
    .cc-iconbtn { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-base-300); border-radius: 6px; background: var(--color-base-200); color: var(--color-base-content); }
    .cc-iconbtn svg { width: 19px; height: 19px; }
    .cc-iconbtn.has-alert { color: var(--color-error); border-color: var(--color-error); }

    .cc-wrap { max-width: 1440px; margin: 0 auto; padding: 16px 22px 28px; display: flex; flex-direction: column; gap: 14px; }

    /* KPI 大数字带 */
    .cc-kpis { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
    .cc-kpi { border: 1px solid var(--color-base-300); border-radius: var(--radius-box); background: var(--color-base-200); padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
    .cc-kpi .k { font-size: 12px; color: var(--color-neutral-content); opacity: .8; display: flex; align-items: center; justify-content: space-between; }
    .cc-kpi .v { font-size: 30px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
    .cc-kpi .v small { font-size: 14px; font-weight: 600; opacity: .7; }
    .cc-kpi .t { font-size: 12px; }

    /* 图表栅格 */
    .cc-grid { display: grid; grid-template-columns: 1.5fr 1.1fr 1fr; gap: 14px; align-items: stretch; }
    .cc-card { border: 1px solid var(--color-base-300); border-radius: var(--radius-box); background: var(--color-base-200); padding: 14px 16px; display: flex; flex-direction: column; gap: 10px; min-width: 0; }
    .cc-card h2 { font-size: 14px; margin: 0; font-weight: 700; display: flex; justify-content: space-between; gap: 8px; }
    .cc-card h2 .sub { font-size: 11px; font-weight: 400; color: var(--color-neutral-content); opacity: .7; }
    .cc-card svg { width: 100%; height: auto; display: block; }

    .cc-bottom { display: grid; grid-template-columns: 1fr 1fr 1.3fr; gap: 14px; }

    /* 排行条 */
    .cc-rank { display: flex; flex-direction: column; gap: 10px; }
    .cc-rank .r { display: grid; grid-template-columns: 76px 1fr 56px; gap: 10px; align-items: center; font-size: 12px; }
    .cc-rank .bar { height: 8px; border-radius: 4px; background: var(--color-base-300); overflow: hidden; }
    .cc-rank .bar i { display: block; height: 100%; border-radius: 4px; }
    .cc-rank .num { text-align: right; font-variant-numeric: tabular-nums; }

    /* 事件流 */
    .cc-feed { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
    .cc-feed li { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--color-base-300); font-size: 12.5px; }
    .cc-feed li:last-child { border-bottom: 0; }
    .cc-feed time { color: var(--color-neutral-content); opacity: .75; font-variant-numeric: tabular-nums; white-space: nowrap; }
    .cc-feed .ev { flex: 1; min-width: 0; }

    .cc-foot { text-align: center; font-size: 11px; color: var(--color-neutral-content); opacity: .6; padding-top: 4px; }

    @media (max-width: 1080px) {
      .cc-kpis { grid-template-columns: repeat(3, 1fr); }
      .cc-grid { grid-template-columns: 1fr 1fr; }
      .cc-grid .cc-card:last-child { grid-column: span 2; }
    }
    @media (max-width: 640px) {
      .cc-kpis { grid-template-columns: repeat(2, 1fr); }
      .cc-grid, .cc-bottom { grid-template-columns: 1fr; }
      .cc-grid .cc-card:last-child { grid-column: auto; }
      .cc-kpi .v { font-size: 24px; }
    }
  </style>
</head>
<body>
  <!-- 顶栏 -->
  <header class="cc-topbar">
    <div class="cc-brand">
      <h1>穹览指挥中心</h1>
      <span>OVERVIEW COMMAND · 运营态势（虚构示例）</span>
    </div>
    <div class="cc-topside">
      <span class="cc-clock">2026-10-18 周日 10:30:00 · 数据每 5 秒同步</span>
      <button class="cc-iconbtn has-alert" type="button" title="告警占位（3 条未处理）" aria-label="告警入口">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>
      </button>
      <button class="cc-iconbtn" type="button" title="全屏占位" aria-label="全屏">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4" /></svg>
      </button>
    </div>
  </header>

  <div class="cc-wrap">
    <!-- KPI 大数字带 -->
    <section class="cc-kpis" aria-label="今日核心指标">
      <div class="cc-kpi">
        <span class="k">今日交易额 <span>万元</span></span>
        <span class="v">486.2<small> 万</small></span>
        <span class="t" style="color:var(--color-success)">▲ 6.4% 较昨日同时段</span>
      </div>
      <div class="cc-kpi">
        <span class="k">在线用户</span>
        <span class="v">12,480</span>
        <span class="t" style="color:var(--color-success)">▲ 2.1% 较上一小时</span>
      </div>
      <div class="cc-kpi">
        <span class="k">今日订单</span>
        <span class="v">8,316</span>
        <span class="t" style="color:var(--color-neutral-content)">持平昨日预期进度</span>
      </div>
      <div class="cc-kpi">
        <span class="k">履约率</span>
        <span class="v">99.2<small>%</small></span>
        <span class="t" style="color:var(--color-success)">▲ 达标线 98.5%</span>
      </div>
      <div class="cc-kpi">
        <span class="k">峰值并发</span>
        <span class="v">3,942</span>
        <span class="t" style="color:var(--color-warning)">接近预警阈值 4,000</span>
      </div>
      <div class="cc-kpi">
        <span class="k">进行中告警</span>
        <span class="v" style="color:var(--color-error)">7</span>
        <span class="t" style="color:var(--color-error)">严重 1 · 警告 6</span>
      </div>
    </section>

    <!-- 主图表栅格 -->
    <section class="cc-grid" aria-label="核心态势图表">
      <!-- 左：大折线 -->
      <div class="cc-card">
        <h2>全站实时访问趋势 <span class="sub">近 2 小时 · 5 秒粒度</span></h2>
        <svg viewBox="0 0 560 260" role="img" aria-label="访问趋势折线：整体上行，10:12 出现一个尖峰后回落">
          <g stroke="var(--color-base-300)" stroke-width="1">
            <path d="M30 40h510M30 100h510M30 160h510M30 220h510" />
          </g>
          <g font-size="10" fill="var(--color-neutral-content)" opacity=".8">
            <text x="6" y="44">2万</text><text x="6" y="104">1.5万</text><text x="6" y="164">1万</text><text x="6" y="224">0.5万</text>
          </g>
          <path d="M30 200 L78 188 L126 196 L174 170 L222 150 L270 158 L318 60 L366 142 L414 128 L462 110 L510 96 L540 88 L540 230 L30 230 Z" fill="var(--color-primary)" opacity=".14" />
          <path d="M30 200 L78 188 L126 196 L174 170 L222 150 L270 158 L318 60 L366 142 L414 128 L462 110 L510 96 L540 88" fill="none" stroke="var(--color-primary)" stroke-width="2.5" />
          <circle cx="318" cy="60" r="4.5" fill="var(--color-warning)" />
          <text x="318" y="46" text-anchor="middle" font-size="10" fill="var(--color-warning)">尖峰 10:12</text>
        </svg>
      </div>

      <!-- 中：地图态势 -->
      <div class="cc-card">
        <h2>区域热力分布 <span class="sub">按城市片区 · 实时</span></h2>
        <svg viewBox="0 0 420 260" role="img" aria-label="区域热力地图：中部与东部片区点位密集，西南稀疏">
          <rect x="20" y="20" width="170" height="100" rx="8" fill="var(--color-base-300)" opacity=".7" />
          <rect x="210" y="20" width="190" height="100" rx="8" fill="var(--color-base-300)" />
          <rect x="20" y="140" width="170" height="100" rx="8" fill="var(--color-base-300)" />
          <rect x="210" y="140" width="190" height="100" rx="8" fill="var(--color-base-300)" opacity=".6" />
          <g>
            <circle cx="110" cy="70" r="6" fill="var(--color-success)" /><circle cx="150" cy="95" r="5" fill="var(--color-success)" opacity=".8" />
            <circle cx="300" cy="60" r="7" fill="var(--color-primary)" /><circle cx="345" cy="85" r="6" fill="var(--color-primary)" opacity=".85" /><circle cx="270" cy="95" r="5" fill="var(--color-warning)" />
            <circle cx="100" cy="190" r="6" fill="var(--color-warning)" /><circle cx="140" cy="215" r="5" fill="var(--color-error)" />
            <circle cx="320" cy="190" r="5" fill="var(--color-success)" opacity=".7" />
          </g>
          <g font-size="10" fill="var(--color-base-content)" opacity=".85">
            <text x="30" y="36">河西片区</text><text x="220" y="36">主城片区</text>
            <text x="30" y="156">高新片区</text><text x="220" y="156">空港片区</text>
          </g>
        </svg>
      </div>

      <!-- 右：柱状 -->
      <div class="cc-card">
        <h2>渠道订单对比 <span class="sub">今日 · 单</span></h2>
        <svg viewBox="0 0 300 260" role="img" aria-label="六根渠道订单柱状图：自营 App 最高，第三方平台最低">
          <g stroke="var(--color-base-300)" stroke-width="1">
            <path d="M20 40h260M20 100h260M20 160h260M20 220h260" />
          </g>
          <rect x="34" y="60" width="26" height="160" rx="3" fill="var(--color-primary)" />
          <rect x="80" y="96" width="26" height="124" rx="3" fill="var(--color-secondary)" />
          <rect x="126" y="120" width="26" height="100" rx="3" fill="var(--color-secondary)" opacity=".75" />
          <rect x="172" y="140" width="26" height="80" rx="3" fill="var(--color-accent)" />
          <rect x="218" y="168" width="26" height="52" rx="3" fill="var(--color-accent)" opacity=".7" />
          <g font-size="10" fill="var(--color-neutral-content)" opacity=".85" text-anchor="middle">
            <text x="47" y="238">自营</text><text x="93" y="238">小程序</text><text x="139" y="238">Web</text>
            <text x="185" y="238">H5</text><text x="231" y="238">第三方</text>
          </g>
        </svg>
      </div>
    </section>

    <!-- 下排：环形 + 雷达 + 事件流 -->
    <section class="cc-bottom" aria-label="质量分布与实时事件">
      <div class="cc-card">
        <h2>履约质量构成 <span class="sub">环形</span></h2>
        <svg viewBox="0 0 200 150" role="img" aria-label="环形图：准时送达占七成半，延迟两成，异常半成">
          <circle cx="100" cy="75" r="52" fill="none" stroke="var(--color-base-300)" stroke-width="18" />
          <circle cx="100" cy="75" r="52" fill="none" stroke="var(--color-success)" stroke-width="18" stroke-dasharray="245 327" stroke-dashoffset="0" transform="rotate(-90 100 75)" />
          <circle cx="100" cy="75" r="52" fill="none" stroke="var(--color-warning)" stroke-width="18" stroke-dasharray="60 327" stroke-dashoffset="-245" transform="rotate(-90 100 75)" />
          <circle cx="100" cy="75" r="52" fill="none" stroke="var(--color-error)" stroke-width="18" stroke-dasharray="12 327" stroke-dashoffset="-305" transform="rotate(-90 100 75)" />
          <text x="100" y="72" text-anchor="middle" font-size="17" font-weight="800" fill="var(--color-base-content)">75%</text>
          <text x="100" y="90" text-anchor="middle" font-size="10" fill="var(--color-neutral-content)">准时送达</text>
        </svg>
        <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:11px;color:var(--color-neutral-content)">
          <span><i style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--color-success);margin-right:5px"></i>准时 75%</span>
          <span><i style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--color-warning);margin-right:5px"></i>延迟 18%</span>
          <span><i style="display:inline-block;width:9px;height:9px;border-radius:2px;background:var(--color-error);margin-right:5px"></i>异常 4%</span>
        </div>
      </div>

      <div class="cc-card">
        <h2>系统健康五维评分 <span class="sub">满分 100</span></h2>
        <svg viewBox="0 0 200 160" role="img" aria-label="五维雷达图：可用率与响应速度最高，容量规划最弱">
          <g stroke="var(--color-base-300)" stroke-width="1" fill="none">
            <polygon points="100,20 168,68 142,140 58,140 32,68" />
            <polygon points="100,48 143,80 126,122 74,122 57,80" opacity=".6" />
          </g>
          <polygon points="100,28 158,72 138,132 66,128 44,76" fill="var(--color-primary)" opacity=".25" stroke="var(--color-primary)" stroke-width="2" />
          <g font-size="10" fill="var(--color-neutral-content)" text-anchor="middle">
            <text x="100" y="14">可用率</text><text x="176" y="66">响应</text><text x="148" y="152">容量</text>
            <text x="52" y="152">稳定</text><text x="24" y="66">安全</text>
          </g>
        </svg>
      </div>

      <div class="cc-card">
        <h2>实时事件流 <span class="sub">最新 9 条 · 每 5 秒滚动</span></h2>
        <ul class="cc-feed">
          <li><time>10:29:55</time><span class="ev">主城片区网关 GPU-03 负载回落至 61%</span><span class="badge badge-soft badge-success">恢复</span></li>
          <li><time>10:29:48</time><span class="ev">第三方支付回调超时重试第 2 次</span><span class="badge badge-soft badge-warning">警告</span></li>
          <li><time>10:29:31</time><span class="ev">空港片区新增 3 个配送点位接入</span><span class="badge badge-soft badge-info">通知</span></li>
          <li><time>10:29:12</time><span class="ev">高新片区数据库只读副本同步延迟 9s</span><span class="badge badge-soft badge-error">严重</span></li>
          <li><time>10:28:57</time><span class="ev">自营 App 今日累计下单破 4,000 单</span><span class="badge badge-soft badge-success">达成</span></li>
          <li><time>10:28:40</time><span class="ev">缓存集群 mem-7 节点心跳恢复</span><span class="badge badge-soft badge-success">恢复</span></li>
          <li><time>10:28:22</time><span class="ev">夜间批处理任务「账单结算」提前完成</span><span class="badge badge-soft badge-info">通知</span></li>
          <li><time>10:28:05</time><span class="ev">响应速度 P99 升至 312ms，接近阈值</span><span class="badge badge-soft badge-warning">警告</span></li>
          <li><time>10:27:49</time><span class="ev">安全扫描：未发现新增高危漏洞</span><span class="badge badge-soft badge-success">正常</span></li>
        </ul>
      </div>
    </section>

    <footer class="cc-foot">
      本页指挥中心名「穹览 OVERVIEW COMMAND」、指标数字、片区与事件均为虚构示例，仅用于展示 mo-command 主题整页效果 · 灰墨 MoH_UI
    </footer>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-command/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-command"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-command"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-command · 穹览指挥中心（超深色）—— 16:9 运营大屏主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-command"> 即整站换肤。
   设计目标：比常规后台更深的近黑底色，大字号大屏 KPI，青绿高亮不刺眼；投屏远距离可读。 */

[data-theme="mo-command"] {
  color-scheme: dark;

  /* 底与纸：比 mo-dark 更深的近黑海军三层，层次靠明度微差 */
  --color-base-100: oklch(15% 0.015 245);
  --color-base-200: oklch(12.5% 0.014 245);
  --color-base-300: oklch(18.5% 0.014 245);
  --color-base-content: oklch(94% 0.008 230);

  /* 主色：屏幕青（深字 9.2:1），大屏高亮主色，只留给关键数字与主操作 */
  --color-primary: oklch(76% 0.14 195);
  --color-primary-content: oklch(18% 0.04 195);

  /* 次色：数据蓝，用于次级图表系列 */
  --color-secondary: oklch(72% 0.12 255);
  --color-secondary-content: oklch(18% 0.03 255);

  /* 强调：翠绿，用于增长/达标系列 */
  --color-accent: oklch(76% 0.13 160);
  --color-accent-content: oklch(18% 0.03 160);

  --color-neutral: oklch(20% 0.012 245);
  --color-neutral-content: oklch(90% 0.006 230);

  /* 语义色：大屏高明度，暗底下 6:1 以上、不刺眼 */
  --color-info: oklch(74% 0.11 230);
  --color-info-content: oklch(18% 0.03 230);
  --color-success: oklch(76% 0.13 155);
  --color-success-content: oklch(18% 0.03 155);
  --color-warning: oklch(82% 0.12 85);
  --color-warning-content: oklch(22% 0.05 85);
  --color-error: oklch(68% 0.17 25);
  --color-error-content: oklch(18% 0.04 25);

  /* 圆角 / 尺寸 / 边框：大屏偏方正、细描边、轻微深度 */
  --radius-selector: 0.25rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-command/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
