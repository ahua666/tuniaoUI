<template>

  <view class="components-steps">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Steps步骤条</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-steps :list="list" :current="current" :mode="mode" :direction="direction" :showTitle="showTitle" :activeColor="activeColor" :inActiveColor="inActiveColor"></tn-steps>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsSteps',
    components: {dynamicDemoTemplate},
    data() {
      return {
        list: [
          {name: '第一步'},
          {name: '第二步', icon: 'trusty', selectIcon: 'trusty-fill'},
          {name: '第三步', icon: 'safe', selectIcon: 'safe-fill'},
          {name: '第四步', icon: 'vip', selectIcon: 'vip-fill'}
        ],
        current: 0,
        mode: 'dot',
        direction: 'row',
        showTitle: true,
        activeColor: '#01BEFF',
        inActiveColor: '#AAAAAA',
        
        tips: ['无需依赖额外的样式文件','使用tn-steps组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '步骤',
                optional: ['上一步','下一步'],
                methods: 'currentChange',
                current: 1
              },
              {
                title: '模式',
                optional: ['点模式','数值模式','图标模式','点图标模式'],
                methods: 'modeChange'
              },
              {
                title: '方向',
                optional: ['横向','竖直'],
                methods: 'directionChange'
              },
              {
                title: '显示标题',
                optional: ['显示','隐藏'],
                methods: 'showTitleChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
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
      // 切换步骤
      currentChange(event) {
        let current = this.current
        if (event.index === 0) {
          current--
          this.current = current < 0 ? 0 : current
        } else {
          current++
          this.current = current > this.list.length ? this.list.length : current
        }
      },
      // 切换模式
      modeChange(event) {
        switch (event.index) {
          case 0:
            this.mode = 'dot'
            break
          case 1:
            this.mode = 'number'
            break
          case 2:
            this.mode = 'icon'
            break
          case 3:
            this.mode = 'dotIcon'
            break
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换方向
      directionChange(event) {
        this.direction = event.index === 0 ? 'row' : 'column'
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换标题情况
      showTitleChange(event) {
        this.showTitle = event.index === 0 ? true : false
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换颜色样式
      colorChange(event) {
        switch(event.index) {
          case 0:
            this.activeColor = '#01BEFF'
            this.inActiveColor = '#AAAAAA'
            break
          case 1:
            this.activeColor = '#24F083'
            this.inActiveColor = '#E6E6E6'
            break
        }
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
