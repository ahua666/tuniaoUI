<template>
  <view class="template-screen tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#3D7EFF80">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 按钮 -->
        <view class="custom-nav__back">
          <view class="tn-icon-caring tn-color-white" style="font-size: 60rpx;"></view>
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-white">
            <view class="custom-nav__search__icon tn-icon-search"></view>
            <view class="custom-nav__search__text tn-padding-left-xs">试试搜索“电影投屏”</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    <!-- 页面内容 -->
    <view class="bg-contaniner tn-bg-blue">
      
    </view>
    <view class="tn-margin-top-lg" style="padding-bottom: 120rpx;">
      <view class="tn-padding" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
        <tn-swiper :list="banner" :height="350" :effect3d="false" mode="dot"></tn-swiper>
      </view>
      <!-- 方式15 start-->
      <view class="tn-flex tn-margin-sm tn-flex-row-center tn-radius"> 
        <view class="tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white" style="background-color: rgba(255,255,255,0.1);">
              <view class="tn-icon-scan"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">扫码投屏</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white" style="background-color: rgba(255,255,255,0.1);">
              <view class="tn-icon-share-circle"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">邀请投屏</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white" style="background-color: rgba(255,255,255,0.1);">
              <view class="tn-icon-star"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">收藏投屏</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-margin-xs tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-white" style="background-color: rgba(255,255,255,0.1);">
              <view class="tn-icon-set"></view>
            </view>  
            <view class="tn-color-white tn-text-center">
              <text class="tn-text-ellipsis">投屏设置</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式15 end-->
    </view>
    
    <view class="tn-bg-white" style="margin-top: -100rpx;border-radius: 50rpx 50rpx 0 0;">
      <!-- 方式7 start-->
      <view class="tn-flex tn-margin-xs tn-padding-top-xl">
        <view class="tn-flex-1 screen-shadow" style="margin: 30rpx 20rpx;padding: 60rpx 0;">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
              <image class="" src='https://tnuiimage.tnkjapp.com/icon/5.jpg' mode='aspectFit'></image>
            </view>
            <view class="tn-text-center">
              <view class="tn-text-ellipsis tn-color-black tn-text-lg ">资料投屏</view>
              <view class="tn-text-ellipsis tn-color-gray--dark">选择资料投屏</view>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 screen-shadow" style="margin: 30rpx 20rpx;padding: 60rpx 0;">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
              <image class="" src='https://tnuiimage.tnkjapp.com/icon/6.jpg' mode='aspectFit'></image>
            </view>
            <view class="tn-text-center">
              <view class="tn-text-ellipsis tn-color-black tn-text-lg ">文件投屏</view>
              <view class="tn-text-ellipsis tn-color-gray--dark">选择文件投屏</view>
            </view>
          </view>
        </view>
      </view>
      
      <view class="tn-flex tn-margin-xs" style="margin-top: -10rpx;">
        <view class="tn-flex-1  screen-shadow" style="margin: 10rpx 20rpx;padding: 60rpx 0;">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
              <image class="" src='https://tnuiimage.tnkjapp.com/icon/7.jpg' mode='aspectFit'></image>
            </view>
            <view class="tn-text-center">
              <view class="tn-text-ellipsis tn-color-black tn-text-lg ">电脑投屏</view>
              <view class="tn-text-ellipsis tn-color-gray--dark">匹配电脑投屏</view>
            </view>
          </view>
        </view>
        <view class="tn-flex-1  screen-shadow" style="margin: 10rpx 20rpx;padding: 60rpx 0;">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
              <image class="" src='https://tnuiimage.tnkjapp.com/icon/8.jpg' mode='aspectFit'></image>
            </view>
            <view class="tn-text-center">
              <view class="tn-text-ellipsis tn-color-black tn-text-lg ">文档投屏</view>
              <view class="tn-text-ellipsis tn-color-gray--dark">选择文档投屏</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式7 end-->
      
      <!-- 图文 -->
      <view class="tn-bg-white tn-flex tn-flex-direction-column tn-padding-bottom" style="padding-bottom: 110rpx;">
        
        <block v-for="(item,index) in content" :key="index">
          <view class="tn-blogger-content__wrap">
            <view class="">
              <!-- 方式一 -->
              <!-- <view class="tn-shadow-blur image-pic" :style="'background-image:url(' + item.mainImage + ')'">
                <view class="image-screen">
                </view>
              </view> -->
              <!-- 方式二 -->
              <image 
                class="tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom"
                :src="item.mainImage"
                mode="aspectFill"
              ></image>
            </view>
            <view class="tn-blogger-content__label tn-text-justify">
              <text class="tn-blogger-content__label__desc tn-text-lg tn-text-bold tn-padding">{{ item.desc }}</text>  
            </view>
            
            <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
              <view class="justify-content-item tn-flex tn-flex-col-center">
                <view style="margin-right: 10rpx;margin-left: 0rpx;">
                  <view class="tn-color-gray tn-padding">
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
          <!-- <view class="tn-icon-level">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/yellow/home_cur.png'></image>
        </view>
        <view class="tn-color-black">首页</view>
      </view>
      <view class="action">
        <view class="bar-circle tn-shadow-blur">
          <view class="tn-icon-discover-planet tn-color-white">
          </view>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'></image> -->
        </view>
        <!-- <view class="tn-color-gray">发布</view> -->
      </view>
      <view class="action">
        <view class="bar-icon">
         <!-- <view class="tn-icon-signpost tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/yellow/me.png'></image>
        </view>
        <view class="tn-color-gray">我的</view>
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
    name: 'TemplateScreen',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        banner: [{
          image: 'https://tnuiimage.tnkjapp.com/shop/banner1.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/shop/banner1.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg'
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
      flex-basis: 60%;
      width: 100%;
      height: 100%;
      
      &__box {
        width: 100%;
        height: 70%;
        padding: 10rpx 0;
        margin: 0 30rpx;
        border-radius: 60rpx 60rpx 60rpx 0;
        font-size: 24rpx;
        background-color: rgba(255,255,255,0.1);
      }
      
      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      
      &__text {
      }
    }
  }
  /* 自定义导航栏内容 end */
  
  .screen-shadow{
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
      border-radius: 20rpx;
  }
  /* 图标容器15 start */
  .icon15 {
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
  
            
        }
      }
    }
  }
  
  /* 图标容器7 start */
      .icon7 {
        &__item {
          width: 30%;
          background-color: #FFFFFF;
          border-radius: 10rpx;
          padding: 10rpx;
          margin: 20rpx 10rpx;
          transform: scale(1);
          transition: transform 0.3s linear;
          transform-origin: center center;
          
          &--icon {
            width: 100rpx;
            height: 100rpx;
            font-size: 60rpx;
            border-radius: 0;
            margin-bottom: 18rpx;
            position: relative;
            z-index: 1;
          }
        }
      }
  
  /* 文章内容 start*/
  .tn-blogger-content {
    &__wrap {
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.09);
      border-radius: 20rpx;
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
      border-radius: 16rpx 16rpx 0 0;
      
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
  
  .image-screen{
    padding: 180rpx 0rpx;
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
   
  /* 移动背景部分 start*/
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
    overflow: hidden;
    background-color: var(--bg-color);
    z-index: -1;
  }
  
  .bg-contaniner::before {
    --size: 150vmax;
    content: "";
    inline-size: var(--size);
    block-size: var(--size);
    background-image: url("https://tnuiimage.tnkjapp.com/animate/animate3.png");
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
  /* 移动背景部分 end*/
  
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
    // line-height: 50rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
  
  .tabbar .action .bar-circle {
    position: relative;
    display: block;
    margin: -30rpx auto 20rpx;
    text-align: center;
    font-size: 52rpx;
    line-height: 90rpx;
  	background-color: #FFCA28;
    width: 90rpx !important;
    height: 90rpx !important;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(255, 202, 40, 0.5);
  }
  
  .tabbar .action .bar-circle image {
    width: 60rpx;
  	height: 60rpx;
  	display: inline-block;
    margin: 15rpx auto 15rpx;
  }
</style>
