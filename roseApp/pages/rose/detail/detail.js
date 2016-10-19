Page({
  data: {
    imgUrls: [
    	'/images/d0.jpg',
      '/images/d1.jpg',
      '/images/d2.jpg'
    ]
  },
  onLoad: function (params) {
    this.setData({
      id: params.id
    })
  },
  onReady: function () {
    console.log(this.data.id);
    wx.setNavigationBarTitle({
      title: '听花说'
    });
  }
});
