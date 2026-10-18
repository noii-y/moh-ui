# 框线（wireframe）

daisyUI 官方内置主题，纯白底配近黑灰文字（oklch 20% 明度），主色与辅色全部压成 87% 明度的浅灰、内容文字压成 26% 深灰——全站没有任何彩色。圆角收窄（box/field 均 .25rem），气质像一份打印出来的低保真原型稿：结构优先、克制、工程感。适合线框稿 / 原型演示 / 设计交付类页面，也是全站唯一一套"无配色"主题。

## 来源与许可证

- 主题：[daisyUI 官方主题 wireframe](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=wireframe]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构线框原型交付工作室「框线原型 WIREFRAME KIT」整页。

## 文件

- `demo.html` — 完整页面案例：灰阶线框顶栏 + 大标题与虚线占位块 Hero + 裸组件线框陈列（按钮 / 输入框 / 卡片 / 表格 / 头像 / 进度条，组件按主题原生渲染）+ 一张完整网页三栏结构线框图 + 交付清单三要点与预约评审 CTA，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="wireframe">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="wireframe"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当设计交付 / 原型评审页模板。
