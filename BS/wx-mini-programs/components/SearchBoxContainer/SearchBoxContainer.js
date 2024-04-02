// components/SearchBoxComtainer/SearchBoxComtainer.js
import {
  request
} from "../../utils/http.js";

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //输入框初始值
    searchParam: undefined,
    searchResult: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //查找商品
    searchGoods() {
      console.log("搜索：", this.data.searchParam);
      if (this.data.searchParam !== undefined) {
        let param = this.data.searchParam;
        console.log(param)
        wx.request({
          url: 'http://127.0.0.1:8080/user/goods',
          methods: "GET",
          data: {
            "name" : param
            // "name" : JSON.stringify(param)
            // "name" : encodeURIComponent(param)
          },
          header: {
            'Authorization': wx.getStorageSync('JWT') || null
          },
          success: (data) => {
            console.log(data)
            wx.setStorageSync('queryResults', data.data.data);
            wx.navigateTo({
              url: '/pages/queryResults/queryResults'
            })
          }
        })
      }
    }
  }
})