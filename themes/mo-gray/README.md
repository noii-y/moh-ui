# mo-gray · 灰阶中性（商务浅色）

> 灰墨 MoH_UI 主题包。冷调石墨灰、商务克制，企业级后台与经营管理类产品的"不出错"选择。
> 风格参考来源：shadcn.io 主题 "Graphite"（<https://www.shadcn.io/theme/graphite>，MIT 社区主题站）。色板为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 企业管理后台、财务 / 人事 / 审批系统
- 需要"低调可信"的 B 端产品
- 客户成功、数据运营类工作台

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景冷灰白、主文字近黑微冷、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#f4f4f6`，卡片 `#ffffff`，主文字 `#1f1f24`，次级文字 `#696972`
- 主色 `#2b2b31`（金属深灰，白字对比 15:1）；状态色用标准语义色
- 字号阶 12/13/14/16/20/24，间距 8px 网格，圆角 3/5/7，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Graphite（shadcn.io，MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
