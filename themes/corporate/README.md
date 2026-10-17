# 睿蓝（corporate）

daisyUI 官方内置主题，纯白底（oklch 100% 明度）配深海军蓝文字（oklch 22% · 蓝灰），主色为克制的商务蓝（oklch 58% · 242 色相），圆角极小（0.25rem）、直角工整。气质像咨询公司官网：冷静、克制、专业，强调对齐与留白。适合咨询公司 / 律所 / 金融机构 / 企业官网前台类浅色页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 corporate](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=corporate]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构咨询公司「衡屹咨询 HENGYI ADVISORY」官网前台整页。

## 文件

- `demo.html` — 完整页面案例：咨询公司官网前台整页（顶栏导航 + Hero 大标题与内联上升折线线稿 + 四张业务领域卡 + 一排统计数字与两条客户评价 + 三篇洞察文章卡 + 联系 CTA 与虚构办公地址页脚），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="corporate">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="corporate"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当企业官网前台模板。
