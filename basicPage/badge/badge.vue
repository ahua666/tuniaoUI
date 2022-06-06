<template>

  <view class="basic-badge tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>微标</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <tn-badge :dot="true" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge margin="10rpx 10rpx"><text>99</text></tn-badge>
          <tn-badge margin="10rpx 10rpx"><text>99+</text></tn-badge>
        </view>
      </demo-title>
      
      <demo-title title="大小">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <tn-badge :dot="true" :radius="30" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge :radius="40" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge :radius="60" :fontSize="30" margin="10rpx 10rpx"><text>99</text></tn-badge>
          <tn-badge :fontSize="30" padding="10rpx 30rpx" margin="10rpx 10rpx"><text>99+</text></tn-badge>
        </view>
      </demo-title>
      
      <demo-title title="颜色">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <tn-badge backgroundColor="#01BEFF" :dot="true" :radius="30" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge backgroundColor="rgba(1, 190, 255, 0.8)" fontColor="#FFFFFF" :radius="40" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge backgroundColor="tn-bg-teal" fontColor="tn-color-white" :radius="40" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge backgroundColor="tn-cool-bg-color-7" fontColor="tn-color-white" :radius="40" margin="10rpx 10rpx"><text>0</text></tn-badge>
          <tn-badge backgroundColor="tn-main-gradient-indigo" :radius="40" margin="10rpx 10rpx"><text>0</text></tn-badge>
        </view>
      </demo-title>
      
      <demo-title title="微标使用">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <view class="badge-demo">
            <tn-badge backgroundColor="#01BEFF" fontColor="#FFFFFF" :absolute="true" >
              <text>99+</text>
            </tn-badge>
          </view>
          <view class="badge-demo">
            <tn-badge backgroundColor="#01BEFF" fontColor="#FFFFFF" :absolute="true" :translateCenter="false">
              <text>99+</text>
            </tn-badge>
          </view>
          <view class="badge-demo">
            <tn-badge backgroundColor="#01BEFF" fontColor="#FFFFFF" :absolute="true" top="-18rpx" right="20rpx">
              <text>99+</text>
            </tn-badge>
          </view>
        </view>
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap tn-margin-top">
          <view class="badge-demo">
            <tn-badge backgroundColor="#01BEFF" fontColor="#FFFFFF" :dot="true" :radius="30" :absolute="true" ></tn-badge>
          </view>
          <view class="badge-demo">
            <tn-badge backgroundColor="#01BEFF" fontColor="#FFFFFF" :dot="true" :radius="30" :absolute="true" :translateCenter="false"></tn-badge>
          </view>
          <view class="badge-demo">
            <tn-badge backgroundColor="#01BEFF" fontColor="#FFFFFF" :dot="true" :radius="30" :absolute="true" top="-18rpx" right="20rpx"></tn-badge>
          </view>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicBadge',
    components: {demoTitle},
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .basic-badge {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
  
  .badge-demo {
    position: relative;
    width: 160rpx;
    height: 160rpx;
    background-color: #FFFFFF;
    margin: 18rpx 20rpx;
  }
</style>
