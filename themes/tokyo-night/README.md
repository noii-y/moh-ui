# 东京入夜（tokyo-night）

深蓝紫城市霓虹的数据终端主题。近黑蓝底（`#1a1b26`）+ 霓虹蓝主色与品紫 / 夜青点缀，适合行情终端、数据监控、开发者工具类暗色页面。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme="tokyo-night"]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：股票行情交易终端整页（指数行情条 + 自选股涨跌表 + 五档买卖盘 + 日 K 线图），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="tokyo-night">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当行情终端页模板。涨跌幅按 A 股习惯做红涨绿跌（页面内 `.up` / `.down` 自定义语义色），复制后按需改成自己的配色。

## 来源与署名

- 色值取自 [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim) 官方 Night 色板（bg `#1a1b26`、bg_highlight `#292e42`、bg_dark `#16161e`、fg `#c0caf5`、blue `#7aa2f7`、magenta `#bb9af7`、cyan `#7dcfff`、blue1 `#2ac3de`、green `#9ece6a`、yellow `#e0af68`、red `#f7768e`、terminal_black `#414868`），许可证 **Apache License 2.0** © Folke Lemaitre。
- 按 Apache-2.0 义务：本文件为**修改后再分发**（将 Vim 主题色板映射为 daisyUI 5 的 `--color-base-*` / `--color-primary` 等组件变量），并在本 README 显著署名原作者与许可证。
- 改造：圆角调小以贴合终端气质；`demo.html` 为新写的虚构行情终端案例，指数 / 个股 / 盘口 / K 线均为示例数据，未使用任何金融机构品牌标识。
