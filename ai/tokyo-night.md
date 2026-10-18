# 东京入夜（tokyo-night） · 灰墨 MoH_UI

> 股票行情交易终端整页（指数行情条 + 自选股涨跌表 + 五档买卖盘 + 手绘 SVG 日 K 线）。Tokyo Night 深蓝紫霓虹色板，挂 data-theme="tokyo-night" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖；涨跌幅按 A 股习惯红涨绿跌。

来源：Tokyo Night (folke/tokyonight.nvim)（Apache-2.0） · [上游色板](https://github.com/folke/tokyonight.nvim/blob/main/lua/tokyonight/colors/storm.lua)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/tokyo-night/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- A 股红涨绿跌是本主题的核心语义记忆点：上涨一律用霓虹粉红 #f7768e（对应语义 error 色）、下跌一律用嫩绿 #9ece6a（对应语义 success 色），不要按 daisyUI 默认把绿色当「成功/好消息」；涨跌幅、现价、K 线红柱全部沿用这两个颜色，不要换成红涨以外的配色。
- 盘口半透明底强化买卖方向：买盘（涨方）行底 rgba(247,118,142,.08) 淡红、卖盘（跌方）行底 rgba(158,206,106,.08) 淡绿；中间用 1px base-300 分隔线夹出现价。
- 深蓝紫三层底：页面 base-100 #1a1b26、卡片与侧栏 base-200 #292e42、最深 base-300 #16161e 只做分隔线与图表网格（currentColor 约 8% 透明度发丝线）；霓虹蓝 primary #7aa2f7 只给 brand-mark、menu-active 选中态与小徽章，配深字 #16161e，不大面积铺蓝。
- 均线色是招牌分工：MA5 用品紫 secondary #bb9af7、MA10 用夜青 accent #7dcfff，图例同色短线标注；图表网格极淡，不抢 K 线。
- 行情数字全部等宽 mono（var(--font-mono)）：指数大字 19px 加粗、股票表价格/代码/涨跌幅/成交量/成交额全 mono，数字不 proportionally 跳动；公司名加粗、代码灰一点。
- 小圆角交易终端取向：radius-box .5rem、radius-field .25rem、radius-selector .375rem，1px 细边框、--depth:1 无投影；指数卡用 grid auto-fit minmax(170px,1fr) 随宽度自适应排列。
- 窄屏（≤900px）侧栏折横排、自选股表与五档盘口改单列堆叠、表格 tbl-wrap 横向滚动，390px 不溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="tokyo-night">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>自选股行情 · 夜航行情终端（tokyo-night 主题案例）</title>
  <meta name="description" content="灰墨 tokyo-night 主题完整页面案例：深蓝紫都市霓虹股票行情交易终端整页（指数行情条 + 自选股涨跌表 + 五档买卖盘 + 日 K 线）。本页只依赖 daisyUI 与主题 tokens.css，零依赖、零 JS。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 tokyo-night · 东京入夜 —— 深蓝紫城市霓虹数据终端主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 folke/tokyonight.nvim 官方 Night 色板（Apache-2.0，© Folke Lemaitre）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="tokyo-night"> 即整站换肤。 */

[data-theme="tokyo-night"] {
  color-scheme: dark;

  /* 底与纸：Night 深蓝紫三层，bg #1a1b26 / bg_highlight #292e42 / bg_dark #16161e */
  --color-base-100: #1a1b26;
  --color-base-200: #292e42;
  --color-base-300: #16161e;
  --color-base-content: #c0caf5;

  /* 主色：都市霓虹蓝（blue #7aa2f7），只留给主操作与选中态 */
  --color-primary: #7aa2f7;
  --color-primary-content: #16161e;

  /* 次色 / 强调色：品紫（magenta #bb9af7）与夜青（cyan #7dcfff） */
  --color-secondary: #bb9af7;
  --color-secondary-content: #16161e;
  --color-accent: #7dcfff;
  --color-accent-content: #16161e;

  /* 中性面：terminal_black #414868，用于侧栏与分隔 */
  --color-neutral: #414868;
  --color-neutral-content: #c0caf5;

  /* 语义色：官方数据色直接映射 */
  --color-info: #2ac3de;
  --color-info-content: #16161e;
  --color-success: #9ece6a;
  --color-success-content: #16161e;
  --color-warning: #e0af68;
  --color-warning-content: #16161e;
  --color-error: #f7768e;
  --color-error-content: #16161e;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，交易终端取向 */
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
    .side { width: 208px; flex: none; border-inline-end: 1px solid var(--color-base-300); background: var(--color-base-200); padding: 16px 10px; display: flex; flex-direction: column; gap: 12px; }
    .brand { font-size: 14px; font-weight: 700; padding: 2px 12px 6px; display: flex; align-items: center; gap: 8px; }
    .brand-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .main { flex: 1; min-width: 0; padding: 18px 22px 30px; display: flex; flex-direction: column; gap: 14px; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .idx-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; }
    .trade-row { display: grid; grid-template-columns: minmax(0, 1fr) 250px; gap: 14px; align-items: start; }
    .tbl-wrap { overflow-x: auto; }
    @media (max-width: 640px) {
      .tbl-wrap {
        -webkit-mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
        mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
      }
    }
    .tbl-wrap .badge { white-space: nowrap; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    .mono { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); }
    /* A 股配色：红涨绿跌（自定义语义色，不使用 badge-success 表示上涨） */
    .up { color: #f7768e; }
    .down { color: #9ece6a; }
    .ask-row { background: rgba(158, 206, 106, .08); }
    .bid-row { background: rgba(247, 118, 142, .08); }
    @media (max-width: 900px) {
      .shell { flex-direction: column; }
      .side { width: auto; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); flex-direction: row; align-items: center; flex-wrap: wrap; gap: 8px; padding: 10px; }
      .brand { flex: none; padding: 0 12px 0 2px; }
      .side .menu { flex-direction: row; flex-wrap: wrap; width: auto; gap: 4px; }
      .side .menu li a { white-space: nowrap; }
      .navbar-start, .navbar-end { width: 100%; }
      .trade-row { grid-template-columns: minmax(0, 1fr); }
      .main { padding: 14px 12px 24px; }
    }
  </style>
</head>
<body>
  <div class="shell">

    <!-- 侧栏导航 -->
    <aside class="side">
      <div class="brand"><span class="brand-mark">夜</span>夜航行情</div>
      <ul class="menu" style="width:100%;padding:0">
        <li><a class="menu-active">自选股</a></li>
        <li><a>沪深 A 股</a></li>
        <li><a>板块行情</a></li>
        <li><a>资讯</a></li>
        <li><a>交易记录</a></li>
      </ul>
    </aside>

    <!-- 主区 -->
    <div class="main">

      <!-- 顶栏 -->
      <div class="navbar rounded-box" style="background:var(--color-base-200);padding:10px 16px;min-height:0;flex-wrap:wrap;gap:10px">
        <div class="navbar-start">
          <span style="font-size:13px;opacity:.65">行情终端 · 自选股（示例数据）</span>
        </div>
        <div class="navbar-end" style="gap:10px">
          <label class="input input-sm" style="display:flex;align-items:center;gap:8px;width:210px">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;opacity:.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
            <input type="search" placeholder="输入代码或名称…" style="flex:1;min-width:0;background:none;border:0;outline:none;color:inherit;font-size:13px" />
          </label>
          <button class="btn btn-ghost btn-sm" type="button">
            推送
            <span class="badge badge-sm badge-primary">5</span>
          </button>
          <div class="avatar avatar-placeholder">
            <div style="width:32px;height:32px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;background:var(--color-neutral);color:var(--color-neutral-content)">高</div>
          </div>
        </div>
      </div>

      <!-- 指数行情条 -->
      <div class="idx-row">
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:12px 14px;gap:2px">
            <div style="font-size:12px;opacity:.6">上证指数</div>
            <div style="font-size:19px;font-weight:700" class="mono">3,287.34</div>
            <div style="font-size:12.5px" class="up">+26.61　+0.81%</div>
          </div>
        </div>
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:12px 14px;gap:2px">
            <div style="font-size:12px;opacity:.6">深证成指</div>
            <div style="font-size:19px;font-weight:700" class="mono">10,542.18</div>
            <div style="font-size:12.5px" class="up">+129.63　+1.24%</div>
          </div>
        </div>
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:12px 14px;gap:2px">
            <div style="font-size:12px;opacity:.6">创业板指</div>
            <div style="font-size:19px;font-weight:700" class="mono">2,188.90</div>
            <div style="font-size:12.5px" class="down">-7.91　-0.36%</div>
          </div>
        </div>
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:12px 14px;gap:2px">
            <div style="font-size:12px;opacity:.6">科创 50</div>
            <div style="font-size:19px;font-weight:700" class="mono">721.05</div>
            <div style="font-size:12.5px" class="up">+7.02　+0.98%</div>
          </div>
        </div>
      </div>

      <!-- 自选股表 + 五档盘口 -->
      <div class="trade-row">
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:14px 16px 6px;display:flex;flex-direction:column;gap:10px">
            <div class="row">
              <h2 style="font-size:15px;font-weight:700;margin:0">自选股</h2>
              <span class="badge badge-soft badge-sm" style="white-space:nowrap">10 月 17 日 15:00 收盘 · 示例数据</span>
            </div>
            <div class="tbl-wrap">
              <table class="table" style="font-size:13px">
                <thead>
                  <tr style="opacity:.6;font-size:12px">
                    <th style="white-space:nowrap">名称</th><th>代码</th><th>最新价</th><th>涨跌幅</th><th>成交量（手）</th><th>成交额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style="font-weight:600;white-space:nowrap">极光光电</td><td class="mono" style="opacity:.6">600118</td><td class="mono">18.64</td><td class="up mono">+2.36%</td><td class="mono">128,400</td><td class="mono">2.39 亿</td></tr>
                  <tr><td style="font-weight:600;white-space:nowrap">蓝湾医疗</td><td class="mono" style="opacity:.6">300275</td><td class="mono">42.10</td><td class="down mono">-1.82%</td><td class="mono">56,200</td><td class="mono">2.35 亿</td></tr>
                  <tr><td style="font-weight:600;white-space:nowrap">北辰银行</td><td class="mono" style="opacity:.6">601288</td><td class="mono">5.73</td><td class="up mono">+0.53%</td><td class="mono">312,800</td><td class="mono">1.79 亿</td></tr>
                  <tr><td style="font-weight:600;white-space:nowrap">云杉软件</td><td class="mono" style="opacity:.6">002230</td><td class="mono">96.58</td><td class="down mono">-3.07%</td><td class="mono">28,900</td><td class="mono">2.79 亿</td></tr>
                  <tr><td style="font-weight:600;white-space:nowrap">南岭能源</td><td class="mono" style="opacity:.6">600905</td><td class="mono">12.06</td><td class="up mono">+1.01%</td><td class="mono">88,500</td><td class="mono">1.06 亿</td></tr>
                  <tr><td style="font-weight:600;white-space:nowrap">江望通信</td><td class="mono" style="opacity:.6">300699</td><td class="mono">27.35</td><td class="up mono">+4.22%</td><td class="mono">156,700</td><td class="mono">4.28 亿</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 五档买卖盘 -->
        <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
          <div class="card-body" style="padding:12px 14px;gap:6px">
            <div style="display:flex;align-items:center;justify-content:space-between">
              <h2 style="font-size:14px;font-weight:700;margin:0">五档盘口</h2>
              <span class="mono" style="font-size:12px;opacity:.6">极光光电</span>
            </div>
            <div style="font-size:11.5px;display:flex;justify-content:space-between;opacity:.55;padding:0 4px"><span>档位 / 价格</span><span>挂单（手）</span></div>
            <div class="ask-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="down mono" style="font-size:12.5px">卖五　45.20</span><span class="mono" style="font-size:12.5px;opacity:.75">120</span></div>
            <div class="ask-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="down mono" style="font-size:12.5px">卖四　45.15</span><span class="mono" style="font-size:12.5px;opacity:.75">85</span></div>
            <div class="ask-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="down mono" style="font-size:12.5px">卖三　45.10</span><span class="mono" style="font-size:12.5px;opacity:.75">230</span></div>
            <div class="ask-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="down mono" style="font-size:12.5px">卖二　45.05</span><span class="mono" style="font-size:12.5px;opacity:.75">64</span></div>
            <div class="ask-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="down mono" style="font-size:12.5px">卖一　45.00</span><span class="mono" style="font-size:12.5px;opacity:.75">158</span></div>
            <div style="text-align:center;padding:4px 0;border-block:1px solid var(--color-base-300)">
              <span class="up mono" style="font-size:16px;font-weight:700">44.89</span>
              <span class="up mono" style="font-size:12px;margin-left:6px">+2.10%</span>
            </div>
            <div class="bid-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="up mono" style="font-size:12.5px">买一　44.89</span><span class="mono" style="font-size:12.5px;opacity:.75">210</span></div>
            <div class="bid-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="up mono" style="font-size:12.5px">买二　44.85</span><span class="mono" style="font-size:12.5px;opacity:.75">96</span></div>
            <div class="bid-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="up mono" style="font-size:12.5px">买三　44.80</span><span class="mono" style="font-size:12.5px;opacity:.75">145</span></div>
            <div class="bid-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="up mono" style="font-size:12.5px">买四　44.75</span><span class="mono" style="font-size:12.5px;opacity:.75">72</span></div>
            <div class="bid-row" style="display:flex;justify-content:space-between;padding:3px 8px;border-radius:.25rem"><span class="up mono" style="font-size:12.5px">买五　44.70</span><span class="mono" style="font-size:12.5px;opacity:.75">188</span></div>
          </div>
        </div>
      </div>

      <!-- 日 K 线 -->
      <div class="card" style="background:var(--color-base-200);border-radius:.5rem">
        <div class="card-body" style="padding:14px 16px;gap:8px">
          <div class="row">
            <h2 style="font-size:15px;font-weight:700;margin:0">极光光电 · 日 K（近一年走势截取，示例数据）</h2>
            <span style="display:flex;gap:12px;font-size:11.5px;opacity:.7">
              <span><span style="display:inline-block;width:14px;height:2px;background:#bb9af7;vertical-align:middle"></span> MA5</span>
              <span><span style="display:inline-block;width:14px;height:2px;background:#7dcfff;vertical-align:middle"></span> MA10</span>
              <span class="up">红涨</span><span class="down">绿跌</span>
            </span>
          </div>
          <svg viewBox="0 0 640 230" style="width:100%;height:260px" role="img" aria-label="极光光电日 K 线示意图（示例数据）">
            <g stroke="currentColor" stroke-opacity=".08" stroke-width="1">
              <line x1="8" y1="45" x2="632" y2="45" />
              <line x1="8" y1="90" x2="632" y2="90" />
              <line x1="8" y1="135" x2="632" y2="135" />
              <line x1="8" y1="180" x2="632" y2="180" />
            </g>
            <!-- K 线（红涨绿跌） -->
            <g stroke-width="1">
              <line x1="20" y1="117.8" x2="20" y2="151.8" stroke="#f7768e"/><rect x="16" y="126.3" width="8" height="17.0" fill="#f7768e"/>
              <line x1="46" y1="120.7" x2="46" y2="148.9" stroke="#9ece6a"/><rect x="42" y="126.3" width="8" height="11.4" fill="#9ece6a"/>
              <line x1="72" y1="106.5" x2="72" y2="143.3" stroke="#f7768e"/><rect x="68" y="112.2" width="8" height="25.5" fill="#f7768e"/>
              <line x1="98" y1="100.8" x2="98" y2="126.3" stroke="#9ece6a"/><rect x="94" y="112.2" width="8" height="8.5" fill="#9ece6a"/>
              <line x1="124" y1="92.3" x2="124" y2="123.6" stroke="#f7768e"/><rect x="120" y="98.0" width="8" height="22.7" fill="#f7768e"/>
              <line x1="150" y1="89.5" x2="150" y2="115.0" stroke="#9ece6a"/><rect x="146" y="98.0" width="8" height="11.3" fill="#9ece6a"/>
              <line x1="176" y1="81.0" x2="176" y2="112.2" stroke="#f7768e"/><rect x="172" y="86.7" width="8" height="22.6" fill="#f7768e"/>
              <line x1="202" y1="78.2" x2="202" y2="100.8" stroke="#9ece6a"/><rect x="198" y="86.7" width="8" height="8.5" fill="#9ece6a"/>
              <line x1="228" y1="69.7" x2="228" y2="98.0" stroke="#f7768e"/><rect x="224" y="75.3" width="8" height="19.9" fill="#f7768e"/>
              <line x1="254" y1="55.5" x2="254" y2="81.0" stroke="#f7768e"/><rect x="250" y="61.2" width="8" height="14.1" fill="#f7768e"/>
              <line x1="280" y1="52.7" x2="280" y2="78.2" stroke="#9ece6a"/><rect x="276" y="61.2" width="8" height="11.3" fill="#9ece6a"/>
              <line x1="306" y1="66.8" x2="306" y2="89.5" stroke="#9ece6a"/><rect x="302" y="72.5" width="8" height="11.3" fill="#9ece6a"/>
              <line x1="332" y1="58.3" x2="332" y2="86.7" stroke="#f7768e"/><rect x="328" y="64.0" width="8" height="19.8" fill="#f7768e"/>
              <line x1="358" y1="44.2" x2="358" y2="66.8" stroke="#f7768e"/><rect x="354" y="49.8" width="8" height="14.2" fill="#f7768e"/>
              <line x1="384" y1="41.3" x2="384" y2="66.8" stroke="#9ece6a"/><rect x="380" y="49.8" width="8" height="11.4" fill="#9ece6a"/>
              <line x1="410" y1="55.5" x2="410" y2="81.0" stroke="#9ece6a"/><rect x="406" y="61.2" width="8" height="14.1" fill="#9ece6a"/>
              <line x1="436" y1="52.7" x2="436" y2="78.2" stroke="#f7768e"/><rect x="432" y="58.3" width="8" height="17.0" fill="#f7768e"/>
              <line x1="462" y1="38.5" x2="462" y2="61.2" stroke="#f7768e"/><rect x="458" y="47.0" width="8" height="11.3" fill="#f7768e"/>
              <line x1="488" y1="35.7" x2="488" y2="58.3" stroke="#9ece6a"/><rect x="484" y="47.0" width="8" height="8.5" fill="#9ece6a"/>
              <line x1="514" y1="49.8" x2="514" y2="75.3" stroke="#9ece6a"/><rect x="510" y="55.5" width="8" height="14.2" fill="#9ece6a"/>
              <line x1="540" y1="47.0" x2="540" y2="72.5" stroke="#f7768e"/><rect x="536" y="52.7" width="8" height="17.0" fill="#f7768e"/>
              <line x1="566" y1="32.8" x2="566" y2="55.5" stroke="#f7768e"/><rect x="562" y="41.3" width="8" height="11.4" fill="#f7768e"/>
              <line x1="592" y1="30.0" x2="592" y2="55.5" stroke="#9ece6a"/><rect x="588" y="41.3" width="8" height="11.4" fill="#9ece6a"/>
              <line x1="618" y1="24.3" x2="618" y2="55.5" stroke="#f7768e"/><rect x="614" y="32.8" width="8" height="19.9" fill="#f7768e"/>
            </g>
            <!-- 均线 -->
            <polyline points="124,119.1 150,115.7 176,105.5 202,102.1 228,93.0 254,84.5 280,78.3 306,77.8 332,73.8 358,67.5 384,63.6 410,61.2 436,56.1 462,52.7 488,53.8 514,61.2 540,62.3 566,53.8 592,53.3 618,45.9" fill="none" stroke="#bb9af7" stroke-width="1.5" stroke-linejoin="round"/>
            <polyline points="254,102.3 280,102.6 306,102.6 332,98.9 358,94.7 384,92.4 410,93.0 436,88.5 462,83.4 488,79.7 514,77.1 540,72.3 566,66.4 592,64.0 618,58.3" fill="none" stroke="#7dcfff" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <p class="foot">以上指数、个股与盘口均为虚构示例数据，仅用于展示 tokyo-night 主题整页效果 · 灰墨 MoH_UI</p>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/tokyo-night/tokens.css">
```

② 在 `<html>` 挂 `data-theme="tokyo-night"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="tokyo-night"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 tokyo-night · 东京入夜 —— 深蓝紫城市霓虹数据终端主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 folke/tokyonight.nvim 官方 Night 色板（Apache-2.0，© Folke Lemaitre）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="tokyo-night"> 即整站换肤。 */

[data-theme="tokyo-night"] {
  color-scheme: dark;

  /* 底与纸：Night 深蓝紫三层，bg #1a1b26 / bg_highlight #292e42 / bg_dark #16161e */
  --color-base-100: #1a1b26;
  --color-base-200: #292e42;
  --color-base-300: #16161e;
  --color-base-content: #c0caf5;

  /* 主色：都市霓虹蓝（blue #7aa2f7），只留给主操作与选中态 */
  --color-primary: #7aa2f7;
  --color-primary-content: #16161e;

  /* 次色 / 强调色：品紫（magenta #bb9af7）与夜青（cyan #7dcfff） */
  --color-secondary: #bb9af7;
  --color-secondary-content: #16161e;
  --color-accent: #7dcfff;
  --color-accent-content: #16161e;

  /* 中性面：terminal_black #414868，用于侧栏与分隔 */
  --color-neutral: #414868;
  --color-neutral-content: #c0caf5;

  /* 语义色：官方数据色直接映射 */
  --color-info: #2ac3de;
  --color-info-content: #16161e;
  --color-success: #9ece6a;
  --color-success-content: #16161e;
  --color-warning: #e0af68;
  --color-warning-content: #16161e;
  --color-error: #f7768e;
  --color-error-content: #16161e;

  /* 圆角 / 尺寸 / 边框：小圆角、细边框，交易终端取向 */
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/tokyo-night/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
