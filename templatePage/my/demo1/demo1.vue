<template>
  <view class="template-about tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    

    
    
    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/swiper/summer.jpg' mode='widthFix' class='backgroud-image'></image>
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
    
    <view class="about__wrap">
      <!-- 头像用户信息 -->
      <view class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
        <view class="user-info__avatar tn-bg-grey--light tn-flex tn-flex-col-center tn-flex-row-center">
          <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg');width: 170rpx;height: 170rpx;background-size: cover;">
          </view>
          <!-- <view class="tn-icon-logo-tuniao" style="font-size: 140rpx;color: #01BEFF;"></view> -->
        </view>
        <view class="user-info__nick-name">图鸟科技</view>
      </view>
      

      
      <!-- 消息&数据 -->
      <view class="tn-shadow-warp" style="margin-top: 100rpx;background-color: rgba(255,255,255,1);">
        <view class="tn-flex">
          <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="">
                <view class="tn-text-xxl tn-color-orange">1.29W</view>
              </view>
              <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
                <text class="tn-icon-fire"></text>
                <text class="tn-padding-left-xs">人气</text>
              </view>
            </view>
          </view>
          <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="">
                <view class="tn-text-xxl tn-color-blue">216</view>
              </view>
              <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
                <text class="tn-icon-share-circle"></text>
                <text class="tn-padding-left-xs">分享</text>
              </view>
            </view>
          </view>
          <view class="tn-flex-1 tn-padding-sm tn-margin-xs">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="">
                <view class="tn-text-xxl tn-color-red">962</view>
              </view>
              <view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
                <text class="tn-icon-like"></text>
                <text class="tn-padding-left-xs">爱心</text>
              </view>
            </view>
          </view>
        </view>
      </view> 
      
      
      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-margin-left tn-margin-right">
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-5 tn-color-white" > 
              <view class="tn-icon-logo-tuniao"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">关于图鸟</view>
            <view class="tn-margin-left-sm tn-color-cyan tn-icon-link"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-1 tn-color-white"> 
              <view class="tn-icon-like-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">赞赏北北</view>
            <!-- <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view> -->
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-2 tn-color-white"> 
              <view class="tn-icon-set-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">更新日志</view>
            <!-- <view class="tn-margin-left-sm tn-color-gray">懒</view> -->
          </view>
        </tn-list-cell>
      </view>
      
      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-margin-left tn-margin-right">
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-16 tn-color-white" > 
              <view class="tn-icon-wechat-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">合作勾搭</view>
            <view class="tn-margin-left-sm tn-color-cyan tn-icon-link"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-8 tn-color-white"> 
              <view class="tn-icon-message-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">问题反馈</view>
            <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-6 tn-color-white"> 
              <view class="tn-icon-phone-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">技术支持</view>
            <view class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">136****0470</view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-12 tn-color-white"> 
              <view class="tn-icon-safe-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">会员协议</view>
            <view class="tn-margin-left-sm tn-color-red tn-icon-fire-fill"></view>
          </view>
        </tn-list-cell>
      </view>
      
    </view>
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/home_tn.png'></image>
        </view>
        <view class="tn-color-gray">首页</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-discover">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'></image>
        </view>
        <view class="tn-color-gray">圈子</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-image-text">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/case_tn.png'></image>
        </view>
        <view class="tn-color-gray">案例</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tnnew.png'></image>
        </view>
        <view class="tn-color-black">我的</view>
      </view>
    </view>
    <view class="tn-padding-xl"></view>
     
    
    <!-- 回到首页悬浮按钮-->
    <nav-index-button></nav-index-button>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'about-demo-1',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-about{
  }
  /* 顶部背景图 start */
  .top-backgroup {
    height: 450rpx;
    z-index: -1;
  
    .backgroud-image {
      width: 100%;
      height: 450rpx;
      // z-index: -1;
    }
  }
  /* 顶部背景图 end */
  
  /* 波浪*/
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
      z-index: 9999;
      height: 200rpx;
      left: 0;
      right: 0;
      top: 290rpx;
      bottom: auto;
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
  /* 波浪*/
  
  /* 页面 start*/
  .about-shadow{
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .about {
    
    &__wrap {
      position: relative;
      z-index: 1;
      // margin: 20rpx 30rpx;
      margin-top: -330rpx;
    }
  }
  /* 页面 end*/
  
  /* 用户信息 start */
  .user-info {
    &__container {
      
    }
    
    &__avatar {
      width: 170rpx;
      height: 170rpx;
      border: 8rpx solid rgba(255,255,255,0.05);
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    }
    
    &__nick-name {
      margin-top: 26rpx;
      font-size: 36rpx;
      font-weight: 600;
      text-align: center;
    }
  }
  /* 用户信息 end */
  /* 图标容器1 start */
  .icon1 {
    &__item {
      // width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;
      
      &--icon {
        width: 40rpx;
        height: 40rpx;
        font-size: 28rpx;
        border-radius: 50%;
        position: relative;
        z-index: 1;
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
        }
      }
    }
  }
    /* 图标容器1 end */
    
    /* 底部tabbar start*/
    .footerfixed{
     position: fixed;
     width: 100%;
     bottom: 0;
     z-index: 999;
     background-color: #FFFFFF;
     box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
    }
    
    .tabbar {
      display: flex;
      align-items: center;
      min-height: 110rpx;
      justify-content: space-between;
    	padding: 0;
    	height: calc(110rpx + env(safe-area-inset-bottom) / 2);
    	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
    }
    
    .tabbar .action {
    	font-size: 22rpx;
    	position: relative;
    	flex: 1;
    	text-align: center;
    	padding: 0;
    	display: block;
    	height: auto;
    	line-height: 1;
    	margin: 0;
    	overflow: initial;
    }
    
    .tabbar .action .bar-icon {
    	width: 100rpx;
    	position: relative;
    	display: block;
    	height: auto;
    	margin: 0 auto 10rpx;
    	text-align: center;
    	font-size: 42rpx;
    }
    
    .tabbar .action .bar-icon image {
    	width: 50rpx;
    	height: 50rpx;
    	display: inline-block;
    }
</style>
