# 奢金（luxury） · 灰墨 MoH_UI

> 虚构高端腕表品牌「时计堂 HELIOS」整页。近黑底配金色衬线标题与内联线稿腕表，留白克制、层级清晰；挂 daisyUI 官方主题 data-theme="luxury" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/luxury/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 近黑底（用 base-100 / base-200），金色只来自主题 base-content 等语义色，只用于品牌名、标题、发丝线、主按钮与价格；绝不大面积铺金，也禁止写死任何金色十六进制。
- 品牌名与各级标题用衬线（宋体系 / Georgia）并加 1–4px 字间距，正文用无衬线；标题克制、不做粗重堆料。
- 大量留白，版块之间用一条 currentColor 约 22% 透明度的发丝线分隔，不堆色块与投影。
- 主按钮金底必须配近黑文字（覆写 --btn-color: var(--color-base-content); --btn-fg: var(--color-base-100)），次要操作用幽灵按钮。
- 所有商品与装饰图只用 currentColor 单色线稿 SVG（表壳、刻度、指针、表冠齐备，同系列多款要画出差异），不用彩色照片、不用 emoji、不用渐变。
- 文案克制有质感，按钮只写真实动作（预约鉴赏、查看表款、查找门店），价格写「¥X 起」，不写「尊贵奢华体验」这类空话。
- 390px 窄屏顶栏自然折行、卡片单列、不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="luxury">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>时间，自成风格 · 时计堂 HELIOS（luxury 主题案例）</title>
  <meta name="description" content="灰墨 luxury 主题完整页面案例：虚构高端腕表品牌整页。近黑底配金色衬线标题与内联线稿腕表，留白克制、层级清晰。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .serif { font-family: "Songti SC", "SimSun", Georgia, serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 20px; }
    .brand { font-size: 17px; letter-spacing: 1px; display: flex; align-items: baseline; gap: 8px; white-space: nowrap; }
    .brand small { font-size: 11px; letter-spacing: 2px; opacity: .6; }
    .hero { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 40px 16px 34px; }
    .hero-watch { width: 216px; height: auto; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 22%, transparent); }
    .series-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 14px; }
    .dial { height: 150px; display: flex; align-items: center; justify-content: center; }
    .dial svg { width: 118px; height: 118px; }
    .craft-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 18px; }
    .craft-item { display: flex; flex-direction: column; gap: 8px; }
    .craft-item svg { width: 34px; height: 34px; }
    .store-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; }
    .price { font-size: 15px; font-weight: 700; letter-spacing: .5px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.8; }
    @media (max-width: 900px) {
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero { padding: 28px 8px 24px; }
      .hero h1 { font-size: 26px !important; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand serif">时计堂 <small>HELIOS</small></div>
        <ul class="menu" style="display:flex;flex-direction:row;flex-wrap:wrap;padding:0;gap:4px">
          <li><a>系列</a></li>
          <li><a>工艺</a></li>
          <li><a>门店</a></li>
          <li><a>预约</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-sm" type="button" style="--btn-color:var(--color-base-content);--btn-fg:var(--color-base-100)">预约鉴赏</button>
      </div>
    </div>

    <!-- Hero：腕表线稿与衬线主标 -->
    <div class="hero">
      <span class="badge badge-soft badge-sm" style="--badge-color:var(--color-base-content)">独立制表</span>
      <h1 class="serif" style="font-size:34px;font-weight:400;margin:0;letter-spacing:4px">时间，自成风格</h1>
      <p style="font-size:13px;opacity:.65;max-width:480px;margin:0;line-height:2">时计堂 HELIOS 以自研机芯与手工装配，为每一枚时计刻下独立编号。</p>
      <svg class="hero-watch" viewBox="0 0 200 340" role="img" aria-label="腕表线稿：表壳、刻度、时针分针秒针、表冠与上下表带（示例插图）">
        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- 上下表带 -->
          <rect x="79" y="18" width="42" height="96" rx="6" />
          <rect x="79" y="226" width="42" height="96" rx="6" />
          <line x1="100" y1="30" x2="100" y2="100" stroke-width="1" opacity=".5" />
          <!-- 表壳与表圈 -->
          <circle cx="100" cy="172" r="62" />
          <circle cx="100" cy="172" r="54" />
          <!-- 表冠 -->
          <rect x="163" y="167" width="9" height="10" rx="1.5" />
          <!-- 12 个时刻刻度 -->
          <line x1="100" y1="131" x2="100" y2="125" />
          <line x1="120" y1="137" x2="123" y2="131" />
          <line x1="135" y1="152" x2="141" y2="149" />
          <line x1="141" y1="172" x2="147" y2="172" />
          <line x1="135" y1="192" x2="141" y2="195" />
          <line x1="120" y1="207" x2="123" y2="213" />
          <line x1="100" y1="213" x2="100" y2="219" />
          <line x1="80" y1="207" x2="77" y2="213" />
          <line x1="65" y1="192" x2="59" y2="195" />
          <line x1="59" y1="172" x2="53" y2="172" />
          <line x1="65" y1="152" x2="59" y2="149" />
          <line x1="80" y1="137" x2="77" y2="131" />
          <!-- 指针：10 点 10 分 -->
          <line x1="100" y1="172" x2="82" y2="159" stroke-width="3" />
          <line x1="100" y1="172" x2="128" y2="156" stroke-width="2" />
          <line x1="100" y1="172" x2="100" y2="210" stroke-width="1" />
        </g>
        <!-- 表孔、轴帽与盘面文字 -->
        <g fill="currentColor" stroke="none">
          <circle cx="100" cy="44" r="1.5" />
          <circle cx="100" cy="60" r="1.5" />
          <circle cx="100" cy="76" r="1.5" />
          <circle cx="100" cy="172" r="2.2" />
        </g>
        <text x="100" y="149" text-anchor="middle" font-size="7" letter-spacing="2.5" fill="currentColor">HELIOS</text>
        <text x="100" y="198" text-anchor="middle" font-size="4.5" letter-spacing="1.5" fill="currentColor">AUTOMATIC</text>
      </svg>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
        <button class="btn" type="button" style="--btn-color:var(--color-base-content);--btn-fg:var(--color-base-100)">预约鉴赏</button>
        <button class="btn btn-ghost" type="button">探索系列</button>
      </div>
    </div>

    <!-- 主打系列：三张黑金产品卡 -->
    <div>
      <div class="row" style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px">
        <h2 class="serif" style="font-size:19px;margin:0;letter-spacing:2px">主打系列</h2>
        <span style="font-size:12px;opacity:.5">价格为公开指导区间，实际以门店为准</span>
      </div>
      <div class="series-grid">
        <!-- 恒轨：经典大三针 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="dial">
              <svg viewBox="0 0 120 120" role="img" aria-label="恒轨系列腕表表盘线稿（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                  <circle cx="60" cy="60" r="52" />
                  <circle cx="60" cy="60" r="45" />
                  <line x1="60" y1="27" x2="60" y2="23" />
                  <line x1="93" y1="60" x2="97" y2="60" />
                  <line x1="60" y1="93" x2="60" y2="97" />
                  <line x1="27" y1="60" x2="23" y2="60" />
                  <line x1="60" y1="60" x2="47" y2="51" stroke-width="2.5" />
                  <line x1="60" y1="60" x2="81" y2="48" stroke-width="1.5" />
                </g>
                <g fill="currentColor" stroke="none">
                  <circle cx="78" cy="30" r="1" />
                  <circle cx="90" cy="43" r="1" />
                  <circle cx="90" cy="77" r="1" />
                  <circle cx="78" cy="90" r="1" />
                  <circle cx="42" cy="90" r="1" />
                  <circle cx="30" cy="77" r="1" />
                  <circle cx="30" cy="43" r="1" />
                  <circle cx="42" cy="30" r="1" />
                  <circle cx="60" cy="60" r="1.6" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span class="serif" style="font-size:16px;font-weight:700;letter-spacing:1px">恒轨</span>
              <span style="font-size:10px;letter-spacing:2px;opacity:.45">CONSTANT</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">大三针自动上链，38 毫米表壳，克制的盘面布局，适合日常佩戴。</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:2px">
              <span class="price">¥ 86,000 起</span>
              <button class="btn btn-ghost btn-sm" type="button">查看表款</button>
            </div>
          </div>
        </div>
        <!-- 云枢：陀飞轮 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="dial">
              <svg viewBox="0 0 120 120" role="img" aria-label="云枢系列陀飞轮机芯表盘线稿（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                  <circle cx="60" cy="60" r="52" />
                  <circle cx="60" cy="60" r="45" />
                  <line x1="60" y1="27" x2="60" y2="23" />
                  <line x1="93" y1="60" x2="97" y2="60" />
                  <line x1="60" y1="93" x2="60" y2="97" />
                  <line x1="27" y1="60" x2="23" y2="60" />
                  <line x1="60" y1="60" x2="47" y2="51" stroke-width="2.5" />
                  <line x1="60" y1="60" x2="81" y2="48" stroke-width="1.5" />
                  <!-- 6 点位陀飞轮视窗 -->
                  <circle cx="60" cy="80" r="9" />
                  <line x1="53" y1="80" x2="67" y2="80" stroke-width="1" />
                  <line x1="60" y1="73" x2="60" y2="87" stroke-width="1" />
                </g>
                <g fill="currentColor" stroke="none">
                  <circle cx="78" cy="30" r="1" />
                  <circle cx="90" cy="43" r="1" />
                  <circle cx="30" cy="43" r="1" />
                  <circle cx="42" cy="30" r="1" />
                  <circle cx="60" cy="60" r="1.6" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span class="serif" style="font-size:16px;font-weight:700;letter-spacing:1px">云枢</span>
              <span style="font-size:10px;letter-spacing:2px;opacity:.45">TOURBILLON</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">6 点位陀飞轮视窗，手动上链机芯，限量 88 枚的馆藏之作。</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:2px">
              <span class="price">¥ 260,000 起</span>
              <button class="btn btn-ghost btn-sm" type="button">查看表款</button>
            </div>
          </div>
        </div>
        <!-- 溯光：月相 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="dial">
              <svg viewBox="0 0 120 120" role="img" aria-label="溯光系列月相表盘线稿（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                  <circle cx="60" cy="60" r="52" />
                  <circle cx="60" cy="60" r="45" />
                  <line x1="60" y1="27" x2="60" y2="23" />
                  <line x1="93" y1="60" x2="97" y2="60" />
                  <line x1="27" y1="60" x2="23" y2="60" />
                  <line x1="60" y1="60" x2="47" y2="51" stroke-width="2.5" />
                  <line x1="60" y1="60" x2="81" y2="48" stroke-width="1.5" />
                  <!-- 6 点位月相窗 -->
                  <rect x="44" y="68" width="32" height="16" rx="8" />
                </g>
                <g fill="currentColor" stroke="none">
                  <circle cx="78" cy="30" r="1" />
                  <circle cx="90" cy="43" r="1" />
                  <circle cx="90" cy="77" r="1" />
                  <circle cx="42" cy="90" r="1" />
                  <circle cx="30" cy="77" r="1" />
                  <circle cx="30" cy="43" r="1" />
                  <circle cx="42" cy="30" r="1" />
                  <circle cx="60" cy="60" r="1.6" />
                  <!-- 新月与星点 -->
                  <circle cx="56" cy="76" r="4.5" />
                  <circle cx="68" cy="73" r=".8" />
                  <circle cx="71" cy="78" r=".8" />
                </g>
                <circle cx="59.5" cy="74.5" r="4" fill="var(--color-base-200)" stroke="none" />
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span class="serif" style="font-size:16px;font-weight:700;letter-spacing:1px">溯光</span>
              <span style="font-size:10px;letter-spacing:2px;opacity:.45">MOONPHASE</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">月相盈亏窗显示月龄，精钢表壳配黑色表带，温润而安静。</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:2px">
              <span class="price">¥ 128,000 起</span>
              <button class="btn btn-ghost btn-sm" type="button">查看表款</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 工艺与传承：三个要点 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:22px;gap:18px">
        <h2 class="serif" style="font-size:19px;margin:0;letter-spacing:2px">工艺与传承</h2>
        <div class="craft-grid">
          <div class="craft-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3.2" />
              <line x1="12" y1="3.5" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="20.5" />
              <line x1="3.5" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="20.5" y2="12" />
              <line x1="5.9" y1="5.9" x2="7.7" y2="7.7" />
              <line x1="16.3" y1="16.3" x2="18.1" y2="18.1" />
              <line x1="18.1" y1="5.9" x2="16.3" y2="7.7" />
              <line x1="7.7" y1="16.3" x2="5.9" y2="18.1" />
            </svg>
            <h3 style="font-size:14px;margin:0">自研机芯</h3>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">从齿轮夹板到自动陀，机芯图纸与装配工艺均由工坊独立完成。</p>
          </div>
          <div class="craft-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
            <h3 style="font-size:14px;margin:0">手工装配</h3>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">每一枚机芯由一位制表师独立装配、调校与双周走时监测。</p>
          </div>
          <div class="craft-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <line x1="7" y1="11" x2="13" y2="11" />
              <line x1="7" y1="15" x2="16" y2="15" />
            </svg>
            <h3 style="font-size:14px;margin:0">限量编号</h3>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">表底镌刻独立编号与制表师签名，附工坊出具的终身保养档案。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 到店预约 CTA -->
    <div class="card rounded-box" style="padding:30px 18px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
      <h2 class="serif" style="font-size:22px;margin:0;letter-spacing:2px">预约到店鉴赏</h2>
      <p style="font-size:13px;opacity:.6;max-width:460px;margin:0;line-height:1.9">请提前与门店顾问约定时间，我们将为您预留私享鉴赏空间，表款与保养档案均可现场查阅。</p>
      <button class="btn" type="button" style="--btn-color:var(--color-base-content);--btn-fg:var(--color-base-100)">预约鉴赏</button>
    </div>

    <!-- 虚构门店 -->
    <div class="store-grid">
      <div style="display:flex;flex-direction:column;gap:6px;padding:4px 2px">
        <span class="serif" style="font-size:15px;letter-spacing:1px">上海 · 外滩源旗舰店</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">黄浦区滇池路 88 号 1 层（虚构）<br />021-6300-0000（虚构）</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;padding:4px 2px">
        <span class="serif" style="font-size:15px;letter-spacing:1px">北京 · 国贸精品店</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">朝阳区建国门外大街 1 号 L1-08（虚构）<br />010-6500-0000（虚构）</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;padding:4px 2px">
        <span class="serif" style="font-size:15px;letter-spacing:1px">成都 · 锦江精品店</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">锦江区中纱帽街 8 号 L2-16（虚构）<br />028-8600-0000（虚构）</span>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">时计堂 HELIOS 为虚构品牌，表款、价格、门店地址与电话均为示例数据，仅用于展示 luxury 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="luxury"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/luxury/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
