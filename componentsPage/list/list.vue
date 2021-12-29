<template>

  <view class="components-list">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>列表</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-list-view
          :backgroundColor="viewBackgroundColor"
          :fontColor="viewFontColor"
          :fontSize="viewFontSize"
          :title="viewTitle"
          :unlined="viewUnlined"
          :card="viewCard"
          :marginTop="viewMarginTop"
        >
          <block v-if="viewCustomTitle">
            <view slot="title" class="list-title-container">
              <tn-button class="list-title-button">设置</tn-button>
            </view>
          </block>
          <block v-for="(item, index) in 3" :key="index">
            <tn-list-cell
              :backgroundColor="cellBackgroundColor"
              :fontColor="cellFontColor"
              :fontSize="cellFontSize"
              :arrow="cellArrow"
              :arrowRight="cellArrowRight"
              :hover="cellHover"
              :radius="cellRadius"
              :unlined="cellUnlined"
              :lineLeft="cellLineLeft"
              :lineRight="cellLineRight"
            >选项 {{ index }}</tn-list-cell>
          </block>
        </tn-list-view>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsList',
    components: {dynamicDemoTemplate},
    data() {
      return {
        viewBackgroundColor: '',
        viewFontColor: '',
        viewFontSize: 0,
        viewTitle: '',
        viewCustomTitle: false,
        viewCard: false,
        viewMarginTop: '',
        viewUnlined: 'all',
        
        cellBackgroundColor: '',
        cellFontColor: '',
        cellFontSize: 0,
        cellArrow: true,
        cellArrowRight: true,
        cellRadius: false,
        cellUnlined: false,
        cellLineLeft: true,
        cellLineRight: true,
        cellHover: false,
        
        tips: ['无需依赖额外的样式文件','使用tn-list-view、tn-list-cell组件'],
        sectionList: [
          {
            name: '容器参数',
            section: [
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'viewColorChange'
              },
              {
                title: '自定义大小',
                optional: ['默认','自定义'],
                methods: 'viewSizeChange'
              },
              {
                title: '标题类型',
                optional: ['空白','文字标题','自定义标题'],
                methods: 'viewTitleChange'
              },
              {
                title: '容器类型',
                optional: ['默认','卡片'],
                methods: 'viewContainerChange'
              },
              {
                title: '边框类型',
                optional: ['全部显示','上边框','下边框','不显示'],
                methods: 'viewBoardChange',
                current: 3
              }
            ]
          },
          {
            name: '列表参数',
            section: [
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'cellColorChange'
              },
              {
                title: '自定义大小',
                optional: ['默认','自定义'],
                methods: 'cellSizeChange'
              },
              {
                title: '显示类型',
                optional: ['默认','圆角'],
                methods: 'cellRadiusChange'
              },
              {
                title: '箭头',
                optional: ['隐藏','显示'],
                methods: 'cellArrowChange',
                current: 1
              },
              {
                title: '箭头边距',
                optional: ['默认','无边距'],
                methods: 'cellArrowRightChange'
              },
              {
                title: '显示底边',
                optional: ['显示','隐藏'],
                methods: 'cellUnlinedChange',
              },
              {
                title: '底边边距',
                optional: ['默认','无边距'],
                methods: 'cellLineChange',
              },
              {
                title: '点击效果',
                optional: ['无','有'],
                methods: 'cellHoverChange',
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
      // 切换容器颜色
      viewColorChange(event) {
        if (event.index === 0) {
          this.viewBackgroundColor = ''
          this.viewFontColor = ''
        } else {
          this.viewBackgroundColor = '#F8F7F8'
          this.viewFontColor = 'tn-color-grey'
        }
      },
      // 切换容器大小
      viewSizeChange(event) {
        if (event.index === 0) {
          this.viewFontSize = 0
          this.viewMarginTop = ''
        } else {
          this.viewFontSize = 32
          this.viewMarginTop = '48rpx'
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换容器标题
      viewTitleChange(event) {
        switch(event.index) {
          case 0:
            this.viewTitle = ''
            this.viewCustomTitle = false
            break
          case 1:
            this.viewTitle = '请选择对应的选项'
            this.viewCustomTitle = false
            break
          case 2:
            this.viewTitle = ''
            this.viewCustomTitle = true
            break
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换容器类型
      viewContainerChange(event) {
        this.viewCard = event.index === 0 ? false : true
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换容器边框类型
      viewBoardChange(event) {
        switch(event.index) {
          case 0:
            this.viewUnlined = ''
            break
          case 1:
            this.viewUnlined = 'bottom'
            break
          case 2:
            this.viewUnlined = 'top'
            break
          case 3:
            this.viewUnlined = 'all'
            break
        }
      },
      
      
      // 切换列表颜色
      cellColorChange(event) {
        if (event.index === 0) {
          this.cellBackgroundColor = ''
          this.cellFontColor = ''
        } else {
          this.cellBackgroundColor = '#D6F4FA'
          this.cellFontColor = 'tn-color-grey'
        }
      },
      // 切换列表大小
      cellSizeChange(event) {
        if (event.index === 0) {
          this.cellFontSize = 0
        } else {
          this.cellFontSize = 36
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换列表圆角
      cellRadiusChange(event) {
        this.cellRadius = event.index === 0 ? false : true
      },
      // 切换列表箭头显示
      cellArrowChange(event) {
        if (event.index === 0) {
          this.cellArrow = false
          this.$refs.demoTemplate.updateSectionBtnsState(4, false)
        } else {
          this.cellArrow = true
          this.$refs.demoTemplate.updateSectionBtnsState(4, true)
        }
      },
      // 切换列表箭头贴边
      cellArrowRightChange(event) {
        this.cellArrowRight = event.index === 0 ? true : false
      },
      // 切换列表底边显示
      cellUnlinedChange(event) {
        if (event.index === 0) {
          this.cellUnlined = false
          this.$refs.demoTemplate.updateSectionBtnsState(6, true)
        } else {
          this.cellUnlined = true
          this.$refs.demoTemplate.updateSectionBtnsState(6, false)
        }
      },
      // 切换列表底边的边距
      cellLineChange(event) {
        if (event.index === 0) {
          this.cellLineLeft = true
          this.cellLineRight = true
        } else if (event.index === 1) {
          this.cellLineLeft = false
          this.cellLineRight = false
        }
      },
      // 切换列表点击效果
      cellHoverChange(event) {
        this.cellHover = event.index === 0 ? false : true
      },

    },

  }
</script>

<style lang="scss" scoped>
  
  .list-title-container {
    display: flex;
    justify-content: flex-end;
    padding: 10rpx;
    
    .list-title-button {
      width: 160rpx !important;
      height: 46rpx !important;
      color: #FFFFFF;
      margin: 10rpx !important;
    }
  }
</style>
