<template>
  <view class="template-wave">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="">
      
    </view>
    
    <view class="tnwave waveAnimation">
      <view class="waveWrapperInner bgTop">
        <view class="wave waveTop" style="background-image: url('https://tnuiimage.tnkjapp.com/wave/wave-2.png')"></view>
      </view>
      <view class="waveWrapperInner bgMiddle">
        <view class="wave waveMiddle" style="background-image: url('https://tnuiimage.tnkjapp.com/wave/wave-2.png')"></view>
      </view>
      <view class="waveWrapperInner bgBottom">
        <view class="wave waveBottom" style="background-image: url('https://tnuiimage.tnkjapp.com/wave/wave-1.png')"></view>
      </view>
    </view>

    <!-- 回到首页悬浮按钮-->
    <nav-index-button></nav-index-button>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplateWave',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-wave{
    background-image: linear-gradient(to top, #4C3FAE 20%, #6E26BA 80%);
    width: 100vw;
    height: 100vh;
  }
  @keyframes move_wave {
      0% {
          transform: translateX(0) translateZ(0) scaleY(1)
      }
      50% {
          transform: translateX(-25%) translateZ(0) scaleY(1)
      }
      100% {
          transform: translateX(-50%) translateZ(0) scaleY(1)
      }
  }
  .tnwave {
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
  }
  .waveWrapperInner {
      position: absolute;
      width: 100%;
      overflow: hidden;
      height: 100%;
  }
  .wave {
      position: absolute;
      left: 0;
      width: 200%;
      height: 100%;
      background-repeat: repeat no-repeat;
      background-position: 0 bottom;
      transform-origin: center bottom;
  }
  
  .bgTop {
      opacity: 0.4;
  }
  .waveTop {
      background-size: 50% 45px;
  }
  .waveAnimation .waveTop {
    animation: move_wave 4s linear infinite;
  }
  
  .bgMiddle {
      opacity: 0.6;
  }
  .waveMiddle {
      background-size: 50% 40px;
  }
  .waveAnimation .waveMiddle {
      animation: move_wave 3.5s linear infinite;
  }
  
  .bgBottom {
      opacity: 0.95;
  }
  .waveBottom {
      background-size: 50% 35px;
  }
  .waveAnimation .waveBottom {
      animation: move_wave 2s linear infinite;
  }
</style>
