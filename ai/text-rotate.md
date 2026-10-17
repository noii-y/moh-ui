# 文字轮转（text-rotate） · 灰墨 MoH_UI

> 一句话里的关键词自动循环轮换（最多 6 词、默认 10 秒一轮），覆盖基础三词、六词大字居中、句子混排彩底、自定义行高与速度等用法，零依赖纯 CSS。

分类：数据展示　｜　来源：daisyUI（MIT） · [官方文档](https://daisyui.com/components/text-rotate/)　｜　依赖：无（零依赖）

## 给 AI 的实现指令
请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：SaaS 首屏会轮换的大标语（文字轮转）。

【场景】SaaS 产品官网首屏（hero）里一句居中的大标语：句子中间的关键词会自动轮换 3 组词「写文案 / 做设计 / 写代码」，用主色高亮，体现"一个人也能把产品做完"。
【怎么排】
- 一句完整中文标语，中间关键词用 text-primary 主色包起来，里面再套 text-rotate 轮换词组，其余文字保持静止；
- 外层 text-rotate 是内联块、高度只有一行、自动裁掉溢出的词；内层一个普通 span 装各个轮换词，每个词一个 span；
- 3 个词默认 10 秒一轮、自动循环；鼠标悬停在轮换词上自动暂停；
- 整句居中、大字号 font-bold + leading-tight，窄屏让句子自然换行，不要给轮换词写死宽度。
【精确规格】
- 结构：<span class="text-primary"><span class="text-rotate"><span><span>写文案</span><span>做设计</span><span>写代码</span></span></span></span>。
- 轮换词为 3~6 个、每个 2~4 字的真实中文动作词，禁止用颜色名当文案。
- 大字号标语用 text-5xl / text-7xl（补丁档位），不要用更大的字号，避免窄屏溢出。
- 自定义轮换速度在内层 span 上写 style="animation-duration:6s"；自定义行高在外层写 style="line-height:2"；不要用 duration-* 类。
- 轮换词只是装饰性强调：页面关键信息不能只放在轮换词里。

【参考结构】（照此实现，外层标签可按我的项目调整）
```html
<div class="w-full py-12 text-center">
  <p class="mb-4 font-bold text-primary">智能工作台 · 新发布</p>
  <h2 class="text-5xl font-bold leading-tight">
    一个人也能把产品
    <br />
    <span class="text-primary">
      <span class="text-rotate">
        <span>
          <span>写文案</span>
          <span>做设计</span>
          <span>写代码</span>
        </span>
      </span>
    </span>
    全部上线
  </h2>
  <p class="mx-auto mt-6 max-w-xl">文案、设计与代码在同一个工作台上流转，每次打开都有新的关键词被点亮；鼠标悬停在轮换词上时自动暂停。</p>
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

- 完整中文教程与全部变体（在线页面）：https://noii-y.github.io/moh-ui/components/daisyui/text-rotate/demo.html
- 上游官方文档：https://daisyui.com/components/text-rotate/
- 全站 68 个组件的 AI 索引：https://noii-y.github.io/moh-ui/llms.txt
