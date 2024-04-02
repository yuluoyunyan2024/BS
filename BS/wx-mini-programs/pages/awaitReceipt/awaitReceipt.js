// pages/myAfterSales/myAfterSales.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ordersData: null,
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let ordersStorage = wx.getStorageSync('ordersData');
    let orders;
    if (ordersStorage != null) orders = ordersStorage.filter(element => element.isArrival != true);
    this.setData({
      ordersData: orders
    })
  },

  requestRetrun(e) {
    wx.showToast({
      title: '退货申请已提交，请您耐心等待！',
      icon: 'none'
    });
  }
})