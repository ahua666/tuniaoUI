<template>

  <view class="components-loading">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Loading加载动画</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-loading
          :show="show"
          :mode="mode"
          :color="color"
          :size="size"
        ></tn-loading>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsLoading',
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: true,
        mode: 'circle',
        color: '',
        size: 34,
        
        tips: ['无需依赖额外的样式文件','使用tn-loading组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '显示',
                optional: ['显示','隐藏'],
                methods: 'showChange'
              },
              {
                title: '模式',
                optional: ['圆圈','花朵'],
                methods: 'modeChange'
              },
              {
                title: '颜色',
                optional: ['默认','#31E749','#31C9E8'],
                methods: 'colorChange'
              },
              {
                title: '尺寸',
                optional: ['28','34','54'],
                methods: 'sizeChange',
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
      // 切换是否显示
      showChange(event) {
        this.show = event.index === 0 ? true : false
      },
      // 切换模式
      modeChange(event) {
        switch (event.index) {
          case 0:
            this.mode = 'circle'
            this.$refs.demoTemplate.updateSectionBtnsState(2, true)
            break
          case 1:
            this.mode = 'flower'
            this.$refs.demoTemplate.updateSectionBtnsState(2, false)
            break
        }
      },
      // 切换颜色
      colorChange(event) {
        this.color = event.index === 0 ? '' : event.name
      },
      // 切换尺寸
      sizeChange(event) {
        this.size = Number(event.name)
      },

    },

  }
</script>

<style lang="scss" scoped>
</style>
