<template>
  <view class="components-load-more tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>加载更多</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="默认">
        <tn-load-more></tn-load-more>
      </demo-title>
      
      <demo-title title="加载中">
        <tn-load-more status="loading" :loadingIcon="false"></tn-load-more>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="loading"></tn-load-more>
        </view>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="loading" loadingIconColor="#01BEFF"></tn-load-more>
        </view>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="loading" loadingIconType="flower"></tn-load-more>
        </view>
      </demo-title>
      
      <demo-title title="没有更多">
        <tn-load-more status="nomore"></tn-load-more>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="nomore" dot></tn-load-more>
        </view>
      </demo-title>
      
      <demo-title title="修改提示语">
        <tn-load-more status="loadmore" :loadText="loadText"></tn-load-more>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="loading" :loadText="loadText"></tn-load-more>
        </view>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="nomore" :loadText="loadText"></tn-load-more>
        </view>
      </demo-title>
      
      <demo-title title="修改颜色">
        <tn-load-more status="loadmore" :loadText="loadText" fontColor="#01BEFF"></tn-load-more>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="loading" :loadText="loadText" fontColor="tn-color-indigo"></tn-load-more>
        </view>
        <view class="tn-margin-top">
          <tn-load-more class="tn-margin-top" status="nomore" :loadText="loadText" fontColor="rgba(255, 129, 129, 0.8)"></tn-load-more>
        </view>
      </demo-title>
      
      <demo-title title="修改字体尺寸">
        <tn-load-more :fontSize="32"></tn-load-more>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'ComponentsLoadMore',
    components: { demoTitle },
    data() {
      return {
        loadText: {
          loadmore: '下拉加载',
          loading: '快速加载中...',
          nomore: '已经没有了啊'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
