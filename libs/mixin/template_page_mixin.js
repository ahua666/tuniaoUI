/**
 * 演示页面mixin
 */
module.exports = {
  data() {
    return {
      
    }
  },
  methods: {
    // 点击左上角返回按钮时触发事件
    goBack() {
      // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
      const pages = getCurrentPages()
      if (pages && pages.length > 0) {
        const firstPage = pages[0]
        if (!firstPage.route || firstPage.route != 'pages/index/index') {
          uni.reLaunch({
            url: '/pages/index/index'
          })
        } else {
          uni.navigateBack({
            delta: 1
          })
        }
      } else {
        uni.reLaunch({
          url: '/pages/index/index'
        })
      }
    }
  }
}