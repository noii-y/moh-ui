/* ============================================================
 * 灰墨 MoH_UI · 页面场景 → 组件推荐映射（唯一真相源）
 * 被两处引用：
 *   1. site/rules.html 规则装配器：按场景给出默认勾选 / 配套组件；
 *   2. assets/demo-doc.js：组件详情页「配套规则」链接反查所属场景。
 * 短名与 ai/<短名>.html 对齐（slug 最后一段，自研件即目录名）。
 * core = 该场景默认勾选的常用组件；more = 可按需补选的配套组件。
 * scene.file 相对 site/rules.html 书写（只有装配器会读取）。
 * ============================================================ */
window.MOH_SCENE_MAP = {
  scenes: {
    generic: {
      key: "generic",
      label: "通用",
      file: null,
      desc: "没有明确的表格/表单/看板，只守通用排版审美。",
      core: [],
      more: []
    },
    table: {
      key: "table",
      label: "表格页",
      file: "../rules/scenarios/table.md",
      desc: "列表、筛选、分页的管理页面。",
      core: ["table", "filter", "pagination", "date-range"],
      more: ["list", "stat", "badge", "empty", "card", "skeleton", "dropdown"]
    },
    form: {
      key: "form",
      label: "表单页",
      file: "../rules/scenarios/form.md",
      desc: "录入、配置、设置类页面。",
      core: ["fieldset", "validator", "input", "select", "textarea", "checkbox", "radio", "toggle", "range", "button", "join", "date-range"],
      more: ["otp", "rating", "file-input", "alert", "tooltip", "loading"]
    },
    dashboard: {
      key: "dashboard",
      label: "数据看板",
      file: "../rules/scenarios/dashboard.md",
      desc: "KPI、图表、监控大屏。",
      core: ["stat", "chart-card", "table", "card", "badge"],
      more: ["navbar", "menu", "drawer", "tab", "progress", "list", "avatar", "radial-progress", "timeline", "code-block"]
    }
  },

  /* 反查某个组件最典型的场景：先比 core（按 table→form→dashboard 优先级），
     再比 more，都不命中返回 generic。table 同时在看板 core 中，优先归表格页。 */
  sceneOf: function (short) {
    var priority = ["table", "form", "dashboard"];
    for (var i = 0; i < priority.length; i++) {
      if (this.scenes[priority[i]].core.indexOf(short) !== -1) return priority[i];
    }
    for (var j = 0; j < priority.length; j++) {
      if (this.scenes[priority[j]].more.indexOf(short) !== -1) return priority[j];
    }
    return "generic";
  }
};
