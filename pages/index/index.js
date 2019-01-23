//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    prolist:[
      {
        logo: '/images/pro_01.jpg',
        title:'房贷标题',
        desc:'房贷内容',
        detail: '/images/btn_detail.png',
        ask:'/images/btn_ask.png'
      },
      {
        logo: '/images/pro_02.jpg',
        title: '房贷标题',
        desc: '房贷内容',
        detail: '/images/btn_detail.png',
        ask: '/images/btn_ask.png'
      },
      {
        logo: '/images/pro_03.jpg',
        title: '房贷标题',
        desc: '房贷内容',
        detail: '/images/btn_detail.png',
        ask: '/images/btn_ask.png'
      }
    ]
  },
  onLoad: function () {
    this.setData({
      test:'01',
    })
  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    }
  }
)
