<template>

  <view class="basic-shadow tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>阴影</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="普通阴影">
        <view class="shadow-content tn-shadow"></view>
        <view class="shadow-content tn-shadow-warp"></view>
      </demo-title>
      
      <demo-title title="有色阴影">
        <view class="shadow-content tn-bg-teal tn-shadow-teal"></view>
        <view class="shadow-content tn-bg-indigo tn-shadow-indigo"></view>
      </demo-title>
      
      <demo-title title="背景图片阴影">
        <view class="shadow-content shadow-content__image tn-shadow-blur"></view>
      </demo-title>
      
      <demo-title title="文字阴影">
        <view class="shadow-content__text tn-color-indigo tn-text-shadow-indigo">
          图鸟UI，专注UI开发
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicShadow',
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
  
  .basic-shadow {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
  
  .shadow-content {
    height: 80rpx;
    background-color: #FFFFFF;
    margin: 30rpx 0;
    
    &__image {
      z-index: 1;
      background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7207d16b-b9c3-4105-8d0d-e9e0c7785f66/605563a1-a210-42f3-99e4-8de3c655c59e.jpg);
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
    }
    
    &__text {
      font-size: 60rpx;
      text-align: center;
    }
  }
</style>
