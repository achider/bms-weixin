"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        id: [],
        bookName: [],
        author: [],
        imgUrl: [],
        history: []
      }
    };
  },
  methods: {
    async getInf() {
      const res = await utils_request.request("/look?userId=" + getApp().globalData.userId);
      this.infData = res;
    },
    tobook(id) {
      common_vendor.index.navigateTo({
        url: "../book_detail/book_detail?id=" + id
      });
    }
  },
  onLoad() {
    this.getInf();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.infData, (item, k0, i0) => {
      return common_vendor.e({
        a: item.imgUrl,
        b: common_vendor.t(item.bookName),
        c: common_vendor.t(item.author),
        d: item.history == 0
      }, item.history == 0 ? {} : {}, {
        e: item.history == 1
      }, item.history == 1 ? {} : {}, {
        f: item.id,
        g: common_vendor.o(($event) => $options.tobook(item.id), item.id)
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/history/history.vue"]]);
wx.createPage(MiniProgramPage);
