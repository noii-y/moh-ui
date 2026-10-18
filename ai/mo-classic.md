# 经典 Bootstrap 后台风（mo-classic） · 灰墨 MoH_UI

> 经典 Bootstrap 风用户管理后台。经典深蓝顶栏 + 分组侧栏 + 筛选表单 + 用户分页表 + 新增用户表单，Tabler / AdminLTE 式人人熟悉的后台节奏；挂 data-theme="mo-classic" 即整站换肤，页面全部使用 daisyUI 组件拼装、零依赖。

来源：灰墨二创主题（MIT）

**在线整页案例：https://noii-y.github.io/moh-ui/themes/mo-classic/demo.html**

## 用法一：照着整页做一个同款（推荐，复现效果最接近）

下面是该主题**完整、可直接运行的整页源码**（零依赖，保存为 .html 双击即可看）。让 AI 先 1:1 还原结构与视觉，再替换成你的业务内容；页面顶部「复制 AI 指令」会把含本源码的完整指令复制成纯文本，不联网也能复现。

### 换成你自己的业务时必须守住的视觉特征

- 标志性结构：顶部一条通高 48px 的实心主色顶栏（直接铺 --color-primary #0b5ed7、白字），顶栏搜索框是半透明白 rgba(255,255,255,.15)、品牌方块 rgba(255,255,255,.18)；这是本主题区别于其它后台的识别点，换业务也要保留一条整宽实心深蓝顶栏。
- 底下是经典灰蓝白三层：页面底 #f5f7fa、卡片纯白 #ffffff、分隔线 #eef1f5；卡片一律小圆角 0.375rem、细 1px 边，不做悬浮大阴影。
- 侧栏按「概览 / 业务 / 系统」分组：每组一个灰色 menu-title 小标题，菜单项可挂数字徽章（如「用户管理 128」）；同一时刻只允许一个 menu-active 当前项。
- 全页圆角最小一档（输入框/下拉 0.25rem、卡片 0.375rem），控件统一 input-sm，紧凑密度——主区间距 14px、表格 13px，AdminLTE / Tabler 的老式节奏，不做宽松 SaaS 留白。
- 列表头像用 secondary 灰蓝、accent 青蓝、neutral 深灰、primary 深蓝四色轮换的圆形姓氏首字标，不出现真人照片；角色徽章 badge-soft 分级（管理员 primary / 运营 secondary / 普通成员 neutral）。
- 行内操作一律文字链接而非小按钮：编辑 / 停用常规 link，删除用 text-error 红字；分页用 join 连接按钮组、当前页 btn-active 实心高亮。
- 窄屏 ≤900px：顶栏搜索框掉成全宽一行，侧栏分组标题 menu-title 隐藏、菜单横向换行，新增用户表单两列变单列，表格 overflow-x:auto 横滑。

### 完整整页源码

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="mo-classic">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>用户管理 · 灰墨后台（mo-classic 主题案例）</title>
  <meta name="description" content="灰墨 mo-classic 主题完整页面案例：经典 Bootstrap 风用户管理后台。本页只依赖 daisyUI 与 mo-classic 主题，展示真实后台整页效果。" />
  <link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css" />
  <style>
/*! 灰墨 mo-classic · 经典 Bootstrap 后台风（浅色）
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-classic"> 即整站换肤。
   灵感来源：Tabler / AdminLTE 经典后台节奏（经典蓝 + 灰蓝白底，仅风格参考，非品牌素材）。 */

[data-theme="mo-classic"] {
  /* 底与纸：经典灰蓝白三层 */
  --color-base-100: #f5f7fa;
  --color-base-200: #ffffff;
  --color-base-300: #eef1f5;
  --color-base-content: #212a35;

  /* 主色：Bootstrap 经典深蓝 */
  --color-primary: #0b5ed7;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：经典灰蓝与青蓝 */
  --color-secondary: #6c7a89;
  --color-secondary-content: #ffffff;
  --color-accent: #0aa2c0;
  --color-accent-content: #ffffff;

  --color-neutral: #364152;
  --color-neutral-content: #ffffff;

  /* 语义色：标准可读色 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：经典 3–6px 小圆角、细边框 */
  --radius-selector: .25rem;
  --radius-field: .25rem;
  --radius-box: .375rem;
  --size-selector: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
  </style>
  <style>
    /* 仅布局辅助：主题案例页不依赖任何工具类补丁，结构类自包含 */
    html, body { margin: 0; }
    body { background: var(--color-base-100); color: var(--color-base-content); font-family: ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif; }
    .topbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 0 20px; min-height: 48px; background: var(--color-primary); color: var(--color-primary-content); }
    .topbar-brand { font-size: 15px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
    .topbar-mark { width: 22px; height: 22px; border-radius: 4px; background: rgba(255,255,255,.18); display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; }
    .topbar-right { display: flex; align-items: center; gap: 12px; }
    .topbar-search { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,.15); border-radius: .25rem; padding: 4px 10px; }
    .topbar-search input { background: none; border: 0; outline: none; color: #fff; font-size: 13px; width: 180px; }
    .topbar-search input::placeholder { color: rgba(255,255,255,.7); }
    .shell { display: flex; align-items: flex-start; min-height: calc(100vh - 48px); }
    .side { width: 208px; flex: none; border-inline-end: 1px solid var(--color-base-300); background: var(--color-base-200); padding: 12px 8px; }
    .main { flex: 1; min-width: 0; padding: 16px 20px 28px; display: flex; flex-direction: column; gap: 14px; }
    .row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .crumb { font-size: 12px; opacity: .6; }
    .filter-row { display: flex; align-items: flex-end; gap: 10px; flex-wrap: wrap; }
    .field { display: flex; flex-direction: column; gap: 4px; }
    .field label { font-size: 12px; opacity: .7; }
    .tbl-wrap { overflow-x: auto; min-width: 0; }
    .tbl-wrap .badge { white-space: nowrap; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 16px; }
    .form-full { grid-column: 1 / -1; }
    .foot { font-size: 12px; opacity: .5; text-align: center; padding-top: 6px; }
    @media (max-width: 900px) {
      .shell { flex-direction: column; align-items: stretch; }
      .side { width: auto; border-inline-end: 0; border-block-end: 1px solid var(--color-base-300); flex-direction: row; align-items: center; flex-wrap: wrap; gap: 8px; }
      .side .menu { flex-direction: row; flex-wrap: wrap; width: auto; gap: 4px; }
      .side .menu li a { white-space: nowrap; }
      .side .menu .menu-title { display: none; }
      .form-grid { grid-template-columns: 1fr; }
      .main { padding: 14px 12px 22px; }
      .topbar-right { flex-wrap: wrap; row-gap: 6px; }
      .topbar-search { flex: 1 1 100%; }
      .topbar-right > span { white-space: nowrap; flex: none; }
    }
  </style>
</head>
<body>

  <!-- 顶部实心底经典后台顶栏 -->
  <div class="topbar bg-primary text-primary-content">
    <div class="topbar-brand"><span class="topbar-mark">墨</span>灰墨后台</div>
    <div class="topbar-right">
      <div class="topbar-search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px;opacity:.7" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
        <input type="search" placeholder="搜索…" />
      </div>
      <span style="font-size:13px;display:flex;align-items:center;gap:6px;cursor:default">
        通知
        <span class="badge badge-sm">3</span>
      </span>
      <span style="font-size:13px;display:flex;align-items:center;gap:8px">
        <span style="width:26px;height:26px;border-radius:999px;background:rgba(255,255,255,.22);display:inline-flex;align-items:center;justify-content:center;font-size:12px">高</span>
        高管理员
      </span>
    </div>
  </div>

  <div class="shell">

    <!-- 左侧菜单 -->
    <aside class="side">
      <ul class="menu" style="width:100%;padding:0">
        <li class="menu-title" style="padding-left:12px">概览</li>
        <li><a>仪表盘</a></li>
        <li><a class="menu-active">用户管理 <span class="badge badge-sm">128</span></a></li>
        <li><a>角色权限 <span class="badge badge-sm">8</span></a></li>
        <li class="menu-title" style="padding-left:12px">业务</li>
        <li><a>订单管理</a></li>
        <li><a>内容管理</a></li>
        <li class="menu-title" style="padding-left:12px">系统</li>
        <li><a>系统设置</a></li>
      </ul>
    </aside>

    <!-- 主区 -->
    <div class="main">

      <!-- 页头 -->
      <div class="row">
        <div>
          <div class="crumb">首页 / 用户管理</div>
          <h1 style="font-size:20px;font-weight:700;margin:4px 0 0">用户管理</h1>
        </div>
        <button class="btn btn-primary btn-sm" type="button">新增用户</button>
      </div>

      <!-- 筛选表单 -->
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
          <h2 style="font-size:14px;font-weight:700;margin:0">筛选条件</h2>
          <div class="filter-row">
            <div class="field">
              <label for="kw">关键词</label>
              <input class="input input-sm" id="kw" type="search" placeholder="姓名 / 邮箱" style="width:200px" />
            </div>
            <div class="field">
              <label for="role">角色</label>
              <select class="select select-sm" id="role" style="width:160px">
                <option>全部角色</option>
                <option>管理员</option>
                <option>运营</option>
                <option>普通成员</option>
              </select>
            </div>
            <div class="field">
              <label for="st">状态</label>
              <select class="select select-sm" id="st" style="width:140px">
                <option>全部状态</option>
                <option>启用</option>
                <option>停用</option>
              </select>
            </div>
            <div class="field" style="flex-direction:row;gap:8px;align-items:flex-end">
              <button class="btn btn-primary btn-sm" type="button">查询</button>
              <button class="btn btn-ghost btn-sm" type="button">重置</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 用户表格 -->
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:14px 16px 8px;display:flex;flex-direction:column;gap:10px">
          <div class="tbl-wrap">
            <table class="table" style="font-size:13px">
              <thead>
                <tr style="opacity:.6;font-size:12px">
                  <th>用户</th><th>邮箱</th><th>角色</th><th>状态</th><th>注册时间</th><th style="text-align:right">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span style="display:flex;align-items:center;gap:8px"><span style="width:26px;height:26px;border-radius:999px;background:var(--color-secondary);color:var(--color-secondary-content);display:inline-flex;align-items:center;justify-content:center;font-size:11px">张</span>张伟</span>
                  </td>
                  <td>zhangwei@example.com</td>
                  <td><span class="badge badge-soft badge-primary">管理员</span></td>
                  <td><span class="badge badge-soft badge-success">启用</span></td>
                  <td style="opacity:.6">2025-11-02</td>
                  <td style="text-align:right"><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">编辑</a><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">停用</a><a class="link text-error" href="#" style="font-size:13px;text-decoration:none">删除</a></td>
                </tr>
                <tr>
                  <td>
                    <span style="display:flex;align-items:center;gap:8px"><span style="width:26px;height:26px;border-radius:999px;background:var(--color-accent);color:var(--color-accent-content);display:inline-flex;align-items:center;justify-content:center;font-size:11px">李</span>李娜</span>
                  </td>
                  <td>lina@example.com</td>
                  <td><span class="badge badge-soft badge-secondary">运营</span></td>
                  <td><span class="badge badge-soft badge-success">启用</span></td>
                  <td style="opacity:.6">2025-12-18</td>
                  <td style="text-align:right"><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">编辑</a><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">停用</a><a class="link text-error" href="#" style="font-size:13px;text-decoration:none">删除</a></td>
                </tr>
                <tr>
                  <td>
                    <span style="display:flex;align-items:center;gap:8px"><span style="width:26px;height:26px;border-radius:999px;background:var(--color-neutral);color:var(--color-neutral-content);display:inline-flex;align-items:center;justify-content:center;font-size:11px">王</span>王强</span>
                  </td>
                  <td>wangqiang@example.com</td>
                  <td><span class="badge badge-soft badge-secondary">运营</span></td>
                  <td><span class="badge badge-soft badge-neutral">停用</span></td>
                  <td style="opacity:.6">2026-01-07</td>
                  <td style="text-align:right"><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">编辑</a><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">启用</a><a class="link text-error" href="#" style="font-size:13px;text-decoration:none">删除</a></td>
                </tr>
                <tr>
                  <td>
                    <span style="display:flex;align-items:center;gap:8px"><span style="width:26px;height:26px;border-radius:999px;background:var(--color-primary);color:var(--color-primary-content);display:inline-flex;align-items:center;justify-content:center;font-size:11px">陈</span>陈静</span>
                  </td>
                  <td>chenjing@example.com</td>
                  <td><span class="badge badge-soft badge-neutral">普通成员</span></td>
                  <td><span class="badge badge-soft badge-success">启用</span></td>
                  <td style="opacity:.6">2026-02-23</td>
                  <td style="text-align:right"><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">编辑</a><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">停用</a><a class="link text-error" href="#" style="font-size:13px;text-decoration:none">删除</a></td>
                </tr>
                <tr>
                  <td>
                    <span style="display:flex;align-items:center;gap:8px"><span style="width:26px;height:26px;border-radius:999px;background:var(--color-secondary);color:var(--color-secondary-content);display:inline-flex;align-items:center;justify-content:center;font-size:11px">刘</span>刘洋</span>
                  </td>
                  <td>liuyang@example.com</td>
                  <td><span class="badge badge-soft badge-neutral">普通成员</span></td>
                  <td><span class="badge badge-soft badge-success">启用</span></td>
                  <td style="opacity:.6">2026-03-11</td>
                  <td style="text-align:right"><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">编辑</a><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">停用</a><a class="link text-error" href="#" style="font-size:13px;text-decoration:none">删除</a></td>
                </tr>
                <tr>
                  <td>
                    <span style="display:flex;align-items:center;gap:8px"><span style="width:26px;height:26px;border-radius:999px;background:var(--color-accent);color:var(--color-accent-content);display:inline-flex;align-items:center;justify-content:center;font-size:11px">赵</span>赵敏</span>
                  </td>
                  <td>zhaomin@example.com</td>
                  <td><span class="badge badge-soft badge-primary">管理员</span></td>
                  <td><span class="badge badge-soft badge-warning">待激活</span></td>
                  <td style="opacity:.6">2026-09-30</td>
                  <td style="text-align:right"><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">编辑</a><a class="link" href="#" style="font-size:13px;text-decoration:none;margin-right:8px">停用</a><a class="link text-error" href="#" style="font-size:13px;text-decoration:none">删除</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row" style="padding:4px 0 8px">
            <span style="font-size:12px;opacity:.6">共 128 条记录</span>
            <div class="join">
              <button class="join-item btn btn-sm" type="button">上一页</button>
              <button class="join-item btn btn-sm btn-active" type="button">1</button>
              <button class="join-item btn btn-sm" type="button">2</button>
              <button class="join-item btn btn-sm" type="button">3</button>
              <button class="join-item btn btn-sm" type="button">4</button>
              <button class="join-item btn btn-sm" type="button">5</button>
              <button class="join-item btn btn-sm" type="button">下一页</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 新增用户表单（静态展示） -->
      <div class="card bg-base-200 rounded-box">
        <div class="card-body" style="padding:14px 16px;display:flex;flex-direction:column;gap:12px">
          <h2 style="font-size:14px;font-weight:700;margin:0">新增用户</h2>
          <div class="form-grid">
            <div class="field">
              <label for="uname">姓名</label>
              <input class="input input-sm" id="uname" type="text" placeholder="请输入姓名" style="width:100%" />
            </div>
            <div class="field">
              <label for="uemail">邮箱</label>
              <input class="input input-sm" id="uemail" type="email" placeholder="name@example.com" style="width:100%" />
            </div>
            <div class="field">
              <label for="urole">角色</label>
              <select class="select select-sm" id="urole" style="width:100%">
                <option>普通成员</option>
                <option>运营</option>
                <option>管理员</option>
              </select>
            </div>
            <div class="field">
              <label>状态</label>
              <div style="display:flex;gap:16px;align-items:center;height:30px">
                <span style="display:flex;align-items:center;gap:6px;font-size:13px"><input class="radio" type="radio" name="ust" checked />启用</span>
                <span style="display:flex;align-items:center;gap:6px;font-size:13px"><input class="radio" type="radio" name="ust" />停用</span>
              </div>
            </div>
            <div class="field form-full">
              <label for="unote">备注</label>
              <textarea class="textarea textarea-sm" id="unote" placeholder="可选：入职部门、负责事项…" style="width:100%"></textarea>
            </div>
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-primary btn-sm" type="button">保存修改</button>
            <button class="btn btn-ghost btn-sm" type="button">取消</button>
          </div>
        </div>
      </div>

      <p class="foot">以上为示例数据，仅用于展示 mo-classic 主题整页效果 · 灰墨 MoH_UI</p>
    </div>
  </div>
</body>
</html>
```

## 用法二：只给已有项目换肤

① 在 `<head>` 引入 daisyUI 5 底座：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/themes/mo-classic/tokens.css">
```

② 在 `<html>` 挂 `data-theme="mo-classic"`，组件类名一行都不用改。上面的 tokens.css 覆盖 [data-theme="mo-classic"] 下的全部 --color-* 变量。

③ 本主题完整变量（要改颜色就覆盖这些变量，不要在组件里硬编码色值）：

```css
/*! 灰墨 mo-classic · 经典 Bootstrap 后台风（浅色）
   覆盖 daisyUI 5 主题变量（MIT，daisyUI © Pouya Saadeghi）。
   用法：项目已引入 daisyUI 后，<link> 本文件，并在 <html data-theme="mo-classic"> 即整站换肤。
   灵感来源：Tabler / AdminLTE 经典后台节奏（经典蓝 + 灰蓝白底，仅风格参考，非品牌素材）。 */

[data-theme="mo-classic"] {
  /* 底与纸：经典灰蓝白三层 */
  --color-base-100: #f5f7fa;
  --color-base-200: #ffffff;
  --color-base-300: #eef1f5;
  --color-base-content: #212a35;

  /* 主色：Bootstrap 经典深蓝 */
  --color-primary: #0b5ed7;
  --color-primary-content: #ffffff;

  /* 次色 / 强调色：经典灰蓝与青蓝 */
  --color-secondary: #6c7a89;
  --color-secondary-content: #ffffff;
  --color-accent: #0aa2c0;
  --color-accent-content: #ffffff;

  --color-neutral: #364152;
  --color-neutral-content: #ffffff;

  /* 语义色：标准可读色 */
  --color-info: #0284c7;
  --color-info-content: #ffffff;
  --color-success: #16a34a;
  --color-success-content: #ffffff;
  --color-warning: #d97706;
  --color-warning-content: #ffffff;
  --color-error: #dc2626;
  --color-error-content: #ffffff;

  /* 圆角 / 尺寸 / 边框：经典 3–6px 小圆角、细边框 */
  --radius-selector: .25rem;
  --radius-field: .25rem;
  --radius-box: .375rem;
  --size-selector: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

④ 组件全部走 daisyUI 语义类（`btn` / `card` / `table` / `input` 等），不要硬编码颜色。

---

## 更多

- 完整整页案例（在线页面）：https://noii-y.github.io/moh-ui/themes/mo-classic/demo.html
- 素材溯源与许可证：https://noii-y.github.io/moh-ui/site/attributions.html
- 主题库：https://noii-y.github.io/moh-ui/site/themes.html
- 全站 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
