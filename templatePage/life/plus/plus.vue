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
    
    <view class="tn-text-center tn-margin tn-text-lg plus-box" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
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
        <view class="tn-text-bold">不断更新酷炫组件以及页面模板</view>
        <view class="tn-margin-bottom-xl">（偶尔恰饭时常更新啦）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">请勿转售，转售是会慢慢追究法律责任的</view>
        <view class="tn-margin-bottom-xl">（毕竟开发圈子就那么小）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟北北，微信号：<text class="tn-text-bold tn-text-xxl">tnkewo</text> </view>
        <view class="">（如需入群，可备注：进微信群）</view>
        <view class="">（如需合作，可备注：商业合作）</view>
        <view class="tn-margin-bottom-xl">（如需会员，可备注：咨询会员）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">入群须知，群内禁止黄赌毒+广告+吵架</view>
        <view class="tn-margin-bottom-xl">（可进群与群友合作，拓展人脉）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">会员人数会达到50+叭</view>
        <view class="tn-margin-bottom-xl">（希望够垫付服务器+CDN支出）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">也希望大家能喜欢这个项目</view>
        <view class="tn-margin-bottom-xl">（不喜勿喷，东东还在努力成长）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">期待你的5星好评</view>
        <view class="tn-margin-bottom-xl">（尽管图鸟UI不是我最完美的作品）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">使用手册 + 图片素材 + 意见反馈 + Bug提交</view>
        <view class="tn-margin-bottom-xl">（https://www.yuque.com/tuniao）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">项目正式开始于2021年10月，于12月30上线</view>
        <view class="tn-margin-bottom-xl">（期间断断续续的在接单恰饭）</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">灵感来源于我的上一个原创项目</view>
        <view class="tn-margin-bottom-xl">（项目初衷是拓展业务，寻求商务合作）</view>
      </view>
      <view class="plus-text">
        <view class="tn-text-bold">感恩你的支持</view>
        <view class="tn-margin-bottom-xl"></view>
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
  
  /* 内容 开始 */
  .plus-box {
    counter-reset: index;  
    padding: 0;
    max-width: 100vw;
    background-image: linear-gradient(to top, #FFA726 , #2DE8BD);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .plus-text {
    counter-increment: index; 
    display: initial;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;

  }
  
  
  .plus-text::before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    font-weight: bold;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
  }
  
  
</style>
