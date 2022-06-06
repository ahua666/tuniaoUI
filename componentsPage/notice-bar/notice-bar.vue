<template>

  <view class="components-notice-bar tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>noticeBar通知栏</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="水平连续滚动">
        <tn-notice-bar :list="list"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="水平不连续滚动">
        <tn-notice-bar :list="list" :circular="false"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="垂直滚动">
        <tn-notice-bar :list="list" mode="vertical"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="手动滚动">
        <tn-notice-bar :list="list" mode="vertical" :autoplay="false"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="停止滚动">
        <tn-notice-bar :list="list" mode="vertical" playStatus="paused"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="慢速滚动">
        <tn-notice-bar :list="list" :speed="100"></tn-notice-bar>
        <view class="tn-margin-top">
          <tn-notice-bar :list="list" mode="vertical" :duration="5000"></tn-notice-bar>
        </view>
      </demo-title>
      
      <demo-title title="显示关闭按钮">
        <tn-notice-bar :show="closeNoticeShow" :list="list" :closeBtn="true" @close="closeNoticeShow = false"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="隐藏左右两侧图标">
        <tn-notice-bar :show="closeNoticeShow" :list="list" :rightIcon="false" :leftIcon="false" @close="closeNoticeShow = false"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="自定义左右两侧图标">
        <tn-notice-bar :show="closeNoticeShow" :list="list" :rightIcon="true" :leftIcon="true" rightIconName="set" leftIconName="all" @close="closeNoticeShow = false"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="自定义大小">
        <tn-notice-bar :show="closeNoticeShow" :list="list" :rightIcon="true" :fontSize="34" :leftIconSize="40" :rightIconSize="40" @close="closeNoticeShow = false"></tn-notice-bar>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-notice-bar :show="closeNoticeShow" :list="list" :rightIcon="true" backgroundColor="#EFEFEF" @close="closeNoticeShow = false"></tn-notice-bar>
        <view class="tn-margin-top">
          <tn-notice-bar :show="closeNoticeShow" :list="list" :rightIcon="true" backgroundColor="tn-main-gradient-indigo" @close="closeNoticeShow = false"></tn-notice-bar>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsNoticeBar',
    components: {demoTitle},
    data() {
      return {
        list: [
          'TuniaoUI现已发布V1.0.0',
          '今天天气晴朗，适合处理bug',
          'TuniaoUIV2.0.0即将发布',
          '今天想提前下班，领导不允许："你提前走人就算你是旷工了啊！"'
        ],
        closeNoticeShow: true,
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>

</style>
