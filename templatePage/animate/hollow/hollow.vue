<template>
  <view class="template-hollow">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px;margin-top:250rpx'}">
      <view class="tn-flex tn-flex-row-between tn-margin-xl">
        <view class="justify-content-item" style="margin-top: 50rpx;">
          <view class="tn-radius tn-margin-bottom-xl">
            <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg')">
              <view class="image-hollow">
              </view>
            </view>
            <view class="tn-text-center tn-text-bold tn-padding-top-xs">Jaylen</view>
          </view>
          <view class="tn-radius tn-margin-bottom">
            <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg')">
              <view class="image-hollow">
              </view>
            </view>
            <view class="tn-text-center tn-text-bold tn-padding-top-xs">浅浅遇</view>
          </view>
        </view>
        <view class="justify-content-item">
          <view class="tn-radius tn-margin-bottom-xl">
            <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg')">
              <view class="image-hollow">
              </view>
            </view>
            <view class="tn-text-center tn-text-bold tn-padding-top-xs">可我会像</view>
          </view>
          <view class="tn-radius tn-margin-bottom">
            <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg')">
              <view class="image-hollow">
              </view>
            </view>
            <view class="tn-text-center tn-text-bold tn-padding-top-xs">北北同学</view>
          </view>
        </view>
        <view class="justify-content-item" style="margin-top: 50rpx;">
          <view class="tn-radius tn-margin-bottom-xl">
            <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg')">
              <view class="image-hollow">
              </view>
            </view>
            <view class="tn-text-center tn-text-bold tn-padding-top-xs">福哥</view>
          </view>
          <view class="tn-radius tn-margin-bottom">
            <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg')">
              <view class="image-hollow">
              </view>
            </view>
            <view class="tn-text-center tn-text-bold tn-padding-top-xs">锋哥</view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="bottom-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/animate/hollow.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>
    <view class="hollow">
      <view class="tn-text-xxl">
        <text class="">Hi，图鸟的小伙伴</text>
      </view>
      <view class="tn-text-xl tn-padding-top">
        技术的友情，有你真好
      </view>  
      <view class="tn-text-xl tn-padding-top">
        TnUI，感谢一路陪伴与支持
      </view>
    </view>
    
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateHollow',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  /* 背景图 start */
  .bottom-backgroup {
    height: 700rpx;
    z-index: -1;
  
    .backgroud-image {
      border-radius: 60rpx 60rpx 0 0;
      width: 100%;
      height: 3373rpx;
      // z-index: -1;
    }
  }
  /* 背景图 end */
    
  /* 镂空 start*/
    .hollow {
      position: fixed;
      text-align: center;
      width: 87%;
      padding: 30rpx;
      margin: 0 6.5%;
      top: 180rpx;
      font-weight: bold;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      color: #000;
      border-radius: 20rpx;
      /* overlay; difference;lighten;hue;这些都是参数值，但东东觉得lighten好看点*/
      mix-blend-mode: lighten;
    }
    /* 效果布局 start*/
  .image-hollow{
    width: 200rpx;
    height: 400rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    height: 100%;
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }

</style>
