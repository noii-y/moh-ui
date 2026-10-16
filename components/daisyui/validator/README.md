# 表单校验 Validator

> 搬运自 **daisyUI**（<https://daisyui.com/components/validator/>），MIT，© 2020 Pouya Saadeghi。

## 它是什么

**纯 CSS、零 JS** 的表单校验：给控件加 `validator`，浏览器依据 `required` / `pattern` / `minlength` / `min` / `max` 等原生约束，合法时显示绿色、非法时显示红色；配套 `validator-hint` 在校验失败时显示提示文字。

## 怎么用（零依赖）

1. 引入 `vendor/daisyui.css` 与 `assets/utilities-patch.css`；
2. 控件加 `validator` 类，并用原生属性写明规则；
3. 紧跟一个 `<p class="validator-hint">` 写错误提示；
4. 建议用 `<fieldset class="fieldset">` 把控件和提示包成一组，避免提示串到别的字段。

## 常用校验规则

| 场景 | 关键属性 |
|---|---|
| 必填 | `required` |
| 邮箱 | `type="email"` |
| 网址 | `type="url"` |
| 密码强度 | `pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"` |
| 用户名 | `pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30"` |
| 手机号 | `type="tel" pattern="[0-9]*" minlength="11" maxlength="11"` |
| 数值范围 | `type="number" min="1" max="10"` |
| 日期范围 | `type="date" min="…" max="…"` |
| 必勾协议 | `type="checkbox" required` |

## 使用要点（重要）

- **纯 CSS 校验只能做格式初筛，不能替代后端校验**：用户可绕过前端，最终合法性必须在服务端再验一遍。
- `validator-hint` 默认会占位（防止提示出现时布局跳动）；若想隐藏时不占空间，加 `hidden` 类（校验失败会自动显示）。
- **多个校验字段务必各自用 fieldset 包裹**，否则一个非法输入可能让同层级所有提示都显示。
- `pattern` 用的是正则，注意转义；同时配 `title` 属性，浏览器原生提示也会用到它。
- 提交前再统一滚动到第一个出错的字段，避免用户不知道哪里没填。

## 兼容性

纯 CSS 利用原生 `:invalid` / `:valid` 伪类，现代浏览器全支持；无需 JS。
