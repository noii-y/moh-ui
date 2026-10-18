# 穹览指挥中心 · 超深色（mo-command）

16:9 数据指挥中心大屏主题。比常规后台更深的近黑底色、大字号 KPI、屏幕青高亮，面向运营态势投屏；挂 `data-theme="mo-command"` 即整站换肤。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框），自写原创、无外部 LICENSE
- `demo.html` — 完整页面案例：虚构指挥大屏整页（顶栏 + 6 个大 KPI 带 + 折线趋势 / 区域热力地图 / 渠道柱状主栅格 + 履约环形 / 系统健康雷达 / 实时事件流下排），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-command">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当大屏模板。

## 本主题的硬边界

- **底色比 mo-dark 更深**：base-100 `oklch(15%)`、面板 base-200 `oklch(12.5%)`，层次靠明度微差；正文 16.5:1、大屏青 on 底 9.7:1、按钮深字 on 青 9.2:1，全部实测达标。
- **是大屏不是后台**：无侧边栏、无操作表单；KPI 大数字 30px 加粗等宽数字，趋势箭头用语义色区分（向好=成功绿、接近阈值=警告棕、告警=错误红）。
- **图表系列固定配色**：主系列 `--color-primary` 屏幕青、次级 `--color-secondary` 数据蓝、第三系列 `--color-accent` 翠绿；图表均为成形内联 SVG 带网格线与中文标注。
- **事件流带级别中文徽章**：严重 / 警告 / 恢复 / 通知不靠颜色单独传达。
- **克制发光**：细 base-300 描边 + 方正圆角，禁止霓虹渐变与大面积光晕。
- 页内指挥中心名、指标数字与事件均为虚构示例。
