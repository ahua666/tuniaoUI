<template>

  <view class="components-count_to">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>countTo数字跳转</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-count-to
          :startVal="startVal"
          :endVal="endVal"
          :fontColor="fontColor"
          :fontSize="fontSize"
          :decimals="decimals"
          :bold="bold"
        ></tn-count-to>
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
        fontColor: '#080808',
        fontSize: 50,
        startVal: 0,
        endVal: 1000,
        duration: 2000,
        decimals: 0,
        bold: false,
        
        tips: ['无需依赖额外的样式文件','使用tn-count-to组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '滚动范围',
                optional: ['0-1000','100-2500'],
                methods: 'valChange'
              },
              {
                title: '小数显示位数',
                optional: ['不显示','1','2'],
                methods: 'decimalsChange'
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
      // 切换开始结束值
      valChange(event) {
        const value = event.name.split('-')
        this.startVal = Number(value[0])
        this.endVal = Number(value[1])
      },
      // 切换小数显示
      decimalsChange(event) {
        this.decimals = event.index === 0 ? 0 : Number(event.name)
      },
      // 切换加粗
      boldChange(event) {
        this.bold = event.index === 0 ? false : true
      },
      // 切换自定义样式
      customStyleChange(event) {
        switch(event.index) {
          case 0:
            this.fontColor = '#080808'
            this.fontSize = 50
            break
          case 1:
            this.fontColor = '#A4E82F'
            this.fontSize = 100
            break
        }
      },
    },

  }
</script>

<style lang="scss" scoped>
</style>
