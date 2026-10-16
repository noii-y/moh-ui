# 步骤条 Steps

> 搬运自 **daisyUI**（<https://daisyui.com/components/steps/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

步骤条把一个流程拆成有序的几步，让用户知道「走到哪了、还差几步」：电商下单、账号开通、报销审批、设置向导都用它。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」整段发给你的 AI；想自己粘贴代码，再复制成品 HTML，保存成 `.html` 双击即可预览。
3. 改状态只改每一步的 class 和 `data-content`；切换灰墨主题时颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 容器 | `<ul class="steps">` |
| 单个步骤 | `<li class="step">填写收货地址</li>` |
| 已完成（打勾） | `step-primary` + `data-content="✓"` |
| 当前步高亮 | `step-primary` |
| 未到 / 置灰 | `step-neutral` |
| 异常步骤 | `step-error`（配一句说人话的原因） |
| 纵向排列（向导页） | `steps-vertical` |
| 节点放自定义符号 | `data-content="!"` / `"✕"` / `"?"` |
| 步骤太多防溢出 | 外层包 `overflow-x-auto` |

## 使用要点（给 AI 与新手的提醒）

- **三种状态三种色**：完成 = 主色打勾，当前 = 主色，未到 = 中性灰；不要每步都涂彩色。
- 步骤名称写完整中文（「支付」），别只放图标或符号。
- 超过五六步时外层包 `overflow-x-auto`，手机上不要挤换行、更不要撑出整页横向滚动。
- 手机端向导页用 `steps-vertical`，每步的表单内容跟在节点后面。
- 「一件事在后台跑」（上传、导出）用进度条，不要用步骤条。

## 兼容性

- 纯 CSS 展示组件，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
