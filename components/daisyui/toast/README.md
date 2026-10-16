# 通知浮层 Toast

> 搬运自 **daisyUI**（<https://daisyui.com/components/toast/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

通知浮层是操作完成后自动弹在屏幕角落的小消息：保存成功、收到新消息、订单已发货。它几秒后自己消失，不打断用户正在做的事。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 在页面末尾放一个 `<div class="toast">` 容器，往里塞 `<div role="alert" class="alert">` 通知条目。
3. 真实项目里用 JavaScript 动态创建/移除；切换灰墨主题时颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 容器（默认底部居右） | `toast` |
| 垂直位置 | `toast-top` / `toast-middle` / `toast-bottom`（默认） |
| 水平对齐 | `toast-start` / `toast-center` / `toast-end`（默认） |
| 通知条目 | 容器内放 `alert`（可加 `alert-success` 等语义色） |
| 带按钮的通知 | alert 内最后放 `<div>` 包 `btn-sm` 按钮 |

## 使用要点（给 AI 与新手的提醒）

- `toast` 是 `position:fixed` 浮层，挂在 `<body>` 末尾；不要在普通文档流里指望它贴角落。
- 真实项目里 toast 由 JS 动态创建、3~5 秒后自动移除；写死在页面上的通知请直接用 Alert 组件。
- 一次最多堆两三条通知，成串弹出等于没有通知。
- 文案写真实事件（订单已发货、收到 3 条新消息），按钮写真实动作（查看物流），不写颜色名。
- 桌面端默认右下角；手机端建议 `toast-top toast-center`，避开底部手势区。

## 兼容性

- 纯 CSS 实现（外观部分），无框架依赖；出现/消失由少量 JavaScript 驱动。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
