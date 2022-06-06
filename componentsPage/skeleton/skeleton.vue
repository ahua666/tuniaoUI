<template>
  <view class="components-skeleton tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>骨架屏</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="tn-padding-top"></view>
      
      <view class="news tn-skeleton">
        <block v-for="(item, index) in list" :key="index">
          <view class="news__item tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-top">
            <view class="news__item__info tn-flex tn-flex-direction-row tn-flex-row-center tn-flex-col-center">
              <view class="news__item__avatar tn-skeleton-circle">
                <image :src="item.userInfo.avatar"></image>
              </view>
              <view class="news__item__outline tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-around">
                <view class="news__item__nick-name tn-skeleton-fillet">{{ item.userInfo.nickName}}</view>
                <view class="news__item__release-date tn-skeleton-fillet">{{ item.content.releaseDate }}</view>
              </view>
            </view>
            <view class="news__item__content tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-center">
              <view class="news__item__content__data">
                <view class="news__item__title tn-text-ellipsis tn-skeleton-fillet">{{ item.content.title }}</view>
                <view class="news__item__desc tn-text-ellipsis-2 tn-skeleton-fillet">{{ item.content.desc }}</view>
              </view>
              <view class="news__item__main-image tn-skeleton-rect">
                <image :src="item.content.mainImage" mode="aspectFill"></image>
              </view>
            </view>
          </view>
        </block>
      </view>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
    
    <!-- 引用组件 -->
    <tn-skeleton :show="showSkeleton"></tn-skeleton>
    
  </view>
</template>

<script>
  export default {
    name: 'ComponentsSkeleton',
    data() {
      return {
        showSkeleton: true,
        list: [
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          }
        ]
      }
    },
    onLoad() {
      // 模拟加载数据完毕
      setTimeout(() => {
        this.showSkeleton = false
      }, 3000)
    }
  }
</script>

<style lang="scss" scoped>
  
  .components-skeleton {
    // background-color: $tn-bg-gray-color;
  }
  
  .news {
    position: relative;
    
    &__item {
      margin: 0 30rpx;
      padding: 10rpx;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      box-shadow: 4rpx 6rpx 28rpx 0px rgba(0, 0, 0, 0.1);
      margin-bottom: 30rpx;
      
      &__info {
        height: 80rpx;
        margin-bottom: 20rpx;
      }
      &__avatar {
        width: 80rpx;
        height: 100%;
        border-radius: 100%;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
        }
      }
      &__outline {
        height: 100%;
        margin-left: 20rpx;
      }
      &__nick-name {
        font-size: 30rpx;
        margin-bottom: 6rpx;
      }
      &__release-date {
        font-size: 22rpx;
        color: $tn-font-sub-color;
      }
      
      &__content {
        height: 140rpx;
        &__data {
          width: 60%;
          margin-right: 10rpx;
        }
      }
      &__title {
        width: 100%;
        font-size: 30rpx;
        font-weight: bold;
        margin-bottom: 10rpx;
      }
      &__desc {
        width: 100%;
        word-break: break-all;
        font-size: 24rpx;
      }
      &__main-image {
        width: 40%;
        height: 100%;
        border-radius: 5rpx;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
