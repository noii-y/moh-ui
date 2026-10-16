# 灰墨 · MoH_UI

> 给 AI 搭出来的后台 / 管理系统做「审美急救」的皮肤包。
> 现成主题包（CSS 变量）+ 单文件后台组件，让 AI 一句话完成换肤。

MoH_UI 面向不会设计、也不想学设计的人：用 AI 搭后台 / SaaS / 内部工具时，把主题链接丢给 AI，AI 自己完成换肤。我们提供**实体主题包**（不是抽象规则），主攻中文与零门槛分发。

- **方法论**：Taste Skill（MIT）官方声明不做 dashboard / app UI——**这块我们来做**。
- **架构**：参考 StyleSeed（MIT）的主题包结构，代码全部原创。

## 快速开始（当前可用）

每套主题是一个独立的文件夹，**直接使用**：

```html
<link rel="stylesheet" href="./themes/mo-dark/tokens.css" />
<link rel="stylesheet" href="./themes/mo-dark/base.css" />
```

也可以直接用浏览器打开 `themes/mo-dark/preview.html` 预览主题效果（色板 / 字号阶 / 间距 / 按钮 / 输入 / 表格 / 卡片）。

| 主题 | 风格 | 锚点 |
| --- | --- | --- |
| `mo-dark` | 墨夜 · 深色 | Linear |
| `mo-light` | 宣纸 · 浅色 | Stripe |

### 体检脚本（发布门槛：<90 分不许发布）

```bash
node scripts/check-audit.mjs themes/mo-dark   # 100/100
node scripts/check-audit.mjs themes/mo-light  # 100/100
```

检查项：文本对比度 ≥4.5（WCAG AA）/ CJK 字体栈 / 8px 间距网格 / 反 AI 味（禁纯黑纯白底、禁紫渐变、必须有 :focus 态、禁 lorem ipsum）。

### 清单生成

```bash
node scripts/build-index.mjs   # 扫描 themes/ + components/ 生成 index.json
```

## 路线图

- [x] 阶段 0：仓库骨架 + 双主题（tokens / base / preview）+ 体检脚本 v1
- [ ] 阶段 1：10 个后台单文件组件 + AI 链接页（丢链接换肤）
- [ ] 阶段 2：展示站（预览 / 复制 AI 指令 / 可视化主题选择器）+ 在线部署
- [ ] 阶段 3：豆包 / ChatGPT / Cursor 三端集成实测 + 成功提示词模板
- [ ] 阶段 4：README 完整版 + 引流内容 + CLI / MCP（后置）

## 目录结构

```
moh-ui/
├── themes/          # 主题包（每主题一个目录：tokens.css + base.css + preview.html）
│   ├── mo-dark/     # 墨夜 · 深色（Linear 锚点）
│   └── mo-light/    # 宣纸 · 浅色（Stripe 锚点）
├── components/      # 单文件后台组件（每组件一个 .html，可独立复制）
├── scripts/         # 工具脚本（清单生成 / 审美体检）
├── docs/            # 文档（成功提示词模板、贡献指南等）
├── mcp-server/      # MCP Server（后置 P3）
└── site/            # 展示站源码（阶段 2）
```

## 设计来源声明

- 主题风格锚点：Linear（墨夜）/ Stripe（宣纸），token 值参考公开 MIT 提取仓库（awesome-design-md）
- 方法论参考：Taste Skill（MIT，官方声明不做 dashboard / app UI，这块我们来做）
- 架构参考：StyleSeed（MIT）
- 全部代码原创实现

## License

MIT © 2026 noii-y
