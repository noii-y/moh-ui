# 对话气泡 Chat

> 搬运自 **daisyUI**（<https://daisyui.com/components/chat/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

对话气泡把一条条消息排成对话流：谁说的、什么时候发的、读到没，一行一条，左右分边。客服窗口、留言板、评论区、群聊都用它。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 顶部的「复制 AI 提示词」整段发给你的 AI，让它按你的项目生成；想直接粘贴代码，再打开 demo.html 复制里面具体需要的那一段。
3. 切换灰墨主题时，气泡颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 一条消息 | `.chat` 容器 + 内部 `.chat-bubble` |
| 靠右（我方）/ 靠左（对方） | `chat-end` / `chat-start`（必加其一） |
| 头像 | 气泡前加 `<div class="chat-image avatar">…</div>` |
| 名字 + 时间 | `<div class="chat-header">…<time class="text-xs opacity-50">…</time></div>` |
| 已读状态 | `<div class="chat-footer opacity-50">已读</div>` |
| 气泡语义色 | 气泡上加 `chat-bubble-success` / `warning` / `error` / `info` / `primary` 等 |

## 使用要点（给 AI 与新手的提醒）

- **每条形如「谁 + 时间 + 气泡 + 状态」四件套**，气泡正文不可省略，其余按场景取舍。
- 没有真人照片就用文字占位头像（一个汉字 + 中性底色圆块），不要外链图片。
- 气泡颜色是语义色：普通对话一律默认底，成功/警告/错误/系统提示才上色。
- 一条消息别超过三行，太长就拆条。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
