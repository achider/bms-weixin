"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        id: [],
        imgUrl: [],
        bookName: [],
        author: []
      }
    };
  },
  methods: {
    async getInf() {
      const res = await utils_request.request("/get?type=loan_mark&userId=" + getApp().globalData.userId);
      this.infData = res;
    },
    async return_book(id) {
      await utils_request.request("/history?type=0&id=" + id + "&userId=" + getApp().globalData.userId);
    },
    async update(id) {
      await utils_request.request("/update?type=loan_mark&id=" + id + "&userId=" + getApp().globalData.userId);
    },
    tobook(id) {
      common_vendor.index.navigateTo({
        url: "../book_detail/book_detail?id=" + id
      });
    },
    toreturn(id) {
      common_vendor.index.showModal({
        title: "提示",
        content: "是否归还",
        success: (res) => {
          if (res.confirm) {
            this.update(id);
            this.return_book(id);
            this.getInf();
            common_vendor.index.showToast({
              title: "成功归还",
              duration: 1e3
            });
          }
        }
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
      return {
        a: item.imgUrl,
        b: common_vendor.o(($event) => $options.tobook(item.id), item.id),
        c: common_vendor.t(item.bookName),
        d: common_vendor.t(item.author),
        e: common_vendor.o(($event) => $options.tobook(item.id), item.id),
        f: common_vendor.o(($event) => $options.toreturn(item.id), item.id),
        g: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/return_book/return_book.vue"]]);
wx.createPage(MiniProgramPage);
