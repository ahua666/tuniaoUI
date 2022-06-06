<template>
  <view class="components-empty tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>空页面</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="内置图标">
        <block v-for="(item, index) in inlineMode" :key="index">
          <view class="empty__item">
            <tn-empty :mode="item"></tn-empty>
          </view>
        </block>
      </demo-title>
      
      <demo-title title="自定义图标">
        <view class="empty__item">
          <tn-empty icon="moon-fill" text="夜深人静"></tn-empty>
        </view>
      </demo-title>
      
      <demo-title title="自定义图片">
        <view class="empty__item">
          <tn-empty icon="https://tnuiimage.tnkjapp.com/empty/alien/2.png" text="空空如也"></tn-empty>
        </view>
        <block v-for="(value, key, index) in imgEmpty" :key="index">
          <view class="empty__item">
            <tn-empty :icon="value" :mode="key"></tn-empty>
          </view>
        </block>
      </demo-title>
      
      <demo-title title="隐藏文字">
        <view class="empty__item">
          <tn-empty icon="https://tnuiimage.tnkjapp.com/empty/alien/2.png" mode=""></tn-empty>
        </view>
        <view class="empty__item tn-margin-top">
          <tn-empty icon="help" mode=""></tn-empty>
        </view>
      </demo-title>
      
      <demo-title title="带跳转按钮">
        <view class="empty__item">
          <tn-empty icon="moon-fill" text="夜深人静">
            <tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm">看看小视频</tn-button>
          </tn-empty>
        </view>
      </demo-title>
      
      <demo-title title="自定义样式">
        <view class="empty__item">
          <tn-empty icon="moon-fill" text="夜深人静" :iconSize="120" :textSize="34" iconColor="#E6E6E6" textColor="#C6D1D8"></tn-empty>
        </view>
        <view class="empty__item tn-margin-top">
          <tn-empty icon="https://tnuiimage.tnkjapp.com/empty/alien/2.png" text="空空如也" :imgWidth="200" :imgHeight="200"></tn-empty>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'ComponentsEmpty',
    components: { demoTitle },
    data() {
      return {
        inlineMode: ['cart','page','search','address','network','order','coupon','favor','permission','history','message','list','data','comment'],
        imgEmpty: {
          cart: '/componentsPage/static/images/empty/cart.jpg',
          comment: '/componentsPage/static/images/empty/comment.jpg',
          data: '/componentsPage/static/images/empty/data.jpg',
          network: '/componentsPage/static/images/empty/network.jpg',
          page: '/componentsPage/static/images/empty/page.jpg',
          permission: '/componentsPage/static/images/empty/permission.jpg',
          search: '/componentsPage/static/images/empty/search.jpg'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .components-empty {
    background-color: $tn-bg-gray-color;
  }
  
  .empty {
    &__item {
      background-color: #FFFFFF;
      padding: 20rpx 0;
    }
  }
</style>
