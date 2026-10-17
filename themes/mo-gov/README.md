# 江岸政务 · 浅色（mo-gov）

政务服务大厅高对比无障碍主题。白底大字、克制政务红，面向全体市民尤其是中老年读者；挂 `data-theme="mo-gov"` 即整站换肤。

## 文件

- `tokens.css` — daisyUI 5 主题变量（覆盖 `--color-*`、圆角、尺寸、边框），自写原创、无外部 LICENSE
- `demo.html` — 完整页面案例：虚构政务服务大厅整页（品牌行 + 导航 + 超大搜索 + 12 张热门服务卡 + 进度查询 steps + 政策公告 + 无障碍承诺 + 页脚），全部用 daisyUI 组件拼装、零依赖、零 JS

## 使用（在已有 daisyUI 的项目里换肤）

```html
<html data-theme="mo-gov">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@5" />
    <link rel="stylesheet" href="tokens.css" />
  </head>
</html>
```

只引入 daisyUI 与本主题两个 CSS 即可整站换肤；`demo.html` 整页可直接复制（结构 + 类名）当政务门户模板。

## 无障碍要点（本主题的硬边界）

- **对比度向 WCAG AAA 看齐**：正文 `#161A20` 白底 17.5:1、次级文字 `#3A4150`（即 `--color-neutral`）10.2:1；**不要用 opacity 压文字**——那会击穿 7:1，需要浅一层就换次级文字色。
- **政务红 `#8F1A1A` 白字 9.0:1**：只用于主按钮、站名印章、当前导航与链接；禁止大红渐变、禁止浅红大面积铺底。
- **大字号档位**：站名 26px、Hero 主标 30px、事项名 18px、正文 16px、说明 15px，正文不得更小。
- **焦点框**：所有可交互元素 `:focus-visible` 加 `outline: 3px solid var(--color-info)` + `outline-offset: 2px`，不允许只靠颜色变化提示焦点。
- **大点击区**：按钮与快捷入口高度 ≥48px（主按钮 52–56px），390px 窄屏单列不挤、不横向溢出。
- **状态不只靠颜色**：受理 / 审核 / 办结必须同时带中文文字（badge 或 steps 节点文字），色盲用户也读得懂。
- 页内「长辈模式」开关是**静态示意**（checked 外观 +「示意」角标），未接 JS；真实项目的长辈模式 = 更大字号与更高对比，另行实现。
