<template>
  <view class="components-goods-nav tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>商品导航</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础" :contentPadding="false">
        <tn-goods-nav></tn-goods-nav>
      </demo-title>
      
      <demo-title title="显示阴影" :contentPadding="false">
        <tn-goods-nav :shadow="true"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="选项设置为头像" :contentPadding="false">
        <tn-goods-nav :options="avatarOptions"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="设置角标" :contentPadding="false">
        <tn-goods-nav :options="countOptions"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="设置边距按钮" :contentPadding="false">
        <tn-goods-nav buttonType="paddingRect"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="设置圆角按钮" :contentPadding="false">
        <tn-goods-nav buttonType="round"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="不设置选项" :contentPadding="false">
        <tn-goods-nav :options="[]"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="自定义颜色" :contentPadding="false">
        <tn-goods-nav :options="customOptions" buttonType="round" :buttonGroups="customButtonGroups"></tn-goods-nav>
      </demo-title>
      
      <demo-title title="固定在底部" :contentPadding="false">
        <tn-goods-nav :fixed="true" :safeAreaInsetBottom="true" @optionClick="onOptionClick" @buttonClick="onButtonClick"></tn-goods-nav>
      </demo-title>
      
      <view style="padding-bottom: 88rpx;"></view>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'ComponentsGoodsNav',
    components: { demoTitle },
    data() {
      return {
        avatarOptions: [{
          avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg'
        },{
          icon: 'service',
          text: '客服'
        },{
          icon: 'star',
          text: '收藏'
        }],
        countOptions: [{
          avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
          count: 10
        },{
          icon: 'service',
          text: '客服',
          count: 100
        },{
          icon: 'star',
          text: '收藏'
        }],
        customOptions: [{
          avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
          count: 10,
          countBackgroundColor: '#E83A30'
        },{
          icon: 'service',
          text: '客服',
          count: 100,
          countBackgroundColor: 'transparent',
          countFontColor: '#E83A30'
        },{
          icon: 'star',
          text: '收藏',
          iconColor: '#838383',
          fontColor: '#080808'
        }],
        customButtonGroups: [{
          text: '加入购物车',
          backgroundColor: 'tn-cool-bg-color-8',
          color: '#FFFFFF'
        },{
          text: '结算',
          backgroundColor: 'tn-cool-bg-color-8--reverse',
          color: '#FFFFFF'
        }]
      }
    },
    methods: {
      // 选项点击事件
      onOptionClick(e) {
        this.$t.message.toast(`点击了第${e.index}个选项`)
      },
      // 按钮点击事件
      onButtonClick(e) {
        this.$t.message.toast(`点击了第${e.index}个按钮`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .components-goods-nav {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
