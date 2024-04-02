// pages/myOrders/myOrders.js
const app = getApp();
import {
  doDelete
} from "../../utils/http";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ordersData: null
  },
  onShow() {
    let ordersStorage = wx.getStorageSync('ordersData');
    let orders;
    if (ordersStorage != null) orders = ordersStorage.filter(element => element.isArrival == true);
    this.setData({
      ordersData: orders
    })
  },

  deleteOrders(e) {
    let resouce = this.data.ordersData[e.target.dataset.id].ordersID;

    doDelete({
      uri: "orders",
      resouce: resouce
    }).then(() => {
      wx.showToast({
        title: '订单删除成功！',
        icon: 'none'
      });
    })
    this.setData({
      ordersData: this.data.ordersData.filter(element => element != this.data.ordersData[e.target.dataset.id])
    })
    wx.setStorageSync('ordersData', this.data.ordersData);
  },

  buyAgain(e) {
    wx.showToast({
      title: '功能暂未实现！',
      icon: 'error'
    })
  }
})