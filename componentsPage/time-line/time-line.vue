<template>

  <view class="components-time-line">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Timeline时间轴</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="time-line__wrap">
        <tn-time-line>
          <block v-for="(item, index) in expressData" :key="index">
            <tn-time-line-item v-if="item.status !== 0" :top="2">
              <template slot="node">
                <view class="time-line-item__node">
                  <view v-if="item.status === 1" class="time-line-item__node--icon tn-icon-image-text"></view>
                  <view v-if="item.status === 2" class="time-line-item__node--icon tn-icon-prize"></view>
                  <view v-if="item.status === 3" class="time-line-item__node--icon tn-icon-gift"></view>
                  <view v-if="item.status === 4" class="time-line-item__node--icon tn-icon-logistics"></view>
                  <view v-if="item.status === 5" class="time-line-item__node--icon tn-icon-my"></view>
                  <view v-if="item.status === 6" class="time-line-item__node--icon tn-icon-cardbag"></view>
                  <view v-if="item.status === 7" class="time-line-item__node--icon tn-icon-success"></view>
                </view>
              </template>
              <template slot="content">
                <view>
                	<view v-if="item.status === 1" class="time-line-item__content__title">已下单</view>
                	<view v-if="item.status === 2" class="time-line-item__content__title">已发货</view>
                	<view v-if="item.status === 3" class="time-line-item__content__title">已揽件</view>
                	<view v-if="item.status === 4" class="time-line-item__content__title">运输中</view>
                	<view v-if="item.status === 5" class="time-line-item__content__title">派送中</view>
                	<view v-if="item.status === 6" class="time-line-item__content__title">待取件</view>
                	<view v-if="item.status === 7" class="time-line-item__content__title">已签收</view>
                	<view class="time-line-item__content__desc">{{ item.info }}</view>
                	<view class="time-line-item__content__time">{{ item.time }}</view>
                </view>
              </template>
            </tn-time-line-item>
            <tn-time-line-item v-else>
              <template slot="content">
                <view>
                	<view class="time-line-item__content__desc">{{ item.info }}</view>
                	<view class="time-line-item__content__time">{{ item.time }}</view>
                </view>
              </template>
            </tn-time-line-item>
          </block>
        </tn-time-line>
      </view>

    </view>

  </view>

</template>

<script>
  export default {
    name: 'componentsTimeline',
    data() {
      return {
        expressData: [
          {
            info: '派送成功',
            status: 7,
            time: '2021-11-11 17:42'
          },
          {
            info: '[代收点] 您的快件已从XXX顺丰速运代理店取出〖来自代收点〗',
            status: 0,
            time: '2021-11-11 17:31'
          },
          {
            info: '快件领取成功',
            status: 0,
            time: '2021-11-11 17:31'
          },
          {
            info: '[代收点] 您的顺丰速运包裹已由XXX顺丰速运代理店代收，代收点地址：XXX， 联系电话：18888888888 〖来自代收点〗',
            status: 6,
            time: '2021-11-11 17:15'
          },
          {
            info: '快件交给XXX，正在派送途中（联系电话：18888888888，顺丰已开启“安全呼叫”保护您的电话隐私，请放心接听！）（主单总件数：1件）',
            status: 5,
            time: '2021-11-11 17:07'
          },
          {
            info: '快件到达〖XXX合作点〗',
            status: 4,
            time: '2021-11-11 16:25'
          },
          {
            info: '快件在〖XXX营业点〗完成分拣，准备发往〖XXX合作点〗',
            status: 0,
            time: '2021-11-11 13:50'
          },
          {
            info: '快件到达〖XXX营业点〗',
            status: 0,
            time: '2021-11-11 13:06'
          },
          {
            info: '快件在〖XXX集散点〗完成分拣，准备发往〖XXX营业点〗',
            status: 0,
            time: '2021-11-11 12:04'
          },
          {
            info: '快件到达〖XXX集散点〗',
            status: 0,
            time: '2021-11-11 10:14'
          },
          {
            info: '快件在〖XXX中转场〗完成分拣，准备发往〖XXX集散点〗',
            status: 0,
            time: '2021-11-11 05:52'
          },
          {
            info: '快件到达〖XXX转场〗',
            status: 0,
            time: '2021-11-11 05:36'
          },
          {
            info: '快件在〖XXX中转场〗完成分拣，准备发往〖XXX中转场〗',
            status: 0,
            time: '2021-11-10 23:36'
          },
          {
            info: '快件到达〖XXX中转场〗',
            status: 0,
            time: '2021-11-10 22:34'
          },
          {
            info: '快件在〖XXX营业部〗完成分拣，准备发往〖XXX中转场〗',
            status: 0,
            time: '2021-11-10 22:01'
          },
          {
            info: '顺丰速运已收取快件',
            status: 3,
            time: '2021-11-10 21:54'
          },
          {
            info: '包裹正在等待揽收',
            status: 1,
            time: '2021-11-10 17:41'
          },
          {
            info: '商品已经下单',
            status: 1,
            time: '2021-11-10 12:17'
          }
        ]
      }
    },
    methods: {

    }

  }
</script>

<style lang="scss" scoped>
  
  .tn-time-line-class {
    .tn-time-line-item-class {
      &:first-child {
        .tn-time-line-item__node {
          .time-line-item__node {
            background-color: $tn-main-color !important;
          }
        }
      }
    }
  }
  
  .time-line {
    
    &__wrap {
      padding: 60rpx 30rpx 30rpx 60rpx;
    }
    
    &-item {
      &__node {
        width: 44rpx;
        height: 44rpx;
        border-radius: 100rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #AAAAAA;
        
        &--active {
          background-color: $tn-main-color;
        }
        
        &--icon {
          color: #FFFFFF;
          font-size: 24rpx;
        }
      }
      
      &__content {
        &__title {
          font-weight: bold;
          font-size: 32rpx;
        }
        
        &__desc {
          color: $tn-font-sub-color;
          font-size: 28rpx;
          margin-bottom: 6rpx;
        }
        
        &__time {
          color: $tn-font-holder-color;
          font-size: 26rpx;
        }
      }
    }
  }
</style>
