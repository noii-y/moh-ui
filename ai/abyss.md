# 深渊（abyss） · 灰墨 MoH_UI

> 虚构物联网运维监控产品「深穹监控 ABYSS OPS」整页。深绿底配磷光绿数据高亮，自绘折线图、可用性环形与节点状态卡；挂 daisyUI 官方主题 data-theme="abyss" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/abyss/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 磷光绿（主题 primary）是招牌但只做高亮：KPI 主数字、折线主序列、环形进度、条形填充、主按钮用 primary；面板底色一律用 base-100/200/300 三阶深绿分层，绝不把磷光绿铺满大面积背景。
- 严格区分蓝紫：除语义色 badge 外，正文、网格线、装饰一律 currentColor 暖白灰阶；蓝紫只允许出现在 badge-info 一个徽章里，不要额外引入蓝色块或紫色渐变。
- 图表全部 currentColor 单色 SVG 自绘：网格线用 currentColor 约 12% 透明度的细横线，坐标轴刻度小号等宽灰字（opacity .45）；激活数据用 primary 磷光绿，次要序列用 warning 琥珀，两条线的粗细差一档（2.5 vs 2）。
- 环形可用性用 SVG circle + stroke-dasharray 实现：底圈 base-300、进度圈 primary 并 rotate(-90) 从 12 点起笔，环内中心写等宽大数字 + 一行 SLA 小字；不要用图片或字体图标伪造仪表盘。
- 数字一律等宽内联字体（font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace)）：节点 ID、时间戳、百分比、KPI 全部等宽，上下对齐像真实监控屏。
- 级别 badge 语义固定：error 红 / warning 琥珀 / info 蓝 / success 绿，状态徽章「运行中」用 success、「压力」用 warning；一行一个状态点，不要给同一节点挂两个 badge。
- 信息密度高但守网格：所有卡共用 auto-fit 栅格，条形行固定三列（节点名 / 轨道 / 百分比）对齐；390px 窄屏双列图区塌成单列、表格包 overflow-x:auto 横滑，页面级不溢出。
- 文案写运维真实动作（新建告警、免费试用、查看接入文档），数据全部标注示例口径（每 30 秒刷新 / 最近 10 分钟 / 近 30 天 SLA），不写「极致体验」这类空话。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="abyss">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>集群总览 · 深穹监控 ABYSS OPS（abyss 主题案例）</title>
  <meta name="description" content="灰墨 abyss 主题完整页面案例：虚构物联网运维监控大屏整页。深绿底配磷光绿数据高亮，自绘折线图、可用性环形与节点状态卡。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .mono { font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace); }
    .wrap { max-width: 1180px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 16px; }
    .brand { font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
    .brand-mark { width: 26px; height: 26px; border-radius: 8px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; }
    .brand small { font-size: 10px; letter-spacing: 2px; opacity: .55; font-weight: 400; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .stat-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; }
    .chart-row { display: grid; grid-template-columns: 1.6fr 1fr; gap: 14px; }
    .chart-row > .card, .grid-2 > .card, .stat-row > .stat { min-width: 0; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .node-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px; }
    .bar-row { display: grid; grid-template-columns: 150px 1fr 52px; gap: 10px; align-items: center; font-size: 12px; }
    .bar-track { height: 8px; border-radius: 999px; background: var(--color-base-300); overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 999px; background: var(--color-primary); }
    .tbl-wrap { overflow-x: auto; }
    .legend-dot { width: 8px; height: 8px; border-radius: 999px; display: inline-block; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.9; }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .chart-row, .grid-2 { grid-template-columns: 1fr; }
      .bar-row { grid-template-columns: 110px 1fr 44px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand"><span class="brand-mark">穹</span>深穹监控 <small>ABYSS OPS</small></div>
        <ul class="menu" style="display:flex;flex-direction:row;flex-wrap:wrap;padding:0;gap:4px">
          <li><a class="menu-active">总览</a></li>
          <li><a>集群</a></li>
          <li><a>告警</a></li>
          <li><a>日志</a></li>
          <li><a>设置</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px;flex-wrap:wrap">
        <span class="badge badge-success badge-sm">全部系统运行中</span>
        <button class="btn btn-primary btn-sm" type="button">新建告警</button>
      </div>
    </div>

    <!-- 标题行 -->
    <div class="row">
      <div>
        <h1 style="font-size:20px;font-weight:700;margin:0">集群总览</h1>
        <p style="font-size:12px;opacity:.6;margin:4px 0 0">最近 24 小时 · 华东 + 华南 4 个可用区（示例数据）</p>
      </div>
      <span class="badge badge-soft badge-sm">数据每 30 秒刷新</span>
    </div>

    <!-- KPI 行 -->
    <div class="stat-row">
      <div class="stat bg-base-200 rounded-box">
        <div class="stat-title">在线节点</div>
        <div class="stat-value mono" style="font-size:24px;color:var(--color-primary)">1,284</div>
        <div class="stat-desc" style="opacity:.6">今日新增 +12</div>
      </div>
      <div class="stat bg-base-200 rounded-box">
        <div class="stat-title">今日请求</div>
        <div class="stat-value mono" style="font-size:24px">8,642万</div>
        <div class="stat-desc" style="color:var(--color-success)">较昨日 +6.8%</div>
      </div>
      <div class="stat bg-base-200 rounded-box">
        <div class="stat-title">平均延迟</div>
        <div class="stat-value mono" style="font-size:24px">42<span style="font-size:13px;opacity:.6"> ms</span></div>
        <div class="stat-desc" style="color:var(--color-success)">P99 较上周 -6ms</div>
      </div>
      <div class="stat bg-base-200 rounded-box">
        <div class="stat-title">活跃告警</div>
        <div class="stat-value mono" style="font-size:24px;color:var(--color-warning)">3</div>
        <div class="stat-desc" style="color:var(--color-error)">其中 1 条 error</div>
      </div>
      <div class="stat bg-base-200 rounded-box">
        <div class="stat-title">可用性</div>
        <div class="stat-value mono" style="font-size:24px;color:var(--color-primary)">99.98%</div>
        <div class="stat-desc" style="opacity:.6">近 30 天 SLA</div>
      </div>
    </div>

    <!-- 主区：折线图 + 可用性环形 -->
    <div class="chart-row">
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:16px;gap:10px">
          <div class="row">
            <h2 style="font-size:14px;font-weight:700;margin:0">请求量与错误量趋势</h2>
            <span style="display:flex;gap:12px;font-size:11px;opacity:.7;flex-wrap:wrap">
              <span style="display:inline-flex;align-items:center;gap:5px"><span class="legend-dot" style="background:var(--color-primary)"></span>请求量（次/分）</span>
              <span style="display:inline-flex;align-items:center;gap:5px"><span class="legend-dot" style="background:var(--color-warning)"></span>错误量（次/分）</span>
            </span>
          </div>
          <svg viewBox="0 0 560 228" role="img" aria-label="24 小时请求量与错误量双序列折线图：请求量午后爬升后回落，错误量整体低位波动（示例图表）" style="width:100%;height:auto">
            <!-- 网格线 -->
            <g stroke="currentColor" stroke-width="1" opacity=".12">
              <line x1="34" y1="26" x2="540" y2="26" />
              <line x1="34" y1="70" x2="540" y2="70" />
              <line x1="34" y1="114" x2="540" y2="114" />
              <line x1="34" y1="158" x2="540" y2="158" />
              <line x1="34" y1="190" x2="540" y2="190" />
            </g>
            <!-- Y 轴刻度 -->
            <g fill="currentColor" opacity=".45" font-size="9" class="mono">
              <text x="28" y="29" text-anchor="end">8k</text>
              <text x="28" y="117" text-anchor="end">4k</text>
              <text x="28" y="193" text-anchor="end">0</text>
            </g>
            <!-- 错误量序列（琥珀） -->
            <polyline fill="none" stroke="var(--color-warning)" stroke-width="2" stroke-linejoin="round"
              points="34,178 80,182 126,174 172,166 218,158 264,150 310,162 356,154 402,142 448,158 494,170 540,174" />
            <!-- 请求量序列（磷光绿） -->
            <polyline fill="none" stroke="var(--color-primary)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"
              points="34,155 80,161 126,166 172,160 218,139 264,113 310,91 356,97 402,78 448,84 494,107 540,126" />
            <!-- 当前点 -->
            <circle cx="540" cy="126" r="3.5" fill="var(--color-primary)" />
            <!-- X 轴刻度 -->
            <g fill="currentColor" opacity=".45" font-size="9.5" class="mono">
              <text x="34" y="210">00:00</text>
              <text x="160" y="210" text-anchor="middle">06:00</text>
              <text x="287" y="210" text-anchor="middle">12:00</text>
              <text x="413" y="210" text-anchor="middle">18:00</text>
              <text x="540" y="210" text-anchor="end">24:00</text>
            </g>
          </svg>
        </div>
      </div>

      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:16px;gap:10px;align-items:center;text-align:center">
          <h2 style="font-size:14px;font-weight:700;margin:0;align-self:flex-start">近 30 天可用性</h2>
          <svg viewBox="0 0 160 160" role="img" aria-label="可用性环形图：99.98%，环形几乎全部点亮（示例图表）" style="width:150px;height:150px">
            <circle cx="80" cy="80" r="60" fill="none" stroke="var(--color-base-300)" stroke-width="13" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="var(--color-primary)" stroke-width="13" stroke-linecap="round"
              stroke-dasharray="376.6 377" transform="rotate(-90 80 80)" />
            <text x="80" y="76" text-anchor="middle" font-size="20" font-weight="700" fill="var(--color-primary)" class="mono">99.98%</text>
            <text x="80" y="96" text-anchor="middle" font-size="10" fill="currentColor" opacity=".55">SLA 目标 99.95%</text>
          </svg>
          <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8;align-self:stretch;text-align:left">过去 30 天累计中断 26 分钟，均来自 core-hangzhou-02 的一次滚动更新窗口。</p>
        </div>
      </div>
    </div>

    <!-- 集群负载 Top5 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:16px;gap:12px">
        <div class="row">
          <h2 style="font-size:14px;font-weight:700;margin:0">集群负载 Top 5</h2>
          <span style="font-size:11px;opacity:.5">CPU 平均使用率 · 最近 10 分钟</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div class="bar-row"><span class="mono" style="opacity:.85">edge-shanghai-01</span><div class="bar-track"><div class="bar-fill" style="width:78%"></div></div><span class="mono" style="text-align:right">78%</span></div>
          <div class="bar-row"><span class="mono" style="opacity:.85">edge-beijing-03</span><div class="bar-track"><div class="bar-fill" style="width:64%"></div></div><span class="mono" style="text-align:right">64%</span></div>
          <div class="bar-row"><span class="mono" style="opacity:.85">core-hangzhou-02</span><div class="bar-track"><div class="bar-fill" style="width:51%"></div></div><span class="mono" style="text-align:right">51%</span></div>
          <div class="bar-row"><span class="mono" style="opacity:.85">edge-shenzhen-01</span><div class="bar-track"><div class="bar-fill" style="width:43%"></div></div><span class="mono" style="text-align:right">43%</span></div>
          <div class="bar-row"><span class="mono" style="opacity:.85">cache-chengdu-04</span><div class="bar-track"><div class="bar-fill" style="width:29%"></div></div><span class="mono" style="text-align:right">29%</span></div>
        </div>
      </div>
    </div>

    <!-- 实时事件表 + 节点状态卡 -->
    <div class="grid-2">
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:16px;gap:10px">
          <h2 style="font-size:14px;font-weight:700;margin:0">实时事件</h2>
          <div class="tbl-wrap">
            <table class="table" style="font-size:12px">
              <thead>
                <tr><th>时间</th><th>节点</th><th>级别</th><th>事件</th></tr>
              </thead>
              <tbody>
                <tr><td class="mono">10:42:18</td><td class="mono">edge-beijing-03</td><td><span class="badge badge-error badge-sm">error</span></td><td>心跳丢失 45 秒后自动恢复</td></tr>
                <tr><td class="mono">10:38:02</td><td class="mono">core-hangzhou-02</td><td><span class="badge badge-warning badge-sm">warning</span></td><td>内存使用率超过 80% 阈值</td></tr>
                <tr><td class="mono">10:31:55</td><td class="mono">edge-shanghai-01</td><td><span class="badge badge-info badge-sm">info</span></td><td>完成例行滚动更新 v2.14.3</td></tr>
                <tr><td class="mono">10:24:10</td><td class="mono">cache-chengdu-04</td><td><span class="badge badge-success badge-sm">success</span></td><td>缓存命中率回升至 97.2%</td></tr>
                <tr><td class="mono">10:15:47</td><td class="mono">edge-shenzhen-01</td><td><span class="badge badge-warning badge-sm">warning</span></td><td>单分请求量较基线上涨 34%</td></tr>
                <tr><td class="mono">09:58:33</td><td class="mono">core-hangzhou-02</td><td><span class="badge badge-info badge-sm">info</span></td><td>自动扩容 +2 个实例完成</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:16px;gap:12px">
          <h2 style="font-size:14px;font-weight:700;margin:0">节点状态</h2>
          <div class="node-grid" style="gap:12px">
            <div style="display:flex;flex-direction:column;gap:8px;border:1px solid color-mix(in oklab, currentColor 14%, transparent);border-radius:.625rem;padding:12px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="mono" style="font-size:13px;font-weight:700">edge-shanghai-01</span>
                <span class="badge badge-success badge-sm">运行中</span>
              </div>
              <span style="font-size:11px;opacity:.55">华东上海 · 边缘接入</span>
              <div style="display:flex;flex-direction:column;gap:3px">
                <span style="font-size:11px;opacity:.65">CPU <span class="mono" style="float:right">62%</span></span>
                <progress class="progress" value="62" max="100" style="width:100%"></progress>
              </div>
              <div style="display:flex;flex-direction:column;gap:3px">
                <span style="font-size:11px;opacity:.65">内存 <span class="mono" style="float:right">71%</span></span>
                <progress class="progress" value="71" max="100" style="width:100%"></progress>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;border:1px solid color-mix(in oklab, currentColor 14%, transparent);border-radius:.625rem;padding:12px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="mono" style="font-size:13px;font-weight:700">core-hangzhou-02</span>
                <span class="badge badge-warning badge-sm">压力</span>
              </div>
              <span style="font-size:11px;opacity:.55">华东杭州 · 核心计算</span>
              <div style="display:flex;flex-direction:column;gap:3px">
                <span style="font-size:11px;opacity:.65">CPU <span class="mono" style="float:right">84%</span></span>
                <progress class="progress" value="84" max="100" style="width:100%"></progress>
              </div>
              <div style="display:flex;flex-direction:column;gap:3px">
                <span style="font-size:11px;opacity:.65">内存 <span class="mono" style="float:right">80%</span></span>
                <progress class="progress" value="80" max="100" style="width:100%"></progress>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;border:1px solid color-mix(in oklab, currentColor 14%, transparent);border-radius:.625rem;padding:12px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="mono" style="font-size:13px;font-weight:700">edge-shenzhen-01</span>
                <span class="badge badge-success badge-sm">运行中</span>
              </div>
              <span style="font-size:11px;opacity:.55">华南深圳 · 边缘接入</span>
              <div style="display:flex;flex-direction:column;gap:3px">
                <span style="font-size:11px;opacity:.65">CPU <span class="mono" style="float:right">45%</span></span>
                <progress class="progress" value="45" max="100" style="width:100%"></progress>
              </div>
              <div style="display:flex;flex-direction:column;gap:3px">
                <span style="font-size:11px;opacity:.65">内存 <span class="mono" style="float:right">52%</span></span>
                <progress class="progress" value="52" max="100" style="width:100%"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 CTA -->
    <div class="card rounded-box" style="padding:22px 18px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
      <div style="display:flex;flex-direction:column;gap:4px;min-width:0">
        <span style="font-size:15px;font-weight:700">把你的集群接进深穹监控</span>
        <span style="font-size:12px;opacity:.6">三分钟接入 agent，告警渠道（短信 / 邮件 / 飞书）按团队需要开启。</span>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost btn-sm" type="button">查看接入文档</button>
        <button class="btn btn-primary btn-sm" type="button">免费试用 30 天</button>
      </div>
    </div>

    <p class="foot">深穹监控 ABYSS OPS 为虚构产品，节点名、指标数值、事件记录与 SLA 均为示例数据，仅用于展示 abyss 主题整页效果 · 灰墨 MoH_UI</p>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css">
```

② 在 `<html>` 挂 `data-theme="abyss"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/abyss/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
