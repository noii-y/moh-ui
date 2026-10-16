# vendor/ 第三方运行时底座

本目录存放灰墨组件库**直接搬运**的第三方开源运行时文件，**不做源码修改**，仅原样复制并保留原许可证。

## daisyui.css

- 项目：daisyUI（<https://github.com/saadeghi/daisyui>）
- 版本：5.7.50
- 许可证：MIT（© 2020 Pouya Saadeghi，见 `LICENSE-daisyui.txt`）
- 官网：<https://daisyui.com>
- 本文件：daisyUI 全量组件样式（约 68 个组件 + 基础样式），**无 Tailwind、无构建、无 JS 依赖**，一个 `<link>` 即可使用。
- 搬运方式：从 npm 包 `daisyui@5.7.50` 的 `daisyui.css` 原样复制，未修改。

## daisyui-themes.css

- 同源、同版本、同许可证。
- 内容：daisyUI 官方 35 套主题色板（`:root` / `[data-theme="..."]`）。
- 用途：需要用 `data-theme` 切换官方主题时引入；灰墨自有主题（`themes/mo-*/tokens.css`）不依赖它，可只引 `daisyui.css`。

## 如何引用

```html
<!-- 只需组件样式（搭配灰墨主题 tokens） -->
<link rel="stylesheet" href="vendor/daisyui.css" />
<!-- 可选：官方 35 套主题切换 -->
<link rel="stylesheet" href="vendor/daisyui-themes.css" />
<!-- 可选：Tailwind 工具类补丁（让官网 demo 无 Tailwind 也能跑） -->
<link rel="stylesheet" href="assets/utilities-patch.css" />
```

## 说明

- 灰墨的工作是**搬运 + 零依赖改造 + 中文教程 + 主题二创**，组件本身的版权与设计归属 daisyUI 原作者。
- 升级版本时，重新从 npm 包复制对应文件，并更新本文件中的版本号与 `ATTRIBUTIONS.md`。
