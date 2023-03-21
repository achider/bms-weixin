"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["infData"],
  methods: {
    tobook(id) {
      common_vendor.index.navigateTo({
        url: "../book_detail/book_detail?id=" + id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.infData, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.book_name),
        c: common_vendor.t(item.author),
        d: item.id,
        e: common_vendor.o(($event) => $options.tobook(item.id), item.id)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/components/showBooks/showBooks.vue"]]);
wx.createComponent(Component);
