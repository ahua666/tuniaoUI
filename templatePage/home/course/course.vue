<template>
  <view class="template-course tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back">
          <view class="logo-pic tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/logo2.png')">
            <view class="logo-image">
            </view>
          </view> 
          <!-- <view class="tn-icon-left"></view> -->
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark tn-bg-gray--light">
            <view class="custom-nav__search__icon tn-icon-search"></view>
            <view class="custom-nav__search__text tn-padding-left-xs">搜搜学习资料</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    <!-- 页面内容 -->
    <view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <tn-swiper :list="banner" :height="350" :effect3d="false" mode="dot"></tn-swiper>
    </view>
    
    <view class="tn-padding-top-xs">
      <!-- 方式15 start-->
      <view class="tn-flex tn-margin tn-flex-row-center tn-bg-white course-shadow course-radius">
        <view class="tn-padding-sm tn-margin-xs">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white">
              <view class="tn-icon-calendar"></view>
            </view>  
            <view class="tn-text-center">
              <text class="tn-text-ellipsis">课程安排</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-margin-xs">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-bluepurple tn-color-white">
              <view class="tn-icon-trophy"></view>
            </view>  
            <view class="tn-text-center">
              <text class="tn-text-ellipsis">获奖公告</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-margin-xs">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-indigo tn-color-white">
              <view class="tn-icon-company"></view>
            </view>  
            <view class="tn-text-center">
              <text class="tn-text-ellipsis">校园活动</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-margin-xs">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purplered tn-color-white">
              <view class="tn-icon-comment"></view>
            </view>  
            <view class="tn-text-center">
              <text class="tn-text-ellipsis">家长反馈</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式15 end-->

      <view class="tn-flex tn-flex-row-between tn-margin-sm tn-padding-top">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          <text class="tn-icon-title "></text>
          <text class="">教育专栏</text>
        </view>
        <view class="justify-content-item tn-text-lg">
          <text class="tn-padding-xs">更多</text>
          <text class="tn-icon-right"></text>
        </view>
      </view>     
      
      <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin-left tn-margin-right">
        <block v-for="(item, index) in tuniaoData" :key="index">
          <view class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between tn-color-white tn-bg-blue--light tn-shadow-blur">
            <view class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
              <view class="tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center tn-color-white" :class="[`tn-bg-${item.color}--disabled`]">
                <view :class="[`tn-icon-${item.icon}`]"></view>
              </view>
              <view class="tn-info__item__left__content">
                <view class="tn-info__item__left__content--title tn-text-xl tn-color-aquablue--dark">{{ item.title }}</view>
                <!-- <view class="tn-info__item__left__content--data tn-padding-top-xs tn-color-black">
                {{ item.value }}
                  <text class="tn-icon-right tn-padding-left-xs"></text>
                </view> -->
              </view>
            </view>
            <!-- <view class="tn-info__item__right">
              <view class="tn-info__item__right--icon">
                <view :class="[`tn-icon-${item.icon}`]"></view>
              </view>
            </view> -->
          </view>
        </block>
      </view>
      
      
      <view class="tn-flex tn-flex-row-between tn-margin-sm">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          <text class="tn-icon-title "></text>
          <text class="">学习交流</text>
        </view>
        <view class="justify-content-item tn-text-lg">
          <text class="tn-padding-xs">更多</text>
          <text class="tn-icon-right"></text>
        </view>
      </view>       
       
      <!-- 比例 start-->
      <view class="tn-flex tn-flex-wrap tn-margin-sm">
        <block v-for="(item, index) in content" :key="index">
          <view class="" style="width: 50%;">
            <view class="tn-blogger-content__wrap">
              <view class="image-pic" :style="'background-image:url(' + item.mainImage + ')'">
                <view class="image-music">
                </view>
              </view> 
              
              <view class="tn-blogger-content__label tn-text-justify tn-padding-sm">
                <text class="tn-blogger-content__label__desc">{{ item.desc }}</text>  
              </view>
              
              <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm">
                <view class="justify-content-item tn-flex tn-flex-col-center">
                  <view style="margin-right: 10rpx;margin-left: 20rpx;">
                    <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
                  </view>
                  <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}人</text>
                </view>
              </view>
              
              
            </view>
          </view>
        </block>
      </view>
      <!-- 比例 end-->
      
    </view>
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/course-course.png'></image>
        </view>
        <view class="tn-color-black">课程</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-watercup tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/course-fire-no.png'></image>
        </view>
        <view class="tn-color-gray">精选</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-ticket tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/course-play-no.png'></image>
        </view>
        <view class="tn-color-gray">播放</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my tn-color-gray">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/course-my-no.png'></image>
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
    name: 'TemplateCourse',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        banner: [{
          image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner1.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner2.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner3.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/swiper/tnbanner4.jpg'
        }],
        tuniaoData: [
          {
            title: '热门专栏',
            icon: 'fire-fill',
            color: 'red',
            value: '我就看看'
          },
          {
            title: '优秀讲师',
            icon: 'praise-fill',
            color: 'blue',
            value: '我就看看'
          },
          {
            title: '必看攻略',
            icon: 'cardbag-fill',
            color: 'orange',
            value: '我就看看'
          },
          {
            title: '课程排行',
            icon: 'honor-fill',
            color: 'purple',
            value: '我就看看'
          }
        ],
        content: [
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['烤肉','烤肉'],
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
            label: ['炸串','火锅'],
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
            label: ['烤肉','烤肉'],
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
            label: ['烤肉','烤肉'],
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
            label: ['烤肉','烤肉'],
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
            label: ['烤肉','烤肉'],
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
            label: ['烤肉','烤肉'],
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
            label: ['烤肉','烤肉'],
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
        border-radius: 60rpx 60rpx 0 60rpx;
        font-size: 24rpx;
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
  /* 自定义导航栏内容 end */
  
  /* 内容布局 start*/
  .course-shadow{
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .course-radius{
    border-radius: 15rpx;
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
  
  /* 业务展示 start */
  .tn-info {
    
    &__container {
      margin-top: 10rpx;
      margin-bottom: 50rpx;
    }
    
    &__item {
      width: 48%;
      margin: 15rpx 0rpx;
      padding: 40rpx 30rpx;
      border-radius: 15rpx;
      
  
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/3.png);
        }
      
      &__left {
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          border-radius: 30%;
          font-size: 50rpx;
          margin-right: 20rpx;
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
          }
        }
        
        &__content {
          font-size: 30rpx;
          
          &--data {
            margin-top: 5rpx;
            font-weight: bold;
          }
        }
      }
      
      &__right {
        &--icon {
          position: absolute;
          right: 0upx;
          top: 50upx;
          font-size: 100upx;
          width: 108upx;
          height: 108upx;
          text-align: center;
          line-height: 60upx;
          opacity: 0.15;  
        }
      }
    }
  }
  /* 业务展示 end */
  
  /* 文章内容 start*/
  .tn-blogger-content {
    &__wrap {
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
      border-radius: 20rpx;
      margin: 15rpx;
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
          color: #82B2FF;
          padding-right: 10rpx;
        }
      }
      
      &__desc {
        line-height: 35rpx;
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
      font-size: 30rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-music{
    padding: 100rpx 0rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  /* 文章内容 end*/
  
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
