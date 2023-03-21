"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        img: [],
        book_name: [],
        author: []
      },
      type: ["publishing_house"],
      id: [],
      page: [1]
    };
  },
  methods: {
    async getInf() {
      const res = await utils_request.request("/inf?page=" + this.page);
      this.infData = res.results;
    },
    tofind() {
      common_vendor.index.redirectTo({
        url: "../book_list/book_list?type=" + this.type + "&id=" + this.id
      });
    }
  },
  onLoad(option) {
    this.getInf();
  },
  onReachBottom() {
    this.page++, this.getInf();
  }
};
if (!Array) {
  const _easycom_showBooks2 = common_vendor.resolveComponent("showBooks");
  _easycom_showBooks2();
}
const _easycom_showBooks = () => "../../components/showBooks/showBooks.js";
if (!Math) {
  _easycom_showBooks();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.id,
    b: common_vendor.o(($event) => $data.id = $event.detail.value),
    c: common_vendor.o(($event) => $options.tofind()),
    d: common_vendor.p({
      infData: $data.infData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/publishing_house/publishing_house.vue"]]);
wx.createPage(MiniProgramPage);
