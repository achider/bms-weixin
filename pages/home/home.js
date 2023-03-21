"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      listData: [
        {
          text: "收藏图书",
          type: "star_book"
        },
        {
          text: "借阅图书",
          type: "loan_book"
        },
        {
          text: "借书单",
          type: "loan_book_list"
        },
        {
          text: "归还图书",
          type: "return_book"
        },
        {
          text: "借阅记录",
          type: "history"
        },
        {
          text: "帮助",
          type: "help"
        }
      ]
    };
  },
  methods: {
    jump(type) {
      common_vendor.index.navigateTo({
        url: "../" + type + "/" + type
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.listData, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.o(($event) => $options.jump(item.type), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
