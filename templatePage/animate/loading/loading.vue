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
    
    <!-- 页面内容 -->
    <view class="bg-contaniner">
    </view>
    
    <view class="container-content hex-border">
      <view class="hexagons">
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
        <view class="hexagon"></view>
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
  /* 移动背景部分 */
  .bg-contaniner {
    position: fixed;
    top: -0rpx;
    left: -300rpx;
    --text-color: hsl(0 95% 60%);
    --bg-color: hsl(0 0% 100%);
    --bg-size: 200px;
    height: 100%;
    display: grid;
    place-items: center;
    place-content: center;
    /* grid-template-areas: "body"; */
    overflow: hidden;
    font-family: "Dela Gothic One", sans-serif;
    background-color: var(--bg-color);
    z-index: -1;
  }
  
  .bg-contaniner::before {
    --size: 150vmax;
  
    grid-area: body;
    content: "";
    inline-size: var(--size);
    block-size: var(--size);
    background-image: url("https://tnuiimage.tnkjapp.com/animate/animate1.jpg");
    background-size: var(--bg-size);
    background-repeat: repeat;
    transform: rotate(45deg);
    opacity: 0.25;
    animation: bg 6s linear infinite;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .bg-contaniner::before {
      animation-duration: 0s;
    }
  }
  
  @keyframes bg {
    to {
      background-position: 0 calc(var(--bg-size) * -1);
    }
  }

  
  
  /* 加载部分 */
  .components-anloading {
    margin: 0;
    width: 100%;
    height: 100vh;
    color: #fff;
    /* background: linear-gradient(45deg, #0fd850, #f9f047); */
  }
  
  .hex-border {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 170px;
    height: 170px;
    border: 2px solid rgba(235, 237, 241, 0.8);
    border-radius: 100%;
  }
  
  .hex-border::before {
    content: "";
    position: absolute;
    width: 174px;
    height: 174px;
    border: 2px solid #F4B4C4;
    border-radius: 100%;
    box-sizing: border-box;
    clip-path: inset(0px 135px 135px 0px);
    -webkit-clip-path: inset(0px 135px 135px 0px);
    top: -4px;
    left: -4px;
    animation: rotateSmall 2s linear infinite;
    z-index: 2;
  }
  
  .hex-border::after {
    content: "";
    position: absolute;
    width: 174px;
    height: 174px;
    border: 2px solid #F4B4C4;
    border-radius: 100%;
    box-sizing: border-box;
    top: -4px;
    left: -4px;
    clip-path: inset(0px 30px 30px 0px);
    -webkit-clip-path: inset(0px 30px 30px 0px);
    animation: rotateLarge 1.6s linear infinite;
  }
  
  .hexagons {
    position: relative;
    border-radius: 100%;
    padding: 5%;
    top: 30px;
    left: 35px;
  }
  
  .hexagon {
    position: absolute;
    width: 40px;
    height: 23px;
    background-color: #F4B4C4;
    transform: scale(1.02);
    transform-origin: center;
  }
  
  .hexagon::before {
    content: "";
    position: absolute;
    top: -11.5px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 11.5px solid #F4B4C4;
  }
  
  .hexagon::after {
    content: "";
    position: absolute;
    top: 23px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 11.5px solid #F4B4C4;
  }
  
  .hexagon:nth-child(1) {
    animation: animateHex 3s infinite;
  }
  
  .hexagon:nth-child(2) {
    left: 53px;
    animation: animateHex 3s 0.2s infinite;
  }
  
  .hexagon:nth-child(3) {
    left: -13px;
    top: 46px;
    animation: animateHex 3s 1s infinite;
  }
  
  .hexagon:nth-child(4) {
    left: 31px;
    top: 46px;
    animation: animateHex 3s 1.2s infinite;
  }
  
  .hexagon:nth-child(5) {
    left: 75px;
    top: 46px;
    animation: animateHex 3s 0.4s infinite;
  }
  
  .hexagon:nth-child(6) {
    top: 84px;
    animation: animateHex 3s 0.8s infinite;
  }
  
  .hexagon:nth-child(7) {
    left: 53px;
    top: 84px;
    animation: animateHex 3s 0.6s infinite;
  }
  
  @keyframes rotateSmall {
    100% {
      transform: rotate(1turn);
    }
  }
  
  @keyframes rotateLarge {
    0% {
      clip-path: inset(0px 30px 30px 0px);
      -webkit-clip-path: inset(0px 30px 30px 0px);
    }
  
    50% {
      clip-path: inset(0px 150px 150px 0px);
      -webkit-clip-path: inset(0px 150px 150px 0px);
    }
  
    100% {
      transform: rotate(1turn);
      clip-path: inset(0px 30px 30px 0px);
      -webkit-clip-path: inset(0px 30px 30px 0px);
    }
  }
  
  @keyframes animateHex {
    0% {
      transform: scale(1.02);
    }
  
    20%,
    50% {
      transform: scale(0.6);
      opacity: 0;
    }
  
    65% {
      transform: scale(1.02);
      opacity: 1;
    }
  }
</style>
