<template>
  <view class="template-wallpaper tn-safe-area-inset-bottom" style="background-color: #343434;">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#343434">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 返回按钮 -->
        <view class="custom-nav__back">
          <view class="logo-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/logo2.png')">
            <view class="logo-image">
            </view>
          </view> 
          <!-- <view class="tn-icon-left"></view> -->
        </view>
        <!-- 字 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-center tn-color-white">
            <text class="tn-text-bold tn-text-xxl">北北壁纸库</text>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    
    <!-- 页面内容-->
    <view class="">
      <view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
        <tn-swiper :list="banner" :height="350" :effect3d="false" mode="rect"></tn-swiper>
      </view>
      
      <!-- 方式12 start-->
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-orange--light tn-color-orange">
              <view class="tn-icon-moon-fill tn-three"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">高清壁纸</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purple--light tn-color-purple">
              <view class="tn-icon-light-fill tn-three"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">热门排行</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-indigo--light tn-color-indigo">
              <view class="tn-icon-star-fill tn-three"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">文艺可爱</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purplered--light tn-color-purplered">
              <view class="tn-icon-like-fill tn-three"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">精选壁纸</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式12 end-->
      
      <!-- banner start-->
      <view class="tn-flex tn-flex-wrap tn-margin-xs">
        <view class=" " style="width: 100%;">
          <view class="image-pic tn-margin-sm" style="background-image:url('https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg')">
             <view class="image-wallpaper">
             </view>
           </view>  
        </view>  
      </view>
      <!-- banner end-->
      
      <!-- 比例 start-->
      <view class="tn-flex tn-flex-wrap tn-margin-xs">
        <block v-for="(item, index) in pic" :key="index">
          <view class=" " style="width: 50%;">
            <view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.image + ')'">
              <view class="image-wallpaper">
              </view>
            </view>  
          </view>
        </block>
      </view>
      <!-- 比例 end-->
      
      <!-- 图文 -->
      <view class="tn-flex tn-flex-direction-column">
        
        <block v-for="(item,index) in content" :key="index">
          <view class="tn-blogger-content__wrap">
            <view class="">
              <image 
                class="tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom tn-margin-top"
                :src="item.mainImage"
                mode="aspectFill"
              ></image>
            </view>
            <view class="tn-blogger-content__label tn-text-justify">
              <text class="tn-blogger-content__label__desc tn-text-lg tn-text-bold tn-color-white">{{ item.desc }}</text>  
            </view>
            
            <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
              <view class="justify-content-item tn-flex tn-flex-col-center">
                <view style="margin-right: 10rpx;margin-left: 0rpx;">
                  <view class="tn-color-gray">
                    <text class="tn-blogger-content__count-icon tn-icon-flower"></text> 
                    <text class="tn-padding-right">{{ item.collectionCount }}</text>
                    <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                    <text class="tn-padding-right">{{ item.commentCount }}</text>
                    <text class="tn-blogger-content__count-icon tn-icon-like"></text>
                    <text class="">{{ item.likeCount }}</text>
                  </view>
                </view>
              </view>
              <view class="justify-content-item tn-text-center">
                <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                  <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                </view>
                
              </view>
            </view>
          </view>
          
        </block>
      </view>
      
    </view>
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/wallpaper-home.png'></image>
        </view>
        <view class="tn-color-white">首页</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-watercup tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/wallpaper-more.png'></image>
        </view>
        <view class="tn-color-gray">投稿</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-ticket tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/wallpaper-my.png'></image>
        </view>
        <view class="tn-color-gray">我的</view>
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
    name: 'TemplateWallpaper',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        
          banner: [{
            image: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/banner1.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/banner1.jpg'
          }],
          pic: [{
            image: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg'
          },{
            image: 'https://tnuiimage.tnkjapp.com/shop/pillow.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/pillow2.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/cup1.jpg'
          }, {
            image: 'https://tnuiimage.tnkjapp.com/shop/bag2.jpg'
          }],
          content: [
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 999,
              commentCount: 999,
              likeCount: 999
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '我们都是好孩子',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '可我会像',
              date: '2021年12月20日',
              label: ['开源','创意'],
              desc: '免费开源可商用组件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            }
          ]
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-wallpaper{
  }
/* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      margin-left: 30rpx;
      flex-basis: 5%;
    }
    
    &__search {
      flex-basis: 70%;
      width: 100%;
      height: 100%;
      
      &__box {
        width: 100%;
        height: 70%;
        padding: 10rpx 0;
        margin: 0 30rpx;
      }
      
      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      
      &__text {
        color: #AAAAAA;
      }
    }
  }
  /* 自定义导航栏内容 end */
  
  /*logo start */
  .logo-image{
    width: 65rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  
  /* 图标容器12 start */
  .tn-three{
      position: absolute;
      top: 50%;
      right: 50%;
      bottom: 50%;
      left: 50%;
      transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
      text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
  }
  .icon12 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;
      
      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
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
  
  /* 文章内容 start*/
  .tn-blogger-content {
    &__wrap {
      margin: 30rpx;
    }
    
    &__info {
      &__btn {
        margin-right: -12rpx;
        opacity: 0.5;
      }
    }
    
    &__label {
      &__item {
        line-height: 45rpx;
        padding: 0 20rpx;
        margin: 5rpx 18rpx 0 0;
        
        &--prefix {
          color: #00FFC8;
          padding-right: 10rpx;
        }
      }
      
      &__desc {
        line-height: 55rpx;
      }
    }
    
    &__main-image {
      border-radius: 16rpx;
      
      &--1 {
        max-width: 690rpx;
        min-width: 690rpx;
        max-height: 400rpx;
        min-height: 400rpx;
      }
      
      &--2 {
        max-width: 260rpx;
        max-height: 260rpx;
      }
      
      &--3 {
        height: 212rpx;
        width: 100%;
      }
    }
    
    &__count-icon {
      font-size: 40rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-wallpaper{
    padding: 160rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }
  /* 文章内容 end*/
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 999;
   background-color: #080808;
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
