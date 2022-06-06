<template>

  <view class="components-swiper tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Swiper轮播图</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="圆角方形">
        <tn-swiper :list="list"></tn-swiper>
      </demo-title>
      
      <demo-title title="方形">
        <tn-swiper :list="list" mode="rect"></tn-swiper>
      </demo-title>
      
      <demo-title title="点">
        <tn-swiper :list="list" mode="dot"></tn-swiper>
      </demo-title>
      
      <demo-title title="数值">
        <tn-swiper :list="list" mode="number"></tn-swiper>
      </demo-title>
      
      <demo-title title="隐藏指示器">
        <tn-swiper :list="list" mode=""></tn-swiper>
      </demo-title>
      
      <demo-title title="轮播标题">
        <tn-swiper :list="list" :title="true" mode=""></tn-swiper>
      </demo-title>
      
      <demo-title title="指示器设置在右上角">
        <tn-swiper :list="list" indicatorPosition="topRight"></tn-swiper>
      </demo-title>
      
      <demo-title title="3D切换效果">
        <tn-swiper :list="list" :effect3d="true"></tn-swiper>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsSwiper',
    components: {demoTitle},
    data() {
      return {
        list: [
          {image: 'https://tnuiimage.tnkjapp.com/swiper/spring.jpg', title: '春天'},
          {image: 'https://tnuiimage.tnkjapp.com/swiper/summer.jpg', title: '夏天'},
          {image: 'https://tnuiimage.tnkjapp.com/swiper/autumn.jpg', title: '秋天'},
          {image: 'https://tnuiimage.tnkjapp.com/swiper/winter.jpg', title: '冬天'},
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
