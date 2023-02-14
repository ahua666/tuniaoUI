<template>

  <view class="components-toast">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Toast</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @click="showToast">弹出Toast</tn-button>
      </dynamic-demo-template>

    </view>
    
    <!-- Toast -->
    <tn-toast
      ref="toast"
      @closed="closedToast"
    ></tn-toast>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsToast',
    components: {dynamicDemoTemplate},
    data() {
      return {
        title: '提示信息',
        content: '欢迎使用图鸟UI',
        icon: 'balancecar',
        image: '',
        duration: 2000,
        
        tips: ['无需依赖额外的样式文件','使用tn-toast组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '标题',
                optional: ['无标题','有标题'],
                methods: 'titleChange',
                current: 1
              },
              {
                title: '内容',
                optional: ['无内容','有内容'],
                methods: 'contentChange',
                current: 1
              },
              {
                title: '图标',
                optional: ['无图标','balancecar','图片'],
                methods: 'iconChange',
                current: 1
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
      // 弹出Toast
      showToast() {
        this.openToast()
      },
      // 切换Toast标题
      titleChange(event) {
        this.title = event.index === 0 ? '' : '提示信息'
        this.openToast()
      },
      // 切换Toast内容
      contentChange(event) {
        this.content = event.index === 0 ? '' : '欢迎使用图鸟UI'
        this.openToast()
      },
      // 切换Toast图标
      iconChange(event) {
        switch (event.index) {
          case 0:
            this.icon = ''
            this.image = ''
            break
          case 1:
            this.icon = event.name
            this.image = ''
            break
          case 2:
            this.icon = ''
            this.image = '/static/favicon.ico'
            break
        }
        this.openToast()
      },
      // 切换Toast关闭时间
      durationChange(event) {
        this.duration = event.index === 0 ? 2000 : Number(event.name)
        this.openToast()
      },
      
      
      // 打开Toast
      openToast() {
        this.$refs.toast.show({
          title: this.title,
          content: this.content,
          icon: this.icon,
          image: this.image,
          duration: this.duration
        })
      },
      // 关闭Toast
      closedToast() {
        this.$tn.message.toast('Toast关闭')
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
