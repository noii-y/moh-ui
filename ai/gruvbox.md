# 复古做旧（gruvbox） · 灰墨 MoH_UI

> 虚构复古技术博客与极客手作工作室「锈键盘 RUSTY KEYS」整页。暖棕底配橙黄招牌色、自绘线稿复古终端 Hero、四篇技术文章卡与三个手作项目卡；挂 daisyUI [data-theme="gruvbox"] 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：gruvbox (morhetz/gruvbox)（MIT） · [上游色板](https://github.com/morhetz/gruvbox/blob/master/colors/gruvbox.vim)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/gruvbox/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 暖棕三层底：base-100 #282828 / base-200 #3c3836（卡片）/ base-300 #504945（更深装饰块），正文 light1 #ebdbb2；做旧感来自底色的暖棕，不要靠降低文字对比度。
- 主色只用招牌橙 #fe8019（主按钮、订阅 CTA、当前选中）；黄 #fabd2f 与苔绿 #8ec07c 只做次按钮、badge 与少量点缀；蓝色 #83a598 全篇最多出现一次，绝不抢橙黄。
- 主按钮橙底必须配深棕文字（daisyUI 按 primary-content 自动取 #282828）；次要操作用幽灵按钮，按钮只写真实动作（订阅更新、阅读最新文章、查看制作记录）。
- 标题用粗体无衬线配 1px 字距，代码、日期、标签与命令行一律等宽（var(--font-mono)），复古气质靠等宽与暖棕，不靠渐变与投影。
- 所有设备插图只用 currentColor 单色线稿 SVG：终端要画出屏幕命令行、窗口圆点与键帽排；分体键盘、掌机、收音机三款轮廓差异要明显；不用彩色照片、不用 emoji、不用渐变。
- 博客卡片写真实技术选题（终端、键盘、CRT、shell），摘要一行说完价值；标签用 outline badge，日期与阅读时长用等宽小字，不写数字游戏式夸大标题。
- 390px 窄屏顶栏自然折行、文章卡单列、假终端块不横向滚动；手机上 Hero 终端插图保持完整。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="gruvbox">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>在终端里，慢慢造东西 · 锈键盘 RUSTY KEYS（gruvbox 主题案例）</title>
  <meta name="description" content="灰墨 gruvbox 主题完整页面案例：虚构复古技术博客与极客手作工作室整页。暖棕底配橙黄招牌色与苔绿点缀，自绘线稿复古终端、文章列表与手作项目。本页只依赖 daisyUI 与主题 tokens.css，零依赖、零 JS。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 gruvbox · 复古做旧 —— 暖棕橙黄的极客主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 morhetz/gruvbox 官方 Dark 色板（MIT/X11，© 2012 morhetz / Pavel Pertsev）。
   上游仓库根目录未附 LICENSE 文件，但 README 声明 License 为 MIT/X11；
   灰墨已按声明补全标准 MIT 文本于本目录 LICENSE，版权署名归原作者。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="gruvbox"> 即整站换肤。 */

[data-theme="gruvbox"] {
  color-scheme: dark;

  /* 底与纸：暖棕三层 —— bg0 #282828 / bg1 #3c3836 / bg2 #504945，正文 light1 #ebdbb2 */
  --color-base-100: #282828;
  --color-base-200: #3c3836;
  --color-base-300: #504945;
  --color-base-content: #ebdbb2;

  /* 主色：招牌橙 bright_orange #fe8019，只留给主操作与选中态 */
  --color-primary: #fe8019;
  --color-primary-content: #282828;

  /* 次色：招牌黄 bright_yellow #fabd2f；强调色：苔绿 bright_aqua #8ec07c */
  --color-secondary: #fabd2f;
  --color-secondary-content: #282828;
  --color-accent: #8ec07c;
  --color-accent-content: #282828;

  /* 中性面：棕灰 bg3 #665c54，用于边框与分隔 */
  --color-neutral: #665c54;
  --color-neutral-content: #ebdbb2;

  /* 语义色：官方深色模式直接映射（蓝色刻意克制，不抢橙黄主色） */
  --color-info: #83a598;       /* bright_blue */
  --color-info-content: #282828;
  --color-success: #b8bb26;    /* bright_green */
  --color-success-content: #282828;
  --color-warning: #d79921;    /* neutral_yellow，比招牌黄更深一档 */
  --color-warning-content: #282828;
  --color-error: #fb4934;      /* bright_red */
  --color-error-content: #282828;

  /* 圆角 / 尺寸 / 边框：小圆角，复古终端取向 */
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
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .mono { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 20px; }
    .brand { font-size: 16px; font-weight: 700; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
    .brand small { font-size: 11px; letter-spacing: 2px; opacity: .6; font-weight: 400; }
    .brand svg { width: 22px; height: 22px; }
    .hero { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 36px 16px 30px; }
    .hero-term { width: 320px; height: auto; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 22%, transparent); }
    .article-list { display: flex; flex-direction: column; gap: 12px; }
    .proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 14px; }
    .dial { height: 140px; display: flex; align-items: center; justify-content: center; }
    .dial svg { width: 112px; height: 112px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.8; }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero { padding: 24px 8px 20px; }
      .hero h1 { font-size: 26px !important; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <path d="M6 9l2.5 2.5L6 14" />
            <path d="M11 14h7" />
          </svg>
          锈键盘 <small>RUSTY KEYS</small>
        </div>
        <ul class="menu" style="display:flex;flex-direction:row;flex-wrap:wrap;padding:0;gap:4px">
          <li><a class="menu-active">文章</a></li>
          <li><a>手作</a></li>
          <li><a>项目</a></li>
          <li><a>关于</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-primary btn-sm" type="button">订阅更新</button>
      </div>
    </div>

    <!-- Hero：自绘线稿复古终端 -->
    <div class="hero">
      <span class="badge badge-soft badge-sm" style="--badge-color:var(--color-base-content)">复古手作 · 自焊键盘与旧物改造（虚构）</span>
      <h1 style="font-size:34px;font-weight:800;margin:0;letter-spacing:1px">在终端里，慢慢造东西</h1>
      <p style="font-size:13px;opacity:.65;max-width:480px;margin:0;line-height:2">锈键盘是一个一人手作工作室：写终端里的工具，焊每天打字的键盘，也修好别人丢掉的旧机器。</p>
      <svg class="hero-term" viewBox="0 0 440 260" role="img" aria-label="自绘线稿复古终端显示器：屏幕上有命令行与光标，下方是一排键帽（示例插图）">
        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 显示器机身 -->
          <rect x="20" y="18" width="400" height="168" rx="10" />
          <line x1="20" y1="44" x2="420" y2="44" stroke-width="1.2" opacity=".5" />
          <!-- 窗口圆点 -->
          <circle cx="40" cy="31" r="2.5" stroke-width="1.4" />
          <circle cx="52" cy="31" r="2.5" stroke-width="1.4" opacity=".6" />
          <circle cx="64" cy="31" r="2.5" stroke-width="1.4" opacity=".35" />
          <!-- 底座 -->
          <path d="M190 186 L190 204 L250 204 L250 186" />
          <line x1="170" y1="204" x2="270" y2="204" />
          <!-- 键帽排 -->
          <rect x="300" y="196" width="110" height="34" rx="4" stroke-width="1.4" />
          <g stroke-width="1.1" opacity=".8">
            <line x1="316" y1="196" x2="316" y2="230" />
            <line x1="336" y1="196" x2="336" y2="230" />
            <line x1="356" y1="196" x2="356" y2="230" />
            <line x1="376" y1="196" x2="376" y2="230" />
            <line x1="396" y1="196" x2="396" y2="230" />
            <line x1="300" y1="213" x2="410" y2="213" />
          </g>
        </g>
        <!-- 屏幕命令行文字 -->
        <g fill="currentColor" stroke="none" style="font-family:var(--font-mono, ui-monospace, Menlo, Consolas, monospace)">
          <text x="40" y="78" font-size="13">$ rusty build --watch</text>
          <text x="40" y="100" font-size="12" opacity=".55">compiling 42 projects ...</text>
          <text x="40" y="122" font-size="12" opacity=".85">done in 1.8s</text>
          <text x="40" y="150" font-size="13">$ </text>
        </g>
        <rect x="52" y="140" width="9" height="15" fill="currentColor" stroke="none" />
      </svg>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn btn-primary" type="button">订阅更新</button>
        <button class="btn btn-ghost" type="button">阅读最新文章</button>
      </div>
    </div>

    <!-- 最新文章 -->
    <div>
      <div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px">
        <h2 style="font-size:19px;margin:0;letter-spacing:1px">最新文章</h2>
        <span style="font-size:12px;opacity:.5">每周五傍晚更新（虚构排期）</span>
      </div>
      <div class="article-list">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:8px">
            <h3 style="font-size:15px;margin:0">在终端里管理十年的笔记</h3>
            <p style="font-size:12.5px;opacity:.6;margin:0;line-height:1.9">用纯文本文件加一个 shell 脚本，把日记、书单与摘录攒成可搜索的第二大脑；不依赖任何云同步。</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
              <span class="badge badge-outline badge-sm">工具</span>
              <span class="badge badge-outline badge-sm">笔记</span>
              <span class="mono" style="font-size:11.5px;opacity:.55">2026.10.02 · 8 分钟</span>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:8px">
            <h3 style="font-size:15px;margin:0">自焊一把 40% 分体键盘</h3>
            <p style="font-size:12.5px;opacity:.6;margin:0;line-height:1.9">从套件到手焊轴座，再到自己重配列：一把每天打字八千次的键盘，是怎么在一个周末炼成的。</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
              <span class="badge badge-outline badge-sm">手作</span>
              <span class="badge badge-outline badge-sm">键盘</span>
              <span class="mono" style="font-size:11.5px;opacity:.55">2026.09.18 · 12 分钟</span>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:8px">
            <h3 style="font-size:15px;margin:0">给旧 CRT 显示器换 USB 输入</h3>
            <p style="font-size:12.5px;opacity:.6;margin:0;line-height:1.9">一台 2004 年的 CRT 不该只当废品：改驱动板、换线，最终让它成为我桌面上的第二块终端屏。</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
              <span class="badge badge-outline badge-sm">复古</span>
              <span class="badge badge-outline badge-sm">硬件</span>
              <span class="mono" style="font-size:11.5px;opacity:.55">2026.08.30 · 6 分钟</span>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:8px">
            <h3 style="font-size:15px;margin:0">我的 shell 提示符是这样熬出来的</h3>
            <p style="font-size:12.5px;opacity:.6;margin:0;line-height:1.9">提示符里每一段颜色与图标，背后都是一次 shell 手册的深夜翻阅；附上现在用的这一版。</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
              <span class="badge badge-outline badge-sm">工具</span>
              <span class="badge badge-outline badge-sm">shell</span>
              <span class="mono" style="font-size:11.5px;opacity:.55">2026.08.10 · 5 分钟</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 手作项目 -->
    <div>
      <div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px">
        <h2 style="font-size:19px;margin:0;letter-spacing:1px">手作项目</h2>
        <span style="font-size:12px;opacity:.5">均为示例项目，制作记录为虚构</span>
      </div>
      <div class="proj-grid">
        <!-- 分体键盘 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="dial">
              <svg viewBox="0 0 120 120" role="img" aria-label="分体键盘线稿：左右两片斜置板与键帽点阵（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M26 44 L62 40 L68 94 L32 99 Z" />
                  <path d="M94 44 L58 40 L52 94 L88 99 Z" />
                </g>
                <g fill="currentColor" stroke="none">
                  <circle cx="38" cy="56" r="1.4" /><circle cx="50" cy="55" r="1.4" />
                  <circle cx="40" cy="68" r="1.4" /><circle cx="52" cy="67" r="1.4" /><circle cx="46" cy="80" r="1.4" />
                  <circle cx="82" cy="56" r="1.4" /><circle cx="70" cy="55" r="1.4" />
                  <circle cx="80" cy="68" r="1.4" /><circle cx="68" cy="67" r="1.4" /><circle cx="74" cy="80" r="1.4" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span style="font-size:16px;font-weight:700">Split 40</span>
              <span class="mono" style="font-size:10px;letter-spacing:1.5px;opacity:.45">KEYBOARD</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">左右分体、40% 配列，手焊套件加一枚磨砂旋钮。</p>
            <button class="btn btn-ghost btn-sm" type="button" style="align-self:flex-start">查看制作记录</button>
          </div>
        </div>
        <!-- 复古掌机 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="dial">
              <svg viewBox="0 0 120 120" role="img" aria-label="复古掌机线稿：机身、屏幕、十字键与双按键（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="35" y="24" width="50" height="72" rx="10" />
                  <rect x="43" y="34" width="34" height="24" rx="2" />
                  <circle cx="49" cy="78" r="5" />
                  <line x1="49" y1="73" x2="49" y2="83" stroke-width="1.2" />
                  <line x1="44" y1="78" x2="54" y2="78" stroke-width="1.2" />
                  <circle cx="72" cy="74" r="3" />
                  <circle cx="78" cy="81" r="3" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span style="font-size:16px;font-weight:700">Pocket 2000</span>
              <span class="mono" style="font-size:10px;letter-spacing:1.5px;opacity:.45">HANDHELD</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">老式掌机外壳装进树莓派，3.5 寸屏配霍尔摇杆。</p>
            <button class="btn btn-ghost btn-sm" type="button" style="align-self:flex-start">查看制作记录</button>
          </div>
        </div>
        <!-- 电子管收音机 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="dial">
              <svg viewBox="0 0 120 120" role="img" aria-label="电子管收音机线稿：调谐刻度盘、扬声器格栅与天线（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="96" y1="42" x2="106" y2="20" />
                  <circle cx="106" cy="18" r="2" />
                  <rect x="18" y="42" width="84" height="56" rx="6" />
                  <circle cx="42" cy="70" r="10" />
                  <line x1="42" y1="70" x2="47" y2="64" stroke-width="1.2" />
                  <line x1="64" y1="54" x2="64" y2="86" stroke-width="1.2" opacity=".7" />
                  <line x1="72" y1="54" x2="72" y2="86" stroke-width="1.2" opacity=".7" />
                  <line x1="80" y1="54" x2="80" y2="86" stroke-width="1.2" opacity=".7" />
                  <line x1="88" y1="54" x2="88" y2="86" stroke-width="1.2" opacity=".7" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span style="font-size:16px;font-weight:700">Tube 73</span>
              <span class="mono" style="font-size:10px;letter-spacing:1.5px;opacity:.45">RADIO</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">捡来的台式收音机换了电位器，现在能收三个台。</p>
            <button class="btn btn-ghost btn-sm" type="button" style="align-self:flex-start">查看制作记录</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 假终端装饰块 -->
    <div class="card bg-base-300 rounded-box">
      <div class="card-body mono" style="padding:16px 18px;gap:4px;font-size:13px;line-height:1.9">
        <div style="opacity:.85">~ $ rusty subscribe --email you@example.com</div>
        <div style="opacity:.55">added. welcome to rusty keys（示例数据，不会真的发信）</div>
      </div>
    </div>

    <!-- 订阅 CTA -->
    <div class="card rounded-box" style="padding:30px 18px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
      <h2 style="font-size:22px;font-weight:800;margin:0;letter-spacing:1px">订阅锈键盘通讯</h2>
      <p style="font-size:13px;opacity:.6;max-width:460px;margin:0;line-height:1.9">每周一封，只有一件事：这一周我在终端和工作台前真正做出了什么。没有推送轰炸，随时退订。</p>
      <button class="btn btn-primary" type="button">订阅更新</button>
    </div>

    <div class="hairline"></div>
    <p class="foot">锈键盘 RUSTY KEYS 为虚构工作室，文章、项目、日期与联系方式均为示例数据，仅用于展示 gruvbox 主题整页效果 · 灰墨 MoH_UI</p>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/gruvbox/tokens.css">
```

② 在 `<html>` 挂 `data-theme="gruvbox"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="gruvbox"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 gruvbox · 复古做旧 —— 暖棕橙黄的极客主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 morhetz/gruvbox 官方 Dark 色板（MIT/X11，© 2012 morhetz / Pavel Pertsev）。
   上游仓库根目录未附 LICENSE 文件，但 README 声明 License 为 MIT/X11；
   灰墨已按声明补全标准 MIT 文本于本目录 LICENSE，版权署名归原作者。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="gruvbox"> 即整站换肤。 */

[data-theme="gruvbox"] {
  color-scheme: dark;

  /* 底与纸：暖棕三层 —— bg0 #282828 / bg1 #3c3836 / bg2 #504945，正文 light1 #ebdbb2 */
  --color-base-100: #282828;
  --color-base-200: #3c3836;
  --color-base-300: #504945;
  --color-base-content: #ebdbb2;

  /* 主色：招牌橙 bright_orange #fe8019，只留给主操作与选中态 */
  --color-primary: #fe8019;
  --color-primary-content: #282828;

  /* 次色：招牌黄 bright_yellow #fabd2f；强调色：苔绿 bright_aqua #8ec07c */
  --color-secondary: #fabd2f;
  --color-secondary-content: #282828;
  --color-accent: #8ec07c;
  --color-accent-content: #282828;

  /* 中性面：棕灰 bg3 #665c54，用于边框与分隔 */
  --color-neutral: #665c54;
  --color-neutral-content: #ebdbb2;

  /* 语义色：官方深色模式直接映射（蓝色刻意克制，不抢橙黄主色） */
  --color-info: #83a598;       /* bright_blue */
  --color-info-content: #282828;
  --color-success: #b8bb26;    /* bright_green */
  --color-success-content: #282828;
  --color-warning: #d79921;    /* neutral_yellow，比招牌黄更深一档 */
  --color-warning-content: #282828;
  --color-error: #fb4934;      /* bright_red */
  --color-error-content: #282828;

  /* 圆角 / 尺寸 / 边框：小圆角，复古终端取向 */
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/gruvbox/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
