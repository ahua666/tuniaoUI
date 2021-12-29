<template>

  <view class="basic-border">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>边框</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <view
          class="border-content"
          :class="[borderClass]"
        ></view>
        <view style="visibility: hidden;height: 1px;">tuniao</view>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'basicBorder',
    components: {dynamicDemoTemplate},
    data() {
      return {
        borderType: 'solid',
        borderPosition: '',
        borderColor: '',
        borderBold: false,
        
        tips: ['无需依赖额外的样式文件','不使用任何组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '样式',
                optional: ['实线','虚线'],
                methods: 'typeChange'
              },
              {
                title: '位置',
                optional: ['全部','上','下','左','右'],
                methods: 'positionChange'
              },
              {
                title: '颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '加粗',
                optional: ['默认','加粗'],
                methods: 'boldChange'
              }
            ]
          }
        ]

      }
    },
    computed: {
      borderClass() {
        let clazz = ''
        if (this.borderPosition === '') {
          clazz += ` tn-border-${this.borderType}`
        } else {
          clazz += ` tn-border-${this.borderType}-${this.borderPosition}`
        }
        
        if (this.borderColor) {
          clazz += ` ${this.borderColor}`
        }
        
        if (this.borderBold) {
          clazz += ' tn-bold-border'
        }
        
        return clazz
      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换边框样式
      typeChange(event) {
        this.borderType = event.index === 0 ? 'solid' : 'dashed'
      },
      // 切换边框位置
      positionChange(event) {
        switch (event.index) {
          case 0:
            this.borderPosition = ''
            break
          case 1:
            this.borderPosition = 'top'
            break
          case 2:
            this.borderPosition = 'bottom'
            break
          case 3:
            this.borderPosition = 'left'
            break
          case 4:
            this.borderPosition = 'right'
            break
        }
      },
      // 切换边框颜色
      colorChange(event) {
        this.borderColor = event.index === 0 ? '' : 'tn-border-red'
      },
      // 切换边框加粗状态
      boldChange(event) {
        this.borderBold = event.index === 0 ? false : true
      }

    },

  }
</script>

<style lang="scss" scoped>
  
  .border-content {
    width: 80%;
    height: 80rpx;
    background-color: #FFFFFF;
    margin: 0 auto;
  }
</style>
