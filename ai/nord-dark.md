# 北极冷（Nord 暗色版）（nord-dark） · 灰墨 MoH_UI

> 邮件客户端三栏整页。极地冷灰蓝 + 冰蓝主色，左侧文件夹与标签、中部收件箱列表（未读加粗）、右侧邮件阅读窗；挂 data-theme="nord-dark" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：Nord（MIT） · [上游色板](https://www.nordtheme.com/docs/colors-and-palettes)

**在线整页案例：https://noii-y.github.io/moh-ui/themes/nord-dark/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 极地冷灰蓝三层：页面底 base-100 #3b4252、侧栏与卡片用 base-200 #434c5e、base-300 #2e3440 是最深一层，只用作分隔线与细边框；全程冷蓝灰调，不出现暖橙、亮红等暖色。
- 冰蓝 primary nord10 #5e81ac 只给「写邮件/回复」主按钮、brand-mark、menu-active 选中态，配浅蓝白字 primary-content #eceff4；当前选中邮件用左边框 3px 竖条指示（border-inline-start），不整行填色。
- 未读邮件用淡蓝底 rgba(94,129,172,.14) + 发件人与主题加粗（font-weight 700）来区分，不靠红点角标或粗徽章。
- Aurora 语义色全部低饱和、长时阅读不刺眼：success 鼠尾草绿 #a3be8c、warning 麦黄 #ebcb8b、error 柔和砖红 #bf616a（配浅字 #eceff4）；标签与分组用 secondary nord9 #81a1c1，中性元信息（头像、附件大小）用 nord3 #4c566a。
- 阅读窗正文 line-height 1.9、opacity 0.9、字号 14px；效率工具取向，不加装饰性色块与渐变。
- 中性小角圆角：radius-box .5rem、radius-field .375rem、radius-selector .375rem，细边框 1px、--depth:1 无投影；附件卡用反向嵌套——base-100 底 + 1px base-300 边框，从 base-200 卡片里再凹一层。
- 窄屏（≤900px）三栏退化为纵向堆叠、收件箱列表通栏、搜索框与导航折行铺满，390px 不横向溢出。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="nord-dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>收件箱 · 云杉邮件（nord-dark 主题案例）</title>
  <meta name="description" content="灰墨 nord-dark 主题完整页面案例：邮件客户端三栏整页。本页只依赖 daisyUI 与 nord-dark 主题，展示真实效率工具整页效果。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 nord-dark · 北极冷（Nord 完整暗色移植）—— 极地冷灰蓝、克制专注
   色板出处：Nord（MIT，© 2016-present Sven Greb）https://www.nordtheme.com/docs/colors-and-palettes
   说明：daisyUI 官方自带 nord 为浅色简化版，本目录是完整 16 色 Polar Night /
   Snow Storm / Frost / Aurora 暗色 port，命名为 nord-dark 以区分。
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="nord-dark"> 即整站换肤。 */

[data-theme="nord-dark"] {
  color-scheme: dark;

  /* 底与纸：Polar Night 三层，冷灰克制 */
  --color-base-100: #3b4252;   /* nord1 */
  --color-base-200: #434c5e;   /* nord2 */
  --color-base-300: #2e3440;   /* nord0 */
  --color-base-content: #e5e9f0; /* nord5 */

  /* 主色：nord10 冰蓝，只留给写邮件等主操作 */
  --color-primary: #5e81ac;
  --color-primary-content: #eceff4; /* nord6 */

  /* 次色：nord9 / nord8，冷调次级高亮 */
  --color-secondary: #81a1c1;
  --color-secondary-content: #2e3440;
  --color-accent: #88c0d0;
  --color-accent-content: #2e3440;

  --color-neutral: #4c566a;    /* nord3 */
  --color-neutral-content: #e5e9f0;

  /* 语义色：Aurora 四色，长时阅读不刺眼 */
  --color-info: #88c0d0;
  --color-info-content: #2e3440;
  --color-success: #a3be8c;    /* nord14 */
  --color-success-content: #2e3440;
  --color-warning: #ebcb8b;   /* nord13 */
  --color-warning-content: #3b3209;
  --color-error: #bf616a;       /* nord11 */
  --color-error-content: #eceff4;

  /* 圆角 / 尺寸 / 边框：中性小角，效率工具取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
  --radius-box: 0.5rem;
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
    .shell { display: flex; min-height: 100vh; }
    .side { width: 220px; flex: none; border-inline-end: 1px solid var(--color-base-300); background: var(--color-base-200); padding: 18px 12px; display: flex; flex-direction: column; gap: 14px; }
    .brand { font-size: 15px; font-weight: 700; padding: 2px 12px 8px; display: flex; align-items: center; gap: 8px; }
    .brand-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--color-primary); color: var(--color-primary-content); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .side-label { font-size: 11px; opacity: .5; padding: 0 12px; letter-spacing: .5px; }
    .main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .mail-row { display: flex; flex: 1; min-height: 0; }
    .mail-list { width: 330px; flex: none; border-inline-end: 1px solid var(--color-base-300); overflow-y: auto; }
    .mail-item { padding: 12px 16px; border-bottom: 1px solid var(--color-base-300); display: flex; flex-direction: column; gap: 4px; }
    .mail-item.active { border-inline-start: 3px solid var(--color-primary); }
    .mail-item.unread { background: rgba(94,129,172,.14); }
    .mi-top { display: flex; justify-content: space-between; gap: 8px; font-size: 13px; }
    .mi-sub { font-size: 13px; }
    .mail-item.unread .mi-from, .mail-item.unread .mi-sub { font-weight: 700; }
    .mi-snip { font-size: 12px; opacity: .65; }
    .reading { flex: 1; min-width: 0; padding: 20px 24px 32px; display: flex; flex-direction: column; gap: 14px; }
    .mail-body p { font-size: 14px; line-height: 1.9; opacity: .9; margin: 0 0 12px; }
    .topbar-search { width: 230px; }
    .topbar { margin: 16px 16px 0; padding: 0 16px; }
    .tbl-wrap { overflow-x: auto; }
    .tbl-wrap .badge { white-space: nowrap; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    @media (max-width: 900px) {
      .shell { flex-direction: column; }
      .side { width: auto; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); flex-direction: row; align-items: center; flex-wrap: wrap; gap: 8px; }
      .brand { flex: none; padding: 0 12px 0 4px; }
      .side .menu { flex-direction: row; flex-wrap: wrap; width: auto; gap: 4px; }
      .side .menu li a { white-space: nowrap; }
      .side-label { display: none; }
      .mail-row { flex-direction: column; }
      .mail-list { width: auto; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); }
      .reading { padding: 16px 14px 24px; }
      .main { padding: 0 12px 16px; }
      .topbar { margin: 0; padding: 0 12px; }
      .navbar { flex-wrap: wrap; row-gap: 8px; }
      .navbar-start, .navbar-end { width: 100%; }
      .topbar-search { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="shell">

    <!-- 侧栏：文件夹与标签 -->
    <aside class="side">
      <div class="brand"><span class="brand-mark">邮</span>云杉邮件</div>
      <ul class="menu" style="width:100%;padding:0">
        <li><a class="menu-active">收件箱 <span class="badge badge-sm">12</span></a></li>
        <li><a>星标</a></li>
        <li><a>已发送</a></li>
        <li><a>草稿 <span class="badge badge-sm">3</span></a></li>
        <li><a>垃圾邮件</a></li>
        <li><a>已删除</a></li>
      </ul>
      <div class="side-label">自定义标签</div>
      <ul class="menu" style="width:100%;padding:0">
        <li><a>工作 <span class="badge badge-soft badge-secondary badge-sm">8</span></a></li>
        <li><a>家庭</a></li>
        <li><a>账单</a></li>
        <li><a>旅行</a></li>
      </ul>
    </aside>

    <!-- 主区 -->
    <div class="main">

      <!-- 顶栏 -->
      <div class="navbar topbar rounded-box bg-base-200">
        <div class="navbar-start">
          <label class="input input-sm topbar-search" style="display:flex;align-items:center;gap:8px">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;opacity:.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
            <input type="search" placeholder="搜索邮件、发件人或附件…" style="flex:1;min-width:0;background:none;border:0;outline:none;color:inherit;font-size:13px" />
          </label>
        </div>
        <div class="navbar-end">
          <button class="btn btn-primary btn-sm" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
            写邮件
          </button>
        </div>
      </div>

      <!-- 三栏 -->
      <div class="mail-row" style="margin-top:14px">

        <!-- 收件箱列表 -->
        <div class="mail-list">
          <div class="mail-item active unread">
            <div class="mi-top"><span class="mi-from">林岚（设计团队）</span><span style="opacity:.6">09:42</span></div>
            <div class="mi-sub">新版首页稿已经改好，请查收 <span class="badge badge-soft badge-info badge-sm">新</span></div>
            <div class="mi-snip">你好，首页第三稿我已经按上次评审的意见调整完了……</div>
          </div>
          <div class="mail-item unread">
            <div class="mi-top"><span class="mi-from">王屹（财务）</span><span style="opacity:.6">08:15</span></div>
            <div class="mi-sub">9 月报销单待审批 <span class="badge badge-soft badge-info badge-sm">新</span></div>
            <div class="mi-snip">本月共 6 张报销单需要你在周五前完成审批……</div>
          </div>
          <div class="mail-item">
            <div class="mi-top"><span class="mi-from">系统通知</span><span style="opacity:.6">昨天</span></div>
            <div class="mi-sub">你的存储空间已使用 62%</div>
            <div class="mi-snip">云邮助手：当前邮箱存储空间使用率为 62%……</div>
          </div>
          <div class="mail-item">
            <div class="mi-top"><span class="mi-from">陈默</span><span style="opacity:.6">昨天</span></div>
            <div class="mi-sub">周末骑行组队，还差两人</div>
            <div class="mi-snip">周六早上 7 点滨江集合，全程约 45 公里……</div>
          </div>
          <div class="mail-item">
            <div class="mi-top"><span class="mi-from">李慧（客服）</span><span style="opacity:.6">周一</span></div>
            <div class="mi-sub">用户工单 #4821 等待回复</div>
            <div class="mi-snip">工单：登录验证码收不到，已超过 48 小时……</div>
          </div>
          <div class="mail-item">
            <div class="mi-top"><span class="mi-from">赵启（项目组）</span><span style="opacity:.6">周一</span></div>
            <div class="mi-sub">版本计划同步会改到周三</div>
            <div class="mi-snip">原周二下午的评审改到周三上午 10 点，会议室不变……</div>
          </div>
        </div>

        <!-- 阅读窗 -->
        <div class="reading">
          <h2 style="font-size:18px;font-weight:700;margin:0">新版首页稿已经改好，请查收</h2>

          <div class="card bg-base-200 rounded-box">
            <div class="card-body" style="padding:12px 16px;gap:8px">
              <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
                <div class="avatar avatar-placeholder">
                  <div style="width:32px;height:32px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:12px;background:var(--color-neutral);color:var(--color-neutral-content)">林</div>
                </div>
                <div style="display:flex;flex-direction:column">
                  <span style="font-size:13px;font-weight:600">林岚</span>
                  <span style="font-size:11px;opacity:.6">linlan@example.cn</span>
                </div>
                <span class="badge badge-soft badge-secondary">设计团队</span>
                <span style="font-size:12px;opacity:.6;margin-left:auto">今天 09:42</span>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-primary btn-sm" type="button">回复</button>
                <button class="btn btn-ghost btn-sm" type="button">转发</button>
                <button class="btn btn-ghost btn-sm" type="button">删除</button>
              </div>
            </div>
          </div>

          <div class="mail-body">
            <p>你好，首页第三稿我已经按上次评审的意见调整完了，主要有三处改动：</p>
            <p>首屏主视觉换成了秋日落山的实拍图，原来的几何插画整体下移到第三屏，作为「产品怎么做」的引子。标题层级收敛到两级，删掉了中间那行口号式副标题，版面干净了不少。按钮文案从「立即体验」改成了「看看怎么用」，更像人话，也和我们对外的口径保持一致。</p>
            <p>移动端的留白我又加大了一档，底部导航在小屏上不再贴边，手指点按的误触率应该会降下来。附件里是标注版和切图，你过一遍，有问题直接在文档里批注，不用另起会议。</p>
            <p>咱们周四的例会上过一下，没问题我就提交测试。辛苦啦。</p>
            <p>—— 岚</p>
          </div>

          <div>
            <div style="font-size:13px;opacity:.65;margin-bottom:8px">2 个附件（示例）</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <div class="card bg-base-100" style="border:1px solid var(--color-base-300)">
                <div class="card-body" style="padding:10px 14px;flex-direction:row;align-items:center;gap:8px">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:15px;height:15px;opacity:.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21.4 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                  <span style="font-size:13px">首页改版-v3.png</span>
                  <span class="badge badge-soft badge-neutral badge-sm">860 KB</span>
                </div>
              </div>
              <div class="card bg-base-100" style="border:1px solid var(--color-base-300)">
                <div class="card-body" style="padding:10px 14px;flex-direction:row;align-items:center;gap:8px">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:15px;height:15px;opacity:.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21.4 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                  <span style="font-size:13px">切图标注.pdf</span>
                  <span class="badge badge-soft badge-neutral badge-sm">1.2 MB</span>
                </div>
              </div>
            </div>
          </div>

          <p class="foot">以上邮件与发件人均为虚构示例，仅用于展示 nord-dark 主题整页效果 · 灰墨 MoH_UI</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/nord-dark/tokens.css">
```

② 在 `<html>` 挂 `data-theme="nord-dark"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="nord-dark"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 nord-dark · 北极冷（Nord 完整暗色移植）—— 极地冷灰蓝、克制专注
   色板出处：Nord（MIT，© 2016-present Sven Greb）https://www.nordtheme.com/docs/colors-and-palettes
   说明：daisyUI 官方自带 nord 为浅色简化版，本目录是完整 16 色 Polar Night /
   Snow Storm / Frost / Aurora 暗色 port，命名为 nord-dark 以区分。
   覆盖 daisyUI 5 主题变量。用法：项目已引入 daisyUI 后，<link> 本文件，并在
   <html data-theme="nord-dark"> 即整站换肤。 */

[data-theme="nord-dark"] {
  color-scheme: dark;

  /* 底与纸：Polar Night 三层，冷灰克制 */
  --color-base-100: #3b4252;   /* nord1 */
  --color-base-200: #434c5e;   /* nord2 */
  --color-base-300: #2e3440;   /* nord0 */
  --color-base-content: #e5e9f0; /* nord5 */

  /* 主色：nord10 冰蓝，只留给写邮件等主操作 */
  --color-primary: #5e81ac;
  --color-primary-content: #eceff4; /* nord6 */

  /* 次色：nord9 / nord8，冷调次级高亮 */
  --color-secondary: #81a1c1;
  --color-secondary-content: #2e3440;
  --color-accent: #88c0d0;
  --color-accent-content: #2e3440;

  --color-neutral: #4c566a;    /* nord3 */
  --color-neutral-content: #e5e9f0;

  /* 语义色：Aurora 四色，长时阅读不刺眼 */
  --color-info: #88c0d0;
  --color-info-content: #2e3440;
  --color-success: #a3be8c;    /* nord14 */
  --color-success-content: #2e3440;
  --color-warning: #ebcb8b;   /* nord13 */
  --color-warning-content: #3b3209;
  --color-error: #bf616a;       /* nord11 */
  --color-error-content: #eceff4;

  /* 圆角 / 尺寸 / 边框：中性小角，效率工具取向 */
  --radius-selector: 0.375rem;
  --radius-field: 0.375rem;
  --radius-box: 0.5rem;
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

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/nord-dark/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
