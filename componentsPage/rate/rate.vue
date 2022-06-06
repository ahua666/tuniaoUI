<template>

  <view class="components-rate tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>rate评分</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <tn-rate v-model="value1"></tn-rate>
        <view class="tn-margin-top">
          <tn-rate v-model="value2" :count="8"></tn-rate>
        </view>
        <view class="tn-margin-top">
          <tn-rate v-model="value2" :count="8" :disabled="true"></tn-rate>
        </view>
      </demo-title>
      
      <demo-title title="设置尺寸">
        <tn-rate v-model="value3" :size="24"></tn-rate>
        <view class="tn-margin-top">
          <tn-rate v-model="value4"></tn-rate>
        </view>
        <view class="tn-margin-top">
          <tn-rate v-model="value5" :size="68"></tn-rate>
        </view>
      </demo-title>
      
      <demo-title title="可以选择半星">
        <tn-rate v-model="value6" :size="80" :allowHalf="true"></tn-rate>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-rate v-model="value7" inactiveColor="#E83A30" activeColor="#31E749"></tn-rate>
      </demo-title>
      
      <demo-title title="自定义图标">
        <tn-rate v-model="value8" inactiveIcon="emoji-sad" activeIcon="emoji-good-fill"></tn-rate>
      </demo-title>
      
      <demo-title title="根据选择数量显示不同信息">
        <tn-rate v-model="value9" :colors="colors" :icons="icons"></tn-rate>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsRate',
    components: {demoTitle},
    data() {
      return {
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: 0,
        colors: ['#01BEFF','#3D7EFF','#31C9E8'],
        icons: ['star-fill','praise-fill','flower-fill']
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .components-rate {
    min-height: 100vh;
  }
</style>
