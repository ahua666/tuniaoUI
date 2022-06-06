<template>
  <view class="components-check-box tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>按钮</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础">
        <tn-checkbox v-model="value1" name="选项1">选项1</tn-checkbox>
        <tn-checkbox v-model="value1" name="选项2" disabled>选项2(不可点击)</tn-checkbox>
      </demo-title>
      
      <demo-title title="圆形选框">
        <tn-checkbox-group shape="circle">
          <tn-checkbox name="选项1">选项1</tn-checkbox>
          <tn-checkbox name="选项2">选项2</tn-checkbox>
          <tn-checkbox name="选项3">选项3</tn-checkbox>
        </tn-checkbox-group>
      </demo-title>
      
      <demo-title title="竖直排列">
        <tn-checkbox-group width="100%" wrap>
          <tn-checkbox name="选项1">选项1</tn-checkbox>
          <tn-checkbox name="选项2">选项2</tn-checkbox>
          <tn-checkbox name="选项3">选项3</tn-checkbox>
        </tn-checkbox-group>
      </demo-title>
      
      <demo-title title="禁止点击标签">
        <tn-checkbox-group disabledLabel>
          <tn-checkbox name="选项1">选项1</tn-checkbox>
          <tn-checkbox name="选项2">选项2</tn-checkbox>
          <tn-checkbox name="选项3">选项3</tn-checkbox>
        </tn-checkbox-group>
      </demo-title>
      
      <demo-title title="自定义尺寸">
        <view>
          <tn-checkbox-group :size="26" :iconSize="18">
            <tn-checkbox name="选项1">选项1</tn-checkbox>
            <tn-checkbox name="选项2">选项2</tn-checkbox>
            <tn-checkbox name="选项3" :size="36" :iconSize="30">选项3</tn-checkbox>
          </tn-checkbox-group>
        </view>
        <view class="tn-margin-top">
          <tn-checkbox-group :size="46" :iconSize="40">
            <tn-checkbox name="选项1">选项1</tn-checkbox>
            <tn-checkbox name="选项2">选项2</tn-checkbox>
            <tn-checkbox name="选项3">选项3</tn-checkbox>
          </tn-checkbox-group>
        </view>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-checkbox-group activeColor="#31E749">
          <tn-checkbox name="选项1">选项1</tn-checkbox>
          <tn-checkbox name="选项2">选项2</tn-checkbox>
          <tn-checkbox name="选项3" activeColor="#E83A30">选项3</tn-checkbox>
        </tn-checkbox-group>
      </demo-title>
      
      <demo-title title="自定义图标">
        <tn-checkbox-group>
          <tn-checkbox name="选项1" iconName="star">选项1</tn-checkbox>
          <tn-checkbox name="选项2" iconName="fire">选项2</tn-checkbox>
          <tn-checkbox name="选项3" iconName="like">选项3</tn-checkbox>
        </tn-checkbox-group>
      </demo-title>
      
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'ComponentsCheckBox',
    components: {demoTitle},
    data() {
      return {
        value1: false,
        value2: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
