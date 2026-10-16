# 手机样机 Mockup Phone

> 搬运自 **daisyUI**（<https://daisyui.com/components/mockup-phone/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

画一个手机外框（带顶部挖孔），把你的 App 界面预览放进屏幕里。常用于产品介绍页、需求文档和落地页，让用户一眼看到手机里长什么样。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选复制 [demo.html](./demo.html) 顶部的「AI 提示词」发给你的 AI，让它按你的项目生成；想直接粘贴代码，再复制成品 HTML。
3. 屏幕里的内容用任意 daisyUI 组件拼，切换主题时手机界面颜色自动跟随。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 手机外框 | `mockup-phone` |
| 顶部挖孔 | `mockup-phone-camera`（放在外框内第一个） |
| 屏幕内容区 | `mockup-phone-display` |
| 限制整体宽度 | 外层加 `max-w-xs mx-auto` |
| 屏幕铺满主题色 | display 里加 `bg-primary text-primary-content grid place-content-center` |

## 使用要点（给 AI 与新手的提醒）

- **状态栏不是组件**：daisyUI 没有 status-bar 类，时间、信号用一个 `flex justify-between` 的普通 div 自己拼。
- 屏幕内容要紧凑：手机宽度有限，条目用 `flex gap-*` 排列，别放需要横向滑动的内容。
- **禁止外链图片**：演示图块用纯色 div（`bg-base-200`、`bg-orange-400`）占位，保持零依赖。
- 外框自带手机比例，不要手动设固定宽高；整体宽度用 `max-w-*` 控制。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
