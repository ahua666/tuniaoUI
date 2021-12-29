<template>

  <view class="components-nav_bar">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>navBar导航栏</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <!-- 普通导航栏 -->
        <tn-nav-bar v-if="mode === 'normal'" :fixed="false" :height="height" :backgroundColor="backgroundColor" :alpha="alpha">图鸟科技</tn-nav-bar>
        <!-- 自定义内容导航栏，隐藏返回按钮 -->
        <tn-nav-bar v-if="mode === 'customNav'" :fixed="false" :isBack="false" :height="height" :backgroundColor="backgroundColor" :alpha="alpha">
          <view class="custom-nav-content">
            <view class="search-content">
              <tn-input class="search-input" v-model="searchValue" placeholder="请输入要搜索的内容" :border="true" :height="50" :showLeftIcon="true" leftIcon="search"></tn-input>
            </view>
          </view>
        </tn-nav-bar>
        <!-- 自定义放回按钮 -->
        <tn-nav-bar v-if="mode === 'customBack'" :fixed="false" :customBack="true" :height="height" :backgroundColor="backgroundColor" :alpha="alpha">
          <view slot="back" class='tn-custom-nav-bar__back'>
            <view><text class='tn-icon-left'></text></view>
            <view><text class='tn-icon-home-capsule-fill'></text></view>
          </view>
          <view class="custom-nav-content">
            <view class="search-content">
              <tn-input class="search-input" v-model="searchValue" placeholder="请输入要搜索的内容" :border="true" :height="50" :showLeftIcon="true" leftIcon="search"></tn-input>
            </view>
          </view>
        </tn-nav-bar>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsNavbar',
    components: {dynamicDemoTemplate},
    data() {
      return {
        searchValue: '',
        mode: 'normal',
        height: 46,
        backgroundColor: '#FFFFFF',
        alpha: false,
        
        tips: ['无需依赖额外的样式文件','使用tn-toast组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '高度',
                optional: ['默认','46','80'],
                methods: 'heightChange',
                current: 1
              },
              {
                title: '样式',
                optional: ['默认','自定义返回按钮', '隐藏返回栏自定义内容'],
                methods: 'modeChange'
              },
              {
                title: '背景颜色',
                optional: ['默认','#01BEFF','透明'],
                methods: 'backgroundColorChange'
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
      // 切换高度
      heightChange(event) {
        this.height = event.index === 0 ? 0 : Number(event.name)
      },
      // 切换样式
      modeChange(event) {
        switch(event.index) {
          case 0:
            this.mode = 'normal'
            break
          case 1:
            this.mode = 'customBack'
            break
          case 2:
            this.mode = 'customNav'
            break
        }
      },
      // 切换背景颜色
      backgroundColorChange(event) {
        switch(event.index) {
          case 0:
            this.backgroundColor = '#FFFFFF'
            this.alpha = false
            break
          case 1:
            this.backgroundColor = event.name
            this.alpha = false
            break
          case 2:
            this.alpha = true
            break
        }
      },
    },

  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  .custom-nav-content {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20rpx;
    
    .search-content {
      flex: 1;
      
      .search-input {
        border-radius: 30rpx;
        
        /* #ifdef MP-WEIXIN */
        /deep/ .tn-input-class {
          border-radius: 30rpx;
        }
        /* #endif */
      }
    }
  }
</style>
