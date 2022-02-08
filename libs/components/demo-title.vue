<template>
  <view class="demo-title">
    <view>
      <view v-if="type === 'first'" class="main_title">
        <view v-if="leftIcon" class="main_title__icon main_title__icon--left" :class="[`tn-icon-${leftIcon}`]"></view>
        <view class="main_title__content">{{ title }}</view>
        <view v-if="rightIcon" class="main_title__icon main_title__icon--right" :class="[`tn-icon-${rightIcon}`]"></view>
      </view>
      <view v-if="type === 'second'" class="second_title">
        <view class="second_title__content">{{ title }}</view>
      </view>
    </view>
    <view class="content" :class="[{
      'content--padding': contentPadding
    }]">
      <slot></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'demo-title',
    props: {
      // 标题类型
      type: {
        type: String,
        default: 'first'
      },
      // 标题
      title: {
        type: String,
        default: ''
      },
      // 左图标
      leftIcon: {
        type: String,
        default: 'star'
      },
      // 右图标
      rightIcon: {
        type: String,
        default: 'star'
      },
      // 内容容器是否有两边边距
      contentPadding: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main_title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50rpx;
    font-size: 36rpx;
    font-weight: bold;
    
    &__content {
      padding: 0 18rpx;
    }
    
    &__icon {
      font-size: 34rpx;
    }
  }
  
  .second_title {
    margin: 24rpx 0;
    margin-left: 30rpx;
    
    &__content {
      font-size: 32rpx;
      font-weight: bold;
    }
  }
  
  .content {
    margin-top: 30rpx;
    
    &--padding {
      margin-left: 30rpx;
      margin-right: 30rpx;
    }
  }
</style>
