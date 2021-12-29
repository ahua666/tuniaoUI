<template>

  <view class="components-count_scroll">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>countScroll数字滚动</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-count-scroll
          :value="value"
          :height="height"
          :fontColor="fontColor"
          :fontSize="fontSize"
          :bold="bold"
          :duration="duration"
        ></tn-count-scroll>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsCountTo',
    components: {dynamicDemoTemplate},
    data() {
      return {
        value: 888.88,
        height: 32,
        fontColor: '#080808',
        fontSize: 32,
        bold: false,
        duration: 1.2,
        
        tips: ['无需依赖额外的样式文件','使用tn-count-scroll组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '值',
                optional: ['90','1234','888.88'],
                methods: 'valueChange',
                current: 2
              },
              {
                title: '持续时间',
                optional: ['默认','0.5', '3'],
                methods: 'durationChange'
              },
              {
                title: '加粗',
                optional: ['默认','加粗'],
                methods: 'boldChange'
              },
              {
                title: '自定义样式',
                optional: ['默认','自定义'],
                methods: 'customStyleChange'
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
      // 切换值
      valueChange(event) {
        this.value = Number(event.name)
      },
      // 切换持续时间
      durationChange(event) {
        this.duration = event.index === 0 ? 1.2 : Number(event.name)
      },
      // 切换加粗
      boldChange(event) {
        this.bold = event.index === 0 ? false : true
      },
      // 切换自定义样式
      customStyleChange(event) {
        switch(event.index) {
          case 0:
            this.height = 32
            this.fontColor = '#080808'
            this.fontSize = 32
            break
          case 1:
            this.height = 80
            this.fontColor = '#E88C30'
            this.fontSize = 80
            break
        }
      },
    },

  }
</script>

<style lang="scss" scoped>
</style>
