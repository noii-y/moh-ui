# 灰墨 · MoH_UI

> 给 AI 搭出来的项目做「审美急救」：规则边界包 + 视觉主题库 + 组件插件库。
> 换皮谁都会，灰墨管的是 AI **不容易察觉**的整容，以及能**搬进自己项目**的丰富资源。

**MoH_UI（墨灰）** 面向不会设计、也不想学设计的人：用 AI 搭后台 / SaaS / 内部工具时，把规则丢给 AI 做审美整容，把主题和组件搬进自己的项目。中文优先、零门槛分发、开源非商用（MIT）。

在线展示站：**https://noii-y.github.io/moh-ui/** · 仓库：https://github.com/noii-y/moh-ui

---

## 四层入口

### ① 规则边界包 —— 附带服务：AI 不易察觉的「整容」

不换皮（黑白两色你跟 AI 说一声就行）。规则包管的是 AI 容易忽略的美学边界：

- **8 类硬边界**：字号只许用 12/13/14/16/20/24px（不许过大过小）、间距 4 的倍数（8px 网格）、表格不许溢出、控件 ≥32px、颜色全走变量、对齐整齐、圆角统一、动效 ≤200ms
- **10 条禁则一票否决**：文字溢出裁切、表格错位、无焦点态、对比度不足……碰到直接打回
- **26 项自检清单**：AI 应用后逐项自查，未达标继续修（最多 3 轮），达标才算交付

**怎么用**：把规则丢给豆包 / Cursor，让它按边界改你的项目。

```text
请按以下规则整改当前项目，应用后逐项自检、未达标继续修复（最多 3 轮）：
[粘贴 rules/mo-rules-zh.md 内容]
```

入口：[规则页](site/rules.html)（一键复制规则包 / 分场景规则 / 自检清单）· 仓库目录 [`rules/`](rules/)

### ② 视觉主题库 —— 丰富配色，统一变量

**10 套真实色板主题**，全部通过体检 **100/100**（<90 不许发布），每套独立目录：

| 主题 | 风格 | 一句话 |
| --- | --- | --- |
| `mo-dark` | 墨夜 · 深色 | 近黑底 + 冷灰 + 克制主色，Linear 取向，数据看板 / 监控 |
| `mo-light` | 宣纸 · 浅色 | 浅灰底 + 白卡 + 蓝主色，Stripe 取向，SaaS 控制台 |
| `mo-slate` | 纯净灰阶 | 无彩色灰阶，内容优先 |
| `mo-gray` | 灰阶中性商务 | 商务浅色，企业级后台 |
| `mo-pastel` | 粉彩 | 柔和浅色，消费级 / 创意工具 |
| `mo-mood` | 暗黑开发者 | 宇宙蓝暗黑，开发者工具 |
| `mo-brutal` | 粗野主义 | 3px 厚边、直角、硬阴影、撞色，个性品牌向 |
| `mo-neon` | 霓虹 | 赛博霓虹，科技感 |
| `mo-zhongshi` | 新中式 | 米宣纸 + 朱砂，东方留白后台 |
| `mo-classic` | 经典 Bootstrap | 经典蓝灰白，存量项目迁移 |

**统一 `--moh-*` 变量**：每套主题 = `tokens.css`（设计变量）+ `base.css`（基础样式）+ `preview.html`（基准页）+ 中文教程 README + `moh.json` 元数据。换主题只换变量，组件自动适配。

**怎么用**：

```html
<!-- 引入一套主题 -->
<link rel="stylesheet" href="./themes/mo-dark/tokens.css" />
<link rel="stylesheet" href="./themes/mo-dark/base.css" />
```

入口：[主题集市](site/themes.html)（搜索 / 风格筛选 / 色板条 / 一键复制 tokens 或 AI 指令 / 弹层预览整页效果）· 仓库目录 [`themes/`](themes/)

### ③ 组件 / 插件库 —— 主打：能搬进自己项目的真实组件

**68 个组件**（63 个 daisyUI 搬运件 + 5 个灰墨自研增强件），每个都是「提示词三件套」：`demo.html`（成品详情页 + 中文教程）+ `README.md` + `moh.json`（溯源元数据）。基于 daisyUI 5（MIT，纯 CSS、零 JS、零构建）做零依赖中文适配，类名即 daisyUI 官方 class。

- **63 个 daisyUI 搬运件**：按钮 / 输入框 / 表单 / 导航 / 数据展示 / 反馈弹层 / 区块 / 特效，覆盖官方主要形态，附真实业务成品与中文教程
- **5 个灰墨自研增强件**（`components/<name>/`，同样三件套）：`chart-card`（ECharts，颜色读主题变量）/ `code-block`（highlight.js，token 配色走语义变量）/ `date-range`（零依赖原生日期范围筛选）/ `drag-sort`（原生 HTML5 拖拽排序）/ `empty`（零依赖空态）
- 行为标准对齐可访问性规范：焦点可见、键盘可用、ARIA 语义正确

**怎么用**：首选把「复制 AI 提示词」整段发给你的 AI，或把组件专属 AI 指令页网址（`https://noii-y.github.io/moh-ui/ai/<组件名>.html`）发给它，让 AI 按你的项目只生成这一块；也可以「复制成品 HTML」直接粘贴。目标项目只需在 `<head>` 引两行底座样式：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/assets/utilities-patch.css">
```

入口：[组件集市](site/components.html)（分类浏览 / 依赖徽章 / 弹层预览 / 复制提示词或成品 HTML / 复制链接发给 AI）· 仓库目录 [`components/`](components/)

### ④ AI 指令分发（llms.txt）—— 让 AI 直接抓取全库

每个组件都有一个**机器可读的 AI 指令页**：`ai/<组件名>.md`（纯文本，AI 直接抓取）与 `ai/<组件名>.html`（人看版，可一键复制指令），内容与详情页「复制 AI 提示词」逐字一致（真实场景 + 精确规格 + 参考结构 + 审美硬边界 + 交付自查）。

- **`llms.txt`**（根目录）：全库 AI 索引，按分类列出全部 68 个组件，每个指向自己的 `.md`
- **`llms-full.txt`**：全部组件指令一次拼接，适合让 AI 整体了解组件库后批量生成

把任意链接发给豆包 / Cursor / Claude Code 等 AI 即可让它抓取并按你的项目生成。生成脚本：`node scripts/build-ai-pages.mjs`（PM 维护，只写 `ai/` 与根 `llms*.txt`）。

---

## 三层怎么配合

| 场景 | 用什么 |
| --- | --- |
| 项目"看起来还行但总觉得糙" | ① 规则边界包：让 AI 整容 |
| 想换个氛围 / 品牌感 | ② 主题库：选一套，复制变量 |
| 要个表格 / 抽屉 / 图表 / 徽章 | ③ 组件库：搬一个进来 |
| 整套组合拳 | ② 选主题 → ③ 搬组件 → ① 规则兜底自查 |

## 质量自检（发布门槛）

| 脚本 | 检查什么 | 当前状态 |
| --- | --- | --- |
| `node scripts/check-audit.mjs themes/<slug>` | 主题体检 100 分制：对比度 ≥4.5 / CJK 字体栈 / 8px 网格 / 字号阶 / 禁纯黑白底 / 禁紫渐变 / 必须有焦点态 | 10/10 全 100 |
| `node scripts/check-site.mjs` | 展示站 HTML 引用检查 | 全部有效 |
| `node scripts/check-attributions.mjs` | 素材溯源：79 个 moh.json（name 唯一 / 许可证 / 来源） | 全部合规 |
| `node scripts/qa-mobile.mjs components/daisyui/<名>/demo.html` | 手机 390 真实 iframe 横向溢出检测 | 68 组件全过 |
| `node scripts/qa-copy.mjs ai/<名>.html` | AI 页「复制 AI 指令」真点校验（7 项） | 68/68 COPY_OK |

## 二创与溯源

- 全部资源 **MIT**；自研色板标 `original` + 灵感来源 URL（如 Neo Brutalism / Tabler / AdminLTE / shadcn 官方主题）
- 引入外部素材的流程与许可证对照见 [`docs/license-policy.md`](docs/license-policy.md)
- 完整清单见 [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) 与 [溯源页](site/attributions.html)

## 目录结构

```
moh-ui/
├── rules/           # ① 规则边界包：主规则 + 分场景（table/form/dashboard）+ 自检清单
├── themes/          # ② 主题库：10 套（每套 tokens.css + base.css + preview.html + README + moh.json）
├── components/      # ③ 组件库：30 个单文件组件（index.html + moh.json）
├── scripts/         # 自检脚本（audit/components/site/attributions）+ 站点数据生成器
├── docs/            # 规范文档（moh.json 规范 / 许可证政策 / 主题转换 / 组件规格 / git 笔记）
├── site/            # 展示站（首页 / 主题集市 / 组件集市 / 规则页 / 溯源页 / 可视化选择器）
└── index.html       # 展示站入口（GitHub Pages）
```

## 路线图

- [x] 阶段 0：仓库骨架 + tokens 模板 + 体检脚本
- [x] 阶段 A：内容架构（moh.json 规范 / 许可证政策 / 规则边界包 / 素材溯源）
- [x] 阶段 B：主题库第一批（10 套，全部体检 100）
- [x] 阶段 C：组件库 30 个（基础零依赖 + 增强带依赖）+ 行为标准规格
- [x] 阶段 D：展示站改版（集市 + 可视化选择器 + 双视口自检）
- [ ] 阶段 E：实测闭环（规则 / 主题 / 组件三线"豆包丢链接"实测 → 沉淀成功提示词模板）
- [ ] 阶段 F：发布与增长（README 完整版已就绪 / 引流内容 / MCP 后置）

## License

MIT © 2026 noii-y
