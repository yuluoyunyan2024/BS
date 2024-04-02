export function request(paramObj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:8080/' + paramObj.url,
      method: paramObj.method,
      data: {
        param: paramObj.param
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Authorization': wx.getStorageSync('JWT') || null
      },
      success: (res) => {
        // console.log(res)
        if (res.statusCode == 200 && res.data.code == 0) resolve(res.data.data);
        else reject(res);
      },
      fail: (res) => {
        try {
          reject(res);
        } catch {
          reject(res);
        }
      }
    })
  })
}

export function doGet(paramObj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:8080/user/' + paramObj.uri,
      method: "GET",
      data: {
        param: paramObj.param || null
      },
      header: {
        'Authorization': wx.getStorageSync('JWT') || null
      },
      success: (res) => {
        if (res.statusCode == 200 && res.data.code == 0) resolve(res.data.data);
        else reject(res);
      },
      fail: (res) => {
        try {
          reject(res);
        } catch {
          reject(res);
        }
      }
    })
  })
}

export function doPut(paramObj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:8080/user/' + paramObj.uri,
      method: "PUT",
      data: {
        "param": paramObj.param,
      },
      header: {
        "Authorization": wx.getStorageSync('JWT') || null
      },
      success: (res) => {
        if (res.statusCode == 200 && res.data.code == 0) resolve(res.data.data);
        else reject(res);
      },
      fail: (res) => {
        try {
          reject(res);
        } catch {
          reject(res);
        }
      }
    })
  })
}

export function doPost(paramObj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:8080/user/' + paramObj.uri,
      method: "POST",
      data: {
        "param": paramObj["param"] || null
      },
      header: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Content-Type':'application/json',
        'Authorization': wx.getStorageSync('JWT') || null
      },
      success: (res) => {
        if (res.statusCode == 200 && res.data.code == 0) resolve(res.data.data);
        else reject(res);
      },
      fail: (err) => reject(err)
    })
  })
}

export function doDelete(paramObj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:8080/user/' + paramObj.uri +"/"+ paramObj.resouce,
      method: "DELETE",
      header: {
        'Authorization': wx.getStorageSync('JWT') || null
      },
      success: (res) => {
        if (res.statusCode == 200 && res.data.code == 0) resolve(res.data.data);
        else reject(res);
      },
      fail: (err) => reject(err)
    })
  })
}