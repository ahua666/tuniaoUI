<template>

  <view class="components-nav_bar">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar
      v-if="mode === 'normal'"
      fixed
      :height="height"
      :backgroundColor="backgroundColor"
      :fontColor="fontColor"
      :alpha="alpha"
      :bottomShadow="bottomShadow"
    >navBar导航栏</tn-nav-bar>
    
    <tn-nav-bar
      v-if="mode === 'customBack'"
      fixed
      :height="height"
      :customBack="true"
      :backgroundColor="backgroundColor"
      :fontColor="fontColor"
      :alpha="alpha"
      :bottomShadow="bottomShadow"
    >
      <view slot="back" class='tn-custom-nav-bar__back'>
        <view><text class='tn-icon-left'></text></view>
        <view><text class='tn-icon-home-capsule-fill'></text></view>
      </view>
      <view class="custom-nav-content">
        <view class="search-content">
          <tn-input class="search-input" v-model="searchValue" placeholder="请输入要搜索的内容" :border="true" :height="50" :showRightIcon="true" rightIcon="search"></tn-input>
        </view>
      </view>
    </tn-nav-bar>
    
    <tn-nav-bar
      v-if="mode === 'customNav'"
      fixed
      :height="height"
      :isBack="false"
      :backgroundColor="backgroundColor"
      :fontColor="fontColor"
      :alpha="alpha"
      :bottomShadow="bottomShadow"
    >
      <view class="custom-nav-content">
        <view class="search-content">
          <tn-input class="search-input" v-model="searchValue" placeholder="请输入要搜索的内容" :border="true" :height="50" :showRightIcon="true" rightIcon="search"></tn-input>
        </view>
      </view>
    </tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click" :noDemo="true">
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
        height: 0,
        backgroundColor: '#FFFFFF',
        fontColor: '',
        alpha: false,
        bottomShadow: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-toast组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '高度',
                optional: ['默认','38','80'],
                methods: 'heightChange'
              },
              {
                title: '样式',
                optional: ['默认','自定义返回按钮', '隐藏返回栏自定义内容'],
                methods: 'modeChange'
              },
              {
                title: '背景颜色',
                optional: ['默认','#01BEFF','tn-bg-grey','tn-main-gradient-indigo','透明'],
                methods: 'backgroundColorChange'
              },
              {
                title: '底部阴影',
                optional: ['默认','隐藏'],
                methods: 'bottomShadowChange'
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
            this.fontColor = ''
            this.alpha = false
            break
          case 1:
          case 2:
          case 3:
            this.fontColor = '#FFFFFF'
            this.backgroundColor = event.name
            this.alpha = false
            break
          case 4:
            this.backgroundColor = ''
            this.fontColor = ''
            this.alpha = true
            break
        }
      },
      // 切换底部阴影
      bottomShadowChange(event) {
        this.bottomShadow = event.index === 0 ? true : false
      }
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
