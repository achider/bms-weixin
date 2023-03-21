"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      country: [
        "All_Countries",
        "American",
        "Argentina",
        "Australia",
        "Austria",
        "Belarus",
        "Brazil",
        "Canada",
        "Chile",
        "Colombia",
        "Cuba",
        "Czech",
        "Denmark",
        "English",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Ireland",
        "Israel",
        "Italy",
        "Japanese",
        "Korea",
        "Malaysia",
        "Mexico",
        "Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Russia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "Turkey",
        "Uruguay",
        "Ussr",
        "China_and_Unknown"
      ],
      infData: {
        img: [],
        book_name: [],
        author: [],
        id: []
      },
      page: 1,
      coun: ["All_Countries"],
      scrollTop: 0,
      old: { scrollTop: 0 }
    };
  },
  methods: {
    toCoun(coun) {
      if (this.conn != coun)
        this.page = 1;
      this.coun = coun;
      this.getCoun();
      this.scrollTop = this.old.scrollTop;
      this.$nextTick(function() {
        this.scrollTop = 0;
      });
    },
    tobook(id) {
      common_vendor.index.navigateTo({
        url: "../book_detail/book_detail?id=" + id
      });
    },
    async getCoun() {
      const res = await utils_request.request("/coun?coun=" + this.coun + "&page=" + this.page);
      this.infData = res.results;
    },
    reachBottom() {
      this.page++, this.getCoun();
    },
    scroll: function(e) {
      this.old.scrollTop = e.detail.scrollTop;
    }
  },
  onLoad() {
    this.getCoun();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.country, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.toCoun(item), index),
        d: common_vendor.n(item == $data.coun ? "active" : "inactive")
      };
    }),
    b: common_vendor.f($data.infData, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.book_name),
        c: common_vendor.t(item.author),
        d: item.id,
        e: common_vendor.o(($event) => $options.tobook(item.id), item.id)
      };
    }),
    c: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    d: $data.scrollTop,
    e: common_vendor.o((...args) => $options.scroll && $options.scroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/country/country.vue"]]);
wx.createPage(MiniProgramPage);
