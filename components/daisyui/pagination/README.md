# 分页 Pagination

> 搬运自 **daisyUI**（<https://daisyui.com/components/pagination/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

分页把很多条目的列表拆成多页，让用户在页与页之间跳转。**注意：daisyUI 5.7 已移除旧的 `pagination` 类，分页官方就是用 join 组件拼出来的。**

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」整段发给你的 AI；想自己粘贴代码，再复制成品 HTML，保存成 `.html` 双击即可预览。
3. 当前页加 `btn-active`、不可点加 `btn-disabled`；切换灰墨主题时颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 容器（一排连在一起） | `join` |
| 单个页码按钮 | `join-item btn` |
| 当前页 | 加 `btn-active` |
| 不可点（省略号 / 到头了） | 加 `btn-disabled` |
| 尺寸 | `btn-xs` `btn-sm`（默认 md）`btn-lg` `btn-xl` |
| 等宽两格（上一件 / 下一件） | `join grid grid-cols-2` + `btn-outline` |
| 窄屏换行 | 给 `join` 加 `flex-wrap justify-center` |

## 使用要点（给 AI 与新手的提醒）

- **不要再找 `.pagination` 类**：v5.7 里它不存在，分页 = `join` + `join-item btn`。
- 页数多时只露「第 1 页 … 当前页前后各一页 … 最后一页」，中间用 `btn-disabled` 省略号占位。
- 上一页在第一页、下一页在最后一页时置灰禁用，别让用户点了没反应。
- 当前页用 `btn-active` 主色实心即可，不要额外加「当前页」文字。
- 每个页码加 `aria-label="第 N 页"`，省略号加 `aria-label="更多页"`。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
