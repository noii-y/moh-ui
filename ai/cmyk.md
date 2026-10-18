# 叠色（cmyk） · 灰墨 MoH_UI

> 虚构印刷工作室「叠彩印刷 DIE-CAI PRINT STUDIO」整页。纯白底配青品黄黑四色克制点缀与内联印刷线稿，干净、精准、有纸面感；挂 daisyUI 官方主题 data-theme="cmyk" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/cmyk/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 纯白底 base-100（oklch 100%），卡片用 base-200 浅灰，正文近黑 base-content（白/近黑实测对比 18.1:1）；印刷四色只作克制点缀——青蓝=primary、品红=secondary、黄=accent、黑=base-content，只用在品牌三色叠印小标、工艺步圆点与 SVG 局部填充，绝不大面积铺四色，禁止写死任何十六进制色。
- cmyk 默认 btn-primary 蓝底配 primary-content 深蓝字实测 8.06:1，直接用默认按钮即可；蓝底上压白字实测仅 2.46:1，禁止白字压蓝或品红实心底；品红 secondary 配其 content 实测 5.52:1 可用。
- 黄 accent 明度极高（oklch 94.2%）只做圆点与线稿点缀，黄底若压字一律用 accent-content（实测 15.84:1），不要在浅黄底上压近黑以外的任意字。
- 纸感排版：标题 19–32px 加粗、正文 12–13px、行距 1.8–2；版块之间用 currentColor 约 18% 发丝线分隔，卡片 base-200 圆角 1rem，不堆投影、不放大色块、不做渐变。
- 装饰与成品图只用 currentColor 线稿加主题四色填充：印张带四角裁切标记与中央套准十字、工艺四步各配一枚线性图标（菲林/晒版/胶印辊/裁切叠纸）、案例是画册/包装盒/海报剪影且轮廓必须可分辨；不用彩色照片、不用 emoji。
- 文案写真实动作与具体参数（菲林 175 线、色差 ΔE≤3、500 张起、¥35/盒），价格写「¥X / 单位」，门店地址电话标注虚构，不写「专业品质值得信赖」这类空话。
- 390px 窄屏顶栏自然折行、工艺卡与案例卡单列、报价金额换行不溢出，不横向滚动。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="cmyk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>每一次套色，都经得起放大 · 叠彩印刷 DIE-CAI PRINT STUDIO（cmyk 主题案例）</title>
  <meta name="description" content="灰墨 cmyk 主题完整页面案例：虚构印刷工作室整页。纯白底配青品黄黑四色克制点缀与内联印刷线稿，干净、精准、有纸面感。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 22px; }
    .brand { font-size: 17px; font-weight: 700; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
    .brand small { font-size: 10px; font-weight: 400; letter-spacing: 2px; opacity: .55; }
    .brand svg { width: 22px; height: 22px; }
    .menu-row { display: flex; flex-direction: row; flex-wrap: wrap; padding: 0; gap: 2px; margin: 0; }
    .sect-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
    .sect-head h2 { font-size: 19px; margin: 0; letter-spacing: 1px; }
    .sect-head span { font-size: 12px; opacity: .5; }
    /* Hero（自定义类名，避开 daisyUI 的 .hero 组件） */
    .hero-zone { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 36px 16px 30px; }
    .hero-zone h1 { font-size: 32px; font-weight: 800; margin: 0; line-height: 1.25; letter-spacing: 1px; }
    .hero-zone .lede { font-size: 13px; opacity: .65; max-width: 480px; margin: 0; line-height: 2; }
    .hero-art { width: 340px; max-width: 100%; height: auto; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
    /* 工艺四步 */
    .step-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
    .step-art { height: 88px; display: flex; align-items: center; justify-content: center; }
    .step-art svg { width: 64px; height: 64px; }
    .step-name { font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 6px; }
    .step-name i { width: 8px; height: 8px; border-radius: 9999px; display: inline-block; }
    .step-desc { font-size: 12px; opacity: .6; margin: 0; line-height: 1.8; }
    /* 案例 */
    .case-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
    .case-art { height: 120px; display: flex; align-items: center; justify-content: center; }
    .case-art svg { width: 110px; height: 110px; }
    .case-name { font-size: 14px; font-weight: 700; }
    .case-desc { font-size: 12px; opacity: .6; margin: 0; line-height: 1.8; }
    /* 报价 */
    .price-list { display: flex; flex-direction: column; gap: 0; margin: 0; padding: 0; list-style: none; }
    .price-list li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 10px 2px; border-top: 1px solid color-mix(in oklab, currentColor 14%, transparent); font-size: 13px; flex-wrap: wrap; }
    .price-list .qty { font-size: 11px; opacity: .5; }
    .price-list .amount { font-weight: 800; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 18%, transparent); }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.8; margin: 0; }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero-zone { padding: 24px 8px 20px; }
      .hero-zone h1 { font-size: 25px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="4" fill="var(--color-primary)" />
            <circle cx="15" cy="9" r="4" fill="var(--color-secondary)" opacity=".85" />
            <circle cx="12" cy="15" r="4" fill="var(--color-accent)" />
          </svg>
          叠彩印刷 <small>DIE-CAI PRINT</small>
        </div>
        <ul class="menu-row menu" style="--menu-active-bg:color-mix(in oklab, var(--color-primary) 14%, transparent);--menu-active-fg:var(--color-base-content)">
          <li><a class="menu-active">印刷工艺</a></li>
          <li><a>设计案例</a></li>
          <li><a>打样报价</a></li>
          <li><a>联系门店</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-sm btn-primary" type="button">获取报价</button>
      </div>
    </div>

    <!-- Hero：印刷套准线稿 -->
    <div class="hero-zone">
      <span class="badge badge-soft badge-sm">四色套印 · 菲林级精度</span>
      <h1>每一次套色，都经得起放大</h1>
      <p class="lede">叠彩印刷在工业园区有两台八色胶印机。从菲林输出到裁切装订，每个环节都留了出血线与套准十字——你把文件发过来，三天内收到打样。</p>
      <svg class="hero-art" viewBox="0 0 360 210" role="img" aria-label="印刷线稿：一张带四角裁切标记的印张，中央是套准十字线，左下角青品黄三色叠印小色点（示例插图）">
        <!-- 印张 -->
        <rect x="60" y="34" width="240" height="142" fill="none" stroke="currentColor" stroke-width="1.6" />
        <!-- 四角裁切标记 -->
        <g stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
          <line x1="46" y1="34" x2="56" y2="34" /><line x1="60" y1="20" x2="60" y2="30" />
          <line x1="304" y1="34" x2="314" y2="34" /><line x1="300" y1="20" x2="300" y2="30" />
          <line x1="46" y1="176" x2="56" y2="176" /><line x1="60" y1="180" x2="60" y2="190" />
          <line x1="304" y1="176" x2="314" y2="176" /><line x1="300" y1="180" x2="300" y2="190" />
        </g>
        <!-- 套准十字 -->
        <g stroke="currentColor" stroke-width="1.4" fill="none">
          <circle cx="180" cy="105" r="26" />
          <circle cx="180" cy="105" r="12" />
          <line x1="180" y1="68" x2="180" y2="82" />
          <line x1="180" y1="128" x2="180" y2="142" />
          <line x1="143" y1="105" x2="157" y2="105" />
          <line x1="203" y1="105" x2="217" y2="105" />
        </g>
        <!-- 三色叠印小色点（克制：仅左下角一处） -->
        <circle cx="86" cy="156" r="9" fill="var(--color-primary)" opacity=".7" />
        <circle cx="98" cy="156" r="9" fill="var(--color-secondary)" opacity=".7" />
        <circle cx="92" cy="147" r="9" fill="var(--color-accent)" opacity=".8" />
      </svg>
      <div class="cta-row">
        <button class="btn btn-primary" type="button">获取报价</button>
        <button class="btn btn-ghost" type="button">看看设计案例</button>
      </div>
    </div>

    <!-- 印刷工艺：四步 -->
    <div>
      <div class="sect-head">
        <h2>印刷工艺</h2>
        <span>从菲林到成品 · 四天交付打样</span>
      </div>
      <div class="step-grid">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="step-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="菲林输出线稿（示例插图）">
                <rect x="18" y="30" width="60" height="36" fill="none" stroke="currentColor" stroke-width="2" />
                <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
                  <line x1="30" y1="38" x2="30" y2="58" /><line x1="42" y1="38" x2="42" y2="58" /><line x1="54" y1="38" x2="54" y2="58" /><line x1="66" y1="38" x2="66" y2="58" />
                </g>
                <line x1="18" y1="74" x2="78" y2="74" stroke="currentColor" stroke-width="1.6" />
              </svg>
            </div>
            <span class="step-name"><i style="background:var(--color-primary)"></i>菲林输出</span>
            <p class="step-desc">文件四色分色出菲林，网点精度 175 线，偏色先打样再上机。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="step-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="制版晒版线稿（示例插图）">
                <rect x="24" y="34" width="48" height="40" fill="none" stroke="currentColor" stroke-width="2" />
                <circle cx="48" cy="54" r="9" fill="none" stroke="var(--color-accent)" stroke-width="1.8" />
                <g stroke="var(--color-accent)" stroke-width="1.6" stroke-linecap="round">
                  <line x1="48" y1="38" x2="48" y2="42" /><line x1="48" y1="66" x2="48" y2="70" /><line x1="32" y1="54" x2="36" y2="54" /><line x1="60" y1="54" x2="64" y2="54" />
                </g>
              </svg>
            </div>
            <span class="step-name"><i style="background:var(--color-secondary)"></i>制版晒版</span>
            <p class="step-desc">PS 版烤版上胶，版面亲墨性均匀，长版印刷不花版。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="step-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="四色套印线稿（示例插图）">
                <circle cx="36" cy="44" r="16" fill="none" stroke="currentColor" stroke-width="2" />
                <circle cx="60" cy="60" r="16" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="20" y1="78" x2="76" y2="78" stroke="currentColor" stroke-width="1.6" />
                <circle cx="36" cy="44" r="5" fill="var(--color-primary)" opacity=".7" />
                <circle cx="60" cy="60" r="5" fill="var(--color-secondary)" opacity=".7" />
              </svg>
            </div>
            <span class="step-name"><i style="background:var(--color-accent)"></i>四色套印</span>
            <p class="step-desc">青品黄黑逐色套准，色差 ΔE 控制在 3 以内才放行。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="step-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="裁切装订单稿（示例插图）">
                <rect x="26" y="28" width="44" height="10" fill="none" stroke="currentColor" stroke-width="1.8" />
                <rect x="26" y="42" width="44" height="10" fill="none" stroke="currentColor" stroke-width="1.8" />
                <rect x="26" y="56" width="44" height="10" fill="none" stroke="currentColor" stroke-width="1.8" />
                <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
                  <line x1="16" y1="80" x2="30" y2="80" /><line x1="66" y1="80" x2="80" y2="80" />
                </g>
              </svg>
            </div>
            <span class="step-name"><i style="background:var(--color-base-content)"></i>裁切装订</span>
            <p class="step-desc">按出血线模切，骑马钉或胶装，成品逐张质检打包。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 设计案例：三个成品剪影 -->
    <div>
      <div class="sect-head">
        <h2>设计案例</h2>
        <span>近三个月交付 · 客户均已验收</span>
      </div>
      <div class="case-grid">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="case-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="画册剪影线稿（示例插图）">
                <path d="M20 26 h24 v44 h-24 z" fill="none" stroke="currentColor" stroke-width="2" />
                <path d="M76 26 h-24 v44 h24 z" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="44" y1="26" x2="52" y2="26" stroke="currentColor" stroke-width="2" />
                <line x1="48" y1="26" x2="48" y2="70" stroke="currentColor" stroke-width="1.6" />
                <g stroke="var(--color-primary)" stroke-width="1.4" stroke-linecap="round"><line x1="26" y1="36" x2="38" y2="36" /><line x1="26" y1="44" x2="38" y2="44" /></g>
              </svg>
            </div>
            <span class="case-name">企业画册</span>
            <p class="case-desc">16 开 64 页锁线胶装，封面 250g 铜版纸覆哑膜。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="case-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="包装盒剪影线稿（示例插图）">
                <path d="M28 40 L48 28 L68 40 L48 52 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                <path d="M28 40 v26 l20 12 v-26 z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                <path d="M68 40 v26 l-20 12 v-26 z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                <circle cx="48" cy="53" r="4" fill="var(--color-secondary)" opacity=".7" />
              </svg>
            </div>
            <span class="case-name">产品包装</span>
            <p class="case-desc">350g 白卡手提盒，四色印刷加局部 UV，打样两天确认。</p>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:14px;gap:8px">
            <div class="case-art">
              <svg viewBox="0 0 96 96" role="img" aria-label="海报剪影线稿（示例插图）">
                <rect x="30" y="18" width="36" height="60" fill="none" stroke="currentColor" stroke-width="2" />
                <line x1="36" y1="30" x2="60" y2="30" stroke="currentColor" stroke-width="1.6" />
                <path d="M36 44 q6 -6 12 0 t12 0" fill="none" stroke="var(--color-accent)" stroke-width="1.8" />
                <line x1="36" y1="62" x2="52" y2="62" stroke="currentColor" stroke-width="1.6" />
              </svg>
            </div>
            <span class="case-name">活动海报</span>
            <p class="case-desc">对开 157g 铜版纸，大批量 24 小时内交货。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 打样报价 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:20px;gap:12px">
        <div class="sect-head" style="margin-bottom:0">
          <h2>打样报价</h2>
          <span>以下为示例价格 · 实际以文件工艺核算为准</span>
        </div>
        <ul class="price-list">
          <li><span>名片印刷 <span class="qty">300g 铜版纸覆哑膜 · 500 张起</span></span><span class="amount">¥35 / 盒</span></li>
          <li><span>宣传画册 <span class="qty">16 开 · 50 本起印</span></span><span class="amount">¥8.5 / 本起</span></li>
          <li><span>产品包装 <span class="qty">350g 白卡 · 1000 个起订</span></span><span class="amount">¥1.2 / 个起</span></li>
          <li><span>活动海报 <span class="qty">对开 · 200 张起</span></span><span class="amount">¥45 / 张起</span></li>
        </ul>
        <div>
          <button class="btn btn-primary" type="button">提交打样需求</button>
        </div>
      </div>
    </div>

    <!-- 联系 CTA -->
    <div class="card rounded-box" style="padding:28px 18px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center">
      <h2 style="font-size:21px;margin:0;letter-spacing:1px">带着文件来，先打样再谈量</h2>
      <p style="font-size:13px;opacity:.6;max-width:440px;margin:0;line-height:1.9">工作日上午九点前发来印刷文件，当天出数码样，确认色差后再上八色机。</p>
      <div style="display:flex;flex-direction:column;gap:2px;margin-top:2px">
        <span style="font-size:13px;font-weight:700">叠彩印刷 · 打样间</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">工业园区双庆路 88 号 3 栋（虚构）<br />021-6600-0000（虚构）</span>
      </div>
      <button class="btn btn-primary" type="button">预约打样</button>
    </div>

    <div class="hairline"></div>
    <p class="foot">叠彩印刷 DIE-CAI PRINT STUDIO 为虚构品牌，工艺、价格、案例与门店地址均为示例数据，仅用于展示 cmyk 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="cmyk"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/cmyk/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
