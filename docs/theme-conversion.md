# 主题转换规范（任何来源 → 灰墨 --moh-*）

> 目标：让"任何来源的主题"最终都以 `--moh-*` 变量交付，AI 一句话换肤，体验一致。
> 本文覆盖：shadcn token 语义映射、按风格描述自研色板的流程与检查项、风格主题的变量微调边界、参考来源标注规范。

## 1. shadcn token → --moh-* 语义映射表

shadcn 官方语义 token（ui.shadcn.com/docs/theming）与灰墨变量的对应关系：

| shadcn token | 用途 | 灰墨变量 |
|---|---|---|
| `--background` | 页面底 | `--moh-canvas` |
| `--card` | 卡片/面板底 | `--moh-surface` |
| `--popover` | 悬浮层底（下拉/弹窗） | `--moh-surface-2` |
| `--border` | 常规描边 | `--moh-border` |
| —（border 的强调态） | 悬浮/强调描边 | `--moh-border-strong` |
| `--foreground` | 主文字 | `--moh-ink` |
| `--muted-foreground` | 次级文字 | `--moh-muted` |
| `--primary` | 主色 | `--moh-primary` |
| —（primary 悬浮态） | 主色悬浮 | `--moh-primary-hover` |
| —（primary 浅底） | 主色选中底 | `--moh-primary-muted` |
| `--destructive` | 危险/错误 | `--moh-danger` |
| `--ring` | 焦点环 | 用 `--moh-primary` 派生（focus 态） |

> 注意：shadcn 主题不含 success/warning。灰墨的 `--moh-success`（成功绿）/ `--moh-warning`（警告橙）**不随主题换**，全库统一默认（除非该风格明确需要调整，如暗黑霓虹风可提亮）。

## 2. 色值换算

- shadcn 新主题用 **oklch**（如 `oklch(0.145 0 0)`），老社区主题用 **HSL 三元组**（如 `220, 16%, 96%`）；
- 灰墨 tokens 落地用 **hex**（便于 AI 复制、肉眼核对、跨工具一致）；
- 换算工具：浏览器 devtools / 在线转换 / Node 脚本；换算后必须经体检脚本验证对比度。

## 3. 按风格描述自研色板（当前阶段使用，shadcn registry 需 token 不可下载）

适用：官方主题页只给风格描述（如"厚黑边 3–4px、硬阴影、撞色"），拿不到真实色值时。

**流程**：
1. 从官方描述提取**风格约束**（底色明暗、主色性格、边框/阴影特征、是否撞色）；
2. 按灰墨规范设计色板：近黑文字 `#1a202c` 系（浅底）/ 近白 `#f7f8f8` 系（深底）、主色唯一、muted 有足够对比；
3. 跑体检：正文 ≥4.5、muted ≥3、主色按钮 ≥4.5（不达标就调，直到 100）；
4. 风格特征用变量表达：`--moh-border-width`（粗野 3–4px）、`--moh-radius-*`（粗野 0px）、字体/阴影可微调。

**硬边界（所有主题一致）**：字号阶 12/13/14/16/20/24、间距 8px 网格、控件高度 32px、动效 ≤200ms。**风格只体现在色彩、描边、圆角、阴影上**，保证换肤体验不失控。

## 4. 参考来源标注规范

- 色板为自研但风格受开源项目启发：`moh.json` 加 **`inspiration`** 字段（可选，URL 数组）指向参考来源；
- `README.md` 中文教程内注明"风格参考来源：<项目名>（<URL>，<许可证>）"；
- `ATTRIBUTIONS.md` 汇总登记；
- 若直接引入他人色板/代码（可下载的 MIT 素材）：`source.origin = "third-party"`，按 docs/moh-json-spec.md 填全溯源字段。

## 5. 每套主题必带文件

`themes/<slug>/`：tokens.css + base.css + preview.html + README.md（中文教程 + 参考来源）+ moh.json
