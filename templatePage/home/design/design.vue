<template>
  <view class="template-design tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    <!-- 页面内容 -->
    <view>
      <tn-swiper :list="banner" :height="1000" :effect3d="false" mode="number"></tn-swiper>
    </view>
    
    <!-- 方式10 start-->
    <view class="tn-flex tn-margin-top">
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
            <view class="tn-icon-image-fill"></view>
          </view>  
          <view class="tn-color-black tn-text-lg tn-text-center">
            <text class="tn-text-ellipsis">相册</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
            <view class="tn-icon-live-stream-fill"></view>
          </view>  
          <view class="tn-color-black tn-text-lg tn-text-center">
            <text class="tn-text-ellipsis">视频</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white">
            <view class="tn-icon-image-text-fill"></view>
          </view>  
          <view class="tn-color-black tn-text-lg tn-text-center">
            <text class="tn-text-ellipsis">日志</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white">
            <view class="tn-icon-topics-fill"></view>
          </view>  
          <view class="tn-color-black tn-text-lg tn-text-center">
            <text class="tn-text-ellipsis">话题</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
            <view class="tn-icon-discover-fill"></view>
          </view>  
          <view class="tn-color-black tn-text-lg tn-text-center">
            <text class="tn-text-ellipsis">发现</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 方式10 end-->
    
    
    <!-- 图文 -->
    <view class="tn-flex tn-flex-direction-column">
      
      <block v-for="(item,index) in content" :key="index">
        <view class="tn-blogger-content__wrap">
          <view class="tn-padding-top-xs">
            <!-- 方式一 -->
            <view class="tn-shadow-blur image-pic" :style="'background-image:url(' + item.mainImage + ')'">
              <view class="image-design">
              </view>
            </view>
            <!-- 方式二 -->
            <!-- <image 
              class="tn-blogger-content__main-image tn-shadow tn-blogger-content__main-image--1 tn-margin-bottom-sm"
              :src="item.mainImage"
              mode="aspectFill"
            ></image> -->
          </view>
          <view class="tn-blogger-content__label tn-text-justify tn-margin-top tn-margin-bottom-sm">
            <text class="tn-blogger-content__label__desc tn-text-bold tn-text-xl">{{ item.desc }}</text>  
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
        
        <!-- 边距间隔 -->
        <view class="tn-strip-bottom" v-if="index != content.length - 1"></view>
      </block>
    </view>
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/home_tnnew.png'></image>
        </view>
        <view class="tn-color-black">首页</view>
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
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tn.png'></image>
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
    name: 'TemplateDesign',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        banner: [{
          image: 'https://tnuiimage.tnkjapp.com/swiper/swiper1.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/swiper/swiper2.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg'
        }, {
          image: 'https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg'
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
  .template-design{
  }
    /* 图标容器10 start */
      .icon10 {
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
            width: 84rpx;
            height: 65rpx;
            font-size: 45rpx;
            border-radius: 200rpx;
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
              background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
            }
          }
        }
      }
    /* 图标容器10 end */
    
    /* 文章内容 start*/
    .tn-blogger-content {
      &__wrap {
        padding: 30rpx;
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
        box-shadow: 0rpx 5rpx 40rpx 0rpx rgba(43, 158, 246, 0.2);
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
    
    .image-design{
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
     
     /* 间隔线 start*/
    .tn-strip-bottom {
     width: 100%;
     border-bottom: 20rpx solid rgba(241, 241, 241, 0.3);
    }
     /* 间隔线 end*/

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
