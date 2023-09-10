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
    
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="tn-margin">
        <view class="button-vip tn-flex tn-flex-row-between tn-shadow-blur tn-main-gradient-aquablue">
          <view class="tn-margin-left tn-margin-top-lg">
            <view class="tn-color-white tn-padding-top tn-text-center">
              <text class="tn-icon-rabbit tn-padding-right-sm" style="font-size: 80rpx;margin-left: -10rpx;"></text>
              <text class="tn-text-bold" style="font-size: 80rpx;">12,929</text>
            </view>
            <view class="tn-color-white tn-text-sm" style="padding-top: 65rpx;opacity: 0.6;">充值金额，可用于购买礼物与特权</view>
          </view>
        </view>
      </view>
    
    </view>
    
    <view class="tn-margin tn-padding-top tn-color-white tn-text-lg tn-text-bold">
      选择充值金额
    </view>
    
    <view class="tn-flex tn-flex-col-center tn-flex-wrap tn-color-white tn-margin-sm">
      <view class="tn-padding-sm tn-text-center tag-select-no">
        <view class="tn-text-xl tn-padding-top-sm">
          <text class="tn-icon-rabbit tn-padding-right-sm" style="margin-left: -10rpx;"></text>
          <text class="tn-text-bold">56</text>
        </view>
        <view class="tn-padding-top-xs" style="color: #888CA0;">
          ￥8.00
        </view>
      </view>
      <view class="tn-padding-sm tn-text-center tag-select">
        <view class="tn-text-xl tn-padding-top-sm">
          <text class="tn-icon-rabbit tn-padding-right-sm" style="margin-left: -10rpx;"></text>
          <text class="tn-text-bold">118</text>
        </view>
        <view class="tn-padding-top-xs" style="color: #888CA0;">
          ￥16.00
        </view>
      </view>
      <view class="tn-padding-sm tn-text-center tag-select-no">
        <view class="tn-text-xl tn-padding-top-sm">
          <text class="tn-icon-rabbit tn-padding-right-sm" style="margin-left: -10rpx;"></text>
          <text class="tn-text-bold">228</text>
        </view>
        <view class="tn-padding-top-xs" style="color: #888CA0;">
          ￥30.00
        </view>
      </view>
      <view class="tn-padding-sm tn-text-center tag-select-no">
        <view class="tn-text-xl tn-padding-top-sm">
          <text class="tn-icon-rabbit tn-padding-right-sm" style="margin-left: -10rpx;"></text>
          <text class="tn-text-bold">428</text>
        </view>
        <view class="tn-padding-top-xs" style="color: #888CA0;">
          ￥50.00
        </view>
      </view>
      <view class="tn-padding-sm tn-text-center tag-select-no">
        <view class="tn-text-xl tn-padding-top-sm">
          <text class="tn-icon-rabbit tn-padding-right-sm" style="margin-left: -10rpx;"></text>
          <text class="tn-text-bold">1488</text>
        </view>
        <view class="tn-padding-top-xs" style="color: #888CA0;">
          ￥168.00
        </view>
      </view>
      
    </view>


    <view class="tn-margin tn-padding-top tn-color-white tn-text-lg tn-text-bold">
      或输入充值金额
    </view>
    
    <view class="tn-margin tn-padding-top-xs">
      <view class="tn-flex" style="border-radius: 10rpx;padding: 20rpx 30rpx;background-color: #FFFFFF30;">
        <text class="tn-flex tn-text-lg tn-padding-right-xs tn-color-white">￥</text>
      	<input placeholder="请输入充值金额" name="input" placeholder-style="color:#AAAAAA" style="width: 100%;color: #FFFFFF;"></input>
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
        <tn-button backgroundColor="#4327DF" padding="40rpx 0" shape="round" width="80%">
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
  
  .template-pay{
    height: 100vh;
    background-color: #161324;
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
  
  .tag-select{
    width: 31%;
    border: 4rpx solid #4327DF;
    margin: 8rpx 1%;
    border-radius: 20rpx;
    background-color: #211E2F50;
  }
  .tag-select-no{
    width: 31%;
    border: 4rpx solid #211E2F;
    margin: 8rpx 1%;
    border-radius: 20rpx;
    background-color: #211E2F;
  }
  
</style>
