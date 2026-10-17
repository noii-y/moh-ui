# 新中式（mo-zhongshi） · 灰墨 MoH_UI

> 茶叶文创电商首页。米宣纸底 + 朱砂主色 + 墨褐文字 + 衬线留白，顶栏 + 水墨 hero + 分类 + 商品网格 + 品牌故事留白区；挂 data-theme="mo-zhongshi" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-zhongshi/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 严格照整页源码的配色、字体、留白、圆角与组件结构来，不要自由发挥成另一种风格。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-zhongshi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>半山茶事 · 茶叶电商首页（mo-zhongshi 主题案例）</title>
  <meta name="description" content="灰墨 mo-zhongshi 新中式主题完整页面案例：米宣纸底 + 朱砂主色 + 衬线留白的茶叶文创电商首页。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-zhongshi · 新中式（浅色）—— 文创 / 茶叶电商首页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-zhongshi"> 即整站换肤。
   气质：米宣纸底、朱砂主色、墨褐文字、青瓷点缀、克制留白。
   灵感来源：中式宋明美学与茶饮品牌页面（仅风格参考，非品牌素材）。 */

[data-theme="mo-zhongshi"] {
  color-scheme: light;

  /* 底与纸：米宣纸三层，层次靠暖明度 */
  --color-base-100: #f6f3ec;
  --color-base-200: #fffdf8;
  --color-base-300: #efe9dd;
  --color-base-content: #3f3730;

  /* 主色：朱砂 */
  --color-primary: #c23b22;
  --color-primary-content: #ffffff;

  /* 次色：茶褐 / 赭石 */
  --color-secondary: #8a6d4a;
  --color-secondary-content: #ffffff;

  /* 强调色：青瓷低饱和绿 */
  --color-accent: #6b8e7f;
  --color-accent-content: #ffffff;

  --color-neutral: #3f3730;
  --color-neutral-content: #ffffff;

  /* 语义色 */
  --color-info: #3a6ea5;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 边框：中性小圆角、1px 细边 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.375rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
  </style>
  <style>
    html, body { margin: 0; }
    body {
      background: var(--color-base-100);
      color: var(--color-base-content);
      font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    .wrap { max-width: 1060px; margin: 0 auto; padding: 0 20px; }
    .song { font-family: "Songti SC", "STSong", "SimSun", serif; }
    .muted { color: #756a58; }

    /* 顶栏：细边框米底 */
    .nav { border-bottom: 1px solid #e0d8c6; background: var(--color-base-200); }
    .nav-in { display: flex; align-items: center; flex-wrap: wrap; gap: 10px 18px; padding-top: 14px; padding-bottom: 14px; }
    .brand { display: flex; align-items: center; gap: 10px; margin-right: 8px; }
    .seal { width: 30px; height: 30px; background: var(--color-primary); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; font-family: "Songti SC", "STSong", "SimSun", serif; border-radius: 4px; }
    .brand-name { font-size: 18px; font-weight: 700; letter-spacing: 2px; }
    .nav-links { display: flex; flex-wrap: wrap; gap: 4px 20px; font-size: 14px; }
    .nav-links a { color: inherit; text-decoration: none; }
    .nav-links a:hover { color: var(--color-primary); }
    .nav-right { margin-left: auto; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .search { display: flex; align-items: center; gap: 6px; border: 1px solid #e0d8c6; border-radius: .25rem; background: var(--color-base-100); padding: 0 12px; height: 36px; }
    .search input { border: 0; outline: 0; background: none; color: inherit; font-size: 13px; width: 150px; }
    .cart { position: relative; }
    .cart .badge { position: absolute; top: -8px; right: 0; }

    /* Hero：大留白 + 水墨线性插画 */
    .hero-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 40px; align-items: center; padding: 64px 20px 72px; max-width: 1060px; margin: 0 auto; }
    .hero-kicker { font-size: 13px; letter-spacing: 4px; color: var(--color-primary); }
    .hero-title { font-size: 46px; line-height: 1.3; font-weight: 700; letter-spacing: 2px; margin: 16px 0 0; }
    .hero-sub { font-size: 15px; line-height: 2; color: #756a58; margin: 20px 0 0; max-width: 420px; }
    .hero-cta { margin-top: 30px; display: flex; gap: 12px; flex-wrap: wrap; }
    .hero-art { background: var(--color-base-200); border: 1px solid #e0d8c6; border-radius: .375rem; padding: 20px; }

    /* 区块 */
    .section { padding: 44px 0; }
    .section-title { font-size: 26px; font-weight: 700; letter-spacing: 2px; margin: 0; }
    .section-desc { font-size: 13px; color: #756a58; margin: 8px 0 0; }

    /* 分类方块 */
    .cat-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 24px; }
    .cat { background: var(--color-base-200); border: 1px solid #e0d8c6; border-radius: .375rem; padding: 20px 10px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 14px; }
    .cat:hover { border-color: #c9bda3; }

    /* 商品网格 */
    .goods-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 18px; margin-top: 24px; }
    .goods { background: var(--color-base-200); border: 1px solid #e0d8c6; border-radius: .375rem; overflow: hidden; display: flex; flex-direction: column; }
    .goods-art { background: var(--color-base-300); height: 150px; display: flex; align-items: center; justify-content: center; }
    .goods-body { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
    .goods-name { font-size: 15px; font-weight: 700; margin: 0; }
    .goods-spec { font-size: 12px; color: #756a58; margin: 0; }
    .goods-price { color: var(--color-primary); font-size: 18px; font-weight: 800; margin-top: auto; }
    .goods-price span { font-size: 12px; font-weight: 500; color: #756a58; }
    .goods .btn { width: 100%; }

    /* 品牌故事留白区 */
    .story { padding: 80px 0; text-align: center; }
    .story-line { width: 56px; height: 1px; background: #c9bda3; margin: 0 auto 24px; }
    .story p { font-size: 18px; line-height: 2.4; letter-spacing: 1px; max-width: 560px; margin: 0 auto; }
    .story .seal { margin: 28px auto 0; }

    /* 页脚 */
    .foot { border-top: 1px solid #e0d8c6; background: var(--color-base-200); padding: 26px 0 30px; font-size: 13px; color: #756a58; }
    .foot-in { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px; }
    .foot-links { display: flex; flex-wrap: wrap; gap: 4px 20px; }
    .foot-links a { color: inherit; text-decoration: none; }

    @media (max-width: 860px) {
      .hero-grid { grid-template-columns: 1fr; padding: 44px 20px 52px; }
      .hero-title { font-size: 32px; }
      .cat-row { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 560px) {
      .hero-title { font-size: 26px; }
      .nav-right { margin-left: 0; width: 100%; }
      .search input { width: 100%; }
      .search { flex: 1; }
      .section { padding: 32px 0; }
      .story { padding: 52px 0; }
      .story p { font-size: 16px; }
    }
  </style>
</head>
<body>

  <!-- 顶栏 -->
  <nav class="nav">
    <div class="wrap nav-in">
      <div class="brand">
        <span class="seal">茶</span>
        <span class="brand-name song">半山茶事</span>
      </div>
      <div class="nav-links">
        <a href="#cat">春茶</a>
        <a href="#cat">茶器</a>
        <a href="#cat">文创</a>
        <a href="#goods">礼盒</a>
        <a href="#story">品牌故事</a>
      </div>
      <div class="nav-right">
        <label class="search">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.5" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
          <input type="search" placeholder="搜茶名 / 茶器" />
        </label>
        <button class="btn btn-soft btn-sm cart" type="button">
          购物车
          <span class="badge badge-sm badge-primary">2</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero：大留白 + 水墨线性插画 -->
  <header>
    <div class="wrap hero-grid">
      <div>
        <div class="hero-kicker">2026 明前新茶 · 头采</div>
        <h1 class="hero-title song">一盏春山，<br />慢饮半日闲。</h1>
        <p class="hero-sub">半山茶事只做当季茶：明前头采、手工炒制、小罐分装。每一批都写明采摘山头与日期，喝得明白。</p>
        <div class="hero-cta">
          <button class="btn btn-primary" type="button">选购新茶</button>
          <button class="btn btn-soft" type="button">了解炒制工艺</button>
        </div>
      </div>
      <div class="hero-art">
        <!-- 山水线性水墨插画（米白底、墨褐线条） -->
        <svg viewBox="0 0 360 240" style="width:100%;height:auto;display:block" role="img" aria-label="远山与茶舟的线性插画（示例）">
          <g stroke="#756a58" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 170 L90 90 L140 150 L190 70 L260 160 L310 120 L340 170" />
            <path d="M20 190 H340" />
            <path d="M60 210 q20 -10 40 0 t40 0 t40 0" />
            <circle cx="285" cy="55" r="18" />
            <path d="M150 210 h40 l-8 -14 h-24 Z" />
            <path d="M170 196 v-12" />
          </g>
        </svg>
      </div>
    </div>
  </header>

  <!-- 分类导航 -->
  <section class="section" id="cat" style="padding-top:0">
    <div class="wrap">
      <h2 class="section-title song">按品类选茶</h2>
      <p class="section-desc">当季在售的五个分类（示例分类）</p>
      <div class="cat-row">
        <div class="cat">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3f3730" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22c5-3 8-7 8-12V5H4v5c0 5 3 9 8 12Z" /><path d="M12 22V12" /></svg>
          绿茶
        </div>
        <div class="cat">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3f3730" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 3v18" /></svg>
          红茶
        </div>
        <div class="cat">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3f3730" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16" /><path d="M6 20c0-6 3-12 6-16 3 4 6 10 6 16" /></svg>
          乌龙茶
        </div>
        <div class="cat">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3f3730" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h8v4a4 4 0 0 1-8 0Z" /><path d="M6 14h12v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" /></svg>
          茶器
        </div>
        <div class="cat">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3f3730" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="1" /><path d="M12 8v12M4 13h16" /></svg>
          茶点
        </div>
      </div>
    </div>
  </section>

  <!-- 商品网格 -->
  <section class="section" id="goods" style="background:var(--color-base-300);border-top:1px solid #e0d8c6;border-bottom:1px solid #e0d8c6">
    <div class="wrap">
      <h2 class="section-title song">本周在售</h2>
      <p class="section-desc">价格与规格均为示例数据</p>
      <div class="goods-row">

        <div class="goods">
          <div class="goods-art">
            <svg viewBox="0 0 120 90" width="90" height="68" fill="none" stroke="#756a58" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M30 55 h50 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10Z" /><path d="M80 58 q14 -2 10 10" /><path d="M45 40 q3 -8 0 -14M60 40 q3 -8 0 -14" /></svg>
          </div>
          <div class="goods-body">
            <h3 class="goods-name">明前龙井 · 二两装</h3>
            <p class="goods-spec">杭州狮峰山 · 2026 头采</p>
            <div class="goods-price">¥168 <span>/ 100g</span></div>
            <button class="btn btn-primary btn-sm" type="button">加入购物车</button>
          </div>
        </div>

        <div class="goods">
          <div class="goods-art">
            <svg viewBox="0 0 120 90" width="90" height="68" fill="none" stroke="#756a58" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="38" y="30" width="44" height="42" rx="3" /><path d="M38 42 h44M50 24 v-6M70 24 v-6" /></svg>
          </div>
          <div class="goods-body">
            <h3 class="goods-name">正山小种 · 罐装</h3>
            <p class="goods-spec">武夷山桐木关 · 松烟香</p>
            <div class="goods-price">¥128 <span>/ 125g</span></div>
            <button class="btn btn-primary btn-sm" type="button">加入购物车</button>
          </div>
        </div>

        <div class="goods">
          <div class="goods-art">
            <svg viewBox="0 0 120 90" width="90" height="68" fill="none" stroke="#756a58" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="60" cy="55" r="22" /><path d="M60 33 v-8M52 37 q-6 4 -6 12" /></svg>
          </div>
          <div class="goods-body">
            <h3 class="goods-name">冻顶乌龙 · 礼盒装</h3>
            <p class="goods-spec">台湾鹿谷 · 中火焙</p>
            <div class="goods-price">¥236 <span>/ 200g</span></div>
            <button class="btn btn-primary btn-sm" type="button">加入购物车</button>
          </div>
        </div>

        <div class="goods">
          <div class="goods-art">
            <svg viewBox="0 0 120 90" width="90" height="68" fill="none" stroke="#756a58" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M40 60 a20 20 0 0 1 40 0 v6 h-40Z" /><path d="M36 66 h48" /><path d="M52 36 q8 -10 16 0" /></svg>
          </div>
          <div class="goods-body">
            <h3 class="goods-name">汝窑茶杯 · 单只</h3>
            <p class="goods-spec">天青釉 · 开片可养</p>
            <div class="goods-price">¥89 <span>/ 只</span></div>
            <button class="btn btn-primary btn-sm" type="button">加入购物车</button>
          </div>
        </div>

        <div class="goods">
          <div class="goods-art">
            <svg viewBox="0 0 120 90" width="90" height="68" fill="none" stroke="#756a58" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M30 65 q15 -25 30 -10 q15 -15 30 10" /><circle cx="60" cy="30" r="8" /></svg>
          </div>
          <div class="goods-body">
            <h3 class="goods-name">桂花乌龙 · 袋泡 12 包</h3>
            <p class="goods-spec">窨制三次 · 冷泡可饮</p>
            <div class="goods-price">¥46 <span>/ 盒</span></div>
            <button class="btn btn-primary btn-sm" type="button">加入购物车</button>
          </div>
        </div>

        <div class="goods">
          <div class="goods-art">
            <svg viewBox="0 0 120 90" width="90" height="68" fill="none" stroke="#756a58" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="34" y="28" width="52" height="44" rx="2" /><path d="M34 40 h52" /><path d="M48 28 v-8 h24 v8" /></svg>
          </div>
          <div class="goods-body">
            <h3 class="goods-name">春茶尝鲜礼盒 · 三款</h3>
            <p class="goods-spec">龙井 / 小种 / 乌龙各 50g</p>
            <div class="goods-price">¥299 <span>/ 盒</span></div>
            <button class="btn btn-primary btn-sm" type="button">加入购物车</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 品牌故事留白区 -->
  <section class="story" id="story">
    <div class="wrap">
      <div class="story-line"></div>
      <p class="song">半山的茶园在海拔六百米，<br />只采清明前的第一拨芽。<br />我们相信，茶不必贵，但要真。</p>
      <span class="seal">半山</span>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="foot">
    <div class="wrap foot-in">
      <div>
        <div style="font-weight:700;color:#3f3730">半山茶事（示例品牌）</div>
        <p style="margin:8px 0 0">浙江杭州 · 龙井村 12 号 · 客服 000-0000-0000（示例联系方式）</p>
      </div>
      <div class="foot-links">
        <a href="#cat">全部茶叶</a>
        <a href="#goods">礼盒专区</a>
        <a href="#story">品牌故事</a>
      </div>
    </div>
    <div class="wrap" style="padding-top:14px">
      <p style="font-size:12px;margin:0">本页商品、价格与联系方式均为示例数据，仅用于展示 mo-zhongshi 主题整页效果 · 灰墨 MoH_UI</p>
    </div>
  </footer>

</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-zhongshi/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-zhongshi"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-zhongshi"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-zhongshi · 新中式（浅色）—— 文创 / 茶叶电商首页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-zhongshi"> 即整站换肤。
   气质：米宣纸底、朱砂主色、墨褐文字、青瓷点缀、克制留白。
   灵感来源：中式宋明美学与茶饮品牌页面（仅风格参考，非品牌素材）。 */

[data-theme="mo-zhongshi"] {
  color-scheme: light;

  /* 底与纸：米宣纸三层，层次靠暖明度 */
  --color-base-100: #f6f3ec;
  --color-base-200: #fffdf8;
  --color-base-300: #efe9dd;
  --color-base-content: #3f3730;

  /* 主色：朱砂 */
  --color-primary: #c23b22;
  --color-primary-content: #ffffff;

  /* 次色：茶褐 / 赭石 */
  --color-secondary: #8a6d4a;
  --color-secondary-content: #ffffff;

  /* 强调色：青瓷低饱和绿 */
  --color-accent: #6b8e7f;
  --color-accent-content: #ffffff;

  --color-neutral: #3f3730;
  --color-neutral-content: #ffffff;

  /* 语义色 */
  --color-info: #3a6ea5;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 边框：中性小圆角、1px 细边 */
  --radius-selector: 0.375rem;
  --radius-field: 0.25rem;
  --radius-box: 0.375rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-zhongshi/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
