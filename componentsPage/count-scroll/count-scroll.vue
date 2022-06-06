<template>

  <view class="components-count_scroll tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>countScroll数字滚动</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-count-scroll :value="888.88"></tn-count-scroll>
          </view>
          <view class="tn-margin-left">
            <tn-count-scroll :value="9999"></tn-count-scroll>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="加长持续时间">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-count-scroll :value="888.88" :duration="0.5"></tn-count-scroll>
          </view>
          <view class="tn-margin-left">
            <tn-count-scroll :value="9999" :duration="3"></tn-count-scroll>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="字体加大加粗">
        <tn-count-scroll :value="888.88" :height="100" :fontSize="100" :bold="true"></tn-count-scroll>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-count-scroll :value="888.88" fontColor="#E88C30"></tn-count-scroll>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsCountTo',
    components: {demoTitle},
    data() {
      return {
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
  .components-count_scroll {
    min-height: 100vh;
  }
</style>
