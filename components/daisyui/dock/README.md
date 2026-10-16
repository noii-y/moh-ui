# 底部停靠导航 Dock

> 搬运自 **daisyUI**（<https://daisyui.com/components/dock/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

Dock（底部导航 / Bottom bar）是手机 App 屏幕底部的一级导航栏：三到五个入口均匀排开，当前页高亮，中间常放一个凸起的圆形主操作按钮（购物车、发布、扫码）。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」整段发给你的 AI；想自己粘贴代码，再复制成品 HTML，保存成 `.html` 双击即可预览。
3. 在你的手机页面里它会自动吸在屏幕底部；切换灰墨主题时颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 容器 | `dock` |
| 单个入口按钮 | `dock` 里直接放 `<button>` |
| 图标下的文字标签 | `dock-label` |
| 当前所在页高亮 | 按钮加 `dock-active` |
| 紧凑纯图标栏 | `dock-xs` |
| 大号导航 | `dock-lg`（另有 `dock-sm` `dock-xl`） |
| 未读数量提示 | 按钮内叠 `badge badge-sm badge-primary` |
| 文档流里演示（不吸底） | 额外加 `static` 抵消默认 fixed |

## 使用要点（给 AI 与新手的提醒）

- **入口只放 3–5 个一级页面**：首页、分类、购物车、消息、我的；次级页面用页内按钮跳转。
- 官方 `.dock` 默认 `position: fixed; bottom: 0`，正式项目就保留吸底；灰墨演示页为了放进舞台加了 `static`，**复制到项目时把 `static` 去掉**。
- 当前页按钮加 `dock-active`；纯图标按钮必须加 `aria-label`。
- 图标统一 `h-6 w-6` 线性 SVG，不要用 emoji。
- iOS 上需要 `<meta name="viewport" content="viewport-fit=cover">` 才能正确适配底部安全区。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
