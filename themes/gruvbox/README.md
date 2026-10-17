# 复古做旧（gruvbox）

暖棕橙黄的极客主题。近黑暖棕底（`#282828`）+ 招牌橙主色与黄 / 苔绿点缀，做旧但正文对比清晰，适合复古技术博客、极客手作工作室、终端工具与开发者个人站。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme="gruvbox"]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：虚构复古技术博客「锈键盘 RUSTY KEYS」整页（自绘线稿复古终端 Hero + 四篇技术文章卡 + 三个手作项目卡 + 假终端装饰块 + 订阅 CTA），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="gruvbox">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当技术博客 / 手作工作室落地页模板。

## 来源与署名

- 色值取自 [morhetz/gruvbox](https://github.com/morhetz/gruvbox) 官方 Dark 色板（[colors/gruvbox.vim](https://github.com/morhetz/gruvbox/blob/master/colors/gruvbox.vim)：dark0 `#282828`、dark1 `#3c3836`、dark2 `#504945`、dark3 `#665c54`、light1 `#ebdbb2`、bright_orange `#fe8019`、bright_yellow `#fabd2f`、bright_aqua `#8ec07c`、bright_blue `#83a598`、bright_green `#b8bb26`、neutral_yellow `#d79921`、bright_red `#fb4934`），许可证 **MIT/X11**（上游 README「License」小节声明）。
- 上游仓库根**未附 LICENSE 文件**（GitHub API 亦未识别到 license），但 README 明确声明 License 为 MIT/X11，`colors/gruvbox.vim` 头署名为 morhetz（Pavel Pertsev），仓库创建于 2012 年；灰墨已按该声明在本目录补全标准 MIT `LICENSE` 文本（Copyright (c) 2012 morhetz），版权署名归原作者。
- 改造：将 Vim 主题色板映射为 daisyUI 5 的 `--color-base-*` / `--color-primary` 等组件变量，蓝色刻意克制不抢橙黄主色，圆角调小以贴合复古终端气质；`demo.html` 为新写的虚构博客案例，文章、项目与日期均为示例数据。
