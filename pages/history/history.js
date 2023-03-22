"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        id: [],
        book_name: [],
        author: [],
        img: [],
        history: []
      }
    };
  },
  methods: {
    async getInf() {
      const res = await utils_request.request("/look?user_id=" + getApp().globalData.user_id);
      console.log(res.results);
      this.infData = res.results;
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
        a: item.img,
        b: common_vendor.t(item.book_name),
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
