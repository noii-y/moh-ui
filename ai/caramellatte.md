# 焦糖拿铁（caramellatte） · 灰墨 MoH_UI

> 社区咖啡店点单整页。奶油拿铁底色配深棕墨黑与焦糖强调色，圆角圆润、手作烘焙温暖感；挂 daisyUI 官方主题 data-theme="caramellatte" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：daisyUI 内置主题（MIT，无需额外文件）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/caramellatte/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 底色三层是奶油拿铁：官方 oklch 98%/95%/90%、色相 70–75 微暖，页面最浅（base-100）、卡片稍深（base-200）、分隔更深一档（base-300）；正文是深棕墨（base-content 约 40% 明度棕），不是纯黑。绝不能出现冷调灰蓝底或高饱和亮橙。
- 最大机制：主色 primary 是纯墨黑 oklch(0% 0 0) 配纯白字——堂食/加购/下单等主按钮一律墨黑底白字；不要因为叫焦糖拿铁就把主按钮做成棕色。
- 焦糖棕 accent（官方约 46% 明度、色相 38 暖棕）是唯一暖强调色：商品线稿图标用 accent 色 currentColor、制作进度「出杯中」用 badge-accent；warning 金黄、error 砖红只在语义场景出现。
- 圆角与边框是手作烘焙感：--radius-selector 2rem 大胶囊、--radius-box 1rem、--border 2px，比常规主题更圆、边更粗；--noise:1 带一点官方细颗粒质感。卡片统一 bg-base-200 rounded-box。
- 商品图不用食物照片：用 base-200 圆角方块底 + accent 色 currentColor 线稿 SVG（咖啡杯、外带杯、可颂、蛋糕轮廓，统一线宽），一套图标同风格。
- 菜单卡紧凑排版：padding 12px、gap 8px，品名与价格加粗同行，每个商品一个 btn-primary 小按钮；文案写真实点单动作（加购、下单 ¥56.00、取餐码 A-23、预计取餐时间）。
- 引入方式：本套是 daisyUI 官方内置主题、目录无 tokens.css——项目里引 vendor/daisyui.css + vendor/daisyui-themes.css 两行，给 <html> 挂 data-theme="caramellatte" 即整站换肤，不需要第三个文件。
- 窄屏口径：≤900px「菜单 + 右侧 300px 购物车」两栏塌成单列，购物车落到菜单下方，加减数量按钮组自然折行，不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="caramellatte">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>点单 · 屋檐咖啡（caramellatte 主题案例）</title>
  <meta name="description" content="灰墨 caramellatte 主题完整页面案例：社区咖啡店点单整页。奶油拿铁底色 + 深棕墨黑 + 焦糖强调色，圆润亲切、手作烘焙温暖感。本页只依赖 daisyUI 官方主题。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui-themes.css" />
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 18px 16px 36px; display: flex; flex-direction: column; gap: 16px; }
    .brand { font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
    .brand-mark { width: 26px; height: 26px; border-radius: 8px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .shop-grid { display: grid; grid-template-columns: 1fr 300px; gap: 16px; align-items: start; }
    .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; }
    .food-art { height: 84px; border-radius: .625rem; background: var(--color-base-200); display: flex; align-items: center; justify-content: center; color: var(--color-accent); }
    .food-art svg { width: 40px; height: 40px; }
    .cart-line { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
    .pickup { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; background: var(--color-base-100); border: 1px solid var(--color-base-300); border-radius: .625rem; padding: 12px 14px; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    .mono { font-family: var(--font-mono, ui-monospace, Menlo, Consolas, monospace); }
    @media (max-width: 900px) {
      .shop-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- 顶栏：店名 + 取餐方式 -->
    <div class="navbar rounded-box bg-base-200" style="padding:0 16px">
      <div class="navbar-start">
        <div class="brand"><span class="brand-mark">檐</span>屋檐咖啡 · 梧桐路店</div>
      </div>
      <div class="navbar-end" style="gap:10px">
        <div class="join">
          <button class="join-item btn btn-primary btn-sm" type="button">堂食</button>
          <button class="join-item btn btn-soft btn-sm" type="button">外带</button>
        </div>
      </div>
    </div>

    <!-- 标题行 -->
    <div class="row">
      <div>
        <h1 style="font-size:20px;font-weight:700;margin:0">今日推荐</h1>
        <p style="font-size:13px;opacity:.6;margin:4px 0 0">豆子：今天刚烘的埃塞俄比亚 · 耶加雪菲（示例价格）</p>
      </div>
      <span class="badge badge-soft badge-primary">营业中 · 08:00 – 20:00</span>
    </div>

    <div class="shop-grid">
      <!-- 菜单卡片 -->
      <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
        <div class="menu-grid">
          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px;gap:8px">
              <div class="food-art"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 9h11v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" /><path stroke-linecap="round" d="M15 10h1.5a2 2 0 0 1 0 4H15M7 4.5c.6.6.6 1.4 0 2M10 4.5c.6.6.6 1.4 0 2" /></svg></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                <span style="font-size:14px;font-weight:700">拿铁</span>
                <span style="font-size:14px;font-weight:700">¥22</span>
              </div>
              <p style="font-size:12px;opacity:.6;margin:0">浓缩融合蒸奶，丝滑奶香。</p>
              <button class="btn btn-primary btn-sm" type="button">加购</button>
            </div>
          </div>
          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px;gap:8px">
              <div class="food-art"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M7 5h10l-1 14a2 2 0 0 1-2 1h-4a2 2 0 0 1-2-1L7 5Z" /><path stroke-linecap="round" d="M7.5 9.5h9M10 5V3.5M13 5V3.5" /></svg></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                <span style="font-size:14px;font-weight:700">美式</span>
                <span style="font-size:14px;font-weight:700">¥16</span>
              </div>
              <p style="font-size:12px;opacity:.6;margin:0">双重浓缩兑水，干净回甘。</p>
              <button class="btn btn-primary btn-sm" type="button">加购</button>
            </div>
          </div>
          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px;gap:8px">
              <div class="food-art"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 10h13v4a5 5 0 0 1-5 5h-3a5 5 0 0 1-5-5v-4Z" /><path stroke-linecap="round" d="M8 10c0-2 1.5-3 3.5-3M12 3.5c.6.5.6 1.2 0 1.9" /></svg></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                <span style="font-size:14px;font-weight:700">卡布奇诺</span>
                <span style="font-size:14px;font-weight:700">¥20</span>
              </div>
              <p style="font-size:12px;opacity:.6;margin:0">厚奶泡撒可可粉。</p>
              <button class="btn btn-primary btn-sm" type="button">加购</button>
            </div>
          </div>
          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px;gap:8px">
              <div class="food-art"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 9h11v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" /><path stroke-linecap="round" d="M15 10h1.5a2 2 0 0 1 0 4H15M6.5 4.5c.6.6.6 1.4 0 2" /><path stroke-linecap="round" d="M5.5 12h8" /></svg></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                <span style="font-size:14px;font-weight:700">燕麦拿铁</span>
                <span style="font-size:14px;font-weight:700">¥26</span>
              </div>
              <p style="font-size:12px;opacity:.6;margin:0">植物基燕麦奶，谷物香气。</p>
              <button class="btn btn-primary btn-sm" type="button">加购</button>
            </div>
          </div>
          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px;gap:8px">
              <div class="food-art"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 14.5c0-3.5 3.5-6.5 8.5-6.5 3.5 0 6.5 1.6 8 4-.8 2.6-3.5 4.5-6.8 4.5-3.2 0-6.5-1.2-9.7-2Z" /><path stroke-linecap="round" d="M7.5 12c1.5 1 3.5 1.6 5.8 1.6" /></svg></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                <span style="font-size:14px;font-weight:700">海盐可颂</span>
                <span style="font-size:14px;font-weight:700">¥12</span>
              </div>
              <p style="font-size:12px;opacity:.6;margin:0">黄油九折，外酥内软。</p>
              <button class="btn btn-primary btn-sm" type="button">加购</button>
            </div>
          </div>
          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px;gap:8px">
              <div class="food-art"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19h16" /><path stroke-linecap="round" stroke-linejoin="round" d="M5 19l3.2-9.6A2 2 0 0 1 10 8h4a2 2 0 0 1 1.9 1.4L19 19" /><path stroke-linecap="round" d="M9 12h6" /></svg></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                <span style="font-size:14px;font-weight:700">巴斯克蛋糕</span>
                <span style="font-size:14px;font-weight:700">¥28</span>
              </div>
              <p style="font-size:12px;opacity:.6;margin:0">焦香外皮，流心芝士。</p>
              <button class="btn btn-primary btn-sm" type="button">加购</button>
            </div>
          </div>
        </div>

        <!-- 制作进度 -->
        <div class="card bg-base-200 rounded-box">
          <div class="card-body" style="padding:16px;display:flex;flex-direction:column;gap:10px">
            <div style="display:flex;align-items:center;justify-content:space-between">
              <h2 style="font-size:15px;font-weight:700;margin:0">制作进度 · A-23</h2>
              <span class="badge badge-soft badge-accent">出杯中</span>
            </div>
            <progress class="progress progress-primary" style="height:10px" value="60" max="100"></progress>
            <div style="display:flex;justify-content:space-between;font-size:12px;opacity:.6">
              <span>已下单</span><span>制作中</span><span>可取餐</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 购物车 -->
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:16px;display:flex;flex-direction:column;gap:12px">
          <h2 style="font-size:15px;font-weight:700;margin:0">购物车 · 2 件</h2>

          <div class="cart-line">
            <div>
              <div style="font-size:13px;font-weight:600">拿铁</div>
              <div style="font-size:12px;opacity:.6">中杯 · 热 · 全脂奶</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <div class="join">
                <button class="join-item btn btn-soft btn-sm" type="button">−</button>
                <span class="join-item btn btn-sm" style="pointer-events:none">2</span>
                <button class="join-item btn btn-soft btn-sm" type="button">+</button>
              </div>
              <span style="font-size:13px;font-weight:600">¥44</span>
            </div>
          </div>

          <div class="cart-line">
            <div>
              <div style="font-size:13px;font-weight:600">海盐可颂</div>
              <div style="font-size:12px;opacity:.6">当日现烤</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <div class="join">
                <button class="join-item btn btn-soft btn-sm" type="button">−</button>
                <span class="join-item btn btn-sm" style="pointer-events:none">1</span>
                <button class="join-item btn btn-soft btn-sm" type="button">+</button>
              </div>
              <span style="font-size:13px;font-weight:600">¥12</span>
            </div>
          </div>

          <div class="divider" style="margin:2px 0"></div>

          <div style="display:flex;justify-content:space-between;font-size:13px">
            <span style="opacity:.65">小计</span><span style="font-weight:700;font-size:16px">¥56.00</span>
          </div>

          <div class="pickup">
            <div>
              <div style="font-size:12px;opacity:.6">取餐码</div>
              <span class="kbd mono" style="font-size:18px">A-23</span>
            </div>
            <div style="text-align:right">
              <div style="font-size:12px;opacity:.6">预计取餐</div>
              <div style="font-size:15px;font-weight:700">10:42</div>
            </div>
          </div>

          <button class="btn btn-primary btn-lg" type="button">下单 ¥56.00</button>
          <p style="font-size:12px;opacity:.6;margin:0;text-align:center">支持堂食自取与外带打包</p>
        </div>
      </div>
    </div>

    <p class="foot">以上商品、价格与取餐码均为示例数据，仅用于展示 caramellatte 主题整页效果 · 灰墨 MoH_UI</p>
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

② 在 `<html>` 挂 `data-theme="caramellatte"`，组件类名一行都不用改。本主题是 daisyUI 内置主题，变量已随 daisyui-themes.css 提供，无需额外文件。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

该主题变量在 daisyui-themes.css 内，无需复制。

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/caramellatte/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
