"use strict";
const utils_request = require("../../utils/request.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        img: [],
        book_name: [],
        author: [],
        id: []
      }
    };
  },
  methods: {
    async getInf() {
      const res = await utils_request.request("/get?type=loan_list");
      this.infData = res.results;
    }
  },
  onLoad() {
    this.getInf();
  }
};
if (!Array) {
  const _easycom_showBookList2 = common_vendor.resolveComponent("showBookList");
  _easycom_showBookList2();
}
const _easycom_showBookList = () => "../../components/showBookList/showBookList.js";
if (!Math) {
  _easycom_showBookList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      infData: $data.infData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/book_loan_list/book_loan_list.vue"]]);
wx.createPage(MiniProgramPage);
