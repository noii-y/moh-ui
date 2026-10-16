/* ============================================================
 * 灰墨 MoH_UI · 组件详情页交互（所有搬运组件共用）
 * 1) 成品示例区：唯一主按钮「复制组件」，产出自包含、可直接打开的完整 HTML
 * 2) 每个变体：自动生成「查看代码 / 复制这段」折叠块，所见即所复制
 * 见 assets/demo-page.css 配套样式
 * ============================================================ */
(function () {
  "use strict";

  // 复制出的代码里，依赖用线上绝对地址，保证保存成 .html 双击即见
  var BASE = "https://noii-y.github.io/moh-ui";
  var CSS_LINKS =
    '<link rel="stylesheet" href="' + BASE + "/vendor/daisyui.css" + '">\n' +
    '<link rel="stylesheet" href="' + BASE + '/assets/utilities-patch.css">';

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

  // 兼容 file:// 与 https：优先 clipboard API，失败降级到 execCommand
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

  // 拼出自包含完整 HTML
  function buildFullHtml(compName, bodyHtml) {
    return (
      "<!-- ============================================================\n" +
      "  灰墨 MoH_UI · " + compName + "（基于 daisyUI，MIT 许可）\n" +
      "  用法一：把本文件保存为 .html，双击即可在浏览器看到效果。\n" +
      "  用法二：放进已有项目时，只需保留 <body> 内的片段，并把下面两行\n" +
      "         CSS 引入你的项目（vendor/daisyui.css 与 utilities-patch.css）。\n" +
      "  也可以整段发给 AI，它能直接照此结构实现。\n" +
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

  // —— 每个变体：自动生成「查看代码」折叠块 ——
  document.querySelectorAll(".doc-block").forEach(function (block) {
    if (block.classList.contains("doc-hero")) return; // 成品区另有主按钮
    block.querySelectorAll(".doc-stage").forEach(function (stage) {
      var html = stage.innerHTML.trim();
      var details = document.createElement("details");
      details.className = "doc-codewrap";
      details.innerHTML =
        "<summary>查看代码 / 复制这一段</summary>" +
        '<div class="doc-codebar"><button type="button" class="btn btn-sm btn-outline doc-copy-var">复制这段</button></div>' +
        '<pre class="doc-code"><code>' + esc(html) + "</code></pre>";
      stage.insertAdjacentElement("afterend", details);
      details.querySelector(".doc-copy-var").addEventListener("click", function (e) {
        e.preventDefault();
        copyText(html).then(function () { toast("已复制这一段 ✓"); });
      });
      if (new URLSearchParams(location.search).has("open")) details.open = true;
    });
  });

  // —— 成品区：唯一主按钮「复制组件」——
  var mainBtn = document.querySelector("[data-copy-hero]");
  var hero = document.getElementById("hero-stage");
  if (mainBtn && hero) {
    mainBtn.addEventListener("click", function () {
      var comp = mainBtn.getAttribute("data-component") || "组件";
      var full = buildFullHtml(comp, hero.innerHTML);
      copyText(full).then(function () {
        toast("完整组件已复制 ✓ 保存为 .html 即可打开");
      }).catch(function () {
        toast("复制失败，请手动选择代码");
      });
    });
  }
})();
