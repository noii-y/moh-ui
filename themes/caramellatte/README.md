# 焦糖拿铁（caramellatte）

daisyUI 官方主题，奶油拿铁底色 `#fff7ed` + 深棕墨黑 + 焦糖强调色，圆角圆润亲切。适合手作咖啡 / 烘焙 / 社区小店类温暖感页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 caramellatte](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=caramellatte]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套咖啡店点单整页。

## 文件

- `demo.html` — 完整页面案例：社区咖啡店点单整页（顶栏店名 + 堂食/外带切换 + 菜单卡片网格 + 购物车清单 + 取餐码与预计时间 + 制作进度），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="caramellatte">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="caramellatte"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当小店点单页模板。
