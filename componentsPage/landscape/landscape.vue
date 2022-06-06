<template>

  <view class="components-landscape">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>压屏窗</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <view class="tn-flex tn-flex-row-center"><tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @tap="showLandscape">弹出压屏窗</tn-button></view>
      </dynamic-demo-template>

    </view>
    
    <!-- 压屏窗-->
    <tn-landscape
      :show="show"
      :closeBtn="closeBtn"
      :closeColor="closeColor"
      :closeSize="closeSize"
      :closePosition="closePosition"
      :closeTop="closeTop"
      :closeRight="closeRight"
      :closeBottom="closeBottom"
      :closeLeft="closeLeft"
      :mask="mask"
      :maskCloseable="maskCloseable"
      @close="closeLandscape"
    >
      <image src="https://tnuiimage.tnkjapp.com/landscape/2022-new-year.png" mode="widthFix"></image>
    </tn-landscape>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  
  export default {
    name: 'ComponentsLandscape',
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: false,
        closeBtn: true,
        closeColor: '',
        closeSize: 0,
        closePosition: 'rightTop',
        closeTop: 0,
        closeRight: 0,
        closeBottom: 0,
        closeLeft: 0,
        mask: true,
        maskCloseable: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-landscape组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '关闭按钮',
                optional: ['显示','隐藏'],
                methods: 'closeBtnChange'
              },
              {
                title: '关闭按钮位置',
                optional: ['左上','右上','底部'],
                methods: 'closePositionChange',
                current: 1
              },
              {
                title: '自定义关闭按钮',
                optional: ['默认','自定义'],
                methods: 'customCloseChange'
              },
              {
                title: '遮罩',
                optional: ['显示','隐藏'],
                methods: 'maskChange'
              },
              {
                title: '点击遮罩关闭',
                optional: ['允许','不允许'],
                methods: 'maskCloseableChange'
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
      // 弹出压屏窗
      showLandscape() {
        this.openLandscape()
      },
      // 切换关闭按钮显示隐藏
      closeBtnChange(event) {
        switch (event.index) {
          case 0:
            this.closeBtn = true
            this.$refs.demoTemplate.updateSectionBtnsState([1,2], true)
            break
          case 1:
            this.closeBtn = false
            this.$refs.demoTemplate.updateSectionBtnsState([1,2], false)
            break
        }
        this.openLandscape()
      },
      // 切换关闭按钮位置
      closePositionChange(event) {
        switch (event.index) {
          case 0:
            this.closePosition = 'leftTop'
            break
          case 1:
            this.closePosition = 'rightTop'
            break
          case 2:
            this.closePosition = 'bottom'
            break
        }
        this.$refs.demoTemplate.updateSectionBtnsValue(0, 2, 0)
        this.customCloseChange({index: 0})
        this.openLandscape()
      },
      // 切换自定义关闭按钮样式
      customCloseChange(event) {
        if (event.index === 0) {
          this.closeTop = 0
          this.closeRight = 0
          this.closeBottom = 0
          this.closeLeft = 0
          this.closeColor = ''
          this.closeSize = 0
        } else if (event.index === 1) {
          if (this.closePosition === 'leftTop') {
            this.closeTop = -40
            this.closeLeft = 30
          } else if (this.closePosition === 'rightTop') {
            this.closeTop = -40
            this.closeRight = 30
          } else if (this.closePosition === 'bottom') {
            this.closeBottom = -60
          }
          this.closeColor = '#E83A30'
          this.closeSize = 60
        }
        this.openLandscape()
      },
      // 切换遮罩显示隐藏
      maskChange(event) {
        this.mask = event.index === 0 ? true : false
        this.openLandscape()
      },
      // 切换遮罩关闭状态
      maskCloseableChange(event) {
        this.maskCloseable = event.index === 0 ? true : false
        this.openLandscape()
      },
      
      // 打开压屏窗
      openLandscape() {
        this.show = true
      },
      // 关闭压屏窗
      closeLandscape() {
        this.show = false
      }

    }

  }
</script>

<style lang="scss" scoped>
</style>
