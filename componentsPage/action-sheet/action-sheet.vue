<template>

  <view class="components-action_sheet">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>操作菜单</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="demoTips" :sectionList="sectionList" :full="false" @click="click">
        <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @click="showActionSheet">弹出ActionSheet</tn-button>
      </dynamic-demo-template>

    </view>
    
    <!-- actionSheet -->
    <tn-action-sheet
      v-model="show"
      :tips="tips"
      :list="list"
      :borderRadius="borderRadius"
      :cancelBtn="cancelBtn"
      :maskCloseable="maskCloseable"
      @click="clickActionSheetItem"
      @close="closedActionSheet"
    >
    </tn-action-sheet>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsActionSheet',
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: false,
        tips: {
          text: '请选择正确的答案',
          fontSize: 26
        },
        list: [
          {
            text: 'A'
          },
          {
            text: 'B',
            subText: '这是正确答案'
          },
          {
            text: 'C',
            disabled: true
          },
          {
            text: 'D'
          }
        ],
        borderRadius: 0,
        cancelBtn: true,
        maskCloseable: true,
        
        demoTips: ['无需依赖额外的样式文件','使用tn-action-sheet组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '显示取消按钮',
                optional: ['是','否'],
                methods: 'cancelBtnChange'
              },
              {
                title: '设置圆角',
                optional: ['0','23'],
                methods: 'borderRadiusChange'
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
      // 弹出ActionSheet
      showActionSheet() {
        this.openActionSheet()
      },
      // 切换圆角
      borderRadiusChange(event) {
        this.borderRadius = Number(event.name)
        this.openActionSheet()
      },
      // 切换关闭按钮
      cancelBtnChange(event) {
        this.cancelBtn = event.index === 0 ? true : false
        this.openActionSheet()
      },
      // 切换点击遮罩关闭
      maskCloseableChange(event) {
        this.maskCloseable = event.index === 0 ? true : false
        this.openActionSheet()
      },
      
      // 点击了选项
      clickActionSheetItem(index) {
        if (index === 1) {
          this.$tn.message.toast('选择正确')
        }
        this.closedActionSheet()
      },
      
      // 打开actionSheet
      openActionSheet() {
        this.show = true
      },
      // 关闭actionSheet
      closedActionSheet() {
        this.show = false
      }

    },

  }
</script>

<style lang="scss" scoped>
</style>
