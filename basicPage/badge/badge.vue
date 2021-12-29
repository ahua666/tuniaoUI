<template>

  <view class="basic-badge">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>微标</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <block v-if="!absolute">
          <tn-badge
            :backgroundColor="backgroundColor"
            :fontColor="fontColor"
            :fontSize="fontSize"
            :radius="radius"
            :dot="dot"
            :padding="padding"
            :margin="margin"
          >
            <text v-if="dot === false">{{ value }}</text>
          </tn-badge>
        </block>
        <block v-else>
          <view class="badge-container">
            <tn-badge
              :backgroundColor="backgroundColor"
              :fontColor="fontColor"
              :fontSize="fontSize"
              :radius="radius"
              :dot="dot"
              :padding="padding"
              :margin="margin"
              :absolute="true"
              :top="top"
              :right="right"
              :translateCenter="translateCenter"
            >
              <text v-if="dot === false">{{ value }}</text>
            </tn-badge>
          </view>
        </block>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'basicBadge',
    components: {dynamicDemoTemplate},
    data() {
      return {
        value: '0',
        backgroundColor: '',
        fontColor: '',
        fontSize: 0,
        radius: 0,
        dot: false,
        padding: '',
        margin: '',
        absolute: false,
        top: '',
        right: '',
        translateCenter: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-badge组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '数值',
                optional: ['0','99','100','1024'],
                methods: 'valueChange'
              },
              {
                title: '点微标',
                optional: ['是','否'],
                methods: 'dotChange',
                current: 1
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '自定义大小',
                optional: ['默认','自定义'],
                methods: 'sizeChange'
              },
              {
                title: '绝对定位',
                optional: ['是','否'],
                methods: 'absoluteChange',
                current: 1
              },
              {
                title: '自定义绝对定位位置',
                optional: ['默认','自定义'],
                methods: 'absolutePositionChange',
                show: false
              },
              {
                title: '居中绝对定位原点',
                optional: ['是','否'],
                methods: 'absoluteCenterChange',
                show: false
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
      // 切换值
      valueChange(event) {
        this.value = this.$t.number.formatNumberString(event.name)
      },
      // 切换点显示状态
      dotChange(event) {
        if (event.index === 0) {
          this.dot = true
          this.$refs.demoTemplate.updateSectionBtnsState(0, false)
        } else {
          this.dot = false
          this.$refs.demoTemplate.updateSectionBtnsState(0, true)
        }
      },
      // 切换自定义颜色
      colorChange(event) {
        if (event.index === 0) {
          this.backgroundColor = ''
          this.fontColor = ''
        } else {
          this.backgroundColor = 'tn-bg-red'
          this.fontColor = '#FFFFFF'
        }
      },
      // 切换自定义大小
      sizeChange(event) {
        if (event.index === 0) {
          this.radius = 0
          this.fontSize = 0
          this.padding = ''
          this.margin = ''
        } else {
          this.radius = 48
          this.fontSize = 30
          this.padding = '10rpx 25rpx'
          this.margin = '30rpx'
        }
      },
      // 切换绝对定位状态
      absoluteChange(event) {
        if (event.index === 0) {
          this.absolute = true
          this.$refs.demoTemplate.updateSectionBtnsState([5,6], true)
        } else {
          this.absolute = false
          this.$refs.demoTemplate.updateSectionBtnsState([5,6], false)
        }
      },
      // 切换绝对定位的位置
      absolutePositionChange(event) {
        if (event.index === 0) {
          this.top = ''
          this.right = ''
        } else {
          this.top = '20rpx'
          this.right = '100%'
        }
      },
      // 切换绝对定位居中原点
      absoluteCenterChange(event) {
        this.translateCenter = event.index === 0
      }
    },

  }
</script>

<style lang="scss" scoped>
  .badge-container {
    // 防止越过父级
    position: relative;
    width: 80rpx;
    height: 80rpx;
    background-color: $tn-font-sub-color;
  }
</style>
