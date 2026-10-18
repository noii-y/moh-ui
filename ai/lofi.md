# 素白（lofi） · 灰墨 MoH_UI

> 虚构极简笔记应用「素白笔记 BLANK NOTES」整页。纯白底纯黑字、发丝细线与大留白，克制文艺；挂 daisyUI 官方主题 data-theme="lofi" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/lofi/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 纯白底（base-100）配纯黑字（base-content），卡片用 97% 浅灰 base-200；全站只有黑白灰，禁止引入任何彩色——连点缀色都不要，连图标都是 currentColor 单色线稿。
- 主按钮直接用默认 btn-primary（近黑底白字，实测对比度约 21:1）；次要操作一律 btn-ghost；不要给按钮加阴影、渐变或彩色描边。
- 靠发丝线分隔而非色块：卡片之间用 1px、currentColor 12%~15% 透明度的细线，版块间大留白，宁可空着也不要塞满。
- 标题 17~34px、正文 12~13px、行距 1.9~2.1，标题加 2~3px 字距；字号克制，不做粗黑超大标题以外的花哨字重对比。
- 所有插图（纸与笔、功能图标、应用界面）只用 currentColor 单色线稿 SVG，线条 1.6~1.8px；界面简影里正文行用 currentColor 30% 透明度的细线表现，选中项用实心黑块，不用彩色高亮。
- 文案克制、像编辑室说话：按钮只写真实动作（免费下载、先读文章、查看全部平台），文章标题与摘要写具体小事，不写「极致体验、灵感生活」这类空话。
- 390px 窄屏顶栏自然折行、功能卡折成两列或单列、文章列表保持纵向单列不溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="lofi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>少即是多 · 素白笔记 BLANK NOTES（lofi 主题案例）</title>
  <meta name="description" content="灰墨 lofi 主题完整页面案例：虚构极简笔记应用整页。纯白底纯黑字、发丝细线与大留白，克制文艺。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1000px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 26px; }
    .brand { font-size: 16px; font-weight: 800; letter-spacing: 2px; display: flex; align-items: baseline; gap: 8px; white-space: nowrap; }
    .brand small { font-size: 10px; font-weight: 400; letter-spacing: 3px; opacity: .5; }
    .menu-row { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; gap: 2px; margin: 0; }
    .sect-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
    .sect-head h2 { font-size: 17px; margin: 0; letter-spacing: 2px; font-weight: 800; }
    .sect-head span { font-size: 12px; opacity: .45; }
    /* Hero（自定义类名，避开 daisyUI 的 .hero 组件） */
    .hero-zone { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; padding: 56px 16px 44px; }
    .hero-zone h1 { font-size: 34px; font-weight: 800; margin: 0; line-height: 1.3; letter-spacing: 3px; }
    .hero-zone .lede { font-size: 13px; opacity: .6; max-width: 420px; margin: 0; line-height: 2.1; letter-spacing: .5px; }
    .hero-art { width: 240px; max-width: 100%; height: auto; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
    /* 功能 */
    .feat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: color-mix(in oklab, currentColor 12%, transparent); }
    .feat-item { background: var(--color-base-100); padding: 20px 18px; display: flex; flex-direction: column; gap: 10px; }
    .feat-item svg { width: 26px; height: 26px; }
    .feat-item h3 { font-size: 14px; margin: 0; font-weight: 700; letter-spacing: 1px; }
    .feat-item p { font-size: 12px; opacity: .6; margin: 0; line-height: 1.9; }
    /* 文章 */
    .art-list { display: flex; flex-direction: column; }
    .art-row { padding: 18px 4px; border-top: 1px solid color-mix(in oklab, currentColor 12%, transparent); display: flex; flex-direction: column; gap: 6px; }
    .art-row .date { font-size: 11px; opacity: .4; letter-spacing: 1.5px; }
    .art-row h3 { font-size: 15px; margin: 0; font-weight: 700; }
    .art-row p { font-size: 12px; opacity: .6; margin: 0; line-height: 1.9; }
    /* 界面简影 */
    .ui-art { width: 100%; max-width: 560px; height: auto; align-self: center; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 15%, transparent); }
    .foot { font-size: 12px; opacity: .45; text-align: center; padding-top: 6px; line-height: 1.9; margin: 0; letter-spacing: .5px; }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero-zone { padding: 36px 8px 28px; }
      .hero-zone h1 { font-size: 26px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand">素白笔记 <small>BLANK NOTES</small></div>
        <ul class="menu-row menu">
          <li><a class="menu-active">功能</a></li>
          <li><a>文章</a></li>
          <li><a>日记</a></li>
          <li><a>关于</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-sm btn-primary" type="button">下载</button>
      </div>
    </div>

    <!-- Hero：纸与笔线稿 -->
    <div class="hero-zone">
      <span class="badge badge-soft badge-sm" style="--badge-color:var(--color-base-content)">手写 · 离线 · 无打扰</span>
      <h1>少即是多，笔记亦然</h1>
      <p class="lede">素白笔记没有信息流、没有红点、没有皮肤商城。一张白纸，一支笔，让你把想记的东西先写下来。</p>
      <svg class="hero-art" viewBox="0 0 240 200" role="img" aria-label="白纸与铅笔线稿：一张折角纸上有五行横线，斜放一支铅笔（示例插图）">
        <!-- 纸张 -->
        <g stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="72" y="18" width="104" height="150" rx="4" />
          <path d="M156 18 l20 20 h-20 z" />
        </g>
        <!-- 纸上线条 -->
        <g stroke="currentColor" stroke-width="1.6" opacity=".55" stroke-linecap="round">
          <line x1="86" y1="52" x2="162" y2="52" />
          <line x1="86" y1="70" x2="168" y2="70" />
          <line x1="86" y1="88" x2="148" y2="88" />
          <line x1="86" y1="106" x2="166" y2="106" />
          <line x1="86" y1="124" x2="132" y2="124" />
        </g>
        <!-- 铅笔 -->
        <g stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M150 150 L178 122 L196 140 L168 168 Z" />
          <line x1="160" y1="140" x2="176" y2="156" />
        </g>
      </svg>
      <div class="cta-row">
        <button class="btn btn-primary" type="button">免费下载</button>
        <button class="btn btn-ghost" type="button">先读文章</button>
      </div>
    </div>

    <!-- 功能：四件事 -->
    <div>
      <div class="sect-head">
        <h2>只做四件事</h2>
        <span>没有的功能，就不做</span>
      </div>
      <div class="feat-grid">
        <div class="feat-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
          <h3>极简编辑</h3>
          <p>打开即写，只有字体、行距与一页纸的宽度。Markdown 语法写在源码里，渲染交给你决定。</p>
        </div>
        <div class="feat-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a7 7 0 0 0-6.9 8.3" />
            <path d="M5 15h14" />
            <path d="M8 18v2M12 18v3M16 18v2" />
          </svg>
          <h3>离线书写</h3>
          <p>不登录也能用，数据只存本机。上飞机、进山里，想写的时候纸一直都在。</p>
        </div>
        <div class="feat-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 13A8 8 0 1 1 11 4a6.5 6.5 0 0 0 9 9z" />
          </svg>
          <h3>专注模式</h3>
          <p>一按收起全部列表与菜单，整屏只剩你和这一段字。计时二十五分钟，到点不催你。</p>
        </div>
        <div class="feat-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 15V3" />
            <path d="M7 8l5-5 5 5" />
            <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
          </svg>
          <h3>一键导出</h3>
          <p>整篇导出为 Markdown 或纯文本，文件归你所有。换任何软件，笔记都带得走。</p>
        </div>
      </div>
    </div>

    <!-- 文章 -->
    <div>
      <div class="sect-head">
        <h2>最近写下的</h2>
        <span>共 128 篇 · 按月归档（虚构）</span>
      </div>
      <div class="art-list">
        <div class="art-row">
          <span class="date">2026 / 09 / 28</span>
          <h3>把灵感写下来，而不是收藏起来</h3>
          <p>收藏夹是数字时代的储物柜：以为收进去就安全了，其实再也不会打开。写下来，才算真的属于你。</p>
        </div>
        <div class="art-row">
          <span class="date">2026 / 09 / 12</span>
          <h3>三分钟手写法：每天只写三行</h3>
          <p>不要求一篇完整的文章，只要三行：今天记住的一件事、一个疑问、一句想说的话。坚持比写得好重要。</p>
        </div>
        <div class="art-row">
          <span class="date">2026 / 08 / 30</span>
          <h3>离线一周之后，我找回了什么</h3>
          <p>把通知全关掉的第七天，我开始注意到楼下的樟树换了叶。安静不是空无一物，是重新听得见细节。</p>
        </div>
        <div class="art-row">
          <span class="date">2026 / 08 / 16</span>
          <h3>导出成 Markdown：写给未来的自己</h3>
          <p>软件会停更，格式会过时，纯文本不会。这是我们坚持整篇导出的原因——你的笔记，不该被任何工具锁住。</p>
        </div>
      </div>
    </div>

    <!-- 界面简影 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:22px;gap:14px;align-items:center">
        <h2 style="font-size:17px;margin:0;letter-spacing:2px;font-weight:800">界面就是一张纸</h2>
        <p style="font-size:12px;opacity:.6;margin:0;text-align:center;line-height:1.9;max-width:420px">左侧一列笔记，右侧一页正文；没有多余的色块，字与留白就是全部。</p>
        <svg class="ui-art" viewBox="0 0 320 210" role="img" aria-label="应用界面线稿：左侧三行笔记列表（第一行选中），右侧标题与四行正文（示例插图）">
          <!-- 窗口 -->
          <rect x="14" y="12" width="292" height="186" rx="6" fill="none" stroke="currentColor" stroke-width="1.6" />
          <!-- 侧栏 -->
          <line x1="104" y1="12" x2="104" y2="198" stroke="currentColor" stroke-width="1.2" opacity=".4" />
          <!-- 列表行 -->
          <rect x="24" y="34" width="66" height="18" rx="3" fill="currentColor" />
          <line x1="24" y1="72" x2="82" y2="72" stroke="currentColor" stroke-width="2" opacity=".35" stroke-linecap="round" />
          <line x1="24" y1="94" x2="74" y2="94" stroke="currentColor" stroke-width="2" opacity=".35" stroke-linecap="round" />
          <line x1="24" y1="116" x2="86" y2="116" stroke="currentColor" stroke-width="2" opacity=".35" stroke-linecap="round" />
          <!-- 正文 -->
          <line x1="124" y1="40" x2="230" y2="40" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" />
          <line x1="124" y1="70" x2="286" y2="70" stroke="currentColor" stroke-width="2" opacity=".3" stroke-linecap="round" />
          <line x1="124" y1="88" x2="272" y2="88" stroke="currentColor" stroke-width="2" opacity=".3" stroke-linecap="round" />
          <line x1="124" y1="106" x2="290" y2="106" stroke="currentColor" stroke-width="2" opacity=".3" stroke-linecap="round" />
          <line x1="124" y1="124" x2="210" y2="124" stroke="currentColor" stroke-width="2" opacity=".3" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <!-- 下载 CTA -->
    <div style="padding:20px 8px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
      <h2 style="font-size:22px;margin:0;letter-spacing:3px;font-weight:800">今晚就开始写</h2>
      <p style="font-size:13px;opacity:.6;max-width:420px;margin:0;line-height:2">免费版够用一辈子：全平台、无广告、无订阅。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn btn-primary" type="button">下载 Mac 版</button>
        <button class="btn btn-ghost" type="button">查看全部平台</button>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">素白笔记 BLANK NOTES 为虚构应用，文章标题、日期、功能与下载信息均为示例数据，仅用于展示 lofi 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="lofi"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/lofi/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
