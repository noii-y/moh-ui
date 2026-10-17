# Solarized Light · 纸感护眼（solarized-light）

为"树荫下读书"设计的低亮度差浅色主题：米纸底色 `#fdf6e3` + 深青墨文字 `#073642`，强调色取自经典 Solarized 八色（蓝 / 紫 / 青 / 绿 / 黄 / 红）。适合长文阅读、医疗 / 政务等需要长时间低疲劳阅读的浅色 UI。

## 来源与许可证

- 配色：[Solarized](https://github.com/altercation/solarized#the-values) · MIT © Ethan Schoonover（OSI 批准）。
- 本文件只是把官方色板映射成 daisyUI 5 主题变量，色值本身未改动；圆角、`*-content` 对比色为适配 daisyUI 组件所补。
- daisyUI 底座：MIT © 2020 Pouya Saadeghi。

## 文件

- `tokens.css` — daisyUI 5 主题变量（`[data-theme=solarized-light]` 覆盖 `--color-*`、圆角、尺寸、边框）
- `demo.html` — 完整页面案例：健康档案 / 预约挂号整页（顶栏 + 侧栏 + 指标卡 + 科室卡 + 本周号源表 + 就诊记录），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="solarized-light">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当医疗 / 政务类浅色页模板。
