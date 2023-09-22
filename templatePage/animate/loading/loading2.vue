<template>
  <view class="template-content">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="tn-margin tn-text-center" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="load">
        <text></text>
        <text></text>
        <text></text>
        <text></text>
      </view>
      
    </view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateContent',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  /* 加载 */
  .load{position:absolute;top:50%;left:42%;transform:translate(-50%, -50%);
    width:60px;
    height:60px;
  }
  .load text{border:0;margin:0;width:40%;height:40%;position:absolute;border-radius:50%;animation:spin 2s ease infinite}
  
  .load :first-child{background:#4B98FE;animation-delay:-1.5s}
  .load :nth-child(2){background:#00D05E;animation-delay:-1s}
  .load :nth-child(3){background:#FFAC00;animation-delay:-0.5s}
  .load :last-child{background:#FB6A67}
  
  @keyframes spin{
    0%,100%{transform:translate(0)}
    25%{transform:translate(160%)}
    50%{transform:translate(160%, 160%)}
    75%{transform:translate(0, 160%)}
  }

</style>
