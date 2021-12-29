<template>
  <view class="template-plus">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="tn-text-center tn-margin-xl tn-text-lg plus-box" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="plus-text">
        <view class="tn-text-bold">图鸟UI小程序，免费开源可商用</view>
        <view class="tn-margin-bottom-xl">（会员有更多福利鸭）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟UI Plus会员，初步定价</view>
        <view class="tn-text-bold">
          <text class="tn-text-xl-xxl">699￥ / </text>
          <text class="tn-text-xxl tn-padding-left-sm">终身</text>
        </view>
        <view class="tn-margin-bottom-xl">（大约等于两个前端页面价格）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">或许会员人数达到100+叭</view>
        <view class="tn-margin-bottom-xl">（当然接项目恰饭最实在）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">不断更新酷炫组件以及页面模板</view>
        <view class="tn-margin-bottom-xl">（偶尔恰饭时常更新啦）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">请勿转售，转售是会慢慢追究法律责任的</view>
        <view class="tn-margin-bottom-xl">（毕竟开发圈子就那么小）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">使用手册 + 图片素材 + 意见反馈 + Bug提交</view>
        <view class="tn-margin-bottom-xl">（https://www.yuque.com/tuniao）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">如需拓展人脉，可进群与群友合作</view>
        <view class="tn-margin-bottom-xl">（群内禁止黄赌毒+吵架，我秒怂）</view>
      </view>
      
      <view class="plus-text">  
        <view class="tn-text-bold">项目初衷是拓展业务，寻求商务合作</view>
        <view class="">（ 图鸟北北，微信号：tnkewo ）</view>
        <view class="">（如需入群，可备注：进微信群）</view>
        <view class="">（如需合作，可备注：商业合作）</view>
        <view class="tn-margin-bottom-xl">（如需聊天，可备注：咨询聊天）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">期待你的5星好评</view>
        <view class="tn-margin-bottom-xl">（尽管图鸟UI不是我最完美的作品）</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">待补充....</view>
      </view>
      
    </view>
    
    
    <view class="tn-padding-bottom"></view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplatePlus',
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
  
  /* List */
  .plus-box {
    counter-reset: index;  
    padding: 0;
    max-width: 100vw;
    background-image: linear-gradient(to top, #FFA726 , #2DE8BD);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* List element */
  .plus-text {
    counter-increment: index; 
    display: initial;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;

  }
  
  
  /* Element counter */
  .plus-text::before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    font-weight: bold;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
    
  }
  
  
</style>
