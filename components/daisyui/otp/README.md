# 验证码输入 OTP

> 搬运自 **daisyUI**（<https://daisyui.com/components/otp/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

一次性验证码（One-Time Password）输入框，常见于短信验证码、两步验证（2FA）、免密登录。通常为 4–6 位数字，视觉上是一排独立小格，背后其实是一个单行输入框。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应那一段 `<label class="otp">…</label>` 到自己的页面即可。
3. **span 数量必须等于 maxlength**（4 位就放 4 个 `<span>`）；切换灰墨主题时颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 基础 4 位 | `otp` + 4 个 span + `maxlength="4"` |
| 6 位 | 6 个 span + `maxlength="6"` |
| 连接样式 | `otp otp-joined` |
| 尺寸五档 | `otp-xs` `otp-sm`（默认 md）`otp-lg` `otp-xl` |
| 语义状态色 | `otp-primary` / `otp-success` / `otp-error` |
| 禁用 | input 加 `disabled` |
| 必备属性 | `inputmode="numeric"` `autocomplete="one-time-code"` `pattern="[0-9]{N}"` |

## 使用要点（给 AI 与新手的提醒）

- **span 数量必须和 maxlength、pattern 一致**：6 位验证码只放 4 个空格会错位，这是最常见的坑。
- **三个属性一定要加**：`inputmode="numeric"` 弹数字键盘、`autocomplete="one-time-code"` 让 iOS 自动填短信、`pattern` 限制只能是数字。
- 旁边用 `fieldset-label` 写「验证码已发送至 138****0000 · 重新发送（60s）」；倒计时、重发按钮、输一位自动跳格、粘贴自动填满都是 JS 增强，本组件不含。
- 6 位大尺寸在 390px 窄屏可能偏宽，移动端优先默认或 sm，或用 `otp-joined` 紧凑排列。
- `otp-error` 红框只在验证码错误时用，并配文字说明；不要默认给验证码框涂颜色。

## 兼容性

- 纯 CSS + 原生文本框，无框架依赖，HTML 直接可用。
- 自动填充体验依赖浏览器 / 系统，数字键盘需 `inputmode`。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
