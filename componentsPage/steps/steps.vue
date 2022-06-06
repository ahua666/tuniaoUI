<template>

  <view class="components-steps tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Steps步骤条</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="operate_btn">
        <view>
          <tn-button backgroundColor="tn-bg-indigo" fontColor="tn-color-white" @click="prevStep">上一步</tn-button>
        </view>
        <view>
          <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @click="nextStep">下一步</tn-button>
        </view>
      </view>
      
      <view class="tn-padding-top-lg"></view>
      
      <demo-title title="点模式">
        <tn-steps :list="list" :current="current" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <demo-title title="数值模式">
        <tn-steps :list="list" :current="current" mode="number" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <demo-title title="图标模式">
        <tn-steps :list="list" :current="current" mode="icon" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <demo-title title="点图标模式">
        <tn-steps :list="list" :current="current" mode="dotIcon" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <demo-title title="隐藏标题">
        <tn-steps :list="list" :current="current" mode="icon" :showTitle="false" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-steps :list="list" :current="current" mode="icon" activeColor="#24F083" inActiveColor="#E6E6E6" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <demo-title title="垂直显示">
        <tn-steps :list="list" :current="current" direction="column" @click="stepItemClick"></tn-steps>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsSteps',
    components: {demoTitle},
    data() {
      return {
        list: [
          {name: '第一步'},
          {name: '第二步', icon: 'trusty', selectIcon: 'trusty-fill'},
          {name: '第三步', icon: 'safe', selectIcon: 'safe-fill'},
          {name: '第四步', icon: 'vip', selectIcon: 'vip-fill'}
        ],
        
        current: 0
      }
    },
    methods: {
      prevStep() {
        let current = this.current
        current--
        this.current = current < 0 ? 0 : current
      },
      nextStep() {
        let current = this.current
        current++
        this.current = current > this.list.length ? this.list.length : current
      },
      stepItemClick(e) {
        this.current = e.index
      }
    }

  }
</script>

<style lang="scss" scoped>
  .operate_btn {
    position: fixed;
    width: 100%;
    padding: 0 30rpx;
    margin: 30rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
  }
</style>
