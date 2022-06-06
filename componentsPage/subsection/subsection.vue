<template>
  <view class="components-subsection tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>分段器</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <tn-subsection :list="list"></tn-subsection>
      </demo-title>
      
      <demo-title title="按钮模式">
        <tn-subsection :list="list" mode="button"></tn-subsection>
        <view class="tn-margin-top">
          <tn-subsection :list="list" mode="button" :borderRadius="50"></tn-subsection>
        </view>
      </demo-title>
      
      <demo-title title="取消切换动画">
        <tn-subsection :list="list" :animation="false"></tn-subsection>
      </demo-title>
      
      <demo-title title="贝塞尔曲线切换动画">
        <tn-subsection :list="list" animationType="cubic-bezier"></tn-subsection>
        <view class="tn-margin-top">
          <tn-subsection :list="list" mode="button" :borderRadius="50" animationType="cubic-bezier"></tn-subsection>
        </view>
      </demo-title>
      
      <demo-title title="选中字体设置为粗体">
        <tn-subsection :list="list" :bold="true"></tn-subsection>
      </demo-title>
      
      <demo-title title="自定义样式">
        <tn-subsection :list="list" :height="40" :fontSize="20"></tn-subsection>
        <view class="tn-margin-top">
          <tn-subsection :list="list" mode="button" :borderRadius="50" backgroundColor="tn-cool-bg-color-9" buttonColor="tn-cool-bg-color-7" inactiveColor="#FFFFFF" activeColor="#27A1BA"></tn-subsection>
        </view>
        <view class="tn-margin-top">
          <tn-subsection :list="list" :borderRadius="50" backgroundColor="#FFFFFF" buttonColor="#E83A30" inactiveColor="#838383"></tn-subsection>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'ComponentsSubsection',
    components: { demoTitle },
    data() {
      return {
        list: ['全部','未付款','待发货','待收货','待评价']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
