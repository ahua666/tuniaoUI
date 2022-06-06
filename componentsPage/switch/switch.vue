<template>

  <view class="components-switch tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Switch开光</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="普通切换按钮">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-switch v-model="value1"></tn-switch>
          </view>
          <view class="tn-margin">
            <tn-switch v-model="value2" shape="square"></tn-switch>
          </view>
          <view class="tn-margin">
            <tn-switch v-model="value2" shape="square" :disabled="true"></tn-switch>
          </view>
          <view class="tn-margin">
            <tn-switch v-model="value2" shape="square" :loading="value2"></tn-switch>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="按钮颜色">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-switch v-model="value3" activeColor="#A4E82F"></tn-switch>
          </view>
          <view class="tn-margin">
            <tn-switch v-model="value4" activeColor="#FFA4A4"></tn-switch>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="按钮尺寸">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-switch v-model="value5" :size="30"></tn-switch>
          </view>
          <view class="tn-margin">
            <tn-switch v-model="value6"></tn-switch>
          </view>
          <view class="tn-margin">
            <tn-switch v-model="value7" :size="60"></tn-switch>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="按钮内嵌图标">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left">
          <view>
            <tn-switch v-model="value8" leftIcon="sex-female" rightIcon="sex-male"></tn-switch>
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
    name: 'componentsSwitch',
    components: {demoTitle},
    data() {
      return {
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value5: false,
        value6: false,
        value7: false,
        value8: false,
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
  .components-switch {
    min-height: 100vh;
  }
</style>
