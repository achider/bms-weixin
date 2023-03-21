"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        img: [],
        book_name: [],
        author: [],
        id: [],
        publishing_house: [],
        translator: [],
        publish_date: [],
        pages: [],
        ISBN: [],
        price: [],
        brief_introduction: [],
        author_introduction: [],
        loan_mark: [],
        star_mark: [],
        loan_list: []
      },
      id: [],
      type: []
    };
  },
  methods: {
    async getbook() {
      const res = await utils_request.request("/book?id=" + this.id);
      this.infData = res.results[0];
    },
    async update() {
      await utils_request.request("/update?type=" + this.type + "&id=" + this.id);
    },
    async loan() {
      await utils_request.request("/history?type=1&id=" + this.id);
    },
    addtoloanlist() {
      this.type = "loan_list";
      this.update();
      this.getbook();
      common_vendor.index.showToast({
        title: this.infData.loan_list ? "从借书单中删除" : "已加入借书单",
        duration: 1e3
      });
    },
    toloan() {
      common_vendor.index.showModal({
        title: "提示",
        content: "是否租借",
        success: (res) => {
          if (res.confirm) {
            this.type = "loan_mark";
            this.update();
            this.loan();
            this.getbook();
            common_vendor.index.showToast({
              title: "成功租借",
              duration: 1e3
            });
          }
        }
      });
    },
    toloanlist() {
      common_vendor.index.navigateTo({
        url: "/pages/loan_book_list/loan_book_list"
      });
    },
    tostar() {
      this.type = "star_mark";
      this.update();
      this.getbook();
      common_vendor.index.showToast({
        title: this.infData.star_mark == 0 ? "收藏成功" : "取消收藏",
        duration: 1e3
        //持续时间为 2秒
      });
    }
  },
  onLoad(option) {
    this.id = option.id, this.getbook();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.infData.img,
    b: common_vendor.t($data.infData.loan_mark ? "已出借" : "未出借"),
    c: common_vendor.t($data.infData.book_name),
    d: $data.infData.author
  }, $data.infData.author ? {
    e: common_vendor.t($data.infData.author)
  } : {}, {
    f: $data.infData.translator
  }, $data.infData.translator ? {
    g: common_vendor.t($data.infData.translator)
  } : {}, {
    h: common_vendor.t($data.infData.publishing_house),
    i: $data.infData.brief_introduction
  }, $data.infData.brief_introduction ? {
    j: common_vendor.t($data.infData.brief_introduction)
  } : {}, {
    k: $data.infData.author_introduction
  }, $data.infData.author_introduction ? {
    l: common_vendor.t($data.infData.author_introduction)
  } : {}, {
    m: common_vendor.t($data.infData.price),
    n: common_vendor.t($data.infData.pages),
    o: common_vendor.t($data.infData.ISBN),
    p: common_vendor.t($data.infData.publish_date),
    q: $data.infData.star_mark == 0
  }, $data.infData.star_mark == 0 ? {
    r: common_vendor.o(($event) => $options.tostar())
  } : {
    s: common_vendor.o(($event) => $options.tostar())
  }, {
    t: common_vendor.o(($event) => $options.toloanlist()),
    v: $data.infData.loan_list == 1
  }, $data.infData.loan_list == 1 ? {
    w: common_vendor.o(($event) => $options.addtoloanlist())
  } : {
    x: common_vendor.o(($event) => $options.addtoloanlist())
  }, {
    y: $data.infData.loan_mark == 1
  }, $data.infData.loan_mark == 1 ? {} : {
    z: common_vendor.o(($event) => $options.toloan())
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/book_detail/book_detail.vue"]]);
wx.createPage(MiniProgramPage);
