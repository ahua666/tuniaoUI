<template>

  <view class="modal">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>模态框</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @click="showModal">弹出模态框</tn-button>
      </dynamic-demo-template>

    </view>
    
    <!-- 模态框 -->
    <tn-modal
      v-model="show"
      :backgroundColor="backgroundColor"
      :width="width"
      :padding="padding"
      :radius="radius"
      :fontColor="fontColor"
      :fontSize="fontSize"
      :title="title"
      :content="content"
      :button="button"
      :showCloseBtn="closeBtn || !maskCloseable"
      :maskCloseable="maskCloseable"
      :zoom="zoom"
      :custom="custom"
      @click="clickBtn"
    >
      <view v-if="custom">
        <view class="custom-modal-content">
          <tn-form :labelWidth="140">
            <tn-form-item label="手机号码" :borderBottom="false">
              <tn-input placeholder="请输入手机号码"></tn-input>
            </tn-form-item>
            <tn-form-item label="验证码" :borderBottom="false">
              <tn-input placeholder="请输入验证码"></tn-input>
              <view slot="right" class="tn-flex tn-flex-col-center tn-flex-row-center">
                <tn-button :fontSize="20" padding="10rpx" height="46rpx" backgroundColor="#01BEFF" fontColor="tn-color-white">获取验证码</tn-button>
              </view>
            </tn-form-item>
          </tn-form>
        </view>
      </view>
    </tn-modal>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsModal',
    components: {dynamicDemoTemplate},
    data() {
      return {
        title: '使用提醒',
        content: '确定不使用TuniaoUI',
        show: false,
        backgroundColor: '',
        width: '84%',
        padding: '',
        radius: 12,
        fontColor: '',
        fontSize: 0,
        button:[
          {
            text: '取消',
            backgroundColor: '#A4E82F',
            fontColor: '#FFFFFF'
          },
          {
            text: '确定',
            backgroundColor: 'tn-bg-indigo',
            fontColor: '#FFFFFF'
          }
        ],
        closeBtn: true,
        maskCloseable: true,
        zoom: true,
        custom: false,

        tips: ['无需依赖额外的样式文件','使用tn-modal组件'],
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
                title: '自定义大小',
                optional: ['默认','自定义'],
                methods: 'sizeChange'
              },
              {
                title: '自定义内容',
                optional: ['是','否'],
                methods: 'customChange',
                current: 1
              },
              {
                title: '圆角',
                optional: ['默认','60'],
                methods: 'radiusChange'
              },
              {
                title: '标题',
                optional: ['显示','隐藏'],
                methods: 'titleChange'
              },
              {
                title: '按钮',
                optional: ['显示','隐藏'],
                methods: 'buttonChange'
              },
              {
                title: '右上角关闭按钮',
                optional: ['显示','隐藏'],
                methods: 'closeBtnChange'
              },
              {
                title: '点击mask关闭',
                optional: ['是','否'],
                methods: 'maskCloseableChange'
              },
              {
                title: '动画',
                optional: ['有','无'],
                methods: 'zoomChange'
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
      // 弹出模态框
      showModal(event) {
        this.openModal()
      },
      // 切换颜色
      colorChange(event) {
        if (event.index === 0) {
          this.backgroundColor = ''
          this.fontColor = ''
        } else {
          this.backgroundColor = '#E4E9EC'
          this.fontColor = '#BA7027'
        }
        this.openModal()
      },
      // 切换大小
      sizeChange(event) {
        if (event.index === 0) {
          // this.width = '84%'
          this.padding = ''
          this.fontSize = 0
        } else {
          // this.width = '480rpx'
          this.padding = '30rpx 26rpx'
          this.fontSize = 35
        }
        this.openModal()
      },
      // 切换自定义内容
      customChange(event) {
        if (event.index === 0) {
          this.custom = true
          this.$refs.demoTemplate.updateSectionBtnsState([4,5], false)
        } else {
          this.custom = false
          this.$refs.demoTemplate.updateSectionBtnsState([4,5], true)
        }
        this.openModal()
      },
      // 切换圆角
      radiusChange(event) {
        this.radius = event.index === 0 ? 12 : Number(event.name)
        this.openModal()
      },
      // 切换标题信息
      titleChange(event) {
        this.title = event.index === 0 ? '使用提醒' : ''
        this.openModal()
      },
      // 切换按钮
      buttonChange(event) {
        this.button = event.index === 0 ? [
          {
            text: '取消',
            backgroundColor: '#E6E6E6',
            fontColor: '#FFFFFF'
          },
          {
            text: '确定',
            backgroundColor: 'tn-bg-indigo',
            fontColor: '#FFFFFF'
          }
        ] : []
        this.openModal()
      },
      // 切换关闭按钮显示隐藏
      closeBtnChange(event) {
        this.closeBtn = event.index === 0 ? true : false
        this.openModal()
      },
      // 切换蒙版层关闭
      maskCloseableChange(event) {
        if (event.index === 0) {
          this.maskCloseable = true
        } else {
          this.maskCloseable = false
          this.closeBtn = true
          this.$refs.demoTemplate.updateSectionBtnsValue(0, 6, 0)
        }
        this.openModal()
      },
      // 切换动画
      zoomChange(event) {
        this.zoom = event.index === 0 ? true : false
        this.openModal()
      },
      
      // 打开模态框
      openModal() {
        this.show = true
      },
      
      // 点击按钮
      clickBtn(event) {
        this.show = false
        this.$tn.message.toast('点击了第'+(event.index + 1)+'个按钮')
      }

    },

  }
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
  .tn-modal-class {
    .custom-modal-content {
      width: 100%;
      height: 100%;
      padding: 40rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .icon {
        font-size: 100rpx;
        margin-bottom: 20rpx;
        color: $tn-main-color;
      }
      
      .text {
        font-size: 40rpx;
      }
    }
  }
</style>
