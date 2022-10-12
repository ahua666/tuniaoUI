<template>
  
  <view class="basic-icon">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>图标</tn-nav-bar>
    
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <tn-sticky :customNavHeight="vuex_custom_bar_height">
        <view class="search-content">
          <input class="search-content__input" placeholder-class="search-content__input-placeholder" placeholder="请输入图标名称吖" @input="saerchInput" />
        </view>
      </tn-sticky>
      
      <view class="icon__container tn-flex tn-flex-wrap tn-flex-row-left tn-flex-col-center tn-margin">
        <block v-for="(item, index) in resultIconList" :key="index">
          <view
            class="icon__item tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center icon-shadow"
            :class="[{'icon__item--active': index === currentIconIndex}]"
            @click="clickIcon(index, item.name)"
          >
            <view class="icon__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
              <view :class="[`tn-icon-${item.name}`]"></view>
            </view>
            <view class="icon__item--title tn-text-ellipsis">{{ item.name }}</view>
          </view>
        </block>
      </view>
      <view class="tn-text-center tn-margin-bottom-xl">
        <view>icon目前400+，里面缺少你想要的吗？</view>
        <view>UI期待你的需求留言</view>
        <view>后续图标多了，加上分类</view>
      </view>
      
      <view class="tn-padding-bottom"></view>
      
    </view>
    
  </view>
  
</template>

<script>
  import iconData from './iconfont.js'
  export default {
    name: 'basicIcon',
    data() {
      return {
        // 图标列表
        iconList: iconData.data,
        // 用户输入的内容
        searchValue: '',
        // 当前点击的图标序号
        currentIconIndex: -1
      }
    },
    computed: {
      resultIconList() {
        if (this.searchValue === '') return this.iconList
        return this.iconList.filter((item) => {
          return item.name.includes(this.searchValue)
        })
      }
    },
    methods: {
      // input输入的内容
      saerchInput(e) {
        this.searchValue = e.target.value
      },
      // 点击图标
      clickIcon(index, name) {
        this.currentIconIndex = index
        this.$t.message.toast(name, false, null, 'none', 5000)
      },
    }
  }
</script>

<style lang="scss" scoped>
  
  /* 搜索框 start */
  .search-content {
    padding-top: 16rpx;
    margin: 40rpx 40rpx;
    
    &__input {
      caret-color: $tn-main-color;
      width: 100%;
      height: 70rpx;
      line-height: 60rpx;
      border-radius: 100rpx;
      text-align: center;
      margin: 0 auto;
      background-color: #FFFFFF;
      color: #080808;
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.05);
    }
    
    &__input-placeholder {
      font-size: 24rpx;
    }
  }
  /* 搜索框 end */
  
  /* 图标容器 start */
  .icon-shadow{
      box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.06);
  }
  .icon {
    &__container {
      margin-bottom: 30rpx;
    }
    
    &__item {
      width: 30.4%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      margin-top: 0;
      transform: scale(1);
      transition: transform 0.2s linear;
      transform-origin: center center;
      
      &--active {
        transform: scale(0.95);
        box-shadow: 
          inset 10rpx 10rpx 18rpx rgba(0, 0, 120, 0.04),
          inset -8rpx -8rpx 20rpx rgba(0, 0, 120, 0.03);
      }
      
      &--icon {
        width: 80rpx;
        height: 80rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
        }
      }
      
      &--title {
        width: 100%;
        color: #78909C;
        font-size: 28rpx;
        text-align: center;
      }
    }
  }
  /* 图标容器 end */
  
</style>
