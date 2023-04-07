"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/home.js";
  "./pages/country/country.js";
  "./pages/book_list/book_list.js";
  "./pages/book_detail/book_detail.js";
  "./pages/star_book/star_book.js";
  "./pages/loan_book/loan_book.js";
  "./pages/loan_book_list/loan_book_list.js";
  "./pages/return_book/return_book.js";
  "./pages/history/history.js";
}
const _sfc_main = {
  globalData: {
    userId: [0]
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/achider/Documents/GitHub/bms/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$myRequest = "1111111111";
  app.config.globalProperties.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: "00:00:00"
  };
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
