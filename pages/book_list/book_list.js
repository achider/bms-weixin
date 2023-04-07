"use strict";
const utils_request = require("../../utils/request.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        img: [],
        bookName: [],
        author: []
      },
      page: [1],
      type: [],
      id: []
    };
  },
  methods: {
    async find() {
      const res = await utils_request.request("/find?type=" + this.type + "&id=" + this.id + "&page=" + this.page);
      this.infData = res;
    }
  },
  onLoad(option) {
    this.type = option.type, this.id = option.id;
    this.find();
  },
  onReachBottom() {
    this.page++, this.find();
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
    a: common_vendor.p({
      infData: $data.infData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/book_list/book_list.vue"]]);
wx.createPage(MiniProgramPage);
