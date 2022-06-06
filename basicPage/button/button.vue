<template>
  
  <view class="basic-button tn-safe-area-inset-bottom">
  
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>按钮</tn-nav-bar>
  
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础">
        <tn-button>按钮</tn-button>
      </demo-title>
      
      <demo-title title="大小">
        <view>
          <tn-button size="sm" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button margin="10rpx 10rpx">按钮</tn-button>
          <tn-button size="lg" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button width="150rpx" height="100rpx" :fontSize="40" margin="10rpx 10rpx">按钮</tn-button>
        </view>
        <view class="tn-margin-top">
          <tn-button padding="20rpx 40rpx" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button margin="10rpx 10rpx">按钮</tn-button>
          <tn-button margin="10rpx 10rpx" :fontBold="true">按钮</tn-button>
        </view>
        <view class="tn-margin-top">
          <tn-button width="100%">按钮</tn-button>
        </view>
      </demo-title>
      
      <demo-title title="形状">
        <tn-button margin="10rpx 10rpx">按钮</tn-button>
        <tn-button shape="round" margin="10rpx 10rpx">按钮</tn-button>
        <tn-button shape="icon" margin="10rpx 10rpx"><text class="tn-icon-link"></text></tn-button>
        <tn-button width="150rpx" height="100rpx" :fontSize="40" shape="icon" margin="10rpx 10rpx"><text class="tn-icon-link"></text></tn-button>
      </demo-title>
      
      <demo-title title="颜色">
        <view>
          <tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button backgroundColor="rgba(1, 190, 255, 0.8)" fontColor="tn-color-white" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button backgroundColor="tn-bg-teal" fontColor="tn-color-white" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button backgroundColor="tn-cool-bg-color-7" fontColor="tn-color-white" margin="10rpx 10rpx">按钮</tn-button>
        </view>
        <view class="tn-margin-top">
          <tn-button backgroundColor="tn-main-gradient-indigo" fontColor="rgba(255, 255, 255, 0.8)" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button backgroundColor="tn-main-gradient-indigo--reverse" fontColor="rgba(255, 255, 255, 0.8)" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button backgroundColor="tn-main-gradient-indigo--light" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button backgroundColor="tn-main-gradient-indigo--single" fontColor="rgba(255, 255, 255, 0.8)" margin="10rpx 10rpx">按钮</tn-button>
        </view>
      </demo-title>
      
      <demo-title title="边框">
        <view>
          <tn-button :plain="true" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button :plain="true" backgroundColor="#01BEFF" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button :plain="true" :borderBold="true" backgroundColor="#01BEFF" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button :plain="true" backgroundColor="rgba(1, 190, 255, 0.8)" margin="10rpx 10rpx">按钮</tn-button>
          <tn-button :plain="true" backgroundColor="tn-bg-teal" margin="10rpx 10rpx">按钮</tn-button>
        </view>
      </demo-title>
      
      <demo-title title="阴影">
        <tn-button :shadow="true" width="100%" height="100rpx" margin="10rpx 0">按钮</tn-button>
        <tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="#01BEFF" fontColor="#FFFFFF" margin="10rpx 0">按钮</tn-button>
        <tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="tn-bg-teal" fontColor="#FFFFFF" margin="10rpx 0">按钮</tn-button>
        <tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="tn-main-gradient-indigo" margin="10rpx 0">按钮</tn-button>
        <tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="tn-cool-bg-color-7" margin="10rpx 0">按钮</tn-button>
        <tn-button :shadow="true" :plain="true" height="100rpx" width="100%" :border="false" margin="10rpx 0">镂空无边框</tn-button>
      </demo-title>
      
      <demo-title title="加载中">
        <tn-button :loading="true" width="100%" height="100rpx" margin="10rpx 0">按钮</tn-button>
      </demo-title>
      
      <demo-title title="禁止点击">
        <tn-button :disabled="true" width="100%" height="100rpx" margin="10rpx 0">按钮</tn-button>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
  
  </view>
  
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicButton',
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
  .basic-button {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
