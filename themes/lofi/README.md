# 素白（lofi）

daisyUI 官方内置主题，纯白底（oklch 100%）配纯黑文字，主色、辅色全部退近黑，圆角细小。气质像编辑室里的一张白纸：安静、克制、文艺极简。适合极简笔记 / 独立杂志 / 个人作品集类浅色页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 lofi](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=lofi]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构极简笔记应用「素白笔记 BLANK NOTES」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 纸与笔线稿 Hero 与双 CTA + 四件事功能卡（极简编辑 / 离线书写 / 专注模式 / 导出）+ 四篇灰阶文章列表 + 应用界面线稿简影 + 下载 CTA 与虚构页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="lofi">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="lofi"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当极简产品落地页模板。
