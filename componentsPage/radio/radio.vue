<template>
  <view class="components-radio tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Radio单选按钮</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础">
        <tn-radio-group>
          <tn-radio name="选项1">选项1</tn-radio>
          <tn-radio name="选项2" disabled>选项2(禁止选中)</tn-radio>
          <tn-radio name="选项3">选项3</tn-radio>
        </tn-radio-group>
      </demo-title>
      
      <demo-title title="方形选框">
        <tn-radio-group shape="square">
          <tn-radio name="选项1">选项1</tn-radio>
          <tn-radio name="选项2">选项2</tn-radio>
          <tn-radio name="选项3">选项3</tn-radio>
        </tn-radio-group>
      </demo-title>
      
      <demo-title title="竖直排列">
        <tn-radio-group width="100%" wrap>
          <tn-radio name="选项1">选项1</tn-radio>
          <tn-radio name="选项2">选项2</tn-radio>
          <tn-radio name="选项3">选项3</tn-radio>
        </tn-radio-group>
      </demo-title>
      
      <demo-title title="禁止点击标签">
        <tn-radio-group :disabledLabel="true">
          <tn-radio name="选项1">选项1</tn-radio>
          <tn-radio name="选项2">选项2</tn-radio>
          <tn-radio name="选项3">选项3</tn-radio>
        </tn-radio-group>
      </demo-title>
      
      <demo-title title="自定义尺寸">
        <view>
          <tn-radio-group :size="20" :iconSize="14">
            <tn-radio name="选项1">选项1</tn-radio>
            <tn-radio name="选项2">选项2</tn-radio>
            <tn-radio name="选项3" :size="36" :iconSize="26">选项3</tn-radio>
          </tn-radio-group>
        </view>
        <view class="tn-margin-top">
          <tn-radio-group :size="46" :iconSize="36">
            <tn-radio name="选项1">选项1</tn-radio>
            <tn-radio name="选项2">选项2</tn-radio>
            <tn-radio name="选项3">选项3</tn-radio>
          </tn-radio-group>
        </view>
      </demo-title>
      
      <demo-title title="自定义颜色">
        <tn-radio-group activeColor="#31E749">
          <tn-radio name="选项1">选项1</tn-radio>
          <tn-radio name="选项2">选项2</tn-radio>
          <tn-radio name="选项3" activeColor="#E83A30">选项3</tn-radio>
        </tn-radio-group>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
      
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsRadio',
    components: {demoTitle},
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
