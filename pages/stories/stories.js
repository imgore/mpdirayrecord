// pages/stories/stories.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myStoryTime: 'myStoryTime',
    myStoryText: 'myStoryText',
    // arrStory: [],
    arrStories: [{
      "id": '',
      "time": '',
      "text": ''
    }],
    title: 'Record my stories',
    teaser: 'Share my memories forever'
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

    var tmpStoryText = ''
    var tmpArrStories = []

    try {
      tmpStoryText = wx.getStorageSync('wxInputText')
      if (tmpStoryText != '') {
        tmpArrStories = tmpStoryText.split('@')
      }
      else
        return
    } catch (e) {
      console.log('Can not getStorageSync' + e)
      return
    }
    console.log('tmpArrStories:' + tmpArrStories)

    console.log('app.globalData:' + app.globalData)
    // tmpArrStories.push(this.data.arrStories.length) //给每组数据编号
    var arrStories = [{
      "id": '',
      "time": '',
      "text": ''
    }]
    var tmp = {
      "id": '',
      "time": '',
      "text": ''
    }

    arrStories = app.globalData.arrStories
    console.log('arrStories:' + arrStories)
    tmp.id = arrStories.length

    try {
      if (tmpArrStories[0])
        tmp.time = tmpArrStories[0]
      if (tmpArrStories[1])
        tmp.text = tmpArrStories[1]
    }
    catch(e) {
      console.log("tmpArrStories has something wrong with:" + e)
    }

    if (arrStories[0].text == null) {
      arrStories[0] = tmp
    }
    else {
      arrStories.push(tmp) //push data to arrStories.
    }
    console.log('Get arrStories:' + arrStories)

    //Storage to glabalData and show
    if (arrStories)
      getApp().globalData.arrStories = arrStories
    else
      return

    this.setData({
      arrStories: arrStories
    })

    //Clear before storage
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
      console.log('Error clearStorageSync:' + e)
    }

    // //Storage arrStories
    // try {
    //   wx.setStorageSync('arrStories', this.data.arrStories)
    // } catch (e) {
    // }
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