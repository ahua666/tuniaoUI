<template>

  <view class="components-sticky tn-safe-area-inset-bottom" style="height: 200vh;">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>sticky吸顶</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="吸顶">
        <tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height">
          <view class="sticky-content tn-bg-orangered tn-color-white">普通吸顶</view>
        </tn-sticky>
        <view style="margin-top: 200rpx;">
          <tn-sticky :offsetTop="100" :customNavHeight="vuex_custom_bar_height">
            <view class="sticky-content tn-bg-indigo tn-color-white">有距离吸顶</view>
          </tn-sticky>
        </view>
      </demo-title>
      
      <demo-title title="取消吸顶">
        <tn-sticky :offsetTop="0" :enabled="false" :customNavHeight="vuex_custom_bar_height">
          <view class="sticky-content tn-bg-red tn-color-white">不允许吸顶</view>
        </tn-sticky>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsSticky',
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
  
  .components-sticky {
    min-height: 100vh;
  }
  
  .sticky-content {
    height: 80rpx;
    padding: 0 80rpx;
    margin: 0 10rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
  }
</style>
