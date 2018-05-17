// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText: '',
    text: 'Please share your stories here.',
    clearText: ''
  },

  bindInputToData: function (c) {
    this.setData({
      inputText: c.detail.value
    })
    console.log(this.data.inputText)
  },

  submitTextToStories: function (c) {
    if (this.data.inputText) {
      var util = require('../../utils/util.js');
      // 调用函数时，传入new Date()参数，返回值是日期和时间  
      var time = util.formatTime(new Date());
      // 再通过setData更改Page()里面的data，动态更新页面的数据  
      console.log(time)
      if (time != null)
        wx.showToast({
          title: time,
          // duration: 200000
        })
      else {
        wx.showToast({
          title: 'No data!' + time,
          // duration: 200000
        })
      }

      //Clear before storage
      try {
        wx.clearStorageSync()
      } catch (e) {
        // Do something when catch error
        console.log('Error clearStorageSync:' + e)
      }

      try {
        wx.setStorageSync('wxInputText', time + '@' + this.data.inputText)
      } catch (e) {
        console.log('Error setStorageSync:' + e)
      }

      try {
        var value = wx.getStorageSync('key')
        console.log(value)
        if (value) {
          var arrStory = value.split('@')
          wx.showToast({
            title: arrStory,
            // duration: 200000
          })
        }
      } catch (e) {
        wx.showToast({
          title: 'no data!',
          // duration: 200000
        })
        return
      }

      wx.switchTab({
        url: '/pages/stories/stories',
      })
    }
    else {
      wx.showModal({
        title: 'Warning',
        content: 'Hey,buddy. \n There is no data!',
        success: function (res) {
          // if (res.confirm) {
          //   console.log('OK')
          // } else {
          //   console.log('can')
          // }
          console.log('OK')
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //Initiate textarea
    this.setData({
      clearText: ''
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

  // submitTextToStories: function () {
  //   wx.navigateTo({
  //     url: '/pages/submit/submit',
  //   })
  // }
})

