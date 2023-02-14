<template>
  <view class="take-out__walking-route">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>路线轨迹</tn-nav-bar>
    
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <map
        class="take-out__map"
        :longitude="location.longitude"
        :latitude="location.latitude"
        :scale="18"
        :polyline="mapPolyline"
        :markers="mapMarkers"
      ></map>
    </view>
    
    <tn-modal
      v-model="openSettingFlag"
      :custom="true"
      :showCloseBtn="true"
      width="auto"
      padding="40rpx 80rpx"
    >
      <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
        <view class="tn-text-bold tn-text-lg">授权使用位置信息</view>
        <view class="tn-margin-top-xs tn-color-gray">获取定位失败, 请进行设置</view>
        <view class="tn-margin-top">
          <tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="openSetting">打开设置</tn-button>
        </view>
      </view>
    </tn-modal>
    
  </view>
</template>

<script>
  export default {
    name: 'takeOutWalkingRoute',
    data() {
      return {
        openSettingFlag: false,
        location: {
          latitude: 22.970675,
          longitude: 113.334259
        },
        mapPolyline: [{
          points: [
            {latitude: 22.969238, longitude: 113.333890},
            {latitude: 22.969309, longitude: 113.333878},
            {latitude: 22.969334, longitude: 113.334132},
            {latitude: 22.969649, longitude: 113.334130},
            {latitude: 22.970044, longitude: 113.334130},
            {latitude: 22.970578, longitude: 113.334130},
            {latitude: 22.970606, longitude: 113.334255},
            {latitude: 22.970667, longitude: 113.334345},
            {latitude: 22.970673, longitude: 113.334458},
            {latitude: 22.970798, longitude: 113.334452},
            {latitude: 22.970962, longitude: 113.334530},
            {latitude: 22.971108, longitude: 113.334564},
            {latitude: 22.971111, longitude: 113.334631}
          ],
          color: '#01BEFFFF',
          width: 3,
          arrowLine: true
        }],
        mapMarkers: [{
          id: 0,
          latitude: 22.971093,
          longitude: 113.334740,
          iconPath: '/takeOutPage/static/images/location.png',
          width: 20,
          height: 30,
          callout: {
            content: '您所在位置',
            color: '#080808',
            bgColor: 'transparent',
            display: 'ALWAYS'
          }
        },{
          id: 1,
          latitude: 22.969238,
          longitude: 113.333890,
          iconPath: '/takeOutPage/static/images/take_out_car.png',
          width: 30,
          height: 30,
          rotate: 270
        }],
        // 当前外卖小车的坐标位置Index
        takeOutCarIndex: 0
      }
    },
    onLoad() {
      // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ || MP-KUAISHOU || MP-LARK
      // this.getUserAuthorize()
      // #endif
      // #ifdef APP-VUE || H5
      // this.getUserLocation()
      // #endif
      
      this.runIntervalTimer = setInterval(() => {
        let rotate = 0
        const pointsLength = this.mapPolyline[0].points.length
        if (this.takeOutCarIndex >= pointsLength) {
          this.takeOutCarIndex = 0
        }
        
        if (this.takeOutCarIndex < pointsLength - 2) {
          const currentPoint = this.mapPolyline[0].points[this.takeOutCarIndex]
          const nextPoint = this.mapPolyline[0].points[this.takeOutCarIndex+1]
          rotate = this.getAngle(currentPoint, nextPoint)
        }
        
        this.mapMarkers[1].latitude = this.mapPolyline[0].points[this.takeOutCarIndex].latitude
        this.mapMarkers[1].longitude = this.mapPolyline[0].points[this.takeOutCarIndex].longitude
        this.mapMarkers[1].rotate = rotate === 0 ? 0 : rotate - 90
        this.takeOutCarIndex++
      }, 500)
    },
    onUnload() {
      if (this.runIntervalTimer) {
        clearInterval(this.runIntervalTimer)
      }
    },
    methods: {
      // 获取用户是否已经授权获取位置信息
      getUserAuthorize() {
        uni.authorize({
          scope: 'scope.userLocation',
          success: (res) => {
            this.getUserLocation()
          },
          fail: (err) => {
            // 获取权限失败，判断用户是否禁止了获取用户信息
            // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ || MP-KUAISHOU || MP-LARK
            uni.getSetting({
              success: (settingRes) => {
                if (!settingRes.authSetting.hasOwnProperty('scope.userLocation') || !settingRes.authSetting['scope.userLocation']) {
                  this.openSettingFlag = true
                }
              },
              fail: (settingErr) => {}
            })
            // #endif
            // #ifdef APP-VUE || H5
            this.$tn.message.toast('获取定位失败, 请重试')
            // #endif
          }
        })
      },
      // 获取用户的当前位置信息
      getUserLocation() {
        uni.getLocation({
          type: 'gcj02',
          success: (res) => {
            this.location.latitude = res.latitude
            this.location.longitude = res.longitude
          },
          fail: (err) => {
            this.$tn.message.toast('获取定位失败, 请重试')
          }
        })
      },
      // 打开设置页面
      openSetting() {
        uni.openSetting({
          success: (res) => {
            if (res.authSetting.hasOwnProperty('scope.userLocation') && res.authSetting['scope.userLocation'] === true) {
              this.openSettingFlag = false
              this.getUserLocation()
            } else {
              this.$tn.message.toast('设置获取位置信息失败')
            }
          },
          fail: (err) => {}
        })
      },
      // 获取两点之间的角度
      getAngle(current, next) {
        let ret = 0
        let w1 = current.latitude/180 * Math.PI
        let j1 = current.longitude/180 * Math.PI

        let w2 = next.latitude/180 * Math.PI
        let j2 = next.longitude/180 * Math.PI

        ret = 4 * Math.pow(Math.sin((w1 - w2) / 2), 2) - Math.pow(Math.sin((j1 - j2) / 2) * (Math.cos(w1) - Math.cos(w2)), 2)
        ret = Math.sqrt(ret)

        // var temp = Math.sin(Math.abs(j1 - j2) / 2) * (Math.cos(w1) + Math.cos(w2));
        let temp = Math.sin((j1 - j2) / 2) * (Math.cos(w1) + Math.cos(w2))
        ret = ret/temp

        ret = Math.atan(ret) / Math.PI * 180 
        ret += 90
        
        // 这里用如此臃肿的if..else是为了判定追踪单个点的具体情况,从而调整ret的值
        if(j1-j2 < 0){
          if(w1-w2 < 0){
              ret = ret
          }else{
              ret = -ret+180
          }
        }else{
          if(w1-w2 < 0){
              ret = 180+ret
          }else{
              ret = -ret
          }
        }
        return ret
      }
    }
  }
</script>

<style lang="scss" scoped>
  .take-out {
    
    
    &__map {
      width: 100%;
      height: calc(100vh - 300px);
    }
  }
</style>
