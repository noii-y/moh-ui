/* ============================================================
 * 灰墨 MoH_UI · 组件详情页交互（所有搬运组件共用）
 * 主路径：复制「AI 提示词」——把规格 + 参考结构 + 审美硬边界 + 交付
 *         自查整段发给 AI，让它结合用户项目产出代码（用户不用读/改 HTML）。
 * 辅路径：复制「成品 HTML」——给想直接粘贴、双击预览的进阶用户。
 * 变体：每个变体标题行右侧「</> 代码」展开深色代码面板。
 * 见 assets/demo-page.css 配套样式。
 * 自检：URL 加 ?dump-prompt=1 可在页面上看到完整提示词全文，供逐字核对。
 * ============================================================ */
(function () {
  "use strict";

  var BASE = "https://noii-y.github.io/moh-ui";
  var CSS_LINKS =
    '<link rel="stylesheet" href="' + BASE + "/vendor/daisyui.css" + '">\n' +
    '<link rel="stylesheet" href="' + BASE + '/assets/utilities-patch.css">';

  /* 所有组件共用的一段：审美硬边界 + 交付要求（摘编自 rules/mo-rules-zh.md） */
  var COMMON_RULES = [
    "【灰墨审美硬边界（必须遵守）】",
    "- 控件高度统一 32px，同组控件间距 8px，所有间距用 8px 网格（4/8/12/16/24）。",
    "- 正文 14px，页面标题不超过 24px，同一屏字号不超过 5 级；数字/金额用等宽数字。",
    "- 所有可点元素要有 hover 与 focus 态（focus 用 2px 主色描边）；禁用优先用 disabled 属性（透明度 0.5 + not-allowed）。",
    "- 正文对比度 ≥ 4.5:1；主色全库唯一，状态色语义化（成功绿/警告橙/危险红）；不要大面积高饱和撞色、大面积渐变、多层阴影，不要用 emoji 当图标（用单色 SVG）。",
    "- 动效不超过 200ms，不做装饰性的闪烁、缩放、弹跳入场动画；组件自带的功能性状态动画除外（loading 旋转、status 状态点 ping/bounce、toggle/swap 切换、collapse 展开等），保留官方默认即可，不要再额外叠加装饰动画。",
    "- 颜色全部走 CSS 变量（daisyUI 主题变量），不要写死颜色。",
    "",
    "【交付要求】",
    "- 给我能直接放进项目的完整 HTML（class 版、不依赖框架；外层标签可按我的项目结构调整）。",
    "- 如果我的项目还没引入 daisyUI 5，请先告诉我需要在 <head> 里加一行 daisyui.css 的引用。",
    "- 做完后在桌面 1280px 和手机 375px 两个宽度下自查：控件不溢出容器、不被裁切、不换行错位、文字不贴边、焦点可见。"
  ].join("\n");

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function toast(msg) {
    var t = document.createElement("div");
    t.className = "doc-toast";
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () {
      t.classList.remove("show");
      setTimeout(function () { t.remove(); }, 250);
    }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }
  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        var ok = document.execCommand("copy");
        ta.remove();
        ok ? resolve() : reject(new Error("copy failed"));
      } catch (e) {
        ta.remove();
        reject(e);
      }
    });
  }

  /* 组装「AI 提示词」：组件特有正文（页面内嵌 #moh-prompt）+ 参考结构 + 通用规则 */
  function buildPrompt(sceneTitle, heroHtml) {
    var specNode = document.getElementById("moh-prompt");
    var spec = specNode ? specNode.textContent.trim() : "（请按 daisyUI 官方用法实现该组件，并使用真实中文文案）。";
    return [
      "请用 daisyUI 5（纯 CSS 类、class 版 HTML，不依赖框架、无需构建）帮我实现：" + sceneTitle + "。",
      "",
      spec,
      "",
      "【参考结构】（照此实现，外层标签可按我的项目调整）",
      "```html",
      heroHtml.trim(),
      "```",
      "",
      COMMON_RULES
    ].join("\n");
  }

  /* 组装「成品 HTML」：自包含、保存为 .html 双击即见，也可整段发 AI */
  function buildFullHtml(compName, bodyHtml) {
    return (
      "<!-- ============================================================\n" +
      "  灰墨 MoH_UI · " + compName + "（基于 daisyUI，MIT 许可）\n" +
      "  用法一：保存为 .html，双击即可在浏览器看到效果。\n" +
      "  用法二：把 <body> 内片段放进你的项目，并引入下面两行 CSS。\n" +
      "  更推荐：在灰墨页面点「复制 AI 提示词」，让你的 AI 直接按你的项目生成。\n" +
      "============================================================ -->\n" +
      "<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n" +
      '<meta charset="UTF-8">\n' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
      "<title>" + compName + " · 灰墨组件</title>\n" +
      CSS_LINKS + "\n" +
      "</head>\n<body>\n" +
      bodyHtml.trim() + "\n" +
      "</body>\n</html>\n"
    );
  }

  /* —— 每个变体：标题行加「代码」小按钮，展开深色代码面板 —— */
  document.querySelectorAll(".doc-block").forEach(function (block) {
    if (block.classList.contains("doc-hero")) return;

    var h2 = block.querySelector("h2");
    var stages = block.querySelectorAll(".doc-stage");
    if (!stages.length) return;

    var head = document.createElement("div");
    head.className = "doc-block__head";
    if (h2) head.appendChild(h2);
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "doc-code-toggle";
    toggle.textContent = "</> 代码";
    head.appendChild(toggle);
    block.insertBefore(head, block.firstChild);

    var codes = Array.prototype.map.call(stages, function (s) {
      return s.innerHTML.trim();
    });
    var panel = document.createElement("div");
    panel.className = "doc-code-panel";
    panel.innerHTML =
      '<div class="doc-code-bar"><button type="button" class="btn btn-xs btn-soft">复制这段</button></div>' +
      codes.map(function (c) {
        return '<pre class="doc-code"><code>' + esc(c) + "</code></pre>";
      }).join("");
    var last = stages[stages.length - 1];
    last.insertAdjacentElement("afterend", panel);

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      var open = panel.classList.toggle("open");
      toggle.classList.toggle("is-open", open);
      toggle.textContent = open ? "收起代码" : "</> 代码";
    });
    panel.querySelector(".btn").addEventListener("click", function (e) {
      e.preventDefault();
      copyText(codes.join("\n")).then(function () { toast("已复制这一段 ✓"); });
    });

    if (new URLSearchParams(location.search).has("open")) {
      panel.classList.add("open");
      toggle.classList.add("is-open");
      toggle.textContent = "收起代码";
    }
  });

  /* —— 成品区：主按钮「复制 AI 提示词」，辅按钮「复制成品 HTML」—— */
  var hero = document.getElementById("hero-stage");
  var promptBtn = document.querySelector("[data-copy-prompt]");
  var htmlBtn = document.querySelector("[data-copy-hero]");

  if (promptBtn && hero) {
    var sceneTitle = promptBtn.getAttribute("data-component") || "该组件";
    promptBtn.addEventListener("click", function () {
      copyText(buildPrompt(sceneTitle, hero.innerHTML))
        .then(function () { toast("AI 提示词已复制 ✓ 直接发给你的 AI"); })
        .catch(function () { toast("复制失败，请手动选择文本"); });
    });
  }
  if (htmlBtn && hero) {
    var compName = htmlBtn.getAttribute("data-component") || "组件";
    htmlBtn.addEventListener("click", function () {
      copyText(buildFullHtml(compName, hero.innerHTML))
        .then(function () { toast("成品 HTML 已复制 ✓ 保存为 .html 可打开"); })
        .catch(function () { toast("复制失败，请手动选择代码"); });
    });
  }

  /* —— PM 自检：?dump-prompt=1 时把完整提示词渲染到页面，供逐字核对 —— */
  if (new URLSearchParams(location.search).has("dump-prompt") && promptBtn && hero) {
    var pre = document.createElement("pre");
    pre.id = "moh-prompt-dump";
    pre.textContent = buildPrompt(promptBtn.getAttribute("data-component") || "组件", hero.innerHTML);
    pre.style.cssText =
      "white-space:pre-wrap;word-break:break-word;max-width:880px;margin:24px auto;" +
      "background:#11141a;color:#e6e8ee;border-radius:12px;padding:20px;" +
      "font:13px/1.7 'JetBrains Mono',Consolas,monospace;";
    document.body.appendChild(pre);
  }
})();
