// pages/home/home.js
//获取应用实例
const app = getApp();

Page({
  data: {
    //商品数据
    homeData: null,
    //查询获得的值
    searchResult: null
  },

  onShow() {
    this.setData({
      homeData: wx.getStorageSync('homeData') || []
    });
  },

  addToCart(e) {
    let cacheData = this.data.homeData[e.detail];
    let cartData = wx.getStorageSync('cartData') || [];
    let result = cartData.some((element) => {
      return cacheData._id === element._id;
    });
    if (result) {
      wx.showToast({
        title: '购物车已有该商品！',
        icon: 'none'
      })
    } else {
      cartData.push(cacheData);
      wx.setStorage({
        key: 'cartData',
        data: cartData,
        success() {
          wx.showToast({
            title: '商品已添加到购物车！',
            icon: 'none'
          })
        }
      })
    }
  }
})