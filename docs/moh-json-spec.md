# moh.json 资源元数据规范（v1）

> 灰墨 MoH_UI 的"registry"机制雏形：每个资源（主题 / 组件 / 区块 / 规则）都带一个 `moh.json`，描述它是什么、风格标签、素材来源与许可证、依赖、体检结果与实测状态。
> 参照：shadcn/ui `registry-item.json`（<https://ui.shadcn.com/docs/registry/registry-item>，MIT）。我们加上了 shadcn 没有的**素材溯源字段**（`source`），这是本项目"抄得专业"的硬约束。

## 1. 字段规范

```jsonc
{
  "schemaVersion": 1,                    // 必填，规范版本，当前恒为 1
  "name": "mo-dark",                     // 必填，唯一 slug：小写字母/数字/连字符
  "type": "theme",                       // 必填，theme | component | block | rule
  "title": "墨夜（深色）",               // 必填，中文名
  "description": "近黑底 + 冷灰 + 克制主色，适合数据看板。", // 必填，一句话说明
  "styleTags": ["深色", "数据看板"],     // 风格标签数组，用于集市浏览与检索
  "base": "mo-dark",                     // 仅 theme 类：基于哪个基底主题（自研为自身，二创标基底）
  "source": {                            // 必填，素材溯源（本项目硬约束）
    "origin": "original",                // 必填，"original" 自研 | "third-party" 二创
    "upstream": null,                    // 二创时：原项目名（自研为 null）
    "url": null,                         // 二创时：原项目地址（自研为 null）
    "license": "MIT",                    // 必填：自研写本项目许可证；二创写原项目许可证
    "changes": null                      // 二创时：改动说明（必填）
  },
  "dependencies": [],                    // npm 依赖数组；零依赖为 []
  "files": ["tokens.css", "base.css", "preview.html", "README.md"], // 资源文件列表
  "audit": 100,                          // 仅 theme 类：体检分 0-100，≥90 才允许发布
  "verified": false                      // 豆包实测是否通过；false = 未测
}
```

## 2. type 取值

| type | 含义 | 目录 | 示例 |
|---|---|---|---|
| `theme` | 主题包：tokens + base + preview | `themes/<name>/` | mo-dark、mo-light |
| `component` | 基础组件：单文件、零依赖 | `components/<name>/` | button、table |
| `block` | 区块/增强组件：可带成熟依赖（ECharts 等） | `components/<name>/`（dependencies 非空即视为 block 类组件） | 图表卡、拖拽排序 |
| `rule` | 规则边界包 | `rules/` | 主规则、场景规则 |

## 3. 校验规则（由 `scripts/check-attributions.mjs` 强制）

1. `name` / `type` / `title` / `description` / `source.origin` / `source.license` 必填，缺一即报错；
2. `source.origin === "third-party"` 时，`source.upstream` / `source.url` / `source.changes` 必填，缺一即报错；
3. `type === "theme"` 时 `audit` 必填且 ≥ 90，否则不允许发布；
4. `name` 全局唯一（主题与组件不重名）；
5. `styleTags` 非空数组（≥1 项）。

## 4. 完整示例

- 自研主题：`themes/mo-dark/moh.json`
- 二创主题（假想）：`themes/mo-neon/moh.json`
  - `source.origin = "third-party"`，`upstream = "某开源主题"`，`url = "https://github.com/..."`，`license = "MIT"`，`changes = "转换变量名为 --moh-*，重写 base.css 适配后台场景，新增 preview"`

## 5. 与素材清单的关系

- `moh.json` 是**每个资源自带的溯源声明**；
- `ATTRIBUTIONS.md` 是**全库汇总清单**，由人工维护，须与所有 `moh.json` 的 `source` 一致（新增资源时两处同时更新）。

## 6. 为什么要有它

- 用户能一眼看到"这个主题来自哪里、能不能放心用"；
- 我们引入海外素材时有章可循，不踩许可证坑；
- 未来做 CLI / 注册站时，`moh.json` 就是机器可读的索引（类似 shadcn registry）。
