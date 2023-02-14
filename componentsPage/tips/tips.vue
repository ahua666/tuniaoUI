<template>

  <view class="components-tips">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>提示信息框</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @click="showTips">弹出Tips</tn-button>
      </dynamic-demo-template>

    </view>
    
    <!-- Tips -->
    <tn-tips
      ref="tips"
      :position="position"
      :top="vuex_custom_bar_height"
      @close="closeTips"
    ></tn-tips>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsTips',
    components: {dynamicDemoTemplate},
    data() {
      return {
        msg: '这是一条信息',
        backgroundColor: '',
        fontColor: '',
        duration: 2000,
        position: '',
        
        tips: ['无需依赖额外的样式文件','使用tn-tips组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '弹出位置',
                optional: ['默认','顶部','中间','底部'],
                methods: 'positionChange'
              },
              {
                title: '关闭时间',
                optional: ['默认','5000'],
                methods: 'durationChange'
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
      // 弹出Tips
      showTips() {
        this.openTips()
      },
      // 切换弹出位置
      positionChange(event) {
        switch(event.index) {
          case 0:
            this.position = ''
            break
          case 1:
            this.position = 'top'
            break
          case 2:
            this.position = 'center'
            break
          case 3:
            this.position = 'bottom'
            break
        }
        this.openTips()
      },
      // 切换颜色
      colorChange(event) {
        if (event.index === 0) {
          this.backgroundColor = ''
          this.fontColor = ''
        } else {
          this.backgroundColor = 'tn-bg-gray--light'
          this.fontColor = '#E83A30'
        }
        this.openTips()
      },
      // 切换Tips关闭时间
      durationChange(event) {
        this.duration = event.index === 0 ? 2000 : Number(event.name)
        this.openTips()
      },
      
      
      // 打开Tips
      openTips() {
        this.$refs.tips.show({
          msg: this.msg,
          backgroundColor: this.backgroundColor,
          fontColor: this.fontColor,
          duration: this.duration
        })
      },
      // 关闭Tips
      closeTips() {
        this.$tn.message.toast('tips提示框关闭了')
      }

    },

  }
</script>

<style lang="scss" scoped>
  
</style>
