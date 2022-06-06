<template>

  <view class="components-count_to tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>countTo数字跳转</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-count-to :startVal="0" :endVal="1000"></tn-count-to>
          </view>
          <view class="tn-margin-left">
            <tn-count-to :startVal="100" :endVal="2000"></tn-count-to>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="显示小数">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-count-to :startVal="0" :endVal="1000.9" :decimals="1"></tn-count-to>
          </view>
          <view class="tn-margin-left">
            <tn-count-to :startVal="0" :endVal="1000.99" :decimals="2"></tn-count-to>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="字体加大加粗显示">
        <tn-count-to :startVal="0" :endVal="1000" :bold="true" :fontSize="100"></tn-count-to>
      </demo-title>
      
      <demo-title title="自定义字体颜色">
        <tn-count-to :startVal="0" :endVal="1000" fontColor="#A4E82F"></tn-count-to>
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
  .components-count_to {
    min-height: 100vh;
  }
</style>
