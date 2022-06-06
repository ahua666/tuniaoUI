<template>
  <view class="template-fullpage">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <swiper class="card-swiper" :circular="true" vertical="true"
      :autoplay="true" duration="500" interval="5000" @change="cardSwiper" > 
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <view class="swiper-item image-banner">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'" style="height: 100vh;width: 100vw;"></image>
        </view>
        <view class="swiper-item-png image-banner">
          <image :src="item.pngurl" mode="heightFix" v-if="item.type=='image'" style="height: 100vh;width: 100vw;"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
        <block v-for="(item,index) in swiperList" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateFullpage',
    mixins: [template_page_mixin],
    data(){
      return {
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg1.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full1.png'
        }, {
          id: 1,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg2.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full2.png'
        }, {
          id: 2,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg1.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full3.png'
        }, {
          id: 3,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg2.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full4.png'
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
  /* 全屏轮播  start*/
    .card-swiper {
      height: 100vh !important;
    }
  
    .card-swiper swiper-item {
      width: 750rpx !important;
      left: 0rpx;
      box-sizing: border-box;
      overflow: initial;
    }
  
    .card-swiper swiper-item .swiper-item {
      width: 100%;
      display: block;
      height: 100vh;
      border-radius: 0rpx;
      transform: scale(1);
      transition: all 0.2s ease-in 0s;
      overflow: hidden;
    }
  
    .card-swiper swiper-item.cur .swiper-item {
      transform: none;
      transition: all 0.2s ease-in 0s;
    }
  
    .card-swiper swiper-item .swiper-item-png {
      margin-top: -50vh;
      width: 100%;
      display: block;
      border-radius: 0rpx;
      transform: translate(1040rpx, 20rpx) scale(0.5, 0.5);
      transition: all 0.6s ease 0s;
      // overflow: hidden;
    }
  
    .card-swiper swiper-item.cur .swiper-item-png {
      margin-top: -100vh;
      width: 900rpx;
      transform: translate(-80rpx, 0rpx) scale(1, 1);
      transition: all 0.6s ease 0s;
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
      position: fixed;
      // display:flex;
      display: block;
      flex-direction:row;
      align-items:center;
      justify-content:center;
    }
    
    .spot{
      background-color: #000;
      opacity: 0.3;
      width: 10rpx;
      height: 10rpx;
      border-radius: 20rpx;
      margin: 20rpx 0 !important;
      left: 95vw;
      top: -60vh;
      position: relative;
    }
    
    .spot.active{
      opacity: 0.6;
      height: 30rpx;
      background-color: #000;
    }
</style>
