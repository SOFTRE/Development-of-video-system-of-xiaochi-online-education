//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper-01.png',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
  },
  copy: function(){
    if(wx.setClipboardData){
    wx.setClipboardData({
      data: '(1)Python-学习算法/人工智能/大数据的第一步/(2)MySQL面试指南/(3)Go语言开发分布式任务调度 轻松搞定高性能Crontab/(4)最新技术栈的java接口自动化测试实战',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      
      }
    })
    }else{
      wx.showModal({
        title: '提示',
        content: '您的微信版本过低，请升级',
      })
    }
  }
})
