// pages/feedback/feedback.js
import {
  request
} from "../../utils/http.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * @description 点击即提交反馈
   * 首先给用户反馈
   * 其次发起请求
   * 最后2s时间到，关闭此页面，回到center页面
   */
  submitFeedback(event) {
    if (event.detail.value.textAreaValue !== "") {
      //首先响应用户
      wx.showToast({
        title: '感谢您的反馈！',
        icon: 'success',
        duration: 2000
      });
      
      request({
          url: "user/feedback",
          method: "POST",
          param: event.detail.value.textAreaValue
        })
        .then(() => {
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/center/center',
            })
          }, 2000);
        });
    } else {
      wx.showToast({
        title: '请输入您的反馈QAQ',
        icon: 'none',
        duration: 2000
      });
    }
  }
})