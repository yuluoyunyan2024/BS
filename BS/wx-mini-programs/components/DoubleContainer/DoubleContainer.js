// components/OrderContainer.js
Component({

  /**
   * 组件的属性列表，由组件外部传入的数据
   */
  properties: {
    outData: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    attached(){
      this.setData({
        
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击添加到orders
    addToCart(e) {
      // console.log("组件获取的项：",e.currentTarget.dataset.id);
      this.triggerEvent("addToCart",e.currentTarget.dataset.id);
    },
  },
})