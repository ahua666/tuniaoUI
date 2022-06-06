<template>
  <view class="tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->

    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back">
          <view class="logo-pic tn-shadow-blur"
            style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg')">
            <view class="logo-image">
              <tn-badge backgroundColor="#E72F8C" :dot="true" :radius="16" :absolute="true" :translateCenter="false">
              </tn-badge>
            </view>
          </view>
          <!-- <view class="tn-icon-left"></view> -->
        </view>
        <!-- 搜索框 -->
        <!-- <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark tn-bg-gray--light">
            <view class="custom-nav__search__icon tn-icon-search"></view>
            <view class="custom-nav__search__text tn-padding-left-xs">开启美好的一天</view>
          </view>
        </view> -->
        <view class="tn-margin-top tn-margin-left">
          <tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" bold="true"
            :fontSize="36"></tn-tabs>
        </view>
      </view>

    </tn-nav-bar>


    <!-- 不建议写时间，因为写了时间，你就要经常更新文章了鸭-->
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <block v-for="(item, index) in content" :key="index">
        <view class="article-shadow tn-margin">
          <view class="tn-flex">
            <view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
              <view class="tn-text-lg tn-text-bold clamp-text-2 tn-text-justify" style="min-height: 95rpx;">
                <view v-for="(label_item,label_index) in item.label" :key="label_index" style="transform: translate(0,-5rpx);"
                  class="justify-content-item tn-tag-content__item tn-margin-right-xs tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                  <text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
                </view>
                <text class="">{{ item.title }}</text>
              </view>
              <view class="tn-padding-top-xs">
                <text class=" tn-text-sm tn-color-gray clamp-text-1">
                  {{ item.desc }}
                </text>
              </view>
              <view class="tn-flex tn-flex-row-between tn-flex-col-between">
                <view class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled" style="padding-top: 15rpx;">
                  <text class="tn-icon-footprint tn-padding-right-xs"></text>
                  <text class="tn-padding-right">{{ item.collectionCount }}</text>
                  <text class="tn-icon-like-lack tn-padding-right-xs"></text>
                  <text class="">{{ item.likeCount }}</text>
                </view>
              </view>
            </view>
            <view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.userAvatar + ')'">
              <view class="image-article">
              </view>
            </view>
          </view>
        </view>
      </block>
    </view>


    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">


      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/home_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-home.png'></image> -->
        </view>
        <view class="tn-color-gray">首页</view>
      </view>
      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-discover tn-color-gray--dark">
          </view>  -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tnnew.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-flower.png'></image> -->
        </view>
        <view class="tn-color-black">圈子</view>
      </view>

      <!-- <view class="action bar-center">
        <view class="bar-circle tn-shadow-blur">
          <view class="tn-icon-camera-fill tn-color-white">
          </view>
        </view>
        <view class="tn-color-gray">发布</view>
      </view> -->

      <view class="action bar-center" @click="">
        <view class="nav-index-button">
          <view class="nav-index-button__content">
            <view class="nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center">
              <!-- <view class="tn-icon-logo-tuniao"></view> -->
              <view class="bar-circle tn-shadow-blur">
                <view class="tn-icon-add tn-color-white"></view>
                <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-tiger.png'></image> -->
              </view>
            </view>
          </view>

          <view class="nav-index-button__meteor">
            <view class="nav-index-button__meteor__wrapper">
              <view v-for="(item,index) in 6" :key="index" class="nav-index-button__meteor__item"
                :style="{transform: `rotateX(${-60 + (30 * index)}deg) rotateZ(${-60 + (30 * index)}deg)`}">
                <view class="nav-index-button__meteor__item--pic"></view>
              </view>
            </view>
          </view>
        </view>
        <!-- <view class="tn-color-gray">发布</view> -->
      </view>

      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-image-text tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/case_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-china.png'></image> -->
        </view>
        <view class="tn-color-gray">优选</view>
      </view>
      <view class="action" @click="">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-money.png'></image> -->
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
    components: {
      NavIndexButton
    },
    data() {
      return {
        current: 0,
        scrollList: [{
            name: '资讯'
          },
          {
            name: '博客'
          },
          {
            name: '学习',
            count: ''
          }
        ],
        content: [{
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'red',
            label: ['小程序'],
            title: '小程序官网源码，免费开源欢迎白嫖嗷嗷',
            desc: '2.2.0版本已上线，欢迎三连',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 567
            },
            collectionCount: 543,
            commentCount: 543,
            likeCount: 206
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'cyan',
            label: ['模型'],
            title: '一个拥有大量3D模型的网站',
            desc: '3D模型了解一下？',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 987
            },
            collectionCount: 567,
            commentCount: 69,
            likeCount: 65
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'blue',
            label: ['UI设计'],
            title: '为什么资讯不显示时间？',
            desc: '你确定你经常更新文章吗？',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 321
            },
            collectionCount: 654,
            commentCount: 232,
            likeCount: 543
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'green',
            label: ['创意'],
            title: '创意一点点',
            desc: '创意灵感从这里开始',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 230
            },
            collectionCount: 987,
            commentCount: 236,
            likeCount: 342
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'orange',
            label: ['UI设计'],
            title: '图鸟UI素材免费可商用',
            desc: '语雀素材地址资源',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 106
            },
            collectionCount: 765,
            commentCount: 32,
            likeCount: 91
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'purplered',
            label: ['神器'],
            title: '最强的视频转GIF工具',
            desc: '神器推荐',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 232
            },
            collectionCount: 776,
            commentCount: 48,
            likeCount: 86
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'purple',
            label: ['粒子'],
            title: '酷炫的小程序粒子效果一览',
            desc: '小程序粒子效果',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 456
            },
            collectionCount: 342,
            commentCount: 42,
            likeCount: 76
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            color: 'brown',
            label: ['工具'],
            title: '小程序任意页面生成二维码',
            desc: '二维码生成器',
            mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
            viewUser: {
              latestUserAvatar: [{
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                },
                {
                  src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                },
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          }
        ],
      }
    },
    methods: {
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
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

  .logo-image {
    width: 60rpx;
    height: 60rpx;
    position: relative;
    margin-top: -15rpx;
  }

  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 50%;
  }

  /* 自定义导航栏内容 end */

  /* 资讯主图 start*/
  .image-article {
    border-radius: 8rpx;
    border: 1rpx solid #F8F7F8;
    width: 250rpx;
    height: 200rpx;
    position: relative;
  }

  .image-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 10rpx;
  }

  .article-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }

  /* 文字截取*/
  .clamp-text-1 {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .clamp-text-2 {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 35rpx;
      padding: 5rpx 25rpx;

      &--prefix {
        padding-right: 10rpx;
      }
    }
  }

  /* 标签内容 end*/

  /* 底部tabbar start*/
  .footerfixed {
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

  .bar-center {
    animation: suspension 3s ease-in-out infinite;
  }

  @keyframes suspension {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-0.8rem);
    }
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
    margin: 0rpx auto 0rpx;
    text-align: center;
    font-size: 60rpx;
    line-height: 100rpx;
    background-color: #FBBF18;
    width: 100rpx !important;
    height: 100rpx !important;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0px 10px 30px rgba(70, 23, 129, 0.12),
      0px -8px 40px rgba(255, 255, 255, 1),
      inset 0px -10px 10px rgba(70, 23, 129, 0.05),
      inset 0px 10px 20px rgba(255, 255, 255, 1);
    box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(251, 191, 24, 0.5);
  }

  .tabbar .action .bar-circle image {
    width: 100rpx;
    height: 100rpx;
    display: inline-block;
    margin: 0rpx auto 0rpx;
  }

  /* 流星+悬浮 */
  .nav-index-button {
    animation: suspension 3s ease-in-out infinite;
    z-index: 999999;


    &__content {
      position: absolute;
      width: 100rpx;
      height: 100rpx;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;
        transform: scale(0.85);

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
          // background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
        }
      }
    }

    &__meteor {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100rpx;
      height: 100rpx;
      transform-style: preserve-3d;
      transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);

      &__wrapper {
        width: 100rpx;
        height: 100rpx;
        transform-style: preserve-3d;
        animation: spin 20s linear infinite;
      }

      &__item {
        position: absolute;
        width: 100rpx;
        height: 100rpx;
        border-radius: 1000rpx;
        left: 0;
        top: 0;

        &--pic {
          display: block;
          width: 100%;
          height: 100%;
          background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc1.png) no-repeat center center;
          background-size: 100% 100%;
          animation: arc 4s linear infinite;
        }
      }
    }
  }


  @keyframes suspension {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-0.6rem);
    }
  }

  @keyframes spin {
    0% {
      transform: rotateX(0deg);
    }

    100% {
      transform: rotateX(-360deg);
    }
  }

  @keyframes arc {
    to {
      transform: rotate(360deg);
    }
  }
</style>
