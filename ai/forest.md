# 林径（forest） · 灰墨 MoH_UI

> 虚构户外装备品牌「野径户外 WILDTRAIL」整页。暖黑底配米白文字与松绿主色，山野层叠线稿为招牌、大圆角圆润；挂 daisyUI 官方主题 data-theme="forest" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/forest/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 暖黑底（base-100 / base-200 是带暖调的近黑，不是纯黑），正文用米白 base-content；主色只用主题 green primary，只出现在主按钮与关键徽标上，绝不大面积铺绿。
- 米白只用于文字与一块浅色卡面（会员 CTA：底色 base-content、字色 base-100），其余卡片保持 base-200 深底；避免荧光绿，不用纯亮绿渐变。
- 圆角沿用官方 1rem 大圆角（radius-box），按钮、卡片、徽章保持圆润，不要改成直角。
- 山野线稿是招牌：Hero 用 currentColor 单色描边画层叠远山近山（近山实、远山淡）、松树与蜿蜒小径；线条 1.5–2px，不用照片、emoji、彩色插画。
- 三件装备卡的 SVG 必须画出差异：登山包（圆身 + 翻盖 + 背带）、徒步鞋（鞋底弧 + 鞋帮 + 鞋带）、帐篷（A 字支架 + 门帘 + 风绳），禁止三个一样的占位块。
- 主按钮绿底配近黑文字（primary-content 已是深色，直接 btn-primary 即可），次操作用 btn-ghost；同一屏只保留一个主按钮。
- 文案语气像户外老手写的（走山、露营、月度路线），按钮只写真实动作（逛装备、看路线、加入会员），不写「极致体验」这类空话。
- 390px 窄屏顶栏自然折行、装备卡与路线卡单列，不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="forest">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>把山野，走成日常 · 野径户外 WILDTRAIL（forest 主题案例）</title>
  <meta name="description" content="灰墨 forest 主题完整页面案例：虚构户外装备品牌整页。暖黑底配米白文字与松绿主色，山野层叠线稿为招牌、大圆角圆润。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含；颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 44px; display: flex; flex-direction: column; gap: 26px; }
    .brand { font-size: 16px; font-weight: 700; letter-spacing: 1px; display: flex; align-items: baseline; gap: 8px; white-space: nowrap; }
    .brand small { font-size: 10px; letter-spacing: 2.5px; opacity: .55; font-weight: 400; }
    .hero-split { display: grid; grid-template-columns: 1.05fr .95fr; gap: 26px; align-items: center; padding: 34px 4px 8px; }
    .hero-split svg { width: 100%; height: auto; display: block; }
    .hairline { border-top: 1px solid color-mix(in oklab, currentColor 22%, transparent); }
    .section-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
    .section-head h2 { font-size: 19px; margin: 0; letter-spacing: 1px; }
    .section-head span { font-size: 12px; opacity: .5; }
    .gear-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .gear-art { height: 150px; display: flex; align-items: center; justify-content: center; }
    .gear-art svg { width: 108px; height: 108px; }
    .promise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 18px; }
    .promise-item { display: flex; flex-direction: column; gap: 10px; }
    .promise-item svg { width: 30px; height: 30px; }
    .office-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; line-height: 1.8; }
    @media (max-width: 900px) {
      .hero-split { grid-template-columns: 1fr; padding: 20px 4px 4px; }
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
      .hero-split h1 { font-size: 26px; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand">野径户外 <small>WILDTRAIL</small></div>
        <ul class="menu" style="display:flex;flex-direction:row;flex-wrap:wrap;padding:0;gap:4px">
          <li><a class="menu-active">装备</a></li>
          <li><a>路线</a></li>
          <li><a>故事</a></li>
          <li><a>门店</a></li>
          <li><a>加入</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-primary btn-sm" type="button">逛装备</button>
      </div>
    </div>

    <!-- Hero：山野层叠线稿 -->
    <div class="hero-split">
      <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
        <span class="badge badge-soft badge-sm" style="align-self:flex-start">秋 · 新线已发</span>
        <h1 style="font-size:34px;font-weight:600;margin:0;line-height:1.25;letter-spacing:1px">把山野，<br />走成日常</h1>
        <p style="font-size:13px;opacity:.65;margin:0;line-height:2">野径户外为徒步与露营者做轻量、耐用、好修的装备。每一个款式，我们都先在自己常走的山线上背过五十次以上。</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          <button class="btn btn-primary btn-sm" type="button">逛装备</button>
          <button class="btn btn-ghost btn-sm" type="button">看路线</button>
        </div>
      </div>
      <svg viewBox="0 0 420 240" role="img" aria-label="山野线稿：层叠远山近山、松树、蜿蜒小径与山巅月亮（示例插图）">
        <!-- 月亮 -->
        <circle cx="356" cy="44" r="17" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55" />
        <!-- 远山（淡） -->
        <path d="M0 172 L90 92 L160 146 L240 72 L330 150 L420 102" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity=".35" />
        <!-- 近山（实） -->
        <path d="M0 212 L110 142 L212 196 L312 132 L420 202" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <!-- 蜿蜒小径 -->
        <path d="M214 240 C238 216 200 198 226 178 C246 162 232 148 248 134" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="1 6" />
        <!-- 近山上的三棵松树 -->
        <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M84 148 L92 124 L100 148" />
          <path d="M87 136 L92 120 L97 136" />
          <line x1="92" y1="148" x2="92" y2="154" />
          <path d="M306 136 L314 112 L322 136" />
          <path d="M309 124 L314 108 L319 124" />
          <line x1="314" y1="136" x2="314" y2="142" />
          <path d="M176 196 L183 176 L190 196" />
          <path d="M179 186 L183 172 L187 186" />
          <line x1="183" y1="196" x2="183" y2="201" />
        </g>
      </svg>
    </div>

    <div class="hairline"></div>

    <!-- 主打装备：三张卡 -->
    <div>
      <div class="section-head">
        <h2>主打装备</h2>
        <span>每款都经过自家山线实测</span>
      </div>
      <div class="gear-grid">
        <!-- 登山包 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="gear-art">
              <svg viewBox="0 0 120 120" role="img" aria-label="远岫登山包线稿：圆身、顶部翻盖、两侧附袋与提手（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- 提手 -->
                  <path d="M48 36 C48 22 72 22 72 36" />
                  <!-- 包身 -->
                  <rect x="32" y="36" width="56" height="68" rx="14" />
                  <!-- 翻盖分隔线 -->
                  <line x1="32" y1="62" x2="88" y2="62" />
                  <!-- 翻盖扣具 -->
                  <rect x="54" y="56" width="12" height="9" rx="2" />
                  <!-- 两侧附袋 -->
                  <rect x="23" y="76" width="10" height="22" rx="4" />
                  <rect x="87" y="76" width="10" height="22" rx="4" />
                  <!-- 主仓拉链 -->
                  <path d="M44 74 L44 98" stroke-dasharray="3 4" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span style="font-size:15px;font-weight:700">远岫 65L</span>
              <span style="font-size:10px;letter-spacing:2px;opacity:.45">BACKPACK</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">65L · 自重 1.9kg（虚构），背负可随肩高调节，三天两夜刚好装满。</p>
            <div style="display:flex;align-items:center;justify-content:flex-end;margin-top:2px">
              <button class="btn btn-ghost btn-sm" type="button">查看装备</button>
            </div>
          </div>
        </div>
        <!-- 徒步鞋 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="gear-art">
              <svg viewBox="0 0 120 120" role="img" aria-label="苔原徒步鞋线稿：高帮鞋帮、鞋带纹路与防滑大底（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- 鞋帮后段（脚踝） -->
                  <path d="M26 92 L26 56" />
                  <!-- 鞋口 -->
                  <path d="M26 56 C34 50 48 50 56 57" />
                  <!-- 鞋面前段 -->
                  <path d="M56 57 C70 65 88 74 102 84 L102 92" />
                  <!-- 大底 -->
                  <path d="M24 94 C46 99 84 99 104 92" />
                  <line x1="24" y1="94" x2="24" y2="102" />
                  <line x1="104" y1="92" x2="104" y2="99" />
                  <path d="M24 102 C46 107 84 107 104 99" />
                  <!-- 鞋带 -->
                  <line x1="38" y1="63" x2="48" y2="67" />
                  <line x1="44" y1="70" x2="54" y2="74" />
                  <line x1="50" y1="77" x2="60" y2="81" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span style="font-size:15px;font-weight:700">苔原防水徒步鞋</span>
              <span style="font-size:10px;letter-spacing:2px;opacity:.45">BOOT</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">全防水 · 防滑大底（虚构），高帮护住脚踝，碎石路与溪边都不打滑。</p>
            <div style="display:flex;align-items:center;justify-content:flex-end;margin-top:2px">
              <button class="btn btn-ghost btn-sm" type="button">查看装备</button>
            </div>
          </div>
        </div>
        <!-- 帐篷 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;gap:10px">
            <div class="gear-art">
              <svg viewBox="0 0 120 120" role="img" aria-label="松针双人帐篷线稿：A 字支架、中央门帘与两侧风绳地钉（示例插图）">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- A 字帐体 -->
                  <path d="M18 100 L60 28 L102 100 Z" />
                  <!-- 中央撑杆与门帘 -->
                  <line x1="60" y1="28" x2="60" y2="100" />
                  <path d="M60 48 L46 100" />
                  <!-- 风绳与地钉 -->
                  <line x1="18" y1="100" x2="7" y2="109" />
                  <line x1="102" y1="100" x2="113" y2="109" />
                  <line x1="4" y1="109" x2="10" y2="109" />
                  <line x1="110" y1="109" x2="116" y2="109" />
                  <!-- 地平线 -->
                  <line x1="4" y1="109" x2="116" y2="109" stroke-dasharray="2 5" opacity=".6" />
                </g>
              </svg>
            </div>
            <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
              <span style="font-size:15px;font-weight:700">松针双人帐</span>
              <span style="font-size:10px;letter-spacing:2px;opacity:.45">TENT</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">双人 · 整重 1.6kg（虚构），起风时三门通风，搭好不超过八分钟。</p>
            <div style="display:flex;align-items:center;justify-content:flex-end;margin-top:2px">
              <button class="btn btn-ghost btn-sm" type="button">查看装备</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 路线与环保：三个要点 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:22px;gap:18px">
        <div class="section-head" style="margin-bottom:0">
          <h2>路线与环保</h2>
          <span>开版前先做生态评估</span>
        </div>
        <div class="promise-grid">
          <div class="promise-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="M9 5 V19 M15 5 V19" opacity=".5" />
              <path d="M6.5 15 C9 11 11 14 13 10 S16 8 17.5 9" stroke-dasharray="2.5 2.5" />
            </svg>
            <h3 style="font-size:14px;margin:0">本月新线</h3>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">徽杭古道北段，18 公里、累计爬升 620 米（虚构），周末两天刚好走完。</p>
          </div>
          <div class="promise-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 4 C10 4 5 10 5 19 C14 19 20 13 20 4 Z" />
              <path d="M5 19 C9 15 13 11 17 8" />
            </svg>
            <h3 style="font-size:14px;margin:0">无痕山林</h3>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">每条路线开版前先做生态评估，沿途垃圾站密度随路线页公示，无痕捡 1 袋抵会员积分。</p>
          </div>
          <div class="promise-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 4 L15 8 M12 4 L9 8" />
              <path d="M12 5.5 C16 5.5 19 8.5 19 12.5" />
              <path d="M19 12.5 L16.5 11 M19 12.5 L17.5 14.5" />
              <path d="M19 12.5 C19 16.5 16 19.5 12 19.5" />
              <path d="M12 19.5 L14.5 17 M12 19.5 L9.5 17" />
              <path d="M12 19.5 C8 19.5 5 16.5 5 12.5" />
              <path d="M5 12.5 L7.5 14 M5 12.5 L6.5 10.5" />
              <path d="M5 12.5 C5 8.5 8 5.5 12 5.5" />
            </svg>
            <h3 style="font-size:14px;margin:0">旧装回收</h3>
            <p style="font-size:12px;opacity:.6;margin:0;line-height:1.8">旧装备寄回抵 10% 新款，翻新后捐给山野学校的户外课（虚构）。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 会员订阅：米白卡面（本页唯一浅色块） -->
    <div class="card rounded-box" style="background:var(--color-base-content);color:var(--color-base-100);padding:32px 18px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
      <h2 style="font-size:22px;margin:0;letter-spacing:1px">订阅山野月报</h2>
      <p style="font-size:13px;opacity:.7;max-width:460px;margin:0;line-height:1.9">每月一封：新路线、装备实测手记与山野养护笔记，不收广告、随时退订。</p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">
        <label class="input input-sm" style="display:flex;align-items:center;gap:6px;background:transparent;border:1px solid color-mix(in oklab, currentColor 35%, transparent)">
          <input type="email" placeholder="you@example.com" style="background:none;border:0;outline:none;color:inherit;font-size:13px;min-width:0;width:170px" />
        </label>
        <button class="btn btn-sm" type="button" style="--btn-color:var(--color-base-100);--btn-fg:var(--color-base-content)">订阅</button>
      </div>
    </div>

    <!-- 虚构门店 -->
    <div class="office-grid">
      <div style="display:flex;flex-direction:column;gap:6px;padding:2px">
        <span style="font-size:14px;font-weight:700;letter-spacing:1px">杭州 · 龙井路店</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">西湖区龙井路 88 号（虚构）</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;padding:2px">
        <span style="font-size:14px;font-weight:700;letter-spacing:1px">成都 · 青城山店</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">都江堰市青城山大道 12 号（虚构）</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;padding:2px">
        <span style="font-size:14px;font-weight:700;letter-spacing:1px">丽江 · 古城店</span>
        <span style="font-size:12px;opacity:.6;line-height:1.8">古城区五一街 36 号（虚构）</span>
      </div>
    </div>

    <div class="hairline"></div>
    <p class="foot">野径户外 WILDTRAIL 为虚构品牌，装备型号、参数、路线里程、门店地址均为示例数据，仅用于展示 forest 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="forest"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/forest/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
