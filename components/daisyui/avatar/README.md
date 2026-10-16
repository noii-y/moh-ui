# 头像 Avatar

> 搬运自 **daisyUI**（<https://daisyui.com/components/avatar/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

头像是代表一个人或一个团队的小图，出现在资料页、评论区、群成员列表、评论点赞记录里。没有照片时用文字占位，有照片时换成 `<img>`。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 首选点 [demo.html](./demo.html) 顶部的「复制 AI 提示词」整段发给你的 AI，让它按你的项目生成；想直接粘贴代码，再打开 demo.html 复制里面具体需要的那一段。
3. 切换灰墨主题时，占位底色与状态点会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 |
|---|---|
| 头像本体 | `avatar` + 内层 `w-8`～`w-24` + 圆角 `rounded-full` |
| 文字占位 | 加 `avatar-placeholder`，内层放 `bg-neutral text-neutral-content` 圆块 + 汉字 |
| 在线 / 离线点 | `avatar-online` / `avatar-offline` |
| 圆形 / 方圆 / 六边 / 三角轮廓 | 内层加 `mask mask-circle` / `mask-squircle` / `mask-hexagon` / `mask-triangle` |
| 多人叠放组 | 外层 `avatar-group`，从第二个头像起加负左边距重叠 |

## 使用要点（给 AI 与新手的提醒）

- **三层结构别错**：`avatar` → `w-*` 尺寸层 → 内容层（img 或文字占位块）。
- 演示环境没有真人照片，统一用「汉字 + 中性底色圆块」占位，零外部图片依赖。
- 群组叠放从第二个头像起用 `style="margin-left:-1.25rem"` 重叠（补丁层暂缺 `-space-x-*` 工具类），组末放「+N」而不是把人全铺开。
- 形状选一个全站统一，不要在一排头像里混用圆、六边形、三角形。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨主题均自动适配。
