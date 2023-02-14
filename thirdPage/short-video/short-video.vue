<template>
  <view class="third-page-short-video tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>短视频</tn-nav-bar>
        
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="container" :style="{height: containerHeight + 'px'}">
        <tn-custom-swiper
          class="swiper"
          :current="current"
          :duration="250"
          :circular="!loadingFirst"
          :vertical="true"
          @change="handleSwiperChange"
        >
          <block v-for="(item, index) in swiperList" :key="index">
            <tn-custom-swiper-item class="swiper__item">
              <view class="item__container">
                
                
                <video
                  v-if="item.loading"
                  class="item__video"
                  :id="`video-${index}`"
                  :src="item.src"
                  objectFit="cover"
                  :autoplay="false"
                  :loop="true"
                  :controls="false"
                  :show-progress="false"
                  :show-fullscreen-btn="false"
                  :show-center-play-btn="true"
                  :show-loading="false"
                  @error="handleVideoError($event, index)"
                  @loadedmetadata="handleVideoLoadedmetadata($event, index)"
                ></video>
                
                <block v-if="current === index">
                  <view class="item__content">
                    <view class="author-name">@{{item.author.name}}</view>
                    <view class="desc">{{item.desc}}</view>
                  </view>
                  
                  <view class="item__operation">
                    <view class="avatar">
                      <image class="image" :src="item.author.avatar"></image>
                    </view>
                    <view class="options like" @tap="clickLike(index)">
                      <view class="icon" :class="[item.like.flag ? 'icon__select tn-icon-like-fill' : 'tn-icon-like']"></view>
                      <view class="text">{{item.like.count}}</view>
                    </view>
                    <view class="options message">
                      <view class="icon tn-icon-comment"></view>
                      <view class="text">{{item.message}}</view>
                    </view>
                    <view class="options star" @tap="clickStar(index)">
                      <view class="icon" :class="[item.star.flag ? 'icon__select tn-icon-star-fill' : 'tn-icon-star']"></view>
                      <view class="text">{{item.star.count}}</view>
                    </view>
                    <view class="options share">
                      <view class="icon tn-icon-share-triangle"></view>
                      <view class="text">{{item.share}}</view>
                    </view>
                  </view>
                </block>
              </view>
            </tn-custom-swiper-item>
          </block>
        </tn-custom-swiper>
        
        <!-- <video
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        ></video>
        <video
          src="http://vjs.zencdn.net/v/oceans.mp4"
        ></video> -->
      </view>
        
    </view>
    
  </view>
</template>

<script>
  export default {
    name: 'ThirdPageShortVideo',
    data() {
      return {
        containerHeight: 0,
        current: 0,
        videoSrc: ['http://vjs.zencdn.net/v/oceans.mp4','http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'],
        h5FirstPlay: true,
        loadingFirst: true,
        swiperList: [
          {
            author: {
              name: '小泡泡',
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'
            },
            desc: '基于图鸟UI开发的第三方插件，图鸟加油，可以的。基于图鸟UI开发的第三方插件，图鸟加油，可以的。基于图鸟UI开发的第三方插件，图鸟加油，可以的。',
            like: {
              flag: true,
              count: 100
            },
            message: 800,
            star: {
              flag: false,
              count: 200
            },
            share: 300,
            loading: false,
            src: ''
          },
          {
            author: {
              name: '小泡泡',
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'
            },
            desc: '基于图鸟UI开发的第三方插件，图鸟加油，可以的。',
            like: {
              flag: true,
              count: 100
            },
            message: 800,
            star: {
              flag: false,
              count: 200
            },
            share: 300,
            loading: false,
            src: ''
          },
          {
            author: {
              name: '小泡泡',
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'
            },
            desc: '基于图鸟UI开发的第三方插件，图鸟加油，可以的。',
            like: {
              flag: true,
              count: 100
            },
            message: 800,
            star: {
              flag: false,
              count: 200
            },
            share: 300,
            loading: false,
            src: ''
          },
          {
            author: {
              name: '小泡泡',
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'
            },
            desc: '基于图鸟UI开发的第三方插件，图鸟加油，可以的。',
            like: {
              flag: true,
              count: 100
            },
            message: 800,
            star: {
              flag: false,
              count: 200
            },
            share: 300,
            loading: false,
            src: ''
          },
          {
            author: {
              name: '小泡泡',
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'
            },
            desc: '基于图鸟UI开发的第三方插件，图鸟加油，可以的。',
            like: {
              flag: true,
              count: 100
            },
            message: 800,
            star: {
              flag: false,
              count: 200
            },
            share: 300,
            loading: false,
            src: ''
          }
        ],
        // 存放当前缓冲视频是否加载成功
        loadingVideoFlag: []
      }
    },
    computed: {
      listLength() {
        return this.swiperList.length
      }
    },
    onLoad() {
      this.getContainerHeight()
      this.initData()
    },
    onReady() {
      this.$nextTick(() => {
        this.loadVideo()
      })
    },
    methods: {
      // 点击喜欢按钮
      clickLike(index) {
        let item = this.swiperList[index]
        item.like.flag = !item.like.flag
        this.$set(this.swiperList, index, item)
      },
      // 点击收藏按钮
      clickStar(index) {
        let item = this.swiperList[index]
        item.star.flag = !item.star.flag
        this.$set(this.swiperList, index, item)
      },
      // 获取可用区域的高度
      getContainerHeight() {
        const systemInfo = uni.getSystemInfoSync()
        this.containerHeight = systemInfo.safeArea.height - this.vuex_custom_bar_height + systemInfo.statusBarHeight
      },
      // 初始化数据
      initData() {
        this.loadingVideoFlag = Array(this.listLength).fill(false)
      },
      // 加载以当前current为基准的的前后各一个视频
      loadVideo() {
        // 获取当前轮播的index
        const index = this.current
        let prevIndex = index - 1 < 0 ? this.listLength - 1 : index - 1
        let nextIndex = index + 1 > this.listLength - 1 ? 0 : index + 1
        let currentItem = this.swiperList[index]
        let prevItem = this.swiperList[prevIndex]
        let nextItem = this.swiperList[nextIndex]
        
        if (!currentItem.loading) {
          currentItem.src = this.videoSrc[this.$tn.number.randomInt(0, 1)]
          currentItem.loading = true
          this.$set(this.swiperList, index, currentItem)
        }
        if (!prevItem.loading) {
          prevItem.src = this.videoSrc[this.$tn.number.randomInt(0, 1)]
          prevItem.loading = true
          this.$set(this.swiperList, prevIndex, prevItem)
        }
        if (!nextItem.loading) {
          nextItem.src = this.videoSrc[this.$tn.number.randomInt(0, 1)]
          nextItem.loading = true
          this.$set(this.swiperList, nextIndex, nextItem)
        }
        
        // 如果为非当前和前后的item，则进行重置
        for (let i = 0; i < this.listLength; i++) {
          if (![index, prevIndex, nextIndex].includes(i)) {
            let tempItem = this.swiperList[i]
            tempItem.loading = false
            tempItem.src = ''
            this.$set(this.swiperList, i, tempItem)
            // 重置视频加载标记位
            this.loadingVideoFlag[i] = false
          }
        }
        
        // 开始播放当前视频
        this.playCurrentVideo()
      },
      // 开始播放当前视频
      playCurrentVideo() {
        // 获取当前轮播的index
        const index = this.current
        // 开始播放当前的视频，并且停止其他视频
        setTimeout(() => {
          if (!this.loadingVideoFlag[index]) {
            this.$tn.message.toast('播放失败，请看其他视频')
            return
          }
        }, 800)
        for (let i = 0; i < this.listLength; i++) {
          const videoContext = uni.createVideoContext(`video-${i}`, this)
          if (i === index) {
            // #ifdef H5
            if (!this.h5FirstPlay) {
              videoContext.play()
            }
            // #endif
            // #ifndef H5
            videoContext.play()
            // #endif
            
          } else {
            // #ifdef MP-WEIXIN
            videoContext.stop()
            // #endif
            // #ifndef MP-WEIXIN
            videoContext.pause()
            // #endif
          }
        }
      },
      // 处理轮播的切换
      handleSwiperChange(e) {
        // console.log(e);
        this.current = e.current
        this.loadVideo()
        // #ifdef H5
        if (this.h5FirstPlay) {
          this.h5FirstPlay = false
        }
        // #endif
        
        // 当滑动到第3个并且是第一次滑动到该位置
        if (this.loadingFirst && e.current === 2) {
          this.loadingFirst = false
        }
      },
      // 视频出现元数据时触发
      handleVideoLoadedmetadata(e, index) {
        // console.log(index, e);
        if (!this.loadingVideoFlag[index] && this.current === index) {
          console.log('loadmetadata');
          // #ifdef H5
          if (!this.h5FirstPlay) {
            const videoContext = uni.createVideoContext(`video-${index}`, this)
            videoContext.play()
          }
          // #endif
          // #ifndef H5
          const videoContext = uni.createVideoContext(`video-${index}`, this)
          videoContext.play()
          // #endif
        }
        this.loadingVideoFlag[index] = true
      },
      // 视频加载失败时触发
      handleVideoError(e, index) {
        // console.log(index, e);
        this.loadingVideoFlag[index] = false
        if (index === this.current) {
          this.$tn.message.toast('播放失败，请看其他视频')
        }
      }
      
    }
  }
</script>

<style lang="scss" scoped>
  
  .swiper {
    width: 100%;
    height: 100%;
    display: block;
    
    &__item {
      background-color: #000000;
      
      .item {
        &__container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        &__video {
          width: 100%;
          height: 100%;
        }
        
        &__content {
          width: 70%;
          color: #FFFFFF;
          position: absolute;
          bottom: 30rpx;
          left: 30rpx;
          z-index: 1;
          transition-duration: 0s;
          
          .author-name {
            font-size: 38rpx;
            font-weight: bold;
            margin-bottom: 10rpx;
          }
          .desc {
            width: 100%;
            line-height: 1.3em;
            white-space: normal !important;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 5;
          }
        }
        
        &__operation {
          color: #FFFFFF;
          position: absolute;
          right: 30rpx;
          bottom: 120rpx;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
          transition-duration: 0s;
          
          .avatar {
            width: 80rpx;
            height: 80rpx;
            border-radius: 50%;
            overflow: hidden;
            border: 6rpx solid #FFFFFF;
            margin-bottom: 20rpx;
            
            .image {
              width: 100%;
              height: 100%;
            }
          }
          
          .icon {
            font-size: 60rpx;
            
            &__select {
              color: #FFCA28;
              animation: select-keyframes 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
          }
          
          .options {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 10rpx;
            
            .text {
              font-size: 24rpx;
            }
          }
        }
      }
    }
  }
  
  @keyframes select-keyframes {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
