<template>
  <view class="index">
    <Basic v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}" ref="basic"></Basic>
    <components v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}" ref="components"></components>
    <templatePage v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}" ref="template"></templatePage>
    <tuniao v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}" ref="about"></tuniao>
    
    <tn-tabbar
      v-model="currentIndex"
      :list="tabbarList"
      activeColor="#838383"
      inactiveColor="#AAAAAA"
      activeIconColor="tn-cool-bg-color-7"
      :animation="true"
      :safeAreaInsetBottom="true"
      @change="switchTabbar"
    ></tn-tabbar>

  </view>
</template>

<script>
  import Basic from '../basic/basic.vue'
  import Components from '../components/components.vue'
  import TemplatePage from '../template/template.vue'
  import Tuniao from '../tuniao/tuniao.vue'
  
  export default {
    components: {
      Basic,
      Components,
      TemplatePage,
      Tuniao
    },
    data() {
      return {
        // 底部tabbar菜单数据
        tabbarList: [
          {
            title: '元素',
            activeIcon: 'count-fill',
            inactiveIcon: 'menu'
          },
          {
            title: '组件',
            activeIcon: 'honor-fill',
            inactiveIcon: 'honor'
          },
          {
            title: '页面',
            activeIcon: 'discover',
            inactiveIcon: 'discover'
          },
          {
            title: '图鸟',
            activeIcon: 'computer-fill',
            inactiveIcon: 'computer',
            dot: true
          }
        ],
        // tabbar当前被选中的序号
        currentIndex: 0,
        // 自定义底栏对应页面的加载情况
        tabberPageLoadFlag: []
      }
    },
    onLoad(options) {
      const index = Number(options.index || 0)
      // 根据底部tabbar菜单列表设置对应页面的加载情况
      this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
        return index === tabbar_index
      })
      this.switchTabbar(index)
    },
    onPageScroll(e) {
    },
    onReachBottom() {
    },
    methods: {
      // 切换导航
      switchTabbar(index) {
        this._switchTabbarPage(index)
      },
      
      
      // 导航页面滚动到底部
      tabbarPageScrollLower(e) {
      },
      
      // 切换导航页面
      _switchTabbarPage(index) {
        const selectPageFlag = this.tabberPageLoadFlag[index]
        if (selectPageFlag === undefined) {
          return
        }
        if (selectPageFlag === false) {
          this.tabberPageLoadFlag[index] = true
        }
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .index {
    overflow: hidden;
    height: 100%;
  }
  
  .custom-tabbar-page {
    height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2));
  }

</style>
