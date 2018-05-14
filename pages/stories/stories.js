// pages/stories/stories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myStoryTime: 'myStoryTime',
    myStoryText: 'myStoryText',
    // arrStory: [],
    arrStories: [[]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // var tmpStoryText = ''
    // var tmpArrStories = []
    // //get storage Sync
    // try {
    //   tmpStoryText = wx.getStorageSync('wxInputText')
    //   if (tmpStoryText) {
    //     tmpArrStories = tmpStoryText.split('@')
    //   }
    // } catch (e) {
    //   console.log('Can not getStorageSync' + e)
    // }

    // console.log(this.data.arrStories.length)
    // tmpArrStories.push(this.data.arrStories.length) //给每组数据编号
    // console.log(tmpArrStories)

    // var arrStories = this.data.arrStories
    // if (!arrStories[0][0]) {
    //   arrStories[0] = tmpArrStories
    // }
    // else
    //   arrStories.push(tmpArrStories) //压入数据数组

    // console.log(arrStories)
    // this.setData({
    //   arrStories: arrStories
    // })

    // //Storage arrStories
    // try {
    //   wx.setStorageSync('arrStories', arrStories)
    // } catch (e) {
    // }
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

    var tmpStoryText = ''
    var tmpArrStories = []

    try {
      tmpStoryText = wx.getStorageSync('wxInputText')
      if (tmpStoryText) {
        tmpArrStories = tmpStoryText.split('@')
      }
    } catch (e) {
      console.log('Can not getStorageSync' + e)
    }

    console.log(this.data.arrStories.length)
    tmpArrStories.push(this.data.arrStories.length) //给每组数据编号
    console.log(tmpArrStories)

    var arrStories = this.data.arrStories
    if (arrStories[0][0] == null) {
      arrStories[0] = tmpArrStories
    }
    else {
      try {
        arrStories = wx.getStorageSync('arrStories')
      } catch (e) {
        console.log('Can not getStorageSync' + e)
      }
      arrStories.push(tmpArrStories) //push data to arrStories.
    }
    console.log('Get arrStories:' + arrStories)

    this.setData({
      arrStories: arrStories
    })

    //Storage arrStories
    try {
      wx.setStorageSync('arrStories', this.data.arrStories)
    } catch (e) {
    }
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
})