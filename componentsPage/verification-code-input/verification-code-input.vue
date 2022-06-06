<template>
  <view class="components-verification-code-input tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>验证码输入</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础使用">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value1"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="居中提示线">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value2" mode="middleLine"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="底部提示线">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value3" mode="bottomLine"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="修改验证码长度">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value4" :maxLength="6"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="使用圆点隐藏已输入">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value5" :dotFill="true"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="不带呼吸效果">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value6" :breathe="false"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="字体加粗">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value7" :bold="true"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <demo-title title="自定义样式">
        <view class="tn-bg-white">
          <tn-verification-code-input v-model="value8" :fontSize="40" :inputWidth="60" activeColor="#3D7EFF" inactiveColor="#9EBEFF"></tn-verification-code-input>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'ComponentsVerificationCode',
    components: { demoTitle },
    data() {
      return {
        value1: '24',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .components-verification-code-input {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
