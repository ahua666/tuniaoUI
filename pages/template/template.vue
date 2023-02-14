<template>
  <view class="template tn-safe-area-inset-bottom">
  
    <view class="top-backgroup">
      <image src='https://tnuiimage.tnkjapp.com/index_bg/template_new.jpg' mode='widthFix' class='backgroud-image'></image>
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
            class="nav-list-item tn-shadow-blur tn-cool-bg-image"
            :class="[
              getRandomCoolBg(content_index)
            ]"
          >
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view class="nav-link">
                <view class='title'>{{ content_item.title }}</view>
              </view>
              <view class="icon">
                <view :class="['tn-icon-' + content_item.icon]"></view>
              </view>
            </view>
            <view class="author">
              <view class='name tn-text-sm tn-color-gray' style="margin-left: -10rpx;">
                <text class="tn-icon-code tn-padding-right-xs"></text>
                <text class=""> {{ content_item.author }} </text>
              </view>
            </view>
          </navigator>
        </block>
      </view>
    </block>
    
    <view class="tn-padding-bottom-xs"></view>
  
  </view>
</template>

<script>
  import templateListData from '@/mock/template_page.js'
  
  export default {
    name: 'TemplatePage',
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
        navList: templateListData.data
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
      padding: 50rpx 30rpx 36rpx 30rpx;
      border-radius: 12rpx;
      width: 100%;
      margin: 0 18rpx 90rpx;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 99;
      // display: flex;
      // align-items: center;
      // justify-content: space-between;
      
      /* 元素标题 start */
      .nav-link {
        flex: 1;
        font-size: 32rpx;
        text-transform: capitalize;
        padding: 10rpx 0 20rpx 0;
        position: relative;
        
        .title {
          color: #FFFFFF;
          text-align: left;
        }
      }
      /* 元素标题 end */
      
      /* 元素图标 start */
      .icon {
        font-variant: small-caps;
        width: 70rpx;
        height: 70rpx;
        line-height: 70rpx;
        margin: 0;
        padding: 0;
        display: inline-flex;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        font-size: 45rpx;
        color: #FFFFFF;
        white-space: nowrap;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.05);
        background-size: cover;
        background-position: 50%;
        border-radius: 5000rpx;
      }
      /* 元素图标 end */
      
      /* 作者信息 start*/
      .author {
        // background-color: red;
        box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.12);
        border-radius: 0 0 15rpx 15rpx;
        position: absolute;
        width: 85%;
        line-height: 50rpx;
        left: 50%;
        bottom: -50rpx;
        transform: translateX(-50%);
        z-index: -1;
        text-align: center;
      }
      /* 作者信息 end*/
    }
    /* 列表元素 end */
  }
  /* 组件导航列表 end*/
</style>
