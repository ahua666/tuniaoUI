<template>

  <view class="components-progress">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Progress进度条</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">

      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <block v-if="customPercent">
          <tn-line-progress v-if="mode === 'line'" :percent="percent" :height="height" :activeColor="activeColor"
            :striped="striped" :stripedAnimation="stripedAnimation" :showPercent="showPercent">
            <block v-if="customPercent">
              <view class="tn-color-white">加载中</view>
            </block>
          </tn-line-progress>
          <view class="tn-flex tn-flex-row-center">
            <tn-circle-progress v-if="mode === 'circle'" :percent="percent" :showPercent="showPercent">
              <block v-if="customPercent">
                <view class="tn-color-red">加载中</view>
              </block>
            </tn-circle-progress>
          </view>
        </block>
        <block v-else>
          <tn-line-progress v-if="mode === 'line'" :percent="percent" :height="height" :activeColor="activeColor"
            :striped="striped" :stripedAnimation="stripedAnimation" :showPercent="showPercent"></tn-line-progress>
          <view class="tn-flex tn-flex-row-center">
            <tn-circle-progress v-if="mode === 'circle'" :percent="percent" :showPercent="showPercent">
            </tn-circle-progress>
          </view>
        </block>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'

  export default {
    name: 'componentsStriped',
    components: {
      dynamicDemoTemplate
    },
    data() {
      return {
        mode: 'line',
        percent: 50,
        height: 28,
        activeColor: '#01BEFF',
        showPercent: false,
        striped: false,
        stripedAnimation: true,
        customPercent: false,

        tips: ['无需依赖额外的样式文件', '使用tn-line-progress、tn-circle-progress组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '模式',
                optional: ['线条','圆环'],
                methods: 'modeChange'
              },
              {
                title: '进度',
                optional: ['减少10%','增加10%'],
                methods: 'percentChange'
              },
              {
                title: '高度',
                optional: ['18','28','38'],
                methods: 'heightChange',
                current: 1
              },
              {
                title: '激活时颜色',
                optional: ['#01BEFF','#2DE88D'],
                methods: 'activeColorChange'
              },
              {
                title: '显示条纹',
                optional: ['是','否'],
                methods: 'stripedChange',
                current: 1
              },
              {
                title: '动态条纹',
                optional: ['是','否'],
                methods: 'stripedAnimationChange',
                show: false
              },
              {
                title: '显示进度信息',
                optional: ['是','否'],
                methods: 'showPercentChange',
                current: 1
              },
              {
                title: '自定义进度信息',
                optional: ['是','否'],
                methods: 'customPercentChange',
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
      // 切换模式
      modeChange(event) {
        switch (event.index) {
          case 0:
            this.mode = 'line'
            if (this.striped) {
              this.$refs.demoTemplate.updateSectionBtnsState([2,3,4,5], true)
            } else {
              this.$refs.demoTemplate.updateSectionBtnsState([2,3,4], true)
            }
            break
          case 1:
            this.mode = 'circle'
            this.$refs.demoTemplate.updateSectionBtnsState([2,3,4,5], false)
            break
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换进度
      percentChange(event) {
        let percent = 0
        switch (event.index) {
          case 0:
            percent = this.percent - 10
            this.percent = percent > 0 ? percent : 0
            break
          case 1:
            percent = this.percent + 10
            this.percent = percent > 100 ? 100 : percent
            break
        }
      },
      // 切换高度
      heightChange(event) {
        this.height = Number(event.name)
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换激活时颜色
      activeColorChange(event) {
        this.activeColor = event.name
      },
      // 切换进度信息显示
      showPercentChange(event) {
        if (event.index === 0) {
          this.showPercent = true
          this.customPercent = false
          this.$refs.demoTemplate.updateSectionBtnsState(7, false)
        } else {
          this.showPercent = false
          this.$refs.demoTemplate.updateSectionBtnsState(7, true)
        }
      },
      // 切换条纹
      stripedChange(event) {
        if (event.index === 0) {
          this.striped = true
          this.$refs.demoTemplate.updateSectionBtnsState(5, true)
        } else {
          this.striped = false
          this.$refs.demoTemplate.updateSectionBtnsState(5, false)
        }
      },
      // 切换条纹动画
      stripedAnimationChange(event) {
        this.stripedAnimation = event.index === 0 ? true : false
      },
      // 切换自定义进度信息
      customPercentChange(event) {
        this.customPercent = event.index === 0 ? true : false
      }

    },

  }
</script>

<style lang="scss" scoped>
  
  tn-line-progress, .tn-line-progress {
    width: 100%;
  }
</style>
