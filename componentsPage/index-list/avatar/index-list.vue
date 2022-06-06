<template>

  <view class="components-index-list">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>IndexList索引列表</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <tn-index-list :scrollTop="scrollTop" :indexList="indexList" :customBarHeight="vuex_custom_bar_height" :stickyTop="vuex_custom_bar_height">
        <view v-for="(item, index) in list" :key="index">
          <tn-index-anchor :index="item.letter"></tn-index-anchor>
          <view v-for="(data_item,data_index) in item.data" :key="data_index" class="index-list-item tn-border-solid-bottom">
            <image class="index-list-item__image" src="/static/favicon.ico"></image>
            <view class="index-list-item__name">{{ data_item.name }}</view>
          </view>
        </view>
      </tn-index-list>

    </view>

  </view>

</template>

<script>
  import indexList from '../../mock/index.list.js'
  const letterArr = indexList.list.map(val => {
    return val.letter
  })
  export default {
    name: 'componentsIndexListAvatar',
    data() {
      return {
        // 滚动的距离
        scrollTop: 0,
        // 索引列表
        indexList: letterArr,
        list: indexList.list
      }
    },
    onPageScroll(e) {
      this.scrollTop = e.scrollTop
    },
    methods: {
      
    }

  }
</script>

<style lang="scss" scoped>
  .index-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    color: $tn-font-color;
    font-size: 28rpx;
    
    &__image {
      width: 100rpx;
      height: 100rpx;
      margin: 8rpx 8rpx;
      margin-right: 10rpx;
    }
  }
</style>
