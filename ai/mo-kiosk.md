# 暖茶点单（暖色）（mo-kiosk） · 灰墨 MoH_UI

> 虚构奶茶店堂食自助点单触控大屏「暖茶茶饮 WARM CHA」整页。暖奶油底 + 烤棕主色、超大触控按钮、左右三栏（分类 / 菜品网格 / 购物车），390px 下三栏退单列不溢出；挂 data-theme="mo-kiosk" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-kiosk/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 引入方式：项目已引 daisyUI 后再 <link> 本 tokens.css，并在 <html data-theme="mo-kiosk">；不要引 daisyui-themes.css，整页底色由本变量集接管。
- 这是店里固定横屏触控大屏（主场景 1280 宽、左右三栏：分类栏 / 菜品网格 / 购物车），不是手机移动端点单——不要按手机 App 堆叠思路做；但 390px 自检时三栏必须自然退单列：分类变横向条、菜品两列、购物车落到下面，不得横向溢出。
- 纸底三层已实测：--color-base-100 #FBF4E6（奶油底）、200 #F4E7CF（顶栏与购物车）、300 #E3D0AC（描边）；正文 #332517 纸面 13.5:1、说明文字 --color-neutral #6B5844（奶油底 6.18:1 / 购物车底 5.53:1），都不许用 opacity 压浅。
- 主色只有一个：烤面包棕 #8A4B1F（奶油字 #FFF6E8 实测 6.31:1），只用于「下单」大按钮与当前分类高亮；抹茶绿 #4C6B32（奶油字 5.71:1）全页只给「堂食」选中 pill 一个元素用；焦糖 #96500A（奶油字 5.68:1 / 纸面 5.56:1）只做价格数字与取餐号，禁止反过来拿焦糖当大面积底。
- 触控尺寸是硬指标：菜品按钮最小 178px 高、分类按钮最小 72px 高、加减数量按钮 40×40px、下单按钮 64px 高；按钮文字 17px 以上、字重 700+；圆角取 --radius-box 1rem 的大圆角。
- 菜品图标用 currentColor 单色成形线稿、杯型必须互相区分：直杯+吸管+珍珠（招牌奶茶）、杯+叶片（奶绿）、满杯珍珠（珍珠奶茶）、分层线（杨枝甘露）、杯旁橙片（鲜橙茶）、带碟茶杯+蒸汽（纯茶）、带把玻璃杯分层（拿铁）、开口盒+圆粒（鸡米花）；不要复用同一杯型。
- 信息少而清：不做注册登录、不做营销横幅；按钮一律写真实动作（加入订单 / 下单 / ＋ / −）；购物车每样显示名称、数量加减、行价与合计，合计价用焦糖色加大。
- 状态色小面积：info #33607a / success #41702f / warning #9a6410（4.66:1）/ error #a03426，奶油字 ≥4.5:1 且配中文文字；整页不出现 position:fixed、不出现横向滚动。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-kiosk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>暖茶茶饮 · 自助点单屏（mo-kiosk 主题案例）</title>
  <meta name="description" content="灰墨 mo-kiosk 主题完整页面案例：虚构奶茶店堂食自助点单触控大屏整页。暖色堂食、超大触控按钮、左右三栏（分类 / 菜品 / 购物车）；本页只依赖 daisyUI 与 mo-kiosk 主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-kiosk · 暖茶点单（暖色）—— 餐饮门店堂食自助点单触控大屏主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-kiosk"> 即整站换肤。
   设计取向：暖奶油底 + 烤棕主色 + 抹茶绿点缀，超大圆角、超大触控按钮；
   这是店里固定横屏触控大屏（左右三栏），不是手机移动端点单。 */

[data-theme="mo-kiosk"] {
  color-scheme: light;

  /* 底与纸：暖奶油三层，堂食光线下面暖、不刺眼 */
  --color-base-100: #fbf4e6;
  --color-base-200: #f4e7cf;
  --color-base-300: #e3d0ac;
  --color-base-content: #332517;

  /* 主色：烤面包棕（奶油字实测 6.31:1），只留给下单主按钮与当前分类 */
  --color-primary: #8a4b1f;
  --color-primary-content: #fff6e8;

  /* 次色：抹茶绿（奶油字 5.71:1），鲜果/纯茶类点缀与套餐标签 */
  --color-secondary: #4c6b32;
  --color-secondary-content: #fbf8ec;

  /* 强调色：焦糖棕（奶油字 5.68:1 / 纸面 5.56:1），价格数字与加料提示 */
  --color-accent: #96500a;
  --color-accent-content: #fff6e8;

  /* 中性：暖棕灰静音色（奶油底 6.18:1 / 购物车底 5.53:1），承接说明文字与中性按钮 */
  --color-neutral: #6b5844;
  --color-neutral-content: #fff6e8;

  /* 语义色：奶油字全部压到 ≥4.5:1，状态另配中文文字 */
  --color-info: #33607a;
  --color-info-content: #fff6e8;
  --color-success: #41702f;
  --color-success-content: #fff6e8;
  --color-warning: #9a6410;
  --color-warning-content: #fff6e8;
  --color-error: #a03426;
  --color-error-content: #fff6e8;

  /* 圆角 / 尺寸：触控大屏大圆角，按钮要大、要圆、要好找 */
  --radius-selector: 0.625rem;
  --radius-field: 0.75rem;
  --radius-box: 1rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
  </style>
  <style>
    /* 仅布局辅助：颜色一律取主题语义变量 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 16px; line-height: 1.6; }
    button { font: inherit; cursor: pointer; }
    a:focus-visible, button:focus-visible { outline: 3px solid var(--color-info); outline-offset: 2px; }

    .kwrap { max-width: 1280px; margin: 0 auto; padding: 16px 16px 40px; display: flex; flex-direction: column; gap: 16px; }

    /* 顶行：品牌 + 提示 + 取餐号 */
    .kbar { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; background: var(--color-base-200); border: 1px solid var(--color-base-300); border-radius: var(--radius-box); padding: 14px 20px; }
    .kbrand { display: flex; align-items: center; gap: 12px; }
    .kbrand svg { width: 34px; height: 34px; color: var(--color-primary); }
    .kbrand b { font-size: 20px; letter-spacing: 2px; }
    .kbrand span { font-size: 12px; letter-spacing: 2px; color: var(--color-neutral); }
    .ktip { font-size: 18px; font-weight: 700; letter-spacing: 2px; }
    .knum { font-size: 14px; color: var(--color-neutral); }
    .knum b { display: block; font-size: 26px; color: var(--color-accent); letter-spacing: 2px; }

    /* 三栏主体 */
    .kbody { display: grid; grid-template-columns: 190px 1fr 300px; gap: 16px; align-items: start; }

    /* 左：分类栏（大屏纵向大按钮） */
    .kcats { display: flex; flex-direction: column; gap: 12px; }
    .kcat { border: 1px solid var(--color-base-300); background: var(--color-base-200); border-radius: var(--radius-box); min-height: 72px; font-size: 19px; font-weight: 700; letter-spacing: 2px; color: var(--color-base-content); padding: 10px 12px; }
    .kcat.gone { background: var(--color-primary); border-color: var(--color-primary); color: var(--color-primary-content); }

    /* 中：菜品网格 */
    .kmenu { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    @media (max-width: 1100px) { .kmenu { grid-template-columns: repeat(3, 1fr); } }
    .kdish { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 18px 10px 16px; background: var(--color-base-100); border: 1px solid var(--color-base-300); border-radius: var(--radius-box); min-height: 178px; }
    .kdish svg { width: 60px; height: 60px; color: var(--color-primary); }
    .kdish b { font-size: 17px; }
    .kdish .kprice { font-size: 18px; font-weight: 800; color: var(--color-accent); }

    /* 右：购物车栏 */
    .kcart { background: var(--color-base-200); border: 1px solid var(--color-base-300); border-radius: var(--radius-box); padding: 18px; display: flex; flex-direction: column; gap: 14px; position: static; }
    .kcart h2 { margin: 0; font-size: 20px; letter-spacing: 2px; }
    .krows { display: flex; flex-direction: column; }
    .krow { display: flex; align-items: center; gap: 10px; padding: 12px 0; border-bottom: 1px dashed var(--color-base-300); flex-wrap: wrap; }
    .krow .kname { flex: 1; min-width: 120px; font-size: 16px; }
    .kstep { display: flex; align-items: center; gap: 8px; }
    .kstep button { width: 40px; height: 40px; border-radius: var(--radius-selector); border: 1px solid var(--color-base-300); background: var(--color-base-100); font-size: 20px; font-weight: 700; color: var(--color-base-content); }
    .kstep .qn { min-width: 28px; text-align: center; font-size: 18px; font-weight: 800; }
    .krow .ksum { width: 64px; text-align: right; font-size: 16px; font-weight: 700; }
    .ksub { display: flex; justify-content: space-between; font-size: 18px; font-weight: 800; }
    .ksub em { font-style: normal; color: var(--color-accent); font-size: 22px; }
    .ktake { display: flex; gap: 10px; flex-wrap: wrap; }
    .ktake .pill { padding: 8px 18px; border-radius: var(--radius-selector); font-size: 16px; border: 1px solid var(--color-base-300); background: var(--color-base-100); }
    .ktake .pill.on { background: var(--color-secondary); border-color: var(--color-secondary); color: var(--color-secondary-content); font-weight: 700; }
    .korder { min-height: 64px; font-size: 22px; font-weight: 800; letter-spacing: 4px; }
    .knote { margin: 0; font-size: 13px; color: var(--color-neutral); text-align: center; }

    /* 窄屏：三栏退单列——分类横滑条、菜品两列、购物车在下 */
    @media (max-width: 860px) {
      .kbody { grid-template-columns: 1fr; }
      .kcats { flex-direction: row; overflow-x: auto; gap: 10px; padding-bottom: 4px;
        -webkit-mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%);
        mask-image: linear-gradient(to right, #000 0, #000 calc(100% - 20px), transparent 100%); }
      .kcat { flex: none; min-height: 56px; padding: 8px 18px; font-size: 16px; }
      .kmenu { grid-template-columns: repeat(2, 1fr); gap: 10px; }
      .kdish { min-height: 150px; padding: 14px 8px 12px; }
      .kdish svg { width: 48px; height: 48px; }
      .ktip { width: 100%; text-align: center; }
    }
  </style>
</head>
<body>
  <div class="kwrap">

    <!-- 顶行 -->
    <header class="kbar">
      <div class="kbrand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 9h10l-1 11a1.5 1.5 0 0 1-1.5 1.4h-5A1.5 1.5 0 0 1 8 20L7 9Z" />
          <path d="M9 9V6a3 3 0 0 1 6 0v3" />
          <path d="M12 4V2" />
        </svg>
        <div><b>暖茶茶饮</b><span>WARM CHA · 自助点单</span></div>
      </div>
      <p class="ktip">请选择菜品</p>
      <p class="knum">取餐号<b>A012</b></p>
    </header>

    <!-- 三栏主体 -->
    <div class="kbody">

      <!-- 左：分类栏，仅一个选中态 -->
      <nav class="kcats" aria-label="菜品分类">
        <button class="kcat gone" aria-current="true" type="button">招牌奶茶</button>
        <button class="kcat" type="button">鲜果茶</button>
        <button class="kcat" type="button">纯茶</button>
        <button class="kcat" type="button">咖啡</button>
        <button class="kcat" type="button">小食</button>
      </nav>

      <!-- 中：菜品网格 -->
      <main class="kmenu" aria-label="菜品列表">
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="招牌奶茶图标">
            <path d="M22 12h20l-2.5 40a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L22 12Z" />
            <path d="M20 22h24" /><path d="M32 12V4" />
            <circle cx="27" cy="44" r="2.4" /><circle cx="33" cy="48" r="2.4" /><circle cx="38" cy="43" r="2.4" />
          </svg>
          <b>招牌奶茶</b><span class="kprice">¥16</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="茉莉奶绿图标">
            <path d="M22 14h20l-2.5 38a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L22 14Z" />
            <path d="M20 24h24" />
            <path d="M44 14c6 0 8 6 8 6s-6 2-9 0" />
            <path d="M43 13c-2 3-3 6-3 9" />
          </svg>
          <b>茉莉奶绿</b><span class="kprice">¥15</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="珍珠奶茶图标">
            <path d="M22 12h20l-2.5 40a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L22 12Z" />
            <path d="M20 22h24" /><path d="M32 12V4" />
            <circle cx="26" cy="46" r="3" /><circle cx="32" cy="51" r="3" /><circle cx="38" cy="46" r="3" /><circle cx="29" cy="40" r="3" /><circle cx="36" cy="39" r="3" />
          </svg>
          <b>珍珠奶茶</b><span class="kprice">¥17</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="杨枝甘露图标">
            <path d="M22 14h20l-2.5 38a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L22 14Z" />
            <path d="M20 26h24" /><path d="M21.5 38h21" /><path d="M32 14V5" />
          </svg>
          <b>杨枝甘露</b><span class="kprice">¥19</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="满杯鲜橙茶图标">
            <path d="M22 16h20l-2.5 36a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L22 16Z" />
            <path d="M20 26h24" />
            <circle cx="44" cy="14" r="8" /><path d="M44 8v12M38 14h12" />
          </svg>
          <b>满杯鲜橙茶</b><span class="kprice">¥18</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="白牡丹纯茶图标">
            <path d="M18 26h28v10a10 10 0 0 1-10 10h-8a10 10 0 0 1-10-10V26Z" />
            <path d="M46 28h4a4 4 0 0 1 0 8h-4" />
            <path d="M26 16c0-3 3-3 3-6M34 16c0-3 3-3 3-6" />
            <path d="M22 52h20" />
          </svg>
          <b>白牡丹纯茶</b><span class="kprice">¥12</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="燕麦拿铁图标">
            <path d="M24 14h16l-1.8 38a2 2 0 0 1-2 2h-8.4a2 2 0 0 1-2-2L24 14Z" />
            <path d="M23 30h18" /><path d="M24.5 42h15" />
            <path d="M42 18h8a5 5 0 0 1 0 10h-8" />
          </svg>
          <b>燕麦拿铁</b><span class="kprice">¥18</span>
        </button>
        <button class="kdish" type="button">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-label="鸡米花图标">
            <path d="M18 26h28l-3 26a2 2 0 0 1-2 1.6H23a2 2 0 0 1-2-1.6l-3-26Z" />
            <path d="M16 26h32" />
            <circle cx="28" cy="20" r="4" /><circle cx="38" cy="17" r="4.5" />
            <circle cx="28" cy="36" r="2.6" /><circle cx="35" cy="42" r="2.6" /><circle cx="30" cy="48" r="2.4" />
          </svg>
          <b>鸡米花小份</b><span class="kprice">¥11</span>
        </button>
      </main>

      <!-- 右：购物车 -->
      <aside class="kcart" aria-label="已选清单">
        <h2>已选清单</h2>
        <div class="krows">
          <div class="krow">
            <span class="kname">招牌奶茶（大杯）</span>
            <span class="kstep"><button type="button" aria-label="减少招牌奶茶数量">−</button><span class="qn">2</span><button type="button" aria-label="增加招牌奶茶数量">＋</button></span>
            <span class="ksum">¥32</span>
          </div>
          <div class="krow">
            <span class="kname">杨枝甘露</span>
            <span class="kstep"><button type="button" aria-label="减少杨枝甘露数量">−</button><span class="qn">1</span><button type="button" aria-label="增加杨枝甘露数量">＋</button></span>
            <span class="ksum">¥19</span>
          </div>
        </div>
        <div class="ktake" role="group" aria-label="取餐方式">
          <span class="pill on">堂食</span>
          <span class="pill">外带</span>
        </div>
        <div class="ksub"><span>合计</span><em>¥51</em></div>
        <button class="btn btn-primary btn-lg korder" type="button">下单</button>
        <p class="knote">示例屏幕：按钮数量加减为静态展示，未接下单逻辑</p>
      </aside>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-kiosk/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-kiosk"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-kiosk"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-kiosk · 暖茶点单（暖色）—— 餐饮门店堂食自助点单触控大屏主题
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-kiosk"> 即整站换肤。
   设计取向：暖奶油底 + 烤棕主色 + 抹茶绿点缀，超大圆角、超大触控按钮；
   这是店里固定横屏触控大屏（左右三栏），不是手机移动端点单。 */

[data-theme="mo-kiosk"] {
  color-scheme: light;

  /* 底与纸：暖奶油三层，堂食光线下面暖、不刺眼 */
  --color-base-100: #fbf4e6;
  --color-base-200: #f4e7cf;
  --color-base-300: #e3d0ac;
  --color-base-content: #332517;

  /* 主色：烤面包棕（奶油字实测 6.31:1），只留给下单主按钮与当前分类 */
  --color-primary: #8a4b1f;
  --color-primary-content: #fff6e8;

  /* 次色：抹茶绿（奶油字 5.71:1），鲜果/纯茶类点缀与套餐标签 */
  --color-secondary: #4c6b32;
  --color-secondary-content: #fbf8ec;

  /* 强调色：焦糖棕（奶油字 5.68:1 / 纸面 5.56:1），价格数字与加料提示 */
  --color-accent: #96500a;
  --color-accent-content: #fff6e8;

  /* 中性：暖棕灰静音色（奶油底 6.18:1 / 购物车底 5.53:1），承接说明文字与中性按钮 */
  --color-neutral: #6b5844;
  --color-neutral-content: #fff6e8;

  /* 语义色：奶油字全部压到 ≥4.5:1，状态另配中文文字 */
  --color-info: #33607a;
  --color-info-content: #fff6e8;
  --color-success: #41702f;
  --color-success-content: #fff6e8;
  --color-warning: #9a6410;
  --color-warning-content: #fff6e8;
  --color-error: #a03426;
  --color-error-content: #fff6e8;

  /* 圆角 / 尺寸：触控大屏大圆角，按钮要大、要圆、要好找 */
  --radius-selector: 0.625rem;
  --radius-field: 0.75rem;
  --radius-box: 1rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-kiosk/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
