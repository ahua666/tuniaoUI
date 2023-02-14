<template>
  <view class="basic-utils__color tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Color工具</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="获取内置随机颜色">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view class="bg-color-item" :class="randomBgColorClass">背景颜色</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="getRandomBgColor">获取</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view class="bg-color-item" :class="randomColorClass">文字颜色</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="getRandomColor">获取</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view class="bg-color-item" :class="randomCoolBgColorClass">酷炫背景颜色</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="getRandomCoolColor">获取</tn-button></view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <demo-title title="hex与rgb互转">
        <view class="tn-bg-white">
          <tn-form-item>
            <view class="tn-margin-left">
              <tn-input v-model="hexRGBValue"></tn-input>
            </view>
            <template slot="right">
              <view class="tn-margin-right-sm">
                <tn-button size="sm" backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="convertToRGBOrHex">{{ rgbFlag ? '转换为hex' : '转换为rgb' }}</tn-button>
              </view>
            </template>
          </tn-form-item>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicUtilsColor',
    components: {demoTitle},
    data() {
      return {
        randomBgColorClass: '',
        randomColorClass: '',
        randomCoolBgColorClass: '',
        hexRGBValue: '#01BEFF',
        rgbFlag: false
      }
    },
    methods: {
      // 获取随机背景颜色
      getRandomBgColor() {
        this.randomBgColorClass = this.$tn.color.getRandomColorClass()
      },
      // 获取随机颜色
      getRandomColor() {
        this.randomColorClass = this.$tn.color.getRandomColorClass('color')
      },
      // 获取随机酷炫背景颜色
      getRandomCoolColor() {
        this.randomCoolBgColorClass = this.$tn.color.getRandomCoolBgClass()
      },
      // 将hex与rgb互转
      convertToRGBOrHex() {
        if (this.rgbFlag) {
          this.hexRGBValue = this.$tn.color.rgbToHex(this.hexRGBValue)
        } else {
          this.hexRGBValue = this.$tn.color.hexToRGB(this.hexRGBValue)
        }
        this.rgbFlag = !this.rgbFlag
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-utils__color {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
    
    .bg-color-item {
      height: 100%;
      width: auto;
      padding: 10rpx 20rpx;
    }
  }
</style>
