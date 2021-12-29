<template>

  <view class="components-toast">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>ScrollList横向滚动</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-scroll-list
          :indicator="indicator"
          :indicatorWidth="indicatorWidth"
          :indicatorBarWidth="indicatorBarWidth"
          :indicatorColor="indicatorColor"
          :indicatorActiveColor="indicatorActiveColor"
        >
          <view class="tn-flex tn-margin-sm">
            <block v-for="(item, index) in 14" :key="index">
              <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
                <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
                  <view class="icon3__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" :class="[$t.colorUtils.getRandomCoolBgClass(index)]">
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
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsScrollList',
    components: {dynamicDemoTemplate},
    data() {
      return {
        indicator: true,
        indicatorWidth: 50,
        indicatorBarWidth: 20,
        indicatorColor: '#E6E6E6',
        indicatorActiveColor: '#01BEFF',
        
        tips: ['无需依赖额外的样式文件','使用tn-scroll-list组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '指示条',
                optional: ['显示','隐藏'],
                methods: 'indicatorChange'
              },
              {
                title: '指示条样式',
                optional: ['默认','自定义'],
                methods: 'customChange'
              }
            ]
          }
        ]

      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换指示条状态
      indicatorChange(event) {
        this.indicator = event.index === 0 ? true : false
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换自定义指示条
      customChange(event) {
        switch (event.index) {
          case 0:
            this.indicatorWidth = 50
            this.indicatorBarWidth = 20
            this.indicatorColor = '#E6E6E6'
            this.indicatorActiveColor = '#01BEFF'
            break
          case 1:
            this.indicatorWidth = 100
            this.indicatorBarWidth = 30
            this.indicatorColor = '#D6F4FA'
            this.indicatorActiveColor = '#27A1BA'
            break
        }
      }

    },

  }
</script>

<style lang="scss" scoped>

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
