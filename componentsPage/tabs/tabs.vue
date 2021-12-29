<template>

  <view class="components-tabs">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>tabs标签</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-tabs
          v-if="show"
          :list="list"
          :current="current"
          :isScroll="isScroll"
          :height="height"
          :itemWidth="itemWidth"
          :activeColor="activeColor"
          :inactiveColor="inactiveColor"
          :activeItemStyle="activeItemStyle"
          :showBar="showBar"
          :barWidth="barWidth"
          :barHeight="barHeight"
          :barStyle="barStyle"
          :gutter="gutter"
          :badgeOffset="badgeOffset"
          @change="tabChange"
        ></tn-tabs>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsTabs',
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: true,
        data: [
          {name: '关注', count: 10},
          {name: '推荐'},
          {name: '热榜', count: '99+'},
          {name: '搞笑'},
          {name: '视频'},
          {name: '科技'},
          {name: '音乐'},
          {name: '电影'},
          {name: '游戏'}
        ],
        list: [],
        current: 0,
        isScroll: true,
        height: 80,
        itemWidth: 'auto',
        activeColor: '#01BEFF',
        inactiveColor: '#080808',
        activeItemStyle: {},
        showBar: true,
        barWidth: 40,
        barHeight: 6,
        barStyle: {},
        gutter: 30,
        badgeOffset: [20, 22],
        
        tips: ['无需依赖额外的样式文件','使用tn-tabs组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '模式选择',
                optional: ['滑动','非滑动'],
                methods: 'modeChange'
              },
              {
                title: '标签数量',
                optional: ['2','3','4','5'],
                methods: 'countChange',
                show: false
              },
              {
                title: '显示底部滑块',
                optional: ['显示','隐藏'],
                methods: 'showBarChange'
              },
              {
                title: '自定义宽高',
                optional: ['默认','自定义'],
                methods: 'customWidthHeightChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'customColorChange'
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
    onLoad() {
      this.list = this.data
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换模式
      modeChange(event) {
        this.show = false
        this.current = 0
        this.isScroll = event.index === 0 ? true : false
        
        if (event.index === 0) {
          this.list = this.data
          this.badgeOffset = [20, 22]
          this.$refs.demoTemplate.updateSectionBtnsState(1, false)
        } else if (event.index === 1) {
          this.$refs.demoTemplate.updateSectionBtnsState(1, true)
          this.$refs.demoTemplate.updateSectionBtnsValue(0, 1, 0)
          this.countChange({index: 0, name: 2})
        }
        
        this.$nextTick(() => {
          this.show = true
        })
      },
      // 切换标签数量
      countChange(event) {
        this.show = false
        this.list = this.data.slice(0, Number(event.name))
        switch (event.index) {
          case 0:
            this.badgeOffset = [20, 120]
            break
          case 1:
            this.badgeOffset = [20, 70]
            break
          case 2:
            this.badgeOffset = [20, 50]
            break
          case 3:
            this.badgeOffset = [20, 22]
            break
        }
        
        this.$nextTick(() => {
          this.show = true
        })
      },
      // 切换底部滑块显示
      showBarChange(event) {
        this.show = false
        this.showBar = event.index === 0 ? true : false
        
        this.$nextTick(() => {
          this.show = true
        })
      },
      // 切换自定义宽高
      customWidthHeightChange(event) {
        this.show = false
        switch(event.index) {
          case 0:
            this.height = 80
            this.itemWidth = 'auto'
            this.barWidth = 40
            this.barHeight = 6
            this.gutter = 30
            break
          case 1:
            this.height = 100
            this.itemWidth = '40%'
            this.barWidth = 130
            this.barHeight = 4
            this.gutter = 10
            break
        }
        
        this.$nextTick(() => {
          this.show = true
          this.$refs.demoTemplate.updateSectionScrollView()
        })
      },
      // 切换颜色
      customColorChange(event) {
        this.show = false
        switch(event.index) {
          case 0:
            this.activeColor = '#01BEFF'
            this.inactiveColor = '#080808'
            break
          case 1:
            this.activeColor = '#31E749'
            this.inactiveColor = '#AAAAAA'
            break
        }
        
        this.$nextTick(() => {
          this.show = true
        })
      },
      // 切换自定义样式
      customStyleChange(event) {
        this.show = false
        switch(event.index) {
          case 0:
            this.activeItemStyle = {}
            this.barStyle = {}
            break
          case 1:
            this.activeItemStyle = {
              borderTop: '1rpx solid #E6E6E6'
            }
            this.barStyle = {
              boxShadow: `6rpx 6rpx 8rpx ${this.activeColor}`
            }
            break
        }
        
        this.$nextTick(() => {
          this.show = true
        })
      },
      
      
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
