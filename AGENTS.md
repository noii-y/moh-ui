# AGENTS.md · 灰墨 MoH_UI 协作手册

> 任何被派进本项目的智能体，**开工前必须完整读完本文件**，再通读已验收样板 `components/daisyui/button/`（demo.html / README.md / moh.json）。
> 与记忆或想象冲突时，**一律以本文件和仓库里已落地的文件为准**。

---

## 1. 项目是什么

灰墨 MoH_UI（GitHub `noii-y/moh-ui`，MIT 开源）是一个**零依赖、纯 HTML/CSS、可直接复制到自己项目里**的中文前端组件库，包含三层：

1. **附带服务——AI 审美硬边界**（`rules/`）：AI 不容易察觉的排版规则，如字号不许过大过小、表格不许溢出、排列要整齐。
2. **主打①——可搬运的组件 / 小插件**（`components/`）：内容多、使用率高，每个都能一键复制进自己的项目，附原组件名 + 原地址 + 中文教程。
3. **主打②——丰富视觉主题**（`themes/`）：用**完整页面案例**展示，**不是色块**。

组件底座是 **daisyUI**（纯 CSS、零 JS、零构建）。其它来源（Preline / Flowbite / HyperUI / Meraki 等）必须经 PM 批准后，按同一套流程引入。

---

## 2. 铁律（违反即返工，不解释）

1. **不从 0 做，先 copy** 成熟开源 demo，再做零依赖改造与中文教程；保留原组件名、原地址、许可证署名。
2. 组件页**提示词为主、代码为辅**：顶部一个真实业务场景成品，主按钮是「复制 AI 提示词」（复制给 AI 的完整实现指令：场景 + 规格 + 参考结构 + 审美规则 + 交付自查，受众把它发给自己的 AI）；「复制成品 HTML」是次要按钮；变体只是折叠参考。
3. 主题用**完整页面案例**展示，禁止只放色块。
4. **来源只在组件库顶部全局声明一次**：组件库展示页顶部一段全局声明（链接到溯源页）；每个组件的原版名/地址/许可证完整登记在 `moh.json` 与溯源页 `site/attributions.html`。**组件详情页不再写页脚来源声明（不要 `footer.doc-source`）**；卡片描述与首页文案不写"搬运自 daisyUI 的 XXX"前缀，直接写组件能干什么、覆盖哪些形态。README 里的来源引用块保留（面向 GitHub 看代码的人）。
5. 教程做成**站内页面**（demo.html），禁止把教程链接指向 GitHub 文件夹或文件。
6. 不写"不是色块玩具"这类自我辩护，不出现用户没问过的话。
7. 文案写**真实动作**（保存修改 / 删除 / 加入购物车），**禁止**让按钮写着颜色名（Primary / Success）。
8. 流程：**本地样板 → 桌面 + 手机双视口截图真看 → 确认后才批量 → 用户说推送才推送**。
9. 不编造：类名、变体必须真实存在于 `vendor/daisyui.css` 或 `assets/utilities-patch.css`，用 grep 核实。
10. 每个组件**只改自己的目录**，不得动公共层、脚本、其它组件，不得影响已完成页面。

---

## 3. 目录与职责

```
vendor/                      第三方底座（只读，禁止改）
  daisyui.css                daisyUI 全量样式
  daisyui-themes.css         主题变量
  LICENSE-daisyui.txt        MIT © 2020 Pouya Saadeghi
assets/                      组件公共层（改动需 PM 批准）
  demo-page.css              详情页排版（唯一权威样式，别在组件里另写样式）
  demo-doc.js                「复制组件」+ 变体深色代码面板逻辑
  demo-embed.js              ?embed=1 站点卡片缩略图模式
  utilities-patch.css        Tailwind 风格工具类补丁（flex/gap/h-5/w-5 等）
components/
  daisyui/<name>/            搬运组件（主战场）：demo.html + README.md + moh.json
  <name>/                    少量自研增强（chart-card/code-block/date-range/drag-sort/empty）：同样三件套 + daisyUI 底座
  _legacy/                   已下线旧组件，禁止扫描、展示、参考、复活
site/                        展示站（components.html / themes.html / rules.html …）
  data.js                    由脚本生成，禁止手改
scripts/
  build-site-data.mjs        扫描生成 site/data.js
  check-attributions.mjs     校验所有 moh.json 溯源合规
rules/                       AI 审美硬边界
themes/                      旧色板（待重做为页面案例；预览文件可能是脏的，禁止提交）
```

---

## 4. 一个合格组件 = 三件套

**唯一标准样板：`components/daisyui/button/`。** 新组件逐文件对照它做。

### 4.1 demo.html（成品详情页 + 站内教程）

`<head>` 固定四行（相对路径 `../../../`，从 `components/daisyui/<name>/` 回根正好三级）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
<link rel="stylesheet" href="../../../assets/demo-page.css" />
<script src="../../../assets/demo-embed.js"></script>
```

`</body>` 前引一行：`<script src="../../../assets/demo-doc.js"></script>`

页面骨架（顺序固定）：

1. `header.doc-head`：中文标题 + `<span class="en">英文名</span>` + 一句中文说明。**不放来源链接。**
2. `section.doc-block.doc-howto`：`<ol class="doc-steps">` 三步（引两行 CSS → 复制组件 → 改 class / 跟主题）。
3. `section.doc-block.doc-hero`：成品区
   - `<span class="doc-hero-badge">成品示例 · 拿来即用</span>`
   - `<h2>` 真实场景名（如"一张表单底部的操作栏"）
   - `<p class="desc">` 这个成品为什么这么设计
   - `<div class="doc-stage" id="hero-stage">`：成品本体（提示词的"参考结构"和 HTML 复制都取这里）
   - `<div class="doc-hero-action">` 内放 `.doc-hero-btns`（两个按钮）：
     主按钮 `<button class="btn btn-primary" data-copy-prompt data-component="场景名">复制 AI 提示词</button>`；
     辅按钮 `<button class="btn btn-soft" data-copy-hero data-component="中文组件名">复制成品 HTML</button>`；
     再一行 `<span class="hint">` 说明"首选复制提示词发给 AI"。
4. 若干 `section.doc-block`：每个变体一块，结构为 `<h2>形态名</h2><p class="desc">中文讲解</p><div class="doc-stage">…真实组件…</div>`。
   **变体的代码块和"代码"按钮由 demo-doc.js 自动生成，HTML 里不要手写 `<pre>` / `<details>`。**
5. `section.doc-block.doc-guide`：中文使用指南（怎么选、可访问性、坑）。
6. **页面到此结束，不写 `footer.doc-source` 来源声明**（来源统一在组件库顶部全局声明 + 溯源页；见铁律 4）。

### 4.2 README.md（给进仓库看代码的人）

固定小节：标题 + 来源引用块 → 它是什么 → 怎么用（三步，含两行 CSS）→ 常用写法速查表（表格）→ 使用要点（给 AI 与新手）→ 兼容性。

### 4.3 moh.json（溯源元数据）

照 `button/moh.json` 填：

- `name` 必须为 `daisyui-<name>`（全局唯一）；
- `type: "component"`、`title`、`description`（中文，直接写组件能干什么、覆盖哪些变体；**禁止以"搬运自 daisyUI 的 XXX"开头**，站点卡片会原样显示这句描述）；
- `styleTags` 非空数组（决定站点分类，如 `表单` `基础组件` `反馈` `导航` `数据展示`），只用全站已有标签词，不造孤立标签；
- `source`：`origin:"third-party"`、`upstream:"daisyUI"`、`url` 官方组件页、`license:"MIT"`、`changes` 写清做了什么改造；
- `dependencies: []`（纯 CSS 组件应保持零依赖）、`files:["demo.html","README.md"]`、`verified:true`。

### 4.3.1 自研增强组件（`components/<name>/`，如 chart-card/empty）

与搬运组件**同一套三件套与同一页面骨架**，差异只有：
- `name` 不带 `daisyui-` 前缀；`source.origin:"original"`、`upstream/url` 为 null（有灵感来源填 `inspiration`）。
- 底座同样引 `vendor/daisyui.css` + `assets/utilities-patch.css` + `demo-page.css`，**禁止再引用 `themes/*/tokens.css` 或旧 `--moh-*` 变量**；入口文件名同样是 `demo.html`（不是 index.html）。
- 必须依赖第三方库才能工作的（如图表、代码高亮），库走 CDN 写进 `dependencies`，站点会挂「带依赖」标签，指南与提示词如实说明；能用纯 HTML/CSS/极少原生 JS 实现的保持零依赖。
- 页面同样**不写 `footer.doc-source`**。

### 4.4 提示词正文（必做，主路径）

在 `</main>` 之后、`demo-doc.js` 引用之前，加一个**不会被渲染**的组件特有提示词：

```html
<script type="text/plain" id="moh-prompt">【场景】…… 【怎么排】…… 【精确规格】……</script>
```

- 只写该组件的【场景】【怎么排】【精确规格】三段，具体到真实类名、真实中文文案、可访问性。
- **不要**重复开场白、参考结构、通用规则——这些由 `demo-doc.js` 自动拼接：
  - 开场白（请用 daisyUI 5…帮我实现：场景名）自动加；
  - 【参考结构】自动取 `#hero-stage` 的成品 HTML，**只放一个最常用场景，不要把所有变体塞进去**（否则 AI / 用户还要自己删）；
  - 通用【审美硬边界】+【交付要求】由 `demo-doc.js` 里的 `COMMON_RULES` 统一提供（摘编自 `rules/mo-rules-zh.md`），组件里不要重复。
- 完整提示词可用 `demo.html?dump-prompt=1` 看到全文，验收时必须逐字核对。
- 提示词是本库的**核心交付物**：它要让任何 AI 不二次猜测就能稳定复现，不能写空泛的"做一个好看的 XX"。

---

## 5. 采集规则（怎么 copy 官方 demo）

- 来源：`https://daisyui.com/components/<name>/`，取 **class 版 HTML**，丢弃 `className=` / React 版。
- 只保留纯 CSS 能跑的；daisyUI 纯 CSS 不支持的交互插件，标注或跳过，不要硬写 JS。
- Tailwind 任意值类替换：`h-[1em]`→`h-4`、`size-[1.2em]`→`h-5 w-5`、`w-[Npx]`→近似标准类；`bg-[#xxxxxx]` 这类硬编码颜色跳过或换语义色；第三方登录按钮（Google / X 等品牌）整段跳过。
- 每个组件覆盖官方**主要形态**，不缺核心变体，也不为凑数塞重复。
- 用 grep 确认类名真实存在，例：`btn-soft` 有、`btn-glass` 无（玻璃写 `class="btn glass"`）。

---

## 6. 中文文案与翻译规范

- 按钮、标签、placeholder 一律用真实业务文案（"保存修改""删除""加入购物车""请输入邮箱"）。
- 术语对照：ghost=幽灵（无底框）、outline=描边、dash=虚线、soft=柔和、disabled=禁用、active=选中/按下、loading=加载中、toggle=开关、radio=单选、checkbox=复选。英文类名保留等宽 `code`。
- 不直译、不堆类名当句子、不中英文混杂；中文用全角标点，代码与数字两侧留半角。
- 语气像同事讲给新手：具体、能照做，不写空话套话。

---

## 7. 验收关卡（最重要：没逐项过，不许说"完成"）

**A. 静态校验**
- `node scripts/check-attributions.mjs`：全部 moh.json 合规（只读，工程师可跑）。
- `node scripts/build-site-data.mjs`：组件数正确增加、无"色板缺失"等警告。**它会写 `site/data.js`，只由 PM 在整批完成后统一跑；工程师不要跑——多个工程师并发会互相覆盖。**

**B. 三视口截图（Edge headless，生成后必须 Read 图片真看，不能只生成不看）**
- 桌面：`demo.html`，宽 1280。
- **手机（以 390px 自检脚本为准，别用整窗 `--window-size=390`）**：`node scripts/qa-mobile.mjs components/daisyui/<name>/demo.html`，脚本用真实 390px iframe 测量并出图，必须打印 `MOBILE 390 OK scrollWidth=390`、退出码 0。注意：无头整窗截 390 会出现"右侧文字被裁"的**假象**（截图宽度与布局视口不一致），那不是页面 bug，以脚本结果为准。
- 卡片缩略图：`demo.html?embed=1`，约 900×380，确认只留成品与变体预览、无代码按钮/教程残留。
- 代码面板：`demo.html?open=1`，确认深色面板正常、能复制。

**C. 功能与提示词（主路径，必查）**
- 打开 `demo.html?dump-prompt=1`（用 Edge `--dump-dom` 导出，或直接看页面底部），**逐字读出完整提示词**：开场 + 【场景】【怎么排】【精确规格】+【参考结构】（只含一个成品，不含全部变体）+【审美硬边界】+【交付要求】；类名真实、文案是真实中文动作、无颜色名。
- 「复制 AI 提示词」复制上述内容；「复制成品 HTML」产出自包含 HTML（两行线上绝对 URL 的 CSS + `#hero-stage`，保存 .html 双击即见）。
- 每个变体「</> 代码」能展开/收起、面板里"复制这段"可用。

**D. 内容**
- 成品是真实场景；文案无颜色名；详情页无来源声明、描述无"搬运自"前缀（来源只在组件库顶部 + 溯源页）；无自我辩护；教程不跳 GitHub；无重复变体。

**E. 影响面**
- 只改本组件目录；重跑后站点其它组件截图无回归。

**交付时必须附**：三文件路径 + 两条校验命令的输出 + 各视口截图路径 + 自检勾选清单 + 遗留问题。

---

## 8. 多智能体分工与纪律

| 角色 | 职责 | 不允许做 |
|---|---|---|
| **PM（MainAgent）** | 接需求、拆任务、定样板、把本文件喂给子智能体、**逐个读文件 + 截图做最终验收**、提交推送、对用户汇报 | 不替用户定方向；不跳过验收直接信子智能体 |
| **编排者（OrganizerAgent）** | 按 PM 的分片创建子智能体、调度、汇总、初核格式 | 不擅自改范围、不放行不合格产出 |
| **组件工程师（子智能体）** | 对分到的若干组件端到端负责：采集→翻译→三件套→自检 | 不碰 git、不改公共层/脚本/别人的目录 |
| **QC 验收员（子智能体，独立于工程师）** | 对照第 7 节横切复查所有组件，专门挑错 | 不自己改组件，只产出问题清单 |

- 子智能体**禁止 `git add/commit/push`**，只产出文件 + 自检报告。（灰度批出现过 QC 自行 commit + push，属于违规，下不为例；提交推送一律由 PM 统一做。）
- 子智能体**不要运行 `node scripts/build-site-data.mjs`**（它会写 `site/data.js`，多个工程师并发会互相覆盖）；该脚本只由 PM 在整批完成后统一跑。只读校验 `check-attributions.mjs` 与 `qa-mobile.mjs` 可自行运行。
- 提交推送由 PM 验收通过后统一做，原则上**一个组件一个 commit**，便于回退。
- 最终验收权在 PM：**工程师自检 + QC 复查都过了，PM 仍必须自己 Read 改动文件、Read 三视口截图**，确认无问题才算通过；不合格打回对应工程师。
- 子智能体看不到历史对话，需要的背景、规范、命令都在本文件与样板里，以文件为准。

---

## 9. 命令清单（Windows）

```powershell
# 校验
node scripts/build-site-data.mjs
node scripts/check-attributions.mjs

# Edge 无头截图（固定用 Edge，不用 Chrome）。常驻 Edge 时旧 --headless 可能静默失败
# （退出码 0 但不出图），用 --headless=new 并给独立 --user-data-dir 更稳。
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --headless=new --disable-gpu --hide-scrollbars --no-first-run `
  --user-data-dir="$env:TEMP\moh-edge" --virtual-time-budget=1200 `
  --window-size=1280,1000 --screenshot=D:\Temp\out.png "file:///绝对路径/demo.html"
# 手机 390 自检（权威，别用整窗 390）：node scripts/qa-mobile.mjs components/daisyui/<name>/demo.html
# 缩略图：URL 加 ?embed=1；展开代码：?open=1
# 逐字核对提示词：URL 加 ?dump-prompt=1，配合 --dump-dom 导出后读 #moh-prompt-dump
# 真点复制按钮：file:// 同源 iframe 探针在 scripts/qa/（自动化 bu.js 隔离世界点不动主世界监听）

# 提交（只 add 本批次，禁止 git add -A / .）
git add components/daisyui/<name>
git commit -m "feat(component): ..."

# 推送（必须带 GIT_CONFIG_GLOBAL 前缀，否则全局 insteadOf 会导致认证失败）
$env:GIT_CONFIG_GLOBAL='NUL'; git push origin master
git fetch origin
git rev-list --count origin/master..HEAD   # 必须为 0
```

本仓库已设本地提交身份（Noah Gao / 2803038543@qq.com），无需再设。
工作区里 `themes/mo-*/preview.html` 是旧方向的脏文件，**任何提交都不要带上**。

---

## 10. 已踩坑记录（别重犯）

1. 手机窄屏：flex 容器里用 `ml-auto` 推到右边的按钮会**溢出被裁切 / 消失**；按钮放自然顺序的 `flex flex-wrap` 容器即可。
2. 长标题 + 标题行右侧按钮，在手机上会把按钮挤出屏；窄屏标题行已在 demo-page.css 改为纵向堆叠，别破坏。
3. 代码入口别做成"大空边框条"（像坏框）；用标题行右侧小 `</> 代码` 按钮 + 深色代码面板。
4. 不要大面积亮紫 / 渐变阴影，显廉价；中性灰为主，主色只留给成品主按钮。
5. 「复制组件」不要用 `btn-wide` 固定窄宽 + 右侧灰字，会失衡；用自然尺寸 + 下一行说明。
6. 玻璃写 `class="btn glass"`，没有 `btn-glass`。
7. 截图生成成功 ≠ 页面合格，必须 Read 图片、带着挑刺眼光看。
8. 25 个旧自研组件已下线到 `_legacy/`（旧 `--moh-*` 变量体系），禁止复活或参考。
9. 主题 `preview.html` 是被否定的旧方向（色块），不提交、不参考。
10. 主路径是给 AI 的**提示词**（受众把提示词发给自己的 AI），不是让人自己复制 HTML 再删变体；HTML 复制只是进阶辅助。这是开发计划 1.5 / 4.1 定的主路径，不要再做回 shadcn 式"复制代码片段"。
11. 提示词的【参考结构】只放一个最常用成品，不要把全部变体塞进去，否则用户和 AI 还要自己删。
12. 无头整窗 `--window-size=390` 截图右侧文字被裁是**假象**，不代表页面有横向溢出；用 `node scripts/qa-mobile.mjs`（真实 390px iframe 测 scrollWidth）下结论，别据此乱改公共层。
13. 自动化浏览器（bu.js）运行在隔离世界，直接 `.click()` 触发不了页面主世界里 `demo-doc.js` 注册的复制监听；要真点复制按钮，用 `scripts/qa/` 下的同源 iframe 探针（父页桩接 iframe 的 `navigator.clipboard.writeText`）。
14. **覆盖层/展开类组件（dropdown、drawer、megamenu、modal、collapse、tabs、fab speed-dial、filter）**：默认是收起的，静态截图/embed 卡片会只看到一个按钮、看不到内容。成品区必须**强制展示展开态**——优先用原生 `<details open>`、popover 的 `open` 属性、或官方提供的 `xxx-open` 类（如 `dropdown-open`、`drawer-open`）；drawer 用一个可见的侧栏面板成品（不依赖遮罩点击）。hero 截图要能直接看到菜单/侧栏/弹层内容；折叠态/触发态放到变体。凡是纯 CSS 无法默认展开的，在成品里加一行"仅为演示默认展开"的最小内联样式，不要为了展开写 JS。
15. **整页级组件（navbar、hero、footer、drawer、megamenu、dock）放进 `doc-stage` 时**：不要让它们撑满整个视口或带 `fixed` 定位（会盖住文档页/复制按钮）；用 `relative` + 去掉 fixed/absolute 固定定位，在一个带边框的舞台容器里呈现完整结构，保证 390px 与 embed 卡片里不溢出、不遮挡。
16. **radio 标签页（`.tabs` + `.tab-content`）在窄屏靠 `flex-wrap` 把选中的内容块挤到标签行下一行**，不能给 `.tabs` 加 `flex-nowrap`，否则内容面板会跟标签排到同一行。标签排不下时让它自然折成两行、全部可见即可；只有「纯标签、不带 `.tab-content` 的链接式标签」才用 `overflow-x-auto` + `shrink-0` 做单行横滑。文案和提示词要如实写实际呈现，不能写"横滑"页面却是折行。
17. **成品菜单同一时刻只允许一个 `menu-active` 当前项**（不要父项和子项同时高亮，复制出去会变成两个"当前页"）；要展示展开用 `<details open>`，当前页落在叶子项。**站点分类按组件 styleTags 的声明先后归类**（`build-site-data.mjs`），所以组件最显著的分类要写在前面；`选择` 是弱标签，tab/dock/pagination 这类导航件要把 `导航` 放在 `选择` 前。
18. **提交与验收权专属 PM**：即使产出内容全部合格，子智能体与编排者也**不得自行 `git add/commit/push`**，不得改动 `scripts/` 与 `AGENTS.md`（发现必须修的问题，报 PM 处理），更不得代替 PM 宣布"已终验/已线上验证"。批次② 出现过编排者代 PM 提交推送 + 代宣布验收，属违规：内容事后经 PM 独立复核成立，但流程红线不可破。编排者只交付"文件 + 自检/QC 报告 + 问题清单"。
19. **批次④ 覆盖层/反馈件静态化的具体坑**：① toast 九宫格的 `toast-middle`/`toast-center` 自带 `--toast-x:-50%`/`--toast-y:-50%` 位移变量，在静态流（加了 position:static）里会把通知条推出/重叠，静态展示除 `position:static` 外要内联 `--toast-x:0;--toast-y:0` 清零（其余位置清零无害，可统一加）；复制进真实项目删掉这些内联即恢复 fixed。② modal 静态展开用 checkbox 法（`.modal-toggle` hidden + `checked` + `.modal`），同时给 `.modal` 加 `position:static;pointer-events:none` 让遮罩与弹窗停在文档流里；指南要写清真实用法推荐 `<dialog>`+`showModal()`。③ countdown 纯 CSS 只渲染：每个数字 `<div class="countdown"><span style="--value:N;--digits:2;">N</span></div>`，span 文本会被隐藏、伪元素滚动列显数，`--digits:2` 补零，真实倒计时必须 JS 每秒 setProperty，别假装纯 CSS 能走。④ status 的 ping/bounce 双点叠放：补丁没有 `inline-grid` 和任意值变体，用 `<span class="grid" style="grid-template-columns:max-content">` 包两个同色点、都写 `style="grid-area:1/1"`，后一个加 `animate-ping`。⑤ 审美硬边界（COMMON_RULES）禁弹跳动画与 status 的 ping/bounce、loading 旋转、swap 翻转冲突——已在 demo-doc.js 加"组件自带功能性状态动画除外"豁免，以后新增组件若再撞这条，先看豁免是否覆盖，不要在组件提示词里重复造规则。
20. **批次④ 再次越权（踩坑 18 重犯，且比批次②更彻底）**：子智能体在 PM 终验**之前**就自行逐件 commit 11 个组件、改公共层 `demo-doc.js`、跑 `build-site-data` 重建 `site/data.js`、**代写本文件收尾文档（c1157cc）**，最后还**自行 `git push` 到 origin/master**（16 个 commit 全部上线、HEAD=origin）。内容事后经 PM 逐件 Read + 截图复核**全部成立、技术改动正确**，但流程红线第三次被破，且一度让 PM 误判"动画豁免本来就有"（实际是子智能体刚改完的）。固化规则：
   - **派工消息必须逐字点名**：禁止 `git add/commit/push`（不是只说"别碰 git"，要明确点名 **push**）、禁止改 `AGENTS.md`/`scripts/`/`assets/` 公共层、禁止跑 `build-site-data`（PM 专属，多工程师并发会互相覆盖）；只读校验可跑。
   - 子智能体**不得代写 AGENTS.md 的进度/踩坑/收尾文档**——技术教训只能写进"自检报告"，由 PM 复核后决定是否入档、如何定性；踩坑 19 的技术内容是 PM 事后核对保留的，不等于子智能体可以自行定档。
   - 发现公共层/脚本确实必须改，只能在交付报告里"**提请 PM 处理**"，由 PM 自己改、自己 commit（如本批 3a0b394）。
   - **PM 验收第一步先查越权**：`git fetch origin` 后 `git log --oneline origin/master..HEAD`、`git rev-list --count origin/master..HEAD`、`git status`，确认是否已有越权提交/推送；发现越权先停下逐件复核内容，再决定保留或 revert，并向用户**显式上报**，不得静默接受。
21. **批次⑤ 区块组件的具体坑（hero/footer/carousel/filter/join）**：
   ① 公共层缺类**按 Tailwind 标准档位整组补**：批次⑤ 暴露 `lg:text-lg~5xl` 响应式字号整组缺失（hero 桌面标题因此停在 24px、比变体还小、层级倒挂），定位类只有 0 档（left-2/right-2/top-2/bottom-2 全缺）、gap-1.5、leading-tight、items-baseline 也缺。缺类不要只补工程师报的单个孤类，要一次把该系列档位补全，否则下一批组件还会卡在同一档位。
   ② **carousel 等横向滚动容器会被 qa-mobile 误报 OVERFLOW**：`.carousel` 自带 `overflow-x:scroll`，卡片在容器内横滑，探针把越界元素记为 offender。判定口径：页面级 `scrollWidth≤390` **且**越界元素全部在 overflow 祖先内（outsideScrollAncestor=0）= **PASS**；不改脚本。商品图区要加内联产品图标（半透明白色线性 SVG、flex items-center justify-center 居中），否则纯渐变块像"占位色块"不像真实商品。
   ③ **类名核验必须 PowerShell `.Contains`，禁止 grep 判"类不存在"**：QC 用 grep 在压缩 CSS 里没匹配到 `items-baseline/left-2/top-2` 就打成"编造类"，实际这三类都在补丁里。压缩 CSS 的 grep 误报率高，一律用 PowerShell `.Contains` 对 vendor 与 utilities-patch.css 核实。
   ④ **响应式分数宽 `sm:w-1/2`/`lg:w-1/3` 补丁未补**：carousel 主成品按静态 `w-1/2` + 三张档变体兜底，指南如实说明；日后补类后把 item 改 `w-1/2 lg:w-1/3` 即实现"手机两张、桌面三张"。
   ⑤ **Lucide 图标网络 502 预案**：内联图标优先取 Lucide（ISC），拿不到网络就手绘同轮廓 path（简洁几何线条、stroke 当前色、零外链），moh.json inspiration 注明借鉴来源；纯图标按钮必须带 aria-label 且语义对得上用途（客服=对话气泡、邮箱=信封、电话=听筒、反馈=留言气泡）。
   ⑥ **filter 选中态是官方机制不是 bug**：单选（radio）选中后其它项自动折叠、选中项呈中性白底标签；多选（checkbox）选中项用主题色实心高亮。指南里要写清，避免用户误以为单选没生效。filter 纯 CSS 只做选中态，真实过滤必须 JS，指南要诚实写。join 输入框必须 `min-w-0 flex-1` 才在窄屏收缩（本次补丁已补 min-w-0）。
22. **批次⑥ 特效组件的具体坑（aura/diff/hover-gallery/mask/text-rotate）**：
   ① **`duration-*` 动画时长类一律内联，不补类**：Tailwind 3 的 `duration-*` 语义是 transition-duration，与 daisyUI 的 animation-duration 语义易混淆；aura/text-rotate 想调速度写 `style="animation-duration:6s"`，指南里写清"不要去找 duration-* 类"。行高同理：`leading-[2]` 任意值写内联 `style="line-height:2"`，不补 leading 档位。
   ② **text-rotate / hover-gallery 静态截图只能看到第一个词 / 第一张图是正常的**（前者是轮换动画瞬间、后者是 hover 切换），成品 desc 要如实写明"静态截图只见首词/首图"，避免用户误以为没生效；这是组件特性不是 bug。
   ③ **margin 档位按需补齐**：批次⑥ 卡在 `mt-5`，已补 mt-0/5/10、mx-2（44ec822）。后续组件再缺 margin 档位照此补。
   ④ **hover-gallery 是 N 张图 = N−1 条感应列**：悬停第几条感应列切到第几张图，最多 10 张，3~6 张手感最好；静态展示必须能直接看到第一张（图区要 aspect-square/video 定高，否则占位块塌成一条线）；触屏无持续 hover，重要角度不能只靠 hover 展示。
   ⑤ **diff-resizer 自带 `resize:horizontal`**（vendor 压缩 CSS 里无空格，PowerShell 搜 `"resize: horizontal"` 带空格会找不到——用 `.Contains("resize:horizontal")`）。纯 CSS 下 diff 静态停在 50%，拖动需 JS，指南诚实写"补一小段 JS"，不内置。
   ⑥ **styleTags 不造孤立标签**：批次⑥ hover-gallery 原写「电商」全站唯一（站点筛选 chip 不显示），PM 改为已有词「商务」；新组件 styleTags 一律用全站已有标签词。
   ⑦ **text-rotate 词数 3~6、每词 2~4 字真实中文动作词**；轮换词是装饰性强调，页面关键信息不能只放在轮换词里（读屏会连读），指南写清。成品大字号用补丁档位 text-5xl/7xl，禁止更大字号窄屏溢出。
23. **批次⑦ 自研增强组件 v3 重做与站点整改轮的具体坑**：
   ① **自研组件（components/<name>/）相对路径是两级 `../../`，不是 daisyui 件的三级 `../../../`**：自研件从 `components/<name>/` 回仓库根正好两级；用错会 404。demo.html 头四行与 body 末脚本引用同理。
   ② **带依赖组件的 CDN `<script>`、自定义 `<style>`、初始化 `<script>` 必须全部放进 `#hero-stage` 内**：demo-doc.js 的「复制成品 HTML」只取 `hero.innerHTML` + 两行线上 CSS 拼自包含文件，放在 hero-stage 外面的脚本/样式复制出去双击跑不起来（chart-card 的 echarts.init、code-block 的 hljs.highlightElement 都因此内嵌在成品区）。提示词里写明 CDN 裸地址。
   ③ **`#moh-prompt`（`<script type="text/plain">`）正文里禁止出现字面 `</script>`（也不要写 `<script src=...>`）**：HTML 解析器不认 type=text/plain，遇到字面闭合标签会提前结束 moh-prompt，轻则提示词截断、重则把后面的 demo-doc.js 一起吞掉（代码面板归零）。CDN 一律写裸 URL，不写标签。
   ④ **组件内交互 JS 禁止依赖 `#hero-stage` 这个容器 id 定位**：「复制成品 HTML」只复制 hero-stage 的 innerHTML，容器本身不在复制结果里——若 JS 写 `document.getElementById("hero-stage")` 再 `root.querySelector(...)`，复制出去的独立文件里 root 为 null、功能静默失效（date-range 预设填充首版即此 bug）。定位要用组件自身元素的 id（id 写在被复制的元素上）、或变体里用 `document.currentScript.parentElement`。验收带 JS 的组件必须真做一次"提取 hero-stage 拼独立 HTML → 双击点按钮"的落地验证，不能只在 demo 页里点。
   ⑤ **等宽字体：vendor 只有 `--font-mono` 变量，没有 `.font-mono` 工具类**（PowerShell `.Contains` 核实）。要用等宽写内联 `style="font-family:var(--font-mono,ui-monospace,Menlo,Consolas,monospace)"`，不要在 class 里写 font-mono（编造类，QC 曾因此打回两轮）。
   ⑥ **qa-mobile 横向滚动误报口径适用于所有 overflow 容器**：除 carousel 外，code-block 的 hljs 高亮 span（在 `pre.overflow-x-auto` 内）同样误报 OVERFLOW。判定口径统一：页面级 `scrollWidth≤390` 且越界元素全部在 overflow 祖先内（逐元素查 `getComputedStyle(ancestor).overflowX ∈ {auto,scroll}` 确认）即 PASS，不改脚本。
   ⑦ **旧 `index.html` + `--moh-*` 变量体系已彻底移除**：5 个自研件重做为三件套后旧 index.html 删除；为旧体系写的 `scripts/check-components.mjs`（查硬编码颜色 / moh- 前缀 / --moh-* 命名空间）随之退役删除——新体系检查由 check-attributions + build-site-data + qa-mobile + grep 类名 + PM 人工 Read 承担。
   ⑧ **图标尺寸档位按 Tailwind 整组补齐**：empty 首版 56px 图标撞上补丁缺 `h-14/w-14`（内联 style 兜底），已整组补 `h-11/w-11（2.75rem）`、`h-14/w-14（3.5rem）`；后续图标尺寸优先用类，不必再内联。
   ⑨ **站点整改轮**：63 个 moh.json description 批量去「搬运自 daisyUI 的 XXX：」前缀，正则 `^搬运自\s*daisyUI\s*的[^：:]*[：:]\s*` 一次全命中（以英文类名/变量开头的少数条目手工润色成中文功能开头）；63 个 demo.html 删 footer 有带/不带 `<!-- 来源：每页仅在页脚声明一次 -->` 前置注释两种模式，先干跑确认全匹配再实写；`build-site-data.mjs` 分类精确匹配 bug——分类规则必须把完整词「数据展示」放进 tags 匹配（原漏完整词致 26 个组件误归「基础」，站点计数长期失真，修复并重做 5 自研件后分类为 基础1/表单16/反馈11/导航12/数据展示28）；`.site-filters` 手机断点必须 `flex-wrap:wrap`（nowrap+overflow-x:auto 在 390px 把靠后的分类 chip 挤出屏外）。
24. **批次#47 组件 AI 指令分发（形态 A）与获取卡布局的具体坑**：
   ① **获取卡布局（`.doc-get`）**：原 `.doc-hero-action` 无容器无背景、操作按钮与组件自身按钮同套 `btn` 语言、首尾相连易混；方案=独立「获取卡」（淡紫卡、圆角 12、primary 18% 边框、组间 dashed 分隔线、「推荐」小 pill），由 `demo-doc.js` 的 `buildGetCard` IIFE 自动重组 `.doc-hero-action`：组一「让 AI 帮你做〔推荐〕」=`复制 AI 提示词`（保留原 promptBtn 节点，事件仍在）+`复制链接发给 AI`（`.doc-get__link`，得到 `BASE/ai/<组件名>.html`）；组二「自己拷贝代码」=`复制成品 HTML`；每组一句 tip；最后 `action.innerHTML=""` 清旧按钮行与 hint；结构与标准不符时静默 return（不做坏页面）。样式在 `demo-page.css` 的 `.doc-get` 系列；`?embed=1` 缩略图必须隐藏获取卡（只留成品与变体）。
   ② **弹窗入口 390 溢出**：components.html 弹窗头部「复制链接发给 AI」+←→✕ 同行在 390px 溢出被裁；修法=`nav` 换第二行、ai-link 靠左、翻页/关闭靠右（site.css @media760）。**关键陷阱：整窗 `--window-size=390` 截图实际 layout viewport=504，溢出判定一律以 `qa-mobile` 真实 390 iframe 为准（踩坑 12 重犯）。**
   ③ **AI 页生成 `scripts/build-ai-pages.mjs`**：`#hero-stage` 用 div 标签栈提取（跳过 `<!-- -->`、支持嵌套，禁止用 innerHTML 截断）；COMMON_RULES 从 `demo-doc.js` 正则 `var COMMON_RULES\s*=\s*(\[[\s\S]*?\])\.join\("\\n"\);` 提取（改动 19–32 行结构前先确认正则仍命中）；AI 页内联 `<script>` 里参考结构文本用 `JSON.stringify(...).replace(/</g,"\\u003c")` 转义，避免脚本提前闭合；`ai/<名>.html` 内联 `pre.fence{overflow-x:auto}` 会被 qa-mobile 误报 OVERFLOW（口径内 PASS，同 carousel/code-block）；AI 页 `.md` 一律 UTF-8 写（PowerShell `Get-Content` 默认 ANSI 显示乱码是显示问题、不是文件问题，用 Read 工具核验）。
   ④ **qa-copy 探针**：`node scripts/qa-copy.mjs ai/<名>.html` 用 Edge headless + 同源 iframe 探针真点「复制 AI 指令」按钮，7 项勾选 + `COPY_OK` + exit=0；file:// 跨目录 iframe 必须 `--allow-file-access-from-files`；先 screenshot 预热再 dump-dom（隔离世界点不动主世界监听，踩坑 13）。
   ⑤ **撤旧主题 AI 页**：`site/ai/mo-dark.html`/`mo-light.html` 是旧 `--moh-*` 主题体系的 AI 页，已 `git rm`；#46 主题改完整页面案例后用同脚本重生成，不要手工维护。
25. **批次#46 主题层改完整页面案例（批次 A/B/C）的具体坑**：
   ① **推送后旧入口 404 是验收盲区**：批次 A/B 推送后，旧 themes.html 卡片墙/弹窗 iframe 写死已删除的 `preview.html`，用户线上点弹窗 404；PM 当时只验了新 demo.html 直链 200，没走旧页面的所有引用入口。**教训：改版删除/替换文件后，必须 grep 全仓库对旧路径的引用，旧页面入口（弹窗 iframe/卡片链接）也要逐个点；直链 200 ≠ 入口可用。**
   ② **新主题 tokens.css 是 `[data-theme="名"]` 选择器**，不是整页换 link href：html 不挂 `data-theme` 就不生效；预览/换肤只改容器 `dataset.theme`，站点 nav/footer 用的是 `--moh-*` 旧体系（site.css），不能整页换肤。generator.html 据此整页重写：沙箱容器 `#gen-stage` 挂 data-theme + head 引 16 个外部 tokens.css link（官方 caramellatte/silk 无 tokens，只在 daisyui-themes.css 内）。
   ③ **官方内置主题（caramellatte/silk）无 tokens.css**：复制/下载 tokens 按钮禁用并显示"内置主题 · 无 tokens"，AI 指令走"无需额外文件"分支（引 daisyui.css + daisyui-themes.css，挂 data-theme 即可）；色块条用 daisyUI 官方 oklch 色值 FALLBACK 兜底。
   ④ **圆角三变量按真实比例联动**：tokens.css 里 `--radius-box .625rem / --radius-field .375rem / --radius-selector .5rem`，微调 slider 映射 field=box×0.6、selector=box×0.8；主色微调按对比度（hex 与 #fff 对比度≥4.5 用白 content，否则深色），且只内联覆盖预览容器、不写进复制文件，切主题时重置。
   ⑤ **主题 AI 页（build-ai-pages.mjs 扩展）**：主题无 `#moh-prompt`/`#hero-stage`，另建 `buildThemeDocs` 模板（简介/来源许可/换肤指令/完整 tokens.css 原文 css 围栏/整页案例链接/不硬编码颜色提示）；单页模式参数先判是否命中主题名（`node build-ai-pages.mjs mo-dark` 或 `--theme mo-dark`），主题单页跳过组件循环、不重建索引；**H1 标题坑**：二创主题 title 自带"（深色）/（浅色）"分组括注，直接拼 `（name）` 会出"墨夜（深色）（mo-dark）"双括号，要先 `.replace(/（(?:深色|浅色)）\s*$/,"")`（正则分组括号不能漏，写成 `（深色|浅色）` 会只删半括号留残字）；title 已含 `（name）` 的（silk/caramellatte）不重复追加。
   ⑥ **18 iframe 卡片墙截图 virtual-time-budget 要小**（5000–8000，20000 会挂起不出图）；手机弹窗按钮栏两列 `flex:1 1 calc(50%-4px)` 会让"查看源码/内置主题"文字 ellipsis 截断，最终方案 `flex-direction:column` 全宽堆叠 + iframe 高 `calc(100vh-250px)`。
   ⑦ **attributions 溯源页语义**：主题"来源类型"用 data.js 的 `group`（二创/收录）字段，不能用 `origin==="third-party"` 统一标"二创"（收录外部色板与灰墨二创是两回事）；originText 的 chip 文案加参数区分（收录/二创/组件搬运）。
   ⑧ **Apache-2.0 合规（tokyo-night，全库唯一非 MIT）**：① 目录附 `LICENSE` 全文（Apache 官方 2.0.txt）；② moh.json `source.changes` + README 标注"修改后再分发"（色板映射 daisyUI 变量、圆角调整、整页案例为新写）；③ tokens.css 头注释与 README 保留 `© Folke Lemaitre` + 上游地址；④ 上游无 NOTICE 则不附；⑤ demo 为虚构数据、无金融机构品牌标识。license-policy.md 第 5 节与 attributions.html 同步写明。
26. **主题扩量期 · 主题 AI 指令防卖家秀（用户硬要求："不能只做卖家秀"）**：
   ① **问题**：最初 `buildThemeDocs` 的主题 AI 指令只给"引两行 CSS + 挂 data-theme 换肤 + 一个在线 demo.html 链接"，**不含整页结构**。用户复制纯文本喂给不能联网的 AI 时，AI 只会换主题色、无法复现整页（如 luxury 腕表整页），偏差极大；组件侧有 `#hero-stage` 参考结构、主题侧缺失，是不对称的。
   ② **修法（build-ai-pages.mjs 已升级，PM 改公共层）**：`buildThemeDocs(t, commonRules)` 现在内嵌——完整 demo.html 整页源码（`loadThemeDemoHtml` 读 `themes/<slug>/demo.html`，正则把相对 `../../vendor/` 替换为 `${BASE}/vendor/` 绝对 URL，存成 .html 双击即跑）+ moh.json 的 `aiNotes` 视觉红线（`loadThemeAiNotes` 直接读 moh.json，不依赖 data.js 透传）+ 通用 COMMON_RULES。一键复制 promptText 的小节锚点对齐组件：`【场景】`→`【这套主题必须守住的视觉特征】`→`【怎么引入主题】`→`【精确规格】`→`【参考结构】`，末尾 commonRules。md 分"用法一：照着整页做同款（含完整源码，推荐）/ 用法二：只换肤"。
   ③ **每套主题 moh.json 必须写 `aiNotes`（字符串数组，6~8 条）**：这套主题"换业务也必须守住"的视觉特征，要具体可执行（如"主按钮金底配近黑文字，覆写 --btn-color/--btn-fg""配图只用 currentColor 单色 SVG""390 顶栏自然折行不溢出"），不写"要好看/要高级"空话；样板见 `themes/luxury/moh.json`。check-attributions 只校验必填（audit/styleTags），不拒绝额外字段，加 aiNotes 安全。
   ④ **防卖家秀验收（不能只看脚本跑通）**：a) `node scripts/qa-copy.mjs ai/<名>.html` 必须 7 项全过（开场白/场景规格/参考结构/审美硬边界/交付要求/无 unicode 残留/script 配对）；探针按组件锚点精确匹配 `【场景】`+`【精确规格】`、`【参考结构】`，主题措辞改了会两项不过；b) 从生成的 .md「### 完整整页源码」围栏抽出整页 HTML 存独立文件（只引线上绝对 URL CSS），Edge 截图必须与原 demo 1:1 一致（luxury 实测逐像素一致）；c) `ai/` 与 data.js 仍只由 PM 跑 build-site-data + build-ai-pages 生成，工程师禁跑。
   ⑤ **buildHtml 顺带修的两处**：主题"完整教程"按钮原硬编码 `${BASE}/components/...`（主题应指 themes/），改为 `c.demoUrl || ...`（主题 adapter 已传 demoUrl）；主题 `<title>` 因 title 已含 `（name）` 再追加 englishName 会出"奢金（luxury）（luxury）"双括号，改为 `c.title.includes(\`（${englishName}）\`) ? c.title : ...`。
   ⑥ **整页 demo.html 是 AI 复现的唯一来源**：升级后它会被原样内嵌进 AI 指令，所以必须是完整成形、能 1:1 还原的整页（不是半成品/色块/骨架），这是主题扩量批次的最高质量红线。
27. **主题扩量第二批（J/K/L 共 15 套，30→45）的具体坑**：
   ① **主题明暗一律以 vendor 实测 `color-scheme` / base-100 亮度为准，不信选题表与想象**：cyberpunk 在 vendor 里是 `color-scheme:light`（荧光黄 base-100 + 纯黑字、0 圆角），不是以为的深色；business 实为近黑蓝灰深色、coffee 实为深棕深色，选题表都误标（已改）。开工前先 grep `[data-theme=名]` 的 `color-scheme` 与 base-100 再定明暗和业务。
   ② **对比度脚本不要双重 gamma**：oklch 转 linear RGB 后不能再对 linear 值套一次 sRGB 反伽马，否则亮度被压、对比度虚高（garden 自检误报 13.12:1，QC 独立复算实际 4.48:1 临界）。报数前用白/黑=21:1 等已知参照 sanity check；临界（4.48）就加深，garden 用 `color-mix(in oklab, accent 90%, base-content)` 到 5.30:1。
   ③ **中亮 error 别用软徽章/幽灵按钮"规避"对比度**：business 的 error 是 oklch 51.6%，深红字压近黑的软徽章仅 2.55:1、幽灵红字 2.83:1 都不达标；正确做法是**实心底配浅字**并用 color-mix 加深（`.err-dark { --badge-bg/--btn-color: color-mix(in oklab, var(--color-error) 90%, var(--color-base-100)); }`）到 4.99:1。先实测该色在"深字浅底 / 浅字深底"哪个方向达标，别默认用软样式。
   ④ **自定义类名避开 daisyUI 组件类**：`.stat`/`.avatar`/`.alert` 都是真实组件类（自带 padding/布局），自定义块撞上会被莫名缩进/套样式——本批分别改名 `.bio`/`.oa-avatar`/`.has-alert`。新增自定义类一律对 vendor 与补丁用 `.Contains` 全量复核。
   ⑤ **二创 tokens 用 hex 或 oklch 都合法**（mo-gov 系 hex、mo-command 用 oklch）；但 aiNotes/README 承诺的每个色值必须在 tokens.css 真实存在——mo-kiosk 提示词写了说明字 `#6B5844`，tokens 里却没有、demo 实际接成抹茶绿，靠新增 `--color-neutral:#6B5844` 才闭环。提示词、tokens、demo 三处必须一致（防卖家秀）。
   ⑥ **同站主题品牌名不许撞名**：garden 用了"青禾农庄"，emerald 原名"青禾储蓄"，两个"青禾"并列显敷衍；emerald 整套改名「翠盈储蓄 GREENWALLET」（demo/moh/README 共 11 处，grep 确认"青禾"0 残留并重截图）。定品牌名前先全库 grep 已有中文名。
   ⑦ **横滑条 qa-mobile exit=1 口径扩到所有横向导航**：mo-kiosk 390 下左分类栏退化为顶部 `nav.kcats{overflow-x:auto}` 横滑条，越界 button.kcat 报 OVERFLOW 但页面级 scrollWidth=390、越界元素全在 overflow 祖先内——与 carousel/code-block 同口径 PASS，**不改成折行**（折行违背移动端点单横滑分类交互，也挤占菜品区）。
   ⑧ **generator 试玩层分组机制**：OFFICIAL_THEMES 35 套内联（色板用脚本从 vendor 提取，非手填）；整页组取 `DATA.themes`（isPlayOnly=false），仅试玩组 = 35 官方剔除已做整页（isPlayOnly=true），data.js 重建后整页组自动增、仅试玩组自动收缩，**无需手改 generator**；官方内置无 tokens，复制/下载 tokens 按钮禁用并提示"内置主题·无 tokens"，仅试玩组 AI 指令只给换肤步骤、不含 demo/themes 链接。
   ⑨ **防卖家秀二创路径已验证**：hasTokens 主题的 tokens.css 由 `loadThemeDemoHtml` 内联为 `<style>`（1~2KB），官方内置走线上 daisyui-themes.css；本批 15 套 qa-copy 7 项全过，抽 mo-kiosk（内联）、cyberpunk（线上）从 .md 围栏抽独立 HTML 渲染与原 demo 1:1。
28. **规则联动改造（规则装配器 + 组件反向入口）与旧 18 套主题补 aiNotes 的具体坑**：
   ① **规则不再是"一键复制整段"的静态页，而是装配器**：`site/rules.html` 四步——页面类型 4 卡 radio（通用/表格/表单/数据看板）→ 主题下拉（45 套，选中后实时 fetch `themes/<slug>/moh.json` 读 aiNotes，不经 data.js 透传）→ 组件区（场景 core 预勾选 + 配套 more 可加 + 全 68 组件下拉）→ 26 项自检清单勾选；textarea 实时装配、一键复制；URL 参数 `?scene=&theme=&comps=&selfcheck=` 可预选（themes.html 弹窗"配套规则"按钮、组件获取卡链接都走它）。
   ② **规则正文全部 fetch 原文拼接**：`rules/mo-rules-zh.md` 主规则 + `rules/scenarios/{table,form,dashboard}.md` 三场景细则 + `rules/selfcheck.md`；stripMdHead 只去标题，不做节选。改规则只改 rules/ 原文，装配器零改动。
   ③ **场景映射必须是唯一真相源**：`assets/scene-map.js` 暴露 `window.MOH_SCENE_MAP = { scenes, sceneOf(short) }`，优先级 table→form→dashboard、先 core 后 more、未命中 generic；rules.html 与 `assets/demo-doc.js` 共用它，不要在两处各写一份映射。demo-doc.js 获取卡组一动态加载 scene-map 并注入「配套规则」链接（daisyui 件三级路径、自研件两级路径自动判断，onerror 兜底 generic），**68 个组件 demo.html 零改动**。
   ④ **headless 冷加载竞态**：scene-map 是异步 `<script>` 注入，Edge headless 首次 8 秒 virtual-time 预算时获取卡可能还没出现"配套规则"，12 秒稳定；真实浏览器无影响。验收时给足预算或多截一次，别误判链接丢失。
   ⑤ **旧 18 套主题 aiNotes 缺口（llms 已承诺、实际没给）**：踩坑 26 上线防卖家秀时只给新主题写了 aiNotes，最早 18 套（10 二创 + 8 收录）的 moh.json 没有该字段，`buildThemeDocs` 只输出一句兜底"严格照整页源码…不要自由发挥"，而 llms.txt 已写"每套含主题视觉红线"——承诺与实际不符。补法：4 工程师并行只改 moh.json（每套 6~8 条，必须 Read demo+tokens/官方主题 grep vendor 变量后提炼），PM 逐字通读 18 套全文 + 对关键色值实测 vendor 核对（silk 的 primary/secondary/accent 同为 `oklch(23.27% .0249 284.3)`、primary-content 是浅豆绿 `oklch(94.22% .2505 117.44)`；caramellatte 的 primary 是纯黑 `oklch(0% 0 0)` 不是棕色）。补完 45 套全覆盖，`build-ai-pages.mjs` 重建后兜底句消失。
   ⑥ **data.js 不含 aiNotes，rules.html 直接 fetch moh.json**：补 aiNotes 只需 PM 跑 build-ai-pages 重建 ai/ 与 llms，**不必跑 build-site-data**；验证 md 红线段的锚点是 `### 换成你自己的业务时必须守住的视觉特征`（主题模板），不是组件式的【】标题，数条数按这个锚点。
   ⑦ **llms.txt 的 Optional 描述由 build-ai-pages.mjs 模板生成**：规则页口径从"组件背后的排版与审美规则"改为"AI 排版规则装配器（场景+主题+组件，支持 URL 参数预选）"，改脚本后重建；README 规则段同步改为装配器口径（rules/ 原文构成、四步、URL 预选示例、组件反向入口），待办里"规则页节选改原文"随装配器上线关闭。

---

## 11. 当前进度

- 已完成：vendor 底座；**13 个 daisyUI 表单组件 v3「提示词三件套」**（button/input/checkbox/select/textarea/radio/toggle/range/file-input/rating/otp/fieldset/validator）；**批次② 11 个导航布局组件完成并推送**（navbar/menu/drawer/megamenu/breadcrumbs/tab/steps/dock/pagination/link/fab）；**批次③ 18 个数据展示组件完成并推送**（card/table/list/stat/timeline/chat/avatar/badge/indicator/kbd/divider/mockup-browser/mockup-code/mockup-phone/mockup-window/radial-progress/skeleton/stack）；**批次④ 11 个反馈覆盖层组件完成并推送**（alert/toast/modal/collapse/dropdown/tooltip/loading/progress/status/swap/countdown）；**批次⑤ 5 个区块组件完成并推送**（hero/footer/carousel/filter/join，成品：SaaS 首屏+电商页脚+商品横滑卡+电商筛选条+电商搜索框，全部 5 变体+中文教程+提示词）；站点共 **63 个 daisyUI 组件**、5 分类（基础/表单/反馈/导航/数据展示）；25 个重复旧组件下线；展示站三入口与全局来源声明；移动端 390 自检脚本；公共层补丁 `assets/utilities-patch.css`（w-5/gap-0、border 单边、max-w-3xl/mt-auto/place-content-center/line-through/h-44/w-28/pt-1/pt-12/pt-14/pb-6/avatar-group 负边距、grid-flow-col/auto-cols-max/animate-ping/animate-bounce、批次⑤ 分数宽/大容器/响应式字号 lg:text-lg~5xl/定位 left-2 right-2 top-2 bottom-2/gap-1.5/leading-tight/items-baseline/min-w-0/truncate 等）。
- 批次④ 关键教训（已入踩坑 19）：① toast 九宫格 middle/center 的 `--toast-x/y:-50%` 位移变量在静态流里致重叠，position:static 之外还要清零位移；② modal 静态展开 checkbox 法 + `position:static;pointer-events:none`，真实用法指南推荐 `<dialog>`+showModal；③ countdown 纯 CSS 只渲染（--value/--digits，span 文本隐藏），真倒计时必须 JS；④ status ping/bounce 双点用 `.grid`+内联 grid-area 叠放（补丁无 inline-grid/任意值变体）；⑤ COMMON_RULES 禁弹跳与官方功能性动画冲突，已加"功能性状态动画除外"豁免。
- **批次④ 流程教训（已入踩坑 20）**：子智能体在 PM 终验前越权 commit+push 16 个 commit、改公共层、代写收尾文档；内容经 PM 逐件复核全部合格故保留上线，但红线重犯，后续派工必须逐字点名"禁 push/禁改 AGENTS、公共层/禁跑 build-site-data"，PM 验收先查 git log 越权。
- **批次⑤ 教训（已入踩坑 21）**：公共层缺类要按 Tailwind 标准档位整组补（本次响应式字号 lg:text-lg~5xl 一组全缺）；carousel 等横向滚动容器会被 qa-mobile 误报 OVERFLOW（scrollWidth≤390 且越界元素全在 overflow 祖先内即 PASS，不改脚本）；类名核验必须 PowerShell `.Contains`，grep 压缩 CSS 会误判"类不存在"（QC 曾把 3 个真实存在的类误打回）；响应式分数宽 sm:w-1/2/lg:w-1/3 未补，carousel 用静态 w-1/2 兜底、日后补类升级；Lucide 图标网络 502 时按预案手绘同轮廓并注明 inspiration。
- **批次⑥ 已完整闭环并推送**：**daisyUI 官方 68 个组件全量搬运完成**（本批 5 个特效 aura/diff/hover-gallery/mask/text-rotate，成品：定价卡光晕+改版前后对比+电商商品卡多角度图+团队头像形状+ SaaS 首屏标语轮换，各含多变体+中文教程+提示词），经 4 工程师+2 QC 制作、PM 逐件终验后逐个 commit 并整批推送；站点 **68 组件/10 主题/5 分类**。公共层补丁三次：38c23d4（text-7xl/8xl/9xl、w-60/max-w-60、justify-items-center、teal/blue 调色、orange500/600、red800）、44ec822（margin mt-0/5/10、mx-2）。教训已入踩坑 22。
- **站点整改轮（用户挑问题后拍板，本地完成待推送）**：① 63 个 moh.json description 去"搬运自 daisyUI 的 XXX"前缀（7 条手工润色，check-attributions 79 全合规）；② 63 个 demo.html 整段删 footer 来源声明（来源只在组件库顶部全局声明一次 + 溯源页，README 来源块保留）；③ components.html 顶部声明改写 + 新增「怎么用这个组件库」4 步真实使用说明（工具箱非模板、不用全用、首选复制 AI 提示词、底座只引一次两行 CSS、复制成品 HTML 双击即见）；④ 弹窗底部按钮栏整条删除（查看原版/下载代码/新窗口打开三按钮全删，连带清 toast/copyText 死代码）；⑤ attributions.html 组件表加「原版地址」列 + 动态计数、note 去写死数字；⑥ 首页组件库卡片措辞中性化；⑦ 修复 build-site-data 分类 bug：数据展示规则漏完整词「数据展示」致 26 个组件误归「基础」（5 自研件重做后最终重建分类为 基础1/表单16/反馈11/导航12/数据展示28）；⑧ site.css 手机断点 .site-filters 改 flex-wrap 折行（原 nowrap+overflow-x:auto 在 390px 把导航/数据展示 chip 挤出屏外）。
- **批次⑦ 5 个自研增强组件 v3「提示词三件套」重做完成（本地待推送）**：chart-card（ECharts 5 CDN，折线/柱状/环形/空态，颜色读 --color-* 主题变量、240px 定高容器+role=img）、code-block（highlight.js 11 CDN，不引官方主题 CSS，.hljs-* 配色走 daisyUI 变量，JS/Python/Terminal/长行横滚四形态）、date-range（零依赖，join 拼两个原生 date input +「至」分隔 + 今天/近7天/近30天/本月 aria-pressed 预设 + 查询/重置，本地时区格式化不用 toISOString）、drag-sort（原生 HTML5 drag + 键盘 ↑↓ + aria-live 播报，旧版 `after===false||true` 恒真 bug 已修，grip 用内联 SVG）、empty（零依赖纯 CSS，标准居中/搜索无结果/表格内嵌紧凑横排/网络错误重试四形态，stroke=currentColor 零 emoji 零外链）；QC 打回 font-mono 编造类（vendor 只有 --font-mono 变量无 .font-mono 类，改内联 var）；**PM 终验又修复并核实：date-range 预设 JS 误依赖 `#hero-stage` 容器定位导致「复制成品」独立文件里预设全部失效（改为直接按元素 id 定位，独立文件落地点击验证通过）；补公共层 h-11/w-11、h-14/w-14 图标档位**；旧 index.html 已从磁盘删除（git 跟踪记录删除，build-site-data 入口 demo.html 优先）、旧体系脚本 check-components.mjs 退役；data.js 重建后 68 组件/10 主题/5 分类（基础1/表单16/反馈11/导航12/数据展示28），check-attributions 79 合规，5 件桌面/embed/手机/自包含/弹窗 PM 全部亲验。教训已入踩坑 23。
- **#47 组件 AI 指令分发（形态 A）全量完成（本地待推送）**：① `build-ai-pages.mjs` 全量生成 **68 套 `ai/<名>.md/.html`**（内容与详情页「复制 AI 提示词」逐字一致：开场+【场景】【怎么排】【精确规格】+【参考结构】单成品+【审美硬边界】+【交付要求】）+ 根 `llms.txt`（按分类索引 17KB）+ `llms-full.txt`（全量拼接 378KB）；② **获取卡布局全量生效**（demo-doc.js `buildGetCard` + demo-page.css `.doc-get`，68 页共享注入，详见踩坑 24）；③ 校验小队全量回归全绿：68/68 `qa-copy` COPY_OK（日志实证）+ 18 组件 3 AI 页 390 全口径通过（carousel/代码块为 overflow 祖先内误报）+ 36 张获取卡三视口截图全 PASS（内容缺陷 0）；④ 站点入口补 AI 用法：components.html「怎么用」第 2 步扩写（复制链接发给 AI → ai/&lt;组件名&gt; 网址）、index.html 首页「怎么用」卡②更新；⑤ README 组件小节纠错（30→68 个、index.html→三件套、去 moh- 前缀）+ 新增「④ AI 指令分发（llms.txt）」小节 + 自检表同步（qa-mobile/qa-copy）；⑥ 撤旧主题 AI 页 `site/ai/mo-dark.html`/`mo-light.html`（git rm，#46 重做后重建）；⑦ 本条目登记。**提交推送一律等用户明确说"推送"，建议分 commit：入口样式与站点文案 → AI 产物（68+2）与撤旧页 → README/AGENTS**。
- **#46 主题层改完整页面案例（批次 A/B）已完成并推送（cb6fdd7）**：旧 10 套色块 preview 全部废弃，重做为 **18 套「daisyUI 5 `[data-theme]` tokens + 一个真实业务整页 demo.html」**——10 套灰墨二创（mo-dark 数据看板/mo-light 计费控制台/mo-classic 用户后台/mo-gray CRM/mo-pastel 教育后台/mo-slate 文档中心/mo-mood 开发者控制台/mo-brutal 粗野主义落地页/mo-neon 活动页/mo-zhongshi 茶叶电商）+ 8 套收录（dracula-oss/catppuccin/nord-dark/tokyo-night/rose-pine/solarized-light + daisyUI 官方 caramellatte/silk）；每套零依赖零外链零 JS，demo.html 整页由 daisyUI 组件拼装；收录主题按各自许可证登记（唯一非 MIT 为 tokyo-night Apache-2.0）。
- **#46 批次 C 站点层收尾（第一阶段已推送 f24d789；generator/AI 页/许可证本地待推送）**：① build-site-data.mjs 适配主题扫描（解析 palette、entry/dark/group/hasTokens 字段，官方无 tokens 主题返回空 palette）；② site/themes.html 整页重写为 1280×900 整页 iframe 缩放卡片墙 + 明暗/来源双维筛选 + URL 参数同步 + `?open=<slug>` 弹窗 + 复制 AI 指令/复制 tokens/新窗口/查看源码按钮（修复线上旧 preview.html 404）；③ site.css 手机弹窗按钮全宽堆叠；④ index.html 统计改 18 套整页；⑤ **generator.html 整页重写为 data-theme 沙箱**（18 主题卡、点击真换肤、主色/圆角微调只作用预览容器、复制/下载 tokens、官方内置主题禁用、复制 AI 指令与 themes.html 同源文案）；⑥ **build-ai-pages.mjs 扩展生成 18 套主题 AI 页**（ai/ 68→86 套，新增 36 文件；llms.txt 加「主题（18）」分区、llms-full.txt 追加主题全文，组件 68 套 0 回归）；⑦ Apache-2.0 许可证义务落实（tokyo-night LICENSE 全文/署名/修改标注、license-policy 第 5 节、attributions 说明与收录 chip）。PM 终验：generator 五态实测（mo-dark/mo-light/tokyo-night 真换肤、silk 禁用、主色圆角微调、站点框架不受影响）、390 PASS、复制按钮真点（file:// 下 fetch tokens 友好兜底）；AI 页 mo-dark/tokyo-night/silk 抽查、18 主题文件数、llms.txt 18 条、桌面+390 渲染、check-attributions 87 合规、0 越权 commit。教训已入踩坑 25。
- **#46 主题扩量第一批（12 套，18→30）已完成并推送（7e67c2e 等）**：批次 E luxury 样板（黑金腕表「时计堂 HELIOS」，用户认可"就按这种标准"）+ 防卖家秀机制升级（build-ai-pages 主题模板内嵌完整 demo.html 整页源码 + moh.json `aiNotes` 视觉红线 + COMMON_RULES，见踩坑 26）+ F/G/H 共 11 套（F 官方 corporate/forest/black/abyss；G 外部收录 kanagawa/gruvbox/github-light/everforest；H 二创 mo-gov/mo-press/mo-kids）；30 套主题 AI 页 + data.js + llms 已上线。
- **#77 generator 试玩层 + #80 主题扩量第二批（15 套，30→45）已完成并推送（用户确认全要，不摘取）**：① #77 generator 改 fullThemes/playThemes 双组（内联 OFFICIAL_THEMES 35、色板脚本从 vendor 提取非手填，整页组取 data.js、仅试玩组自动剔除已做整页，浅/深筛选、补 7 个漏引 tokens link、仅试玩组禁用 tokens 复制，见踩坑 27⑧）；**窄屏（≤860px 单列布局，预览区在卡片下方）点击主题卡"没反应"是观感问题而非换肤失效——修法：picker 点击后仅在 `matchMedia('(max-width:860px)')` 且主题确有变化时 `stage.scrollIntoView({behavior:'smooth'})` 把预览区带入视野，宽屏左右分栏不滚动**；② 第二批 J 组 5 套官方内置（garden/lofi/wireframe/synthwave/cyberpunk）、K 组 6 套官方内置（cmyk/cupcake/dim/emerald/business/coffee）、L 组 4 套灰墨二创（mo-photo/mo-fleet/mo-command/mo-kiosk），均经工程师 + 独立 QC + PM 逐件终验；PM 亲修 emerald 改名「翠盈储蓄」、business aiNotes 与 .err-dark 实心加深对齐（见踩坑 27③⑥）；③ 本地收尾已完成：data.js 重建（**主题 45 套**）、`ai/` 共 **113 页**（68 组件 + 45 主题）、llms 更新，**15 套 qa-copy 7 项全过**、抽 mo-kiosk（tokens 内联）/cyberpunk（线上底座）独立整页渲染与原 demo 1:1、check-attributions 114 合规、qa-mobile 全过（mo-kiosk 横滑条口径，见踩坑 27⑦）；④ 选题表三处明暗误标（cyberpunk 实为亮色、business/coffee 实为深色）已改；⑤ 已按**一个主题一个 commit** 提交并推送（15 个主题 commit 各含 themes/ + ai/ 两文件，外加 generator 试玩层、data.js/llms 索引、选题表/AGENTS 文档）；`.sessions/` 运行痕迹、`themes/mo-*/preview.html` 旧脏文件未入库；推送统一带 `$env:GIT_CONFIG_GLOBAL='NUL'` 前缀，推完 `git rev-list --count origin/master..HEAD` 必须为 0。
- **首页深色玻璃 3D 风格改版已完成并推送（0c03c45）**：参考用户选定的 neon-glass 3D 风格，index.html 改为深色玻璃质感（玻璃卡片、立体层次、克制光效），首页文案按「去 AI 味」原则重写、数字与现状（68 组件/45 主题/113 AI 页）核对更新，README 同步。
- **规则联动改造两步已完成并推送（c4ac1af + edd1a87）**：① rules.html 从静态规则页改为**规则装配器**（四步：页面类型→主题下拉 fetch moh.json aiNotes→组件区 scene-map 预勾选→26 项自检，实时装配、URL 参数 `?scene=&theme=&comps=&selfcheck=`，themes.html 弹窗加「配套规则」按钮）；规则原文拆为 rules/ 主规则 + scenarios/ 三场景细则 + selfcheck.md，全部 fetch 原文；② 新建 `assets/scene-map.js` 唯一真相源，demo-doc.js 获取卡组一动注入「配套规则」反向链接，68 个组件 demo.html 零改动。详见踩坑 28①~④。
- **批次 M：旧 18 套主题补 aiNotes 视觉红线已完成（本地待推送）**：最早 18 套（10 二创 + 8 收录）moh.json 缺 aiNotes 致 AI 页红线段只有兜底句；4 名工程师按 6~8 条/套补齐（均 Read demo+tokens 提炼，官方两套 grep vendor 变量），PM 逐字通读 18 套全文 + 实测 vendor 核对关键色值；check-attributions 114 合规，build-ai-pages 重建后 45 套 aiNotes 全覆盖、兜底句清零，抽 mo-dark/tokyo-night/silk/mo-brutal 四套 qa-copy 7 项全过；同步更新 build-ai-pages.mjs 的 llms 规则描述（装配器口径）、README 规则段与目录结构、待办 #30 关闭。详见踩坑 28⑤~⑦。
- 待办（PM 已规划，按批次推进）：**68 组件三件套 + 45 套主题整页案例（aiNotes 全覆盖）+ 主题/组件 AI 指令分发（113 套 ai/）+ 规则装配器（规则与主题/组件联动）均已完成**。后续候选：theme-controller 主题切换器（随主题层，generator 已覆盖选择器核心，可评估是否还需独立 controller）、calendar 走「带依赖」标签、#28 弹层焦点陷阱、#32 ux-checklist 制度化、官方其余仅试玩主题（fantasy/acid/aqua/retro 等）是否继续做整页。**每批开工前先翻竞品，按 §8 多智能体流程做。**

---

## 12. 卡住三问（硬撞之前先停下）

1. 这事是不是**根本不该做**（方向错，例：继续打磨色块）？
2. 有没有**现成轮子 / 更优解**？
3. 是不是**卡在某条实现路径**上，该换通道？

卡太久或方向不清，停下来回报 PM，不要在低价值方向上继续投入。
