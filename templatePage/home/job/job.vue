<template>
  <view class="template-job tn-safe-area-inset-bottom">
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
            <view class="custom-nav__search__text tn-padding-left-xs">好想搜点什么</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    
    <view class="tn-margin-top" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <tn-swiper :list="banner" :height="350" :effect3d="true" mode="round"></tn-swiper>
    </view>
    
    <!-- 数据信息 -->
    <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin">
      <block v-for="(item, index) in tuniaoData" :key="index">
        <view class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between job-shadow">
          <view class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
            <view class="tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center tn-color-white" :class="[`tn-bg-${item.color}`]">
              <view :class="[`tn-icon-${item.icon}`]"></view>
            </view>
            <view class="tn-info__item__left__content">
              <view class="tn-info__item__left__content--title">{{ item.title }}</view>
              <view class="tn-info__item__left__content--data tn-padding-top-xs">{{ item.value }}</view>
            </view>
          </view>
          <view class="tn-info__item__right">
            <view class="tn-info__item__right--icon">
              <view class="tn-icon-right"></view>
            </view>
          </view>
        </view>
      </block>
    </view>
    
    <!-- 方式16 start-->
    <view class="tn-flex tn-flex-wrap tn-margin job-shadow">
      <block v-for="(item, index) in icons" :key="index">
        <view class=" " style="width: 25%;">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center  tn-padding-xl">
            <view class="icon16__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
              <view class="tn-cool-color-icon16" :class="[$tn.color.getRandomCoolBgClass(index) + ' tn-icon-' + item.icon]"></view>
            </view>  
            <view class="tn-color-black tn-text-lg tn-text-center">
              <text class="tn-text-ellipsis">{{item.title}}</text>
            </view>
          </view>
        </view>
      </block>
    </view>
    <!-- 方式16 end-->
    
    <!-- 底部tabbar start-->
    <view class="tabbar footerfixed">
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-level">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/job-home.png'></image>
        </view>
        <view class="tn-color-black">职位</view>
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-level">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/job-honor.png'></image>
        </view>
        <view class="tn-color-black">简历</view>
      </view>
      <view class="action">
        <view class="bar-circle tn-shadow-blur">
          <view class="tn-icon-message-fill tn-color-white">
          </view>
          <!-- <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'></image> -->
        </view>
        <!-- <view class="tn-color-gray">发布</view> -->
      </view>
      <view class="action">
        <view class="bar-icon">
          <!-- <view class="tn-icon-level">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/job-up.png'></image>
        </view>
        <view class="tn-color-black">提升</view>
      </view>
      <view class="action">
        <view class="bar-icon">
         <!-- <view class="tn-icon-signpost tn-color-gray--dark">
          </view> -->
          <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/job-my.png'></image>
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
    name: 'TemplateJob',
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
            title: '职位推荐',
            icon: 'praise',
            color: 'purplered',
            value: '32'
          },
          {
            title: '课程专区',
            icon: 'discover',
            color: 'green',
            value: '65'
          },
          {
            title: '精选专题',
            icon: 'topics',
            color: 'orange',
            value: '26'
          },
          {
            title: '在线简历',
            icon: 'honor',
            color: 'indigo',
            value: '6'
          }
        ],
        icons: [
          {
            icon: "shop",
            title: "电商",
          },
          {
            icon: "video",
            title: "直播",
          },
          {
            icon: "company",
            title: "建筑",
          },
          {
            icon: "computer",
            title: "互联网",
          },
          {
            icon: "focus",
            title: "猎头",
          },
          {
            icon: "sing",
            title: "音乐",
          },
          {
            icon: "code",
            title: "软件开发",
          },
          {
            icon: "medical",
            title: "医疗",
          },
          {
            icon: "biology",
            title: "生物",
          },
          {
            icon: "pharmacy",
            title: "制药",
          },
          {
            icon: "chemistry",
            title: "化学",
          },
          {
            icon: "creative",
            title: "教师",
          },
          {
            icon: "gloves",
            title: "行政文秘",
          },
          {
            icon: "caring",
            title: "通信技术",
          },
          {
            icon: "refund",
            title: "外贸",
          },
          {
            icon: "level",
            title: "土木",
          },
          {
            icon: "deploy",
            title: "机械",
          },
          {
            icon: "server",
            title: "电气",
          },
          {
            icon: "hardware",
            title: "电子",
          },
          {
            icon: "group-circle",
            title: "化工",
          },
          {
            icon: "cube",
            title: "材料",
          },
          {
            icon: "safe",
            title: "保险",
          },
          {
            icon: "coupon",
            title: "证券",
          },
          {
            icon: "funds",
            title: "银行",
          },
          {
            icon: "map",
            title: "会展",
          },
          {
            icon: "service",
            title: "客服",
          },
          {
            icon: "trophy",
            title: "销售",
          },
          {
            icon: "image-text",
            title: "编辑运营",
          },
          {
            icon: "brand",
            title: "投行",
          },
          {
            icon: "trusty",
            title: "法务",
          },
          {
            icon: "comment",
            title: "咨询",
          },
          {
            icon: "logistics",
            title: "快递物流",
          },
          {
            icon: "moon",
            title: "艺术设计",
          },
          {
            icon: "bankcard",
            title: "财务",
          },
          {
            icon: "trust",
            title: "人力",
          },
          {
            icon: "flag",
            title: "市场营销",
          },
          {
            icon: "signpost",
            title: "其他",
          }
          

        ],
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-job{
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
    

  /* 信息展示 start */
  .tn-info {
    
    &__container {
      margin-top: 40rpx;
    }
    
    &__item {
      width: 48%;
      margin: 15rpx 0rpx;
      padding: 38rpx 28rpx;
      border-radius: 10rpx;
      
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg3.png);
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
          font-size: 30rpx;
          opacity: 0.5;
        }
      }
    }
  }
  .job-shadow{
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
      border-radius: 20rpx;
  }
  /* 信息展示 end */
  
  /* 图标容器16 start */
  .tn-cool-color-icon16{
    // background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);   16
    // background-image: linear-gradient(135deg, #ED1C24, #FECE12);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
    .icon16 {
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
          font-size: 70rpx;
          border-radius: 50%;
          margin-bottom: 18rpx;
          position: relative;
          z-index: 1;
        }
      }
    }
  /* 图标容器16 end */
  
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
  	background-color: #E72F8C;
    width: 90rpx !important;
    height: 90rpx !important;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(231, 47, 140, 0.5);
  }
  
  .tabbar .action .bar-circle image {
    width: 60rpx;
  	height: 60rpx;
  	display: inline-block;
    margin: 15rpx auto 15rpx;
  }
</style>
