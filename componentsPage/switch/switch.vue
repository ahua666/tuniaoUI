<template>

  <view class="components-switch">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Switch开光</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-switch
          v-model="value"
          :shape="shape"
          :size="size"
          :activeColor="color"
          :disabled="disabled"
          :loading="loading"
          :leftIcon="leftIcon"
          :rightIcon="rightIcon"
        ></tn-switch>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsSwitch',
    components: {dynamicDemoTemplate},
    data() {
      return {
        value: false,
        shape: 'circle',
        color: '',
        size: 50,
        disabled: false,
        loading: false,
        leftIcon: '',
        rightIcon: '',
        
        tips: ['无需依赖额外的样式文件','使用tn-switch组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '形状',
                optional: ['圆角','方角'],
                methods: 'shapeChange'
              },
              {
                title: '禁用',
                optional: ['是','否'],
                methods: 'disabledChange',
                current: 1
              },
              {
                title: '颜色',
                optional: ['默认','#A4E82F','#FFA4A4'],
                methods: 'colorChange'
              },
              {
                title: '尺寸',
                optional: ['40','50','80'],
                methods: 'sizeChange',
                current: 1
              },
              {
                title: '加载中',
                optional: ['是','否'],
                methods: 'loadingChange',
                current: 1
              },
              {
                title: '显示图标',
                optional: ['是','否'],
                methods: 'iconChange',
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
      // 切换形状
      shapeChange(event) {
        this.shape = event.index === 0 ? 'circle' : 'square'
      },
      // 切换禁用状态
      disabledChange(event) {
        this.disabled = event.index === 0 ? true : false
      },
      // 切换颜色
      colorChange(event) {
        this.color = event.index === 0 ? '' : event.name
      },
      // 切换尺寸
      sizeChange(event) {
        this.size = Number(event.name)
      },
      // 切换加载状态
      loadingChange(event) {
        this.loading = event.index === 0 ? true : false
      },
      // 切换图标状态
      iconChange(event) {
        if (event.index === 0) {
          this.leftIcon = 'sex-female'
          this.rightIcon = 'sex-male'
        } else if (event.index === 1) {
          this.leftIcon = ''
          this.rightIcon = ''
        }
      }

    },

  }
</script>

<style lang="scss" scoped>
</style>
