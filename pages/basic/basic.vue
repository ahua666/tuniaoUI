<template>
  <view class="basic tn-safe-area-inset-bottom">

    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/index_bg/basic_new.jpg' mode='widthFix' class='backgroud-image'></image>
    </view>
    
    <block v-for="(item, index) in navList" :key="index">
      <view class="nav_title--wrap tn-margin-bottom-sm">
        <view class="nav_title tn-cool-bg-color-15">{{ item.title | titleFilter}}</view>
      </view>
      
      <view class='nav-list'>
        
        <block v-for="(content_item, content_index) in item.list" :key="content_index">
          <navigator
            open-type="navigate"
            hover-class='none'
            :url="content_item.url"
            class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-between"
            :class="[
              getRandomCoolBg(content_index)
            ]"
          >
            <view class="icon">
              <view :class="['tn-icon-' + content_item.icon]"></view>
            </view>
            <view class="nav-link">
              <view class='title'>{{ content_item.title }}</view>
            </view>
          </navigator>
        </block>
        
      </view>
    </block>
    
    <view class="tn-padding-bottom-xs"></view>

  </view>
</template>

<script>
  import basicListData from '@/mock/basic_page.js'
  
  export default {
    name: 'Basic',
    filters: {
      titleFilter(value) {
        if (value.length === 0) {
          return ''
        }
        let newString = ''
        for (let i = 0; i < value.length; i++) {
          if (i !== 0) {
            newString += ' / '
          }
          newString += value[i]
        }
        return newString
      }
    },
    data() {
      return {
        // nav菜单列表
        navList: basicListData.data
      }
    },
    methods: {
      getRandomCoolBg() {
        return this.$tn.color.getRandomCoolBgClass()
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  /* 顶部背景图 start */
  .top-backgroup {
    height: 450rpx;
    z-index: -1;

    .backgroud-image {
      width: 100%;
      height: 667rpx;
    }
  }
  /* 顶部背景图 end */
  
  /* 标题start */
  .nav_title {
    -webkit-background-clip: text;
    color: transparent;
    
    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      font-size: 46rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
      background-size: cover;
    }
  }
  /* 标题end */
  
  /* 组件导航列表 start*/
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0rpx 12rpx 0rpx;
    justify-content: space-between;
    
    /* 列表元素 start */
    .nav-list-item {
      padding: 20rpx 30rpx;
      border-radius: 12rpx;
      width: 45%;
      margin: 0 18rpx 40rpx;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 99;
      
      
      
      /* 元素标题 start */
      .nav-link {
        font-size: 32rpx;
        text-transform: capitalize;
        padding: 0 0 10rpx 0;
        position: relative;
        
        .title {
          color: #FFFFFF;
          margin-top: 20rpx;
          text-align: center;
        }
      }
      /* 元素标题 end */
      
      /* 元素图标 start */
      .icon {
        font-variant: small-caps;
        width: 90rpx;
        height: 90rpx;
        line-height: 90rpx;
        margin: 0;
        padding: 0;
        display: inline-flex;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        font-size: 50rpx;
        color: #FFFFFF;
        white-space: nowrap;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.05);
        background-size: cover;
        background-position: 50%;
        border-radius: 5000rpx;
      }
      /* 元素图标 end */
    }
    /* 列表元素 end */
  }
  /* 组件导航列表 end*/
</style>
