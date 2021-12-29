<template>

  <view class="components-slider">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>slider滑动条</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-slider
          v-if="useSlot"
          v-model="value"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          :blockWidth="blockWidth"
          :blockColor="blockColor"
          :lineHeight="lineHeight"
          :activeColor="activeColor"
          :inactiveColor="inactiveColor"
        >
          <view class="tn-slider__custom-block">
            {{ value }}
          </view>
        </tn-slider>
        <tn-slider
          v-else
          v-model="value"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          :blockWidth="blockWidth"
          :blockColor="blockColor"
          :lineHeight="lineHeight"
          :activeColor="activeColor"
          :inactiveColor="inactiveColor"
        ></tn-slider>
        
        <view class="slider-value">
          <view class="slider-value__text">当前选值为：{{ value }}</view>
        </view>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsSlider',
    components: {dynamicDemoTemplate},
    data() {
      return {
        value: 0,
        min: 0,
        max: 100,
        step: 1,
        disabled: false,
        blockWidth: 30,
        blockColor: '#FFFFFF',
        lineHeight: 8,
        activeColor: '#01BEFF',
        inactiveColor: '#E6E6E6',
        useSlot: false,
        
        tips: ['无需依赖额外的样式文件','使用tn-slider组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '最小最大值',
                optional: ['0-100','20-80'],
                methods: 'minMaxChange'
              },
              {
                title: '步进值',
                optional: ['1','10','30'],
                methods: 'stepChange'
              },
              {
                title: '禁用状态',
                optional: ['是','否'],
                methods: 'disabledChange',
                current: 1
              },
              {
                title: '自定义尺寸',
                optional: ['默认','自定义'],
                methods: 'customSizeChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'customColorChange'
              },
              {
                title: '自定义滑块',
                optional: ['默认','自定义'],
                methods: 'customSliderBlockChange'
              }
            ]
          }
        ]
      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换最大最小值
      minMaxChange(event) {
        const value = event.name.split('-')
        this.min = Number(value[0])
        this.max = Number(value[1])
      },
      // 切换步进值
      stepChange(event) {
        this.step = Number(event.name)
      },
      // 切换禁用状态
      disabledChange(event) {
        this.disabled = event.index === 0 ? true : false
      },
      // 切换尺寸
      customSizeChange(event) {
        switch (event.index) {
          case 0:
            this.blockWidth = 30
            this.lineHeight = 8
            break
          case 1:
            this.blockWidth = 50
            this.lineHeight = 12
            break
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换颜色
      customColorChange(event) {
        switch (event.index) {
          case 0:
            this.activeColor = '#01BEFF'
            this.inactiveColor = '#E6E6E6'
            break
          case 1:
            this.activeColor = '#2DE88D'
            this.inactiveColor = '#AAAAAA'
            break
        }
      },
      // 切换滑块
      customSliderBlockChange(event) {
        this.useSlot = event.index === 0 ? false : true
        this.$refs.demoTemplate.updateSectionScrollView()
      }

    },

  }
</script>

<style lang="scss" scoped>
  
  .slider-value {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30rpx;
    
    &__text {
      width: 260rpx;
      padding: 20rpx;
      border-radius: 10rpx;
      text-align: center;
      background-color: $tn-font-holder-color;
    }
  }
  
  .tn-slider__custom-block {
    background-color: $tn-color-orange;
    width: auto;
    height: 40rpx;
    line-height: 40rpx;
    padding: 0 5rpx;
    border-radius: 50%;
    text-align: center;
    color: #FFFFFF;
  }
</style>
