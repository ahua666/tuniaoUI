<template>

  <view class="components-popup">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>弹框</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" :disabled="show" @click="showPopup">弹出弹框</tn-button>
      </dynamic-demo-template>

    </view>
    
    <!-- popup -->
    <tn-popup
      v-model="show"
      :marginTop="vuex_custom_bar_height"
      length="50%"
      :mode="mode"
      :backgroundColor="backgroundColor"
      :width="width"
      :height="height"
      :borderRadius="borderRadius"
      :closeBtn="closeBtn"
      :closeBtnIcon="closeBtnIcon"
      :closeBtnPosition="closeBtnPosition"
      :maskCloseable="maskCloseable"
      @close="closedPopup"
    >
      <view class="popup-content" :class="{'popup-content--center': mode === 'center'}">
        <tn-button shape="round" @click="closedPopup" width="220rpx" fontColor="#080808">关闭弹窗</tn-button>
      </view>
    </tn-popup>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsPopup',
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: false,
        mode: 'left',
        backgroundColor: '',
        width: '',
        height: '',
        borderRadius: 0,
        closeBtn: true,
        closeBtnIcon: 'close',
        closeBtnPosition: 'top-right',
        maskCloseable: true,
        
        popupShowSubsectionIndex: 1,
        
        tips: ['无需依赖额外的样式文件','使用tn-popup组件, 如果使用了自定义顶部，需要设置marginTop属性为自定义顶部的高度'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '背景颜色',
                optional: ['默认','tn-bg-grey--light','#C6D1D8'],
                methods: 'backgroundColorChange'
              },
              {
                title: '宽高',
                optional: ['默认','自定义'],
                methods: 'widthHeightChange'
              },
              {
                title: '圆角',
                optional: ['0','23'],
                methods: 'borderRadiusChange'
              },
              {
                title: '弹出位置',
                optional: ['上','下','中','左','右'],
                methods: 'modeChange',
                current: 3
              },
              {
                title: '关闭按钮',
                optional: ['显示','隐藏'],
                methods: 'closeBtnChange'
              },
              {
                title: '关闭按钮图标',
                optional: ['close','cross-fill'],
                methods: 'closeBtnIconChange'
              },
              {
                title: '关闭按钮位置',
                optional: ['左上','右上','左下','右下'],
                methods: 'closeBtnPositionChange',
                current: 1
              },
              {
                title: '点击遮罩关闭',
                optional: ['是','否'],
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
      // 弹出弹框
      showPopup() {
        this.openPopup()
      },
      // 切换弹出位置
      modeChange(event) {
        switch(event.index) {
          case 0:
            this.mode = 'top'
            break
          case 1:
            this.mode = 'bottom'
            break
          case 2:
            this.mode = 'center'
            break
          case 3:
            this.mode = 'left'
            break
          case 4:
            this.mode = 'right'
            break
        }
        this.openPopup()
      },
      // 切换背景颜色
      backgroundColorChange(event) {
        this.backgroundColor = event.index === 0 ? '' : event.name
        this.openPopup()
      },
      // 切换宽高设置
      widthHeightChange(event) {
        if (event.index === 0) {
          this.width = ''
          this.height = ''
        } else {
          this.width = this.mode !== 'center' ? '30%' : '60%'
          this.height = this.mode !== 'center' ? '30%' : '20%'
        }
        this.openPopup()
      },
      // 切换圆角
      borderRadiusChange(event) {
        this.borderRadius = Number(event.name)
        this.openPopup()
      },
      // 切换关闭按钮
      closeBtnChange(event) {
        if (event.index === 0) {
          this.closeBtn = true
          this.$refs.demoTemplate.updateSectionBtnsState([5,6], true)
        } else {
          this.closeBtn = false
          this.$refs.demoTemplate.updateSectionBtnsState([5,6], false)
        }
        this.openPopup()
      },
      // 切换关闭按钮图标
      closeBtnIconChange(event) {
        this.closeBtnIcon = event.name
        this.openPopup()
      },
      // 切换关闭按钮的位置
      closeBtnPositionChange(event) {
        switch(event.index) {
          case 0:
            this.closeBtnPosition = 'top-left'
            break
          case 1:
            this.closeBtnPosition = 'top-right'
            break
          case 2:
            this.closeBtnPosition = 'bottom-left'
            break
          case 3:
            this.closeBtnPosition = 'bottom-right'
            break
        }
        this.openPopup()
      },
      // 切换点击遮罩关闭
      maskCloseableChange(event) {
        if (event.index === 0) {
          this.maskCloseable = true
        } else {
          this.maskCloseable = false
          this.closeBtn = true
          this.$refs.demoTemplate.updateSectionBtnsValue(0, 4, 0)
          this.$refs.demoTemplate.updateSectionBtnsState([5,6], true)
        }
        this.openPopup()
      },
      
      
      // 打开Popup
      openPopup() {
        this.show = true
      },
      // 关闭Popup
      closedPopup() {
        this.show = false
      }

    },

  }
</script>

<style lang="scss" scoped>
  
  .popup-content {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &--center {
      padding: 150rpx 50rpx;
    }
  }
</style>
