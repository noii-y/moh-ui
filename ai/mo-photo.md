# 见山影集（mo-photo） · 灰墨 MoH_UI

> 虚构摄影师个人作品集「见山摄影 · 林见山」整页。米白暖纸三层、衬线大标题、大留白、画廊式装裱作品框（框内为有构图的线稿：山水/人像/街景/建筑），与官方 black（纯黑影棚式）一浅一深；挂 data-theme="mo-photo" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-photo/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 引入方式：项目已引 daisyUI 后再 <link> 本 tokens.css，并在 <html data-theme="mo-photo">；不要引 daisyui-themes.css，整页底色由本变量集接管。
- 纸底三层已实测：--color-base-100 #F6F1E7（画廊墙面）、200 #EFE8D9（装裱衬底）、300 #D8CDB6（画框线/分隔线）；正文 --color-base-content #2A251E 纸面 13.5:1，次级文字 --color-secondary #4F5B66 纸面 6.18:1，都不许用 opacity 压浅，需要淡一档就换色。
- 主色只有一个：胡桃木棕 #5F4229（奶油字 #FAF6EE 实测 8.48:1），只用于主按钮、当前导航下划线与链接；古铜 #7C4F14 是点睛色（奶油字 6.53:1 / 纸面 6.25:1），只能小面积，禁止大面积铺底。
- 字体气质：大标题与品牌名用宋体衬线（Songti SC / Noto Serif SC）、字距放宽 3~6px；正文保持无衬线 16px、行高 1.8；这是浅色安静画廊，不是黑底影棚——严禁把背景改成深色。
- 大留白是硬指标：Hero 上下留白 ≥80px、作品框间距 ≥40px、页宽 ≤1040px；板块之间留足呼吸，不要把内容塞满。
- 作品框必须是「装裱结构」：外框 1px 细线 + 内底 base-200 衬纸 + 框内有构图的线稿（远山+水面/人物侧影/路灯+街/建筑轮廓），用 currentColor 单色 SVG；禁止放真照片、禁止空色块占位。
- 状态色只在徽章小面积出现：info #2F5D7C / success #3D6B35 / warning #7A4F0E / error #8C2F27，奶油字全部 ≥5.8:1，且必须配中文文字，不只靠颜色传达。
- 390px 规则：顶栏品牌与导航自然折行居中、作品框与系列卡单列、关于图文上下堆叠；整页不出现 position:fixed、不出现横向滚动。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-photo">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>见山摄影 · 林见山个人作品集（mo-photo 主题案例）</title>
  <meta name="description" content="灰墨 mo-photo 主题完整页面案例：虚构摄影师个人作品集整页。米白暖纸、衬线大标题、大留白、画廊式作品框；本页只依赖 daisyUI 与 mo-photo 主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-photo · 见山影集（浅色）—— 摄影师个人作品集 · 安静画廊主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-photo"> 即整站换肤。
   设计取向：米白暖纸三层打底，深暖墨色文字，胡桃木棕主色只留给主按钮与当前导航；
   与官方 black（纯黑影棚式）一浅一深，本套是浅色安静画廊、大留白、衬线标题。 */

[data-theme="mo-photo"] {
  color-scheme: light;

  /* 底与纸：米白象牙纸三层，层次极淡，像美术馆墙面 */
  --color-base-100: #f6f1e7;
  --color-base-200: #efe8d9;
  --color-base-300: #d8cdb6;
  --color-base-content: #2a251e;

  /* 主色：胡桃木棕（奶油字实测 8.48:1），只留给主按钮、当前导航、链接 */
  --color-primary: #5f4229;
  --color-primary-content: #faf6ee;

  /* 次色：石板蓝灰（奶油字 6.45:1），次级按钮与系列标签 */
  --color-secondary: #4f5b66;
  --color-secondary-content: #faf6ee;

  /* 强调色：古铜棕（奶油字 6.53:1 / 纸上 6.25:1），仅作点睛小面积 */
  --color-accent: #7c4f14;
  --color-accent-content: #faf6ee;

  /* 中性：浅米灰卡，深字 9.22:1 */
  --color-neutral: #e6ddc9;
  --color-neutral-content: #3a332a;

  /* 语义色：全部压到奶油字 ≥4.5:1，状态另配中文文字 */
  --color-info: #2f5d7c;
  --color-info-content: #faf6ee;
  --color-success: #3d6b35;
  --color-success-content: #faf6ee;
  --color-warning: #7a4f0e;
  --color-warning-content: #faf6ee;
  --color-error: #8c2f27;
  --color-error-content: #faf6ee;

  /* 圆角 / 尺寸 / 边框：画廊偏克制，细边框、无投影 */
  --radius-selector: 0.25rem;
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
    /* 仅布局辅助：颜色一律取主题语义变量，不写死 hex */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 16px; line-height: 1.8; }
    .serif { font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif; }
    a:focus-visible, button:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; border-radius: 4px; }

    .gwrap { max-width: 1040px; margin: 0 auto; padding: 0 20px 64px; }

    /* 顶栏：极细品牌 + 导航 + 预约 */
    .ghead { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; flex-wrap: wrap; padding: 28px 0 0; border-bottom: 1px solid var(--color-base-300); padding-bottom: 18px; }
    .gbrand h1 { margin: 0; font-size: 26px; font-weight: 600; letter-spacing: 6px; }
    .gbrand p { margin: 2px 0 0; font-size: 12px; letter-spacing: 3px; color: var(--color-secondary); }
    .gnav { display: flex; flex-wrap: wrap; gap: 4px; list-style: none; margin: 0; padding: 0; }
    .gnav a { display: block; padding: 8px 14px; font-size: 15px; color: var(--color-base-content); text-decoration: none; letter-spacing: 2px; border-radius: 4px; }
    .gnav .gnow { color: var(--color-primary); font-weight: 700; box-shadow: inset 0 -2px 0 var(--color-primary); }

    /* Hero：大留白 + 衬线大标题 + 线稿相机 */
    .ghero { padding: 84px 0 72px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 26px; }
    .ghero .gkick { font-size: 13px; letter-spacing: 5px; color: var(--color-secondary); margin: 0; }
    .ghero h2 { margin: 0; font-size: 44px; line-height: 1.4; font-weight: 600; letter-spacing: 3px; max-width: 720px; }
    .ghero .gline { width: 56px; height: 1px; background: var(--color-base-300); }
    .ghero .gdesc { margin: 0; font-size: 16px; color: var(--color-secondary); max-width: 460px; }
    .gcamera { width: 72px; height: 72px; color: var(--color-primary); }

    /* 作品框：装裱感，框内是有构图的线稿（不是真图也不是空色块） */
    .gframes { display: grid; grid-template-columns: 1fr; gap: 40px; }
    .gframe { background: var(--color-base-200); border: 1px solid var(--color-base-300); padding: 16px; }
    .gframe svg { display: block; width: 100%; height: auto; }
    .gframe figcaption { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 14px 4px 2px; }
    .gframe figcaption b { font-size: 17px; font-weight: 600; letter-spacing: 1px; }
    .gframe figcaption span { font-size: 13px; color: var(--color-secondary); letter-spacing: 1px; }
    @media (min-width: 760px) {
      .gframes { grid-template-columns: 1fr 1fr; }
      .gframe.wide { grid-column: 1 / -1; }
    }

    /* 板块小标题 */
    .gsechead { margin: 72px 0 20px; text-align: center; }
    .gsechead h2 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 6px; }
    .gsechead p { margin: 8px 0 0; font-size: 14px; color: var(--color-secondary); letter-spacing: 2px; }

    /* 系列作品 */
    .gseries { display: grid; grid-template-columns: 1fr; gap: 18px; }
    @media (min-width: 760px) { .gseries { grid-template-columns: repeat(3, 1fr); } }
    .gcard { background: var(--color-base-100); border: 1px solid var(--color-base-300); padding: 14px; display: flex; flex-direction: column; gap: 10px; }
    .gthumb { background: var(--color-base-200); border: 1px solid var(--color-base-300); padding: 10px; }
    .gthumb svg { display: block; width: 100%; height: auto; }
    .gcard b { font-size: 17px; font-weight: 600; letter-spacing: 1px; }
    .gcard p { margin: 0; font-size: 14px; color: var(--color-secondary); }

    /* 关于 + 日志 */
    .gabout { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: center; background: var(--color-base-200); border: 1px solid var(--color-base-300); padding: 28px; }
    @media (min-width: 760px) { .gabout { grid-template-columns: 220px 1fr; } }
    .gabout svg { width: 100%; height: auto; color: var(--color-primary); }
    .gabout h3 { margin: 0 0 10px; font-size: 20px; font-weight: 600; letter-spacing: 2px; }
    .gabout p { margin: 0 0 12px; font-size: 15px; color: var(--color-base-content); }
    .glog { margin-top: 18px; border-top: 1px solid var(--color-base-300); }
    .glog div { display: flex; align-items: baseline; gap: 16px; padding: 14px 2px; border-bottom: 1px solid var(--color-base-300); flex-wrap: wrap; }
    .glog time { font-size: 13px; color: var(--color-secondary); letter-spacing: 1px; flex: none; }
    .glog span { font-size: 15px; }

    /* 约拍 CTA */
    .gbook { margin-top: 72px; border: 1px solid var(--color-base-300); background: var(--color-base-200); padding: 44px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px; }
    .gbook h2 { margin: 0; font-size: 26px; font-weight: 600; letter-spacing: 4px; }
    .gbook p { margin: 0; font-size: 15px; color: var(--color-secondary); max-width: 480px; }
    .gbook .gtypes { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }

    .gfoot { margin-top: 56px; border-top: 1px solid var(--color-base-300); padding-top: 20px; text-align: center; font-size: 13px; color: var(--color-secondary); line-height: 2.2; letter-spacing: 1px; }

    @media (max-width: 640px) {
      .ghead { justify-content: center; text-align: center; }
      .gnav { justify-content: center; }
      .ghero { padding: 52px 0 48px; }
      .ghero h2 { font-size: 28px; }
      .gsechead { margin-top: 48px; }
    }
  </style>
</head>
<body>
  <div class="gwrap">

    <!-- 顶栏 -->
    <header class="ghead">
      <div class="gbrand serif">
        <h1>见山摄影</h1>
        <p>JIANSHAN · PORTFOLIO</p>
      </div>
      <nav aria-label="主导航">
        <ul class="gnav">
          <li><a class="gnow" aria-current="page">作品</a></li>
          <li><a>系列</a></li>
          <li><a>关于</a></li>
          <li><a>日志</a></li>
          <li><a>联系</a></li>
        </ul>
      </nav>
      <button class="btn btn-outline" type="button">预约拍摄</button>
    </header>

    <!-- Hero：大留白 + 衬线大标题 + 相机线稿 -->
    <section class="ghero">
      <p class="gkick">PHOTOGRAPHER · 林见山</p>
      <h2 class="serif">光，停在刚刚好的地方</h2>
      <svg class="gcamera" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
        <circle cx="12" cy="13" r="3.4" />
        <path d="M18 10.2h.01" />
      </svg>
      <p class="gdesc">十年时间，只拍自然光下的人、山与街。本站所有作品为虚构示例，展示 mo-photo 主题的画廊排版。</p>
      <button class="btn btn-primary btn-lg" type="button">查看作品</button>
    </section>

    <!-- 画廊：四个装裱作品框，框内是有构图的线稿 -->
    <section aria-label="精选作品">
      <div class="gsechead">
        <h2 class="serif">精选作品</h2>
        <p>2019 — 2026 · 均为示意线稿</p>
      </div>
      <div class="gframes">
        <figure class="gframe wide">
          <svg viewBox="0 0 800 450" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-label="山水示意线稿">
            <circle cx="640" cy="110" r="34" />
            <path d="M40 300 L220 150 L330 260 L470 120 L640 300 L760 300" />
            <path d="M40 300 H760" />
            <path d="M90 340 q30 -10 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" stroke-width="1.5" />
            <path d="M120 372 q25 -8 50 0 t50 0 t50 0" stroke-width="1.5" />
            <path d="M300 400 q20 -6 40 0 t40 0" stroke-width="1.5" />
          </svg>
          <figcaption><b class="serif">雾起时 · 黄山</b><span>2023 春 · 1/60s f/8</span></figcaption>
        </figure>
        <figure class="gframe">
          <svg viewBox="0 0 800 450" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-label="人像示意线稿">
            <circle cx="400" cy="160" r="62" />
            <path d="M300 380 c0 -70 45 -110 100 -110 s100 40 100 110" />
            <path d="M250 410 H550" />
          </svg>
          <figcaption><b class="serif">侧影 · 朋友</b><span>2022 冬 · 自然光</span></figcaption>
        </figure>
        <figure class="gframe">
          <svg viewBox="0 0 800 450" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-label="街景示意线稿">
            <path d="M120 400 V120" />
            <circle cx="120" cy="110" r="26" />
            <path d="M60 400 H740" />
            <path d="M60 400 l60 -120" />
            <path d="M740 400 l-60 -120" />
            <rect x="560" y="180" width="140" height="220" />
            <path d="M590 220 h28 M642 220 h28 M590 270 h28 M642 270 h28 M590 320 h28 M642 320 h28" stroke-width="1.5" />
          </svg>
          <figcaption><b class="serif">夜路灯 · 汉口</b><span>2024 秋 · 35mm</span></figcaption>
        </figure>
        <figure class="gframe wide">
          <svg viewBox="0 0 800 450" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-label="建筑示意线稿">
            <rect x="180" y="90" width="160" height="320" />
            <rect x="420" y="150" width="200" height="260" />
            <path d="M210 130 h100 M210 180 h100 M210 230 h100 M210 280 h100 M210 330 h100" stroke-width="1.5" />
            <path d="M450 190 h140 M450 240 h140 M450 290 h140 M450 340 h140" stroke-width="1.5" />
            <path d="M120 410 H720" />
          </svg>
          <figcaption><b class="serif">方与线 · 美术馆</b><span>2025 夏 · 建筑空间</span></figcaption>
        </figure>
      </div>
    </section>

    <!-- 三个系列 -->
    <section aria-label="系列作品">
      <div class="gsechead">
        <h2 class="serif">系列</h2>
        <p>三个长期拍摄的主题</p>
      </div>
      <div class="gseries">
        <div class="gcard">
          <div class="gthumb">
            <svg viewBox="0 0 300 200" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 140 L90 70 L140 120 L200 60 L280 140" />
              <path d="M20 140 H280" />
              <path d="M40 165 q15 -6 30 0 t30 0 t30 0 t30 0 t30 0" stroke-width="1.4" />
            </svg>
          </div>
          <b class="serif">山河纪</b>
          <p>42 张 · 七年走了十一座山，等雾散的那一下。</p>
        </div>
        <div class="gcard">
          <div class="gthumb">
            <svg viewBox="0 0 300 200" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-hidden="true">
              <circle cx="150" cy="80" r="34" />
              <path d="M95 190 c0 -42 25 -66 55 -66 s55 24 55 66" />
            </svg>
          </div>
          <b class="serif">窗边的人</b>
          <p>28 张 · 自然光里的肖像，不打灯，不摆布。</p>
        </div>
        <div class="gcard">
          <div class="gthumb">
            <svg viewBox="0 0 300 200" fill="none" stroke="var(--color-secondary)" stroke-width="2" stroke-linejoin="round" aria-hidden="true">
              <path d="M60 180 V50" />
              <circle cx="60" cy="44" r="14" />
              <path d="M30 180 H270" />
              <path d="M210 90 h50 v90" />
              <path d="M225 115 h20 M225 140 h20" stroke-width="1.4" />
            </svg>
          </div>
          <b class="serif">夜走记</b>
          <p>36 张 · 凌晨的街道、路灯与还亮着的窗。</p>
        </div>
      </div>
    </section>

    <!-- 关于 + 日志 -->
    <section aria-label="关于与日志">
      <div class="gsechead">
        <h2 class="serif">关于与日志</h2>
      </div>
      <div class="gabout">
        <svg viewBox="0 0 220 220" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="暗房示意线稿">
          <path d="M30 190 V70 l80 -40 80 40 v120" />
          <circle cx="110" cy="120" r="34" />
          <path d="M110 86 V70" />
          <circle cx="110" cy="64" r="6" />
          <path d="M70 190 v-40 h80 v40" />
        </svg>
        <div>
          <h3 class="serif">林见山</h3>
          <p>独立摄影师，现居武汉。早年做新闻摄影，后来只接自己想拍的东西：山川、肖像、夜里的街。</p>
          <p>暗房在自家阳台一角，周末固定冲印。本站作品、人物与联系方式均为虚构示例。</p>
        </div>
      </div>
      <div class="glog">
        <div><time>2026-09-28</time><span>《山河纪》第二辑画册开始排版，预计十二月印出。</span></div>
        <div><time>2026-09-10</time><span>去了趟江边，拍了六卷黑白，等冲印出来再挑。</span></div>
        <div><time>2026-08-22</time><span>更新了约拍时段：十月起每周三、周日开放预约。</span></div>
      </div>
    </section>

    <!-- 约拍 CTA -->
    <section class="gbook" aria-label="预约拍摄">
      <h2 class="serif">约一次拍摄</h2>
      <p>服务类型均为虚构示例：个人肖像 / 家庭合影 / 空间与建筑拍摄。预约邮箱 hello@jianshan.example（虚构）。</p>
      <div class="gtypes">
        <span class="badge badge-soft badge-secondary">个人肖像 · 1 小时</span>
        <span class="badge badge-soft badge-secondary">家庭合影 · 半天</span>
        <span class="badge badge-soft badge-secondary">空间拍摄 · 按项目</span>
      </div>
      <button class="btn btn-primary btn-lg" type="button">预约拍摄</button>
    </section>

    <!-- 页脚 -->
    <footer class="gfoot">
      <p>© 2026 见山摄影（虚构摄影师与作品集，仅作 mo-photo 主题展示）</p>
      <p>本站人物、地名、邮箱与拍摄参数均为示例 · 灰墨 MoH_UI</p>
    </footer>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-photo/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-photo"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-photo"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-photo · 见山影集（浅色）—— 摄影师个人作品集 · 安静画廊主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-photo"> 即整站换肤。
   设计取向：米白暖纸三层打底，深暖墨色文字，胡桃木棕主色只留给主按钮与当前导航；
   与官方 black（纯黑影棚式）一浅一深，本套是浅色安静画廊、大留白、衬线标题。 */

[data-theme="mo-photo"] {
  color-scheme: light;

  /* 底与纸：米白象牙纸三层，层次极淡，像美术馆墙面 */
  --color-base-100: #f6f1e7;
  --color-base-200: #efe8d9;
  --color-base-300: #d8cdb6;
  --color-base-content: #2a251e;

  /* 主色：胡桃木棕（奶油字实测 8.48:1），只留给主按钮、当前导航、链接 */
  --color-primary: #5f4229;
  --color-primary-content: #faf6ee;

  /* 次色：石板蓝灰（奶油字 6.45:1），次级按钮与系列标签 */
  --color-secondary: #4f5b66;
  --color-secondary-content: #faf6ee;

  /* 强调色：古铜棕（奶油字 6.53:1 / 纸上 6.25:1），仅作点睛小面积 */
  --color-accent: #7c4f14;
  --color-accent-content: #faf6ee;

  /* 中性：浅米灰卡，深字 9.22:1 */
  --color-neutral: #e6ddc9;
  --color-neutral-content: #3a332a;

  /* 语义色：全部压到奶油字 ≥4.5:1，状态另配中文文字 */
  --color-info: #2f5d7c;
  --color-info-content: #faf6ee;
  --color-success: #3d6b35;
  --color-success-content: #faf6ee;
  --color-warning: #7a4f0e;
  --color-warning-content: #faf6ee;
  --color-error: #8c2f27;
  --color-error-content: #faf6ee;

  /* 圆角 / 尺寸 / 边框：画廊偏克制，细边框、无投影 */
  --radius-selector: 0.25rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-photo/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
