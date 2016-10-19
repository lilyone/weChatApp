//注册页面
Page({
  data: {
    carUrl: [
      '/images/carVoid.png'
    ]
  },
  buy:function(){
  	wx.navigateTo({
		  url: '/pages/rose/main/main'
		})
  }
})