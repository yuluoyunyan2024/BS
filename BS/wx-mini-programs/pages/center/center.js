// pages/center/center.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: null
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      nickname: app.globalData.userInfo.nickname || '不知火'
    })
  },

  toAwaitReceipt() {
    wx.navigateTo({
      url: '/pages/awaitReceipt/awaitReceipt',
    })
  },
  toAfterSales() {
    wx.navigateTo({
      url: '/pages/afterSales/afterSales',
    })
  },

  toFeedback() {
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
  toAboutUs() {
    wx.navigateTo({
      url: '/pages/aboutUs/aboutUs',
    })
  },

  toPrivacyStatement() {
    wx.navigateTo({
      url: '/pages/privacyStatement/privacyStatement',
    })
  },
  toAddress() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  }
})