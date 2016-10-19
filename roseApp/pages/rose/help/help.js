//注册页面
Page({
	data:{
		current:0,
		swiper: {
	      indicatorDots: false,
	      autoplay: false,
	      interval: 0,
	      duration: 300
	  },
	  longitude: 116.334655,
	   latitude: 40.056601,
	   model:'',
	   networkType:'',
	   pixelRatio:'',
	   windowWidth:'',
	   windowHeight:'',
	   language:'',
	   version:''  
	    
	},
	onShow: function () {
	    var that = this;
	    wx.getNetworkType({
	      success: function(res) {
	        var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
	        that.setData({
	          networkType: networkType
	        })
	      }
	    });
	
	    wx.getSystemInfo({
	    	
	      success: function(res) {
	      	that.setData({
	          model: res.model,
	          pixelRatio:res.pixelRatio,
	          windowWidth:res.windowWidth,
	          windowHeight:res.windowHeight,
	          language:res.language,
	          version:res.version
	        })
	        
	      }
	    });
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
 	 
 	 
 	showInWechatMap: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
  
        // 使用微信内置地图查看位置
        wx.openLocation({
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          scale: 28
        });
      },
      fail: function () {
        console.log('开发工具不支持~');
      }
    })
  }
 	 
 	 
})
