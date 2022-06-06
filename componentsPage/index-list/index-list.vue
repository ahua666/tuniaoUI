<template>

  <view class="components-index-list">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>IndexList索引列表</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <multiple-options-demo
        :list="optionsList"
      ></multiple-options-demo>

    </view>

  </view>

</template>

<script>
  import multipleOptionsDemo from '@/libs/components/multiple-options-demo'

  export default {
    name: 'componentsIndexList',
    components: { multipleOptionsDemo },
    data() {
      return {
        // 选项列表数据
        optionsList: [
          { title: '普通列表', desc: '传入列表数据即可使用', url: '/componentsPage/index-list/base/index-list' },
          { title: '带头像列表', desc: '通过自定义列表来实现', url: '/componentsPage/index-list/avatar/index-list' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
