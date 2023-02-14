<template>

  <view class="components-swipe-action tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>swipeAction滑动菜单</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <!-- <tn-swipe-action>
          
        </tn-swipe-action> -->
        <tn-swipe-action-item :options="options1" name="0" @click="onSwiperItemClick">
          <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
            <view class="swipe-action__item__image">
              <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
            </view>
            <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
              <view class="swipe-action__item__info__title">
                基本使用
              </view>
              <view class="swipe-action__item__info__desc">
                向左滑动即可看到
              </view>
            </view>
          </view>
        </tn-swipe-action-item>
      </demo-title>
      
      <demo-title title="多菜单">
        <tn-swipe-action>
          <tn-swipe-action-item :options="options2">
            <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
              <view class="swipe-action__item__image">
                <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
              </view>
              <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
                <view class="swipe-action__item__info__title">
                  多菜单
                </view>
                <view class="swipe-action__item__info__desc">
                  向左滑动即可看到
                </view>
              </view>
            </view>
          </tn-swipe-action-item>
        </tn-swipe-action>
      </demo-title>
      
      <demo-title title="带图标菜单">
        <tn-swipe-action>
          <tn-swipe-action-item :options="options3">
            <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
              <view class="swipe-action__item__image">
                <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
              </view>
              <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
                <view class="swipe-action__item__info__title">
                  带图标菜单
                </view>
                <view class="swipe-action__item__info__desc">
                  向左滑动即可看到
                </view>
              </view>
            </view>
          </tn-swipe-action-item>
        </tn-swipe-action>
      </demo-title>
      
      <demo-title title="单图标菜单">
        <tn-swipe-action>
          <tn-swipe-action-item :options="options4">
            <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
              <view class="swipe-action__item__image">
                <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
              </view>
              <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
                <view class="swipe-action__item__info__title">
                  单图标菜单
                </view>
                <view class="swipe-action__item__info__desc">
                  向左滑动即可看到
                </view>
              </view>
            </view>
          </tn-swipe-action-item>
        </tn-swipe-action>
      </demo-title>
      
      <demo-title title="关联打开滑动菜单">
        <tn-swipe-action>
          <tn-swipe-action-item v-for="(item,index) in 2" :key="index" :name="index" :options="options2">
            <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
              <view class="swipe-action__item__image">
                <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
              </view>
              <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
                <view class="swipe-action__item__info__title">
                  关联打开滑动菜单
                </view>
                <view class="swipe-action__item__info__desc">
                  向左滑动即可看到，同时只能打开一个菜单
                </view>
              </view>
            </view>
          </tn-swipe-action-item>
        </tn-swipe-action>
      </demo-title>
      
      <demo-title title="非关联打开滑动菜单">
        <tn-swipe-action :autoClose="false">
          <tn-swipe-action-item v-for="(item,index) in 2" :key="index" :name="index" :options="options2">
            <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
              <view class="swipe-action__item__image">
                <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
              </view>
              <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
                <view class="swipe-action__item__info__title">
                  非关联打开滑动菜单
                </view>
                <view class="swipe-action__item__info__desc">
                  向左滑动即可看到，允许同时打开多个菜单
                </view>
              </view>
            </view>
          </tn-swipe-action-item>
        </tn-swipe-action>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsSwipeAction',
    components: { demoTitle },
    data() {
      return {
        // 滑动菜单
        options1: [{
          text: '置顶',
          style: {
            backgroundColor: '#FFA726'
          }
        }],
        options2: [{
            text: '置顶',
            style: {
              backgroundColor: '#FFA726'
            }
          },
          {
            text: '删除',
            style: {
              backgroundColor: '#E83A30'
            }
          }
        ],
        options3: [{
            text: '置顶',
            icon: 'star',
            style: {
              backgroundColor: '#FFA726'
            }
          },
          {
            text: '删除',
            icon: 'delete',
            style: {
              backgroundColor: '#E83A30'
            }
          }
        ],
        options4: [{
            icon: 'star',
            style: {
              backgroundColor: '#FFA726',
              width: '80rpx',
              height: '80rpx',
              margin: '0 12rpx',
              borderRadius: '100rpx'
            }
          },
          {
            icon: 'delete',
            style: {
              backgroundColor: '#E83A30',
              width: '80rpx',
              height: '80rpx',
              margin: '0 12rpx',
              borderRadius: '100rpx'
            }
          }
        ]
      }
    },
    methods: {
      // 处理swiperActionItem点击事件
      onSwiperItemClick(e) {
        if (e.type === 'button') {
          this.$tn.message.toast(`点击了第${e.index}个按钮`)
        } else if (e.type === 'item') {
          this.$tn.message.toast(`点击了item标签,name为${e.name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swipe-action__item {
    padding: 10rpx 20rpx;

    &__image {
      image {
        width: 80rpx;
        height: 80rpx;
        border-radius: 20rpx;
      }
    }

    &__info {
      margin-left: 20rpx;

      &__title {
        font-size: 30rpx;
        font-weight: bold;
      }

      &__desc {
        margin-top: 5rpx;
        font-size: 22rpx;
        color: $tn-font-sub-color;
      }
    }
  }
</style>
