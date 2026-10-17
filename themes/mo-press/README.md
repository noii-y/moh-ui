# 报刊（mo-press）

灰墨自写 daisyUI 5 主题，米白纸底（oklch 约 97.5% 明度）配墨色衬线大字与一条克制的报头红，圆角压到 2~4px、不带阴影。气质像一份周末清晨的纸报：密而不乱、印刷感、克制。适合新闻日报 / 周刊首页 / 杂志专题 / 评论类长文排版。

## 来源与许可证

- 主题：灰墨自写 daisyUI 5 主题变量（`[data-theme="mo-press"]` 覆盖 `--color-*` 等），MIT。
- 版式参考：传统中文报纸排版（报头 masthead、多栏正文、竖发丝线）；demo.html 中的报名、新闻、数据图说、社址与电话均为虚构示例。

## 文件

- `tokens.css` — daisyUI 5 主题变量（米白纸底 / 墨色文字 / 报头红）
- `demo.html` — 完整页面案例：报头与双线 + 八字文字导航 + 内联 SVG 头版配图与超大头条 + CSS 双栏正文四条新闻 + 导读榜 / 时评 / 数据图说侧栏 + 文化体育短讯与订阅 CTA，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-press">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="/themes/mo-press/tokens.css" />
  </head>
</html>
```

引入 daisyUI 后再 `<link>` 本 tokens.css，并在 `<html>` 上挂 `data-theme="mo-press"` 即整站换肤；衬线标题在 demo 页用内联 `.serif` 类（`"Songti SC","SimSun",Georgia,serif`）。

## 排版要点（怎么像真报纸）

- 报头居中：大号衬线报名 + 英文副名 + 日期 / 期号 / 天气，下接 3px 报头红 + 1px 墨线双线。
- 正文双栏（column-count:2），栏间 1px 发丝竖线；行距 1.8~1.9、两端对齐。
- 黑白灰为体，报头红只用于报头线 / 栏目标签 / 当前导航 / 订阅主按钮，绝不大面积铺色。
- ≤860px：多栏退单栏、头版图与标题上下堆叠、侧栏下沉、报名缩字号，头条不溢出。
