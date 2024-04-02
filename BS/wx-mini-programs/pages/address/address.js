// pages/address/address.js
const app = getApp();
import {
  doPut
} from "../../utils/http";
Page({
  data: {
    nickname: null,
    phone: null,
    address: null,
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      nickname: app.globalData.userInfo.nickname || null,
      phone: app.globalData.userInfo.phone || null,
      address: app.globalData.userInfo.address[0]
    })
  },

  reviseAdress(e) {
    console.log(e)
    if (e.detail.value.address !== "" && e.detail.value.nickname !== "" && e.detail.value.phone !== "") {
      app.globalData.userInfo.address = e.detail.value;
      console.log(app.globalData.userInfo.address);
    }
    doPut({
      uri: "address",
      param: [{
        "defaultAddress": false,
        "addressee": "雨落01",
        "fullAddress": "神州",
        "phone": "1234567890"
      }, {
        "defaultAddress": false,
        "addressee": "云烟",
        "fullAddress": "水乡",
        "phone": "0987654321"
      }]
    })
  }
})