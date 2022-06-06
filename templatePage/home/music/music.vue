<template>
  <view class="template-music tn-safe-area-inset-bottom">
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
        <!-- 返回按钮 -->
        <view class="custom-nav__back">
          <view class="tn-icon-sing" style="font-size: 60rpx;"></view>
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-center tn-color-gray--dark tn-bg-gray--light">
            <view class="custom-nav__search__icon tn-icon-search"></view>
            <view class="custom-nav__search__text tn-padding-right">Craigie Hill 北北推荐吖</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    <view class="tn-margin-left tn-margin-right tn-margin-top-lg" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <tn-swiper :list="banner" :height="300" :effect3d="false" mode="round"></tn-swiper>
    </view>
    
    <!-- 方式12 start-->
    <view class="tn-flex tn-margin-sm">
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purplered--light tn-color-purplered">
            <view class="tn-icon-like-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">心动模式</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-indigo--light tn-color-indigo">
            <view class="tn-icon-live-stream-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">优质MV</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purple--light tn-color-purple">
            <view class="tn-icon-moon-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">动听单曲</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-orange--light tn-color-orange">
            <view class="tn-icon-statistics-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">排行榜</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 方式12 end-->
    
    <!-- 图文 -->
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
                <view>
                  <view class="tn-color-gray">
                    <text class="tn-blogger-content__count-icon tn-icon-flower"></text> 
                    <text class="tn-padding-right-sm">{{ item.collectionCount }}</text>
                    <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                    <text class="tn-padding-right-sm">{{ item.commentCount }}</text>
                    <text class="tn-blogger-content__count-icon tn-icon-like"></text>
                    <text class="">{{ item.likeCount }}</text>
                  </view>
                </view>
              </view>
              <!-- <view class="justify-content-item tn-text-center">
                <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                  <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                </view>
              </view> -->
            </view>
            
            
          </view>
        </view>
      </block>
    </view>
    <!-- 比例 end-->
    
    
    
    <view class="tn-bg-white tn-flex tn-flex-direction-column tn-padding-bottom tn-margin-sm">
      
      <block v-for="(item,index) in content" :key="index">
        <view class="tn-blogger-content__wrap">
          <view class="">
            <!-- 方式一 -->
            <view class="tn-shadow-blur image-pic" :style="'background-image:url(' + item.mainImage + ')'">
              <view class="image-music">
              </view>
            </view>
            <!-- 方式二 -->
            <!-- <image 
              class="tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom"
              :src="item.mainImage"
              mode="aspectFill"
            ></image> -->
          </view>
          <view class="tn-blogger-content__label tn-text-justify tn-margin">
            <text class="tn-blogger-content__label__desc tn-text-lg tn-text-bold">{{ item.desc }}</text>  
          </view>
          
          <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
            <view class="justify-content-item tn-flex tn-flex-col-center">
              <view style="margin-right: 10rpx;margin-left: 0rpx;">
                <view class="tn-color-gray tn-padding-left tn-padding-right tn-padding-bottom">
                  <text class="tn-blogger-content__count-icon tn-icon-flower"></text> 
                  <text class="tn-padding-right-sm">{{ item.collectionCount }}</text>
                  <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                  <text class="tn-padding-right-sm">{{ item.commentCount }}</text>
                  <text class="tn-blogger-content__count-icon tn-icon-like"></text>
                  <text class="">{{ item.likeCount }}</text>
                </view>
              </view>
            </view>
            <view class="justify-content-item tn-text-center tn-padding-bottom">
              <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
              </view>
              
            </view>
          </view>
        </view>
        
      </block>
    </view>
    
    <view class="tabbar footerfixed">
      <view class="action navbar__item -blue">
        <view class="bar-icon">
          <view class="tn-icon-home-capsule navbar__icon">
          </view>
        </view>
        <view class="-blue bar-text">
          <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">首页</text>
        </view>
      </view>
      <view class="action navbar__item -orange">
        <view class="bar-icon">
          <view class="tn-icon-discover-planet navbar__icon">
          </view>
        </view>
        <view class="-orange bar-text">
          <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">圈子</text>
        </view>
      </view>
      <view class="action navbar__item -yellow">
        <view class="bar-icon">
          <view class="tn-icon-honor navbar__icon">
          </view>
        </view>
        <view class="-yellow bar-text">
          <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">榜单</text>
        </view>
      </view>
      <view class="action navbar__item -purple">
        <view class="bar-icon">
          <view class="tn-icon-my navbar__icon">
            <!-- <tn-badge :absolute="true">99+</tn-badge> -->
          </view>
        </view>
        <view class="-purple bar-text">
          <text style="margin-bottom:-100rpx;font-size:20rpx;color:#303030;">我的</text>
        </view>
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
    name: 'TemplateMusic',
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
  .template-music{
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
        background-color: rgba(255,255,255,0.2);
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
      box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.12);
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
    padding: 150rpx 0rpx;
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
  
  /* 底部标签栏动画 */
  .navbar__item .bar-text {
    font-variant: small-caps;
    margin: 0;
    padding: 0;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    position: relative;
    width: 50rpx;
    height: 50rpx;
    background-size: cover;
    background-position: center;
    vertical-align: middle;
    background-color: currentColor;
    border-radius: 50%;
    transform: scale(0.8);
    opacity: 0;
    transition: all 0.55s cubic-bezier(0.71, 0.03, 0.23, 0.95);
  }
  
  .navbar__item.-blue {
    color: #06b8ff;
  }
  
  .navbar__item.-orange {
    color: #f2704d;
  }
  
  .navbar__item.-yellow {
    color: #f8cd4b;
  }
  
  .navbar__item.-purple {
    color: #8444d6;
  }
  
  .bar-text.-blue {
    color: #06b8ff;
  }
  
  .bar-text.-orange {
    color: #f2704d;
  }
  
  .bar-text.-yellow {
    color: #f8cd4b;
  }
  
  .bar-text.-purple {
    color: #8444d6;
  }
  
  .navbar__item:hover .bar-text {
    transform: translateY(-74rpx) scale(1.4);
    opacity: 1;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1),
      -1px -1px 5px rgba(255, 255, 255, 1);
  }
  
  .navbar__item:hover::before {
    opacity: 1;
  }
  
  .navbar__item:hover::after {
    opacity: 0.4;
  }
  
  .navbar__item:hover .navbar__icon {
    transform: translateY(-42rpx) scale(1);
    color: #fff;
    transition-delay: 0.1s, 0.1s;
  }
  
  .navbar__icon {
    bottom: -26rpx;
    transition: all 0.5s cubic-bezier(0.71, 0.03, 0.23, 0.95);
    transition-delay: 0.1s;
    display: inline-block;
    position: relative;
    z-index: 2;
  }
</style>
