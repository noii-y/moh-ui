# 灰墨 · MoH_UI

> 给 AI 搭出来的项目做「审美急救」：规则边界包 + 视觉主题库 + 组件插件库。
> 换皮谁都会，灰墨管的是 AI **不容易察觉**的整容，以及能**搬进自己项目**的丰富资源。

**MoH_UI（墨灰）** 面向不会设计、也不想学设计的人：用 AI 搭后台 / SaaS / 内部工具时，把规则丢给 AI 做审美整容，把主题和组件搬进自己的项目。中文优先、零门槛分发、开源非商用（MIT）。

在线展示站：**https://noii-y.github.io/moh-ui/** · 仓库：https://github.com/noii-y/moh-ui

---

## 三层入口

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

### ③ 组件 / 插件库 —— 主打：能搬进自己项目的单文件组件

**30 个组件**，每个都是**单文件** `index.html`（结构 + 样式 + 说明注释），复制进任意项目即可用。类名统一 `moh-` 前缀，全部走 `var(--moh-*)`，**换任意主题自动适配**。

- **零依赖 28 个**：button / input / select / table / card / form / navbar / sidebar / tag / modal / breadcrumb / pagination / empty / skeleton / tabs / drawer / toast / stat-card / drag-sort / checkbox / switch / date-range / alert / tooltip / avatar / progress / badge / spinner
- **带依赖 2 个**（CDN，依赖已在 `moh.json` 注明）：`chart-card`（ECharts，图表颜色读 `--moh-*` 变量）/ `code-block`（highlight.js，token 配色走语义变量）
- 行为标准对齐可访问性规范：焦点可见、键盘可用（Tabs 方向键 / Drawer 焦点陷阱 / Tooltip hover+focus）、ARIA 语义正确

**怎么用**：

```html
<!-- 你的项目先引入任意一套主题变量 -->
<link rel="stylesheet" href="./themes/mo-dark/tokens.css" />
<!-- 然后打开目标组件的 index.html，把 <style> 和结构片段复制进你的项目 -->
<!-- 例如搬 button：复制 components/button/index.html 里的 .moh-btn 样式与按钮结构 -->
```

入口：[组件集市](site/components.html)（分类浏览 / 依赖徽章 / 弹层预览 / 复制代码或 AI 指令 / 下载单文件）· 仓库目录 [`components/`](components/)

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
| `node scripts/check-components.mjs` | 组件 30 个：结构完整 / 焦点态 / 类名规范 | 30/30 通过 |
| `node scripts/check-site.mjs` | 展示站 8 个 HTML 的 60 处引用 | 全部有效 |
| `node scripts/check-attributions.mjs` | 素材溯源：41 个 moh.json（name 唯一 / 许可证 / 来源） | 全部合规 |

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
