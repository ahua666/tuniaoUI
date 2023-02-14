<template>

  <view class="components-fab">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>fab悬浮按钮</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <view>请点击下边悬浮按钮</view>
      </dynamic-demo-template>

    </view>
    
    <tn-fab
      :btnList="btnList"
      :left="left"
      :right="right"
      :bottom="bottom"
      :width="width"
      :height="height"
      :iconSize="iconSize"
      :backgroundColor="backgroundColor"
      :fontColor="fontColor"
      :icon="icon"
      :animationType="animationType"
      :showMask="showMask"
      @click="clickFabItem"
    >
    </tn-fab>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsFab',
    components: {dynamicDemoTemplate},
    data() {
      return {
        
        left: 'auto',
        right: 40,
        bottom: 100,
        width: 88,
        height: 88,
        iconSize: 64,
        backgroundColor: '#01BEFF',
        fontColor: '#FFFFFF',
        icon: 'open',
        animationType: 'up',
        showMask: true,
        btnList: [
          {
            icon: 'logo-tuniao',
            text: '图鸟科技',
            bgColor: '#E72F8C'
          },
          {
            text: 'UI',
            textSize: 32,
            bgColor: '#FF7043'
          },
          {
            icon: 'share-triangle',
            iconSize: 32,
            iconColor: '#AAAAAA',
            bgColor: '#24F083',
          }
        ],
        
        
        tips: ['无需依赖额外的样式文件','使用tn-fab组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '悬浮按钮位置',
                optional: ['左侧','右侧'],
                methods: 'positionChange',
                current: 1
              },
              {
                title: '自定义悬浮按钮信息',
                optional: ['默认','自定义'],
                methods: 'customFabChange'
              },
              {
                title: '自定义尺寸',
                optional: ['默认','自定义'],
                methods: 'sizeChange'
              },
              {
                title: '动画类型',
                optional: ['向上弹出','圆环弹出'],
                methods: 'animationChange'
              },
              {
                title: '遮罩显示',
                optional: ['显示','隐藏'],
                methods: 'maskChange'
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
      // 切换按钮位置
      positionChange(event) {
        switch (event.index) {
          case 0:
            this.left = 40
            this.right = 'auto'
            this.bottom = 100
            break
          case 1:
            this.left = 'auto'
            this.right = 40
            this.bottom = 100
            break
        }
      },
      // 切换悬浮按钮信息
      customFabChange(event) {
        switch (event.index) {
          case 0:
            this.backgroundColor = '#01BEFF'
            this.fontColor = '#FFFFFF'
            this.icon = 'open'
            break
          case 1:
            this.backgroundColor = 'tn-cool-bg-color-1'
            this.fontColor = '#FFFFFF'
            this.icon = 'up'
            break
        }
      },
      // 切换尺寸信息
      sizeChange(event) {
        switch (event.index) {
          case 0:
            this.width = 88
            this.height = 88
            this.iconSize = 64
            break
          case 1:
            this.width = 64
            this.height = 64
            this.iconSize = 48
            break
        }
      },
      // 切换遮罩信息
      maskChange(event) {
        switch (event.index) {
          case 0:
            this.showMask = true
            break
          case 1:
            this.showMask = false
            break
        }
      },
      // 切换动画
      animationChange(event) {
        switch (event.index) {
          case 0:
            this.animationType = 'up'
            break
          case 1:
            this.animationType = 'around'
            break
        }
      },
      
      
      // 点击悬浮按钮的内容
      clickFabItem(e) {
        this.$tn.message.toast(`点击了第 ${e.index} 个选项`)
      }
    }

  }
</script>

<style lang="scss" scoped>
</style>
