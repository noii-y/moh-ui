# 商办（business）

daisyUI 官方内置主题，深色中性灰底（oklch 约 24% 明度）配浅灰正文，主色为深蓝（oklch 41% · 蓝灰），辅色为暖橙强调，圆角很小（0.25rem），气质硬朗、克制、像企业内网 OA。适合企业办公后台 / 审批系统 / 管理控制台类深色产品页面。

## 来源与许可证

- 主题：[daisyUI 官方主题 business](https://daisyui.com/components/themes/) · MIT © 2020 Pouya Saadeghi。
- 本目录未改动官方主题变量，直接使用 `vendor/daisyui-themes.css` 中的 `[data-theme=business]` 定义；`demo.html` 只是用 daisyUI 组件拼了一套虚构企业 OA 审批后台「汇通办公 OA」整页。

## 文件

- `demo.html` — 完整页面案例：顶栏导航 + 通知铃铛红点 + 左侧审批菜单侧栏 + 七条待办审批列表 + 审批单详情卡（事由/附件/审批意见/五节点流程/同意驳回转交按钮）+ 最新公文简卡 + 三层组织架构树，全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="business">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" />
  </head>
</html>
```

引入 daisyUI 与官方主题表后，在 `<html>` 上挂 `data-theme="business"` 即整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当深色 OA 后台模板。
