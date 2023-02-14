<template>
  <view class="basic-utils__message tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Message工具</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="uni内置toast框">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>默认toast框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openToast_1">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>带图标 toast框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openToast_2">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>带透明mask toast框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openToast_3">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>设置时间 toast框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openToast_4">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>设置回调 toast框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openToast_5">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>关闭 toast框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="closeToast">关闭</tn-button></view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <demo-title title="uni内置loading框">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>弹出loading框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openLoading">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>关闭loading框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="closeLoading">关闭</tn-button></view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <demo-title title="uni内置modal框">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>默认modal框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openModal_1">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>隐藏取消按钮 modal框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openModal_2">弹出</tn-button></view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>修改文字 modal框</view>
              <view><tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" @click="openModal_3">弹出</tn-button></view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicUtilsMessage',
    components: {demoTitle},
    data() {
      return {
        
      }
    },
    methods: {
      // 弹出toast
      openToast_1() {
        this.$tn.message.toast('弹出toast')
      },
      openToast_2() {
        this.$tn.message.toast('弹出toast icon', false, null, 'success')
      },
      openToast_3() {
        this.$tn.message.toast('弹出toast mask', true)
      },
      openToast_4() {
        this.$tn.message.toast('弹出toast duration', false, null, 'none', 3000)
      },
      openToast_5() {
        this.$tn.message.toast('弹出toast cb', true, () => {
          setTimeout(() => {
            this.$tn.message.toast('执行完毕后弹出', true, null, 'success')
          }, 500)
        })
      },
      // 关闭Toast
      closeToast() {
        this.$tn.message.closeToast()
      },
      
      
      // 弹出loading
      openLoading() {
        this.$tn.message.loading('弹出loading')
        setTimeout(() => {
          this.closeLoading()
        }, 3000)
      },
      // 关闭loading
      closeLoading() {
        this.$tn.message.closeLoading()
      },
      
      
      // 弹出modal
      openModal_1() {
        this.$tn.message.modal("提示", "请进行登录后进行操作", () => {
          this.$tn.message.toast('点击了确认按钮')
        }, true, () => {
          this.$tn.message.toast('点击了取消按钮')
        })
      },
      openModal_2() {
        this.$tn.message.modal("提示", "请进行登录后进行操作", () => {
          this.$tn.message.toast('点击了确认按钮')
        }, false, null)
      },
      openModal_3() {
        this.$tn.message.modal("提示", "请进行登录后进行操作", () => {
          this.$tn.message.toast('点击了跳转按钮')
        }, true, () => {
          this.$tn.message.toast('点击了拒绝按钮')
        }, "跳转登录", "拒绝登录")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-utils__message {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
