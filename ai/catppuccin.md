# 浅滩紫（Catppuccin Mocha）（catppuccin） · 灰墨 MoH_UI

> 桌面端音乐播放器。软糯马卡龙深色 + 淡紫主色，左侧歌单导航、中部专辑封面与播放队列、底部播放条；挂 data-theme="catppuccin" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Catppuccin（MIT） · [上游色板](https://catppuccin.com/palette/)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/catppuccin/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 软糯低饱和马卡龙：三层深底 base-100 #1e1e2e / base-200 #181825 / base-300 #11111b，界面彩色全部取淡色（mauve 紫、blue 蓝、green 绿、淡黄、淡粉），正文与辅助字用 opacity 0.6~0.75 柔化，禁止高饱和荧光色与强对比刺眼白字。
- 淡紫 primary #cba6f7 只给主播放按钮、圆形播放键、进度条 progress-primary、brand-mark 与选中歌单 menu-active；「正在播放」行用 rgba(203,166,247,.12) 淡紫底高亮，不铺实心紫块；primary-content 配深底字 #181825。
- 圆润 cozy 取向：radius-box .75rem、radius-field .5rem、radius-selector .5rem；专辑封面带柔和弥散阴影（0 12px 32px rgba(0,0,0,.35)），不用硬边阴影与描边。
- 封面/配图只用马卡龙几何形（淡紫、淡蓝、淡绿圆点 + 浅黄、淡粉圆角条）压在 #11111b 深底上，opacity 0.85~0.9；不用真人照片、不用 emoji。
- 语义色也是淡的：error 淡粉 #f38ba8 配深酒红内容字 #450a18、warning 浅黄 #f9e2af 配深褐字 #453a00，即浅彩底配深字，不要反过来用深字压淡色。
- 底部播放条 sticky 贴底：base-200 底 + 顶部 1px base-300 分隔线，播放/切歌圆形按钮 ghost/primary 分明，进度条细 5~6px 淡紫。
- 窄屏（≤900px）侧栏折成横排、隐藏分组标签与「本周已听」统计卡、封面缩到 120px、播放条 flex-wrap 换行，390px 不溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="catppuccin">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>晚间通勤歌单 · 浅滩电台（catppuccin 主题案例）</title>
  <meta name="description" content="灰墨 catppuccin（Mocha）主题完整页面案例：桌面端音乐播放器整页。本页只依赖 daisyUI 与 catppuccin 主题，展示真实音乐产品整页效果。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 catppuccin · 浅滩紫（Catppuccin Mocha 移植）—— 软糯马卡龙深色音乐主题
   色板出处：Catppuccin Mocha（MIT，© 2021 Catppuccin）https://catppuccin.com/palette/
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="catppuccin"> 即整站换肤。 */

[data-theme="catppuccin"] {
  color-scheme: dark;

  /* 底与纸：base / mantle / crust 三层，低反差、柔和 */
  --color-base-100: #1e1e2e;
  --color-base-200: #181825;
  --color-base-300: #11111b;
  --color-base-content: #cdd6f4;

  /* 主色：mauve 淡紫，只留给主播放按钮与选中态 */
  --color-primary: #cba6f7;
  --color-primary-content: #181825;

  /* 次色：blue / green，用于次级高亮 */
  --color-secondary: #89b4fa;
  --color-secondary-content: #11111b;
  --color-accent: #a6e3a1;
  --color-accent-content: #11111b;

  --color-neutral: #313244;
  --color-neutral-content: #cdd6f4;

  /* 语义色：sapphire / green / yellow / red，深底配深色字 */
  --color-info: #74c7ec;
  --color-info-content: #11111b;
  --color-success: #a6e3a1;
  --color-success-content: #11111b;
  --color-warning: #f9e2af;
  --color-warning-content: #453a00;
  --color-error: #f38ba8;
  --color-error-content: #450a18;

  /* 圆角 / 尺寸 / 边框：中等偏圆润，cozy 取向 */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.75rem;
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
    .stage { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .side { width: 240px; flex: none; border-inline-end: 1px solid var(--color-base-300); background: var(--color-base-200); padding: 18px 12px; display: flex; flex-direction: column; gap: 14px; }
    .brand { font-size: 15px; font-weight: 700; padding: 2px 12px 8px; display: flex; align-items: center; gap: 8px; }
    .brand-mark { width: 24px; height: 24px; border-radius: 8px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; flex: none; }
    .side-label { font-size: 11px; opacity: .5; padding: 0 12px; letter-spacing: .5px; }
    .mini-stat { background: var(--color-base-300); border-radius: .75rem; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; margin-top: auto; }
    .main { flex: 1; min-width: 0; padding: 20px 24px 32px; display: flex; flex-direction: column; gap: 18px; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .hero-row { display: flex; align-items: flex-end; gap: 20px; flex-wrap: wrap; }
    .cover { width: 160px; height: 160px; flex: none; box-shadow: 0 12px 32px rgba(0,0,0,.35); }
    .tbl-wrap { overflow-x: auto; }
    @media (max-width: 640px) {
      .tbl-wrap {
        -webkit-mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
        mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
      }
    }
    .tbl-wrap .badge { white-space: nowrap; }
    .now-row td { background: rgba(203,166,247,.12); }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    .playerbar { position: sticky; bottom: 0; background: var(--color-base-200); border-block-start: 1px solid var(--color-base-300); padding: 10px 16px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
    .pb-center { flex: 1; min-width: 240px; display: flex; flex-direction: column; gap: 4px; }
    .pb-controls { display: flex; align-items: center; justify-content: center; gap: 10px; }
    .pb-progress { display: flex; align-items: center; gap: 8px; font-size: 11px; opacity: .7; }
    @media (max-width: 900px) {
      .shell { flex-direction: column; }
      .side { width: auto; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); flex-direction: row; align-items: center; flex-wrap: wrap; gap: 8px; }
      .brand { flex: none; padding: 0 12px 0 4px; }
      .side .menu { flex-direction: row; flex-wrap: wrap; width: auto; gap: 4px; }
      .side .menu li a { white-space: nowrap; }
      .side-label, .mini-stat { display: none; }
      .main { padding: 16px 14px 24px; }
      .cover { width: 120px; height: 120px; }
      .playerbar { gap: 10px; }
    }
  </style>
</head>
<body>
  <div class="shell">

    <!-- 侧栏：资料库导航 -->
    <aside class="side">
      <div class="brand"><span class="brand-mark">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 18V5l12-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
      </span>浅滩电台</div>
      <ul class="menu" style="width:100%;padding:0">
        <li><a>首页</a></li>
        <li><a>搜索</a></li>
        <li><a>我的喜欢</a></li>
        <li><a>最近播放</a></li>
      </ul>
      <div class="side-label">我的歌单</div>
      <ul class="menu" style="width:100%;padding:0">
        <li><a class="menu-active">晚间通勤</a></li>
        <li><a>学习专注</a></li>
        <li><a>城市漫步</a></li>
        <li><a>雨天爵士</a></li>
      </ul>
      <div class="mini-stat">
        <div style="font-size:12px;opacity:.65">本周已听</div>
        <div style="font-size:20px;font-weight:700">12.4 小时</div>
        <progress class="progress progress-primary" style="height:6px" value="62" max="100"></progress>
      </div>
    </aside>

    <!-- 主区 + 底部播放条 -->
    <div class="stage">
    <div class="main">

      <!-- 顶栏 -->
      <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
        <div class="navbar-start">
          <span style="font-size:13px;opacity:.65">资料库 · 晚间通勤歌单</span>
        </div>
        <div class="navbar-end" style="gap:10px">
          <label class="input input-sm" style="display:flex;align-items:center;gap:8px;width:230px">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;opacity:.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
            <input type="search" placeholder="搜歌曲、歌手或歌单…" style="flex:1;min-width:0;background:none;border:0;outline:none;color:inherit;font-size:13px" />
          </label>
          <button class="btn btn-ghost btn-sm" type="button">
            通知
            <span class="badge badge-sm badge-primary">3</span>
          </button>
          <div class="avatar avatar-placeholder">
            <div style="width:32px;height:32px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;background:var(--color-neutral);color:var(--color-neutral-content)">沈</div>
          </div>
        </div>
      </div>

      <!-- 歌单头区 -->
      <div class="hero-row">
        <div class="cover mask-circle" role="img" aria-label="歌单封面：抽象几何图形示例">
          <svg viewBox="0 0 160 160" style="width:100%;height:100%" aria-hidden="true">
            <rect width="160" height="160" fill="#11111b" />
            <circle cx="80" cy="72" r="46" fill="#cba6f7" fill-opacity=".85" />
            <circle cx="114" cy="106" r="26" fill="#89b4fa" fill-opacity=".9" />
            <circle cx="50" cy="112" r="18" fill="#a6e3a1" fill-opacity=".9" />
            <rect x="30" y="22" width="46" height="10" rx="5" fill="#f9e2af" />
            <rect x="94" y="26" width="30" height="8" rx="4" fill="#f5c2e7" />
          </svg>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <span class="badge badge-soft badge-primary">官方歌单</span>
          <h1 style="font-size:28px;font-weight:800;margin:0">晚间通勤</h1>
          <p style="font-size:13px;opacity:.65;margin:0">10 首 · 约 40 分钟 · 紫调软电子与民谣（示例数据）</p>
          <div style="display:flex;gap:8px;margin-top:6px">
            <button class="btn btn-primary btn-sm" type="button">播放全部</button>
            <button class="btn btn-ghost btn-sm" type="button">收藏歌单</button>
          </div>
        </div>
      </div>

      <!-- 播放队列 -->
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:16px 16px 8px;gap:12px">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
            <h2 class="card-title" style="font-size:15px">播放队列</h2>
            <span class="badge badge-soft badge-sm">按顺序播放</span>
          </div>
          <div class="tbl-wrap">
            <table class="table" style="font-size:13px;min-width:480px">
              <thead>
                <tr style="opacity:.6;font-size:12px">
                  <th style="width:36px">#</th><th>曲名</th><th>歌手</th><th style="text-align:right">时长</th>
                </tr>
              </thead>
              <tbody>
                <tr class="now-row"><td>1</td><td>晚风过境 <span class="badge badge-soft badge-primary" style="margin-left:6px">播放中</span></td><td>沈知遥</td><td style="text-align:right;opacity:.6">03:42</td></tr>
                <tr><td>2</td><td>雨停之后</td><td>江叙白</td><td style="text-align:right;opacity:.6">04:15</td></tr>
                <tr><td>3</td><td>城市夜航</td><td>顾以安</td><td style="text-align:right;opacity:.6">03:58</td></tr>
                <tr><td>4</td><td>橘子海</td><td>苏曼青</td><td style="text-align:right;opacity:.6">04:02</td></tr>
                <tr><td>5</td><td>第三站</td><td>陆则铭</td><td style="text-align:right;opacity:.6">03:36</td></tr>
                <tr><td>6</td><td>银河修理员</td><td>许星河</td><td style="text-align:right;opacity:.6">05:11</td></tr>
                <tr><td>7</td><td>末班地铁</td><td>何田田</td><td style="text-align:right;opacity:.6">03:47</td></tr>
                <tr><td>8</td><td>月光便利店</td><td>钟予</td><td style="text-align:right;opacity:.6">04:20</td></tr>
                <tr><td>9</td><td>梧桐邮戳</td><td>白一舟</td><td style="text-align:right;opacity:.6">03:29</td></tr>
                <tr><td>10</td><td>冬夜晚风</td><td>韩笑</td><td style="text-align:right;opacity:.6">04:08</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p class="foot">以上曲目与歌手均为虚构示例，仅用于展示 catppuccin 主题整页效果 · 灰墨 MoH_UI</p>
    </div>

    <!-- 底部播放条 -->
    <div class="playerbar">
      <div style="display:flex;align-items:center;gap:10px;flex:none">
        <div class="mask-circle" style="width:40px;height:40px;flex:none" aria-hidden="true">
          <svg viewBox="0 0 40 40" style="width:100%;height:100%">
            <rect width="40" height="40" fill="#11111b" />
            <circle cx="20" cy="18" r="12" fill="#cba6f7" fill-opacity=".85" />
            <circle cx="28" cy="28" r="7" fill="#89b4fa" fill-opacity=".9" />
          </svg>
        </div>
        <div style="display:flex;flex-direction:column;gap:2px">
          <span style="font-size:13px;font-weight:600">晚风过境</span>
          <span style="font-size:11px;opacity:.6">沈知遥</span>
        </div>
      </div>
      <div class="pb-center">
        <div class="pb-controls">
          <button class="btn btn-circle btn-sm btn-ghost" type="button" aria-label="上一首">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px" aria-hidden="true"><path d="M18 5v14l-8-7 8-7ZM6 5h2v14H6z" /></svg>
          </button>
          <button class="btn btn-circle btn-sm btn-primary" type="button" aria-label="播放">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px" aria-hidden="true"><path d="M8 5.14v14l11-7-11-7Z" /></svg>
          </button>
          <button class="btn btn-circle btn-sm btn-ghost" type="button" aria-label="下一首">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px" aria-hidden="true"><path d="M6 5v14l8-7-8-7ZM16 5h2v14h-2z" /></svg>
          </button>
        </div>
        <div class="pb-progress">
          <span>01:24</span>
          <progress class="progress progress-primary" style="flex:1;height:5px" value="38" max="100"></progress>
          <span>03:42</span>
        </div>
      </div>
      <div style="flex:none;opacity:.6;display:flex;align-items:center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:18px;height:18px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5 6 9H2v6h4l5 4V5Z M15.5 8.5a5 5 0 0 1 0 7 M19 5a9 9 0 0 1 0 14" /></svg>
      </div>
    </div>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/catppuccin/tokens.css">
```

② 在 `<html>` 挂 `data-theme="catppuccin"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="catppuccin"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 catppuccin · 浅滩紫（Catppuccin Mocha 移植）—— 软糯马卡龙深色音乐主题
   色板出处：Catppuccin Mocha（MIT，© 2021 Catppuccin）https://catppuccin.com/palette/
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="catppuccin"> 即整站换肤。 */

[data-theme="catppuccin"] {
  color-scheme: dark;

  /* 底与纸：base / mantle / crust 三层，低反差、柔和 */
  --color-base-100: #1e1e2e;
  --color-base-200: #181825;
  --color-base-300: #11111b;
  --color-base-content: #cdd6f4;

  /* 主色：mauve 淡紫，只留给主播放按钮与选中态 */
  --color-primary: #cba6f7;
  --color-primary-content: #181825;

  /* 次色：blue / green，用于次级高亮 */
  --color-secondary: #89b4fa;
  --color-secondary-content: #11111b;
  --color-accent: #a6e3a1;
  --color-accent-content: #11111b;

  --color-neutral: #313244;
  --color-neutral-content: #cdd6f4;

  /* 语义色：sapphire / green / yellow / red，深底配深色字 */
  --color-info: #74c7ec;
  --color-info-content: #11111b;
  --color-success: #a6e3a1;
  --color-success-content: #11111b;
  --color-warning: #f9e2af;
  --color-warning-content: #453a00;
  --color-error: #f38ba8;
  --color-error-content: #450a18;

  /* 圆角 / 尺寸 / 边框：中等偏圆润，cozy 取向 */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.75rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/catppuccin/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
