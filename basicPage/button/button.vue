<template>
  
  <view class="basic-button">
  
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>按钮</tn-nav-bar>
  
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-button
          :backgroundColor="backgroundColor"
          :fontColor="fontColor"
          :fontSize="fontSize"
          :shape="shape"
          :shadow="shadow"
          :width="width"
          :height="height"
          :size="size"
          :fontBold="fontBold"
          :padding="padding"
          :margin="margin"
          :plain="plain"
          :border="border"
          :borderBold="borderBold"
          :disabled="disabled"
          :loading="loading"
        >
          <block v-if="shape !== 'icon'">演示按钮</block>
          <block v-else>
            <text class="tn-icon-discover-planet-fill"></text>
          </block>
        </tn-button>
      </dynamic-demo-template>
      
    </view>
  
  </view>
  
</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'basicButton',
    components: {dynamicDemoTemplate},
    data() {
      return {
        backgroundColor: '',
        fontColor: '',
        fontSize: 0,
        shape: '',
        shadow: false,
        width: '',
        height: '',
        size: '',
        fontBold: false,
        padding: '',
        margin: '',
        plain: false,
        border: true,
        borderBold: false,
        disabled: false,
        loading: false,
        tips: ['无需依赖额外的样式文件','使用tn-button组件'],
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
                title: '内置大小',
                optional: ['默认','sm','lg'],
                methods: 'insertSizeChange'
              },
              {
                title: '形状',
                optional: ['默认','圆角','图标'],
                methods: 'shapeChange'
              },
              {
                title: '显示阴影',
                optional: ['不显示','显示'],
                methods: 'shadowChange'
              },
              {
                title: '字体加粗控制',
                optional: ['默认','加粗'],
                methods: 'fontBoldChange'
              },
              {
                title: '镂空控制',
                optional: ['默认','镂空'],
                methods: 'plainChange'
              },
              {
                title: '镂空边框控制',
                optional: ['显示','不显示'],
                methods: 'borderChange'
              },
              {
                title: '镂空边框加粗控制',
                optional: ['默认','加粗'],
                methods: 'borderBoldChange'
              },
              {
                title: '禁用控制',
                optional: ['关闭','开启'],
                methods: 'disabledChange'
              },
              {
                title: '加载控制',
                optional: ['关闭','开启'],
                methods: 'loadingChange'
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
      // 切换自定义颜色
      colorChange(event) {
        switch(event.index) {
          case 0:
            this.backgroundColor = ''
            this.fontColor = ''
            break
          case 1:
            this.backgroundColor = 'tn-bg-indigo'
            this.fontColor = '#4030E8'
            break
        }
      },
      // 切换自定义大小
      sizeChange(event) {
        switch(event.index) {
          case 0:
            this.width = 'auto'
            this.height = ''
            this.fontSize = 0
            this.padding = ''
            this.$refs.demoTemplate.updateSectionBtnsState(2, true)
            break
          case 1:
            this.width = '200rpx'
            this.height = '80rpx'
            this.fontSize = 36
            this.padding = '10rpx 20rpx'
            this.size = ''
            this.$refs.demoTemplate.updateSectionBtnsState(2, false)
            break
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换按钮形状
      shapeChange(event) {
        switch(event.index) {
          case 0:
            this.shape = ''
            break
          case 1:
            this.shape = 'round'
            break
          case 2:
            this.shape = 'icon'
            break
        }
      },
      // 切换阴影状态
      shadowChange(event) {
        if (event.index === 0) {
          this.shadow = false
          this.$refs.demoTemplate.updateSectionBtnsState(10, true)
        } else {
          this.shadow = true
          this.loading = false
          this.$refs.demoTemplate.updateSectionBtnsState(10, false)
        }
      },
      // 切换内置尺寸状态
      insertSizeChange(event) {
        this.size = event.index === 0 ? '' : event.name
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换字体加粗状态
      fontBoldChange(event) {
        this.fontBold = event.index === 0 ? false : true
      },
      // 切换镂空状态
      plainChange(event) {
        this.plain = event.index === 0 ? false : true
      },
      // 切换镂空边框状态
      borderChange(event) {
        this.border = event.index === 0 ? true : false
      },
      // 切换镂空边框加粗状态
      borderBoldChange(event) {
        this.borderBold = event.index === 0 ? false : true
      },
      // 切换禁用状态
      disabledChange(event) {
        this.disabled = event.index === 0 ? false : true
      },
      // 切换加载状态
      loadingChange(event) {
        this.loading = event.index === 0 ? false : true
      },
      
    },
  }
</script>

<style lang="scss" scoped>
  
</style>
