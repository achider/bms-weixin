"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      iconData: [
        {
          "type": "publishing_house",
          "text": "出版社查询",
          "iconPath": "/static/icon/publishing_house.png"
        },
        {
          "type": "translator",
          "text": "译者查询",
          "iconPath": "/static/icon/translator.png"
        },
        {
          "type": "author",
          "text": "作者查询",
          "iconPath": "/static/icon/author.png"
        },
        {
          "type": "isbn",
          "text": "isbn查询",
          "iconPath": "/static/icon/isbn.png"
        }
      ],
      imgData: {
        img: [],
        id: []
      },
      infData: {
        img: [],
        bookName: [],
        author: [],
        id: []
      },
      page: [1],
      type: ["book_name"]
    };
  },
  methods: {
    clicklist(type) {
      this.type = type;
    },
    tofind() {
      common_vendor.index.navigateTo({
        url: "../book_list/book_list?type=" + this.type + "&id=" + this.id
      });
    },
    tobook(id) {
      common_vendor.index.navigateTo({
        url: "../book_detail/book_detail?id=" + id
      });
    },
    async create() {
      await utils_request.request("/create");
    },
    async getImg() {
      const res = await utils_request.request("/img");
      this.imgData = res;
    },
    async getInf() {
      const res = await utils_request.request("/inf?page=" + this.page);
      this.infData = res;
    }
  },
  onLoad() {
    this.getImg(), this.create().then(() => this.getInf());
  },
  onReachBottom() {
    this.page++, this.getInf();
  },
  onPullDownRefresh() {
    this.page = 1, setTimeout(() => {
      this.getImg();
      this.getInf().then(() => {
        common_vendor.index.stopPullDownRefresh();
      });
    }, 100);
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
  return common_vendor.e({
    a: $data.type == "book_name"
  }, $data.type == "book_name" ? {
    b: _ctx.id,
    c: common_vendor.o(($event) => _ctx.id = $event.detail.value)
  } : {}, {
    d: $data.type == "publishing_house"
  }, $data.type == "publishing_house" ? {
    e: _ctx.id,
    f: common_vendor.o(($event) => _ctx.id = $event.detail.value)
  } : {}, {
    g: $data.type == "author"
  }, $data.type == "author" ? {
    h: _ctx.id,
    i: common_vendor.o(($event) => _ctx.id = $event.detail.value)
  } : {}, {
    j: $data.type == "translator"
  }, $data.type == "translator" ? {
    k: _ctx.id,
    l: common_vendor.o(($event) => _ctx.id = $event.detail.value)
  } : {}, {
    m: $data.type == "isbn"
  }, $data.type == "isbn" ? {
    n: _ctx.id,
    o: common_vendor.o(($event) => _ctx.id = $event.detail.value)
  } : {}, {
    p: common_vendor.o(($event) => $options.tofind()),
    q: common_vendor.f($data.imgData, (item, k0, i0) => {
      return {
        a: item.imgUrl,
        b: common_vendor.o(($event) => $options.tobook(item.id), item.id),
        c: item.id
      };
    }),
    r: common_vendor.f($data.iconData, (item, index, i0) => {
      return {
        a: item.iconPath,
        b: common_vendor.t(item.text),
        c: index,
        d: common_vendor.o(($event) => $options.clicklist(item.type), index)
      };
    }),
    s: common_vendor.p({
      infData: $data.infData
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/achider/Documents/GitHub/bms/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
