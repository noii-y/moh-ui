# 暮色松（Rosé Pine）（rose-pine） · 灰墨 MoH_UI

> 独立博客 / 长文杂志整页。暖紫暮色 + 鸢尾紫主色，站点头部、SVG 头图、长文排版（标题 / 引用 / 列表 / 行内代码）、右侧目录与相关文章卡；挂 data-theme="rose-pine" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Rosé Pine（MIT） · [上游色板](https://github.com/rose-pine/neovim/blob/main/lua/rose-pine/palette.lua)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/rose-pine/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 底三层是暖紫暮色：base-100 #191724 页面底、base-200 #1f1d2e 吸顶头与卡片、base-300 #26233a 行内代码块与发丝分隔线；正文用 base-content #e0def4 暖白、约 .92 不透明度，明度差刻意压低、不刺眼。绝不能出现纯白 #fff 正文或高饱和亮紫亮粉硬色块。
- 招牌主色是 iris 鸢尾紫 #c4a7e7（primary，配深字 #191724），只留给当前导航 menu-active、引用块左边 3px 竖线、主徽章；secondary 玫红 #eb6f92 与 accent 水青 #9ccfd8 只做小面积点缀，warning 金 #f6c177 在暮色里是月亮色。
- 主按钮与徽章走 daisyUI 语义机制：primary 浅紫底自动配深字（primary-content 已配好），卡片一律 bg-base-200 rounded-box，不叠投影、不用实心重色块压人。
- 长文杂志气质：正文行高 2、标题克制（文章小节 19px 粗 700），正文系统无衬线、行内代码用 base-300 底等宽小字；引用块只加左边线不加底色。
- 插图只用 Rosé Pine 固定色板画扁平暮色风景：#1f1d2e 夜空底、#f6c177 圆月、#c4a7e7 远山、#eb6f92 近山、#e0def4 星点、#9ccfd8 水色，色块半透明叠加；不用照片、不用 emoji、不用光晕渐变。
- 圆角杂志感：--radius-box .625rem、--radius-selector/field 各 .5rem 中等圆角；--border:1px、--depth:1、--noise:0，无阴影无颗粒。
- 窄屏口径：≤900px 右侧 210px 目录栏退到正文下方通栏、站点头部导航折行、卡片单列，不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="rose-pine">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>在暮色里读书的人 · 山月集（rose-pine 主题案例）</title>
  <meta name="description" content="灰墨 rose-pine 主题完整页面案例：独立博客 / 长文杂志整页。本页只依赖 daisyUI 与 rose-pine 主题，展示真实阅读类站点整页效果。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 rose-pine · 暮色松（Rosé Pine 移植）—— 暖紫暮色、文艺阅读气质
   色板出处：Rosé Pine（MIT，© 2023 Rosé Pine）https://github.com/rose-pine/neovim/blob/main/lua/rose-pine/palette.lua
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="rose-pine"> 即整站换肤。 */

[data-theme="rose-pine"] {
  color-scheme: dark;

  /* 底与纸：base / surface / overlay 三层，暖紫暮色 */
  --color-base-100: #191724;
  --color-base-200: #1f1d2e;
  --color-base-300: #26233a;
  --color-base-content: #e0def4;

  /* 主色：iris 鸢尾紫，只留给当前导航与主操作 */
  --color-primary: #c4a7e7;
  --color-primary-content: #191724;

  /* 次色：rose 玫红 / foam 青，杂志式点缀 */
  --color-secondary: #eb6f92;
  --color-secondary-content: #2a0a14;
  --color-accent: #9ccfd8;
  --color-accent-content: #12242a;

  --color-neutral: #403d52;
  --color-neutral-content: #e0def4;

  /* 语义色：pine / foam / gold / love，长文阅读柔和 */
  --color-info: #31748f;
  --color-info-content: #e0def4;
  --color-success: #9ccfd8;
  --color-success-content: #12242a;
  --color-warning: #f6c177;
  --color-warning-content: #3a2a05;
  --color-error: #eb6f92;
  --color-error-content: #2a0a14;

  /* 圆角 / 尺寸 / 边框：杂志书卷感，中等圆角 */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.625rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
  </style>
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .site-head { position: sticky; top: 0; background: var(--color-base-200); border-block-end: 1px solid var(--color-base-300); }
    .head-in { max-width: 1020px; margin: 0 auto; padding: 10px 20px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
    .brand { font-size: 16px; font-weight: 800; display: flex; align-items: center; gap: 8px; flex: none; }
    .brand-mark { width: 24px; height: 24px; border-radius: 8px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .head-nav { margin-left: auto; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .head-nav .menu { flex-direction: row; flex-wrap: wrap; width: auto; padding: 0; gap: 4px; }
    .head-nav .menu li a { white-space: nowrap; }
    .page { max-width: 1020px; margin: 0 auto; padding: 24px 20px 40px; display: flex; flex-direction: column; gap: 20px; }
    .article-grid { display: flex; gap: 28px; align-items: flex-start; }
    .article { flex: 1; min-width: 0; }
    .article h2 { font-size: 19px; font-weight: 700; margin: 26px 0 10px; }
    .article p { font-size: 14.5px; line-height: 2; opacity: .92; margin: 0 0 14px; }
    .article blockquote { margin: 16px 0; padding: 4px 0 4px 14px; border-inline-start: 3px solid var(--color-primary); opacity: .85; font-size: 14px; line-height: 1.9; }
    .article ol, .article ul { font-size: 14px; line-height: 2; opacity: .92; margin: 0 0 14px; padding-inline-start: 22px; }
    .mono { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); font-size: 13px; background: var(--color-base-300); padding: 1px 6px; border-radius: .375rem; }
    .toc { width: 210px; flex: none; position: sticky; top: 70px; }
    .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; }
    .tbl-wrap { overflow-x: auto; }
    .tbl-wrap .badge { white-space: nowrap; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    @media (max-width: 900px) {
      .head-nav { margin-left: 0; width: 100%; }
      .article-grid { flex-direction: column; }
      .toc { width: auto; position: static; }
      .page { padding: 16px 14px 28px; }
    }
  </style>
</head>
<body>

  <!-- 站点头部 -->
  <header class="site-head">
    <div class="head-in">
      <div class="brand"><span class="brand-mark">山</span>山月集</div>
      <nav class="head-nav">
        <ul class="menu" style="padding:0">
          <li><a>首页</a></li>
          <li><a class="menu-active">文章</a></li>
          <li><a>专栏</a></li>
          <li><a>关于</a></li>
        </ul>
        <button class="btn btn-ghost btn-sm" type="button" aria-label="搜索">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:15px;height:15px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
        </button>
        <div class="avatar avatar-placeholder">
          <div style="width:30px;height:30px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;background:var(--color-neutral);color:var(--color-neutral-content)">月</div>
        </div>
      </nav>
    </div>
  </header>

  <main class="page">

    <!-- 头图（内联 SVG 装饰插画） -->
    <div class="card bg-base-200 rounded-box" style="overflow:hidden">
      <div style="height:180px" role="img" aria-label="头图：暮色抽象插画（示例）">
        <svg viewBox="0 0 1020 180" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%" aria-hidden="true">
          <rect width="1020" height="180" fill="#1f1d2e" />
          <circle cx="820" cy="90" r="46" fill="#f6c177" fill-opacity=".9" />
          <circle cx="820" cy="90" r="66" fill="#f6c177" fill-opacity=".18" />
          <path d="M0 150 L180 96 L360 148 L520 84 L700 150 L880 104 L1020 152 L1020 180 L0 180 Z" fill="#c4a7e7" fill-opacity=".5" />
          <path d="M0 168 L240 128 L460 166 L660 120 L860 168 L1020 138 L1020 180 L0 180 Z" fill="#eb6f92" fill-opacity=".45" />
          <circle cx="140" cy="44" r="2.5" fill="#e0def4" fill-opacity=".7" />
          <circle cx="320" cy="30" r="2" fill="#e0def4" fill-opacity=".5" />
          <circle cx="520" cy="56" r="2" fill="#9ccfd8" fill-opacity=".8" />
          <circle cx="660" cy="26" r="2.5" fill="#e0def4" fill-opacity=".6" />
        </svg>
      </div>
    </div>

    <!-- 文章头 -->
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span class="badge badge-soft badge-primary">散文</span>
        <span style="font-size:12px;opacity:.6">原创</span>
      </div>
      <h1 style="font-size:26px;font-weight:800;margin:0">在暮色里读书的人</h1>
      <p style="font-size:13px;opacity:.6;margin:0">山月 · 2026 年 10 月 12 日 · 约 12 分钟读完 · 2,318 字</p>
    </div>

    <div class="divider" style="margin:0"></div>

    <!-- 正文 + 目录 -->
    <div class="article-grid">
      <article class="article">
        <h2 id="s1">暮色开始的时候</h2>
        <p>天色将暗未暗的那半小时，是一天里最适合读书的时刻。窗外的光从金色退成灰紫，屋里还没有开灯，书桌上的纸页反而显得更亮。这个时候读进去的字，会比白天多停一会儿——不是因为更聪明，而是因为分心的东西恰好都安静了下来。</p>
        <p>手机屏幕朝下扣在桌角，冰箱的嗡鸣隔着两道门，地铁最后一班的轰鸣还远没有开始。世界被调成了低音量，你才听得见自己心里那点翻书的沙沙声。很多人以为读书需要安静的环境，其实环境从来不会彻底安静，能安静下来的只有自己——暮色只是那个帮你按低音量的人。</p>

        <h2 id="s2">书的位置</h2>
        <p>我习惯把正在读的书放在床头左手边，再随手放一支铅笔。铅笔比签字笔好，写错了不洇墨，划掉的句子第二天再看，多半会觉得自己当时太急躁。书的位置比姿势重要：够得着、不用起身、不用垫枕头，这三个条件凑齐了，读书才会从「安排」变成「顺手」。</p>
        <blockquote>读书不需要仪式，但需要惯性。惯性来自一个顺手的位置，不来自一张像样的桌子。</blockquote>
        <p>很多人买了书桌就以为能读进去，其实书桌恰恰是最容易让人焦虑的地方——它太正式了，正式得像工位。我后来把书桌清掉，只留一盏灯和一摞翻开的书，进度反而比去年多了一倍。</p>

        <h2 id="s3">灯下的节奏</h2>
        <p>天黑透以后开一盏小灯，只照亮书页，不照亮整个房间。这个习惯是从一位老编辑那里学来的：他说晚上用大光读书，眼睛先累，心后面跟着累；小光读书，是把注意力收进一个小圆圈里。我试过一段时间 <span class="mono">21:00 之后不读硬核章节</span>，只留散文和游记，睡眠果然好了一点——大脑在睡前被软着陆，而不是被论文拽着跑。</p>
        <p>这样读了几年，慢慢攒下四个不费事的规矩：</p>
        <ol>
          <li>不读第三遍才读得懂的书，先放回去，等几年再来；</li>
          <li>每天只读四十分钟左右，读完就合，不追求进度；</li>
          <li>划出来的句子，周末统一抄到一个本子上，抄过才算读过；</li>
          <li>读到不喜欢的段落，允许自己跳过去，不必对书礼貌。</li>
        </ol>

        <h2 id="s4">合上之后</h2>
        <p>合上书的那一刻，故事并没有真的结束。它会在第二天通勤的地铁里突然冒出来一句，会在晚饭的汤热气里冒出来一句。所以有人说书是「延迟生效」的东西——现场读完只是签收，它真正的效果要过很多天才能拆开。</p>
        <ul>
          <li>不必记住所有句子，记住那一两颗就够；</li>
          <li>不必给每本书打分，有些书只负责陪一段路；</li>
          <li>不必读完每一本买回家的书，放弃也是读书的一部分。</li>
        </ul>
        <p>暮色又深了一层，窗外的灯次第亮起来。我把铅笔夹回那一页，心想明天这个时候，还从这里接着往下读。</p>
      </article>

      <!-- 目录 -->
      <aside class="toc card bg-base-200 rounded-box">
        <div class="card-body" style="padding:14px;gap:6px">
          <div style="font-size:12px;opacity:.6;font-weight:600">目录</div>
          <ul class="menu" style="width:100%;padding:0">
            <li><a href="#s1">暮色开始的时候</a></li>
            <li><a href="#s2">书的位置</a></li>
            <li><a href="#s3">灯下的节奏</a></li>
            <li><a href="#s4">合上之后</a></li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- 相关文章 -->
    <div>
      <h2 style="font-size:16px;font-weight:700;margin:0 0 12px">相关文章</h2>
      <div class="related-grid">
        <div class="card bg-base-200 rounded-box">
          <div style="height:84px;overflow:hidden" role="img" aria-label="相关文章封面（示例）">
            <svg viewBox="0 0 240 84" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%" aria-hidden="true">
              <rect width="240" height="84" fill="#1f1d2e" />
              <circle cx="60" cy="42" r="26" fill="#c4a7e7" fill-opacity=".7" />
              <circle cx="180" cy="42" r="16" fill="#9ccfd8" fill-opacity=".7" />
            </svg>
          </div>
          <div class="card-body" style="padding:12px 14px;gap:6px">
            <div style="font-size:14px;font-weight:600">把夜晚留给无用的事</div>
            <div style="font-size:12px;opacity:.6">杂谈 · 约 8 分钟</div>
            <span class="badge badge-soft badge-sm" style="width:fit-content">随笔</span>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div style="height:84px;overflow:hidden" role="img" aria-label="相关文章封面（示例）">
            <svg viewBox="0 0 240 84" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%" aria-hidden="true">
              <rect width="240" height="84" fill="#1f1d2e" />
              <path d="M0 60 Q60 30 120 58 T240 50 L240 84 L0 84 Z" fill="#9ccfd8" fill-opacity=".55" />
              <circle cx="190" cy="26" r="12" fill="#f6c177" fill-opacity=".85" />
            </svg>
          </div>
          <div class="card-body" style="padding:12px 14px;gap:6px">
            <div style="font-size:14px;font-weight:600">旧书店地图：城南篇</div>
            <div style="font-size:12px;opacity:.6">专栏 · 约 15 分钟</div>
            <span class="badge badge-soft badge-sm" style="width:fit-content">城市</span>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div style="height:84px;overflow:hidden" role="img" aria-label="相关文章封面（示例）">
            <svg viewBox="0 0 240 84" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%" aria-hidden="true">
              <rect width="240" height="84" fill="#1f1d2e" />
              <rect x="30" y="22" width="120" height="40" rx="6" fill="#eb6f92" fill-opacity=".5" />
              <rect x="50" y="32" width="80" height="6" rx="3" fill="#e0def4" fill-opacity=".6" />
              <rect x="50" y="46" width="60" height="6" rx="3" fill="#e0def4" fill-opacity=".4" />
            </svg>
          </div>
          <div class="card-body" style="padding:12px 14px;gap:6px">
            <div style="font-size:14px;font-weight:600">冬夜书单：七本不费脑的</div>
            <div style="font-size:12px;opacity:.6">书单 · 约 10 分钟</div>
            <span class="badge badge-soft badge-sm" style="width:fit-content">书单</span>
          </div>
        </div>
      </div>
    </div>

    <p class="foot">以上文章为虚构习作，仅用于展示 rose-pine 主题整页效果 · 灰墨 MoH_UI</p>
  </main>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/rose-pine/tokens.css">
```

② 在 `<html>` 挂 `data-theme="rose-pine"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="rose-pine"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 rose-pine · 暮色松（Rosé Pine 移植）—— 暖紫暮色、文艺阅读气质
   色板出处：Rosé Pine（MIT，© 2023 Rosé Pine）https://github.com/rose-pine/neovim/blob/main/lua/rose-pine/palette.lua
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="rose-pine"> 即整站换肤。 */

[data-theme="rose-pine"] {
  color-scheme: dark;

  /* 底与纸：base / surface / overlay 三层，暖紫暮色 */
  --color-base-100: #191724;
  --color-base-200: #1f1d2e;
  --color-base-300: #26233a;
  --color-base-content: #e0def4;

  /* 主色：iris 鸢尾紫，只留给当前导航与主操作 */
  --color-primary: #c4a7e7;
  --color-primary-content: #191724;

  /* 次色：rose 玫红 / foam 青，杂志式点缀 */
  --color-secondary: #eb6f92;
  --color-secondary-content: #2a0a14;
  --color-accent: #9ccfd8;
  --color-accent-content: #12242a;

  --color-neutral: #403d52;
  --color-neutral-content: #e0def4;

  /* 语义色：pine / foam / gold / love，长文阅读柔和 */
  --color-info: #31748f;
  --color-info-content: #e0def4;
  --color-success: #9ccfd8;
  --color-success-content: #12242a;
  --color-warning: #f6c177;
  --color-warning-content: #3a2a05;
  --color-error: #eb6f92;
  --color-error-content: #2a0a14;

  /* 圆角 / 尺寸 / 边框：杂志书卷感，中等圆角 */
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.625rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/rose-pine/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
