<template>
  <view class="template-about tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    
    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/my/my-bg3.png' mode='widthFix' class='backgroud-image'></image>
    </view>
    
    
    <button @click="navTuniaoHome">
      <view class="dong">
        <view class="monster">
          <view class="monster__face">
            <view class="monster__eye avatar-eye avatar-eye--green eye--left">
              <view class="avatar-eye-pupil pupil--green"><span class="avatar-eye-pupil-blackThing"><span class="avatar-eye-pupil-lightReflection"></span></span></view>
            </view>
            <view class="monster__eye avatar-eye avatar-eye--violet eye--right">
              <view class="avatar-eye-pupil pupil--pink"><span class="avatar-eye-pupil-blackThing"><span class="avatar-eye-pupil-lightReflection"></span></span></view>
            </view>
            <view class="monster__noses">
              <view class="monster__nose"></view>
              <view class="monster__nose"></view>
            </view>
            <view class="monster__mouth">
              <view class="monster__top"></view>
              <view class="monster__bottom"></view>
            </view>
          </view>
        </view>
      </view>
    </button>
    
    
    
    <view class="about__wrap">
      
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
        <view class="justify-content-item">
          <view class="tn-flex tn-flex-col-center tn-flex-row-left">
            <!-- 图标logo -->
            <view class="logo-pic tn-shadow" >
              <view class="logo-image">
                <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg');width: 120rpx;height: 120rpx;background-size: cover;">
                </view>
                <!-- <view class="tn-icon-logo-tuniao" style="font-size: 140rpx;color: #01BEFF;box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);"></view> -->
              </view>
            </view>
            <view class="tn-padding-right tn-color-white">
              <view class="tn-padding-right tn-padding-left-sm tn-text-xxl">
                图鸟小伙伴
              </view>
              <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">亲爱的会员你好吖</view>
            </view>
            
          </view>
        </view>
      </view>
      
      <!-- 更多信息-->
      <view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-color-black tn-bg-white">
        <!-- 方式12 start-->
        <view class="tn-flex tn-flex-row-center tn-radius"> 
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-vip"></view>
              </view>  
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">我的订单</text>
              </view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs tn-radius">
            <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
              <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
                <view class="tn-icon-money"></view>
              </view>  
              <view class="tn-text-center">
                <text class="tn-text-ellipsis">余额充值</text>
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
        <tn-scroll-list :indicatorWidth="100" :indicatorBarWidth="30" indicatorColor="#FFE2D9" indicatorActiveColor="#FF7043">
          <view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
            <block v-for="(item, index) in historyData" :key="index">
              <view class="tn-flex-1 tn-padding-sm tn-radius">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                    <view :class="[`tn-icon-${item.icon}`]"></view>
                  </view>  
                  <view class="tn-color-black tn-text-df tn-text-center tn-margin-top-sm">
                    <text class="tn-text-ellipsis" >{{ item.title }}</text>
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
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-16 tn-color-white" > 
              <view class="tn-icon-wechat-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">合作勾搭</view>
            <view class="tn-margin-left-sm tn-color-cyan tn-icon-link"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-8 tn-color-white"> 
              <view class="tn-icon-message-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">问题反馈</view>
            <view class="tn-margin-left-sm tn-color-blue tn-icon-copy-fill"></view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-6 tn-color-white"> 
              <view class="tn-icon-phone-fill"></view>
            </view>
            <view class="tn-margin-left-sm tn-flex-1">技术支持</view>
            <view class="tn-margin-left-sm tn-color-orangered tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-orange--disabled tn-round">136****0470</view>
          </view>
        </tn-list-cell>
        <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
          <view class="tn-flex tn-flex-col-center">
            <view class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-12 tn-color-white"> 
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
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-home-smile">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/home_tn.png'></image>
        </view>
        <view class="tn-color-gray">首页</view>
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
        <view class="tn-color-gray">福利</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-my">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tnnew.png'></image>
        </view>
        <view class="tn-color-black">我的</view>
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
    name: 'about-demo-3',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
        historyData: [
          {
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
      navTuniaoHome(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/pages/index/index'
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-about{
  }
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
  
  /* 用户头像 start */
  .logo-image{
    width: 120rpx;
    height: 120rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
    overflow: hidden;
    background-color: #FFFFFF;
  }
  
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
      margin-top: -230rpx;
    }
  }
  /* 页面 end*/
  
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
    
    /* 大嘴鸟*/
    .dong {
    	z-index: 9999;
    	position: fixed;
    	top: -40px;
    	right: -80px;
    	transform: scale(0.24);
    	-webkit-transform: scale(0.24);
    	-moz-transform: scale(0.24);
    
    }
    
    .monster {
    	transform: rotate(-50deg);
    	-ms-transform: rotate(-50deg);
    	/* IE 9 */
    	-moz-transform: rotate(-50deg);
    	/* Firefox */
    	-webkit-transform: rotate(-50deg);
    	/* Safari 和 Chrome */
    	-o-transform: rotate(-50deg);
    	/* Opera */
    	display: flex;
    	justify-content: center;
    	position: relative;
    	width: 170px;
    	height: 400px;
    	border-top-left-radius: 200px;
    	border-top-right-radius: 200px;
    	background-color: #3C47D7;
    	box-shadow: 20px 20px 60px #4650E5;
    }
    
    .monster__face {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	flex-direction: column;
    	position: absolute;
    	top: 14%;
    	width: 75%;
    	height: 160px;
    }
    
    .monster__noses {
    	top: 50%;
    	display: flex;
    	justify-content: space-between;
    	width: 28%;
    	height: auto;
    	margin-bottom: 10px;
    }
    
    .monster__nose {
    	width: 8px;
    	height: 12px;
    	border-radius: 20px;
    	background: rgba(0, 0, 0, 0.5);
    	box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
    }
    
    .monster__mouth {
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	position: relative;
    	width: 100%;
    	height: 0%;
    	overflow: hidden;
    	border: 25px solid #FFC333;
    	border-radius: 100px;
    	background-color: #810332;
    	animation: mouth 1.75s infinite;
    	box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
    	box-sizing: border-box;
    }
    
    .monster__mouth::before {
    	content: '';
    	position: absolute;
    	width: 150px;
    	height: 80px;
    	border-radius: 100px;
    	background-color: #400018;
    }
    
    .monster__mouth::after {
    	content: '';
    	position: absolute;
    	bottom: -80px;
    	width: 160px;
    	height: 80px;
    	border-top-left-radius: 50%;
    	border-top-right-radius: 50%;
    	background-color: #DC1B50;
    	animation: tongue 1.75s infinite;
    }
    
    .monster__top {
    	position: absolute;
    	top: -30px;
    	width: 170px;
    	height: 30px;
    	border-bottom-left-radius: 10px;
    	border-bottom-right-radius: 10px;
    	background-color: #ffffff;
    	z-index: 100;
    	animation: t 1.75s infinite;
    }
    
    .monster__bottom {
    	position: absolute;
    	bottom: 0;
    	width: 100px;
    	height: 30px;
    	border-top-left-radius: 10px;
    	border-top-right-radius: 10px;
    	background-color: #ffffff;
    	z-index: 100;
    	animation: b 1.75s infinite;
    }
    
    
    .avatar-eye {
    	position: absolute;
    	top: -10%;
    	width: 65px;
    	height: 65px;
    	background: linear-gradient(105deg, white, #cb87f4);
    	border-radius: 100%;
    	box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
    	margin: 3px;
    	-webkit-transform: translateX(-50%);
    	transform: translateX(-50%);
    }
    
    
    .avatar-eye--green {
    	background: linear-gradient(to bottom, #fdfdfd, #c3efea);
    }
    
    .avatar-eye--violet {
    	background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
    }
    
    
    .eye--left {
    	left: 10%;
    }
    
    .eye--right {
    	left: 85%;
    }
    
    .eye--center {
    	left: 45%;
    	top: 10%;
    }
    
    .avatar-eye-pupil {
    	position: absolute;
    	width: 55%;
    	height: 55%;
    	left: 50%;
    	top: 25%;
    	-webkit-transform: translate(-50%);
    	transform: translate(-50%);
    	z-index: 100;
    	border-radius: 100%;
    }
    
    
    .pupil--green {
    	background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
    }
    
    .pupil--pink {
    	background: linear-gradient(135deg, #f1a183, #8535cd);
    }
    
    
    .avatar-eye-pupil-blackThing {
    	position: absolute;
    	width: 55%;
    	height: 55%;
    	left: 50%;
    	top: 25%;
    	background: #2c2f32;
    	-webkit-transform: translate(-50%);
    	transform: translate(-50%);
    	border-radius: 100%;
    	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    
    .avatar-eye-pupil-lightReflection {
    	position: absolute;
    	width: 7px;
    	height: 7px;
    	left: 25%;
    	top: 10%;
    	background: #ebebeb;
    	-webkit-transform: translate(-50%);
    	transform: translate(-50%);
    	border-radius: 100%;
    	box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
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
