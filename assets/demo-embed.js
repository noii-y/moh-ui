/* 灰墨组件 demo 页：站点卡片缩略图模式
   当 demo.html 以 ?embed=1 被嵌进组件库卡片时，给 <html> 加 .embed，
   由 demo-page.css 隐藏大标题、收紧排版，让卡片预览展示组件本体而非文档头。 */
(function () {
  try {
    if (new URLSearchParams(location.search).get("embed") === "1") {
      document.documentElement.classList.add("embed");
    }
  } catch (e) { /* 非浏览器环境忽略 */ }
})();
