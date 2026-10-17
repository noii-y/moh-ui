# 粗野主义（mo-brutal） · 灰墨 MoH_UI

> 个性品牌落地页。3px 厚黑边、直角、零模糊硬阴影、海军蓝 + 撞色红，顶栏 + 超大 hero + 特性卡 + 三档价格 + 订阅 CTA；挂 data-theme="mo-brutal" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-brutal/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 严格照整页源码的配色、字体、留白、圆角与组件结构来，不要自由发挥成另一种风格。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-brutal">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>凿造工作室 · 个性品牌落地页（mo-brutal 主题案例）</title>
  <meta name="description" content="灰墨 mo-brutal 粗野主义主题完整页面案例：3px 厚黑边、直角、硬阴影的个性品牌落地页。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-brutal · 粗野主义（浅色）—— 个性品牌落地页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-brutal"> 即整站换肤。
   气质：3px 厚黑边、直角、硬阴影（6px 偏移零模糊）、海军蓝与撞色红。
   灵感来源：neo-brutalism 界面风格（仅风格参考，非品牌素材）。 */

[data-theme="mo-brutal"] {
  color-scheme: light;

  /* 底与纸：浅灰底 + 纯白卡 + 浅灰层，靠厚黑边分隔层次 */
  --color-base-100: #f7f7f7;
  --color-base-200: #ffffff;
  --color-base-300: #ececec;
  --color-base-content: #111111;

  /* 主色：海军蓝（实心按钮与主操作） */
  --color-primary: #1e3a8a;
  --color-primary-content: #ffffff;

  /* 次色：黑块（粗野主义的黑） */
  --color-secondary: #111111;
  --color-secondary-content: #ffffff;

  /* 强调色：撞色红（徽章 / 提示等点缀） */
  --color-accent: #dc2626;
  --color-accent-content: #ffffff;

  --color-neutral: #111111;
  --color-neutral-content: #ffffff;

  /* 语义色 */
  --color-info: #1e40af;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 边框：直角、3px 厚边，粗野主义取向 */
  --radius-selector: 0;
  --radius-field: 0;
  --radius-box: 0;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 3px;
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

    /* 粗野主义硬边与硬阴影：3px 厚黑边 + 3~6px 零模糊偏移 */
    .brut   { border: 3px solid #111; box-shadow: 6px 6px 0 #111; }
    .brut-sm{ border: 3px solid #111; box-shadow: 4px 4px 0 #111; }
    .brut-flat { border: 3px solid #111; }

    /* 顶栏 */
    .nav { border-bottom: 3px solid #111; background: var(--color-base-200); }
    .nav-in { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding: 14px 0; }
    .logo { font-size: 20px; font-weight: 900; letter-spacing: -1px; display: flex; align-items: center; gap: 10px; }
    .logo-mark { width: 30px; height: 30px; background: var(--color-primary); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; }
    .nav-links { display: flex; align-items: center; flex-wrap: wrap; gap: 4px 18px; font-size: 14px; font-weight: 700; }
    .nav-links a { color: inherit; text-decoration: none; }
    .nav-links a:hover { background: var(--color-base-300); }

    /* Hero */
    .banner { padding: 56px 0 64px; }
    .hero-badge { display: inline-block; background: var(--color-accent); color: #fff; font-size: 12px; font-weight: 800; padding: 6px 12px; letter-spacing: 1px; }
    .hero-title { font-size: 58px; line-height: 1.05; font-weight: 900; letter-spacing: -2px; margin: 18px 0 0; }
    .hero-title em { font-style: normal; background: #fff; padding: 0 8px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
    .hero-sub { font-size: 17px; font-weight: 600; margin: 22px 0 0; max-width: 560px; }
    .hero-cta { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
    .btn-white { background: #fff !important; color: #111 !important; }

    /* 区块通用 */
    .section { padding: 48px 0; }
    .section-head { margin-bottom: 28px; }
    .section-kicker { font-size: 12px; font-weight: 800; letter-spacing: 2px; color: var(--color-accent); }
    .section-title { font-size: 30px; font-weight: 900; letter-spacing: -1px; margin: 6px 0 0; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }

    /* 特性卡 */
    .feat { background: var(--color-base-200); padding: 24px; }
    .feat-icon { width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; border: 3px solid #111; background: var(--color-base-300); margin-bottom: 16px; }
    .feat h3 { font-size: 18px; font-weight: 900; margin: 0 0 8px; }
    .feat p { font-size: 14px; font-weight: 600; margin: 0; line-height: 1.6; }

    /* 价格卡 */
    .plan { background: var(--color-base-200); padding: 26px 22px; display: flex; flex-direction: column; gap: 14px; }
    .plan h3 { font-size: 16px; font-weight: 900; margin: 0; letter-spacing: 1px; }
    .plan .price { font-size: 40px; font-weight: 900; letter-spacing: -1px; }
    .plan .price span { font-size: 14px; font-weight: 700; opacity: .6; }
    .plan ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; font-weight: 600; flex: 1; }
    .plan li { display: flex; gap: 8px; align-items: flex-start; }
    .plan .btn { margin-top: auto; width: 100%; }
    .plan-rec { background: #111; color: #fff; }

    /* CTA 大块 */
    .cta-band { background: var(--color-base-200); padding: 40px 28px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 22px; }
    .cta-band h2 { font-size: 26px; font-weight: 900; letter-spacing: -1px; margin: 0 0 6px; }
    .cta-band p { font-size: 14px; font-weight: 600; margin: 0; }
    .cta-form { display: flex; flex-wrap: wrap; gap: 10px; }
    .cta-form input { min-width: 230px; }

    /* 页脚 */
    .foot { background: #111; color: #fff; margin-top: 24px; }
    .foot-in { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 22px 0; font-size: 13px; font-weight: 600; }
    .foot-links { display: flex; flex-wrap: wrap; gap: 4px 18px; }
    .foot-links a { color: #fff; text-decoration: none; }
    .foot-note { font-size: 12px; opacity: .55; padding: 0 0 18px; }

    @media (max-width: 860px) {
      .grid-3 { grid-template-columns: 1fr; }
      .hero-title { font-size: 40px; letter-spacing: -1px; }
    }
    @media (max-width: 560px) {
      .banner { padding: 36px 0 44px; }
      .hero-title { font-size: 30px; }
      .hero-sub { font-size: 15px; }
      .section { padding: 36px 0; }
      .section-title { font-size: 24px; }
      .cta-form input { min-width: 0; width: 100%; }
      .cta-form .btn { width: 100%; }
    }
  </style>
</head>
<body>

  <!-- 顶栏：粗黑边框条 -->
  <nav class="nav">
    <div class="wrap nav-in">
      <div class="logo"><span class="logo-mark">凿</span>凿造工作室</div>
      <div class="nav-links">
        <a href="#features">服务能力</a>
        <a href="#pricing">报价</a>
        <a href="#cta">客户案例</a>
        <a href="#cta">联系我们</a>
      </div>
      <button class="btn btn-primary brut-sm" type="button">开始咨询</button>
    </div>
  </nav>

  <!-- Hero：超大粗体标题 + 厚边白底块 + 硬阴影 -->
  <header class="banner">
    <div class="wrap">
      <span class="hero-badge brut-flat">2026 年度品牌升级计划 · 限额 12 家</span>
      <h1 class="hero-title">把你的产品，<br />做成一块<span class="brut-flat" style="background:#fff;padding:0 10px">记得住</span>的招牌。</h1>
      <p class="hero-sub">凿造工作室专做高辨识度的品牌与落地页：不堆渐变、不玩模糊阴影，用厚黑边、硬阴影和撞色，让访客三秒内记住你是谁。</p>
      <div class="hero-cta">
        <button class="btn btn-primary brut-sm" type="button">免费诊断我的品牌</button>
        <button class="btn btn-white brut-sm" type="button">看看往期案例</button>
      </div>
    </div>
  </header>

  <!-- 特性卡：3 张厚边硬阴影卡 -->
  <section class="section" id="features">
    <div class="wrap">
      <div class="section-head">
        <div class="section-kicker">服务能力</div>
        <h2 class="section-title">我们只做三件事</h2>
      </div>
      <div class="grid-3">
        <div class="feat brut">
          <div class="feat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16M6 20V9l6-5 6 5v11" /><path d="M10 20v-6h4v6" /></svg>
          </div>
          <h3>品牌视觉系统</h3>
          <p>字标、配色、边框语言一次定清，整套物料从官网到名片都像同一个团队做的。</p>
        </div>
        <div class="feat brut">
          <div class="feat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="14" /><path d="M3 8h18M8 21h8" /></svg>
          </div>
          <h3>落地页设计</h3>
          <p>按真实业务场景排区块：首屏三秒说清你是谁，CTA 按钮厚到没人会点错。</p>
        </div>
        <div class="feat brut">
          <div class="feat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
          </div>
          <h3>前端实现落地</h3>
          <p>交付零依赖 HTML/CSS 源码，复制进你自己的项目即可运行，不绑架任何框架。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 价格表：3 个套餐厚边卡，中间推荐卡黑底白字 -->
  <section class="section" id="pricing" style="background:var(--color-base-300);border-top:3px solid #111;border-bottom:3px solid #111">
    <div class="wrap">
      <div class="section-head">
        <div class="section-kicker">报价</div>
        <h2 class="section-title">明码标价，不含隐性费用</h2>
      </div>
      <div class="grid-3" style="align-items:stretch">
        <div class="plan brut-sm">
          <h3>启动包</h3>
          <div class="price">¥4,800 <span>/ 单次</span></div>
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>单页落地页视觉设计 1 套</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>桌面端 + 手机端两套稿</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>2 轮修改</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>交付可直接上线的静态页</li>
          </ul>
          <button class="btn btn-white brut-sm" type="button">选择此方案</button>
        </div>
        <div class="plan plan-rec brut">
          <h3>品牌包 <span class="badge brut-flat" style="background:var(--color-accent);color:#fff">推荐</span></h3>
          <div class="price">¥12,800 <span>/ 单次</span></div>
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>字标 + 配色 + 边框语言整套</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>落地页 + 关于页 2 个页面</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>4 轮修改 + 30 天源码答疑</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>附一份品牌使用规范文档</li>
          </ul>
          <button class="btn btn-primary brut-sm" type="button" style="background:var(--color-primary);color:#fff">选择此方案</button>
        </div>
        <div class="plan brut-sm">
          <h3>年度顾问</h3>
          <div class="price">¥36,000 <span>/ 年</span></div>
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>全年不限次数的视觉评审</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>每季度 1 个新页面设计</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>优先排期，48 小时内响应</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>团队内部设计规范培训 1 次</li>
          </ul>
          <button class="btn btn-white brut-sm" type="button">选择此方案</button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA 大块：行动号召 + 邮箱订阅 -->
  <section class="section" id="cta">
    <div class="wrap">
      <div class="cta-band brut">
        <div>
          <h2>订阅装修笔记，每月一封</h2>
          <p>不发广告。只讲我们怎么做厚黑边落地页，以及踩过的坑（示例数据）。</p>
        </div>
        <form class="cta-form">
          <label class="input brut-flat" style="display:flex;align-items:center;background:#fff;padding:0 14px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.5;margin-right:8px" aria-hidden="true"><rect x="3" y="5" width="18" height="14" /><path d="m3 7 9 6 9-6" /></svg>
            <input type="email" placeholder="输入你的工作邮箱" style="flex:1;min-width:0;border:0;outline:none;background:none;color:inherit;font-size:14px;padding:12px 0" />
          </label>
          <button class="btn btn-primary brut-sm" type="button">订阅</button>
        </form>
      </div>
    </div>
  </section>

  <!-- 极简页脚：黑底白字 -->
  <footer class="foot">
    <div class="wrap">
      <div class="foot-in">
        <div>© 2026 凿造工作室（示例品牌）</div>
        <div class="foot-links">
          <a href="#features">服务能力</a>
          <a href="#pricing">报价</a>
          <a href="#cta">联系我们</a>
        </div>
      </div>
      <p class="foot-note">本页价格与案例均为示例数据，仅用于展示 mo-brutal 主题整页效果 · 灰墨 MoH_UI</p>
    </div>
  </footer>

</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-brutal/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-brutal"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-brutal"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-brutal · 粗野主义（浅色）—— 个性品牌落地页主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-brutal"> 即整站换肤。
   气质：3px 厚黑边、直角、硬阴影（6px 偏移零模糊）、海军蓝与撞色红。
   灵感来源：neo-brutalism 界面风格（仅风格参考，非品牌素材）。 */

[data-theme="mo-brutal"] {
  color-scheme: light;

  /* 底与纸：浅灰底 + 纯白卡 + 浅灰层，靠厚黑边分隔层次 */
  --color-base-100: #f7f7f7;
  --color-base-200: #ffffff;
  --color-base-300: #ececec;
  --color-base-content: #111111;

  /* 主色：海军蓝（实心按钮与主操作） */
  --color-primary: #1e3a8a;
  --color-primary-content: #ffffff;

  /* 次色：黑块（粗野主义的黑） */
  --color-secondary: #111111;
  --color-secondary-content: #ffffff;

  /* 强调色：撞色红（徽章 / 提示等点缀） */
  --color-accent: #dc2626;
  --color-accent-content: #ffffff;

  --color-neutral: #111111;
  --color-neutral-content: #ffffff;

  /* 语义色 */
  --color-info: #1e40af;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 边框：直角、3px 厚边，粗野主义取向 */
  --radius-selector: 0;
  --radius-field: 0;
  --radius-box: 0;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 3px;
  --depth: 0;
  --noise: 0;
}
```

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-brutal/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
