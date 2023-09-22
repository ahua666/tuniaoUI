<template>
  <view class="template-loading">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <!-- 图鸟加载-->
      <view class="loader">
        <view class="circle loading1"></view>
        <view class="circle loading2"></view>
        <view class="circle loading3"></view>
        <view class="circle loading4"></view>
        <view class="circle loading5"></view>
        <view class="circle loading6"></view>
        <view class="circle loading7"></view>
        <view class="circle loading8"></view>
      </view>
      
    </view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateLoading',
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
  
  /* 加载动画*/
  .loader {
    position:absolute;
    width:120rpx;
    height:120rpx;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }
  .circle{
    color: #01BEFF;
    position: absolute;
    border-radius: 100%;
    width: 30rpx;
    height: 30rpx;
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
    -webkit-animation: spin 1s infinite ease-in-out;
    -moz-animation: spin 1s infinite ease-in-out;
    -o-animation: spin 1s infinite ease-in-out;
    animation: spin 1s infinite ease-in-out
  }
  
  .loader :nth-child(1) {
    top: 5%;
    left: 50%;
    -webkit-animation-delay: -.875s;
    -moz-animation-delay: -.875s;
    -o-animation-delay: -.875s;
    animation-delay: -.875s
  }
  
  .loader :nth-child(2) {
    top: 18.1801948466%;
    left: 81.8198051534%;
    -webkit-animation-delay: -.75s;
    -moz-animation-delay: -.75s;
    -o-animation-delay: -.75s;
    animation-delay: -.75s
  }
  
  .loader :nth-child(3) {
    top: 50%;
    left: 95%;
    -webkit-animation-delay: -.625s;
    -moz-animation-delay: -.625s;
    -o-animation-delay: -.625s;
    animation-delay: -.625s
  }
  
  .loader :nth-child(4) {
    top: 81.8198051534%;
    left: 81.8198051534%;
    -webkit-animation-delay: -.5s;
    -moz-animation-delay: -.5s;
    -o-animation-delay: -.5s;
    animation-delay: -.5s
  }
  
  .loader :nth-child(5) {
    top: 94.9999999966%;
    left: 50.0000000005%;
    -webkit-animation-delay: -.375s;
    -moz-animation-delay: -.375s;
    -o-animation-delay: -.375s;
    animation-delay: -.375s
  }
  
  .loader :nth-child(6) {
    top: 81.8198046966%;
    left: 18.1801949248%;
    -webkit-animation-delay: -.25s;
    -moz-animation-delay: -.25s;
    -o-animation-delay: -.25s;
    animation-delay: -.25s
  }
  
  .loader :nth-child(7) {
    top: 49.9999750815%;
    left: 5.0000051215%;
    -webkit-animation-delay: -.125s;
    -moz-animation-delay: -.125s;
    -o-animation-delay: -.125s;
    animation-delay: -.125s
  }
  
  .loader :nth-child(8) {
    top: 18.179464974%;
    left: 18.1803700518%;
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    -o-animation-delay: 0s;
    animation-delay: 0s
  }
  
  @-webkit-keyframes spin {
    0%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  
    20% {
      opacity: 1
    }
  
    80% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0)
    }
  }
  
  @-moz-keyframes spin {
    0%,
    100% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1)
    }
  
    20% {
      opacity: 1
    }
  
    80% {
      opacity: 0;
      -moz-transform: scale(0);
      transform: scale(0)
    }
  }
  
  @-o-keyframes spin {
    0%,
    100% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1)
    }
  
    20% {
      opacity: 1
    }
  
    80% {
      opacity: 0;
      -o-transform: scale(0);
      transform: scale(0)
    }
  }
  
  @keyframes spin {
    0%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1)
    }
  
    20% {
      opacity: 1
    }
  
    80% {
      opacity: 0;
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0)
    }
  }
  
</style>
