<template>

  <view class="components-tabs tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>tabs标签</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="默认" :contentPadding="false">
        <tn-tabs :list="scrollList" :current="current" @change="tabChange"></tn-tabs>
      </demo-title>
      
      <demo-title title="隐藏底部滑块" :contentPadding="false">
        <tn-tabs :list="scrollList" :current="current" :showBar="false" @change="tabChange"></tn-tabs>
      </demo-title>
      
      <demo-title title="修改背景颜色" :contentPadding="false">
        <tn-tabs :list="scrollList" :current="current" backgroundColor="#FFFFFF" @change="tabChange"></tn-tabs>
        <view class="tn-margin-top">
          <tn-tabs :list="scrollList" :current="current" backgroundColor="tn-main-gradient-indigo" activeColor="#FFFFFF" @change="tabChange"></tn-tabs>
        </view>
      </demo-title>
      
      <demo-title title="自定义标签宽高" :contentPadding="false">
        <tn-tabs :list="scrollList" :current="current" :height="120" :itemWidth="200" :barWidth="140" @change="tabChange"></tn-tabs>
      </demo-title>
      
      <demo-title title="自定义标签、滑块" :contentPadding="false">
        <tn-tabs :list="scrollList" :current="current" backgroundColor="#FFFFFF" :activeItemStyle="activeItemStyle" :barStyle="barStyle" @change="tabChange"></tn-tabs>
      </demo-title>
      
      <demo-title title="固定选项标签" :contentPadding="false">
        <tn-tabs :list="fixedList" :current="current" :isScroll="false" :badgeOffset="[20, 50]" @change="tabChange"></tn-tabs>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsTabs',
    components: {demoTitle},
    data() {
      return {
        current: 0,
        activeItemStyle: {
          borderTop: '1rpx solid #E6E6E6'
        },
        barStyle: {
          boxShadow: `12rpx 12rpx 16rpx #01BEFF`
        },
        scrollList: [
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
        fixedList: [
          {name: '关注', count: 10},
          {name: '推荐'},
          {name: '热榜', count: '99+'},
          {name: '搞笑'}
        ]
      }
    },
    methods: {
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      }
    }

  }
</script>

<style lang="scss" scoped>
  .components-tabs {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
