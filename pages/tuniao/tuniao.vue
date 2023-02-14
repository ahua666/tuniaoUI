<template>
  <view class="about tn-safe-area-inset-bottom">
  
    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/index_bg/about_new.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>
    
    <view class="about__wrap">
      <!-- 头像用户信息 -->
      <view class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
        <view class="user-info__avatar tn-bg-grey--light tn-flex tn-flex-col-center tn-flex-row-center">
          <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/tuniao.jpg');width: 180rpx;height: 180rpx;background-size: cover;">
          </view>
          <!-- <view class="tn-icon-logo-tuniao" style="font-size: 140rpx;color: #01BEFF;"></view> -->
        </view>
        <view class="user-info__nick-name">图鸟小伙伴</view>
      </view>
      
      <!-- banner start-->
      <!-- <view class="tn-flex tn-flex-wrap tn-padding-xs" @click="navTuniaoVue3">
        <view class="" style="width: 100%;">
          <view class="image-piccapsule tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/capsule-banner/banner-Vue3.png');">
             <view class="image-capsule">
             </view>
           </view>  
        </view>  
      </view> -->
      <!-- banner end-->
      
      <view class="tn-margin-left tn-margin-right">
        
        <!-- 方式20 start-->
        <view class="tn-flex">
          <view class="tn-flex-1 about-shadow tn-bg-white" style="margin: 50rpx 15rpx 0 0;padding: 30rpx 0;" @click="navTuniaoWebsite">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon20__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orangered tn-color-white">
                <view class="tn-icon-computer-fill"></view>
              </view>  
              <view class="tn-text-center" style="font-size: 30rpx;">
                <view class="tn-text-ellipsis">图鸟官网</view>
              </view>
            </view>
          </view>
          <view class="tn-flex-1 about-shadow tn-bg-white" style="margin: 50rpx 0 0 15rpx;padding: 30rpx 0;" @click="navShare">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon20__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purplered tn-color-white">
                <view class="tn-icon-moon-fill"></view>
              </view>  
              <view class="tn-text-center" style="font-size: 30rpx;">
                <view class="tn-text-ellipsis">图鸟公众号</view>
              </view>
            </view>
          </view>
        </view>

        <!-- 数据信息 -->
        <!-- <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between">
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
        </view> -->
        
        <!-- 更多信息-->
        <view class="about-shadow tn-margin-top-lg tn-padding-top-sm tn-padding-bottom-sm">
          <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="copyDCloud">
            <view class="tn-flex tn-flex-col-center">
              <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-1 tn-color-white"> 
                <view class="tn-icon-fire-fill"></view>
              </view>
              <view class="tn-margin-left-sm tn-flex-1">插件市场</view>
              <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
            </view>
          </tn-list-cell>
          <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="copyGitee">
            <view class="tn-flex tn-flex-col-center">
              <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-3 tn-color-white"> 
                <view class="tn-icon-star-fill"></view>
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
              <view class="tn-margin-left-sm tn-color-red tn-icon-send-fill"></view>
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
        
        <view class="tn-flex tn-flex-row-between">
          <view class="justify-content-item tn-text-bold tn-text-lg">
            <text class="">友情链接</text>
          </view>
          <view class="justify-content-item tn-text-df">
            <text class="tn-padding-xs">全部</text>
            <text class="tn-icon-right"></text>
          </view>
        </view>
        <!-- 更多信息-->
        <view class="about-shadow tn-margin-top tn-margin-bottom-lg tn-padding-top-sm tn-padding-bottom-sm">
          <tn-scroll-list :indicator="false">
            <view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
              <navigator target="miniProgram" :app-id="item.appid" :path="item.path" version="release" delta="1" hover-class="none" 
                v-for="(item, index) in linksData" :key="index">  
                <view class="tn-flex-1 tn-padding-sm tn-radius">
                  <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                    <!-- <view class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
                      :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                      <view :class="[`tn-icon-${item.icon}`]"></view>
                    </view> -->
                    <view class="icon5__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" 
                    :style="'background-image:url('+ item.url + ');background-size:100% 100%;'">
                    </view>
                    <view class="tn-color-black tn-text-df tn-text-center tn-margin-top-sm">
                      <text class="tn-text-ellipsis">{{ item.title }}</text>
                    </view>
                  </view>
                </view>
              </navigator>
            </view>
          </tn-scroll-list>
        </view>
        
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
            value: '1.2.0'
          }
        ],
        linksData: [{
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1646920408332-assets/web-upload/6ea58bb4-cb0d-4034-b9ac-a0155d5c3afb.jpeg',
            title: 'uCharts',
            appid: 'wx37a9ee6a7398dec0',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1646963464962-assets/web-upload/3c14732e-cc92-4726-9a9c-1fa7133f8147.jpeg',
            title: '芊云全景',
            appid: 'wx9f77d65eb4eff65b',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1648734439954-assets/web-upload/2e3d3e73-a28c-4c5d-885a-e5cdf2da13af.jpeg',
            title: '前端铺子',
            appid: 'wx201efd3f86fa2ba7',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/png/280373/1647178609988-assets/web-upload/37a6d22c-410b-4f51-a083-993306bbc4fa.png',
            title: 'DIY神器',
            appid: 'wxda438798441f31f1',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1666880969854-assets/web-upload/95902944-1be6-4c23-a2f5-47cf78eda072.jpeg',
            title: '江夏生活',
            appid: 'wx2257f5c246ad1bcd',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1667656184223-assets/web-upload/cc3dbf5c-1483-4c74-83fc-03c2bd7c373e.jpeg',
            title: '多客社交',
            appid: 'wx86cc21f2f7fa3efa',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1647505953019-assets/web-upload/a6c0a823-5b55-4cb7-aee5-5b82990533ed.jpeg',
            title: '样式库',
            appid: 'wx853f345b163a00d6',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1647765849135-assets/web-upload/dfcacf41-b1c0-4dbf-8613-3f948e43d125.jpeg',
            title: '旺石头科技',
            appid: 'wx6007249d6b2348ea',
            path: ''
          },
          {
            url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1655887617723-assets/web-upload/028185c8-fac6-4863-a00f-7e9bbe3ea54e.jpeg',
            title: '邻邻邦',
            appid: 'wxf7512cb916d6d1c2',
            path: ''
          },
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
      
      // 跳转到图鸟Vue3
      navTuniaoVue3(e) {
        wx.vibrateLong();
        uni.navigateToMiniProgram({
          appId: 'wxd4296f570b8b39c9'
        })
      },
      
      // 跳转到会员协议
      navPlus() {
        uni.navigateTo({
          url: '/templatePage/life/plus/plus'
        })
      },
      
      // 跳转到图鸟公众号
      navShare() {
        uni.navigateTo({
          url: '/templatePage/life/share/share'
        })
      },
      
      // 复制插件市场地址
      copyDCloud() {
        uni.setClipboardData({
          data: "https://ext.dcloud.net.cn/publisher?id=356088",
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
      margin: 20rpx 0rpx;
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
      margin-top: 0rpx;
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
  
  /* 图标容器5 start */
    .icon5 {
      &__item {
        // width: 30%;
        background-color: #FFFFFF;
        border-radius: 10rpx;
        padding: 0rpx;
        margin: 0rpx;
        transform: scale(1);
        transition: transform 0.3s linear;
        transform-origin: center center;
        
        &--icon {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
          margin-bottom: 18rpx;
          position: relative;
          z-index: 1;
        }
      }
    }
    
  .icon20 {
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
    
    /* 胶囊banner*/
    .image-capsule{
      padding: 100rpx 0rpx;
      font-size: 40rpx;
      font-weight: 300;
      position: relative;
    }
    .image-piccapsule{
      background-size: cover;
      background-repeat:no-repeat;
      // background-attachment:fixed;
      background-position:top;
      border-radius: 20rpx 20rpx 0 0;
    }
</style>
