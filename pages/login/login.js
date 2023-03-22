"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    async login() {
      if (this.username == void 0 || this.password == void 0)
        common_vendor.index.showToast({
          icon: "error",
          title: this.username == void 0 ? "用户名不能为空" : "密码不能为空",
          duration: 1e3
        });
      else {
        const res = await request("/login?username=" + this.username + "&password=" + this.password);
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
        const res = await request("/register?username=" + this.username + "&password=" + this.password);
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
  return {
    a: _ctx.username,
    b: common_vendor.o(($event) => _ctx.username = $event.detail.value),
    c: _ctx.password,
    d: common_vendor.o(($event) => _ctx.password = $event.detail.value),
    e: common_vendor.o(($event) => $options.register()),
    f: common_vendor.o(($event) => $options.login())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
