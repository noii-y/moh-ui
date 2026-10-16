# 状态点 Status

> 搬运自 **daisyUI**（<https://daisyui.com/components/status/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

一个小圆点，表示「在线 / 离线 / 告警」：服务运行状态、用户在线状态、订单流转状态都用它。通常永远配一句人话文字出现。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段 `<span class="status …">` 到自己的页面。
3. 颜色加 `status-success` 等语义类，大小加 `status-xs` 到 `status-xl`；切换灰墨主题时自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 正常 / 失败 / 警告 / 信息 / 离线 | `status status-success` / `status-error` / `status-warning` / `status-info` / `status-neutral` |
| 主色 / 次色 / 强调色 | `status-primary` / `status-secondary` / `status-accent` |
| 尺寸 | `status-xs` `status-sm`（默认 md）`status-lg` `status-xl` |
| 圆点配文字 | `<div class="flex items-center gap-2"><span class="status status-success"></span><span>服务正常</span></div>` |
| 晕开提醒（重连中） | 两个同色点叠同一格，后排加 `animate-ping` |

## 使用要点（给 AI 与新手的提醒）

- **圆点必须配文字**：颜色给扫一眼的人，文字给认真读的人；单独一个红点不写含义，用户只能猜。
- 颜色即状态：绿=正常、红=失败、橙=维护、蓝=进行中、灰=离线，一屏不要超过三种状态色。
- `animate-ping` / `animate-bounce` 只给「正在恢复、等待处理」的异常点，正常状态不要动。
- 叠放做法：外层 `<span class="grid" style="grid-template-columns:max-content">`，两个同色点都写 `style="grid-area:1/1"`，后排那个加动画类。
- 纯装饰点加 `aria-hidden="true"`；文字已写清状态就不要给点加 `alt`。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色走主题变量，深浅色主题、灰墨 10 套主题均自动适配。
