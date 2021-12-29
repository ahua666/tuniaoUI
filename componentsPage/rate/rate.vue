<template>

  <view class="components-rate">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>rate评分</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <tn-rate
          v-model="value"
          :count="count"
          :disabled="disabled"
          :allowHalf="allowHalf"
          :size="size"
          :activeIcon="activeIcon"
          :inactiveIcon="inactiveIcon"
          :activeColor="activeColor"
          :inactiveColor="inactiveColor"
          :colors="colors"
          :icons="icons"
        ></tn-rate>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsRate',
    components: {dynamicDemoTemplate},
    data() {
      return {
        value: 0,
        count: 5,
        disabled: false,
        allowHalf: false,
        size: 32,
        activeIcon: 'star-fill',
        inactiveIcon: 'star',
        activeColor: '#01BEFF',
        inactiveColor: '#AAAAAA',
        colors: [],
        icons: [],
        
        tips: ['无需依赖额外的样式文件','使用tn-rate组件'],
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
                title: '半星状态',
                optional: ['是','否'],
                methods: 'allowHalfChange',
                current: 1
              },
              {
                title: '禁用状态',
                optional: ['是','否'],
                methods: 'disabledChange',
                current: 1
              },
              {
                title: '尺寸',
                optional: ['24','32','68'],
                methods: 'sizeChange',
                current: 1
              },
              {
                title: '图标数量',
                optional: ['3','4','5','6'],
                methods: 'countChange',
                current: 2
              },
              {
                title: '图标',
                optional: ['默认','自定义'],
                methods: 'iconChange'
              },
              {
                title: '颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '根据选择数显示图标信息',
                optional: ['是','否'],
                methods: 'showDiffChange',
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
      // 切换初始值
      valueChange(event) {
        this.value = Number(event.name)
      },
      // 切换半星状态
      allowHalfChange(event) {
        this.allowHalf = event.index === 0 ? true : false
      },
      // 切换禁用状态
      disabledChange(event) {
        this.disabled = event.index === 0 ? true : false
      },
      // 切换尺寸
      sizeChange(event) {
        this.size = Number(event.name)
      },
      // 切换图标数量
      countChange(event) {
        this.count = Number(event.name)
      },
      // 切换图标
      iconChange(event) {
        switch (event.index) {
          case 0:
            this.activeIcon = 'star-fill'
            this.inactiveIcon = 'star'
            break
          case 1:
            this.activeIcon = 'emoji-good-fill'
            this.inactiveIcon = 'emoji-good'
            break
        }
      },
      // 切换颜色
      colorChange(event) {
        switch (event.index) {
          case 0:
            this.activeColor = '#01BEFF'
            this.inactiveColor = '#AAAAAA'
            break
          case 1:
            this.activeColor = '#31E749'
            this.inactiveColor = '#E7D5FA'
            break
        }
      },
      // 切换不同状态显示不同的图标信息
      showDiffChange(event) {
        switch (event.index) {
          case 0:
            this.colors = ['#01BEFF','#3D7EFF','#31C9E8']
            this.icons = ['star-fill','praise-fill','flower-fill']
            break
          case 1:
            this.colors = []
            this.icons = []
            break
        }
      }

    },

  }
</script>

<style lang="scss" scoped>
</style>
