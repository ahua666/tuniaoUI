<template>

  <view class="components-number_box">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>numberBox步进输入</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-number-box
          v-model="value"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          :disabledInput="disabledInput"
          :inputWidth="inputWidth"
          :inputHeight="inputHeight"
          :positiveInteger="positiveInteger"
          :backgroundColor="backgroundColor"
          :fontColor="fontColor"
          :fontSize="fontSize"
        ></tn-number-box>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsNumberBox',
    components: {dynamicDemoTemplate},
    data() {
      return {
        value: 0,
        min: 0,
        max: 100,
        step: 1,
        disabled: false,
        disabledInput: false,
        inputWidth: 88,
        inputHeight: 50,
        positiveInteger: true,
        backgroundColor: '#E6E6E6',
        fontColor: '',
        fontSize: 0,
        
        tips: ['无需依赖额外的样式文件','使用tn-number-box组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '初始值',
                optional: ['0','1','2.5','3','4','5'],
                methods: 'valueChange'
              },
              {
                title: '最小最大值',
                optional: ['0-100','50-1000'],
                methods: 'minMaxChange'
              },
              {
                title: '步进值',
                optional: ['1','5','0.5'],
                methods: 'stepChange'
              },
              {
                title: '只允许输入正整数',
                optional: ['是','否'],
                methods: 'positiveIntegerChange'
              },
              {
                title: '禁用状态',
                optional: ['是','否'],
                methods: 'disabledChange',
                current: 1
              },
              {
                title: '禁用输入状态',
                optional: ['是','否'],
                methods: 'disabledInputChange',
                current: 1
              },
              {
                title: '自定义尺寸',
                optional: ['默认','自定义'],
                methods: 'customSizeChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'customColorChange'
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
      // 切换初始值
      valueChange(event) {
        this.value = Number(event.name)
      },
      // 切换最小最大值
      minMaxChange(event) {
        const value = event.name.split('-')
        this.min = Number(value[0])
        this.max = Number(value[1])
      },
      // 切换步进值
      stepChange(event) {
        this.step = Number(event.name)
      },
      // 切换允许正整数状态
      positiveIntegerChange(event) {
        this.positiveInteger = event.index === 0 ? true : false
      },
      // 切换禁用状态
      disabledChange(event) {
        this.disabled = event.index === 0 ? true : false
      },
      // 切换禁用输入状态
      disabledInputChange(event) {
        this.disabledInput = event.index === 0 ? true : false
      },
      // 切换自定义尺寸
      customSizeChange(event) {
        switch(event.index) {
          case 0:
            this.inputWidth = 88
            this.inputHeight = 50
            this.fontSize = 0
            break
          case 1:
            this.inputWidth = 120
            this.inputHeight = 60
            this.fontSize = 40
            break
        }
      },
      // 切换自定义颜色
      customColorChange(event) {
        switch(event.index) {
          case 0:
            this.backgroundColor = '#E6E6E6'
            this.fontColor = ''
            break
          case 1:
            this.backgroundColor = '#AAAAAA'
            this.fontColor = 'tn-color-grey'
            break
        }
      },

    },

  }
</script>

<style lang="scss" scoped>
</style>
