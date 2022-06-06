<template>

  <view class="components-loading tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Loading加载动画</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="样式">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="tn-margin-right">
            <tn-loading show="show"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" mode="flower"></tn-loading>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="大小">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="tn-margin-right">
            <tn-loading show="show"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" :size="50"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" :size="80"></tn-loading>
          </view>
        </view>
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-margin-top">
          <view class="tn-margin-right">
            <tn-loading show="show" mode="flower"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" mode="flower" :size="50"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" mode="flower" :size="80"></tn-loading>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="颜色">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view class="tn-margin-right">
            <tn-loading show="show"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" color="#01BEFF"></tn-loading>
          </view>
          <view class="tn-margin-right">
            <tn-loading show="show" color="#E83A30"></tn-loading>
          </view>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsLoading',
    components: {demoTitle},
    data() {
      return {
        show: true,
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
</style>
