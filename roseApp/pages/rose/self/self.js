//注册页面
Page({
	data:{
		toastHidden:true,
		mm:false
	},
	onLoad: function () {
		//console.log(0);
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
 	}
 	
 	
 	
})
