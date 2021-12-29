<template>

  <view class="components-count_down">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>countdown倒计时</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-count-down
          :timestamp="timestamp"
          :backgroundColor="backgroundColor"
          :fontColor="fontColor"
          :fontSize="fontSize"
          :separator="separator"
          :separatorColor="separatorColor"
          :separatorSize="separatorSize"
          :showBorder="showBorder"
          :borderColor="borderColor"
          :showDays="showDays"
          :showHours="showHours"
          :showMinutes="showMinutes"
          :showSeconds="showSeconds"
          :hideZeroDay="hideZeroDay"
          @end="countDownEnd"
        ></tn-count-down>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsCountDown',
    components: {dynamicDemoTemplate},
    data() {
      return {
        timestamp: 3600,
        backgroundColor: '#FFFFFF',
        fontSize: 30,
        fontColor: '#080808',
        separator: 'en',
        separatorSize: 30,
        separatorColor: '#080808',
        showBorder: true,
        borderColor: '#080808',
        showDays: true,
        showHours: true,
        showMinutes: true,
        showSeconds: true,
        hideZeroDay: false,
        
        tips: ['无需依赖额外的样式文件','使用tn-count-down组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '时间',
                optional: ['360', '3600', '543000'],
                methods: 'timestampChange',
                current: 1
              },
              {
                title: '大小',
                optional: ['24', '30', '45'],
                methods: 'sizeChange',
                current: 1
              },
              {
                title: '边框显示',
                optional: ['显示','隐藏'],
                methods: 'borderChange'
              },
              {
                title: '分隔符',
                optional: ['冒号','中文'],
                methods: 'separatorChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'customColorChange'
              },
              {
                title: '自定义格式',
                optional: ['日时分秒','时分秒'],
                methods: 'customFormatChange'
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
      // 切换时间
      timestampChange(event) {
        this.timestamp = Number(event.name)
      },
      // 切换边框显示
      borderChange(event) {
        this.showBorder = event.index === 0 ? true : false
      },
      // 切换分隔符
      separatorChange(event) {
        this.separator = event.index === 0 ? 'en' : 'cn'
      },
      // 切换大小
      sizeChange(event) {
        this.fontSize = Number(event.name)
        this.separatorSize = Number(event.name)
      },
      // 切换自定义颜色
      customColorChange(event) {
        switch(event.index) {
          case 0:
            this.backgroundColor = '#FFFFFF'
            this.separatorColor = '#080808'
            this.fontColor = '#080808'
            this.borderColor = '#080808'
            break
          case 1:
            this.backgroundColor = '#E6E6E6'
            this.separatorColor = '#01BEFF'
            this.fontColor = '#3D7EFF'
            this.borderColor = '#31C9E8'
            break
        }
      },
      // 切换自定义格式
      customFormatChange(event) {
        switch(event.index) {
          case 0:
            this.showDays = true
            this.showHours = true
            this.showMinutes = true
            this.showSeconds = true
            break
          case 1:
            this.showDays = false
            this.showHours = true
            this.showMinutes = true
            this.showSeconds = true
            break
        }
      },
      
      // 倒计时结束
      countDownEnd() {
        this.$t.messageUtils.toast('倒计时结束')
      }

    },

  }
</script>

<style lang="scss" scoped>
</style>
