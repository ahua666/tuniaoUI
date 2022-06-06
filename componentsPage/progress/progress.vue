<template>

  <view class="components-progress tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Progress进度条</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本进度条">
        <tn-line-progress :percent="30"></tn-line-progress>
        <view class="tn-margin-top">
          <tn-line-progress :percent="50"></tn-line-progress>
        </view>
        <view class="tn-margin-top">
          <tn-line-progress :percent="80"></tn-line-progress>
        </view>
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap tn-margin-top">
          <view>
            <tn-circle-progress :percent="30"></tn-circle-progress>
          </view>
          <view class="tn-margin-left">
            <tn-circle-progress :percent="50"></tn-circle-progress>
          </view>
          <view class="tn-margin-left">
            <tn-circle-progress :percent="80"></tn-circle-progress>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="修改进度条颜色">
        <tn-line-progress :percent="50" activeColor="#2DE88D"></tn-line-progress>
        <view class="tn-margin-top">
          <tn-line-progress :percent="50" activeColor="#31E749" inactiveColor="#FAD8D6"></tn-line-progress>
        </view>
      </demo-title>
      
      <demo-title title="显示条纹">
        <tn-line-progress :percent="50" :striped="true"></tn-line-progress>
        <view class="tn-margin-top">
          <tn-line-progress :percent="50" :striped="true" :stripedAnimation="false"></tn-line-progress>
        </view>
      </demo-title>
      
      <demo-title title="显示进度信息">
        <tn-line-progress :percent="50" :showPercent="true"></tn-line-progress>
        <view class="tn-margin-top">
          <tn-line-progress :percent="50">
            <view class="tn-color-white">加载中</view>
          </tn-line-progress>
        </view>
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap tn-margin-top">
          <view>
            <tn-circle-progress :percent="50" :showPercent="true"></tn-circle-progress>
          </view>
          <view class="tn-margin-left">
            <tn-circle-progress :percent="50">
              <view class="tn-color-red">加载中</view>
            </tn-circle-progress>
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
    name: 'componentsProgress',
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
  
  .components-progress {
    min-height: 100vh;
  }
  
  tn-line-progress, .tn-line-progress {
    width: 100%;
  }
</style>
