<template>
  <view class="template-course">
    <!-- 顶部自定义导航 -->
    <!-- <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    <view class="bottom-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/animate/activity.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>    

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
    components: { NavIndexButton },
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
        height: 4100rpx;
        // z-index: -1;
      }
    }
    /* 背景图 end */
</style>
