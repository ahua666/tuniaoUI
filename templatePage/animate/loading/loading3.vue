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
    
    <view class="loader-wrapper">
      <view class="loader">
        <view class="logo-loading tn-icon-logo-tuniao tn-text-shadow-aquablue">
        </view>
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
  
  @-webkit-keyframes img {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
  @keyframes img {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin-reverse {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }
  @keyframes spin-reverse {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  
  .loader-wrapper {
    // background-color: #00C3FF;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow: hidden;
  }
  
  .loader {
    display: flex;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #4B98FE;
    animation: spin 1.7s linear infinite;
    z-index: 11;
  }
  .loader:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #FFAC00;
      animation: spin-reverse 5.6s linear infinite;
    }
    
  .loader:after {
      content: "";
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #00D05E;
      animation: spin 2.3s linear infinite;
  }
  .logo-loading {
      font-size: 120rpx;
      color: #01BEFF;
      margin: auto;
      align-items: center;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      animation: img 1.7s linear infinite;
  }

</style>
