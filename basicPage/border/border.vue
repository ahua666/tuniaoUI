<template>

  <view class="basic-border tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>边框</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="普通边框">
        <view class="border-content tn-border-solid">
          <view>四周边框</view>
        </view>
        <view class="border-content tn-border-solid-top">
          <view>顶部边框</view>
        </view>
        <view class="border-content tn-border-solid-right">
          <view>右边边框</view>
        </view>
        <view class="border-content tn-border-solid-bottom">
          <view>下面边框</view>
        </view>
        <view class="border-content tn-border-solid-left">
          <view>左边边框</view>
        </view>
      </demo-title>
      
      <demo-title title="加粗边框">
        <view class="border-content tn-border-solids">
          <view>四周边框</view>
        </view>
        <view class="border-content tn-border-solids-top">
          <view>顶部边框</view>
        </view>
        <view class="border-content tn-border-solids-right">
          <view>右边边框</view>
        </view>
        <view class="border-content tn-border-solids-bottom">
          <view>下面边框</view>
        </view>
        <view class="border-content tn-border-solids-left">
          <view>左边边框</view>
        </view>
      </demo-title>
      
      <demo-title title="虚线边框">
        <view class="border-content tn-border-dashed">
          <view>四周边框</view>
        </view>
        <view class="border-content tn-border-dashed-top">
          <view>顶部边框</view>
        </view>
        <view class="border-content tn-border-dashed-right">
          <view>右边边框</view>
        </view>
        <view class="border-content tn-border-dashed-bottom">
          <view>下面边框</view>
        </view>
        <view class="border-content tn-border-dashed-left">
          <view>左边边框</view>
        </view>
      </demo-title>
      
      <demo-title title="隐藏某一边框">
        <view class="border-content tn-border-solid tn-none-border-top">
          <view>隐藏上边框</view>
        </view>
        <view class="border-content tn-border-solid tn-none-border-right">
          <view>隐藏右边框</view>
        </view>
        <view class="border-content tn-border-solid tn-none-border-bottom">
          <view>隐藏下边框</view>
        </view>
        <view class="border-content tn-border-solid tn-none-border-left">
          <view>隐藏左边框</view>
        </view>
        <view class="border-content tn-border-dashed tn-none-border-top">
          <view>隐藏上边框</view>
        </view>
        <view class="border-content tn-border-dashed tn-none-border-right">
          <view>隐藏右边框</view>
        </view>
        <view class="border-content tn-border-dashed tn-none-border-bottom">
          <view>隐藏下边框</view>
        </view>
        <view class="border-content tn-border-dashed tn-none-border-left">
          <view>隐藏左边框</view>
        </view>
      </demo-title>
      
      <demo-title title="颜色">
        <view class="border-content tn-border-solid tn-border-indigo">
          
        </view>
        <view class="border-content tn-border-solids tn-border-green">
          
        </view>
        <view class="border-content tn-border-dashed tn-border-purplered">
          
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicBorder',
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
  .basic-border {
    min-height: 100vh;
  }
  
  
  .border-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80rpx;
    background-color: #FFFFFF;
    margin: 30rpx 0rpx;
  }
</style>
