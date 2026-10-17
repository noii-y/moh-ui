# 浅滩紫（catppuccin · Catppuccin Mocha）

Catppuccin Mocha 完整移植：软糯马卡龙深色、低反差柔和彩度，淡紫主色，适合音乐 / 视频流媒体、阅读类与生活方式产品的暗色 UI。

> 色板出处：Catppuccin（MIT，© 2021 Catppuccin）— https://catppuccin.com/palette/ （Mocha 表：base `#1e1e2e`、mantle `#181825`、crust `#11111b`、mauve `#cba6f7`、blue `#89b4fa`、green `#a6e3a1`、sapphire `#74c7ec`、yellow `#f9e2af`、red `#f38ba8`）。本目录仅移植色板为 daisyUI 5 主题变量，未使用官方任何图标或品牌素材。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme=catppuccin]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：桌面端音乐播放器整页（左侧资料库导航 + 歌单封面与队列 + 底部播放条），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="catppuccin">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当音乐产品页面模板。
