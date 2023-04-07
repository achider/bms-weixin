"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      infData: {
        imgUrl: [],
        bookName: [],
        author: [],
        id: [],
        publishingHouse: [],
        translator: [],
        publishDate: [],
        pages: [],
        isbn: [],
        price: [],
        briefIntroduction: [],
        authorIntroduction: [],
        loanMark: []
      },
      newData: {
        starMark: [],
        loanList: []
      },
      id: [],
      type: [],
      show: [0]
    };
  },
  methods: {
    async register() {
      if (this.username == void 0 || this.password == void 0)
        common_vendor.index.showToast({
          icon: "error",
          title: this.username == void 0 ? "用户名不能为空" : "密码不能为空",
          duration: 1e3
        });
      else {
        const res = await utils_request.request("/register?username=" + this.username + "&password=" + this.password);
        if (res == true)
          common_vendor.index.showToast({
            icon: "success",
            title: "注册成功",
            duration: 1e3
          });
        else
          common_vendor.index.showToast({
            icon: "error",
            title: "注册失败",
            duration: 1e3
          });
      }
    },
    async login() {
      if (this.username == void 0 || this.password == void 0)
        common_vendor.index.showToast({
          icon: "error",
          title: this.username == void 0 ? "用户名不能为空" : "密码不能为空",
          duration: 1e3
        });
      else {
        const res = await utils_request.request("/login?username=" + this.username + "&password=" + this.password);
        if (res.userId != null) {
          common_vendor.index.showToast({
            icon: "success",
            title: "登录成功",
            duration: 1e3
          });
          getApp().globalData.userId = res.userId;
          this.show = 0;
          this.insert();
          this.getbook1();
        } else
          common_vendor.index.showToast({
            icon: "error",
            title: "登录失败",
            duration: 1e3
          });
      }
    },
    async getbook() {
      const res = await utils_request.request("/book?id=" + this.id);
      this.infData = res;
    },
    async getbook1() {
      const res = await utils_request.request("/book1?id=" + this.id + "&userId=" + getApp().globalData.userId);
      this.newData = res;
    },
    async update() {
      await utils_request.request("/update?type=" + this.type + "&id=" + this.id + "&userId=" + getApp().globalData.userId);
    },
    async insert() {
      await utils_request.request("/insert?id=" + this.id + "&userId=" + getApp().globalData.userId);
    },
    async loan() {
      await utils_request.request("/history?type=1&id=" + this.id + "&userId=" + getApp().globalData.userId);
    },
    addtoloanlist() {
      if (getApp().globalData.userId == 0)
        this.tologin();
      else {
        this.type = "loan_list";
        this.update().then(() => this.getbook1());
        common_vendor.index.showToast({
          title: this.newData.loanList ? "从借书单中删除" : "已加入借书单",
          duration: 1e3
        });
      }
    },
    toloan() {
      if (getApp().globalData.userId == 0)
        this.tologin();
      else
        common_vendor.index.showModal({
          title: "提示",
          content: "是否租借",
          success: (res) => {
            if (res.confirm) {
              this.type = "loan_mark";
              this.update().then(() => this.loan().then(() => this.getbook()));
              common_vendor.index.showToast({
                title: "成功租借",
                duration: 1e3
              });
            }
          }
        });
    },
    tologin() {
      common_vendor.index.showModal({
        title: "提示",
        content: "请先登录",
        success: (res) => {
          this.show = 1;
        }
      });
    },
    toloanlist() {
      if (getApp().globalData.userId == 0)
        this.tologin();
      else
        common_vendor.index.navigateTo({
          url: "/pages/loan_book_list/loan_book_list"
        });
    },
    tostar() {
      if (getApp().globalData.userId == 0)
        this.tologin();
      else {
        this.type = "star_mark";
        this.update().then(() => this.getbook1());
        common_vendor.index.showToast({
          title: this.newData.starMark == 0 ? "收藏成功" : "取消收藏",
          duration: 1e3
        });
      }
    }
  },
  onLoad(option) {
    this.id = option.id;
    this.insert().then(() => this.getbook().then(() => this.getbook1()));
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.show == 1
  }, $data.show == 1 ? {
    b: _ctx.username,
    c: common_vendor.o(($event) => _ctx.username = $event.detail.value),
    d: _ctx.password,
    e: common_vendor.o(($event) => _ctx.password = $event.detail.value),
    f: common_vendor.o(($event) => $options.register()),
    g: common_vendor.o(($event) => $options.login())
  } : common_vendor.e({
    h: $data.infData.imgUrl,
    i: common_vendor.t($data.infData.loanMark ? "已出借" : "未出借"),
    j: common_vendor.t($data.infData.bookName),
    k: $data.infData.author
  }, $data.infData.author ? {
    l: common_vendor.t($data.infData.author)
  } : {}, {
    m: $data.infData.translator
  }, $data.infData.translator ? {
    n: common_vendor.t($data.infData.translator)
  } : {}, {
    o: common_vendor.t($data.infData.publishingHouse),
    p: $data.infData.briefIntroduction
  }, $data.infData.briefIntroduction ? {
    q: common_vendor.t($data.infData.briefIntroduction)
  } : {}, {
    r: $data.infData.authorIntroduction
  }, $data.infData.authorIntroduction ? {
    s: common_vendor.t($data.infData.authorIntroduction)
  } : {}, {
    t: common_vendor.t($data.infData.price),
    v: common_vendor.t($data.infData.pages),
    w: common_vendor.t($data.infData.isbn),
    x: common_vendor.t($data.infData.publishDate),
    y: $data.newData.starMark == 0
  }, $data.newData.starMark == 0 ? {
    z: common_vendor.o(($event) => $options.tostar())
  } : {
    A: common_vendor.o(($event) => $options.tostar())
  }, {
    B: common_vendor.o(($event) => $options.toloanlist()),
    C: $data.newData.loanList == 1
  }, $data.newData.loanList == 1 ? {
    D: common_vendor.o(($event) => $options.addtoloanlist())
  } : {
    E: common_vendor.o(($event) => $options.addtoloanlist())
  }, {
    F: $data.infData.loanMark == 1
  }, $data.infData.loanMark == 1 ? {} : {
    G: common_vendor.o(($event) => $options.toloan())
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/book_detail/book_detail.vue"]]);
wx.createPage(MiniProgramPage);
