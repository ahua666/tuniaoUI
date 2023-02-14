<template>
  <view class="vip tn-safe-area-inset-bottom">
    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/index_bg/tools_new.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>
    
    <swiper class="card-swiper" :circular="true"
      :autoplay="false" duration="500" interval="180000" previous-margin="170rpx" next-margin="170rpx" @change="cardSwiper"  style="margin-top: -280rpx;"> 
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <!-- <view class="swiper-item image-banner">
          <image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
        </view> -->
        <!-- <view class="swiper-item image-banner" :style="'background-image:url('+ item.url + ');width: 230rpx;height: 100%;background-size:100% 100%;'">
        </view> -->
        
        <view class="tnphone-white-min swiper-item  wow fadeInLeft2" @click="navTuniaoMoban">
        	<view class="skin wow fadeInRight2">
        	  <view class="screen wow fadeInUp2">
        		  <!-- <view class="head">
        			  <text>{{item.name}}</text>
        		  </view> -->
        		  <view class="peak wow">
        			  <view class="sound"></view>
        			  <view class="lens"></view>
        		  </view>
        		  <!-- <view class="area-l">
        			  <view class="">
                  <text class="tn-icon-all"></text>
                  <text class="tn-icon-wifi tn-padding-left-xs"></text>
        			  </view>
        		  </view>
        		  <view class="area-r">
        			  <view class="">
                  <text class="tn-icon-light"></text>
                  <text class="tn-icon-time tn-padding-left-xs"></text>
                </view>
        		  </view> -->
              <!-- <view class="talk"></view> -->
              
              <view class="image-banner">
                <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
              </view>
        
        		</view>
        	</view>
        </view>
      </swiper-item>
    </swiper>
    
    <!-- 方式4 start-->
    <view class="tn-flex tn-padding-bottom-sm">
      <view class="tn-flex-1 tn-padding-sm tn-radius" @click="navTuniaoVUE3">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon4__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-level-fill tn-cool-color-icon4 tn-cool-bg-color-5"></view>
          </view>  
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">图鸟VUE3</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-radius" @click="navTuniaoMoban">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon4__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-discover-planet-fill tn-cool-color-icon4 tn-cool-bg-color-8"></view>
          </view>  
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">圈子博客</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-radius" @click="navBusiness">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon4__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-identity-fill tn-cool-color-icon4 tn-cool-bg-color-15"></view>
          </view>  
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">简约商圈</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-radius" @click="navXiongJie">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon4__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
            <view class="tn-icon-image-fill tn-cool-color-icon4 tn-cool-bg-color-3"></view>
          </view>  
          <view class="tn-color-gray--dark tn-text-center">
            <text class="tn-text-ellipsis">凶姐壁纸</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 方式4 end-->
    
    
    <!-- banner start-->
    <view class="tn-flex tn-flex-wrap tn-padding-xs" @click="navTuniaoMoban">
      <view class="" style="width: 100%;">
        <view class="image-piccapsule tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/capsule-banner/banner-circle2.png');">
           <view class="image-capsule">
           </view>
         </view>  
      </view>  
    </view>
    <!-- banner end-->

    
    <block v-for="(item, index) in navList" :key="index">
      <view class="nav_title--wrap tn-margin-bottom-sm">
        <view class="nav_title tn-cool-bg-color-15">{{ item.title | titleFilter}}</view>
      </view>
      
      <view class='nav-list'>
        <block v-for="(content_item, content_index) in item.list" :key="content_index">
          <navigator
            open-type="navigate"
            hover-class='none'
            :url="content_item.url"
            class="nav-list-item tn-shadow-blur tn-cool-bg-image"
            :class="[
              getRandomCoolBg(content_index)
            ]"
          >
            <view class="nav-link">
              <view class='title'>{{ content_item.title }}</view>
              <view class='author'> <text class="tn-icon-code tn-padding-right-xs"></text> {{ content_item.author }}</view>
            </view>
            <!-- <view class="icon">
              <view :class="['tn-icon-' + content_item.icon]"></view>
            </view> -->
          </navigator>
        </block>
      </view>
    </block>
    
    <view class="tn-padding-xl tn-text-center tn-color-gray">
      <view class="tn-padding-bottom-sm" @click="navPlus">
        关于图鸟会员
        <text class="tn-icon-rocket tn-padding-left-xs"></text>
      </view>
    </view>
    
    
  </view>
</template>

<script>
  import vipListData from '@/mock/vip_page.js'
  
  export default {
    name: 'Vip',
    filters: {
      titleFilter(value) {
        if (value.length === 0) {
          return ''
        }
        let newString = ''
        for (let i = 0; i < value.length; i++) {
          if (i !== 0) {
            newString += ' / '
          }
          newString += value[i]
        }
        return newString
      }
    },
    data() {
      return {
        cardCur: 0,
        swiperList: [{
          id: 0,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle1.jpg',
        }, {
          id: 1,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle2.jpg',
        }, {
          id: 2,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle3.jpg',
        }, {
          id: 3,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle4.jpg',
        },{
          id: 4,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle5.jpg',
        },{
          id: 5,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle6.jpg',
        },{
          id: 6,
          type: 'image',
          url: 'https://tnuiimage.tnkjapp.com/index_bg/circle7.jpg',
        }
        ],
        // nav菜单列表
        navList: vipListData.data
      }
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      getRandomCoolBg() {
        return this.$tn.color.getRandomCoolBgClass()
      },
      // 跳转到图鸟VUE3
      navTuniaoVUE3(e) {
        wx.vibrateLong();
        uni.navigateToMiniProgram({
          appId: 'wxd4296f570b8b39c9'
        })
      },
      // 跳转到图鸟模板
      navTuniaoMoban(e) {
        wx.vibrateLong();
        uni.navigateToMiniProgram({
          appId: 'wx13c0ed55c12d2afb'
        })
      },
      // 跳转到关于作者
      navSaitolia(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/templatePage/life/plus/plus'
        })
      },
      // 跳转到图鸟模板2
      navBusiness(e) {
        wx.vibrateLong();
        uni.navigateToMiniProgram({
          appId: 'wx9056aabd1c0c6a8a'
        })
      },
      // 跳转到图鸟模板3
      navXiongJie(e) {
        wx.vibrateLong();
        uni.navigateToMiniProgram({
          appId: 'wx76bb942a2810e8e5'
        })
      },
      
      // 跳转到会员协议
      navPlus() {
        uni.navigateTo({
          url: '/templatePage/life/plus/plus'
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  /* 顶部背景图 start */
  .top-backgroup {
    height: 350rpx;
    z-index: -1;
  
    .backgroud-image {
      width: 100%;
      height: 667rpx;
    }
  }
  /* 顶部背景图 end */
  
  /* 轮播 start */
/* .tnphone-white-min 细边框*/
  .tnphone-white-min {width: 380rpx; height: 800rpx; border-radius: 40rpx; background: #E9E5F3; padding: 7rpx; display: table; color: #333;
  	box-sizing: border-box; box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0,0,0,0.15); margin: 70rpx auto; cursor: default; position: relative}
  .tnphone-white-min .skin {width: 100%; height: 100%; border-radius: 40rpx; background: #E9E5F3; padding: 10rpx;}
  .tnphone-white-min .screen {width: 100%; height: 100%; border-radius: 30rpx; background: #E9E5F3; position: relative; overflow: hidden}
  .tnphone-white-min .head {width: 100%; height: 90rpx; text-align: center; position: absolute; padding: 45rpx 15rpx 10rpx 15rpx;}
  .tnphone-white-min .peak {left: 22%;width: 56%; height: 27rpx; margin: -2rpx auto 0rpx; border-radius: 0 0 20rpx 20rpx; background: #E9E5F3; position: absolute}
  .tnphone-white-min .sound {width: 48rpx; height: 6rpx; border-radius: 15rpx; background: #555; position: absolute; left: 50%; top: 50%; margin-left: -24rpx; margin-top: -10rpx;
  	box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset}
  .tnphone-white-min .lens {width: 6rpx; height: 6rpx; border-radius: 50%; background: #2c5487; position: absolute; left: 50%; top: 50%; margin-left: 34rpx; margin-top: -10rpx}
  .tnphone-white-min .talk {width: 50%; height: 6rpx; border-radius: 15rpx; background: rgba(0,0,0,.3); position: absolute; bottom: 8rpx; left: 50%; margin-left: -25%}
  .tnphone-white-min .area-l,.tnphone-white-min .area-r {width: 70rpx; height: 16rpx; position: absolute; top: 6rpx}
  .tnphone-white-min .area-l {left: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-left: 20rpx;}
  .tnphone-white-min .area-r {right: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-right: 20rpx;}
  .tnphone-white-min .fa-feed {float: left; font-size: 12rpx!important; transform:rotate(-45deg); margin-top: 4rpx; margin-right: 8rpx}
  .tnphone-white-min .fa-battery-full {float: left; font-size: 12rpx!important; margin-top: 6rpx}
  .tnphone-white-min .fa-chevron-left {float: left; margin-top: 4rpx}
  .tnphone-white-min .fa-cog {float: right; margin-top: 4rpx}
  .tnphone-white-min .btn01 {width: 3rpx; height: 28rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 105rpx; left: -3rpx}
  .tnphone-white-min .btn02 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 160rpx; left: -3rpx}
  .tnphone-white-min .btn03 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 230rpx; left: -3rpx}
  .tnphone-white-min .btn04 {width: 3rpx; height: 86rpx; border-radius: 0 3rpx 3rpx 0; background: #222; position: absolute; top: 180rpx; right: -3rpx}

  
  /* 轮播样机样式 start*/
  .card-swiper {
    height: 830rpx !important;
  }
  
  .card-swiper swiper-item {
    width: 260rpx !important;
    // left: 170rpx;
    // width: 380rpx !important;
    box-sizing: border-box;
    padding: 0rpx 15rpx 90rpx 15rpx;
    overflow: initial;
  }
  
  .card-swiper swiper-item .swiper-item {
    display: block;
    transform: scale(0.45);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
  
  .card-swiper swiper-item.cur .swiper-item {
    transform: scale(0.65);
    transition: all 0.2s ease-in 0s;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 770rpx;
    // border: 1rpx solid red;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #000;
    opacity: 0;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    margin: 0 8rpx !important;
    top: -80rpx;
    position: relative;
  }
  
  .spot.active{
    opacity: 0;
    width: 30rpx;
    background-color: #000;
  }
  
  /* 轮播 end */
  
  /* 图标容器4 start */
    .tn-cool-color-icon4{
      // background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);   16
      // background-image: linear-gradient(135deg, #ED1C24, #FECE12);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
    }
    .icon4 {
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
          width: 110rpx;
          height: 110rpx;
          font-size: 55rpx;
          border-radius: 50%;
          margin-bottom: 18rpx;
          position: relative;
          z-index: 1;
          box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
            0px -8px 40px rgba(255, 255, 255, 1),
            inset 0px -10px 10px rgba(70,23,129, 0.05),
            inset 0px 10px 20px rgba(255, 255, 255, 1);
        }
      }
    }
  
  /* 标题start */
  .nav_title {
    -webkit-background-clip: text;
    color: transparent;
    
    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      font-size: 46rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
      background-size: cover;
    }
  }
  /* 标题end */
  
  /* 组件导航列表 start*/
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0rpx 12rpx 0rpx;
    justify-content: space-between;
    
    /* 列表元素 start */
    .nav-list-item {
      padding: 35rpx 30rpx 5rpx 30rpx;
      border-radius: 12rpx;
      width: 45%;
      margin: 0 18rpx 40rpx;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 99;
      
      
      
      /* 元素标题 start */
      .nav-link {
        font-size: 32rpx;
        text-transform: capitalize;
        padding: 0 0 10rpx 0;
        position: relative;
        
        .title {
          font-weight: bold;
          font-size: 36rpx;
          color: #FFFFFF;
          margin-top: 30rpx;
          text-align: center;
        }
        .author {
          font-size: 25rpx;
          color: #FFFFFF;
          margin-top: 50rpx;
          margin-left: -10rpx;
          text-align: center;
        }
      }
      /* 元素标题 end */
      
      /* 元素图标 start */
      .icon {
        font-variant: small-caps;
        position: absolute;
        top: 20rpx;
        right: 50rpx;
        left: 37%;
        width: 90rpx;
        height: 90rpx;
        line-height: 90rpx;
        margin: 0;
        padding: 0;
        display: inline-flex;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        font-size: 50rpx;
        color: #FFFFFF;
        white-space: nowrap;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.05);
        background-size: cover;
        background-position: 50%;
        border-radius: 5000rpx;
      }
      /* 元素图标 end */
    }
    /* 列表元素 end */
  }
  /* 组件导航列表 end*/
  
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
