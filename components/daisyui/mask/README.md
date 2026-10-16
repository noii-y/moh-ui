# 形状蒙版 Mask

> 搬运自 **daisyUI**（<https://daisyui.com/components/mask/>），许可证 MIT，© 2020 Pouya Saadeghi。
> 灰墨仅做零依赖改造与中文教程，组件样式与版权归属原作者。

## 它是什么

形状蒙版用 CSS mask 把图片或色块裁成常见形状：圆形、圆角方块、心形、六边形、星形、三角形等共 14 种。团队头像、商品图、勋章点缀都用得上。纯 CSS，不需要图片处理库。

## 怎么用（三步，零依赖）

1. 在页面 `<head>` 引入两个文件（仓库自带，不需要 npm、不需要构建）：

```html
<link rel="stylesheet" href="../../../vendor/daisyui.css" />
<link rel="stylesheet" href="../../../assets/utilities-patch.css" />
```

2. 复制 [demo.html](./demo.html) 里你需要的那一段到自己的页面——一个 `mask` 类加一个形状类。
3. 把占位渐变块换成真实照片：`<img class="mask mask-circle h-20 w-20" src="照片地址" alt="姓名">`。

## 常用写法速查

| 想要的形状 | 类名 |
|---|---|
| 圆形 | `mask mask-circle` |
| 圆角方块 | `mask mask-squircle` |
| 心形 | `mask mask-heart` |
| 竖 / 横六边形 | `mask mask-hexagon` / `mask-hexagon-2` |
| 十边形 / 五边形 / 菱形 | `mask-decagon` / `mask-pentagon` / `mask-diamond` |
| 五角星 / 粗五角星 | `mask-star` / `mask-star-2` |
| 三角（上 / 下 / 左 / 右） | `mask-triangle` / `mask-triangle-2` / `mask-triangle-3` / `mask-triangle-4` |
| 控制尺寸 | 加 `h-20 w-20` 这类宽高类 |

## 使用要点（给 AI 与新手的提醒）

- 形状由 `mask-*` 类负责裁切，**不要再写 `border-radius`**，两者会打架。
- 真实照片用 `<img>` 时必须写 `alt`；纯装饰的渐变占位块不需要 alt。
- 头像区默认用 `mask-circle`；心形、星形只在活动页、勋章上少量点缀，别整页混用。
- 纯 CSS 裁切，复制出去到任何项目都能直接跑。

## 兼容性

- 纯 CSS 实现，无 JavaScript、无框架依赖，HTML 直接可用。
- 现代浏览器（Chrome / Edge / Firefox / Safari 近两年版本）均支持 CSS mask。
