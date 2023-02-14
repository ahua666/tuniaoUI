<template>

  <view class="components-scroll-list tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>ScrollList横向滚动</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <tn-scroll-list>
          <view class="tn-flex tn-margin-sm">
            <block v-for="(item, index) in 14" :key="index">
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="icon3__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" :class="[$tn.color.getRandomCoolBgClass(index)]">
                    <view class="tn-icon-gloves-fill"></view>
                  </view>  
                  <view class="tn-color-black tn-text-lg tn-text-center">
                    <text class="tn-text-ellipsis">傻北</text>
                  </view>
                </view>
              </view>
            </block>
          </view>
        </tn-scroll-list>
      </demo-title>
      
      <demo-title title="隐藏指示器">
        <tn-scroll-list :indicator="false">
          <view class="tn-flex tn-margin-sm">
            <block v-for="(item, index) in 14" :key="index">
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="icon3__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" :class="[$tn.color.getRandomCoolBgClass(index)]">
                    <view class="tn-icon-gloves-fill"></view>
                  </view>  
                  <view class="tn-color-black tn-text-lg tn-text-center">
                    <text class="tn-text-ellipsis">傻北</text>
                  </view>
                </view>
              </view>
            </block>
          </view>
        </tn-scroll-list>
      </demo-title>
      
      <demo-title title="自定义指示器样式">
        <tn-scroll-list :indicatorWidth="100" :indicatorBarWidth="30" indicatorColor="#D6F4FA" indicatorActiveColor="#27A1BA">
          <view class="tn-flex tn-margin-sm">
            <block v-for="(item, index) in 14" :key="index">
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="icon3__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" :class="[$tn.color.getRandomCoolBgClass(index)]">
                    <view class="tn-icon-gloves-fill"></view>
                  </view>  
                  <view class="tn-color-black tn-text-lg tn-text-center">
                    <text class="tn-text-ellipsis">傻北</text>
                  </view>
                </view>
              </view>
            </block>
          </view>
        </tn-scroll-list>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsScrollList',
    components: {demoTitle},
    data() {
      return {
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
  
  .components-scroll-list {
    min-height: 100vh;
  }

  .icon3 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 30rpx;
      margin: 20rpx 10rpx;
      margin-top: 0;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;
      
      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 25%;
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
        }
      }
    }
  }
</style>
