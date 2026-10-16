# 表单校验 Validator

> 搬运自 **daisyUI**（<https://daisyui.com/components/validator/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

纯 CSS、零 JS 的表单校验提示：给输入控件加 `validator` 类，浏览器依据原生 `required` / `type` / `pattern` / `minlength` / `maxlength` / `min` / `max` 判断合法与否，用户触碰并离开或提交时，合法项变绿、非法项变红；配套 `validator-hint` 把规则写成人话。它聚焦「校验后的提示样式与文案」，不重复 input 控件本身。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 打开 [demo.html](./demo.html)，首选「复制 AI 提示词」整段发给你的 AI；想自己粘贴代码，复制对应字段那一段 `<fieldset>` 到自己的页面即可。
3. 改校验规则只改 `required` / `pattern` / `minlength` 等原生属性；切换主题时，成功绿与错误红自动跟随主题变量。

## 常用写法速查

| 场景 | 关键写法 |
|---|---|
| 必填输入 | `<input class="input validator" required />` |
| 邮箱格式 | `type="email" required` |
| 密码强度 | `minlength="8"` + `pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"` |
| 用户名 | `pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30"` |
| 手机号 11 位 | `type="tel" minlength="11" maxlength="11"` |
| 数值范围 | `type="number" min="1" max="10"` |
| 必勾协议 | `<input type="checkbox" class="checkbox validator" required />` |
| 提示文字 | 紧跟控件的 `<p class="validator-hint">规则说明</p>` |
| 内嵌图标 | 外层 `<label class="input validator">`，内部 `<input class="grow">` |

## 使用要点（给 AI 与新手的提醒）

- **每个字段独立成组**：一个字段包在一个 `fieldset` 里，控件和它自己的 `validator-hint` 放一起，避免错误提示串到别的字段。
- **提示要写人话**：把规则拆成短句（长度、字符类型、格式），不要只让框变红却不告诉用户怎么改。
- **纯 CSS 做不到的别硬凑**：「两次密码一致」这类跨字段比对、实时强度条、异步查重都需要 JS，前端校验也不能替代服务端校验。
- 错误红 / 成功绿只在用户触碰字段后出现（`:user-invalid` 行为），首次进入不标红是正常的。
- `pattern` 用正则注意转义，同时配 `title`，浏览器原生提示会用到它。

## 兼容性

- 纯 CSS + 原生约束校验，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
- 各浏览器对 `:user-invalid` 的触发时机略有差异，但视觉样式与提示一致。
