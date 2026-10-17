# 林间（everforest） · 灰墨 MoH_UI

> 虚构笔记应用「林间笔记 Grove Notes」整页。暖纸白底配森林绿主色与柔蓝点缀，三栏应用简影、双链图谱、示例长文与三张定价卡，护眼低对比但正文清晰；页面全部使用 daisyUI 组件拼装、零依赖。

来源：Everforest (sainnhe/everforest)（MIT） · [上游色板](https://github.com/sainnhe/everforest/blob/master/autoload/everforest.vim)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/everforest/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 暖纸白底（base-100 #fdf6e3 / base-200 #f4f0d9），分层只靠 base-300 浅卡其与细边框，不写死任何 hex；侧栏用 base-300 半透明即可，不要深色面板。
- 主色森林绿 #8da101 只留给主 CTA 与选中态；因明度偏高，绿色按钮必须配深墨字（已在 tokens 里设 primary-content #2d353b），禁止反白。
- 柔蓝 #3a94c5 只用于链接、高亮底与双向链接点；橙色 #f57d26 全页只允许点缀一次，不要进大色块。
- 长文区用宋体/Georgia 衬线、行高 2.1 以上、字距正常；正文 opacity 别低于 .65，护眼不等于低对比到难读。
- 应用界面简影、双链图谱一律用 currentColor 线稿 SVG + 主题语义色填充（高亮用 color-mix 叠色），不用截图、不用 emoji、不用真实产品 logo。
- 按钮只写真实动作（免费开始、订阅会员、下载桌面版），定价数字要大、说明列表要克制，虚构价格必须在页脚声明示例。
- 圆角放大到 box 0.75rem、留白舒展；390px 窄屏三栏简影保持矢量缩放不变形，卡片单列不溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="everforest">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>把想法种进笔记树 · 林间笔记 Grove Notes（everforest 主题案例）</title>
  <meta name="description" content="灰墨 everforest 主题完整页面案例：虚构个人知识管理应用「林间笔记」整页。柔绿暖色纸感、护眼低对比、三栏应用简影与长文示例，页面全部使用 daisyUI 组件拼装、零依赖。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 everforest · 林间 —— Everforest 柔绿暖色护眼浅色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 sainnhe/everforest 官方 Medium 浅色板（MIT，© 2019 sainnhe，
   autoload/everforest.vim 的 everforest#get_palette：bg0 #fdf6e3 / bg1 #f4f0d9 / bg3 #e6e2cc /
   fg #5c6a72 / green #8da101 / blue #3a94c5 / orange #f57d26 / aqua #35a77c /
   yellow #dfa000 / red #f85552 / bg5 #bdc3af）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="everforest"> 即整站换肤。 */

[data-theme="everforest"] {
  color-scheme: light;

  /* 底与纸：Medium 浅色纸感三层，bg0 暖纸白 / bg1 卡片 / bg3 再深一档 */
  --color-base-100: #fdf6e3;
  --color-base-200: #f4f0d9;
  --color-base-300: #e6e2cc;
  --color-base-content: #5c6a72; /* fg 柔灰绿墨，保证正文对比又不刺眼 */

  /* 主色：forest green #8da101；#2d353b 取自上游 dark 板 bg0（同文件 get_palette 深色值），作深墨字底保证对比 */
  --color-primary: #8da101;
  --color-primary-content: #2d353b;

  /* 次色 / 强调色：blue #3a94c5 与 orange #f57d26（强调只点缀） */
  --color-secondary: #3a94c5;
  --color-secondary-content: #fdf6e3;
  --color-accent: #f57d26;
  --color-accent-content: #2d353b;

  /* 中性面：bg5 灰绿，用于侧栏与分隔 */
  --color-neutral: #bdc3af;
  --color-neutral-content: #5c6a72;

  /* 语义色：info 蓝 / success aqua 绿 / warning 暗黄 / error 柔红 */
  --color-info: #3a94c5;
  --color-info-content: #fdf6e3;
  --color-success: #35a77c;
  --color-success-content: #2d353b;
  --color-warning: #dfa000;
  --color-warning-content: #2d353b;
  --color-error: #f85552;
  --color-error-content: #fdf6e3;

  /* 圆角 / 尺寸 / 边框：大圆角、细边框，纸感写作取向 */
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
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .serif { font-family: "Songti SC", "SimSun", Georgia, serif; }
    .wrap { max-width: 1040px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 22px; }
    .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 16px; white-space: nowrap; }
    .brand svg { width: 26px; height: 26px; }
    .brand small { font-weight: 400; font-size: 11px; opacity: .55; letter-spacing: .5px; }
    .navlinks { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; gap: 2px; margin: 0; list-style: none; }
    .navlinks a { padding: 4px 8px; border-radius: var(--radius-selector); font-size: 13px; opacity: .8; text-decoration: none; color: inherit; }
    .navlinks a:hover { background: var(--color-base-200); opacity: 1; }
    .hero { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 34px 8px 10px; }
    .hero h1 { font-size: 34px; line-height: 1.3; margin: 0; letter-spacing: 1px; }
    .hero p { font-size: 14px; opacity: .72; max-width: 540px; margin: 0; line-height: 1.9; }
    .appshot { width: 100%; max-width: 760px; height: auto; border-radius: var(--radius-box); box-shadow: var(--shadow, 0 1px 3px color-mix(in oklab, currentColor 12%, transparent)); }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .feature-item { display: flex; flex-direction: column; gap: 8px; }
    .feature-item svg { width: 30px; height: 30px; }
    .feature-item h3 { font-size: 14px; margin: 0; }
    .feature-item p { font-size: 12px; opacity: .68; margin: 0; line-height: 1.85; }
    .essay { font-size: 14px; line-height: 2.15; }
    .essay p { margin: 0 0 12px; }
    .price-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px; }
    .price { display: flex; flex-direction: column; gap: 10px; }
    .price b { font-size: 26px; }
    .price ul { margin: 0; padding-left: 18px; font-size: 12.5px; line-height: 2.1; opacity: .75; display: flex; flex-direction: column; gap: 2px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.8; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 20%, transparent); }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero h1 { font-size: 25px; }
      .hero { padding: 24px 4px 6px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏：叶片 logo + 导航 + 免费开始 -->
    <div class="navbar rounded-box bg-base-200">
      <div class="navbar-start">
        <span class="brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21c0-7 3-11 9-13-1 7-4 11-9 13z" />
            <path d="M12 21c0-6-2.5-9.5-8-11 1.5 6 4.5 9.5 8 11z" opacity=".6" />
          </svg>
          林间笔记 <small>GROVE NOTES</small>
        </span>
        <ul class="navlinks">
          <li><a>功能</a></li>
          <li><a>定价</a></li>
          <li><a>日记</a></li>
          <li><a>下载</a></li>
          <li><a>登录</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:8px">
        <button class="btn btn-primary btn-sm" type="button">免费开始</button>
      </div>
    </div>

    <!-- Hero：柔色大标题 + 三栏应用简影 -->
    <div class="hero">
      <span class="badge badge-soft badge-sm">本地优先 · 离线可用</span>
      <h1>把想法种进一棵<br />会生长的笔记树</h1>
      <p>林间笔记把每天写下的只言片语悄悄连成网：早上记下的灵感，晚上就和三个月前的读书卡片彼此呼应。不上传、不锁定，数据永远在你自己的磁盘上。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn btn-primary" type="button">免费开始</button>
        <button class="btn btn-ghost" type="button">看看日记</button>
      </div>
    </div>

    <!-- 应用界面简影：三栏（笔记本列表 / 目录 / 正文），内联 SVG 全用主题语义色 -->
    <div style="display:flex;justify-content:center;padding:6px 2px 10px">
      <svg class="appshot" viewBox="0 0 760 380" role="img" aria-label="林间笔记应用三栏界面简影：左侧笔记本列表，中间文档目录，右侧正文含一条柔和高亮与两个双向链接点（示例插图）">
        <!-- 外框 -->
        <rect x="0" y="0" width="760" height="380" rx="10" fill="var(--color-base-200)" stroke="var(--color-base-300)" stroke-width="1.5" />
        <!-- 顶栏条 -->
        <rect x="0" y="0" width="760" height="34" rx="10" fill="var(--color-base-300)" opacity=".55" />
        <circle cx="18" cy="17" r="4" fill="currentColor" opacity=".5" />
        <circle cx="32" cy="17" r="4" fill="currentColor" opacity=".3" />
        <!-- 左栏：笔记本列表 -->
        <rect x="0" y="34" width="176" height="346" fill="var(--color-base-300)" opacity=".45" />
        <text x="16" y="60" font-size="12" font-weight="700" fill="currentColor" opacity=".85">笔记本</text>
        <circle cx="20" cy="84" r="4" fill="var(--color-primary)" />
        <text x="32" y="88" font-size="12" fill="currentColor" opacity=".85">写作训练</text>
        <text x="32" y="116" font-size="12" fill="currentColor" opacity=".55">读书摘录</text>
        <text x="32" y="144" font-size="12" fill="currentColor" opacity=".55">项目·开流</text>
        <text x="32" y="172" font-size="12" fill="currentColor" opacity=".55">日记 2026</text>
        <text x="32" y="200" font-size="12" fill="currentColor" opacity=".55">灵感碎片</text>
        <!-- 中栏：目录 -->
        <rect x="176" y="34" width="170" height="346" fill="var(--color-base-100)" opacity=".7" />
        <text x="192" y="60" font-size="12" font-weight="700" fill="currentColor" opacity=".85">今日笔记</text>
        <text x="192" y="92" font-size="11.5" fill="currentColor" opacity=".8">1. 晨间散步的路线</text>
        <text x="192" y="118" font-size="11.5" fill="currentColor" opacity=".6">2. 秋天的树怎么记</text>
        <text x="192" y="144" font-size="11.5" fill="currentColor" opacity=".6">3. 阅读：森林与海</text>
        <!-- 右栏：正文 -->
        <text x="376" y="66" font-size="15" font-weight="700" fill="currentColor">秋天的树怎么记</text>
        <!-- 柔和高亮行 -->
        <rect x="370" y="80" width="330" height="16" rx="4" fill="color-mix(in oklab, var(--color-secondary) 20%, transparent)" />
        <text x="376" y="93" font-size="12" fill="currentColor" opacity=".85">记下一棵树，先写它的声音，再写形状。</text>
        <rect x="370" y="106" width="360" height="10" rx="3" fill="currentColor" opacity=".18" />
        <rect x="370" y="126" width="340" height="10" rx="3" fill="currentColor" opacity=".18" />
        <rect x="370" y="146" width="280" height="10" rx="3" fill="currentColor" opacity=".18" />
        <!-- 双向链接点 -->
        <circle cx="376" cy="186" r="4" fill="var(--color-accent)" />
        <text x="388" y="190" font-size="11.5" fill="currentColor" opacity=".7">连向「晨间散步的路线」</text>
        <circle cx="376" cy="212" r="4" fill="var(--color-accent)" />
        <text x="388" y="216" font-size="11.5" fill="currentColor" opacity=".7">连向「阅读：森林与海」</text>
        <rect x="370" y="244" width="360" height="10" rx="3" fill="currentColor" opacity=".18" />
        <rect x="370" y="264" width="300" height="10" rx="3" fill="currentColor" opacity=".18" />
      </svg>
    </div>

    <!-- 功能卡：4 个 -->
    <div>
      <h2 style="font-size:18px;margin:0 0 12px">它怎么帮你写下去</h2>
      <div class="feature-grid">
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="6" cy="6" r="2.4" />
              <circle cx="18" cy="5" r="2" />
              <circle cx="12" cy="14" r="2.6" />
              <circle cx="19" cy="18" r="2.2" />
              <circle cx="5" cy="18" r="1.8" />
              <path d="m7.8 7.5 3 4.2M16.2 6.6l-2 5.2M14.2 15.6l3.2 1.4M10 15.8l-3.4 1.6" opacity=".7" />
            </svg>
            <h3>双链图谱</h3>
            <p>写下 [[ ]] 就自动连到已有笔记。三百篇之后，图谱帮你看见那些你自己都忘了的关联。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="8" y1="3" x2="8" y2="7" />
              <line x1="16" y1="3" x2="16" y2="7" />
              <path d="m8.5 15.5 2.2 2.2 4.8-4.6" />
            </svg>
            <h3>每日回顾</h3>
            <p>每晚九点把今天新建与修改的笔记排成清单：三行之内，你能想起今天都想了些什么。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <ellipse cx="12" cy="6" rx="8" ry="3" />
              <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
              <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" opacity=".6" />
            </svg>
            <h3>本地优先</h3>
            <p>所有笔记就是一个文件夹里的 Markdown 文本。离线飞机上照写，随时可以整个搬走。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box feature-item">
          <div class="card-body" style="padding:16px;gap:8px">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            <h3>专注写作</h3>
            <p>一键进入只显示当前笔记的禅模式：侧栏收起、字数悄然增长，写够 500 字再放你出来。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 长文示例：证明纸感阅读舒适 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body essay serif" style="padding:24px 26px">
        <h2 style="font-size:19px;margin:0 0 10px">示例短文：秋天的树怎么记</h2>
        <p>每天傍晚散步经过的那排悬铃木，直到第三年我才认真看过它。从前它只是回家路上一团模糊的绿，直到我在林间笔记里为它开了一篇笔记，随手写下第一行：树皮剥落的地方像褪了色的地图。</p>
        <p>后来每篇关于它的短文都自动连回那一页。秋天它的叶子怎么黄、雨天它的声音有什么不同、哪只鸟在清晨六点来过，一年之后连成了一条看不见的线——这才发现，原来一棵树可以在我的日记里活两个季节。</p>
        <p style="opacity:.6;font-size:12.5px">（以上为示例短文，仅用于展示本主题下长文阅读的行距与纸感；虚构内容，与任何真实人物无关。）</p>
      </div>
    </div>

    <!-- 定价：三张卡 -->
    <div>
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:12px">
        <h2 style="font-size:18px;margin:0">定价</h2>
        <span style="font-size:12px;opacity:.55">以下价格为虚构示例</span>
      </div>
      <div class="price-grid">
        <div class="card bg-base-200 rounded-box price">
          <div class="card-body" style="padding:18px;gap:8px">
            <h3 style="font-size:14px;margin:0">免费版</h3>
            <b>¥ 0</b>
            <ul>
              <li>笔记与双链无上限</li>
              <li>本地文件夹同步</li>
              <li>每日回顾清单</li>
            </ul>
            <button class="btn btn-ghost btn-sm" style="margin-top:auto" type="button">免费开始</button>
          </div>
        </div>
        <div class="card rounded-box price" style="outline:1px solid var(--color-primary)">
          <div class="card-body" style="padding:18px;gap:8px">
            <div style="display:flex;align-items:center;gap:8px">
              <h3 style="font-size:14px;margin:0">会员版</h3>
              <span class="badge badge-primary badge-sm">推荐</span>
            </div>
            <b>¥ 36 <span style="font-size:12px;font-weight:400;opacity:.6">/ 年</span></b>
            <ul>
              <li>含全部免费版功能</li>
              <li>多端离线同步（端到端加密）</li>
              <li>双链图谱可视化</li>
              <li>禅模式与字数目标</li>
            </ul>
            <button class="btn btn-primary btn-sm" style="margin-top:auto" type="button">订阅会员</button>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box price">
          <div class="card-body" style="padding:18px;gap:8px">
            <h3 style="font-size:14px;margin:0">终身版</h3>
            <b>¥ 198</b>
            <ul>
              <li>含全部会员功能</li>
              <li>一次买断，永久升级</li>
              <li>支持这个项目继续做下去</li>
            </ul>
            <button class="btn btn-ghost btn-sm" style="margin-top:auto" type="button">买断终身版</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 下载 CTA -->
    <div class="card rounded-box" style="padding:28px 18px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center">
      <h2 style="font-size:19px;margin:0">现在写下第一棵树</h2>
      <p style="font-size:13px;opacity:.62;max-width:420px;margin:0;line-height:1.9">下载林间笔记，打开就有三行引导。十五分钟后，你会有第一篇自己的双链笔记。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn btn-primary" type="button">下载桌面版</button>
        <button class="btn btn-ghost" type="button">网页版直接用</button>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">林间笔记 Grove Notes 为虚构应用，界面、短文、价格与功能均为示例数据，仅用于展示 everforest 主题整页效果 · 灰墨 MoH_UI</p>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/everforest/tokens.css">
```

② 在 `<html>` 挂 `data-theme="everforest"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="everforest"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 everforest · 林间 —— Everforest 柔绿暖色护眼浅色主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   色值逐字取自 sainnhe/everforest 官方 Medium 浅色板（MIT，© 2019 sainnhe，
   autoload/everforest.vim 的 everforest#get_palette：bg0 #fdf6e3 / bg1 #f4f0d9 / bg3 #e6e2cc /
   fg #5c6a72 / green #8da101 / blue #3a94c5 / orange #f57d26 / aqua #35a77c /
   yellow #dfa000 / red #f85552 / bg5 #bdc3af）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="everforest"> 即整站换肤。 */

[data-theme="everforest"] {
  color-scheme: light;

  /* 底与纸：Medium 浅色纸感三层，bg0 暖纸白 / bg1 卡片 / bg3 再深一档 */
  --color-base-100: #fdf6e3;
  --color-base-200: #f4f0d9;
  --color-base-300: #e6e2cc;
  --color-base-content: #5c6a72; /* fg 柔灰绿墨，保证正文对比又不刺眼 */

  /* 主色：forest green #8da101；#2d353b 取自上游 dark 板 bg0（同文件 get_palette 深色值），作深墨字底保证对比 */
  --color-primary: #8da101;
  --color-primary-content: #2d353b;

  /* 次色 / 强调色：blue #3a94c5 与 orange #f57d26（强调只点缀） */
  --color-secondary: #3a94c5;
  --color-secondary-content: #fdf6e3;
  --color-accent: #f57d26;
  --color-accent-content: #2d353b;

  /* 中性面：bg5 灰绿，用于侧栏与分隔 */
  --color-neutral: #bdc3af;
  --color-neutral-content: #5c6a72;

  /* 语义色：info 蓝 / success aqua 绿 / warning 暗黄 / error 柔红 */
  --color-info: #3a94c5;
  --color-info-content: #fdf6e3;
  --color-success: #35a77c;
  --color-success-content: #2d353b;
  --color-warning: #dfa000;
  --color-warning-content: #2d353b;
  --color-error: #f85552;
  --color-error-content: #fdf6e3;

  /* 圆角 / 尺寸 / 边框：大圆角、细边框，纸感写作取向 */
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/everforest/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
