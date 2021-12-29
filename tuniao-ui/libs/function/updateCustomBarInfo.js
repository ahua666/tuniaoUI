/**
 * 更新自定义顶部导航栏的高度
 */
async function updateCustomBarInfo () {
  return await new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: (e) => {
        let statusBarHeight = 0
        let customBarHeight = 0
        // #ifndef MP
        statusBarHeight = e.statusBarHeight
        if (e.platform == 'android') {
          customBarHeight = e.statusBarHeight + 50
        } else {
          customBarHeight = e.statusBarHeight + 45
        };
        // #endif

        // #ifdef MP-WEIXIN
        statusBarHeight = e.statusBarHeight
        let custom = wx.getMenuButtonBoundingClientRect()
        customBarHeight = custom.bottom + ((custom.top - e.statusBarHeight) <= 4 ? (custom.top - e
          .statusBarHeight) + 4 : (custom.top - e.statusBarHeight))
        // #endif		

        // #ifdef MP-ALIPAY
        statusBarHeight = e.statusBarHeight
        customBarHeight = e.statusBarHeight + e.titleBarHeight
        // #endif
        this && this.$t.vuex('vuex_status_bar_height', statusBarHeight)
        this && this.$t.vuex('vuex_custom_bar_height', customBarHeight)
        resolve({
          statusBarHeight,
          customBarHeight
        })
      },
      fail: (err) => {
        console.log("获取设备信息失败", err);
        this && this.$t.vuex('vuex_status_bar_height', 0)
        this && this.$t.vuex('vuex_custom_bar_height', 0)
        reject()
      }
    })

  })
}

export default updateCustomBarInfo
