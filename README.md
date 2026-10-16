# 灰墨 · MoH_UI

> 给 AI 搭出来的后台 / 管理系统做「审美急救」的皮肤包。
> 现成主题包（CSS 变量）+ 单文件后台组件，让 AI 一句话完成换肤。

MoH_UI 面向不会设计、也不想学设计的人：用 AI 搭后台 / SaaS / 内部工具时，把主题链接丢给 AI，AI 自己完成换肤。我们提供**实体主题包**（不是抽象规则），主攻中文与零门槛分发。

## 快速开始

（阶段 1 完成后补齐：三种入口——AI 指令链接 / CLI / MCP）

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

MIT
