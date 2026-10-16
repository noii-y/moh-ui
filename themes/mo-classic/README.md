# mo-classic · 经典 Bootstrap 后台风（浅色）

> 灰墨 MoH_UI 主题包。经典 Bootstrap 蓝、灰蓝白底——把"人人都会用"的后台节奏做成一套可换肤的主题。
> 风格参考来源：Tabler（<https://github.com/tabler/tabler>，MIT）与 AdminLTE（<https://github.com/ColorlibHQ/AdminLTE>，MIT）。配色为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 迁移 / 改造存量 Bootstrap 后台项目（降低换肤成本）
- 通用管理后台、CRM、ERP 类产品
- 需要"零学习成本"的团队内部系统

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景灰蓝白、主文字蓝黑、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#f5f7fa`，卡片 `#ffffff`，主文字 `#212a35`，次级文字 `#5a6675`
- 主色 `#0b5ed7`（Bootstrap 经典深蓝，白字对比 5.4:1）；状态色用标准语义色
- 字号阶 12/13/14/16/20/24，间距 8px 网格，圆角 3/4/6，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Tabler / AdminLTE（均 MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
