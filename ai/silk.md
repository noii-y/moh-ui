# 丝绸（silk） · 灰墨 MoH_UI

> 精品民宿预订整页。暖米白底配墨蓝文字，留白舒展、雅致轻奢；挂 daisyUI 官方主题 data-theme="silk" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/silk/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 底色是几乎没有色相的暖米白三层：官方 oklch 97%/95%/90%、色度仅 .003–.008，base-content 是同色相同约 40% 明度的暖灰墨；分区靠留白而非色块，明度差极弱。绝不要给它加彩色背景或深灰大块底色。
- 最大机制：primary / secondary / accent 在官方主题里是同一个色——低饱和墨蓝近黑（oklch 23.3%、色度 .025）；强调不靠彩色、靠字重与留白。主按钮墨底配浅豆绿字（primary-content 官方为 oklch 94.2% 浅豆绿），这是官方设定，不要擅自改成白字或棕字。
- 语义色全是浅盘深字机制：info/success/warning/error 均为 80–84% 高明度浅底 + 各自深色字，用于 badge-soft 胶囊；neutral 是纯黑，只用于头像底这类极小面积。
- 圆角大而平滑：--radius-selector 2rem 胶囊、--radius-box 1rem、--border 2px、--noise:0（无颗粒、无阴影，要的就是丝滑平整）；卡片统一 bg-base-200 rounded-box。
- 插图全部 currentColor 单色线稿：hero 山景线条画（太阳、远山、小屋、草地）与房源房形图标，stroke 2 圆角端点、无填色无渐变；不用照片、不用彩色插画、不用 emoji。
- 气质是留白与层级：hero 大标题 26px、描述文字降到 .65 透明度，房源评分用 badge-soft badge-primary 小胶囊，价格加粗写「¥680 / 晚」，账单明细两列对齐。
- 引入方式：本套是 daisyUI 官方内置主题、目录无 tokens.css——项目里引 vendor/daisyui.css + vendor/daisyui-themes.css 两行，给 <html> 挂 data-theme="silk" 即整站换肤，不需要第三个文件。
- 窄屏口径：≤900px hero 左右两栏塌成单列（线条画落到文案下方）、顶栏导航菜单折行、入住退房日期输入框自然堆叠，不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="silk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>预订 · 松间宿精品民宿（silk 主题案例）</title>
  <meta name="description" content="灰墨 silk 主题完整页面案例：精品民宿预订整页。暖米白底 + 墨蓝文字，留白舒展、雅致轻奢。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 36px; display: flex; flex-direction: column; gap: 16px; }
    .brand { font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
    .brand-mark { width: 26px; height: 26px; border-radius: 8px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .hero-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; align-items: center; }
    .room-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .room-art { height: 120px; border-radius: .625rem; background: var(--color-base-200); display: flex; align-items: center; justify-content: center; color: var(--color-primary); }
    .room-art svg { width: 88px; height: 88px; }
    .bill-row { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; font-size: 13px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr; }
      .navbar { flex-wrap: wrap; row-gap: 8px; padding: 10px 14px; }
      .navbar-start { width: 100%; }
      .navbar-end { width: 100%; justify-content: flex-end; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand"><span class="brand-mark">松</span>松间宿</div>
        <ul class="menu" style="display:flex;flex-direction:row;flex-wrap:wrap;padding:0;gap:4px">
          <li><a class="menu-active">房源</a></li>
          <li><a>评价 128</a></li>
          <li><a>周边</a></li>
          <li><a>联系</a></li>
        </ul>
      </div>
      <div class="navbar-end" style="gap:10px">
        <button class="btn btn-ghost btn-sm" type="button">电话咨询</button>
        <button class="btn btn-primary btn-sm" type="button">预订</button>
      </div>
    </div>

    <!-- Hero：目的地 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:22px;gap:14px">
        <div class="hero-grid">
          <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
            <span class="badge badge-soft badge-primary" style="align-self:flex-start">莫干山 · 浙江德清</span>
            <h1 style="font-size:26px;font-weight:700;margin:0;line-height:1.3">松间宿<br />竹林深处的两晚</h1>
            <p style="font-size:13px;opacity:.65;margin:0;line-height:1.8">三栋老房改建的山间民宿，推窗见竹，入夜观星。徒步、茶席、手作木工课随季节开放。</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
              <label class="input input-sm" style="display:flex;align-items:center;gap:6px">
                <span style="font-size:12px;opacity:.6;flex:none">入住</span>
                <input type="date" value="2026-10-23" style="background:none;border:0;outline:none;color:inherit;font-size:13px;min-width:0" />
              </label>
              <label class="input input-sm" style="display:flex;align-items:center;gap:6px">
                <span style="font-size:12px;opacity:.6;flex:none">退房</span>
                <input type="date" value="2026-10-25" style="background:none;border:0;outline:none;color:inherit;font-size:13px;min-width:0" />
              </label>
              <button class="btn btn-primary btn-sm" type="button">查询空房</button>
            </div>
          </div>
          <svg viewBox="0 0 320 200" style="width:100%;height:auto" role="img" aria-label="莫干山风景线条画：远山、太阳与小屋（示例插图）">
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="252" cy="46" r="20" />
              <path d="M20 150 L110 60 L160 118 L210 74 L300 150" />
              <path d="M20 150 H300" />
              <rect x="120" y="118" width="52" height="32" />
              <path d="M112 120 L146 94 L180 120" />
              <rect x="138" y="132" width="12" height="18" />
              <path d="M36 170c10-6 20-6 30 0M70 178c8-5 16-5 24 0" />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <!-- 房源卡 -->
    <div>
      <div class="row" style="margin-bottom:12px">
        <h2 style="font-size:16px;font-weight:700;margin:0">在住房源 · 3 间可订</h2>
        <span class="badge badge-soft badge-sm">评分来自 128 条真实评价</span>
      </div>
      <div class="room-grid">
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:12px;gap:8px">
            <div class="room-art"><svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 62 48 36 74 62" /><path d="M30 60v18h36V60" /><rect x="42" y="66" width="12" height="12" /><circle cx="70" cy="30" r="8" /><path d="M20 84h56" /></svg></div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <span style="font-size:14px;font-weight:700">听雨 · 山景大床</span>
              <span class="badge badge-soft badge-primary">4.9</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0">1.8 米大床 · 大窗山景 · 可住 2 人</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
              <span style="font-size:15px;font-weight:700">¥680<span style="font-size:12px;font-weight:400;opacity:.6"> / 晚</span></span>
              <button class="btn btn-soft btn-sm" type="button">预订</button>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:12px;gap:8px">
            <div class="room-art"><svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="24" y="40" width="48" height="38" /><path d="M20 42 48 22 76 42" /><path d="M36 78V60h12v18M60 78V64h8v14" /><path d="M16 84h64" /></svg></div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <span style="font-size:14px;font-weight:700">望月 · 庭院双床</span>
              <span class="badge badge-soft badge-primary">4.8</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0">双 1.2 米床 · 私享小院 · 可住 2 人</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
              <span style="font-size:15px;font-weight:700">¥720<span style="font-size:12px;font-weight:400;opacity:.6"> / 晚</span></span>
              <button class="btn btn-soft btn-sm" type="button">预订</button>
            </div>
          </div>
        </div>
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:12px;gap:8px">
            <div class="room-art"><svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M26 66 48 40 70 66" /><path d="M32 66v14h32V66" /><circle cx="64" cy="28" r="6" /><path d="M44 66v8" /><path d="M18 84h60" /></svg></div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <span style="font-size:14px;font-weight:700">抚云 · 阁楼套房</span>
              <span class="badge badge-soft badge-primary">5.0</span>
            </div>
            <p style="font-size:12px;opacity:.6;margin:0">阁楼斜顶 · 浴缸看星 · 可住 3 人</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
              <span style="font-size:15px;font-weight:700">¥980<span style="font-size:12px;font-weight:400;opacity:.6"> / 晚</span></span>
              <button class="btn btn-soft btn-sm" type="button">预订</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 日期与价格明细 -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:16px;display:flex;flex-direction:column;gap:12px">
        <h2 style="font-size:15px;font-weight:700;margin:0">入住信息与价格明细</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
            <label class="input input-sm" style="display:flex;align-items:center;gap:6px">
              <span style="font-size:12px;opacity:.6;flex:none">入住</span>
              <input type="date" value="2026-10-23" style="background:none;border:0;outline:none;color:inherit;font-size:13px;min-width:0" />
            </label>
            <label class="input input-sm" style="display:flex;align-items:center;gap:6px">
              <span style="font-size:12px;opacity:.6;flex:none">退房</span>
              <input type="date" value="2026-10-25" style="background:none;border:0;outline:none;color:inherit;font-size:13px;min-width:0" />
            </label>
            <div style="font-size:13px;opacity:.7">共 2 晚 · 2 位住客</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div class="bill-row"><span style="opacity:.65">房费 ¥680 × 2 晚</span><span>¥1,360.00</span></div>
            <div class="bill-row"><span style="opacity:.65">清洁费</span><span>¥80.00</span></div>
            <div class="bill-row"><span style="opacity:.65">服务费与税费</span><span>¥68.00</span></div>
            <div class="divider" style="margin:2px 0"></div>
            <div class="bill-row"><span style="font-weight:700">合计</span><span style="font-weight:700;font-size:16px">¥1,508.00</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部预订 CTA -->
    <div class="card bg-base-200 rounded-box">
      <div class="card-body" style="padding:14px 16px">
        <div class="row">
          <div>
            <div style="font-size:13px;font-weight:700">听雨 · 山景大床房 · 10 月 23 日 – 25 日</div>
            <div style="font-size:12px;opacity:.6;margin-top:2px">入住当天 14:00 后办理，次日 12:00 前退房</div>
          </div>
          <button class="btn btn-primary btn-lg" type="button">立即预订 ¥1,508</button>
        </div>
      </div>
    </div>

    <p class="foot">以上民宿、房态与价格均为示例数据，仅用于展示 silk 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="silk"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/silk/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
