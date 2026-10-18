# 阶段 C 组件规格（component-spec-c）

> **历史归档（旧单文件组件体系）**：本文写于"单文件 `index.html` + `moh-` 前缀 + `--moh-*` 变量"阶段。组件层后来改为 daisyUI 5 底座 + 「提示词三件套」（demo.html / README.md / moh.json），旧自研组件已下线到 `components/_legacy/`。组件的现行制作与验收规范见根目录 `AGENTS.md`，本文仅保留当时的行为标准调研。

> 来源：阶段 C1 竞品调研（shadcn/ui 组件清单 + AdminLTE/Headless 行为标准 + Aceternum 微交互理念）。
> 所有组件：单文件 `index.html`（样式 + 演示），零依赖（除非标注"带依赖"），类名 `moh-` 前缀，样式全走 `--moh-*` 变量。
> 行为标准是硬要求：键盘可操作、焦点可见、语义标签正确——"照着做不会出错"。

## 基础组件（零依赖，8 个）

### 1. breadcrumb 面包屑 `moh-breadcrumb`
- 结构：`<nav aria-label="面包屑"><ol class="moh-breadcrumb">` + `li` 逐级 + 末项 `aria-current="page"`
- 分隔符：`li` 间 `>`，`aria-hidden="true"`（屏读不读）
- 变体：默认（文字链接）/ 带图标首页；末项不加链接（当前页）
- 行为：链接焦点可见（focus-visible）

### 2. pagination 分页 `moh-pagination`
- 结构：`<nav aria-label="分页"><ul class="moh-pagination">`
- 形态：上一页/下一页按钮 + 页码 + 省略号（`…` 用 `aria-hidden` 的 li）+ 当前页 `aria-current="page"`
- 变体：默认 / 带总数标签（"共 128 条"）；禁用态（上一页在首页）
- 行为：按钮 focus-visible；当前页不是链接

### 3. empty 空状态 `moh-empty`
- 结构：容器 + 图标区 + 标题 + 说明 + 可选操作按钮
- 变体：默认 / 紧凑（表格内空行）/ 带操作按钮
- 图标：内联 SVG，颜色 `currentColor`（跟随 muted），禁用硬编码色
- 要点：文案鼓励下一步动作（"创建第一条记录"），不写空话

### 4. skeleton 骨架屏 `moh-skeleton`
- 结构：占位块，`aria-hidden="true"`（屏读跳过）
- 变体：文本行 / 卡片 / 表格行（th 状 + 行）
- 动效：轻微呼吸（opacity 0.6→1 循环 1.6s），≤200ms 原则的加载态例外（骨架屏允许循环）
- 要点：颜色用 `var(--moh-surface-2)`，禁用灰色渐变以外的硬编码色

### 5. tabs 标签页 `moh-tabs`
- 结构：`role="tablist"` + `role="tab"`（`aria-selected`）+ `role="tabpanel"`
- 键盘：左右方向键切换焦点、Enter/Space 激活（JS 演示；纯样式版给出结构约定）
- 形态：下划线式（激活项底部 2px 主色线）
- 变体：默认 / 带数量徽标（复用 tag）

### 6. drawer 抽屉 `moh-drawer`
- 结构：遮罩（点击关闭）+ 面板（右侧滑出）+ 关闭按钮 + 标题区
- 行为：ESC 关闭、遮罩点击关闭、焦点陷阱（Tab 循环在面板内）——JS 演示完整；纯样式版给结构约定
- 动效：translateX 0.2s 滑入（≤200ms）
- 要点：面板 `role="dialog"` + `aria-modal="true"`

### 7. toast 轻提示 `moh-toast`
- 结构：容器（右下角堆叠）+ 单个 toast（图标 + 文案 + 关闭按钮）
- 行为：自动消失（4s，JS 演示）、手动关闭、`aria-live="polite"`（错误用 `assertive`）
- 变体：成功 / 错误 / 信息 / 警告（复用语义色变量）
- 动效：淡入 + 轻微上移，≤200ms

### 8. stat-card 统计卡 `moh-stat-card`
- 结构：标签 + 大数字（text-xl）+ 趋势（涨跌箭头 + 百分比）+ 可选脚注
- 变体：默认 / 上升绿 / 下降红（趋势色用语义变量）；带图标变体（右侧大图标 muted）
- 要点：数字用 tabular-nums 防止跳动；趋势用 `currentColor` 箭头

## 增强组件（带依赖，3 个）

### 9. chart-card 图表卡 `moh-chart-card`
- 依赖：ECharts（CDN 引入，教程注明 `<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js">`）
- 结构：卡片壳（复用 moh-card 风格）+ 标题 + 图表容器 + 说明
- 主题适配：读取 `--moh-*` 变量传色给 ECharts（tokens.css 需在页面加载）；提供浅色/深色传色示例
- 类型：折线 / 柱状 / 环形（三选一演示 + 教程给另两种的 option 片段）

### 10. code-block 代码高亮 `moh-code-block`
- 依赖：highlight.js（CDN，`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11/build/highlight.min.js`）
- 结构：代码容器 + 语言标签 + 复制按钮（JS）
- 主题：浅色底（surface-2）+ 语义色 token 着色（不用硬编码高亮配色，用变量可覆盖）
- 要点：复制按钮 `aria-label="复制代码"` + 复制成功反馈（toast 可联动）

### 11. drag-sort 拖拽排序 `moh-drag-sort`
- 依赖：无（原生 HTML5 drag API），交互复杂故列增强档
- 结构：列表项 draggable + 拖拽把手（≡ 图标）
- 行为：dragstart/dragover/drop 换序、拖拽中高亮目标位、键盘替代（上下方向键移动焦点项）
- 要点：`aria-grabbed` 过渡标记、完成后 aria-live 播报"已移动到第 N 位"

## 验收

- 每组件独立提交；`check-components` 通过；`check-attributions` 通过（origin=original/MIT）
- 演示页可在浏览器打开，且切换到任一主题 tokens.css 均正常（全变量化）
