<template>
  <view class="template-browser">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    

    <swiper class="card-swiper" :indicator-dots="true" :circular="true" :autoplay="false" interval="10000"
      duration="500" @change="cardSwiper" indicator-color="#666" indicator-active-color="#000"  
      
      style="margin-top: 300rpx;">
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur swiper-item1--active':'swiper-item1'">
        <view class="swiper-item image-banner" style="border-radius: 20rpx 20rpx 22rpx 22rpx;">
          <image class="" :src="item.url" v-if="item.type=='image'" mode="aspectFill"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="tn-text-center tn-color-black">
      测试，未写完
    </view>
    
    
    
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <view class="tn-icon-home-smile tn-color-black">
          </view>
        </view>
        <view class="tn-color-black">首页</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <view class="tn-icon-discover tn-color-gray--dark">
          </view>
        </view>
        <view class="tn-color-gray--dark">圈子</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <view class="tn-icon-image-text tn-color-gray--dark">
          </view>
        </view>
        <view class="tn-color-gray--dark">案例</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <view class="tn-icon-my tn-color-gray--dark">
            <tn-badge :absolute="true">99+</tn-badge>
          </view>
        </view>
        <view class="tn-color-gray--dark">我的</view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateBrowser',
    mixins: [template_page_mixin],
    data(){
      return {
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          name: '总有你想不到的创意',
          text: '海量分享',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg4.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
        }, {
          id: 1,
          type: 'image',
          name: '寻找一起成长的小伙伴',
          text: '愉快玩耍',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg5.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d4.png'
        }, {
          id: 2,
          type: 'image',
          name: '更多彩蛋等你探索',
          text: '酷炫多彩',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg4.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d5.png'
        }],
      }
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-browser{
    margin-bottom: calc(110rpx + env(safe-area-inset-bottom) / 2);;
  }
    /* 轮播视觉差 start */
    .card-swiper {
      height: 500rpx !important;
    }
      
    .card-swiper swiper-item {
      width: 250rpx !important;
      left: 250rpx;
      box-sizing: border-box;
      padding: 100rpx 0rpx 100rpx 0rpx;
      overflow: initial;
    }
      
    .card-swiper swiper-item .swiper-item {
      width: 100%;
      display: block;
      height: 200rpx;
      border-radius: 0rpx;
      transform: translate(0rpx, 0rpx) scale(1.5);
      transition: all 0.2s ease-in 0s;
      overflow: hidden;
      border: 5rpx solid red;
    }
      
    .card-swiper swiper-item.cur .swiper-item {
      transform: translate(0rpx, 0rpx) scale(2);
      transition: all 0.2s ease-in 0s;
      border: 5rpx solid pink;
    }
    
    .image-banner{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-banner image{
      width: 100%;
    }
   
    
    /* 轮播指示点 start*/
    .indication{
      z-index: 9999;
      width: 100%;
      height: 36rpx;
      position: absolute;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
    }
    
    .spot{
      background-color: #FFF;
      opacity: 0.4;
      width: 10rpx;
      height: 10rpx;
      border-radius: 20rpx;
      margin: 0 8rpx !important;
      left: -270rpx;
      top: -180rpx;
      position: relative;
    }
    
    .spot.active{
      opacity: 1;
      width: 30rpx;
      background-color: #FFF;
    }
    
    .swiper-item1 {
      z-index: -1;
      
      &--active {
        z-index: 10;
      }
    }
    
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
