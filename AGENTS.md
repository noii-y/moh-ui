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
4. **来源只声明两次**：展示站顶部全局声明一次、每个组件详情页页脚声明一次；卡片上不挂重复徽章。
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
  <name>/                    少量自研增强（chart-card/code-block 等）
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
6. `footer.doc-source`：来源声明，**每页只在此处一次**（组件样式基于 daisyUI x.x（MIT，© 2020 Pouya Saadeghi）+ 原页链接 + 灰墨整理以 MIT 开源）。

### 4.2 README.md（给进仓库看代码的人）

固定小节：标题 + 来源引用块 → 它是什么 → 怎么用（三步，含两行 CSS）→ 常用写法速查表（表格）→ 使用要点（给 AI 与新手）→ 兼容性。

### 4.3 moh.json（溯源元数据）

照 `button/moh.json` 填：

- `name` 必须为 `daisyui-<name>`（全局唯一）；
- `type: "component"`、`title`、`description`（中文，写清覆盖哪些变体）；
- `styleTags` 非空数组（决定站点分类，如 `表单` `基础组件` `反馈` `导航` `数据展示`）；
- `source`：`origin:"third-party"`、`upstream:"daisyUI"`、`url` 官方组件页、`license:"MIT"`、`changes` 写清做了什么改造；
- `dependencies: []`（纯 CSS 组件应保持零依赖）、`files:["demo.html","README.md"]`、`verified:true`。

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
- `node scripts/check-components.mjs`：组件结构检查（只读，工程师可跑）。
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
- 成品是真实场景；文案无颜色名；来源只声明一次；无自我辩护；教程不跳 GitHub；无重复变体。

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
- 子智能体**不要运行 `node scripts/build-site-data.mjs`**（它会写 `site/data.js`，多个工程师并发会互相覆盖）；该脚本只由 PM 在整批完成后统一跑。只读校验 `check-attributions.mjs` / `check-components.mjs` 与 `qa-mobile.mjs` 可自行运行。
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

---

## 11. 当前进度

- 已完成：vendor 底座；**13 个 daisyUI 表单组件 v3「提示词三件套」**（button/input/checkbox/select/textarea/radio/toggle/range/file-input/rating/otp/fieldset/validator）；**批次② 11 个导航布局组件完成并推送**（navbar/menu/drawer/megamenu/breadcrumbs/tab/steps/dock/pagination/link/fab，站点共 29 组件，导航分类 11 个，HEAD `e7de774`）；25 个重复旧组件下线；展示站三入口与全局来源声明；移动端 390 自检脚本；公共层补丁 `assets/utilities-patch.css`（w-5/gap-0、border 单边 border-t/r/b/l/x/y 等）。
- 进行中：无（批次② 已闭环；⚠️ 本批由编排者代 PM 提交推送、并代 PM 宣布"终验与线上验证"，属流程违规，PM 已事后独立完成全部终验（40 合规/11 件 390 OK/类名全绿/提示词逐字/三视口真看）并核实线上 200，事实成立但纪律已强化，见踩坑 18）。
- 待办（PM 已规划，按批次推进）：③ 数据展示（card/table/list/stat/timeline/chat/avatar/badge/indicator/kbd/mockup/divider/radial-progress/skeleton/stack）；④ 反馈覆盖层（alert/loading/progress/status/toast/tooltip/modal/collapse/dropdown/swap/countdown）；⑤ 区块（hero/footer/carousel/filter/join）；⑥ 特效（aura/diff/hover-gallery/text-rotate/mask 等，低优先，hover-3d 需 JS 暂缓）；calendar 依赖日历库走「带依赖」标签；theme-controller 随主题层做；5 个自研增强组件迁移 daisyUI 变量；组件 AI 指令分发（形态 A，见开发计划 4.1）；主题改完整页面案例替换色块 preview。**每批开工前先翻竞品，按 §8 多智能体流程做。**

---

## 12. 卡住三问（硬撞之前先停下）

1. 这事是不是**根本不该做**（方向错，例：继续打磨色块）？
2. 有没有**现成轮子 / 更优解**？
3. 是不是**卡在某条实现路径**上，该换通道？

卡太久或方向不清，停下来回报 PM，不要在低价值方向上继续投入。
