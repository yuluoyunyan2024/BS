// app.js
App({
  globalData: {
    //用户基础信息
    "userInfo": {
      "nickname": undefined,
      "avatarUrl": undefined,
      "phone": undefined,
      "address": []
    }
  },
  //小程序初始化完成时触发，全局只触发一次
  onLaunch() {},

  onHide() {},

})