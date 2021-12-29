<template>
  <view class="tn-bg-red" style="height: 100vh;">
    <view class="tabbar">
      <view class="tabbar__bg" :style="wrapStyle"></view>
      <view class="tabbar__list">
        <block v-for="(item, index) in tabbar" :key="index">
          <view :id="`tabbar_item_${index}`" class="tabbar__item" :class="[{'tabbar__item--active': index === currentTabbarIndex}]" @click="changeTabbar(index)">
            <view class="tabbar__item__icon" :class="[item.icon]"></view>
            <view class="tabbar__item__text">{{ item.name }}</view>
          </view>
        </block>
      </view>
      <view class="tabbar__select-active-bg" :class="[showActiceBg ? 'tabbar__select-active-bg--show' : 'tabbar__select-active-bg--hide']" :style="activeBgStyle"></view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'TestPage',
    data() {
      return {
        wrapMaskPositionLeft: 0,
        activeBgPositionLeft: 0,
        showActiceBg: false,
        currentTabbarIndex: 0,
        tabbarItemInfo: [],
        tabbar: [
          { name: 'home', icon: 'tn-icon-baby' },
          { name: 'home', icon: 'tn-icon-baby' },
          { name: 'home', icon: 'tn-icon-baby' },
          { name: 'home', icon: 'tn-icon-baby' },
          { name: 'home', icon: 'tn-icon-baby' }
        ]
        
      }
    },
    computed: {
      wrapStyle() {
        return {
          '-webkit-mask-position': `${this.wrapMaskPositionLeft}px -1px, 100%`
        }
      },
      activeBgStyle() {
        return {
          'left': `${this.activeBgPositionLeft}px`
        }
      }
    },
    onReady() {
      this.$nextTick(() => {
        this.getTabbarItemInfo()
        this.updateHollowsPosition()
        this.updateActiveBgPosition(true)
      })
    },
    methods: {
      // 获取底部元素的位置
      getTabbarItemInfo() {
        const view = uni.createSelectorQuery().in(this)
        for(let i = 0; i < this.tabbar.length; i++) {
          view.select('#tabbar_item_' + i).boundingClientRect()
        }
        view.exec(res => {
          if (!res.length) {
            setTimeout(() => {
              this.getTabbarItemInfo()
            }, 10)
            return
          }
          
          // 将信息存入数组中
          res.map((item) => {
            this.tabbarItemInfo.push({
              left: item.left,
              width: item.width
            })
          })
          console.log(this.tabbarItemInfo)
        })
      },
      // 更新凹陷位置
      updateHollowsPosition() {
        const { width, left } = this.tabbarItemInfo[this.currentTabbarIndex]
        // 计算掩模图片的宽高比
        // const imageRatio = 200 / 92
        // 计算定高的宽比
        const imageFixedHeightWidthRatioValue = 300 * (uni.upx2px(64) / 92)
        this.wrapMaskPositionLeft = left - ((imageFixedHeightWidthRatioValue - width) / 2)
        console.log(imageFixedHeightWidthRatioValue, this.wrapMaskPositionLeft);
      },
      // 更新激活时背景的位置
      updateActiveBgPosition(init = false) {
        const { width, left } = this.tabbarItemInfo[this.currentTabbarIndex]
        this.activeBgPositionLeft = left + ((width - uni.upx2px(100)) / 2)
        if (!init) {
          this.showActiceBg = false
          setTimeout(() => {
            this.showActiceBg = true
          }, 150)
        } else {
          this.showActiceBg = true
        }
      },
      // 修改当前选中的tabbar
      changeTabbar(index) {
        this.currentTabbarIndex = index
        this.updateHollowsPosition()
        this.updateActiveBgPosition()
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .tabbar {
    height: 100%;
    height: 110rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    
    &__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      
      // background-color: rgba(255, 255, 255, 0.3);
      background-color: #FFFFFF;
      // , linear-gradient(#000, #000)
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 61.5'%3E%3Cpath d='M100 0H0c32.9 0 49.3 61.5 100 61.5S167.1 0 200 0H100z'/%3E%3C/svg%3E"), linear-gradient(#000, #000);
      // -webkit-mask-size: auto 50px, auto, cover;
      -webkit-mask-size: auto 64rpx, cover;
      -webkit-mask-repeat: no-repeat;
      // -webkit-mask-position: 93.75px -1px, 100%;
      -webkit-mask-composite: xor;   /*只显示不重合的地方， chorem 、safari 支持*/
      // backdrop-filter: blur(5px);
      z-index: 1;
      transition: 0.5s;
    }
    
    &__list {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    &__item {
      height: 100%;
      width: 100%;
      flex: 1;
      text-align: center;
      font-size: 28rpx;
      position: relative;
      
      &--active {
        .tabbar__item__icon {
          top: -28rpx;
        }
        
        .tabbar__item__text {
          opacity: 1;
        }
      }
      
      &__icon {
        font-size: 56rpx;
        position: absolute;
        left: 0;
        right: 0;
        top: 10px;
        transition: 0.5s;
      }
      
      &__text {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10rpx;
        transition: 0.5s;
        opacity: 0;
      }
    }
    
    &__select-active-bg {
      position: absolute;
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      background-color: #FFFFFF;
      transition: 0.5s;
      z-index: -1;
      
      &--hide {
        top: calc(110rpx + 50rpx);
      }
      
      &--show {
        top: -48rpx;
      }
    }
  }
  
  // .wrap {
  //   width: 100%;
  //   height: 100rpx;
    
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   // background-color: rgba(255, 255, 255, 0.3);
  //   background-color: #FFFFFF;
  //   // -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 28'%3E%3Cpath d='M13.37 9.37C17.23 20.36 27.7 28.23 40 28.23s22.77-7.87 26.63-18.85C68.62 3.73 74.01 0 80 0H0c5.99 0 11.38 3.73 13.37 9.37z'/%3E%3C/svg%3E"), linear-gradient(red, red);
  //   // -webkit-mask-size: 140rpx, 100%;
  //   // -webkit-mask-repeat: no-repeat;
  //   // -webkit-mask-position: 0 0, 0;
  //   // -webkit-mask-composite: xor;   /*只显示不重合的地方， chorem 、safari 支持*/
  //   // mask-composite: exclude; /* 排除，只显示不重合的地方， firefox 支持 */
  //   // backdrop-filter: blur(5px)
    
  //   &::before {
  //     content: '';
  //     position: absolute;
  //     width: 100%;
  //     height: 100%;
  //     left: 0;
  //     top: 0;
  //     box-shadow: 0 -3rpx 8rpx rgba(0, 0, 0, 0.08);
  //   }
  // }
</style>
