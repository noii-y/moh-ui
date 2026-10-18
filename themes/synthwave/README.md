# 霓虹脉冲（synthwave）

daisyUI 官方内置主题，深紫蓝底（oklch 15% 明度、紫相 281）配浅紫灰正文，主色是霓虹粉（oklch 71% · 350）、辅色是青（oklch 82% · 230）、点缀橙（oklch 75% · 56），圆角偏大。气质像八十年代电子游戏过场与夜店霓虹：热烈、复古、有舞台感。适合复古音乐 / 电子厂牌 / 夜店活动 / 复古游戏类深色页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 synthwave](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=synthwave]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构复古电子音乐厂牌「霓虹脉冲 NEON PULSE RECORDS」整页。

## 文件

- `demo.html` — 完整页面案例：深紫蓝渐变 Hero（mask 镂空横条纹的粉色落日 + 青色透视网格 + 星点）+ 本月演出四卡（黑胶 / 合成器 / 均衡器 / 唱机线性图标）+ 黑胶专区三卡（粉 / 青 / 橙三种标签差异）+ 邮件订阅 CTA 与虚构厂牌页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="synthwave">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="synthwave"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当音乐厂牌 / 演出活动落地页模板。
