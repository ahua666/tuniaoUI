<template>
  <view class="basic-test">
    <swiper class="swiper" :circular="true" :current="currentSwiperIndex" previous-margin="260rpx" next-margin="260rpx" @change="swiperChange">
      <swiper-item v-for="(item, index) in swiperList" :key="index" class="swiper__item" :class="[swiperItemClass(index)]">
        <view class="swiper__item__content" :class="[swiperContentClass(index)]">
          <image :src="item" mode="scaleToFill"></image>
        </view>
      </swiper-item>
    </swiper>
    
    <swiper class="phone-swiper" :circular="true"
      :current="phoneCurrentSwiperIndex" previous-margin="190rpx" next-margin="190rpx" @change="phoneSwiperChange"> 
      <swiper-item v-for="(item,index) in phoneSwiperList" :key="index" class="phone-swiper__item">
        
        <view class="tnphone-black-min phone-swiper__item__content wow fadeInLeft2" :class="[phoneSwiperContentClass(index)]">
        	<view class="skin wow fadeInRight2">
        	  <view class="screen wow fadeInUp2">
        		  <view class="peak wow">
        			  <view class="sound"></view>
        			  <view class="lens"></view>
        		  </view>
              
              <view class="demo-image">
                <image :src="item.url" mode="aspectFill"></image>
              </view>
        
        		</view>
        	</view>
        </view>
        
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: 'TestPage',
    data() {
      return {
        swiperList: [
          'https://tnuiimage.tnkjapp.com/swiper/spring.jpg',
          'https://tnuiimage.tnkjapp.com/swiper/summer.jpg',
          'https://tnuiimage.tnkjapp.com/swiper/autumn.jpg',
          'https://tnuiimage.tnkjapp.com/swiper/winter.jpg',
          'https://tnuiimage.tnkjapp.com/swiper/winter.jpg'
        ],
        phoneSwiperList: [{
          id: 0,
          type: 'image',
          name: '总有你想不到的创意',
          text: '海量分享',
          url: 'https://tnuiimage.tnkjapp.com/swiper/test.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d1.png'
        }, {
          id: 1,
          type: 'image',
          name: '寻找一起成长的小伙伴',
          text: '愉快玩耍',
          url: 'https://tnuiimage.tnkjapp.com/swiper/banner-animate.png',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d4.png'
        }, {
          id: 2,
          type: 'image',
          name: '更多彩蛋等你探索',
          text: '酷炫多彩',
          url: 'https://tnuiimage.tnkjapp.com/swiper/test.jpg',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d5.png'
        }, {
          id: 3,
          type: 'image',
          name: '更多彩蛋等你探索',
          text: '酷炫多彩',
          url: 'https://tnuiimage.tnkjapp.com/swiper/banner-animate.png',
          pngurl: 'https://tnuiimage.tnkjapp.com/swiper/c4d5.png'
        }],
        currentSwiperIndex: 0,
        phoneCurrentSwiperIndex: 0
      }
    },
    computed: {
      // 计算当前对应轮播前后的item对应的类
      swiperItemClass() {
        return (index) => {
          if ((this.currentSwiperIndex === 0 && index === this.swiperList.length - 1) || (this.currentSwiperIndex - 1 === index)) {
            return 'swiper__item--prev'
          }
          if ((this.currentSwiperIndex === this.swiperList.length - 1 && index === 0) || (this.currentSwiperIndex + 1 === index)) {
            return 'swiper__item--next'
          }
          if (this.currentSwiperIndex === index) {
            return 'swiper__item--current'
          }
        }
      },
      // 计算轮播内容对应的类
      swiperContentClass() {
        return (index) => {
          if (this.currentSwiperIndex === index) {
            return 'swiper__item__content--current'
          }
          if ((this.currentSwiperIndex === 0 && index === this.swiperList.length - 1) || (this.currentSwiperIndex - 1 === index)) {
            return 'swiper__item__content--prev'
          }
          if ((this.currentSwiperIndex === this.swiperList.length - 1 && index === 0) || (this.currentSwiperIndex + 1 === index)) {
            return 'swiper__item__content--next'
          }
        }
      },
      // 计算轮播内容对应的类
      phoneSwiperContentClass() {
        return (index) => {
          if (this.phoneCurrentSwiperIndex === index) {
            return 'phone-swiper__item__content--current'
          }
          if ((this.phoneCurrentSwiperIndex === 0 && index === this.phoneSwiperList.length - 1) || (this.phoneCurrentSwiperIndex - 1 === index)) {
            return 'phone-swiper__item__content--prev'
          }
          if ((this.phoneCurrentSwiperIndex === this.phoneSwiperList.length - 1 && index === 0) || (this.phoneCurrentSwiperIndex + 1 === index)) {
            return 'phone-swiper__item__content--next'
          }
        }
      }
    },
    onReady() {
      
    },
    methods: {
      // 轮播图切换
      swiperChange(e) {
        // console.log(e.detail.current);
        this.currentSwiperIndex = e.detail.current
      },
      phoneSwiperChange(e) {
        this.phoneCurrentSwiperIndex = e.detail.current
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-test {
    min-height: 100vh;
  }
  
  .swiper {
    width: 100%;
    height: 400rpx;
    
    /deep/ .uni-swiper-slides {
      inset: 0 260rpx;
    }
    
    &__item {
      
      &--prev {
        left: -10rpx;
      }
      
      &--next {
        left: 10rpx;
      }
      
      &--current {
        left: 0px;
      }
      
      &__content {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 30rpx;
        overflow: hidden;
        transition: transform 0.25s ease;
        transform: scale(0.8);
        
        &--prev {
          transform: scale(0.8) perspective(200rpx) rotateY(10deg);
        }
        
        &--next {
          transform: scale(0.8) perspective(200rpx) rotateY(-10deg);
        }
        
        &--current {
          transform: scale(1);
        }
        
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  
  .phone-swiper {
    margin-top: 180rpx;
    height: 900rpx;
    
    /deep/ .uni-swiper-slides {
      inset: 0 190rpx;
    }
    
    &__item {
      
      &__content {
        transition: transform 0.25s ease;
        transform: scale(0.8);
        
        &--prev {
          transform: scale(0.8) perspective(200rpx) rotateY(10deg);
        }
        
        &--next {
          transform: scale(0.8) perspective(200rpx) rotateY(-10deg);
        }
        
        &--current {
          transform: scale(1);
        }
      }
      
      .demo-image {
        display: flex;
        align-items: center;
        justify-content: center;
        
        image {
          width: 100%;
          height: 730rpx;
        }
      }
    }
  }
  
  
  /* tnphone-black-min 细边框 start */
  .tnphone-black-min {width: 380rpx; height: 760rpx; border-radius: 40rpx; background: #C6D1D8; padding: 7rpx; display: table; color: #333;
  	box-sizing: border-box; box-shadow: 0rpx 0rpx 0rpx 5rpx rgba(80,80,80,.8) inset; cursor: default; position: relative}
  .tnphone-black-min .skin {width: 100%; height: 100%; border-radius: 40rpx; background: #222; padding: 10rpx; box-shadow: 0rpx 0rpx 0rpx 7rpx rgba(68,68,68,.3)}
  .tnphone-black-min .screen {width: 100%; height: 100%; border-radius: 30rpx; background: #fff; position: relative; overflow: hidden}
  .tnphone-black-min .head {width: 100%; height: 90rpx; text-align: center; position: absolute; padding: 45rpx 15rpx 10rpx 15rpx;}
  .tnphone-black-min .peak {left: 22%;width: 56%; height: 27rpx; margin: -2rpx auto 0rpx; border-radius: 0 0 20rpx 20rpx; background: #222; position: absolute}
  .tnphone-black-min .sound {width: 48rpx; height: 6rpx; border-radius: 15rpx; background: #555; position: absolute; left: 50%; top: 50%; margin-left: -24rpx; margin-top: -10rpx;
  	box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset}
  .tnphone-black-min .lens {width: 6rpx; height: 6rpx; border-radius: 50%; background: #2c5487; position: absolute; left: 50%; top: 50%; margin-left: 34rpx; margin-top: -10rpx}
  .tnphone-black-min .talk {width: 50%; height: 6rpx; border-radius: 15rpx; background: rgba(0,0,0,.3); position: absolute; bottom: 8rpx; left: 50%; margin-left: -25%}
  .tnphone-black-min .area-l,.tnphone-black-min .area-r {width: 70rpx; height: 16rpx; position: absolute; top: 6rpx}
  .tnphone-black-min .area-l {left: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-left: 20rpx;}
  .tnphone-black-min .area-r {right: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-right: 20rpx;}
  .tnphone-black-min .fa-feed {float: left; font-size: 12rpx!important; transform:rotate(-45deg); margin-top: 4rpx; margin-right: 8rpx}
  .tnphone-black-min .fa-battery-full {float: left; font-size: 12rpx!important; margin-top: 6rpx}
  .tnphone-black-min .fa-chevron-left {float: left; margin-top: 4rpx}
  .tnphone-black-min .fa-cog {float: right; margin-top: 4rpx}
  .tnphone-black-min .btn01 {width: 3rpx; height: 28rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 105rpx; left: -3rpx}
  .tnphone-black-min .btn02 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 160rpx; left: -3rpx}
  .tnphone-black-min .btn03 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 230rpx; left: -3rpx}
  .tnphone-black-min .btn04 {width: 3rpx; height: 86rpx; border-radius: 0 3rpx 3rpx 0; background: #222; position: absolute; top: 180rpx; right: -3rpx}
  /* tnphone-black-min 细边框 end */
</style>
