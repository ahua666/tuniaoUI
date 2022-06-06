<template>
  <view class="components-input tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Input输入框</tn-nav-bar>
    
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">文本</view>
          <view class="content__data tn-flex-1">
            <tn-input v-model="inputValue" type="text" placeholder="请输入文本"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="禁止输入" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">文本</view>
          <view class="content__data tn-flex-1">
            <tn-input type="text" placeholder="请输入文本" disabled></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="对齐方式" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center tn-border-solid-bottom">
          <view class="content__title">居中对齐</view>
          <view class="content__data tn-flex-1">
            <tn-input type="text" placeholder="请输入文本" inputAlign="center"></tn-input>
          </view>
        </view>
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">右对齐</view>
          <view class="content__data tn-flex-1">
            <tn-input type="text" placeholder="请输入文本" inputAlign="right"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="边框" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">文本</view>
          <view class="content__data tn-flex-1">
            <tn-input type="text" placeholder="请输入文本" border></tn-input>
          </view>
        </view>
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center tn-border-solid-bottom">
          <view class="content__title">文本</view>
          <view class="content__data tn-flex-1">
            <tn-input type="text" placeholder="请输入文本" border borderColor="#01BEFF"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="右边显示图标" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">文本</view>
          <view class="content__data tn-flex-1">
            <tn-input type="text" placeholder="请输入文本" showRightIcon rightIcon="code"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="文本域" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">文本域</view>
          <view class="content__data tn-flex-1">
            <tn-input type="textarea" placeholder="请输入文本"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="内置类型" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center tn-border-solid-bottom">
          <view class="content__title">整数</view>
          <view class="content__data tn-flex-1">
            <tn-input type="number" placeholder="请输入整数"></tn-input>
          </view>
        </view>
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center tn-border-solid-bottom">
          <view class="content__title">小数</view>
          <view class="content__data tn-flex-1">
            <tn-input type="digit" placeholder="请输入小数"></tn-input>
          </view>
        </view>
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center tn-border-solid-bottom">
          <view class="content__title">身份证</view>
          <view class="content__data tn-flex-1">
            <tn-input type="idcard" placeholder="请输入身份证"></tn-input>
          </view>
        </view>
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">电话号码</view>
          <view class="content__data tn-flex-1">
            <tn-input type="tel" placeholder="请输入电话号码"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="密码输入框" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center tn-border-solid-bottom">
          <view class="content__title">密码</view>
          <view class="content__data tn-flex-1">
            <tn-input type="password" placeholder="请输入密码"></tn-input>
          </view>
        </view>
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">密码</view>
          <view class="content__data tn-flex-1">
            <tn-input type="password" placeholder="请输入密码" :passwordIcon="false"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="弹出选择" :contentPadding="false">
        <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
          <view class="content__title">业务</view>
          <view class="content__data tn-flex-1">
            <tn-input type="select" placeholder="请选择业务类型" :selectOpen="selectShow" @click="selectShow = true"></tn-input>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="配合formItem使用" :contentPadding="false">
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="姓名">
            <tn-input type="text" placeholder="请输入姓名"></tn-input>
          </tn-form-item>
        </view>
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="姓名" labelPosition="top" required>
            <tn-input type="text" placeholder="请输入姓名"></tn-input>
          </tn-form-item>
        </view>
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="联系电话" :labelWidth="200">
            <tn-input type="tel" placeholder="请输入电话号码"></tn-input>
          </tn-form-item>
        </view>
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="联系电话" :labelWidth="200" labelAlign="center">
            <tn-input type="tel" placeholder="请输入电话号码"></tn-input>
          </tn-form-item>
        </view>
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="联系电话" :labelWidth="200" labelAlign="right">
            <tn-input type="tel" placeholder="请输入电话号码"></tn-input>
          </tn-form-item>
        </view>
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="验证码" :labelWidth="200">
            <tn-input type="text" placeholder="请输入验证码"></tn-input>
            <tn-button slot="right" backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm">获取验证码</tn-button>
          </tn-form-item>
        </view>
        <view class="content tn-padding-left tn-padding-right">
          <tn-form-item label="身份证" :labelWidth="200" leftIcon="identity">
            <tn-input type="idcard" placeholder="请输入身份证号码"></tn-input>
          </tn-form-item>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
    
    <!-- 业务类型select -->
    <tn-select
      v-model="selectShow"
      mode="single"
      :list="selectList"
      @confirm="businessSelectConfirm"
    ></tn-select>
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  
  export default {
    name: 'ComponentsInput',
    components: { demoTitle },
    data() {
      return {
        inputValue: '',
        selectShow: false,
        selectList: [
          {
            label: '免费',
            value: 1101
          },
          {
            label: '会员',
            value: 1102
          },
          {
            label: '全新开发',
            value: 1103
          }
        ]
      }
    },
    methods: {
      businessSelectConfirm() {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .components-input {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
    
    .content {
      background-color: #FFFFFF;
      
      &__title {
        padding: 30rpx;
      }
      &__data {
        margin: 10rpx 0;
        margin-right: 30rpx;
      }
    }
  }
</style>
