# 云朵甜（cupcake）

daisyUI 官方内置主题，暖白底（oklch 97.8% 微暖黄）配深紫棕文字，主色为薄荷青、辅色为粉、点缀色为奶黄，圆角很大（radius-field 2rem）、带轻微深度投影。气质像甜品柜台与奶油裱花：轻盈、甜美、柔软。适合烘焙店 / 甜品 / 母婴 / 花艺 / 粉色系生活方式类品牌页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 cupcake](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=cupcake]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构烘焙店「云朵糖 CUPCAKE CLOUD 烘焙」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 奶油裱花纸杯蛋糕 Hero 与双 CTA + 今日甜品六卡（纸杯蛋糕/草莓挞/马卡龙/瑞士卷/焦糖布丁/黄油曲奇）+ 蛋糕定制三规格（6寸/8寸/双层）+ 礼盒到店自提三步与查看自提门店 + 会员 CTA 与虚构门店页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="cupcake">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="cupcake"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当甜品/烘焙品牌落地页模板。注意：cupcake 默认按钮全部达标（mint 底深青字 5.21:1、粉底深粉字 5.8:1、奶黄底 5.41:1），直接用 `btn-primary` / `btn-secondary` 即可；mint 底压白字实测仅 1.49:1，禁止白字压彩色实心底；大圆角是本主题识别特征，不要改成锐角。
