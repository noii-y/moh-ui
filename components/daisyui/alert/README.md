# 提示条 Alert

> 搬运自 **daisyUI**（<https://daisyui.com/components/alert/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

提示条是一条横向的结果说明：表单保存成功、库存不足、支付失败。它就地出现在页面里，不打断用户当前操作。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<div role="alert">` 到自己的页面。
3. 切换灰墨主题时，提示条颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础提示条 | `alert` |
| 信息 / 成功 / 警告 / 错误 | `alert-info` / `alert-success` / `alert-warning` / `alert-error` |
| 柔和浅色风格 | 在颜色类后加 `alert-soft` |
| 描边 / 虚线描边 | `alert-outline` / `alert-dash` |
| 左侧图标 | 内部第一个子元素放 `h-6 w-6` 单色 SVG |
| 右侧按钮组 | 提示条内最后放一个 `<div>` 包 `btn-sm` 按钮 |

## 使用要点（给 AI 与新手的提醒）

- 根元素必须加 `role="alert"`，读屏软件会自动播报这条提示。
- 颜色只表达含义：蓝色告知、绿色成功、橙色注意、红色出错；不要为了好看把所有提示都染成彩色。
- 一条提示只说一件事，文案写"结果 + 下一步"（修改已保存，可在账号资料继续编辑），不写"操作成功"这种空话。
- 图标统一 `h-6 w-6`、`stroke-current`，和文字同色，不要另起颜色。
- 成功提示停留 3~5 秒后自动消失；错误类保留到用户手动关闭。
- 提示条（就地结果）、通知浮层（自动消失的角落消息）、对话框（要用户做决定）三者别混用。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
