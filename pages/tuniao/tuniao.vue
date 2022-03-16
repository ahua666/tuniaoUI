<template>
  <view class="about tn-safe-area-inset-bottom">
  
    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/index_bg/about_new.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>
    
    <view class="about__wrap">
      <!-- 头像用户信息 -->
      <view class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
        <view class="user-info__avatar tn-bg-grey--light tn-flex tn-flex-col-center tn-flex-row-center">
          <view class="tn-icon-logo-tuniao" style="font-size: 140rpx;color: #01BEFF;"></view>
        </view>
        <view class="user-info__nick-name">图鸟小伙伴</view>
      </view>
      
      <!-- 数据信息 -->
      <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between">
        <block v-for="(item, index) in tuniaoData" :key="index">
          <view class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between about-shadow">
            <view class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
              <view class="tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                <view :class="[`tn-icon-${item.icon}`]"></view>
              </view>
              <view class="tn-info__item__left__content">
                <view class="tn-info__item__left__content--title">{{ item.title }}</view>
                <view class="tn-info__item__left__content--data tn-padding-top-xs">{{ item.value }}</view>
              </view>
            </view>
            <view class="tn-info__item__right">
              <view class="tn-info__item__right--icon">
                <view class="tn-icon-code"></view>
              </view>
            </view>
          </view>
        </block>
      </view>
      
      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-lg tn-padding-top-sm tn-padding-bottom-sm">
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="navTuniaoWebsite">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-5 tn-color-white" > 
              <view class="tn-icon-logo-tuniao"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">图鸟官网</view>
            <view class="tn-margin-left-sm tn-color-cyan tn-icon-link"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="copyGitee">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-1 tn-color-white"> 
              <view class="tn-icon-gitee"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">Gitee地址</view>
            <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="navPlus">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-6 tn-color-white"> 
              <view class="tn-icon-safe-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">会员协议</view>
            <view class="tn-margin-left-sm tn-color-red tn-icon-fire-fill"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-2 tn-color-white"> 
              <view class="tn-icon-set-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">更新日志</view>
            <view class="tn-margin-left-sm tn-color-gray">懒</view>
          </view>
        </tn-list-cell>
      </view>
      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-lg tn-margin-bottom-lg tn-padding-top-sm tn-padding-bottom-sm">
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="contact">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-9 tn-color-white"> 
              <view class="tn-icon-wechat-fill"></view>
            </view>
            <view class="tn-margin-left-sm">合作勾搭</view>
          </button>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="feedback">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-13 tn-color-white"> 
              <view class="tn-icon-comment-fill"></view>
            </view>
            <view class="tn-margin-left-sm">问题反馈</view>
          </button>
        </tn-list-cell>
      </view>
    </view>
    
    <view class="tn-padding-bottom-xs"></view>
  
  </view>
</template>

<script>
  export default {
    name: 'Tuniao',
    data() {
      return {
        tuniaoData: [
          {
            title: 'View',
            icon: 'eye',
            color: 'indigo',
            value: '1.22 W'
          },
          {
            title: 'Star',
            icon: 'star',
            color: 'orange',
            value: '406'
          },
          {
            title: 'Fork',
            icon: 'fork',
            color: 'purplered',
            value: '129'
          },
          {
            title: 'Version',
            icon: 'trusty',
            color: 'green',
            value: '1.0.0'
          }
        ]
      }
    },
    methods: {
      // 跳转到图鸟官网
      navTuniaoWebsite() {
        uni.navigateToMiniProgram({
          appId: 'wxa698b1eee960632f'
        })
      },
      
      // 跳转到会员协议
      navPlus() {
        uni.navigateTo({
          url: '/templatePage/life/plus/plus'
        })
      },
      
      // 复制Gitee地址
      copyGitee() {
        uni.setClipboardData({
          data: "https://gitee.com/TSpecific/tuniao-ui",
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  /* 顶部背景图 start */
  .top-backgroup {
    height: 450rpx;
    z-index: -1;
  
    .backgroud-image {
      width: 100%;
      height: 667rpx;
      // z-index: -1;
    }
  }
  /* 顶部背景图 end */
  
  /* 页面 start*/
  .about-shadow{
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .about {
    
    &__wrap {
      position: relative;
      z-index: 1;
      margin: 20rpx 30rpx;
      margin-top: -180rpx;
    }
  }
  /* 页面 end*/
  
  /* 用户信息 start */
  .user-info {
    &__container {
      
    }
    
    &__avatar {
      width: 180rpx;
      height: 180rpx;
      border: 8rpx solid rgba(255,255,255,0.05);
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    }
    
    &__nick-name {
      margin-top: 26rpx;
      font-size: 42rpx;
      font-weight: 600;
      text-align: center;
    }
  }
  /* 用户信息 end */
  
  /* 信息展示 start */
  .tn-info {
    
    &__container {
      margin-top: 40rpx;
    }
    
    &__item {
      width: 48%;
      margin: 15rpx 0rpx;
      padding: 28rpx;
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/6.png);
        }
      
      &__left {
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
          font-size: 40rpx;
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
          font-size: 60rpx;
          opacity: 0.15;
        }
      }
    }
  }
  /* 信息展示 end */
  
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
</style>
