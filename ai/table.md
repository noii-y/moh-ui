# 表格（table） · 灰墨 MoH_UI

> 后台订单管理（状态徽章+操作列）、边框背景、table-zebra 斑马纹、row-hover 悬停、table-pin-rows 粘性表头、table-pin-cols 粘性首列+复选头像、table-xs 紧凑尺寸，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/table/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：后台订单管理表格（表格）。

【场景】电商后台的订单管理表格：一列订单号、商品、金额、状态、操作，运营人员每天在这里看单、点发货。
【怎么排】
- 表外套 <div class="overflow-x-auto">：列多窄屏时表内横向滑动，页面本身不溢出。
- 状态列用语义徽章（badge badge-sm + badge-success / badge-warning / badge-info / badge-error），不要只用红绿字体。
- 操作列放最后：次要动作用 btn btn-xs btn-ghost「查看」，当前状态对应的主动作（待付款→收款、待发货→发货、已发货→跟踪物流）才用 btn-primary；没有该状态动作就留空。
- 金额列右对齐、等宽数字，方便逐位比较。
【精确规格】
- 表格本体：<table class="table">，thead 一行 th，tbody 每单一行 tr；不要给表格设死宽，让它在容器里自然撑开。
- 行内按钮用 div class="flex flex-wrap gap-1" 排列（窄屏自动折成两排，不挤溢出）；手机 390px 下表格允许表内横向滚动，但页面 scrollWidth 必须等于视口宽。
- 如果行数多、需要纵向滚动：把表放进定高容器（如 height 16rem + overflow-y-auto）并给 table 加 table-pin-rows，表头吸顶；列很多需要横向滚动时加 table-pin-cols 让首列吸左。没有定高容器时不要加 pin 类。
- 状态文案写真实中文（已付款 / 待发货 / 已发货 / 已完成 / 已取消），按钮写真实动作，禁止出现颜色名。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="overflow-x-auto w-full">
  <table class="table table-sm">
    <thead>
      <tr>
        <th>订单号</th>
        <th>商品</th>
        <th class="text-right">金额</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>DD-1001</td>
        <td>云感无线耳机</td>
        <td class="text-right tabular-nums">¥299.00</td>
        <td><span class="badge badge-sm badge-success">已付</span></td>
        <td>
          <div class="flex flex-wrap gap-1">
            <button class="btn btn-xs btn-ghost">查看</button>
            <button class="btn btn-xs btn-primary">发货</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>DD-1002</td>
        <td>便携咖啡杯 500ml</td>
        <td class="text-right tabular-nums">¥89.00</td>
        <td><span class="badge badge-sm badge-warning">待发</span></td>
        <td>
          <div class="flex flex-wrap gap-1">
            <button class="btn btn-xs btn-ghost">查看</button>
            <button class="btn btn-xs btn-primary">发货</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>DD-1003</td>
        <td>机械键盘 87 键</td>
        <td class="text-right tabular-nums">¥459.00</td>
        <td><span class="badge badge-sm badge-info">已发</span></td>
        <td>
          <div class="flex flex-wrap gap-1">
            <button class="btn btn-xs btn-ghost">查看</button>
            <button class="btn btn-xs btn-soft">跟踪</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>DD-1004</td>
        <td>护眼台灯</td>
        <td class="text-right tabular-nums">¥199.00</td>
        <td><span class="badge badge-sm badge-neutral">完成</span></td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-xs btn-ghost">查看</button>
          </div>
        </td>
      </tr>
      <tr>
        <td>DD-1005</td>
        <td>收纳箱三件套</td>
        <td class="text-right tabular-nums">¥129.00</td>
        <td><span class="badge badge-sm badge-error">取消</span></td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-xs btn-ghost">查看</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/table/demo.html
- 上游官方文档：https://daisyui.com/components/table/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
