// pages/cart/cart.js
import {
  doGet,
  doPost,
  request
} from "../../utils/http.js";

class ItemData {
  constructor(data) {
    this.data = data;
    this.num = 1;
    this.checked = false;
  }
  increase() {
    this.num++;
  }
  decrease() {
    if (this.num === 1) return;
    this.num--;
  }
  getPrice() {
    return this.num * this.data.price;
  }
  check() {
    this.checked = !this.checked;
  }
}
class UIData {
  constructor(data) {
    let itemArray = [];
    for (let i = 0; i < data.length; i++) {
      let item = new ItemData(data[i]);
      itemArray.push(item);
    }
    this.itemArray = itemArray;
    this.allChecked = false;
  }
  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.itemArray.length; i++) {
      if (this.itemArray[i].checked === true) {
        totalPrice += this.itemArray[i].getPrice();
      }
    }
    return totalPrice;
  }
  isCheckedAll() {
    return this.itemArray.every((element) => {
      return element.checked === true;
    })
  }
  checkAll() {
    this.allChecked = !this.allChecked;
    for (let i = 0; i < this.itemArray.length; i++) {
      this.itemArray[i].checked = this.allChecked;
    }
  }
  delete() {
    return this.itemArray.filter((element) => {
      return element.checked === false
    })
  }
}

Page({
  data: {
    totalPrice: 0,
    itemArray: null, //主要页面数据
    allChecked: false, //全选
    uiData: null
  },
  //生命周期函数--监听页面显示
  onShow() {
    //有cartData时才执行
    if (wx.getStorageSync('cartData') !== null) {
      if (wx.getStorageSync('cartData')[0] instanceof ItemData) {
        this.data.itemArray = wx.getStorageSync('cartData');
      } else {
        this.data.uiData = new UIData(wx.getStorageSync('cartData'));
      }
      this.setData({
        itemArray: this.data.uiData.itemArray
      })
    }
    if (this.data.itemArray !== null) {
      this.data.itemArray.forEach(element => {
        element.checked = false;
      });
      this.setData({
        itemArray: this.data.itemArray,
        allChecked: false,
        totalPrice: 0
      });
    }
    this.setData({
      allChecked: false,
      totalPrice: 0
    })
  },

  oneOfChecked(e) {
    this.data.itemArray[e.currentTarget.dataset.id].check();
    if (this.data.uiData.isCheckedAll() === true) {
      this.data.allChecked = true;
      this.data.uiData.allChecked = true;
    } else {
      this.data.allChecked = false;
      this.data.uiData.allChecked = false;
    }

    this.setData({
      allChecked: this.data.allChecked,
      uiData: this.data.uiData
    }, () => {
      this.getTotalPrice()
    })
  },

  checkAll() {
    this.data.uiData.checkAll();
    this.setData({
      itemArray: this.data.itemArray
    })
    this.getTotalPrice();
  },

  increase(e) {
    this.data.itemArray[e.currentTarget.dataset.id].increase();
    this.setData({
      itemArray: this.data.itemArray
    }, () => {
      this.getTotalPrice();
    })
  },

  decrease(e) {
    this.data.itemArray[e.currentTarget.dataset.id].decrease();
    this.setData({
      itemArray: this.data.itemArray
    }, () => {
      this.getTotalPrice();
    })
  },

  delete() {
    this.data.itemArray = this.data.uiData.delete();
    this.setData({
      itemArray: this.data.itemArray,
      totalPrice: 0,
      allChecked: false
    });

    let res = [];
    for (let i = 0; i < this.data.itemArray.length; i++) {
      res.push(this.data.itemArray[i].data);
    }
    wx.setStorageSync('cartData', res);
  },

  getTotalPrice() {
    this.setData({
      totalPrice: this.data.uiData.getTotalPrice()
    })
  },

  toCheckout() {
    if (this.data.itemArray.every(e => e.checked == false)) {
      return wx.showToast({
        title: "请勾选商品QAQ",
        icon: 'error',
        duration: 2000
      });
    } else {
      wx.showToast({
        // title: "祝您购物愉快！",
        title: "购买成功！",
        icon: 'success',
        duration: 2000
      });
    }

    let param = [];
    this.data.itemArray.filter(e => e.checked == true)
      .forEach(e => {
        let paramItem = {
          _id: null,
          num: null
        }
        paramItem._id = e.data._id;
        paramItem.num = e.num;
        param.push(paramItem)
      })

    console.log("jsonString：", JSON.stringify(param))

    doPost({
      uri: "orders",
      param: JSON.stringify(param)
    }).then(data => {
      if(data){
        wx.showToast({
          title: "购买成功！",
          icon: 'success',
          duration: 2000
        });
      }
    }).catch(()=>{
      wx.showToast({
        title: "购买失败！",
        icon: 'error',
        duration: 2000
      })
    })
  }

  //需开通微信支付功能
  // wx.requestPluginPayment({
  //   fee: 1,
  //   currencyType: "CNY",
  //   version: 'develop'
  // })
})