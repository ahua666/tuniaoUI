<template>
  <view class="template-content">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    
    <view class="tn-margin tn-text-center" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="">
        <view class="loading loading1 tn-icon-airplane tn-text-shadow-purplered"></view>
        <view class="loading loading2 tn-icon-flower tn-text-shadow-blue"></view>
        <view class="loading loading3 tn-icon-gift tn-text-shadow-orangered"></view>
        <view class="loading loading4 tn-icon-shop tn-text-shadow-indigo"></view>
        <view class="loading loading5 tn-icon-light tn-text-shadow-orangeyellow"></view>
        <view class="loading loading6 tn-icon-fire tn-text-shadow-cyan"></view>
      </view>
    </view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateContent',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  .loading {
    font-size: 60rpx;
    width: 160rpx;
    height: 160rpx;
    animation: move 3s linear infinite;
    backface-visibility: hidden;
    position: absolute;
    top: calc(50% - 160rpx);
    left: 50%;
    transform-origin: -4vmin center;
    will-change: transform;
  }
  .loading1 {
    color: #4B98FE;
    animation-delay: -0.5s;
    opacity: 0;
  }
  .loading2 {
    color: #00D05E;
    animation-delay: -1s;
    opacity: 0;
  }
  .loading3 {
    color: #FFAC00;
    animation-delay: -1.5s;
    opacity: 0;
  }
  .loading4 {
    color: #FB6A67;
    animation-delay: -2s;
    opacity: 0;
  }
  .loading5 {
    color: #957BFE;
    animation-delay: -2.5s;
    opacity: 0;
  }
  .loading6 {
    color: #00B9FE;
    animation-delay: -3s;
    opacity: 0;
  }
  
  @keyframes move {
    0% {
      transform: scale(1) rotate(0deg) translate3d(0, 0, 1px);
      will-change: transform;
    }
    30% {
      opacity: 1;
    }
    100% {
      z-index: 10;
      transform: scale(0) rotate(360deg) translate3d(0, 0, 1px);
      will-change: transform;
    }
  }


</style>
