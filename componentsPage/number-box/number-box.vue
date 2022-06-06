<template>

  <view class="components-number_box tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>numberBox步进输入</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-number-box v-model="value1"></tn-number-box>
          </view>
          <view class="tn-margin-left">
            <tn-number-box v-model="value1" :disabled="true"></tn-number-box>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="设置步进值">
        <tn-number-box v-model="value2" :step="2"></tn-number-box>
      </demo-title>
      
      <demo-title title="设置最小最大值">
        <tn-number-box v-model="value3" :min="50" :max="1000"></tn-number-box>
      </demo-title>
      
      <demo-title title="设置允许输入小数">
        <tn-number-box v-model="value4" :positiveInteger="false" :step="0.5"></tn-number-box>
      </demo-title>
      
      <demo-title title="禁止输入">
        <tn-number-box v-model="value5" :disabledInput="true"></tn-number-box>
      </demo-title>
      
      <demo-title title="自定义尺寸">
        <tn-number-box v-model="value6" :inputWidth="140" :inputHeight="60" :fontSize="40"></tn-number-box>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-number-box v-model="value7" backgroundColor="#AAAAAA" fontColor="#838383"></tn-number-box>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsNumberBox',
    components: {demoTitle},
    data() {
      return {
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 0
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
  .components-number_box {
    min-height: 100vh;
  }
</style>
