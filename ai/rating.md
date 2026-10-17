# 评分（rating） · 灰墨 MoH_UI

> 五星默认选中、心形多色、尺寸 xs~lg、rating-hidden 可清除、rating-half 半星、disabled 只读展示平均评分，纯 CSS mask 图形，零依赖。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/rating/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：商品评价区打星输入（评分）。

【场景】商品评价区里的打星输入：默认 0 星、不预设分数，用户点星星打分，下方放一个「提交评价」主按钮。
【怎么排】
- 用 fieldset.fieldset（w-full max-w-md）包住打星，legend（fieldset-legend）写「为这次购物打分」；
- 打星容器 <div class="rating rating-lg">，最前面放一个 class="rating-hidden" 的 radio（aria-label="清除评分"），让用户能取消已选；
- 后面 5 颗星每颗都是 <input type="radio" name="hero-rate" class="mask mask-star-2 bg-orange-400" aria-label="N 星" />，默认都不 checked（即 0 星）；
- 打星下方一行 fieldset-label 写「点星星给商品打分，不打也可直接提交文字评价」；
- 最下方 flex flex-wrap gap-2 放主按钮「提交评价」（btn btn-primary），整组竖向堆叠、左对齐，不写任何 JS。
【精确规格】
- 同一组 5 颗星 radio 必须共用同一个 name；每颗都要有 aria-label（1 星～5 星）；不同页面组之间 name 不能重名。
- 用到的类全部真实存在：rating、rating-lg、rating-hidden、mask、mask-star-2、bg-orange-400、fieldset、fieldset-legend、fieldset-label、flex-wrap、gap-2、btn-primary。
- 文案写真实业务动作（提交评价、为这次购物打分），禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 展示平均分时给 radio 加 disabled 并按分数选中前几颗，旁边配数字；不要让用户在只读展示区里能点。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<fieldset class="fieldset w-full max-w-md">
  <legend class="fieldset-legend">为这次购物打分</legend>
  <div class="rating rating-lg">
    <input type="radio" name="hero-rate" class="rating-hidden" aria-label="清除评分" />
    <input type="radio" name="hero-rate" class="mask mask-star-2 bg-orange-400" aria-label="1 星" />
    <input type="radio" name="hero-rate" class="mask mask-star-2 bg-orange-400" aria-label="2 星" />
    <input type="radio" name="hero-rate" class="mask mask-star-2 bg-orange-400" aria-label="3 星" />
    <input type="radio" name="hero-rate" class="mask mask-star-2 bg-orange-400" aria-label="4 星" />
    <input type="radio" name="hero-rate" class="mask mask-star-2 bg-orange-400" aria-label="5 星" />
  </div>
  <p class="fieldset-label">点星星给商品打分，不打也可直接提交文字评价</p>
</fieldset>
<div class="flex flex-wrap gap-2">
  <button class="btn btn-primary">提交评价</button>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/rating/demo.html
- 上游官方文档：https://daisyui.com/components/rating/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
