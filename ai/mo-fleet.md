# 驰途调度（mo-fleet） · 灰墨 MoH_UI

> 虚构物流配送调度台「驰途调度 CHITU DISPATCH · 城配调度中心」整页。高对比功能色（待取/配送中/签收/异常一目了然）、顶栏+左栏后台骨架、时效 KPI 行、网格实时地图态势、在岗骑手与运单双列表；挂 data-theme="mo-fleet" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-fleet/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 引入方式：项目已引 daisyUI 后，<link rel="stylesheet" href="tokens.css" /> 并在 <html data-theme="mo-fleet"> 即整站换肤；本主题是浅色白底（--color-base-100 #FFFFFF），正文 --color-base-content #141A22，对比度已实测：正文白底 17.5:1、次级文字 --color-neutral #3A4450 白底 9.9:1，严禁用 opacity 压文字，需要浅一层就换成 --color-neutral。
- 状态语义色固定四色且全部加深：--color-info #173FA8（待取件/等待揽收，白字 9.1:1）、--color-primary #1C4F9E（配送中/主操作，白字 7.9:1）、--color-success #175A22（已签收/准时，白字 8.3:1）、--color-error #A01B1B（异常单，白字 7.9:1）；--color-warning #6B4400 只用于即将超时/定位异常的提醒（白字 8.6:1）。状态徽章一律 badge-soft + 中文文字，不许只靠颜色传达。
- 主色 #1C4F9E 只留给派单主按钮、当前导航（menu-active 左侧 3px 竖条 + 浅灰底）与关键数字；车队/班次用 --color-secondary #0F6A58 青绿做次级区分；加急件才用 --color-accent #8A5A00 琥珀棕；禁止大面积铺主色渐变。
- 信息密度优先的排版：KPI 用克制小卡（标签 13px 中性色 + 大数字 28px 加粗 + 12px 副说明），不是营销大卡；左栏菜单每项 18px 线性 SVG 图标 + 14px 文字；圆角走 --radius-box 0.5rem 方正档，细 1px 中性灰描边、零投影。
- 地图必须是成形 SVG：网格线 + 主干道 + 片区淡色块（语义色 8%~10% 透明）+ 骑手点位圆点（状态语义色实心 + 白底圆心）+ 虚线在途路线，底部一行图例配中文状态词；禁止放一个空灰块当地图占位，也禁止用 emoji 当点位。
- 动作按钮写真实业务动作：派发选中运单/一键派单/改派订单/联系骑手/导出运单，禁止写颜色名（Primary/Success）或营销词（立即抢购）。
- 与相近主题的差异：mo-gray 是客户资料型 CRM 中性灰、mo-classic 是普通通用后台——本主题核心是实时调度：地图态势 + 骑手位置 + 运单时效倒计时，不要做成客户列表或个人仪表盘。
- 390px 窄屏规则：后台骨架纵向堆叠（左栏菜单折行成横向 flex-wrap）、骑手/运单双栏变单列、KPI auto-fit、地图 SVG width:100% 等比缩；整页无 position:fixed 遮挡、无横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-fleet">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>驰途调度 · 城配调度中心（mo-fleet 主题案例）</title>
  <meta name="description" content="灰墨 mo-fleet 主题完整页面案例：虚构物流配送调度台整页。高对比功能色、实时运单与骑手位置、网格地图态势，挂 data-theme=&quot;mo-fleet&quot; 即整站换肤。本页只依赖 daisyUI 与 mo-fleet 主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-fleet · 驰途调度（浅色）—— 物流配送调度台高对比功能色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-fleet"> 即整站换肤。
   设计目标：白底高对比功能色，状态语义一眼可读（待取/配送中/签收/异常），户外与办公双场景都看得清。 */

[data-theme="mo-fleet"] {
  color-scheme: light;

  /* 底与纸：纯白 + 浅灰面板，细中性灰边框，层次靠明度与描边 */
  --color-base-100: #ffffff;
  --color-base-200: #f1f3f5;
  --color-base-300: #c3cad2;
  --color-base-content: #141a22;

  /* 主色：调度深蓝（白字 7.9:1），只留给派单主操作、当前导航与关键链接 */
  --color-primary: #1c4f9e;
  --color-primary-content: #ffffff;

  /* 次色：配送青绿（白字 6.5:1），用于车队/班次等次级强调 */
  --color-secondary: #0f6a58;
  --color-secondary-content: #ffffff;

  /* 强调：加急琥珀棕（白字 5.9:1），仅用于加急件与时限提醒 */
  --color-accent: #8a5a00;
  --color-accent-content: #ffffff;

  --color-neutral: #3a4450;
  --color-neutral-content: #ffffff;

  /* 语义色：全部加深到白字 ≥6:1，状态同时配中文文字，不靠颜色单独传达 */
  --color-info: #173fa8;      /* 待取 / 等待揽收 */
  --color-info-content: #ffffff;
  --color-success: #175a22;   /* 已签收 / 准时 */
  --color-success-content: #ffffff;
  --color-warning: #6b4400;    /* 即将超时 / 改派 */
  --color-warning-content: #ffffff;
  --color-error: #a01b1b;      /* 异常单 */
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：调度台偏方正、细边框、无投影，信息密度优先 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
  </style>
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 15px; line-height: 1.6; }
    a:focus-visible, button:focus-visible, input:focus-visible {
      outline: 3px solid var(--color-info);
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* 后台骨架：顶栏 + 左栏 + 主内容 */
    .fb-topbar { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; padding: 12px 20px; border-bottom: 1px solid var(--color-base-300); background: var(--color-base-100); position: sticky; top: 0; z-index: 5; }
    .fb-brand { display: flex; align-items: center; gap: 12px; }
    .fb-logo { width: 40px; height: 40px; flex: none; border-radius: 6px; background: var(--color-primary); color: var(--color-primary-content); display: flex; align-items: center; justify-content: center; }
    .fb-logo svg { width: 24px; height: 24px; }
    .fb-brand b { font-size: 18px; display: block; line-height: 1.2; }
    .fb-brand span { font-size: 12px; color: var(--color-neutral); letter-spacing: .5px; }
    .fb-topside { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
    .fb-op { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--color-neutral); }
    .fb-op svg { width: 18px; height: 18px; color: var(--color-base-content); }

    .fb-shell { display: grid; grid-template-columns: 200px 1fr; gap: 0; max-width: 1280px; margin: 0 auto; }
    .fb-side { border-right: 1px solid var(--color-base-300); padding: 14px 10px; }
    .fb-menu { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
    .fb-menu a { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 6px; font-size: 14px; color: var(--color-base-content); text-decoration: none; }
    .fb-menu a svg { width: 18px; height: 18px; flex: none; color: var(--color-neutral); }
    .fb-menu .menu-active { background: var(--color-base-200); color: var(--color-primary); font-weight: 700; box-shadow: inset 3px 0 0 var(--color-primary); }
    .fb-menu .menu-active svg { color: var(--color-primary); }
    .fb-main { padding: 18px 20px 40px; display: flex; flex-direction: column; gap: 16px; min-width: 0; }

    /* KPI 行：克制数字，非营销大卡 */
    .fb-kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; }
    .fb-kpi { border: 1px solid var(--color-base-300); border-radius: var(--radius-box); background: var(--color-base-100); padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
    .fb-kpi .k { font-size: 13px; color: var(--color-neutral); display: flex; align-items: center; gap: 8px; }
    .fb-kpi .k i { width: 8px; height: 8px; border-radius: 50%; flex: none; }
    .fb-kpi .v { font-size: 28px; font-weight: 800; line-height: 1.1; }
    .fb-kpi .d { font-size: 12px; color: var(--color-neutral); }

    /* 通用卡片 */
    .fb-card { border: 1px solid var(--color-base-300); border-radius: var(--radius-box); background: var(--color-base-100); padding: 16px; }
    .fb-card h2 { font-size: 16px; margin: 0; font-weight: 800; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
    .fb-card h2 .sub { font-size: 12px; font-weight: 400; color: var(--color-neutral); }

    /* 地图 */
    .fb-mapwrap { border: 1px solid var(--color-base-300); border-radius: var(--radius-box); overflow: hidden; background: var(--color-base-200); }
    .fb-mapwrap svg { display: block; width: 100%; height: auto; }
    .fb-legend { display: flex; gap: 16px; flex-wrap: wrap; padding: 8px 16px; font-size: 12px; color: var(--color-neutral); border-top: 1px solid var(--color-base-300); }
    .fb-legend span { display: inline-flex; align-items: center; gap: 6px; }
    .fb-legend i { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }

    /* 双栏列表 */
    .fb-cols { display: grid; grid-template-columns: 1fr 1.2fr; gap: 16px; align-items: start; }
    .fb-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--color-base-300); }
    .fb-row:last-child { border-bottom: 0; }
    .fb-av { width: 38px; height: 38px; flex: none; border-radius: 50%; background: var(--color-base-200); color: var(--color-primary); display: flex; align-items: center; justify-content: center; }
    .fb-av svg { width: 22px; height: 22px; }
    .fb-row .who { flex: 1; min-width: 0; }
    .fb-row .who b { font-size: 14px; display: block; }
    .fb-row .who span { font-size: 12px; color: var(--color-neutral); }
    .fb-row .qty { font-size: 13px; color: var(--color-neutral); white-space: nowrap; }
    .fb-row .qty b { color: var(--color-base-content); font-size: 15px; }
    .wb-no { font-size: 13px; font-weight: 700; white-space: nowrap; }
    .wb-zone { flex: 1; min-width: 0; font-size: 13px; }
    .wb-eta { font-size: 12px; color: var(--color-neutral); white-space: nowrap; }
    .fb-actions { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }

    .fb-toolbar { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: space-between; }
    .fb-search { flex: 1 1 220px; max-width: 320px; display: flex; align-items: center; gap: 8px; padding: 0 12px; }
    .fb-search svg { width: 18px; height: 18px; color: var(--color-neutral); flex: none; }
    .fb-search input { flex: 1; min-width: 0; border: 0; background: none; outline: none; color: inherit; font-size: 14px; }

    .fb-foot { max-width: 1280px; margin: 0 auto; padding: 16px 20px 36px; border-top: 1px solid var(--color-base-300); font-size: 12px; color: var(--color-neutral); text-align: center; }

    @media (max-width: 860px) {
      .fb-shell { grid-template-columns: 1fr; }
      .fb-side { border-right: 0; border-bottom: 1px solid var(--color-base-300); }
      .fb-menu { flex-direction: row; flex-wrap: wrap; }
      .fb-cols { grid-template-columns: 1fr; }
      .fb-row .wb-eta { display: none; }
    }
  </style>
</head>
<body>
  <!-- 顶栏 -->
  <header class="fb-topbar">
    <div class="fb-brand">
      <span class="fb-logo" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16V6h10v10" /><path d="M5 9H2v7h3" /><path d="M15 12h4l3 4v3h-3" /><circle cx="7.5" cy="18.5" r="1.8" /><circle cx="17" cy="18.5" r="1.8" /></svg>
      </span>
      <div>
        <b>驰途调度</b>
        <span>CHITU DISPATCH · 城配调度中心（虚构示例）</span>
      </div>
    </div>
    <div class="fb-topside">
      <span class="badge badge-soft badge-secondary">早班 08:00–16:00</span>
      <span class="fb-op" title="通知：3 条待处理（静态示意）">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>
        通知 <b style="color:var(--color-error)">3</b>
      </span>
      <span class="fb-op">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20c1.5-3.5 4-5 7.5-5s6 1.5 7.5 5" /></svg>
        调度员：王捷
      </span>
    </div>
  </header>

  <div class="fb-shell">
    <!-- 左侧栏：仅一个 menu-active -->
    <nav class="fb-side" aria-label="调度导航">
      <ul class="fb-menu">
        <li><a class="menu-active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="1.5" /><path d="M3 9h18M9 9v9" /></svg>
          调度看板</a></li>
        <li><a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-2.5-1.8L13 21l-2.5-1.8L8 21 6 19.2V3Z" /><path d="M9 8h6M9 12h6" /></svg>
          运单管理</a></li>
        <li><a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2" /><path d="M2.5 19c1-3.5 3-5 5.5-5s4.5 1.5 5.5 5" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.5c2.5.3 4 2 4.5 4.5" /></svg>
          骑手排班</a></li>
        <li><a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16V8a1 1 0 0 1 1-1h9l3 4h4a1 1 0 0 1 1 1v4h-3" /><circle cx="7" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" /></svg>
          车队管理</a></li>
        <li><a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
          线路规划</a></li>
        <li><a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 10v4M12 17.5v.5" /></svg>
          异常中心</a></li>
      </ul>
    </nav>

    <!-- 主内容 -->
    <main class="fb-main">
      <!-- 时效 KPI 行 -->
      <section class="fb-kpis" aria-label="今日时效概览">
        <div class="fb-kpi">
          <span class="k"><i style="background:var(--color-info)"></i>待派单</span>
          <span class="v">37</span>
          <span class="d">较上一时段 +8，10:30 前须派完</span>
        </div>
        <div class="fb-kpi">
          <span class="k"><i style="background:var(--color-primary)"></i>配送中</span>
          <span class="v">214</span>
          <span class="d">在岗骑手 186 人 · 平均负载 1.2 单</span>
        </div>
        <div class="fb-kpi">
          <span class="k"><i style="background:var(--color-success)"></i>准时率</span>
          <span class="v">98.6%</span>
          <span class="d">今日已完成 1,204 单 / 准时 1,187 单</span>
        </div>
        <div class="fb-kpi">
          <span class="k"><i style="background:var(--color-error)"></i>异常单</span>
          <span class="v">5</span>
          <span class="d">3 起联系不上收件人 · 2 起地址不详</span>
        </div>
      </section>

      <!-- 地图态势 -->
      <section class="fb-card" aria-label="实时地图态势">
        <h2>实时调度地图 <span class="sub">数据每 30 秒刷新（示意）· 覆盖城北三片区</span></h2>
        <div class="fb-mapwrap" style="margin-top:12px">
          <svg viewBox="0 0 800 340" role="img" aria-label="网格地图：三条主干道、五个骑手实时点位与在途路线">
            <rect width="800" height="340" fill="var(--color-base-200)" />
            <!-- 街区网格 -->
            <g stroke="var(--color-base-300)" stroke-width="1" opacity=".7">
              <path d="M0 40h800M0 90h800M0 140h800M0 190h800M0 240h800M0 290h800" />
              <path d="M80 0v340M180 0v340M280 0v340M380 0v340M480 0v340M580 0v340M680 0v340M760 0v340" />
            </g>
            <!-- 主干道 -->
            <path d="M0 170h800" stroke="var(--color-base-content)" stroke-width="5" opacity=".25" />
            <path d="M430 0v340" stroke="var(--color-base-content)" stroke-width="5" opacity=".25" />
            <!-- 片区底色 -->
            <rect x="120" y="60" width="140" height="80" rx="6" fill="var(--color-primary)" opacity=".08" />
            <rect x="520" y="210" width="150" height="80" rx="6" fill="var(--color-secondary)" opacity=".10" />
            <!-- 在途路线（配送中） -->
            <path d="M190 100 L330 150 L430 170 L560 250" fill="none" stroke="var(--color-primary)" stroke-width="2.5" stroke-dasharray="7 5" />
            <path d="M430 170 L610 120 L700 90" fill="none" stroke="var(--color-success)" stroke-width="2.5" stroke-dasharray="7 5" />
            <!-- 骑手点位：状态语义色 -->
            <g>
              <circle cx="190" cy="100" r="9" fill="var(--color-primary)" /><circle cx="190" cy="100" r="3.5" fill="var(--color-base-100)" />
              <circle cx="330" cy="150" r="9" fill="var(--color-primary)" /><circle cx="330" cy="150" r="3.5" fill="var(--color-base-100)" />
              <circle cx="560" cy="250" r="9" fill="var(--color-info)" /><circle cx="560" cy="250" r="3.5" fill="var(--color-base-100)" />
              <circle cx="610" cy="120" r="9" fill="var(--color-success)" /><circle cx="610" cy="120" r="3.5" fill="var(--color-base-100)" />
              <circle cx="700" cy="90" r="10" fill="var(--color-error)" /><circle cx="700" cy="90" r="4" fill="var(--color-base-100)" />
            </g>
            <!-- 分拣中心 -->
            <rect x="396" y="156" width="68" height="28" rx="4" fill="var(--color-neutral)" />
            <text x="430" y="174" text-anchor="middle" font-size="12" fill="var(--color-base-100)" font-family="inherit">城北分拣中心</text>
          </svg>
          <div class="fb-legend">
            <span><i style="background:var(--color-primary)"></i>配送中</span>
            <span><i style="background:var(--color-info)"></i>待取件</span>
            <span><i style="background:var(--color-success)"></i>即将送达</span>
            <span><i style="background:var(--color-error)"></i>异常滞留</span>
            <span>共 5 个实时点位 · 另有 6 个骑手在电梯间/室内定位缺失（示意）</span>
          </div>
        </div>
      </section>

      <!-- 骑手与运单双栏 -->
      <div class="fb-cols">
        <section class="fb-card" aria-label="在岗骑手">
          <h2>在岗骑手 <span class="sub">按在途单量排序</span></h2>
          <div style="margin-top:8px">
            <div class="fb-row">
              <span class="fb-av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2" /><path d="M2.5 19c1-3.5 3-5 5.5-5s4.5 1.5 5.5 5" /></svg></span>
              <span class="who"><b>陈屿</b><span>城北三片区 · 距分拣中心 2.1 km</span></span>
              <span class="qty">在途 <b>4</b> 单</span>
              <span class="badge badge-soft badge-primary">配送中</span>
            </div>
            <div class="fb-row">
              <span class="fb-av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2" /><path d="M2.5 19c1-3.5 3-5 5.5-5s4.5 1.5 5.5 5" /></svg></span>
              <span class="who"><b>林小满</b><span>城东片区 · 距收件点 600 m</span></span>
              <span class="qty">在途 <b>3</b> 单</span>
              <span class="badge badge-soft badge-success">即将送达</span>
            </div>
            <div class="fb-row">
              <span class="fb-av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2" /><path d="M2.5 19c1-3.5 3-5 5.5-5s4.5 1.5 5.5 5" /></svg></span>
              <span class="who"><b>赵一帆</b><span>城南片区 · 待取件 2 单</span></span>
              <span class="qty">在途 <b>2</b> 单</span>
              <span class="badge badge-soft badge-info">待取件</span>
            </div>
            <div class="fb-row">
              <span class="fb-av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2" /><path d="M2.5 19c1-3.5 3-5 5.5-5s4.5 1.5 5.5 5" /></svg></span>
              <span class="who"><b>何岸</b><span>城西片区 · 电梯间定位缺失</span></span>
              <span class="qty">在途 <b>1</b> 单</span>
              <span class="badge badge-soft badge-warning">定位异常</span>
            </div>
            <div class="fb-row">
              <span class="fb-av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2" /><path d="M2.5 19c1-3.5 3-5 5.5-5s4.5 1.5 5.5 5" /></svg></span>
              <span class="who"><b>罗晨</b><span>城北片区 · 已滞留 18 分钟</span></span>
              <span class="qty">在途 <b>2</b> 单</span>
              <span class="badge badge-soft badge-error">异常滞留</span>
            </div>
          </div>
          <div class="fb-actions" style="margin-top:10px">
            <button class="btn btn-soft" type="button">联系骑手</button>
            <button class="btn btn-outline" type="button">改派订单</button>
          </div>
        </section>

        <section class="fb-card" aria-label="运单状态列表">
          <h2>待处理运单 <span class="sub">按剩余时效升序</span></h2>
          <div class="fb-toolbar" style="margin:12px 0 4px">
            <label class="input fb-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4-4" /></svg>
              <input type="search" placeholder="搜运单号 / 收件区域" aria-label="搜索运单" />
            </label>
            <button class="btn btn-primary" type="button">一键派单</button>
          </div>
          <div>
            <div class="fb-row">
              <span class="wb-no">CT-261018-0087</span>
              <span class="wb-zone">城北 · 江滩路 12 号院</span>
              <span class="wb-eta">剩 23 分钟</span>
              <span class="badge badge-soft badge-error">地址不详</span>
            </div>
            <div class="fb-row">
              <span class="wb-no">CT-261018-0064</span>
              <span class="wb-zone">城东 · 创智园 B 座</span>
              <span class="wb-eta">剩 41 分钟</span>
              <span class="badge badge-soft badge-primary">配送中</span>
            </div>
            <div class="fb-row">
              <span class="wb-no">CT-261018-0059</span>
              <span class="wb-zone">城南 · 望湖公寓 3 栋</span>
              <span class="wb-eta">剩 58 分钟</span>
              <span class="badge badge-soft badge-warning">即将超时</span>
            </div>
            <div class="fb-row">
              <span class="wb-no">CT-261018-0042</span>
              <span class="wb-zone">城西 · 梧桐里商铺 7 号</span>
              <span class="wb-eta">剩 1 小时 10 分</span>
              <span class="badge badge-soft badge-info">待取件</span>
            </div>
            <div class="fb-row">
              <span class="wb-no">CT-261018-0031</span>
              <span class="wb-zone">城北 · 滨河写字楼 21 层</span>
              <span class="wb-eta">今日 18:00 前</span>
              <span class="badge badge-soft badge-secondary">等待揽收</span>
            </div>
            <div class="fb-row">
              <span class="wb-no">CT-261018-0012</span>
              <span class="wb-zone">城东 · 和平里社区驿站</span>
              <span class="wb-eta">已妥投</span>
              <span class="badge badge-soft badge-success">已签收</span>
            </div>
          </div>
          <div class="fb-actions" style="margin-top:10px">
            <button class="btn btn-primary" type="button">派发选中运单</button>
            <button class="btn btn-soft" type="button">导出运单</button>
          </div>
        </section>
      </div>
    </main>
  </div>

  <footer class="fb-foot">
    <p>本页企业名「驰途调度 CHITU DISPATCH」、骑手姓名、运单号与位置数据均为虚构示例，仅用于展示 mo-fleet 主题整页效果 · 灰墨 MoH_UI</p>
  </footer>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-fleet/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-fleet"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-fleet"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-fleet · 驰途调度（浅色）—— 物流配送调度台高对比功能色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-fleet"> 即整站换肤。
   设计目标：白底高对比功能色，状态语义一眼可读（待取/配送中/签收/异常），户外与办公双场景都看得清。 */

[data-theme="mo-fleet"] {
  color-scheme: light;

  /* 底与纸：纯白 + 浅灰面板，细中性灰边框，层次靠明度与描边 */
  --color-base-100: #ffffff;
  --color-base-200: #f1f3f5;
  --color-base-300: #c3cad2;
  --color-base-content: #141a22;

  /* 主色：调度深蓝（白字 7.9:1），只留给派单主操作、当前导航与关键链接 */
  --color-primary: #1c4f9e;
  --color-primary-content: #ffffff;

  /* 次色：配送青绿（白字 6.5:1），用于车队/班次等次级强调 */
  --color-secondary: #0f6a58;
  --color-secondary-content: #ffffff;

  /* 强调：加急琥珀棕（白字 5.9:1），仅用于加急件与时限提醒 */
  --color-accent: #8a5a00;
  --color-accent-content: #ffffff;

  --color-neutral: #3a4450;
  --color-neutral-content: #ffffff;

  /* 语义色：全部加深到白字 ≥6:1，状态同时配中文文字，不靠颜色单独传达 */
  --color-info: #173fa8;      /* 待取 / 等待揽收 */
  --color-info-content: #ffffff;
  --color-success: #175a22;   /* 已签收 / 准时 */
  --color-success-content: #ffffff;
  --color-warning: #6b4400;    /* 即将超时 / 改派 */
  --color-warning-content: #ffffff;
  --color-error: #a01b1b;      /* 异常单 */
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：调度台偏方正、细边框、无投影，信息密度优先 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
```

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-fleet/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
