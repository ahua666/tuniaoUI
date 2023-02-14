<template>
  <view class="basic-background">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>背景</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">

      <view class="tn-flex tn-flex-nowrap background-container">
        <view class="background__left-container">
          <scroll-view :style="[scrollViewStyle]" scroll-y>
            <view class="background__left__picker">
              <view class="background__left__picker__item-wrapper" @click="pickerColorClick(0)">
                <view
                  class="background__left__picker__item background__left__picker__item--basic picker-color-item-0"
                  :class="[{'tn-shadow-blur': currentColorIndex === 0}]" style="background-color: #01BEFF;">
                    <text class="tn-icon-logo-tuniao"></text>
                  </view>
              </view>
              <block v-for="(item, index) in colorList" :key="index">
                <view class="background__left__picker__item-wrapper" @click="pickerColorClick(index + 1)">
                  <view class="background__left__picker__item" :class="[`picker-color-item-${index + 1} tn-bg-${item.color}`, {'tn-shadow-blur': currentColorIndex === index + 1}]"></view>
                </view>
              </block>
              
              <!-- 选中后的边框 -->
              <view class="background__left__picker__item__select-wrapper" :style="[colorSelectItemStyle]">
                <view class="circle-wrapper right">
                  <view class="circle-progress right-circle"
                    :style="{borderColor: currentColorIndex === 0 ? '#01BEFF' : colorList[currentColorIndex - 1]['value']['dark']}"></view>
                </view>
                <view class="circle-wrapper left">
                  <view class="circle-progress left-circle"
                    :style="{borderColor: currentColorIndex === 0 ? '#01BEFF' : colorList[currentColorIndex - 1]['value']['dark']}"></view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
        <view class="background__right-container">
          <scroll-view
            v-if="!isUpdateColorInfo"
            :style="[scrollViewStyle]"
            scroll-y
            :refresher-enabled="true"
            lower-threshold="20"
            :refresher-triggered="containerRefreshFlag"
            @scroll="containerScroll"
            @scrolltolower="containerScrollLower"
            @refresherrefresh="containerRefresh"
          >
            <view class="background__right__show">
              <block v-if="currentColorIndex === 0">
                <view class="background__right__show--title">图鸟基础配色</view>
                <!-- 色盘 start-->
                <view class="box" >
                  <view v-for="(item,index) in 16" :key="index" :class="'colorwheel-box colorwheel-' + (index+1)"></view>
                </view>
                <!-- 色盘 end-->
                <view class="background__right__show__content">
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #01BEFF;">
                    <view class="background__right__show__content__item--title">主色蓝</view>
                    <view class="background__right__show__content__item--value">#01BEFF</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #FBBD12;">
                    <view class="background__right__show__content__item--title">主色橙</view>
                    <view class="background__right__show__content__item--value">#FBBD12</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #00FFC6;">
                    <view class="background__right__show__content__item--title background__right__show__content__item--title--light">点缀青</view>
                    <view class="background__right__show__content__item--value">#00FFC6</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #FFF00D;">
                    <view class="background__right__show__content__item--title background__right__show__content__item--title--light">点缀黄</view>
                    <view class="background__right__show__content__item--value">#FFF00D</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #FF71D2;">
                    <view class="background__right__show__content__item--title">辅助粉</view>
                    <view class="background__right__show__content__item--value">#FF71D2</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #82B2FF;">
                    <view class="background__right__show__content__item--title">辅助蓝</view>
                    <view class="background__right__show__content__item--value background__right__show__content__item--value--light">#82B2FF</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #080808;">
                    <view class="background__right__show__content__item--title">文字颜色</view>
                    <view class="background__right__show__content__item--value background__right__show__content__item--value--light">#080808</view>
                  </view>
                  <view class="background__right__show__content__item tn-shadow-blur" style="background-color: #F4F4F4;">
                    <view class="background__right__show__content__item--title background__right__show__content__item--title--light">背景灰</view>
                    <view class="background__right__show__content__item--value background__right__show__content__item--value--light">#F4F4F4</view>
                  </view>
                </view>
              </block>
              <block v-else>
                <view class="background__right__show--title">{{ selectColorInfo.name }}-{{ selectColorInfo.color }}</view>
                
                <view class="background__right__show__content">
                  <block v-for="(value, key, index) in selectColorInfo.value" :key="index">
                    <view class="background__right__show__content__item tn-shadow-blur" :class="[key === 'normal' ? `tn-bg-${selectColorInfo.color}` : `tn-bg-${selectColorInfo.color}--${key}`]">
                      <view class="background__right__show__content__item--title" :class="[['disabled','light'].includes(key) ? 'background__right__show__content__item--title--light' : '']">{{ key }}</view>
                      <view class="background__right__show__content__item--value" 
                        :class="[['disabled','light'].includes(key) ? 'background__right__show__content__item--value--light' : '',{'tn-color-white': selectColorInfo.color === 'gray' && key === 'normal'}]"
                      >
                      {{ value }}</view>
                    </view>
                  </block>
                </view>
                
                <block v-if="!['brown','grey','gray'].includes(selectColorInfo.color)">
                  <view class="background__right__show--title background__right__show--title--gradient" :class="[`tn-cool-bg-color-${currentColorIndex % 16 + 1}`]">渐变色</view>
                  
                  <view class="background__right__show__content">
                    <view class="background__right__show__content__item tn-shadow-blur" :class="[`tn-main-gradient-${selectColorInfo.color}`]">
                      <view class="background__right__show__content__item--title"></view>
                      <view class="background__right__show__content__item--value"></view>
                    </view>
                    <view class="background__right__show__content__item tn-shadow-blur" :class="[`tn-main-gradient-${selectColorInfo.color}--reverse`]">
                      <view class="background__right__show__content__item--title"></view>
                      <view class="background__right__show__content__item--value"></view>
                    </view>
                    <view class="background__right__show__content__item tn-shadow-blur" :class="[`tn-main-gradient-${selectColorInfo.color}--light`]">
                      <view class="background__right__show__content__item--title"></view>
                      <view class="background__right__show__content__item--value"></view>
                    </view>
                    <view class="background__right__show__content__item tn-shadow-blur" :class="[`tn-main-gradient-${selectColorInfo.color}--light--reverse`]">
                      <view class="background__right__show__content__item--title"></view>
                      <view class="background__right__show__content__item--value"></view>
                    </view>
                  </view>
                </block>
              </block>
            </view>
          </scroll-view>
        </view>
      </view>

    </view>

  </view>
</template>

<script>
  export default {
    name: 'basicBackground',
    data() {
      return {
        colorList: [{
            name: '红色',
            color: 'red',
            value: {
              normal: '#E83A30',
              dark: '#BA2E26',
              disabled: '#F39C97',
              light: '#FAD8D6'
            }
          },
          {
            name: '紫红色',
            color: 'purplered',
            value: {
              normal: '#E72F8C',
              dark: '#B9266F',
              disabled: '#F397C5',
              light: '#FAD5E8'
            }
          },
          {
            name: '紫色',
            color: 'purple',
            value: {
              normal: '#892FE8',
              dark: '#6E26BA',
              disabled: '#C497F3',
              light: '#E7D5FA'
            }
          },
          {
            name: '蓝紫色',
            color: 'bluepurple',
            value: {
              normal: '#5F4FD9',
              dark: '#4C3FAE',
              disabled: '#AFA7EC',
              light: '#DFDCF7'
            }
          },
          {
            name: '海蓝色',
            color: 'aquablue',
            value: {
              normal: '#3646FF',
              dark: '#2B38CC',
              disabled: '#9AA2FF',
              light: '#D7DAFF'
            }
          },
          {
            name: '蓝色',
            color: 'blue',
            value: {
              normal: '#3D7EFF',
              dark: '#3165CC',
              disabled: '#9EBEFF',
              light: '#D8E5FF'
            }
          },
          {
            name: '靛蓝色',
            color: 'indigo',
            value: {
              normal: '#31C9E8',
              dark: '#27A1BA',
              disabled: '#98E4F3',
              light: '#D6F4FA'
            }
          },
          {
            name: '青色',
            color: 'cyan',
            value: {
              normal: '#2DE8BD',
              dark: '#24BA97',
              disabled: '#96F3DE',
              light: '#D5FAF2'
            }
          },
          {
            name: '青绿色',
            color: 'teal',
            value: {
              normal: '#24F083',
              dark: '#1DC069',
              disabled: '#91F7C1',
              light: '#D3FCE6'
            }
          },
          {
            name: '绿色',
            color: 'green',
            value: {
              normal: '#31E749',
              dark: '#27B93A',
              disabled: '#98F3A4',
              light: '#D6FADB'
            }
          },
          {
            name: '黄绿色',
            color: 'yellowgreen',
            value: {
              normal: '#A4E82F',
              dark: '#82BA26',
              disabled: '#D1F397',
              light: '#EDFAD5'
            }
          },
          {
            name: '酸橙色',
            color: 'lime',
            value: {
              normal: '#D5EB00',
              dark: '#AABC00',
              disabled: '#E9F57F',
              light: '#F7FBCC'
            }
          },
          {
            name: '黄色',
            color: 'yellow',
            value: {
              normal: '#FFF420',
              dark: '#CCC21A',
              disabled: '#FFF88F',
              light: '#FFFDD2'
            }
          },
          {
            name: '橘黄色',
            color: 'orangeyellow',
            value: {
              normal: '#FFCA28',
              dark: '#CCA220',
              disabled: '#FFE493',
              light: '#FFF4D4'
            }
          },
          {
            name: '橙色',
            color: 'orange',
            value: {
              normal: '#FFA726',
              dark: '#CC851E',
              disabled: '#FFD392',
              light: '#FFEDD4'
            }
          },
          {
            name: '橘红色',
            color: 'orangered',
            value: {
              normal: '#FF7043',
              dark: '#CC5A36',
              disabled: '#FFB7A1',
              light: '#FFE2D9'
            }
          },
          {
            name: '棕色',
            color: 'brown',
            value: {
              normal: '#914F2C',
              dark: '#743F23',
              disabled: '#C8A795',
              light: '#E9DCD5'
            }
          },
          {
            name: '玄灰色',
            color: 'grey',
            value: {
              normal: '#78909C',
              dark: '#5F7E8B',
              disabled: '#C6D1D8',
              light: '#E4E9EC'
            }
          },
          {
            name: '灰色',
            color: 'gray',
            value: {
              normal: '#AAAAAA',
              dark: '#838383',
              disabled: '#E6E6E6',
              light: '#F8F7F8'
            }
          }
        ],
        // scrollView的样式
        scrollViewStyle: {
          height: 0
        },
        // picker列表颜色列表信息
        pickerColorInfos: [],
        // picker列表颜色选中框样式
        colorSelectItemStyle: {
          top: 0,
          left: 0
        },
        // 当前选中的颜色序号
        currentColorIndex: 0,
        // 内容容器滚动容器滚动的位置
        containerScrollTop: 0,
        // 标记是否正在更新数据
        isUpdateColorInfo: false,
        // 内容区域刷新标志
        containerRefreshFlag: false,
        // 当前选中颜色的色值信息
        selectColorInfo: {}
      }
    },
    onLoad() {
      
    },
    onReady() {
      // 等待加载组件完成
      setTimeout(() => {
        this.initScrollViewHeight()
      }, 10)
    },
    methods: {
      // 计算scrollView的高度
      initScrollViewHeight() {
        // 获取当前屏幕的安全高度
        uni.getSystemInfo({
          success: (systemInfo) => {
            this.scrollViewStyle.height = (systemInfo.safeArea.height - this.vuex_custom_bar_height + systemInfo.statusBarHeight) + 'px'
            this.getPickerColorItemInfo()
          }
        })
      },
      // 内容容器滚动事件
      containerScroll(e) {
        // console.log(e);
        // this.containerScrollTop = e.detail.scrollTop
      },
      // 内容scroll-view下拉刷新事件
      containerRefresh(e) {
        // console.log(e);
        if (this.containerRefreshFlag) return
        this.containerRefreshFlag = true
        setTimeout(() => {
          this.containerRefreshFlag = false
        }, 10)
        if (this.currentColorIndex - 1 < 0 || this.isUpdateColorInfo) return
        this.pickerColorClick(this.currentColorIndex - 1)
        
      },
      // 内容scroll-view滚动到底部触发事件
      containerScrollLower(e) {
        // console.log(e);
        if (e.detail.direction === 'bottom') {
          // console.log(e.detail.direction);
          // 触发底部
          // if (this.currentColorIndex + 1 > this.colorList.length || this.isUpdateColorInfo) return
          // console.log('update');
          // this.pickerColorClick(this.currentColorIndex + 1)
        }
      },
      // 获取色值列表的位置信息
      getPickerColorItemInfo() {
        // 获取picker容器的信息
        this._tGetRect('.background__left__picker').then((pickerInfo) => {
          let view = uni.createSelectorQuery().in(this)
          for (let i = 0; i <= this.colorList.length; i++) {
            view.select('.picker-color-item-' + i).boundingClientRect()
          }
          view.exec(res => {
            // 如果没有获取到，则重新获取
            if (!res.length) {
              setTimeout(() => {
                this.getPickerColorItemInfo()
                return
              }, 10)
            }
            // 将每个选择颜色值的宽高，位置信息存入列表中
            res.map((item, index) => {
              this.pickerColorInfos.push({
                x: (item.top - pickerInfo.top) + (item.height / 2),
                y: (item.left - pickerInfo.left) + (item.width / 2)
              })
              
              // 初始化选中的圆环
              this.updatePickerColorSelectItem()
              this.updateSelectColorInfo()
            })
          })
        })
      },
      // 色值选择
      pickerColorClick(index) {
        if (index === this.currentColorIndex) {
          return
        }
        this.currentColorIndex = index
        this.updatePickerColorSelectItem()
        this.updateSelectColorInfo()
      },
      // 设置选中圆环信息
      updatePickerColorSelectItem() {
        const colorInfos = this.pickerColorInfos[this.currentColorIndex]
        this.colorSelectItemStyle.top = colorInfos.x - uni.upx2px(40) + 'px'
        this.colorSelectItemStyle.left = colorInfos.y - uni.upx2px(40) + 'px'
      },
      // 设置选中颜色的信息
      updateSelectColorInfo() {
        if (this.currentColorIndex === 0) {
          return
        }
        this.isUpdateColorInfo = true
        this.$tn.message.loading('加载中...')
        // this.containerScrollTop = Math.random()
        setTimeout(() => {
          // this.containerScrollTop = 0
          this.selectColorInfo = this.colorList[this.currentColorIndex - 1]
          this.$tn.message.closeLoading()
          this.isUpdateColorInfo = false
        }, 10)
        // setTimeout(() => {
          
        // }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* 色盘 start*/
  .box{
      position: relative;
      margin: auto;
      display: block;
      width: 550rpx;
      height: 600rpx;
      background: none;
  }
  .colorwheel-box{
      position: absolute;
      width: 80%;
      height: 50%;
      left: 10%;
      bottom: 20%;
      border-radius: 100% 10rpx;
      opacity: 0.4;
  }
  .colorwheel-1{
      background: #2DE8BD;
      transform: rotate(-78.75deg);
  }
  .colorwheel-2{
      background: #24F083;
      transform: rotate(-90deg);
  }
  .colorwheel-3{
      background: #31E749;
      transform: rotate(-101.25deg);
  }
  .colorwheel-4{
      background: #A4E82F;
      transform: rotate(-112.5deg);
  }
  .colorwheel-5{
      background: #D5EB00;
      transform: rotate(-123.75deg);
  }
  .colorwheel-6{
      background: #FFF420;
      transform: rotate(-135deg);
  }
  .colorwheel-7{
      background: #FFCA28;
      transform: rotate(-146.25deg);
  }
  .colorwheel-8{
      background: #FFA726;
      transform: rotate(-157.5deg);
  }
  .colorwheel-9{
      background: #FF7043;
      transform: rotate(-168.75deg);
  }
  .colorwheel-10{
      background: #E83A30;
      transform: rotate(0deg);
  }
  .colorwheel-11{
      background: #E72F8C;
      transform: rotate(-11.25deg);
  }
  .colorwheel-12{
      background: #892FE8;
      transform: rotate(-22.5deg);
  }
  .colorwheel-13{
      background: #5F4FD9;
      transform: rotate(-33.75deg);
  }
  .colorwheel-14{
      background: #3646FF;
      transform: rotate(-45deg);
  }
  .colorwheel-15{
      background: #3D7EFF;
      transform: rotate(-56.25deg);
  }
  .colorwheel-16{
      background: #31C9E8;
      transform: rotate(-67.5deg);
  }
  /* 色盘 end*/
  
  
  /* 背景颜色容器 start */
  .background-container {
    .background {

      /* 左边容器 start */
      &__left-container {
        width: 16%;
        height: 100%;
        box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
      }

      &__left {
        &__picker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20rpx;
          position: relative;
          
          &__item-wrapper {
            width: 100%;
          }

          &__item {
            width: 50rpx;
            height: 50rpx;
            margin: 18rpx auto;
            border-radius: 50%;
            border: none;
            
            &--basic {
              text-align: center;
              color: #FFFFFF;
              line-height: 50rpx;
            }

            &__select-wrapper {
              width: 80rpx;
              height: 80rpx;
              position: absolute;
              
              .circle-wrapper {
                width: 40rpx;
                height: 80rpx;
                position: absolute;
                top: 0;
                overflow: hidden;
                
                &.right {
                  right: 0;
                }
                
                &.left {
                  left: 0;
                }
                
                .circle-progress {
                  display: inline-block;
                  width: 80rpx;
                  height: 80rpx;
                  border: 6rpx solid transparent;
                  border-radius: 50%;
                  position: absolute;
                  top: 0;
                  // transform: rotate(225deg);
                  transform: rotate(45deg);
                  
                  &.right-circle {
                    right: 0;
                    border-bottom-color: transparent !important;
                    border-left-color: transparent !important;
                    // transition: transform 0.3s cubic-bezier(0,.13,0,1.43);
                  }
                  
                  &.left-circle {
                    left: 0;
                    border-top-color: transparent !important;
                    border-right-color: transparent !important;
                    // transition: transform 0.3s cubic-bezier(0,.13,0,1.43);
                  }
                  
                  // &--active {
                  //   transform: rotate(45deg);
                  // }
                }
              }
            }
          }
        }
      }

      /* 左边容器 end */

      /* 右边容器 start */
      &__right-container {
        width: 84%;
        height: 100%;
      }
      
      &__right {
        &__show {
          padding: 30rpx;
          overflow: hidden;
          transform-origin: 0 50%;
          // opacity: 0;
          // transition: opacity 0.2s ease;
          // transform: scaleX(0) rotate(-90deg);
          // transform: rotateY(-90deg);
          // transform: scaleX(0);
          // transition: all 0.2s linear;
          
          &--visible {
            // transform: scaleX(1) rotate(0deg);
            // transform: rotateY(0deg);
            // transform: scaleX(1);
            opacity: 1;
          }
          
          &--title {
            font-size: 46rpx;
            text-transform: capitalize;
            
            &--gradient {
              -webkit-background-clip: text;
              color: transparent;
            }
          }
          
          &__content {
            
            margin-top: 40rpx;
            
            &__item {
              width: 100%;
              height: 160rpx;
              border-radius: 10rpx;
              margin-bottom: 40rpx;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              align-content: center;
              flex-wrap: wrap;
              padding-left: 40rpx;
              
              &--title {
                width: 100%;
                font-size: 1.4em;
                line-height: 1.4em;
                color: #FFFFFF;
                text-transform: capitalize;
                
                &--light {
                  color: #080808 !important;
                }
              }
              
              &--value {
                width: 100%;
                font-size: 0.8em;
                color: #AAAAAA;
                
                &--light {
                  color: #818181 !important;
                }
              }
            }
          }
        }
      }

      /* 右边容器 end */
    }
  }

  /* 背景颜色容器 end */

  @-webkit-keyframes circleProgressLoad_right {
    0% {
      transform: rotate(225deg);
    }

    100% {
      transform: rotate(45deg);
    }
  }
  
  @-webkit-keyframes circleProgressLoad_left {
    0% {
      transform: rotate(225deg);
    }
  
    100% {
      transform: rotate(45deg);
    }
  }
</style>
