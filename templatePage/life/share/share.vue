<template>
  <view class="">
    <web-view src="https://mp.weixin.qq.com/s/1apBuGcPQXMfz2osv5wwiQ"></web-view>
  </view>
</template>

<!-- <template>
  <view class="template-course">
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="bottom-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/animate/activity.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>    

    <nav-index-button></nav-index-button>
    
  </view>
</template> -->

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
/*  @import '@/static/css/templatePage/custom_nav_bar.scss';
    .bottom-backgroup {
      height: 700rpx;
      z-index: -1;
    
      .backgroud-image {
        border-radius: 60rpx 60rpx 0 0;
        width: 100%;
        height: 4100rpx;
      }
    } */
</style>
