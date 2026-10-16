# mo-pastel · 粉彩（柔和浅色）

> 灰墨 MoH_UI 主题包。暖粉底、莓果主色、亲和圆润，给教育 / 生活服务 / 健康类产品一份"不幼稚的可爱"。
> 风格参考来源：shadcn.io 主题 "Marshmallow"（<https://www.shadcn.io/theme/marshmallow>，MIT 社区主题站）。色板为灰墨自研，仅风格取向参考，未搬运原色值。

## 适用场景

- 在线教育、亲子 / 儿童产品后台
- 健康管理、生活服务类小程序后台
- 需要亲和力但不想丢失专业感的 C 端运营台

## 使用方法（给 AI 编程工具）

1. 引入本主题的 `tokens.css` 与 `base.css`：

   ```html
   <link rel="stylesheet" href="tokens.css" />
   <link rel="stylesheet" href="base.css" />
   ```

2. 将项目中与 `--moh-*` 冲突的旧变量、内联颜色、硬编码样式替换为变量引用；
3. 组件类名统一 `moh-` 前缀（`moh-btn` / `moh-input` / `moh-table` / `moh-card` 等）；
4. 应用后按自检清单自查：背景微粉暖白、主文字深玫瑰棕、组件与 `preview.html` 一致、对比度 ≥4.5、无报错。

## 设计变量摘要

- 页面底 `#faf7f8`，卡片 `#ffffff`，主文字 `#45343d`，次级文字 `#71606b`
- 主色 `#8e3b5e`（深莓果玫红，白字对比 6.9:1）；状态色用标准语义色
- 字号阶 12/13/14/16/20/24，间距 8px 网格，圆角 6/10/14，控件高 32px

## 文件

- `tokens.css` — 设计变量
- `base.css` — 按钮 / 输入 / 表格 / 卡片基础样式
- `preview.html` — 预览基准页（应用后对照检查）

## 来源声明

- 风格参考：Marshmallow（shadcn.io，MIT）——仅理念参考，色值为自研
- 色板设计：灰墨 MoH_UI（MIT）
