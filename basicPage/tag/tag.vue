<template>

  <view class="basic-tag">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>标签</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click" @modeClick="modeClick">
        <block v-if="singleTagFlag">
          <tn-tag :backgroundColor="backgroundColor" :fontColor="fontColor" :fontSize="fontSize" :shape="shape"
            :width="width" :height="height" :size="size" :padding="padding" :margin="margin" :plain="plain"
            :originLeft="originLeft" :originRight="originRight" :class="{'origin-demo':showOriginDemo}">
            演示标签
          </tn-tag>
        </block>
        <block v-else>
          <!-- #ifdef H5 -->
          <view class="capsule">
            <tn-tag class="capsule-tag" width="50%" height="100%" padding="0" shape="circleLeft" :plain="false">
              <text class="tn-icon-add"></text>
            </tn-tag>
            <tn-tag class="capsule-tag" width="50%" height="100%" padding="0" shape="circleRight" fontColor="#080808" :plain="true">
              2
            </tn-tag>
          </view>
          <!-- #endif -->
          <!-- #ifdef MP-WEIXIN -->
          <view class="capsule">
            <tn-tag class="capsule-tag" width="100%" height="100%" padding="0" shape="circleLeft" :plain="false">
              <text class="tn-icon-add"></text>
            </tn-tag>
            <tn-tag class="capsule-tag" width="100%" height="100%" padding="0" shape="circleRight" fontColor="#080808" :plain="true">
              2
            </tn-tag>
          </view>
          <!-- #endif -->
        </block>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'basicTag',
    components: {dynamicDemoTemplate},
    data() {
      return {
        backgroundColor: '',
        fontColor: '',
        fontSize: 0,
        shape: '',
        width: '',
        height: '',
        size: '',
        padding: '',
        margin: '',
        plain: false,
        originLeft: false,
        originRight: false,

        // 演示基准点控制
        showOriginDemo: false,
        
        // 单双标签切换
        singleTagFlag: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-tag组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '自定义大小',
                optional: ['默认','自定义'],
                methods: 'sizeChange'
              },
              {
                title: '内置大小',
                optional: ['默认','sm','lg'],
                methods: 'innerSizeChange'
              },
              {
                title: '形状',
                optional: ['默认','圆角','椭圆','左半圆','右半圆'],
                methods: 'shapeChange'
              },
              {
                title: '镂空',
                optional: ['默认','镂空'],
                methods: 'plainChange'
              },
              {
                title: '基准点',
                optional: ['不设置','左基准','右基准'],
                methods: 'originChange'
              }
            ]
          },
          {
            name: '样式切换',
            section: [
              {
                title: '单双标签',
                optional: ['单标签','双标签'],
                methods: 'singleTagChange'
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
      modeClick(event) {
        if (event.index === 0) {
          this.singleTagFlag = true
          this.$refs.demoTemplate.updateSectionBtnsValue(1, 0, 0)
        }
      },
      // 切换自定义颜色
      colorChange(event) {
        if (event.index === 0) {
          this.backgroundColor = ''
          this.fontColor = ''
        } else {
          this.backgroundColor = 'tn-bg-red'
          this.fontColor = '#FFFFFF'
        }
      },
      // 切换自定义大小
      sizeChange(event) {
        if (event.index === 0) {
          this.width = ''
          this.height = ''
          this.padding = ''
          this.margin = ''
          this.fontSize = 0
          this.size = ''
          this.$refs.demoTemplate.updateSectionBtnsState(2, true)
        } else {
          this.width = '240rpx'
          this.height = '80rpx'
          this.padding = '10rpx 20rpx'
          this.margin = '10rpx'
          this.fontSize = 36
          this.$refs.demoTemplate.updateSectionBtnsState(2, false)
        }
      },
      // 切换按钮形状
      shapeChange(event) {
        switch (event.index) {
          case 0:
            this.shape = ''
            break
          case 1:
            this.shape = 'radius'
            break
          case 2:
            this.shape = 'circle'
            break
          case 3:
            this.shape = 'circleLeft'
            break
          case 4:
            this.shape = 'circleRight'
            break
        }
      },
      // 切换内置大小状态
      innerSizeChange(event) {
        this.size = event.index === 0 ? '' : event.name
      },
      // 切换镂空状态
      plainChange(event) {
        switch(event.index) {
          case 0:
            this.plain = false
            this.fontColor = '#FFFFFF'
            break
          case 1:
            this.plain = true
            this.fontColor = 'tn-color-black'
            break
        }
      },
      // 切换基准点状态
      originChange(event) {
        switch (event.index) {
          case 0:
            this.showOriginDemo = false
            this.originLeft = false
            this.originRight = false
            break
          case 1:
            this.showOriginDemo = true
            this.originLeft = true
            this.originRight = false
            break
          case 2:
            this.showOriginDemo = true
            this.originLeft = false
            this.originRight = true
            break
        }
      },
      
      // 切换单双标签
      singleTagChange(event) {
        this.singleTagFlag = event.index === 0
      },

    },

  }
</script>

<style lang="scss" scoped>
  /* #ifdef H5 */
  .origin-demo {
    transition: all 0.3s ease;
    transform: scale(0.7);
  }
  /* #endif */
  /* #ifdef MP-WEIXIN */
  tn-tag {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* #endif */
</style>

<style lang="scss">
  /* #ifdef MP-WEIXIN */
  .origin-demo {
    .tn-tag-class {
      transition: all 0.3s ease;
      transform: scale(0.7);
    }
  }
  /* #endif */
</style>
