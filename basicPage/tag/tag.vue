<template>

  <view class="basic-tag tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>标签</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础">
        <tn-tag>标签</tn-tag>
      </demo-title>
      
      <demo-title title="大小">
        <view>
          <tn-tag size="sm" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag size="lg" margin="10rpx 10rpx">标签</tn-tag>
        </view>
        <view class="tn-margin-top">
          <tn-tag width="200rpx" height="100rpx" :fontSize="40" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag padding="40rpx 80rpx" margin="10rpx 10rpx">标签</tn-tag>
        </view>
      </demo-title>
      
      <demo-title title="形状">
        <view>
          <tn-tag margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag shape="radius" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag shape="circle" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag shape="circleLeft" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag shape="circleRight" margin="10rpx 10rpx">标签</tn-tag>
        </view>
      </demo-title>
      
      <demo-title title="颜色">
        <view>
          <tn-tag backgroundColor="#01BEFF" fontColor="#FFFFFF" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag backgroundColor="rgba(1, 190, 255, 0.8)" fontColor="tn-color-white" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag backgroundColor="tn-bg-teal" fontColor="tn-color-white" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag backgroundColor="tn-cool-bg-color-7" fontColor="tn-color-white" margin="10rpx 10rpx">标签</tn-tag>
        </view>
        <view>
          <tn-tag backgroundColor="tn-main-gradient-indigo" fontColor="rgba(255, 255, 255, 0.8)" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag backgroundColor="tn-main-gradient-indigo--reverse" fontColor="rgba(255, 255, 255, 0.8)" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag backgroundColor="tn-main-gradient-indigo--light" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag backgroundColor="tn-main-gradient-indigo--single" fontColor="rgba(255, 255, 255, 0.8)" margin="10rpx 10rpx">标签</tn-tag>
        </view>
      </demo-title>
      
      <demo-title title="镂空">
        <view>
          <tn-tag :plain="true" backgroundColor="#01BEFF" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag :plain="true" backgroundColor="rgba(1, 190, 255, 0.8)" margin="10rpx 10rpx">标签</tn-tag>
          <tn-tag :plain="true" backgroundColor="tn-bg-teal" margin="10rpx 10rpx">标签</tn-tag>
        </view>
      </demo-title>
      
      <demo-title title="标签使用">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="origin-demo">
            <view class="origin-demo__tag">
              <tn-tag backgroundColor="#01BEFF" fontColor="#FFFFFF" width="auto" height="30rpx" shape="circle">99+</tn-tag>
            </view>
          </view>
          
          <!-- #ifdef H5 -->
          <view class="capsule">
            <tn-tag class="capsule-tag" width="50%" height="100%" padding="0" shape="circleLeft" backgroundColor="#01BEFF" fontColor="#FFFFFF" :plain="false">
              <text class="tn-icon-add"></text>
            </tn-tag>
            <tn-tag class="capsule-tag" width="50%" height="100%" padding="0" shape="circleRight" backgroundColor="#01BEFF" fontColor="#080808" :plain="true">
              2
            </tn-tag>
          </view>
          <!-- #endif -->
          <!-- #ifdef MP-WEIXIN -->
          <view class="capsule">
            <tn-tag class="capsule-tag" width="100%" height="100%" padding="0" shape="circleLeft" backgroundColor="#01BEFF" fontColor="#FFFFFF" :plain="false">
              <text class="tn-icon-add"></text>
            </tn-tag>
            <tn-tag class="capsule-tag" width="100%" height="100%" padding="0" shape="circleRight" backgroundColor="#01BEFF" fontColor="#080808" :plain="true">
              2
            </tn-tag>
          </view>
          <!-- #endif -->
          
          <tn-tag :plain="true" backgroundColor="#01BEFF" width="auto" margin="0px 30rpx">
            <view class="tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-center">
              <view>带关闭按钮</view>
              <view class="tn-icon-close tn-margin-left-xs"></view>
            </view>
          </tn-tag>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicTag',
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
  .basic-tag {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
  .origin-demo {
    width: 180rpx;
    height: 180rpx;
    background-color: #FFFFFF;
    margin: 20rpx;
    margin-right: 70rpx;
    position: relative;
    
    &__tag {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
</style>
