<template>

  <view class="components-toast">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :beforeBack="beforeBack">SignBoard签字板</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <view class="tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
          <view class="image">
            <image v-if="imageSrc" :src="imageSrc" mode="heightFix"></image>
          </view>
          <view class="button">
            <tn-button fontColor="tn-color-white" @click="showSignBoard">弹出签字板</tn-button>
          </view>
        </view>
      </dynamic-demo-template>

    </view>
    
    <!-- SignBoard -->
    <tn-sign-board :show="show" :customBarHeight="vuex_custom_bar_height" :signSelectColor="signSelectColor" :rotate="rotate" @save="saveSign" @closed="closeSign"></tn-sign-board>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: false,
        imageSrc: '',
        signSelectColor: ['#080808', '#E83A30'],
        rotate: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-sign-board组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '画笔颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '旋转签名',
                optional: ['不旋转','旋转'],
                methods: 'rotateChange',
                current: 1
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
      // 弹出SignBoard
      showSignBoard() {
        this.show = true
      },
      // 切换画笔颜色
      colorChange(event) {
        switch (event.index) {
          case 0:
            this.signSelectColor = ['#080808', '#E83A30']
            break
          case 1:
            this.signSelectColor = ['#838383', '#01BEFF']
            break
        }
        this.showSignBoard()
      },
      // 切换旋转内容
      rotateChange(event) {
        this.rotate = event.index === 0 ? false : true
        this.showSignBoard()
      },
      
      
      // 保存签名
      saveSign(e) {
        // console.log(e);
        this.imageSrc = e
        this.show = false
      },
      // 关闭签名板
      closeSign() {
        this.show = false
      },
      
      // 返回前判断是否已经关闭了签名板
      beforeBack() {
        return new Promise((resolve, reject) => {
          if (!this.show) {
            resolve()
            return
          }
          this.$tn.message.modal('操作提示','当前已经打开了签名板，是否确认需要关闭', () => {
            resolve()
          }, true, () => {
            reject()
          })
        })
      }

    },

  }
</script>

<style lang="scss" scoped>
  .image {
    height: 200rpx;
    
    image {
      height: 200rpx;
    }
  }
  
  .button {
    margin-top: 20rpx;
  }
</style>
