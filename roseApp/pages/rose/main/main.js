//注册页面
Page({
  data: {
  	loadingHidden:false,
    imgUrls: [
    	'/images/banner0.jpg',
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg',
      '/images/banner4.jpg'
    ],
    refreshHidden: true,
    loadmoreHidden:true,
    products: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8000/mock/products.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          products: res.data,
          //loadingHidden:true
        });
        setTimeout(function(){
        	 that.setData({
		          loadingHidden:true
		        });
        },1000)
      },
      fail: function (error) {
        console.log(error+"bug");
      }
    });
  },
  
  actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost:8000/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            products: res.data.concat(that.data.products),
            refreshHidden: true
          });
        }, 1500);
      }
    });
  },
  //滑动到底部触发
  actionTolower: function () {
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://localhost:8000/mock/more.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            products : that.data.products.concat(res.data),
            loadmoreHidden: true
          });
        }, 1500);
      }
    });
  } 
  
  
  
})