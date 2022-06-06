<template>

  <view class="components-count_down tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>countdown倒计时</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <tn-count-down :timestamp="3600"></tn-count-down>
      </demo-title>
      
      <demo-title title="显示边框">
        <tn-count-down :timestamp="3600" :showBorder="true"></tn-count-down>
      </demo-title>
      
      <demo-title title="中文分割时间">
        <tn-count-down :timestamp="3600" separator="cn"></tn-count-down>
      </demo-title>
      
      <demo-title title="天数为零时不隐藏">
        <tn-count-down :timestamp="3600" :hideZeroDay="true"></tn-count-down>
      </demo-title>
      
      <demo-title title="显示天">
        <tn-count-down :timestamp="360000" :showDays="true" :showHours="false" :showMinutes="false" :showSeconds="false"></tn-count-down>
      </demo-title>
      
      <demo-title title="显示天时">
        <tn-count-down :timestamp="360000" :showDays="true" :showHours="true" :showMinutes="false" :showSeconds="false"></tn-count-down>
      </demo-title>
      
      <demo-title title="显示天时分">
        <tn-count-down :timestamp="360000" :showDays="true" :showHours="true" :showMinutes="true" :showSeconds="false"></tn-count-down>
      </demo-title>
      
      <demo-title title="显示天时分秒">
        <tn-count-down :timestamp="360000" :showDays="true" :showHours="true" :showMinutes="true" :showSeconds="true"></tn-count-down>
      </demo-title>
      
      <demo-title title="自定义尺寸">
        <tn-count-down :timestamp="3600" :fontSize="60" :separatorSize="60"></tn-count-down>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-count-down :timestamp="3600" backgroundColor="tn-main-gradient-indigo" fontColor="#FFFFFF"></tn-count-down>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsCountDown',
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
  .components-count_down {
    min-height: 100vh;
  }
</style>
