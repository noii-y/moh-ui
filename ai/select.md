# 下拉选择（select） · 灰墨 MoH_UI

> 占位必选项、幽灵 select-ghost、fieldset 字段标签、语义状态色边框、五档尺寸、禁用，并以结算页收货地址选择区为成品示例，零依赖纯 CSS。

分类：表单　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/select/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：结算页收货地址选择区（下拉选择）。

【场景】电商结算页里的收货地址选择区：让用户依次选省、市、区，需要补新地址时用虚线按钮添加，最后点保存地址。
【怎么排】
- 用 fieldset.fieldset（rounded-box border border-base-300 p-4 max-w-lg w-full）把地址选择包成一组，legend 写「收货地址」；
- 省、市、区三个下拉各一行（flex flex-col gap-3 w-full），每个都加 w-full 占满整行；
- 每个下拉第一项是 <option disabled selected> 占位：分别写「请选择省份」「请选择城市」「请选择区 / 县」，不要默认选中一个真实地区；
- 占位项下面放一个虚线新增按钮「新建地址」（btn btn-dash btn-primary，左侧一个加号 SVG 图标 h-5 w-5）；
- 最下面一行放主操作「保存地址」（btn btn-primary），用 flex flex-wrap gap-2 自然排列，不要用 ml-auto 推到右边。
【精确规格】
- 下拉用 <select class="select w-full">，选项写真实中文地名。
- 标签、按钮文案写真实动作，禁止出现 Primary / 成功 / 主要 这类颜色名当文案。
- 用到的类全部真实存在：select、w-full、fieldset、fieldset-legend、flex、flex-col、flex-wrap、gap-2、gap-3、p-4、rounded-box、border-base-300、max-w-lg、btn、btn-primary、btn-dash。
- 不要写死颜色，全部走 daisyUI 主题变量；除展示外不要加任何交互 JS。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<fieldset class="fieldset rounded-box border border-base-300 p-4 max-w-lg w-full">
  <legend class="fieldset-legend">收货地址</legend>
  <div class="flex flex-col gap-3 w-full">
    <select class="select w-full">
      <option disabled selected>请选择省份</option>
      <option>湖北省</option>
      <option>湖南省</option>
      <option>广东省</option>
      <option>江苏省</option>
    </select>
    <select class="select w-full">
      <option disabled selected>请选择城市</option>
      <option>武汉市</option>
      <option>宜昌市</option>
      <option>襄阳市</option>
    </select>
    <select class="select w-full">
      <option disabled selected>请选择区 / 县</option>
      <option>洪山区</option>
      <option>武昌区</option>
      <option>江汉区</option>
    </select>
    <button class="btn btn-dash btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
      新建地址
    </button>
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-primary">保存地址</button>
    </div>
  </div>
</fieldset>
```

【灰墨审美硬边界（必须遵守）】
- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。
- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。
- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。
- 凡会弹出覆盖层的组件（对话框、抽屉、下拉菜单、大菜单）：优先用原生 <dialog> + showModal() 或 popover API（popovertarget + [popover]），不要自己写焦点陷阱；做到打开后焦点进入弹层、Tab 只在弹层内循环跑不到背景、Esc 可关（菜单点外部也可关）、关闭后焦点回到触发按钮；触发按钮加 aria-expanded / aria-controls，弹层标题用 aria-labelledby 关联。纯 hover 提示的 tooltip 不拦截焦点，不需要这套。
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/select/demo.html
- 上游官方文档：https://daisyui.com/components/select/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
