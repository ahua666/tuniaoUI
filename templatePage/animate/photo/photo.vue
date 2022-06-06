<template>
  <view class="template-photo">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <!-- 页面内容 -->
    <view class="slideshow">
      <view class="slideshow-image" style="background-image: url('https://tnuiimage.tnkjapp.com/shop/cup1.jpg')"></view>
      <view class="slideshow-image" style="background-image: url('https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg')"></view>
      <view class="slideshow-image" style="background-image: url('https://tnuiimage.tnkjapp.com/shop/card.jpg')"></view>
      <view class="slideshow-image" style="background-image: url('https://tnuiimage.tnkjapp.com/shop/watch1.jpg')"></view>
    </view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplatePhoto',
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
  .template-photo {
    margin: 0;
    width: 100%;
    height: 100vh;
    color: #fff;
    overflow: hidden;
  }
  

  
  /* 相册 start*/
  .slideshow {
    top: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .slideshow-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50%;
    background-size: cover;
    -webkit-animation-name: kenburns;
            animation-name: kenburns;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-duration: 16s;
            animation-duration: 16s;
    opacity: 1;
    transform: scale(1.2);
  }
  .slideshow-image:nth-child(1) {
    -webkit-animation-name: kenburns-1;
            animation-name: kenburns-1;
    z-index: 3;
  }
  .slideshow-image:nth-child(2) {
    -webkit-animation-name: kenburns-2;
            animation-name: kenburns-2;
    z-index: 2;
  }
  .slideshow-image:nth-child(3) {
    -webkit-animation-name: kenburns-3;
            animation-name: kenburns-3;
    z-index: 1;
  }
  .slideshow-image:nth-child(4) {
    -webkit-animation-name: kenburns-4;
            animation-name: kenburns-4;
    z-index: 0;
  }
  
  @-webkit-keyframes kenburns-1 {
    0% {
      opacity: 1;
      transform: scale(1.2);
    }
    1.5625% {
      opacity: 1;
    }
    23.4375% {
      opacity: 1;
    }
    26.5625% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
    98.4375% {
      opacity: 0;
      transform: scale(1.2117647059);
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes kenburns-1 {
    0% {
      opacity: 1;
      transform: scale(1.2);
    }
    1.5625% {
      opacity: 1;
    }
    23.4375% {
      opacity: 1;
    }
    26.5625% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
    98.4375% {
      opacity: 0;
      transform: scale(1.2117647059);
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes kenburns-2 {
    23.4375% {
      opacity: 1;
      transform: scale(1.2);
    }
    26.5625% {
      opacity: 1;
    }
    48.4375% {
      opacity: 1;
    }
    51.5625% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
  @keyframes kenburns-2 {
    23.4375% {
      opacity: 1;
      transform: scale(1.2);
    }
    26.5625% {
      opacity: 1;
    }
    48.4375% {
      opacity: 1;
    }
    51.5625% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
  @-webkit-keyframes kenburns-3 {
    48.4375% {
      opacity: 1;
      transform: scale(1.2);
    }
    51.5625% {
      opacity: 1;
    }
    73.4375% {
      opacity: 1;
    }
    76.5625% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
  @keyframes kenburns-3 {
    48.4375% {
      opacity: 1;
      transform: scale(1.2);
    }
    51.5625% {
      opacity: 1;
    }
    73.4375% {
      opacity: 1;
    }
    76.5625% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
  @-webkit-keyframes kenburns-4 {
    73.4375% {
      opacity: 1;
      transform: scale(1.2);
    }
    76.5625% {
      opacity: 1;
    }
    98.4375% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  @keyframes kenburns-4 {
    73.4375% {
      opacity: 1;
      transform: scale(1.2);
    }
    76.5625% {
      opacity: 1;
    }
    98.4375% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
    /* 相册 end*/
</style>
