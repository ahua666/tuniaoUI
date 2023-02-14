<template>

  <view class="basic-grid">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Grid布局</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-grid v-if="showGrid" :align="align" :hoverClass="hoverClass" :col="col">
          <block v-for="(item, index) in icons" :key="index">
            <!-- #ifndef MP-WEIXIN -->
            <tn-grid-item>
              <view class="" style="margin: 60rpx 20rpx;font-size: 70rpx;color: #01BEFF;">
                <text class="" :class="['tn-icon-' + item]"></text>
              </view>
            </tn-grid-item>
            <!-- #endif-->
            <!-- #ifdef MP-WEIXIN -->
            <tn-grid-item :style="{width: gridItemWidth}">
              <view class="icon__item--icon tn-cool-color-icon" :class="[$tn.color.getRandomCoolBgClass(index)]">
                <view class="tn-margin-top-sm" :class="['tn-icon-' + item]"></view>
              </view>
            </tn-grid-item>
            <!-- #endif-->
          </block>
        </tn-grid>
      </dynamic-demo-template>
      
    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'BasicGridLayout',
    components: {dynamicDemoTemplate},
    data() {
      return {
        showGrid: true,
        align: 'left',
        hoverClass: 'tn-hover',
        col: 3,
        icons: [
             'zodiac-shu',
             'zodiac-niu',
             'zodiac-hu',
             'zodiac-tu',
             'zodiac-long',
             'zodiac-she',
             'zodiac-ma',
             'zodiac-yang',
             'zodiac-hou',
             'zodiac-ji',
             'zodiac-gou',
             'zodiac-zhu',
             'logo-tuniao',
             ],
        
        tips: ['无需依赖额外的样式文件','使用tn-grid、tn-grid-item组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '对齐方式',
                optional: ['左对齐','居中','右对齐'],
                methods: 'alignChange'
              },
              {
                title: '点击效果',
                optional: ['开启','关闭'],
                methods: 'hoverChange'
              },
              {
                title: '列数',
                optional: ['3','4'],
                methods: 'colChange'
              }
            ]
          }
        ]
      }
    },
    computed: {
      // 兼容小程序
      // #ifdef MP-WEIXIN
      gridItemWidth() {
        return 100 / this.col + '%'
      },
      // #endif
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 对齐方式控制
      alignChange(event) {
        switch(event.index) {
          case 0:
            this.align = 'left'
            break
          case 1:
            this.align = 'center'
            break
          case 2:
            this.align = 'right'
            break
        }
      },
      // 点击效果控制
      hoverChange(event) {
        this.hoverClass = event.index === 0 ? 'tn-hover' : 'none'
      },
      // 列数修改
      colChange(event) {
        this.col = event.index === 0 ? 3 : 4
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      
    },
  }
</script>

<style lang="scss" scoped>
  .icon {
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
        border-radius: 50%;
        margin: 30rpx;
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
