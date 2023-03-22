"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
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
          text: "退出登录",
          type: "exit"
        }
      ],
      user_id: getApp().globalData.user_id
    };
  },
  methods: {
    jump(type) {
      if (type == "exit") {
        getApp().globalData.user_id = 0;
        this.user_id = 0;
        this.username = "";
        this.password = "";
      } else
        common_vendor.index.navigateTo({
          url: "../" + type + "/" + type
        });
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
        if (res.results[0] != null) {
          common_vendor.index.showToast({
            icon: "success",
            title: "登录成功",
            duration: 1e3
          });
          getApp().globalData.user_id = res.results[0].user_id;
          this.user_id = getApp().globalData.user_id;
        } else
          common_vendor.index.showToast({
            icon: "error",
            title: "登录失败",
            duration: 1e3
          });
      }
    },
    async register() {
      if (this.username == void 0 || this.password == void 0)
        common_vendor.index.showToast({
          icon: "error",
          title: this.username == void 0 ? "用户名不能为空" : "密码不能为空",
          duration: 1e3
        });
      else {
        const res = await utils_request.request("/register?username=" + this.username + "&password=" + this.password);
        if (res.err == null)
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.user_id == 0
  }, $data.user_id == 0 ? {
    b: _ctx.username,
    c: common_vendor.o(($event) => _ctx.username = $event.detail.value),
    d: _ctx.password,
    e: common_vendor.o(($event) => _ctx.password = $event.detail.value),
    f: common_vendor.o(($event) => $options.register()),
    g: common_vendor.o(($event) => $options.login())
  } : {
    h: common_vendor.t(_ctx.username),
    i: common_vendor.f($data.listData, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: common_vendor.o(($event) => $options.jump(item.type), index)
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
