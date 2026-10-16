# 验证码输入 OTP

> 搬运自 **daisyUI**（<https://daisyui.com/components/otp/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

一次性验证码（One-Time Password）输入框，常见于短信验证码、两步验证（2FA）、免密登录。通常为 4–6 位数字。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 复制 [demo.html](./demo.html) 中的 `<label class="otp">`；
3. **span 数量必须等于 maxlength**（4 位就放 4 个 `<span>`）。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 基础 | `otp`，配 4 个 span + `maxlength="4"` |
| 6 位 | 6 个 span + `maxlength="6"` |
| 连接样式 | `otp otp-joined` |
| 尺寸 | `otp-xs` ~ `otp-xl` |
| 语义色 | `otp-primary` / `otp-success` / `otp-error` |
| 禁用 | input 加 `disabled` |

## 使用要点

- **span 数量必须和 maxlength、pattern 一致**，这是最容易踩的坑：6 位验证码却只放 4 个空格会错位。
- input 上务必带 `inputmode="numeric"`（手机弹数字键盘）、`autocomplete="one-time-code"`（iOS 可自动填短信验证码）。
- 用 `pattern="[0-9]{N}"` 限制只能是数字。
- 旁边放"重新发送（59s）"按钮与"验证码已发送至 138****0000"的提示。
- 输错时整体标红（`otp-error`）并允许一键清空重填。

## 兼容性

纯 CSS + 原生文本框；自动填充体验依赖浏览器/系统，键盘弹数字键盘需 `inputmode`。
