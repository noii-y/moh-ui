# 夜灰（dim）

daisyUI 官方内置主题，柔和深灰底（oklch 约 31% 明度、近中性带极轻蓝调）配浅灰白正文，主色为一盏柔光绿，圆角偏大。气质像关灯房间里的一盏台灯：安静、不刺眼、适合长时间盯着文字。适合夜间阅读 / 写作工具 / 护眼类深色产品页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 dim](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=dim]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构夜间阅读社区「夜读 DIMREAD」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航与开始阅读按钮 + 月下书桌线稿 Hero 与双 CTA + 一篇完整长文阅读样板（标题 / 作者信息 / 五段正文 / 引用块 / 宽松行高）+ 四张在读书籍卡（差异化书封线稿与阅读进度条）+ 夜间社区三个讨论帖 + 护眼参数四宫格 + 下载 App CTA 与虚构声明页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="dim">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="dim"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当夜间阅读产品落地页模板。对比度实测：默认 `btn-primary`（柔光绿底 + 深色 primary-content 文字）约 13:1，无需加深；正文 base-content 对深灰底约 7.9:1；正文弱化文案请保持 opacity 不低于 .55（约 4.8:1），.45 以下小字会跌破 4.5:1。注意底色是柔和深灰不是纯黑，复用时不要另写纯黑背景，也不要把亮绿主色大面积铺底。
