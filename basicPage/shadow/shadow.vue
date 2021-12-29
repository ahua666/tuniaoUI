<template>

  <view class="basic-shadow">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>阴影</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <block v-if="shadowType === 'bg'">
          <view
            class="shadow-content"
            :class="[shadowClass]"
          ></view>
        </block>
        <block v-else>
          <view
            class="shadow-image tn-shadow-blur"
          ></view>
        </block>
        <view style="visibility: hidden;height: 1px;">tuniao</view>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'basicShadow',
    components: {dynamicDemoTemplate},
    data() {
      return {
        shadowType: 'bg',
        shadowColor: '',
        shadowWarp: false,
        
        tips: ['无需依赖额外的样式文件','不使用任何组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '样式',
                optional: ['背景阴影','图片阴影'],
                methods: 'typeChange'
              },
              {
                title: '颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              }
            ]
          }
        ]
      }
    },
    computed: {
      shadowClass() {
        let clazz = ''
        if (this.shadowType === 'bg') {
          if (this.shadowWarp) {
            clazz += ` tn-shadow-warp`
          } else {
            if (this.shadowColor === '') {
              clazz += ` tn-shadow`
            } else {
              clazz += ` ${this.shadowColor}`
            }
          }
        }
        
        return clazz
      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换阴影样式
      typeChange(event) {
        this.shadowType = event.index === 0 ? 'bg' : 'image'
      },
      // 切换阴影颜色
      colorChange(event) {
        this.shadowColor = event.index === 0 ? '' : 'tn-shadow-red'
      }

    },

  }
</script>

<style lang="scss" scoped>
  
  .shadow-content {
    width: 80%;
    height: 80rpx;
    background-color: $tn-font-holder-color;
    margin: 0 auto;
  }
  
  .shadow-image {
    width: 80%;
    height: 80rpx;
    margin: 0 auto;
    z-index: 1;
    background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7207d16b-b9c3-4105-8d0d-e9e0c7785f66/605563a1-a210-42f3-99e4-8de3c655c59e.jpg);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
</style>
