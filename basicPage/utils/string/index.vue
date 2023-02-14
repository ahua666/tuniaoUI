<template>
  <view class="basic-utils__string tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>String工具</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="去除空格">
        <view class="tn-bg-white">
          <tn-form-item>
            <tn-input v-model="trimValue" :trim="false"></tn-input>
            <template slot="right">
              <view class="tn-margin-right-sm">
                <tn-button size="sm" backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="handlerTrim">清除空格</tn-button>
              </view>
            </template>
          </tn-form-item>
        </view>
      </demo-title>
      
      <demo-title title="大写转指定连接符">
        <view class="tn-bg-white">
          <tn-form-item>
            <tn-input v-model="humpCharValue"></tn-input>
            <template slot="right">
              <view class="tn-margin-right-sm">
                <tn-button size="sm" backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="handlerHumpChar">转换</tn-button>
              </view>
            </template>
          </tn-form-item>
        </view>
      </demo-title>
      
      <demo-title title="将自定的连接符转为大写">
        <view class="tn-bg-white">
          <tn-form-item>
            <tn-input v-model="charHumpValue"></tn-input>
            <template slot="right">
              <view class="tn-margin-right-sm">
                <tn-button size="sm" backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="handlerCharHump">转换</tn-button>
              </view>
            </template>
          </tn-form-item>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicUtilsString',
    components: {demoTitle},
    data() {
      return {
        trimValue: '      前后都有空格啊       ',
        humpCharValue: 'TuniaoUI',
        charHumpValue: 'Tuniao_u_i'
      }
    },
    methods: {
      // 处理去除空格
      handlerTrim() {
        this.trimValue = this.$tn.string.trim(this.trimValue)
      },
      // 处理将大写字符串转换为指定的连接符连接的字符串
      handlerHumpChar() {
        this.humpCharValue = this.$tn.string.humpConvertChar(this.humpCharValue, '_')
      },
      // 处理将指定的连接字符连接的字符串转换为大写的字符串
      handlerCharHump() {
        this.charHumpValue = this.$tn.string.charConvertHump(this.charHumpValue, '_')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-utils__string {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
