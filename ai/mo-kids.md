# 童趣（mo-kids） · 灰墨 MoH_UI

> 虚构儿童学习 App「小步学堂」前台。奶油白暖底，天蓝 / 草绿 / 橙红 / 粉紫糖果色只做点缀，大圆角、大图标，含乘火箭穿书星球插画、六门兴趣课卡、闯关打卡勋章激励、家长证言与三档定价；挂 data-theme="mo-kids" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-kids/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 大面积奶油白（base-100 / base-200）铺底，糖果色（橙 primary、蓝 secondary、绿 success、粉紫 accent、暖黄 warning）只用于图标、徽章、主按钮与插画点缀，禁止整屏铺彩色。
- 主按钮（免费试听 / 开始学习）用 primary 橙底白字：实心糖果色明度压到 oklch≈0.52–0.55（橙 #C63B00、蓝 #0073AD、粉紫 #9E518F），白字对比实测约 5.2:1（AA≥4.5）；头像首字同标准。次级操作走 btn-soft，弱入口才用幽灵按钮，不出现颜色名按钮。
- 大圆角：盒子 --radius-box 1.25rem、输入 0.875rem；卡片与图标盒都要圆润，图标盒 14–16px 圆角、图标 54px 大尺寸，亲和不尖锐。
- 插画全部自绘简笔几何风（火箭、星球、书本、勋章），统一用 var(--color-*) 语义色填充，禁止外链图片、禁止出现卡通 IP 与教材品牌形象、禁止 emoji。
- 文案写真实动作与适龄提示（免费试听、开始学习、联系老师、适合 6–12 岁），家长评价与价格标注虚构。
- 糖果实心色明度压到 oklch≈0.52–0.55（白字对比≥4.5:1），暖黄 warning 例外用深字（对比 6.3:1）；大面积奶油白保柔和，文字用暖深灰棕 base-content（约 34% 明度，浅底对比 11:1），不出现浅底白字看不清。
- 390px 窄屏：Hero 改单列堆叠、课程卡与价格卡自动折单列、顶栏导航折行，按钮不挤出屏、不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-kids">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>每天 20 分钟，爱上学习 · 小步学堂（mo-kids 主题案例）</title>
  <meta name="description" content="灰墨 mo-kids 主题完整页面案例：虚构儿童学习 App「小步学堂」前台。奶油白暖底配天蓝、草绿、橙红、粉紫糖果色点缀，大圆角、大图标，适合 6–12 岁孩子与家长。本页只依赖 daisyUI 与 mo-kids 主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-kids · 童趣（浅色）—— 儿童学习 App 前台糖果色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-kids"> 即整站换肤。
   设计取向：奶油白暖底，天蓝 / 草绿 / 橙红 / 粉紫糖果色只做点缀，大圆角、大图标，文字仍保持清晰可读。 */

[data-theme="mo-kids"] {
  color-scheme: light;

  /* 底与纸：奶油白三层，暖调、明亮不刺眼 */
  --color-base-100: oklch(98.2% 0.012 85);
  --color-base-200: oklch(95.8% 0.016 85);
  --color-base-300: oklch(92.5% 0.020 85);
  --color-base-content: oklch(34% 0.035 60);

  /* 主色：暖糖果橙（压到白字对比 5.2:1，AA 达标），只留给主操作 */
  --color-primary: oklch(55% 0.20 50);
  --color-primary-content: oklch(99% 0.005 85);

  /* 次色：沉稳天蓝（白字对比 5.2:1），用于次级元素与课程点缀 */
  --color-secondary: oklch(52% 0.14 235);
  --color-secondary-content: oklch(99% 0.005 235);

  /* 强调色：粉紫（白字对比 5.2:1），用于点缀色卡与美术课图标 */
  --color-accent: oklch(55% 0.13 335);
  --color-accent-content: oklch(99% 0.005 335);

  /* 中性：暖奶油灰，用于卡片描边与次要块 */
  --color-neutral: oklch(90% 0.020 80);
  --color-neutral-content: oklch(38% 0.030 60);

  /* 语义色：实心色全部压到白字对比 ≥4.5:1，暖黄保留深字 */
  --color-info: oklch(55% 0.13 235);
  --color-info-content: oklch(99% 0.005 235);
  --color-success: oklch(53% 0.15 155);
  --color-success-content: oklch(99% 0.005 155);
  --color-warning: oklch(80% 0.14 85);
  --color-warning-content: oklch(34% 0.06 70);
  --color-error: oklch(53% 0.19 25);
  --color-error-content: oklch(99% 0.005 25);

  /* 圆角 / 尺寸：大圆角，亲和圆润 */
  --radius-selector: 0.75rem;
  --radius-field: 0.875rem;
  --radius-box: 1.25rem;
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
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 40px; display: flex; flex-direction: column; gap: 22px; }
    .brand { font-size: 18px; font-weight: 800; display: flex; align-items: center; gap: 9px; white-space: nowrap; }
    .brand svg { width: 32px; height: 32px; flex: none; }
    .nav-menu { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; gap: 2px; }
    .hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 18px; align-items: center; background: color-mix(in oklab, var(--color-secondary) 8%, var(--color-base-100)); border-radius: var(--radius-box); padding: 30px 26px; }
    .hero-copy { display: flex; flex-direction: column; gap: 14px; }
    .hero h1 { font-size: 36px; font-weight: 800; line-height: 1.25; margin: 0; letter-spacing: 1px; }
    .hero p.sub { font-size: 15px; line-height: 2; opacity: .72; margin: 0; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 10px; }
    .hero-art svg { width: 100%; height: auto; display: block; }
    .sec-head { display: flex; flex-direction: column; gap: 4px; margin-bottom: 4px; }
    .sec-head h2 { font-size: 22px; font-weight: 800; margin: 0; }
    .sec-head p { font-size: 13px; opacity: .6; margin: 0; }
    .course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; }
    .icon-box { width: 54px; height: 54px; border-radius: 16px; display: flex; align-items: center; justify-content: center; flex: none; }
    .icon-box svg { width: 34px; height: 34px; }
    .age-tag { font-size: 11px; }
    .mech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 14px; }
    .mech-art { border-radius: var(--radius-box); display: flex; align-items: center; justify-content: center; padding: 14px; }
    .mech-art svg { width: 100%; height: auto; display: block; }
    .quote-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }
    .price-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; align-items: stretch; }
    .price-card { display: flex; flex-direction: column; gap: 10px; }
    .price-num { font-size: 30px; font-weight: 800; }
    .price-num small { font-size: 13px; font-weight: 500; opacity: .6; }
    .foot { font-size: 12px; opacity: .55; text-align: center; line-height: 2; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 18%, transparent); }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 10px; padding: 12px 16px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero { grid-template-columns: 1fr; padding: 22px 18px; }
      .hero h1 { font-size: 27px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏：品牌 + 导航 + 免费试听 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand">
          <!-- 自绘小火箭标 -->
          <svg viewBox="0 0 32 32" role="img" aria-label="小步学堂火箭标">
            <rect width="32" height="32" rx="9" fill="var(--color-primary)" />
            <path d="M16 6.5c2.8 2.2 4.2 5.4 4.2 8.8 0 1.8-.5 3.4-1.3 4.7h-5.8c-.8-1.3-1.3-2.9-1.3-4.7C11.8 11.9 13.2 8.7 16 6.5z" fill="var(--color-primary-content)" />
            <circle cx="16" cy="14.5" r="2.1" fill="var(--color-primary)" />
            <path d="M11.5 18.5 9 22l3.2-.8M20.5 18.5 23 22l-3.2-.8" fill="var(--color-secondary)" />
          </svg>
          小步学堂
        </div>
        <ul class="menu nav-menu">
          <li><a>课程</a></li>
          <li><a>学习计划</a></li>
          <li><a>题库</a></li>
          <li><a>家长中心</a></li>
          <li><a>关于</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-primary" type="button">免费试听</button>
      </div>
    </div>

    <!-- Hero：标题 + 双 CTA + 乘火箭穿书星球插画 -->
    <div class="hero">
      <div class="hero-copy">
        <span class="badge badge-soft badge-primary age-tag" style="align-self:flex-start">适合 6–12 岁</span>
        <h1>每天 20 分钟，<br />让孩子爱上学习</h1>
        <p class="sub">语文、数学、英语、科学、编程、美术六大兴趣课程，闯关式学习节奏，家长随时可看学习报告。</p>
        <div class="cta-row">
          <button class="btn btn-primary btn-lg" type="button">免费试听</button>
          <button class="btn btn-soft btn-lg" type="button">家长了解一下</button>
        </div>
      </div>
      <div class="hero-art">
        <svg viewBox="0 0 360 250" role="img" aria-label="简笔插画：小朋友乘火箭在书本星球间穿行（示例插图）">
          <!-- 左行星：带环 -->
          <circle cx="66" cy="188" r="40" fill="color-mix(in oklab, var(--color-secondary) 26%, var(--color-base-100))" />
          <ellipse cx="66" cy="188" rx="56" ry="12" fill="none" stroke="var(--color-secondary)" stroke-width="3" transform="rotate(-14 66 188)" />
          <!-- 右上小行星 -->
          <circle cx="300" cy="62" r="26" fill="color-mix(in oklab, var(--color-accent) 26%, var(--color-base-100))" />
          <!-- 左上漂浮书 -->
          <g transform="rotate(-8 96 78)">
            <rect x="70" y="66" width="52" height="26" rx="4" fill="var(--color-success)" />
            <line x1="96" y1="66" x2="96" y2="92" stroke="var(--color-base-100)" stroke-width="3" />
          </g>
          <!-- 右下漂浮书 -->
          <g transform="rotate(10 292 196)">
            <rect x="266" y="184" width="52" height="26" rx="4" fill="var(--color-warning)" />
            <line x1="292" y1="184" x2="292" y2="210" stroke="var(--color-base-content)" stroke-width="3" opacity=".35" />
          </g>
          <!-- 星星（四角闪光） -->
          <path d="M150 36 154 46 164 50 154 54 150 64 146 54 136 50 146 46 Z" fill="var(--color-warning)" />
          <path d="M252 140 255 148 263 151 255 154 252 162 249 154 241 151 249 148 Z" fill="var(--color-accent)" />
          <path d="M316 120 318.5 126 324.5 128.5 318.5 131 316 137 313.5 131 307.5 128.5 313.5 126 Z" fill="var(--color-secondary)" />
          <!-- 火箭（倾斜上升） -->
          <g transform="rotate(-18 190 120)">
            <!-- 尾焰 -->
            <path d="M182 176 190 198 198 176 Z" fill="var(--color-warning)" />
            <!-- 尾翼 -->
            <path d="M168 150 152 172 168 168 Z" fill="var(--color-secondary)" />
            <path d="M212 150 228 172 212 168 Z" fill="var(--color-secondary)" />
            <!-- 箭体 -->
            <path d="M190 56c16 14 24 34 24 56 0 12-3 23-8 31h-32c-5-8-8-19-8-31 0-22 8-42 24-56z" fill="var(--color-primary)" />
            <!-- 座舱窗 + 小朋友头 -->
            <circle cx="190" cy="112" r="17" fill="var(--color-base-100)" />
            <circle cx="190" cy="116" r="11" fill="color-mix(in oklab, var(--color-warning) 55%, var(--color-base-100))" />
            <circle cx="186" cy="114" r="1.4" fill="var(--color-base-content)" />
            <circle cx="194" cy="114" r="1.4" fill="var(--color-base-content)" />
            <path d="M186 120q4 3.5 8 0" fill="none" stroke="var(--color-base-content)" stroke-width="1.4" stroke-linecap="round" />
          </g>
        </svg>
      </div>
    </div>

    <!-- 课程卡：六门课 -->
    <div>
      <div class="sec-head">
        <h2>六门兴趣课</h2>
        <p>每门课按年龄分级，随到随学</p>
      </div>
      <div class="course-grid">
        <!-- 语文：书本 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:10px">
            <div class="icon-box" style="background:color-mix(in oklab, var(--color-secondary) 16%, var(--color-base-100));color:var(--color-secondary)">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M8 12c5-2 9-2 16 0v24c-7-2-11-2-16 0z" />
                <path d="M40 12c-5-2-9-2-16 0v24c7-2 11-2 16 0z" />
                <line x1="14" y1="19" x2="20" y2="19" /><line x1="14" y1="25" x2="20" y2="25" />
              </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span style="font-size:17px;font-weight:800">语文</span>
              <span class="badge badge-soft age-tag">6–8 岁</span>
            </div>
            <p style="font-size:12px;opacity:.62;margin:0">128 课时 · 拼音识字与阅读表达</p>
            <button class="btn btn-soft btn-sm" type="button" style="align-self:flex-start">开始学习</button>
          </div>
        </div>
        <!-- 数学：算盘 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:10px">
            <div class="icon-box" style="background:color-mix(in oklab, var(--color-primary) 16%, var(--color-base-100));color:var(--color-primary)">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">
                <rect x="8" y="12" width="32" height="24" rx="3" />
                <line x1="18" y1="12" x2="18" y2="36" /><line x1="30" y1="12" x2="30" y2="36" />
                <circle cx="18" cy="20" r="2.6" fill="currentColor" stroke="none" />
                <circle cx="30" cy="27" r="2.6" fill="currentColor" stroke="none" />
                <circle cx="18" cy="31" r="2.6" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span style="font-size:17px;font-weight:800">数学</span>
              <span class="badge badge-soft age-tag">7–9 岁</span>
            </div>
            <p style="font-size:12px;opacity:.62;margin:0">136 课时 · 数感思维与口算闯关</p>
            <button class="btn btn-soft btn-sm" type="button" style="align-self:flex-start">开始学习</button>
          </div>
        </div>
        <!-- 英语：ABC -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:10px">
            <div class="icon-box" style="background:color-mix(in oklab, var(--color-success) 16%, var(--color-base-100));color:var(--color-success)">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10 34 18 14l8 20" />
                <line x1="12.5" y1="28" x2="23.5" y2="28" />
                <path d="M34 15h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-5" />
              </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span style="font-size:17px;font-weight:800">英语</span>
              <span class="badge badge-soft age-tag">6–8 岁</span>
            </div>
            <p style="font-size:12px;opacity:.62;margin:0">120 课时 · 自然拼读与日常口语</p>
            <button class="btn btn-soft btn-sm" type="button" style="align-self:flex-start">开始学习</button>
          </div>
        </div>
        <!-- 科学：烧瓶 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:10px">
            <div class="icon-box" style="background:color-mix(in oklab, var(--color-warning) 22%, var(--color-base-100));color:var(--color-warning)">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 10h8M22 10v10l-8 14a4 4 0 0 0 3.5 6h13a4 4 0 0 0 3.5-6l-8-14V10" />
                <circle cx="22" cy="32" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="28" cy="36" r="1.6" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span style="font-size:17px;font-weight:800">科学</span>
              <span class="badge badge-soft age-tag">8–10 岁</span>
            </div>
            <p style="font-size:12px;opacity:.62;margin:0">96 课时 · 动手小实验与现象观察</p>
            <button class="btn btn-soft btn-sm" type="button" style="align-self:flex-start">开始学习</button>
          </div>
        </div>
        <!-- 编程：代码屏 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:10px">
            <div class="icon-box" style="background:color-mix(in oklab, var(--color-info) 16%, var(--color-base-100));color:var(--color-info)">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="8" y="12" width="32" height="22" rx="3" />
                <path d="M20 20l-5 3 5 3M28 20l5 3-5 3" />
                <line x1="18" y1="38" x2="30" y2="38" />
              </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span style="font-size:17px;font-weight:800">编程</span>
              <span class="badge badge-soft age-tag">9–12 岁</span>
            </div>
            <p style="font-size:12px;opacity:.62;margin:0">88 课时 · 积木编程与小动画创作</p>
            <button class="btn btn-soft btn-sm" type="button" style="align-self:flex-start">开始学习</button>
          </div>
        </div>
        <!-- 美术：调色盘画笔 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:10px">
            <div class="icon-box" style="background:color-mix(in oklab, var(--color-accent) 16%, var(--color-base-100));color:var(--color-accent)">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M24 12c-8 0-14 5-14 11a8 8 0 0 0 8 8c2 0 3-1 3-2.5S20 26 22 26h6c4 0 8-3 8-7 0-4-5-7-12-7z" />
                <circle cx="17" cy="20" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="24" cy="17" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="31" cy="20" r="1.6" fill="currentColor" stroke="none" />
                <path d="M33 30l5-5 2 2-5 5-3 1z" />
              </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <span style="font-size:17px;font-weight:800">美术</span>
              <span class="badge badge-soft age-tag">6–9 岁</span>
            </div>
            <p style="font-size:12px;opacity:.62;margin:0">104 课时 · 线条色彩与手工创作</p>
            <button class="btn btn-soft btn-sm" type="button" style="align-self:flex-start">开始学习</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 学习玩法：三个激励机制 -->
    <div>
      <div class="sec-head">
        <h2>边玩边学</h2>
        <p>闯关、打卡、勋章，让坚持变成成就感</p>
      </div>
      <div class="mech-grid">
        <!-- 闯关地图 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:12px">
            <div class="mech-art" style="background:color-mix(in oklab, var(--color-primary) 10%, var(--color-base-100))">
              <svg viewBox="0 0 260 130" role="img" aria-label="闯关地图：蜿蜒小路上有四个关卡点（示例插图）">
                <path d="M20 110 C 60 110, 60 70, 100 70 S 150 30, 190 40 S 220 24, 240 20" fill="none" stroke="var(--color-primary)" stroke-width="3" stroke-dasharray="1 8" stroke-linecap="round" />
                <circle cx="20" cy="110" r="10" fill="var(--color-success)" />
                <circle cx="100" cy="70" r="10" fill="var(--color-success)" />
                <circle cx="190" cy="40" r="11" fill="var(--color-primary)" stroke="var(--color-base-100)" stroke-width="3" />
                <circle cx="240" cy="20" r="9" fill="none" stroke="var(--color-base-300)" stroke-width="3" />
                <path d="M240 6v-9M240 6h14" fill="none" stroke="var(--color-success)" stroke-width="2.4" stroke-linecap="round" />
                <path d="M254 -3v12l-7-6z" fill="var(--color-success)" />
              </svg>
            </div>
            <h3 style="font-size:16px;font-weight:800;margin:0">闯关地图</h3>
            <p style="font-size:12px;opacity:.62;margin:0;line-height:1.9">每节课是地图上的一关，答对题目点亮下一站，终点有宝箱惊喜。</p>
          </div>
        </div>
        <!-- 每日打卡 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:12px">
            <div class="mech-art" style="background:color-mix(in oklab, var(--color-success) 10%, var(--color-base-100))">
              <svg viewBox="0 0 260 130" role="img" aria-label="每周打卡：七个圆点中五个已打勾，今天正在打卡（示例插图）">
                <g stroke-width="0">
                  <circle cx="32" cy="65" r="13" fill="var(--color-success)" />
                  <circle cx="72" cy="65" r="13" fill="var(--color-success)" />
                  <circle cx="112" cy="65" r="13" fill="var(--color-success)" />
                  <circle cx="152" cy="65" r="13" fill="var(--color-success)" />
                  <circle cx="192" cy="65" r="13" fill="var(--color-primary)" />
                  <circle cx="232" cy="65" r="13" fill="none" stroke="var(--color-base-300)" stroke-width="3" />
                </g>
                <g stroke="var(--color-base-100)" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M26 65l4 4 8-8" /><path d="M66 65l4 4 8-8" /><path d="M106 65l4 4 8-8" /><path d="M146 65l4 4 8-8" />
                </g>
                <text x="192" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--color-primary-content)">今</text>
              </svg>
            </div>
            <h3 style="font-size:16px;font-weight:800;margin:0">每日打卡</h3>
            <p style="font-size:12px;opacity:.62;margin:0;line-height:1.9">每天学满 20 分钟打卡一次，连续 7 天解锁一段新学习旅程。</p>
          </div>
        </div>
        <!-- 学习勋章 -->
        <div class="card bg-base-100 rounded-box" style="box-shadow:0 1px 0 var(--color-base-300)">
          <div class="card-body" style="padding:18px;gap:12px">
            <div class="mech-art" style="background:color-mix(in oklab, var(--color-accent) 10%, var(--color-base-100))">
              <svg viewBox="0 0 260 130" role="img" aria-label="学习勋章：星形、圆形、盾形三枚徽章（示例插图）">
                <!-- 星形勋章 -->
                <path d="M52 34l7 14 15 2-11 10 3 15-14-8-14 8 3-15-11-10 15-2z" fill="var(--color-warning)" />
                <!-- 圆形绶带勋章 -->
                <circle cx="130" cy="56" r="20" fill="var(--color-secondary)" />
                <path d="M120 72l-6 18 10-5 6 8 4-18z" fill="var(--color-secondary)" />
                <path d="M140 72l6 18-10-5-6 8-4-18z" fill="var(--color-secondary)" opacity=".7" />
                <path d="M130 48l3 6 6 .8-4.5 4.2 1.2 6-5.7-3-5.7 3 1.2-6-4.5-4.2 6-.8z" fill="var(--color-base-100)" />
                <!-- 盾形勋章 -->
                <path d="M208 38l22 6v16c0 14-9 22-22 26-13-4-22-12-22-26V44z" fill="var(--color-accent)" />
                <path d="M200 60l5 5 9-10" fill="none" stroke="var(--color-base-100)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 style="font-size:16px;font-weight:800;margin:0">学习勋章</h3>
            <p style="font-size:12px;opacity:.62;margin:0;line-height:1.9">读完一本书、算对一百题、连续打卡，都有专属勋章可收藏。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 家长证言 -->
    <div>
      <div class="sec-head">
        <h2>家长怎么说</h2>
        <p>以下评价为虚构示例</p>
      </div>
      <div class="quote-grid">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:18px;gap:12px">
            <p style="font-size:13px;line-height:2;margin:0">「以前坐不住十分钟，现在自己定闹钟要先闯关再吃饭，学习报告我每晚都看。」</p>
            <div style="display:flex;align-items:center;gap:10px">
              <div class="avatar avatar-placeholder">
                <div style="width:36px;height:36px;border-radius:999px;background:var(--color-secondary);color:var(--color-secondary-content);display:flex;align-items:center;justify-content:center;font-size:14px">妈</div>
              </div>
              <div style="font-size:12px">
                <div style="font-weight:700">朵朵妈妈</div>
                <div style="opacity:.55">上海（虚构）</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:18px;gap:12px">
            <p style="font-size:13px;line-height:2;margin:0">「课程分级很清楚，先试听再决定，孩子喜欢科学课的小实验，周末拉着我一起做。」</p>
            <div style="display:flex;align-items:center;gap:10px">
              <div class="avatar avatar-placeholder">
                <div style="width:36px;height:36px;border-radius:999px;background:var(--color-accent);color:var(--color-accent-content);display:flex;align-items:center;justify-content:center;font-size:14px">爸</div>
              </div>
              <div style="font-size:12px">
                <div style="font-weight:700">小宇爸爸</div>
                <div style="opacity:.55">成都（虚构）</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 价格 -->
    <div>
      <div class="sec-head">
        <h2>选一个合适的套餐</h2>
        <p>价格均为虚构示例，可随时联系老师退订</p>
      </div>
      <div class="price-grid">
        <div class="card bg-base-100 rounded-box price-card" style="box-shadow:0 1px 0 var(--color-base-300)">
          <h3 style="font-size:16px;font-weight:800;margin:0">体验版</h3>
          <div class="price-num">¥0<small> / 7 天</small></div>
          <p style="font-size:12px;opacity:.62;margin:0;line-height:1.9">每门课解锁前 3 关，含一次学习报告。</p>
          <button class="btn btn-soft" type="button" style="margin-top:auto">免费试听</button>
        </div>
        <div class="card bg-base-200 rounded-box price-card" style="border:2px solid var(--color-primary)">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h3 style="font-size:16px;font-weight:800;margin:0">月度版</h3>
            <span class="badge badge-primary age-tag">最受欢迎</span>
          </div>
          <div class="price-num">¥48<small> / 月</small></div>
          <p style="font-size:12px;opacity:.62;margin:0;line-height:1.9">六门课全部解锁，家长中心实时看进度。</p>
          <button class="btn btn-primary" type="button" style="margin-top:auto">开始试听</button>
        </div>
        <div class="card bg-base-100 rounded-box price-card" style="box-shadow:0 1px 0 var(--color-base-300)">
          <h3 style="font-size:16px;font-weight:800;margin:0">年度版</h3>
          <div class="price-num">¥388<small> / 年</small></div>
          <p style="font-size:12px;opacity:.62;margin:0;line-height:1.9">全年课程 + 每月学习规划，赠一册练习册。</p>
          <button class="btn btn-soft" type="button" style="margin-top:auto">联系老师</button>
        </div>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">
      适合 6–12 岁孩子在家长陪同下使用，单次建议学习 20 分钟并注意用眼休息。<br />
      小步学堂为虚构产品，课程内容、课时、价格、家长评价与客服电话（400-000-0000）均为示例数据，仅用于展示 mo-kids 主题整页效果 · 灰墨 MoH_UI
    </p>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-kids/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-kids"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-kids"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-kids · 童趣（浅色）—— 儿童学习 App 前台糖果色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-kids"> 即整站换肤。
   设计取向：奶油白暖底，天蓝 / 草绿 / 橙红 / 粉紫糖果色只做点缀，大圆角、大图标，文字仍保持清晰可读。 */

[data-theme="mo-kids"] {
  color-scheme: light;

  /* 底与纸：奶油白三层，暖调、明亮不刺眼 */
  --color-base-100: oklch(98.2% 0.012 85);
  --color-base-200: oklch(95.8% 0.016 85);
  --color-base-300: oklch(92.5% 0.020 85);
  --color-base-content: oklch(34% 0.035 60);

  /* 主色：暖糖果橙（压到白字对比 5.2:1，AA 达标），只留给主操作 */
  --color-primary: oklch(55% 0.20 50);
  --color-primary-content: oklch(99% 0.005 85);

  /* 次色：沉稳天蓝（白字对比 5.2:1），用于次级元素与课程点缀 */
  --color-secondary: oklch(52% 0.14 235);
  --color-secondary-content: oklch(99% 0.005 235);

  /* 强调色：粉紫（白字对比 5.2:1），用于点缀色卡与美术课图标 */
  --color-accent: oklch(55% 0.13 335);
  --color-accent-content: oklch(99% 0.005 335);

  /* 中性：暖奶油灰，用于卡片描边与次要块 */
  --color-neutral: oklch(90% 0.020 80);
  --color-neutral-content: oklch(38% 0.030 60);

  /* 语义色：实心色全部压到白字对比 ≥4.5:1，暖黄保留深字 */
  --color-info: oklch(55% 0.13 235);
  --color-info-content: oklch(99% 0.005 235);
  --color-success: oklch(53% 0.15 155);
  --color-success-content: oklch(99% 0.005 155);
  --color-warning: oklch(80% 0.14 85);
  --color-warning-content: oklch(34% 0.06 70);
  --color-error: oklch(53% 0.19 25);
  --color-error-content: oklch(99% 0.005 25);

  /* 圆角 / 尺寸：大圆角，亲和圆润 */
  --radius-selector: 0.75rem;
  --radius-field: 0.875rem;
  --radius-box: 1.25rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-kids/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
