//注册页面
Page({
  data: {
  	current:0,
  	toastHidden:true,
  	loginHidden:false,//登录隐藏
  	logihidden:true,//个人中心隐藏
  	
   	swiper: {
	      indicatorDots: false,
	      autoplay: false,
	      interval: 0,
	      duration: 300
	  }
  },
  switchSlider: function (event) {
	    this.setData({
	      current: event.target.dataset.index
	    })
	  },
	
	  changeSlider: function (event) {
	    this.setData({
	      current: event.detail.current
	    });
 	 },
 	 callProduct:function(){
		console.log(1);
		this.setData({
      		toastHidden: false
    	})
	},
	toastChange: function () {
   	 	this.setData({
      		toastHidden: true
    	})
 },
 login:function(){
 		this.setData({
      loginHidden:true,//登录隐藏
  		logihidden:false,//个人中心隐藏
    });
    var username =this.data.username1;
    console.log(username)
    wx.setStorageSync('username', "lee");
	  wx.setStorageSync('password', 123);
 }
  
 
  
  
})