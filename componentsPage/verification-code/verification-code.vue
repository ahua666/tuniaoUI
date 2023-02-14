<template>

  <view class="components-verification_code">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>验证码倒计时</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <view class="tn-flex tn-flex-row-center tn-flex-wrap">
          <view style="width: 100%;">
            <tn-form :labelWidth="120" :borderBottom="true">
              <tn-form-item label="验证码">
                <tn-input></tn-input>
                <view slot="right">
                  <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" size="sm" @click="getCode">{{ tips }}</tn-button>
                </view>
              </tn-form-item>
            </tn-form>
          </view>
          <view style="width: 100%;">
            <tn-button width="100%" backgroundColor="tn-bg-red" fontColor="tn-color-white" margin="30rpx 0 0 0" style="width: 100%;" @click="reset">重置</tn-button>
          </view>
        </view>
      </dynamic-demo-template>

    </view>
    
    <!-- verification-code -->
    <tn-verification-code
      ref="code"
      :keepRunning="keepRunning"
      :seconds="seconds"
      :startText="startText"
      :countDownText="countDownText"
      :endText="endText"
      @end="codeEnd"
      @start="codeStart"
      @change="codeChange"
    >
    </tn-verification-code>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  
  export default {
    name: 'componentsVerificationCode',
    components: {dynamicDemoTemplate},
    data() {
      return {
        tips: '获取验证码',
        keepRunning: true,
        seconds: 60,
        startText: '获取验证码',
        countDownText: 's秒后重新获取',
        endText: '重新获取',
        
        tips: ['无需依赖额外的样式文件','使用tn-verification-code组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '倒计时间',
                optional: ['60s','30s','5s'],
                methods: 'secondsChange'
              },
              {
                title: '退出后保持运行',
                optional: ['是','否'],
                methods: 'keepRunningChange'
              },
              {
                title: '自定义提示语',
                optional: ['默认','自定义'],
                methods: 'customTitleChange'
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
      // 切换倒计时间
      secondsChange(event) {
        this.seconds = Number(event.name.replace('s',''))
      },
      // 切换是否保持
      keepRunningChange(event) {
        this.keepRunning = event.index === 0 ? true : false
      },
      // 切换是否使用自定义提示语
      customTitleChange(event) {
        switch (event.index) {
          case 0:
            this.startText = '点击获取验证码'
            this.countDownText = '重新获取s秒后'
            this.endText = '再次获取'
            break
          case 1:
            this.startText = '获取验证码'
            this.countDownText = 's秒后重新获取'
            this.endText = '重新获取'
            break
        }
        this.reset()
      },
      
      // 获取验证码
      getCode() {
        if (this.$refs.code.canGetCode) {
          this.$tn.message.loading('正在获取验证码')
          setTimeout(() => {
            this.$tn.message.closeLoading()
            this.$tn.message.toast('验证码已经发送')
            // 通知组件开始计时
            this.$refs.code.start()
          }, 2000)
        } else {
          this.$tn.message.toast(this.$refs.code.secNum + '秒后再重试')
        }
      },
      
      // 重置验证码
      reset() {
        this.$refs.code.reset()
      },
      
      // 开始倒计时
      codeStart() {
        this.$tn.message.toast('倒计时开始')
      },
      // 结束倒计时
      codeEnd() {
        this.$tn.message.toast('倒计时结束')
      },
      // 正在倒计时
      codeChange(event) {
        this.tips = event
      }

    },

  }
</script>

<style lang="scss" scoped>
</style>
