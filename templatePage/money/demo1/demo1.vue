<template>
  <view class="template-pay tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}" style="background: linear-gradient(180deg, #D8E5FF, #F9FFF9);">
      <view class="tn-margin">
        <view class="button-vip tn-flex tn-flex-row-between tn-shadow-blur tn-main-gradient-blue">
          <view class="tn-margin-left tn-margin-top-lg">
            <view class="tn-color-white">
              我的余额
            </view>
            <view class="tn-color-white tn-padding-top-sm">
              <text class="" style="margin-left: -6rpx;">￥</text>
              <text class="tn-text-bold" style="font-size: 80rpx;">129.29</text>
            </view>
            <view class="tn-color-white" style="padding-top: 45rpx;opacity: 0.6;">6122 **** **** 60606</view>
          </view>
          <view class="tn-margin-right tn-margin-top-xl tn-color-white">
            <view class="tn-padding-bottom-xs">
              <text class="tn-padding-right-xs" style="opacity: 0.3;">可用本金</text>
              ￥129.00
            </view>
            <view class="tn-padding-bottom-xs">
              <text class="tn-padding-right-xs" style="opacity: 0.3;">赠送金额</text>
              ￥0.29
            </view>
            <view class="tn-padding-bottom-xs">
              <text class="tn-padding-right-xs" style="opacity: 0.3;">冻结金额</text>
              ￥0.00
            </view>
          </view>
          
        </view>
      </view>
    
    </view>

    
    <view class="tn-margin tn-padding-top-xl">
      <view class="tn-bg-gray--light tn-flex" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
        <text class="tn-flex tn-text-lg tn-padding-right-xs tn-color-gray--dark">￥</text>
      	<input placeholder="请输入充值金额" name="input" placeholder-style="color:#AAAAAA" style="width: 100%;"></input>
      </view>
    </view>
    
    <view class="tn-flex tn-flex-col-center tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs">
      <view class="justify-content-item">
        <view class="tn-text-xxl">
          <text class="tn-icon-payment-alipay tn-color-blue--dark"></text>
          <text class="tn-padding-left-sm tn-text-lg">支付宝</text>
        </view>
      </view>
      <view class="justify-content-item tn-text-xl tn-color-green--dark">
        <view class="tn-icon-success-circle"></view>
      </view>
    </view>
    <view class="tn-flex tn-flex-col-center tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs">
      <view class="justify-content-item">
        <view class="tn-text-xxl">
          <text class="tn-icon-payment-wechat tn-color-green--dark"></text>
          <text class="tn-padding-left-sm tn-text-lg">微信支付</text>
        </view>
      </view>
      <view class="justify-content-item tn-text-xl tn-color-grey--disabled">
        <view class="tn-icon-circle"></view>
      </view>
    </view>
    <view class="tn-flex tn-flex-col-center tn-flex-row-between tn-strip-bottom-min tn-padding tn-margin-top-xs">
      <view class="justify-content-item">
        <view class="tn-text-xxl">
          <text class="tn-icon-pay-fill tn-color-aquablue--dark"></text>
          <text class="tn-padding-left-sm tn-text-lg">银行卡支付</text>
        </view>
      </view>
      <view class="justify-content-item tn-text-xl tn-color-grey--disabled">
        <view class="tn-icon-circle"></view>
      </view>
    </view>

    <!-- 悬浮按钮-->
    <view class="tn-flex tn-footerfixed">
      <view class="tn-flex-1 justify-content-item tn-margin tn-text-center">
        <view class="tn-padding-xl">
          <text class="tn-icon-tip tn-padding-right-xs tn-color-gray"></text> 
          <text class="tn-color-gray">点击充值即表示你已同意</text>
          <text class="tn-color-blue--disabled">《充值协议》</text>
        </view>
        <tn-button backgroundColor="tn-main-gradient-aquablue" padding="40rpx 0" width="100%" shadow>
          <text class="tn-color-white">立 即 充 值</text>
        </tn-button>
      </view>
    </view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplatePay',
    mixins: [template_page_mixin],
    data(){
      return {
      }
    },
    methods: {
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
    }
  }
</script>

<style lang="scss" scoped>
  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1000rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.5);
    color: #FFFFFF;
    font-size: 18px;
    
    .icon {
      display: block;
      flex: 1;
      margin: auto;
      text-align: center;
    }
    
    &:before {
      content: " ";
      width: 1rpx;
      height: 110%;
      position: absolute;
      top: 22.5%;
      left: 0;
      right: 0;
      margin: auto;
      transform: scale(0.5);
      transform-origin: 0 0;
      pointer-events: none;
      box-sizing: border-box;
      opacity: 0.7;
      background-color: #FFFFFF;
    }
  }
  
  
  /* 底部悬浮按钮 start*/
  .tn-tabbar-height {
  	min-height: 100rpx;
  	height: calc(120rpx + env(safe-area-inset-bottom) / 2);
  }
  .tn-footerfixed {
    position: fixed;
    width: 100%;
    bottom: calc(60rpx + env(safe-area-inset-bottom));
    z-index: 1024;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
    
  }
  /* 底部悬浮按钮 end*/
  
  /* 卡 */
  .button-vip {
    width: 100%;
    height: 300rpx;
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
      background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg4.png);
    }    
  }
  
  
  /* 间隔线 start*/
  .tn-strip-bottom-min {
    width: 100%;
    border-bottom: 1rpx solid #F8F9FB;
  }
  
  .tn-strip-bottom {
   width: 100%;
   border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }
   /* 间隔线 end*/

</style>
