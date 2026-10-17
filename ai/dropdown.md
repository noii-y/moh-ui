# 下拉菜单（dropdown） · 灰墨 MoH_UI

> 头像下拉菜单、卡片式弹层、上/左/右弹出方向、菜单分组与分隔线，零依赖纯 CSS（CSS focus 写法）。

分类：反馈　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/dropdown/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：顶栏头像下拉菜单（下拉菜单）。

【场景】网站顶栏右侧的用户头像下拉菜单：圆形头像按钮点一下，在它下方展开一列账号操作（个人中心 / 我的订单 / 地址管理 / 退出登录）。
【怎么排】
- 外层 <div class="dropdown dropdown-end">：dropdown 是容器（本身已带 relative 定位），dropdown-end 让展开的菜单与按钮右对齐；
- 真实页面里头像本身就在顶栏右边缘，菜单向左展开不会溢出；文档舞台里先 <div class="flex w-full justify-end"> 把头像推到右侧，右对齐的菜单才不会向左溢出舞台；
- 触发元素：<div tabindex="0" role="button" class="btn btn-circle btn-primary">我</div>（圆形主色按钮，里面放一个汉字「我」，不要外链头像图）；
- 菜单：<ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box w-52 border border-base-300 p-2">，里面四个 <li><a>…</a></li>，依次为个人中心 / 我的订单 / 地址管理 / 退出登录；
- 「退出登录」加 text-error 用红色表示危险操作，其余为普通文字色。
【精确规格】
- 真实交互：用户点按 / Tab 聚焦触发元素时菜单展开，失焦自动收起，全程零 JavaScript；不要为下拉写业务 JS。
- 如需鼠标悬停也展开，容器加 dropdown-hover；但移动端没有悬停，必须保留上面的点按 / 聚焦写法兜底，不能只靠 hover。
- 静态预览：容器上临时加 dropdown-open 类强制展开（用于截图 / 文档展示），同时给容器内联 style="min-height:19rem" 之类的高度，让展开的菜单完整露出、不被下一个元素裁切；上线前去掉 dropdown-open。
- 用到的类全部真实存在：dropdown、dropdown-end、dropdown-open、dropdown-content、menu、bg-base-100、rounded-box、w-52、w-48、border、border-base-300、p-2、btn、btn-circle、btn-primary、text-error、divider、menu-title；不要写不存在的 z-1 / shadow-sm。
- 菜单文案写真实功能名（个人中心 / 退出登录），禁止出现 Primary / 成功 这类颜色名当文案；颜色全部走 daisyUI 主题变量。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="flex w-full justify-end">
  <div class="dropdown dropdown-end dropdown-open" style="min-height:19rem">
    <div tabindex="0" role="button" class="btn btn-circle btn-primary">我</div>
    <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box w-52 border border-base-300 p-2">
      <li><a>个人中心</a></li>
      <li><a>我的订单</a></li>
      <li><a>地址管理</a></li>
      <li><a class="text-error">退出登录</a></li>
    </ul>
  </div>
</div>
```

【灰墨审美硬边界（必须遵守）】
- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。
- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。
- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。
- 正文对比度 ≥ 4.5:1；主色全库唯一，状态色语义化（成功绿/警告橙/危险红）；不要大面积高饱和撞色、大面积渐变、多层阴影，不要用 emoji 当图标（用单色 SVG）。
- 动效不超过 200ms，不做装饰性的闪烁、缩放、弹跳入场动画；组件自带的功能性状态动画除外（loading 旋转、status 状态点 ping/bounce、toggle/swap 切换、collapse 展开等），保留官方默认即可，不要再额外叠加装饰动画。
- 颜色全部走 CSS 变量（daisyUI 主题变量），不要写死颜色。

【交付要求】
- 给我能直接放进项目的完整 HTML（class 版、不依赖框架；外层标签可按我的项目结构调整）。
- 如果我的项目还没引入 daisyUI 5，请先告诉我需要在 <head> 里加一行 daisyui.css 的引用。
- 做完后在桌面 1280px 和手机 375px 两个宽度下自查：控件不溢出容器、不被裁切、不换行错位、文字不贴边、焦点可见。

---

## 底座引入

本组件基于 daisyUI 5（纯 CSS、零 JS、零构建）。若目标项目还没有引入，在 `<head>` 加这两行即可：

```html
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/vendor/daisyui.css">
<link rel="stylesheet" href="https://noii-y.github.io/moh-ui/assets/utilities-patch.css">
```

## 更多

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/dropdown/demo.html
- 上游官方文档：https://daisyui.com/components/dropdown/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
