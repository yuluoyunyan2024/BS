// pages/index/index.js
const app = getApp();
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //用户头像地址
    avatarUrl: defaultAvatarUrl,
    //用户昵称值
    inputValue: undefined,
    //是否选择了头像
    isHasAvatar: false,
    //昵称输入框是否有值
    isHasNick: false,
    //用户是否协议勾选
    isChecked: false,
    //登录按钮颜色
    loginBtnStyle: false,
    //登录按钮是否禁用
    isDisabled: true,
  },

  //获取用户avatarUrl，修改isHasAvatar
  isHasAvatar(e) {
    const {
      avatarUrl
    } = e.detail;
    //渲染到UI
    this.setData({
      avatarUrl
    });
    //保存到全局变量
    this.data.isHasAvatar = true;
    this.checkToSubmit();
  },

  //获取用户nickname，修改isHasNick，此环节模拟器演示不准确
  isHasNick(e) {
    if (e.detail.value == '' || e.detail.value == undefined) {
      this.data.isHasNick = false;
    } else {
      this.data.isHasNick = true;
    }
    //实现简易数据双绑
    this.setData({
      inputValue: e.detail.value
    })
    this.checkToSubmit();
  },

  //点击触发，修改isChecked
  isChecked() {
    this.data.isChecked = !this.data.isChecked;
    this.checkToSubmit();
  },

  //检查表单项目是否合法
  checkToSubmit() {
    if (this.data.isHasAvatar == true &&
      this.data.isHasNick == true &&
      this.data.isChecked == true) {
      //因为isDisabled,loginBtnStyle和backdropStyle都是UI需要及时渲染的，所以要使用this.setData()
      this.setData({
        loginBtnStyle: true,
        isDisabled: false
      });
    } else {
      this.setData({
        loginBtnStyle: false,
        isDisabled: true
      });
    }
  },

  //表单提交时触发
  formSubmit() {
    //把用户头像和昵称保存到全局变量globalData.userInfo
    app.globalData.userInfo.avatarUrl = this.data.avatarUrl;
    app.globalData.userInfo.nickname = this.data.inputValue;
    //向服务器拿用户基础数据
    let jwt = wx.getStorageSync('JWT');
    if (jwt !== "") {
      this.tokenlogin(jwt);
      return;
    }
    this.tokenLessLogin();
  },

  //有token登录
  tokenlogin(jwt) {
    console.log("正在发送请求。。。", jwt);
    wx.request({
      url: 'http://127.0.0.1:8080/user/login-log',
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Authorization': jwt
      },
      success: (res) => {

        //拿到返回值的情况下作判断
        if (res.statusCode == 200 && res.data.code == 0) {
          console.table("数据get成功：", res);
          //同步缓存jwt
          if (res.data.data.jwt != null) {
            wx.setStorageSync('JWT', res.data.data.jwt);
          }
          wx.setStorageSync('cartData', res.data.data.cartData);
          wx.setStorageSync('ordersData', res.data.data.ordersData);

          //异步缓存部分首页商品数据
          wx.setStorage({
            key: "homeData",
            data: res.data.data.homeData,
            //缓存完成后跳转到主页
            success() {
              wx.switchTab({
                url: "/pages/home/home"
              })
            }
          });
        } else {
          console.log("数据get失败：", res);
          //清除缓存token，调用无token登录方法
          wx.clearStorageSync();
          this.tokenLessLogin();
        }
      },
      fail: (res) => {
        console.log("接口调用失败，原因是：", res.errMsg);
      }
    })
  },

  //无token登录
  tokenLessLogin() {
    wx.login({
      success: (res) => {
        console.log("登录凭证获取成功：", res.code);
        //向后端发请求
        wx.request({
          url: 'http://127.0.0.1:8080/user/login-log',
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          data: {
            js_code: res.code
          },
          success: (res) => {
            console.table("接口调用成功,结果是：", res);
            //同步缓存token
            wx.setStorageSync('JWT', res.data.data.jwt);
            wx.setStorageSync('cartData', res.data.data.cartData);
            wx.setStorageSync('ordersData', res.data.data.ordersData);
            //异步缓存部分首页商品数据
            wx.setStorage({
              key: "homeData",
              data: res.data.data.homeData,
              //缓存完成后跳转到主页
              success() {
                wx.switchTab({
                  url: "/pages/home/home"
                })
              }
            });
            return;
          },
          fail: (res) => {
            console.log("接口调用失败，原因是：", res.errMsg)
          }
        })
      },
      fail: (res) => {
        console.log("登录凭证获取失败：", res.errMsg);
      }
    })
  }
})