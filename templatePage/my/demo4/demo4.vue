<template>
  <view class="template-myblog tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->

    <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back">
          <view class="tn-icon-notice tn-color-white tn-text-shadow-brown" style="font-size: 50rpx;">
            <tn-badge backgroundColor="#E72F8C" fontColor="#FFFFFF" :absolute="true" :translateCenter="false">
              <text>12</text>
            </tn-badge>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    

    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/my/my-vip.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>


    <view class="about__wrap">
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
        <view class="justify-content-item">
          <view class="tn-flex tn-flex-col-center tn-flex-row-left">
            <!-- 图标logo -->
            <view class="logo-pic tn-shadow">
              <view class="logo-image">
                <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg');width: 100rpx;height: 100rpx;background-size: cover;">
                </view>
                <!-- <view class="tn-icon-logo-tuniao" style="font-size: 100rpx;color: #01BEFF;padding: 16rpx 0;"></view> -->
              </view>
            </view>
            <view class="tn-padding-right tn-color-white">
              <view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold">
                抓住那只北北猪
              </view>
              <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
                <text class="" style="opacity: 0.5;">终身会员</text>
                <text class="tn-color-orange--dark tn-text-bold tn-padding-left-sm">SVIP 6</text>
              </view>
            </view>

          </view>
        </view>
      </view>
      
      <view class="" style="padding-top: 170rpx;">
        <view class="nav_title--wrap">
          <view class="nav_title">
            <text class="tn-icon-relation tn-padding-right-sm tn-text-xxl"></text>
            <text class="tn-text-xl">会员尊享 · 超值特权</text>
            <text class="tn-icon-relation tn-padding-left-sm tn-text-xxl"></text>
          </view>
        </view>
      </view> 
      
      <!-- 方式15 start-->
      <view class="tn-flex tn-margin tn-flex-row-center tn-radius" style="color: #0E122A;"> 
        <view class="tn-padding-sm tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange">
              <view class="tn-icon-cart"></view>
            </view>  
            <view class="tn-text-center" style="opacity: 0.4;text-shadow:#0E122A 0rpx 0rpx 0rpx;">
              <text class="tn-text-ellipsis">购物特权</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange">
              <view class="tn-icon-brand"></view>
            </view>  
            <view class="tn-text-center" style="opacity: 0.4;text-shadow:#0E122A 0rpx 0rpx 0rpx;">
              <text class="tn-text-ellipsis">品牌特权</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange">
              <view class="tn-icon-live-stream"></view>
            </view>  
            <view class="tn-text-center" style="opacity: 0.4;text-shadow:#0E122A 0rpx 0rpx 0rpx;">
              <text class="tn-text-ellipsis">娱乐特权</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange">
              <view class="tn-icon-moon"></view>
            </view>  
            <view class="tn-text-center" style="opacity: 0.4;text-shadow:#0E122A 0rpx 0rpx 0rpx;">
              <text class="tn-text-ellipsis">生日特权</text>
            </view>
          </view>
        </view>
        <view class="tn-padding-sm tn-radius">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon15__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange">
              <view class="tn-icon-service"></view>
            </view>  
            <view class="tn-text-center" style="opacity: 0.4;text-shadow:#0E122A 0rpx 0rpx 0rpx;">
              <text class="tn-text-ellipsis">客服特权</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 方式15 end-->
      
      <view class="tn-flex tn-flex-row-between tn-padding-top-xl">
        <view class="justify-content-item tn-text-bold tn-text-lg">
          <text class="">常用功能</text>
        </view>
        <view class="justify-content-item tn-text-df">
          <text class="tn-padding-xs">全部</text>
          <text class="tn-icon-right"></text>
        </view>
      </view>

      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-color-black tn-bg-white" style="color: #0E122A;text-shadow:#0E122A 0rpx 0rpx 0rpx;">
        <!-- 方式12 start-->
        <view class="tn-flex tn-flex-row-center tn-radius">
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-vip"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">会员充值</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-money"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">余额明细</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-ticket"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">消费明细</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-lucky-money"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">红包卡券</text>
              </view>
            </view>
          </view>
        </view>
        <view class="tn-flex tn-flex-row-center tn-radius">
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-shop"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">积分商城</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-order"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">积分订单</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-star"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">店铺收藏</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-map"></view>
              </view>
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">收货地址</text>
              </view>
            </view>
          </view>
        </view>
        <!-- 方式12 end-->
      </view>

      <view class="tn-flex tn-flex-row-between tn-padding-top-xl">
        <view class="justify-content-item tn-text-bold tn-text-lg">
          <text class="">更多功能</text>
        </view>
        <view class="justify-content-item tn-text-df">
          <text class="tn-padding-xs">全部</text>
          <text class="tn-icon-right"></text>
        </view>
      </view>
      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top tn-padding-top-sm tn-padding-bottom-sm">
        <tn-scroll-list :indicatorWidth="100" :indicatorBarWidth="30" indicatorColor="#FFE2D9"
          indicatorActiveColor="#FF7043">
          <view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
            <block v-for="(item, index) in historyData" :key="index">
              <view class="tn-flex-1 tn-padding-sm tn-radius">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
                    :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                    <view :class="[`tn-icon-${item.icon}`]"></view>
                  </view>
                  <view class="tn-color-black tn-text-df tn-text-center tn-margin-top-sm">
                    <text class="tn-text-ellipsis">{{ item.title }}</text>
                  </view>
                </view>
              </view>
            </block>
          </view>
        </tn-scroll-list>
      </view>

      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm">
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-16 tn-color-white">
              <view class="tn-icon-wechat-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">合作勾搭</view>
            <view class="tn-margin-left-sm tn-color-cyan tn-icon-link"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-8 tn-color-white">
              <view class="tn-icon-message-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">问题反馈</view>
            <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-6 tn-color-white">
              <view class="tn-icon-phone-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">技术支持</view>
            <view
              class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">
              136****0470</view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view
              class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-12 tn-color-white">
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
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-flower.png'></image> -->
        </view>
        <view class="tn-color-gray">圈子</view>
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
              <view class="bar-circle">
                <!-- <image class="" src='https://tnuiimage.tnkjapp.com/login/1/login_top3.png'></image> -->
                <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-tiger.png'></image>
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
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tnnew.png'></image>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/bless/bless-money.png'></image> -->
        </view>
        <view class="tn-color-gray">我的</view>
      </view>
    </view>



    <view class="tn-padding-xl tn-margin-top"></view>


    <!-- 回到首页悬浮按钮-->
    <nav-index-button></nav-index-button>

  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplateMyblog',
    mixins: [template_page_mixin],
    components: {NavIndexButton},
    data() {
      return {
        historyData: [{
            title: '分销中心',
            icon: 'organizatio',
            color: 'orange',
          },
          {
            title: '积分商城',
            icon: 'level',
            color: 'purple',
          },
          {
            title: '限时秒杀',
            icon: 'clock',
            color: 'blue',
          },
          {
            title: '社区团购',
            icon: 'team',
            color: 'purplered',
          },
          {
            title: '大转盘',
            icon: 'group-circle',
            color: 'teal',
          },
          {
            title: '商品核销',
            icon: 'scan',
            color: 'orangered',
          },
          {
            title: '满减优惠',
            icon: 'coupon',
            color: 'indigo',
          },
          {
            title: '视频直播',
            icon: 'video',
            color: 'green',
          }
        ]
      }
    },
    methods: {
      // 跳转到
      navTuniaoUI(e) {
        uni.navigateTo({
          url: '/pages/index/index'
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';

  .template-myblog {}
  
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      flex-basis: 5%;
      width: 100rpx;
      position: absolute;
    }
  }
  /* 自定义导航栏内容 end */

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
  
  /* 标题 start */
  .nav_title {
    -webkit-background-clip: text;
    color: #0E122A;
    
    
    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
      background-size: cover;
    }
  }
  /* 标题 end */

  /* 用户头像 start */
  .logo-image {
    width: 100rpx;
    height: 100rpx;
    position: relative;
  }

  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 50%;
    overflow: hidden;
    background-color: #FFFFFF;
  }

  /* 页面 start*/
  .about-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }

  .about {

    &__wrap {
      position: relative;
      z-index: 1;
      margin: 20rpx 30rpx;
      margin-top: -230rpx;
    }
  }

  /* 页面 end*/
  
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
        width: 15rpx;
        height: 15rpx;
        font-size: 66rpx;
        border-radius: 50%;
        margin-bottom: 38rpx;
        position: relative;
        text-shadow:#0E122A 0rpx 0rpx 0rpx;
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
    font-size: 52rpx;
    line-height: 90rpx;
    // background-color: #01BEFF;
    width: 100rpx !important;
    height: 100rpx !important;
    overflow: hidden;
    // border-radius: 50%;
    // box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
    //   0px -8px 40px rgba(255, 255, 255, 1),
    //   inset 0px -10px 10px rgba(70,23,129, 0.05),
    //   inset 0px 10px 20px rgba(255, 255, 255, 1);
    // box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
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


  /* 图标容器12 start */
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
        // border-radius: 50%;
        margin-bottom: 0rpx;
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
          // background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);


        }
      }
    }
  }

  /* 图标容器11 start */
  .icon11 {
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

  /**/
  @keyframes t {

    0%,
    10%,
    80%,
    100% {
      top: -30px;
    }

    20% {
      top: 0px;
    }

    30% {
      top: -20px;
    }

    40% {
      top: -0px;
    }

    50% {
      top: -25px;
    }

    70% {
    		top: 0px;
    }
  }

  @keyframes b {

    0%,
    10%,
    80%,
    100% {
      bottom: -30px;
    }

    20% {
      bottom: 0px;
    }

    30% {
      bottom: -20px;
    }

    40% {
      bottom: -0px;
    }

    50% {
      bottom: -25px;
    }

    70% {
      bottom: 0px;
    }
  }

  @keyframes mouth {

    0%,
    10%,
    100% {
      width: 100%;
      height: 0%;
    }

    15% {
      width: 90%;
      height: 30%;
    }

    20% {
      width: 50%;
      height: 70%;
    }

    25% {
      width: 70%;
    	 height: 70%;
    }

    30% {
    		width: 80%;
      height: 60%;
    }

    35% {
      width: 60%;
      height: 70%;
    }

    40% {
      width: 55%;
      height: 75%;
    }

    45% {
    		width: 50%;
      height: 90%;
    }

    50% {
      width: 40%;
      height: 70%;
    }

    55% {
      width: 70%;
      height: 95%;
    }

    60% {
    	 width: 40%;
      height: 50%;
    }

    65% {
      width: 100%;
      height: 60%;
    }

    70% {
      width: 100%;
      height: 70%;
    }

    75% {
      width: 90%;
      height: 70%;
    }

    80% {
      width: 50%;
      height: 70%;
    }

    85% {
      width: 90%;
      height: 50%;
    }

    85% {
      width: 40%;
      height: 70%;
    }

    90% {
      width: 90%;
      height: 30%;
    }

    95% {
      width: 100%;
      height: 10%;
    }
  }

  @keyframes tongue {

    0%,
    20%,
    100% {
      bottom: -80px;
    }

    30%,
    90% {
    		bottom: -40px;
    }

    40% {
      bottom: -45px;
    }

    50% {
      bottom: -50px;
    }

    70% {
      bottom: -80px;
    }

    90% {
      bottom: -40px;
    }
  }
</style>
