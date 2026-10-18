# 夜灰（dim） · 灰墨 MoH_UI

> 虚构夜间阅读社区「夜读 DIMREAD」整页。柔和深灰底配浅灰白正文与一点柔光绿，长文排版宽松安静、无霓虹无大屏，适合长时间阅读；挂 daisyUI 官方主题 data-theme="dim" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/dim/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 底色用柔和深灰 base-100 / base-200（oklch 约 31% 明度，近中性带极轻蓝调），正文用浅灰白 base-content；禁止另写纯黑背景——纯黑屏幕在关灯房间里反而刺眼，这是 dim 与纯黑监控类深色主题（如 abyss）的分界线。
- 主色只允许出现一盏柔光绿（base-primary）：主按钮、阅读进度条、引用块边线、图标强调与激活菜单，绝不大面积铺绿、禁止霓虹发光与大面积色块；与 mo-dark（数据看板）、abyss（纯黑监控）、synthwave（霓虹复古）拉开，dim 是其中最安静、最适合长时间阅读的一套。
- 长文阅读是本页核心：正文 14px、行高 1.9~2.1、段落间留空，引用块只用一条 primary 55% 透明度的左边线，不加色块、不加重阴影；标题字距放宽 1~2px，不做粗重堆料。
- 默认 btn-primary 绿底配深色 primary-content 文字实测约 13:1，直接用即可、不要覆写加深；正文弱化文案（lede / 页脚 / 说明）保持 opacity 不低于 .55（实测约 4.8:1），.45 以下小字会跌破 4.5:1，页脚建议 .55 而非 .5。
- 所有插图只用 currentColor 单色线稿 SVG（新月、台灯、摊开的书、四种差异化书封：厚本 / 薄册诗集 / 译本 / 带书签笔记），绿色只做局部勾线（灯光射线、书签），不用彩色照片、不用 emoji、不用渐变、不用发光滤镜。
- 文案写真实动作与具体参数（开始今晚的阅读、阅读进度 62%、行高 1.9、定时提醒远眺 30 分钟），不写「尊贵夜间体验」这类空话；帖子数、书目、作者全部标注虚构 / 示例。
- 禁止 KPI 仪表盘 / 图表大屏 / 排行榜红点：社区页只放三张安静的讨论帖卡，不放数据墙；390px 窄屏顶栏自然折行、书单卡单列、阅读进度条不溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dim">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>夜深了，让字也安静下来 · 夜读 DIMREAD（dim 主题案例）</title>
  <meta name="description" content="灰墨 dim 主题完整页面案例：虚构夜间阅读社区「夜读 DIMREAD」整页。柔和深灰底配浅灰白正文与一点柔光绿，长文排版宽松安静，适合长时间阅读。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 22px; }
    .brand { font-size: 17px; font-weight: 700; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
    .brand small { font-size: 10px; font-weight: 400; letter-spacing: 2px; opacity: .55; }
    .brand svg { width: 22px; height: 22px; color: var(--color-primary); }
    .menu-row { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; gap: 2px; margin: 0; }
    .sect-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
    .sect-head h2 { font-size: 19px; margin: 0; letter-spacing: 1px; }
    .sect-head span { font-size: 12px; opacity: .55; }
    /* 首屏（自定义类名，避开 daisyUI 的 .hero 组件） */
    .night-zone { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 36px 16px 30px; }
    .night-zone h1 { font-size: 32px; font-weight: 800; margin: 0; line-height: 1.3; letter-spacing: 2px; }
    .night-zone .lede { font-size: 13px; opacity: .65; max-width: 460px; margin: 0; line-height: 2; }
    .night-art { width: 320px; max-width: 100%; height: auto; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
    /* 长文阅读样板 */
    .read-article { max-width: 680px; margin: 0 auto; }
    .read-article h3 { font-size: 20px; margin: 0 0 6px; line-height: 1.6; letter-spacing: 1px; }
    .read-meta { font-size: 12px; opacity: .55; margin: 0 0 18px; }
    .read-article p { font-size: 14px; line-height: 2.1; margin: 0 0 16px; opacity: .92; }
    .read-quote { margin: 22px 0; padding: 4px 0 4px 16px; border-left: 2px solid color-mix(in oklab, var(--color-primary) 55%, transparent); font-size: 14px; line-height: 2.1; opacity: .85; }
    .read-note { font-size: 12px; opacity: .55; margin: 18px 0 0; line-height: 1.9; }
    /* 书架 */
    .book-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; }
    .book-art { height: 148px; display: flex; align-items: center; justify-content: center; }
    .book-art svg { width: 78px; height: 112px; }
    .book-name { font-size: 14px; font-weight: 700; }
    .book-author { font-size: 12px; opacity: .55; margin: 0; }
    .book-progress { font-size: 11px; opacity: .55; text-align: right; }
    /* 社区讨论 */
    .post-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; }
    .post-title { font-size: 14px; font-weight: 700; }
    .post-excerpt { font-size: 12px; opacity: .65; margin: 0; line-height: 1.9; }
    .post-meta { font-size: 11px; opacity: .55; display: flex; justify-content: space-between; gap: 8px; }
    /* 护眼参数 */
    .eye-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
    .eye-item { display: flex; align-items: center; gap: 12px; }
    .eye-item svg { width: 26px; height: 26px; flex: none; }
    .eye-num { font-size: 16px; font-weight: 800; letter-spacing: .5px; }
    .eye-label { font-size: 12px; opacity: .55; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 18%, transparent); }
    .foot { font-size: 12px; opacity: .55; text-align: center; padding-top: 6px; line-height: 1.8; margin: 0; }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .night-zone { padding: 24px 8px 20px; }
      .night-zone h1 { font-size: 25px; letter-spacing: 1px; }
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
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
          </svg>
          夜读 <small>DIMREAD</small>
        </div>
        <ul class="menu-row menu" style="--menu-active-bg:color-mix(in oklab, var(--color-primary) 18%, transparent);--menu-active-fg:var(--color-primary-content)">
          <li><a class="menu-active">书架</a></li>
          <li><a>长文</a></li>
          <li><a>社区</a></li>
          <li><a>护眼模式</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-sm btn-primary" type="button">开始阅读</button>
      </div>
    </div>

    <!-- 首屏：月下书桌 -->
    <div class="night-zone">
      <span class="badge badge-soft badge-sm" style="--badge-color:var(--color-base-content)">夜间模式已开启 · 护眼参数运行中</span>
      <h1>夜深了，让字也安静下来</h1>
      <p class="lede">夜读把屏幕调成不刺眼的柔和深灰，字号与行高按长时间阅读调校。睡前半小时，只留一盏台灯和一本书。</p>
      <svg class="night-art" viewBox="0 0 360 210" role="img" aria-label="夜间书桌线稿：新月、一盏台灯、摊开的书（示例插图）">
        <!-- 新月 -->
        <g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round">
          <path d="M78 30 a20 20 0 1 0 14 34 a16 16 0 1 1 -14 -34z" />
        </g>
        <!-- 桌面 -->
        <line x1="30" y1="176" x2="330" y2="176" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        <!-- 摊开的书 -->
        <g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M118 176 V138 Q150 126 180 140 Q210 126 242 138 V176" />
          <line x1="180" y1="140" x2="180" y2="176" />
          <path d="M128 148 q20 -6 42 2 M128 158 q20 -6 42 2" stroke-width="1.2" />
          <path d="M190 150 q22 -8 38 -2 M190 160 q22 -8 38 -2" stroke-width="1.2" />
        </g>
        <!-- 台灯 -->
        <g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <line x1="292" y1="176" x2="292" y2="120" />
          <path d="M278 120 L286 98 L306 98 L314 120 Z" />
        </g>
        <g stroke="var(--color-primary)" stroke-width="1.6" fill="none" stroke-linecap="round">
          <line x1="284" y1="128" x2="272" y2="146" />
          <line x1="292" y1="130" x2="292" y2="152" />
          <line x1="300" y1="128" x2="312" y2="146" />
        </g>
      </svg>
      <div class="cta-row">
        <button class="btn btn-primary" type="button">开始今晚的阅读</button>
        <button class="btn btn-ghost" type="button">翻翻书友书单</button>
      </div>
    </div>

    <!-- 长文阅读样板：本页核心 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:24px 20px;gap:10px">
        <div class="sect-head">
          <h2>今晚在读</h2>
          <span>阅读时长约 12 分钟 · 字号 18px · 行高 1.9</span>
        </div>
        <div class="read-article">
          <h3>灯下读一本旧书</h3>
          <p class="read-meta">沈知远 · 2026 年 10 月 17 日 · 全文 4,200 字</p>
          <p>夜里读的书，和白天读的不是同一本。同一段文字，在台灯下会慢下来，像是作者专门留给深夜的读者。我们为夜读写这一篇，只想说明白一件事：光线、字号、行高，这些看似技术的参数，其实是阅读体验的本身。</p>
          <p>夜读的底色不用纯黑。纯黑的屏幕在关灯的房间里反而刺眼，像一块发光的洞。柔和的深灰更接近月光落在纸面上的样子，字是浅灰白，不浓不淡，读一小时也不觉得累。</p>
          <blockquote class="read-quote">所谓护眼，不是把光压得越暗越好，而是让文字和背景之间安安静静，谁也不抢谁。</blockquote>
          <p>行高是被低估的一项。夜里视线容易串行，行高放到 1.9 以后，段落与段落之间像隔着一小段安静的走廊，眼睛走到下一行不用费劲地找位置。段落之间留空，比加粗小标题更能让人喘口气。</p>
          <p>我们不做霓虹色的夜读界面。绿色的进度条只在读完一格的时候轻轻亮一下，其余时间，整个页面就是深灰底和浅灰白的字。安静，是这个产品唯一的野心。</p>
          <p>睡前最后半小时，建议把阅读时长设定在「再读一节就停」。夜读不会在首页给你推榜单、红点和角标——你今天读到哪一页，明天从哪一页继续，就这么简单。</p>
          <p class="read-note">本文为示例文案，仅用于展示 dim 主题下的长文排版效果。</p>
        </div>
      </div>
    </div>

    <!-- 书架：四本在读 -->
    <div>
      <div class="sect-head">
        <h2>我的书架</h2>
        <span>四本在读 · 按今晚的心情挑一本</span>
      </div>
      <div class="book-grid">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="book-art">
              <svg viewBox="0 0 96 128" role="img" aria-label="厚本精装书线稿（示例插图）">
                <rect x="26" y="10" width="46" height="108" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="34" y1="10" x2="34" y2="118" stroke="currentColor" stroke-width="1.4" />
                <line x1="40" y1="26" x2="64" y2="26" stroke="var(--color-primary)" stroke-width="1.6" stroke-linecap="round" />
                <line x1="40" y1="36" x2="58" y2="36" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="book-name">群山之间</span>
            <p class="book-author">顾临 · 人文随笔</p>
            <div style="display:flex;align-items:center;gap:8px">
              <progress class="progress" value="62" max="100" style="color:var(--color-primary)" aria-label="阅读进度 62%"></progress>
              <span class="book-progress">62%</span>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="book-art">
              <svg viewBox="0 0 96 128" role="img" aria-label="薄册诗集线稿（示例插图）">
                <rect x="36" y="14" width="24" height="100" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="40" y1="14" x2="40" y2="114" stroke="currentColor" stroke-width="1.2" />
                <circle cx="48" cy="44" r="7" fill="none" stroke="var(--color-primary)" stroke-width="1.6" />
                <path d="M48 51 v26 M48 60 l-6 6 M48 66 l6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="book-name">夜里的短诗</span>
            <p class="book-author">林鹿 · 诗集</p>
            <div style="display:flex;align-items:center;gap:8px">
              <progress class="progress" value="35" max="100" style="color:var(--color-primary)" aria-label="阅读进度 35%"></progress>
              <span class="book-progress">35%</span>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="book-art">
              <svg viewBox="0 0 96 128" role="img" aria-label="译本书脊线稿（示例插图）">
                <rect x="26" y="10" width="46" height="108" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="34" y1="10" x2="34" y2="118" stroke="currentColor" stroke-width="1.4" />
                <ellipse cx="53" cy="52" rx="12" ry="9" fill="none" stroke="var(--color-primary)" stroke-width="1.6" />
                <line x1="41" y1="52" x2="65" y2="52" stroke="var(--color-primary)" stroke-width="1.2" />
                <line x1="40" y1="84" x2="66" y2="84" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
                <line x1="40" y1="93" x2="60" y2="93" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="book-name">潮汐书简</span>
            <p class="book-author">奥托·梅尔 · 译著</p>
            <div style="display:flex;align-items:center;gap:8px">
              <progress class="progress" value="80" max="100" style="color:var(--color-primary)" aria-label="阅读进度 80%"></progress>
              <span class="book-progress">80%</span>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="book-art">
              <svg viewBox="0 0 96 128" role="img" aria-label="带书签的笔记本线稿（示例插图）">
                <rect x="26" y="10" width="46" height="108" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="34" y1="10" x2="34" y2="118" stroke="currentColor" stroke-width="1.4" />
                <path d="M58 10 v22 l-6 -5 l-6 5 v-22" fill="none" stroke="var(--color-primary)" stroke-width="1.6" stroke-linejoin="round" />
                <line x1="40" y1="66" x2="66" y2="66" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
                <line x1="40" y1="76" x2="62" y2="76" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
              </svg>
            </div>
            <span class="book-name">今晚的笔记</span>
            <p class="book-author">我的私人笔记</p>
            <div style="display:flex;align-items:center;gap:8px">
              <progress class="progress" value="12" max="100" style="color:var(--color-primary)" aria-label="阅读进度 12%"></progress>
              <span class="book-progress">12%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 夜间社区：三个讨论帖 -->
    <div>
      <div class="sect-head">
        <h2>夜间社区</h2>
        <span>今晚有 326 位书友在线（示例数据）</span>
      </div>
      <div class="post-grid">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <span class="post-title">大家睡前最后读的一章，一般是怎么挑的？</span>
            <p class="post-excerpt">我习惯读散文不读情节，怕停不下来。你们呢，有没有「读了就睡得着」的书单？</p>
            <div class="post-meta"><span>48 条回复</span><span>刚刚</span></div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <span class="post-title">把手机夜间模式调到多暗才合适？</span>
            <p class="post-excerpt">试了三个晚上，发现不是越暗越好，留一点亮度反而不犯困得慢。来交流一下参数。</p>
            <div class="post-meta"><span>23 条回复</span><span>26 分钟前</span></div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <span class="post-title">晒一晒你今晚的书桌一角</span>
            <p class="post-excerpt">一本书、一盏灯、一杯水。不带滤镜，只拍安静。本帖每晚九点整理一次精选。</p>
            <div class="post-meta"><span>91 条回复</span><span>1 小时前</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 护眼参数 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:18px;gap:14px">
        <div class="sect-head" style="margin-bottom:0">
          <h2>护眼参数</h2>
          <span>按长时间阅读调校 · 可在设置里微调</span>
        </div>
        <div class="eye-grid">
          <div class="eye-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 8h13 M3 12h10 M3 16h7" />
              <circle cx="19" cy="15" r="4" /><path d="M19 13v4 M17 15h4" />
            </svg>
            <div style="display:flex;flex-direction:column;gap:2px">
              <span class="eye-num">18px</span>
              <span class="eye-label">正文字号</span>
            </div>
          </div>
          <div class="eye-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
              <path d="M4 6h16 M4 12h16 M4 18h16" />
              <path d="M8 3l-3 3 3 3 M16 15l3 3-3 3" stroke="var(--color-primary)" />
            </svg>
            <div style="display:flex;flex-direction:column;gap:2px">
              <span class="eye-num">1.9</span>
              <span class="eye-label">正文行高</span>
            </div>
          </div>
          <div class="eye-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" /><path d="M12 2v2 M12 20v2 M2 12h2 M20 12h2" />
            </svg>
            <div style="display:flex;flex-direction:column;gap:2px">
              <span class="eye-num">柔光</span>
              <span class="eye-label">跟随环境光</span>
            </div>
          </div>
          <div class="eye-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3a9 9 0 1 0 9 9" /><path d="M12 8v5l3 2" stroke="var(--color-primary)" />
            </svg>
            <div style="display:flex;flex-direction:column;gap:2px">
              <span class="eye-num">30 分钟</span>
              <span class="eye-label">定时提醒远眺</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下载 CTA -->
    <div class="card rounded-box" style="padding:28px 18px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center">
      <h2 style="font-size:21px;margin:0;letter-spacing:1px">把今晚的书装进口袋</h2>
      <p style="font-size:13px;opacity:.65;max-width:440px;margin:0;line-height:1.9">夜读 App 支持书架同步与离线阅读，睡前自动切换护眼模式。应用名为虚构示例。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:2px">
        <button class="btn btn-primary" type="button">下载夜读 App</button>
        <button class="btn btn-ghost" type="button">查看更新日志</button>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">夜读 DIMREAD 为虚构产品，书名、作者、社区帖子与参数均为示例数据，仅用于展示 dim 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="dim"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/dim/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
