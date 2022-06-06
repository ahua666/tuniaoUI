<template>

  <view class="components-slider tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>slider滑动条</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <tn-slider v-model="value1"></tn-slider>
        <view class="tn-margin-top">
          <tn-slider v-model="value1" :disabled="true"></tn-slider>
        </view>
      </demo-title>
      
      <demo-title title="设置最小最大值">
        <tn-slider v-model="value2" :min="20" :max="80"></tn-slider>
      </demo-title>
      
      <demo-title title="设置步进值">
        <tn-slider v-model="value3" :step="10"></tn-slider>
      </demo-title>
      
      <demo-title title="自定义滑块滑轨信息">
        <tn-slider v-model="value5" :blockWidth="40" :lineHeight="10"></tn-slider>
      </demo-title>
      
      <demo-title title="自定义颜色信息">
        <tn-slider v-model="value6" blockColor="#838383" inactiveColor="#FAD8D6" activeColor="#31E749"></tn-slider>
      </demo-title>
      
      <demo-title title="自定义滑块">
        <tn-slider v-model="value7">
          <view class="tn-slider__custom-block">
            {{ value7 }}
          </view>
        </tn-slider>
      </demo-title>
      
      <demo-title title="配合formItem使用">
        <tn-form>
          <tn-form-item label="价格区间" :labelWidth="140">
            <tn-slider v-model="value8"></tn-slider>
          </tn-form-item>
        </tn-form>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsSlider',
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
        value8: 0
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
  
  .components-slider {
    min-height: 100vh;
  }
  
  .tn-slider__custom-block {
    background-color: $tn-color-orange;
    width: auto;
    height: 40rpx;
    line-height: 40rpx;
    padding: 0 10rpx;
    border-radius: 50%;
    text-align: center;
    color: #FFFFFF;
  }
</style>
