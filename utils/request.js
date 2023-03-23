"use strict";
const common_vendor = require("../common/vendor.js");
const request = (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      // url:'http://localhost:8080'+url,
      url: "http://124.71.140.250:80" + url,
      data,
      method,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
