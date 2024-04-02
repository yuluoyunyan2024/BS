// pages/home/home.js

// 获取应用实例
const app = getApp()

Page({
  data: {
    multiArray: [
      ['共产主义', '二次元'],
      ['马克思', '列宁', '斯大林', '毛泽东', '胡桃', '钟离'],
      ['《黑格尔法哲学批判》', '《共产党宣言》']
    ],
    objectMultiArray: [
      [{
          id: 0,
          name: '共产主义'
        },
        {
          id: 1,
          name: '二次元'
        }
      ],
      [{
          id: 0,
          name: '马克思'
        },
        {
          id: 1,
          name: '列宁'
        },
        {
          id: 2,
          name: '斯大林'
        },
        {
          id: 3,
          name: '毛泽东'
        },
        {
          id: 4,
          name: '胡桃'
        },
        {
          id: 5,
          name: '钟离'
        }
      ],
      [{
          id: 0,
          name: '共产主义守则'
        },
        {
          id: 1,
          name: '胡桃攻略'
        }
      ]
    ],
    multiIndex: [0, 0, 0],
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //bindchange
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为(bindchange)', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //bindcolumnchange
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    //就是设置数组的第n项的值
    data.multiIndex[e.detail.column] = e.detail.value;

    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['马克思', '列宁', '斯大林', '毛泽东'];
            data.multiArray[2] = ['《黑格尔法哲学批判》', '《共产党宣言》'];
            break;
          case 1:
            data.multiArray[1] = ['胡桃', '钟离'];
            data.multiArray[2] = ['护膜', '护膜01'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0: //马克思
                data.multiArray[2] = ['《黑格尔法哲学批判》', '《共产党宣言》'];
                break;
              case 1: //列宁
                data.multiArray[2] = ['《国家与革命》', '《唯物主义和经验批判主义》'];
                break;
              case 2: //斯大林
                data.multiArray[2] = ['《问题和答复》', '《论列宁主义基础》'];
                break;
              case 3: //毛泽东
                data.multiArray[2] = ['《实践论》', '《矛盾论》'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['护膜', '护膜01'];
                break;
              case 1:
                data.multiArray[2] = ['贯虹', '贯虹01'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
})