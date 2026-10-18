# 翠盈（emerald）

daisyUI 官方内置主题，纯白与浅灰底配深蓝灰正文，主色为一点翠绿，圆角偏大。气质像一张干净的存款单：可信、克制、不喧哗。适合储蓄 / 金融科技 / 健康管理类浅色信任型产品页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 emerald](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=emerald]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构储蓄产品「翠盈储蓄 GREENWALLET」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航与免费开户按钮 + 存钱罐与嫩芽线稿 Hero 与双 CTA + 账户资产克制三格（可用余额 / 累计收益 / 本月存入）与年度目标进度 + 三个储蓄计划卡（稳健 / 平衡 / 成长，年化区间标注示例）+ 一条上升收益折线 + 安全保障四项 + 开户 CTA 与虚构声明页脚，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="emerald">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="emerald"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当金融科技落地页模板。对比度实测：默认 `btn-primary`（翠绿底 + 深绿 primary-content 文字）约 5.9:1，达标无需覆写；正文对白底约 11:1；但翠绿主色直接当文字压白底只有约 2:1——数字与正文一律用深蓝灰 base-content，绿色只用于实心按钮、进度条填充与线性图标勾线；绿色正向小标注（如「较上月 +2.6%」）用 `color-mix(in oklab, var(--color-success) 50%, var(--color-base-content))` 加深后约 4.8:1；弱化文案在白底上 opacity 不低于 .9（.65 时仅约 2.4:1，远不达标）。
