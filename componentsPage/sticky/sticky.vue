<template>

  <view class="components-sticky" style="height: 200vh;">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>sticky吸顶</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" :fullWindowsScroll="true" @click="click">
        <tn-sticky :offsetTop="offsetTop" :enabled="enabled" :customNavHeight="vuex_custom_bar_height" @fixed="fixed" @unfixed="unfixed">
          <view class="sticky-content">图鸟科技</view>
        </tn-sticky>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsSticky',
    components: {dynamicDemoTemplate},
    data() {
      return {
        offsetTop: 0,
        enabled: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-sticky组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '吸顶距离',
                optional: ['0','20','100'],
                methods: 'offsetTopChange'
              },
              {
                title: '状态',
                optional: ['允许吸顶', '不吸顶'],
                methods: 'enabledChange'
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
      // 切换吸顶距离
      offsetTopChange(event) {
        this.offsetTop = Number(event.name)
      },
      // 切换吸顶状态
      enabledChange(event) {
        this.enabled = event.index === 0 ? true: false
      },
      
      // 监听是否吸顶
      fixed() {
        this.$t.messageUtils.toast('触发吸顶')
      },
      unfixed() {
        this.$t.messageUtils.toast('取消吸顶')
      }
    },

  }
</script>

<style lang="scss" scoped>
  
  .sticky-content {
    height: 80rpx;
    padding: 0 80rpx;
    margin: 0 10rpx;
    line-height: 80rpx;
    text-align: center;
    background-color: $tn-main-color;
    border-radius: 10rpx;
  }
</style>
