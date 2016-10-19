Page({
  data: {
    list: []
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8000/mock/list.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          list: res.data
        });
      },
      fail: function (error) {
        console.log(error+"bug");
      }
    });

  }
  
  
});
