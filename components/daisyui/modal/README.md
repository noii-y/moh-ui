# 对话框 Modal

> 搬运自 **daisyUI**（<https://daisyui.com/components/modal/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

对话框是必须用户做决定时才弹出的居中浮层：删除确认、填写必要信息。它带一层遮罩，不处理就不能继续当前流程。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 推荐用原生 dialog：

```html
<button class="btn" onclick="地址删除确认.showModal()">删除</button>
<dialog id="地址删除确认" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">确认删除这条收货地址？</h3>
    <p class="py-4">此操作不可撤销，删除后该地址将无法找回。</p>
    <div class="modal-action">
      <form method="dialog"><button class="btn">取消</button></form>
      <button class="btn btn-error">确认删除</button>
    </div>
  </div>
</dialog>
```

3. 切换灰墨主题时，弹窗颜色会自动跟随主题变量，无需改任何代码。

## 常用写法速查

| 想要的效果 | 类名 / 写法 |
|---|---|
| 推荐用法 | `<dialog class="modal">` + `id.showModal()` |
| 弹窗内容区 | `modal-box`（默认 max-width 32rem） |
| 底部按钮组 | `modal-action`（自动右对齐） |
| 底部抽屉形态 | 外层加 `modal-bottom` |
| 右上角关闭 ✕ | box 内放 `btn btn-sm btn-circle btn-ghost` |
| 无 JS 静态演示 | 隐藏复选框 `modal-toggle`（官方 Method 3，legacy） |

## 使用要点（给 AI 与新手的提醒）

- 真实项目用 `dialog` + `showModal()`：Esc 关闭、背景锁定、焦点圈定都由浏览器原生提供；复选框法只适合无 JS 环境或静态展示。
- 关闭按钮包一层 `<form method="dialog">`，点它自动关闭，不用写 JS。
- 每个弹窗的 `id` 全局唯一。
- 危险确认（删除、清空）主按钮才用 `btn-error`；普通确认用 `btn-primary`，退回用默认或幽灵按钮。
- 标题写真实决策问题，正文说清后果，不写"确定要执行该操作吗"这种官话。
- 描述文字多时把 `modal-box` 加宽到 `max-width:42rem` 左右，别铺满整屏。

## 兼容性

- 纯 CSS 外观 + 原生 `<dialog>`：Esc 关闭、背景锁定、焦点圈定均为浏览器原生能力。
- 颜色全部走 `--color-*` 主题变量，深浅色主题、灰墨 10 套主题均自动适配。
