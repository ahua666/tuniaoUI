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
    
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="tn-bdhook-shadow" style="border-radius: 10rpx;overflow: hidden;margin: 50rpx 30rpx 30rpx 30rpx;">
        <view class="tn-flex tn-flex-row-between tn-padding tn-text-center tn-color-white" style="background: linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C);">
          <view class="tn-flex-1">
            <view class="tn-text-bold tn-text-lg">
              开源项目
            </view>
            <view class="tn-text-sm">
              不喜勿喷
            </view>
          </view>
          <view class="tn-flex-1">
            <view class="tn-text-bold tn-text-lg">
              普通用户
            </view>
            <view class="tn-text-sm">
              免费开源
            </view>
          </view>
          <view class="tn-flex-1">
            <view class="tn-text-bold tn-text-lg">
              至尊VIP
            </view>
            <view class="tn-text-sm">
              会员福利
            </view>
          </view>
        </view>
        
        <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-strip-bottom-min tn-padding-sm" v-for="(item, index) in setList" :key="index" @click="tn(item.url)">
          <view class="tn-flex-1 tn-text-center">
            <view class="">
              {{ item.title }}
            </view>
            <!-- <view class="tn-color-gray tn-text-xs">
              {{ item.title2 }}
            </view> -->
          </view>
          <view class="tn-flex-1">
            <view class="">
              {{ item.common }}
            </view>
            <view class="">
              {{ item.common2 }}
            </view>
          </view>
          <view class="tn-flex-1">
            <view class="">
              {{ item.vip }}
            </view>
            <view class="">
              {{ item.vip2 }}
            </view>
          </view>
        </view>
        
      </view>
    
    </view>
    
    <view class="tn-text-center tn-margin tn-text-lg plus-box" style="padding-top: 60rpx;">
      <view class="plus-text">
        <view class="tn-text-bold">图鸟UI小程序，免费开源可商用</view>
        <view class="tn-margin-bottom-xl">（会员有更多福利鸭）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟UI Plus会员，初步定价</view>
        <view class="tn-text-bold">
          <text class="tn-text-xl-xxl">699￥</text>
          <text class="tn-text-xl" style="">1299￥</text>
          <!-- 为什么不用text-decoration 因为这里面加了骚操作，不生效，你试试就知道了吖-->
          <text class="" style="margin: -10rpx 10rpx 0 -115rpx;">————</text>
          <text class="tn-text-xl-xxl"> / </text>
          <text class="tn-text-xxl tn-padding-left-sm">终身</text>
        </view>
        <view class="tn-margin-bottom-xl">（大约等于2个酷炫前端页面价格💕）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">不断更新酷炫组件以及页面模板</view>
        <view class="tn-margin-bottom-xl">（偶尔恰饭时常更新啦）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">请勿转售，转售是会慢慢追究法律责任的</view>
        <view class="tn-margin-bottom-xl">（毕竟前端开发圈子就那么小）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟北北，微信号：<text class="tn-text-bold tn-text-xxl" @click="copyWechat">tnkewo</text> </view>
        <view class="">（如需入群，可备注：进微信群）</view>
        <view class="">（如需合作，可备注：商业合作）</view>
        <view class="tn-margin-bottom-xl">（如需会员，可备注：咨询会员）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">入群须知，群内禁止黄赌毒+广告+吵架</view>
        <view class="tn-margin-bottom-xl">（可进群与群友合作，拓展人脉）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">开源希望能得到理解</view>
        <view class="">（做开源本身就不是为了赚取）</view>
        <view class="">（毕竟还不如多找几个会员进行项目合作）</view>
        <view class="tn-margin-bottom-xl">（会员费用仅垫付服务器+工作室支出）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">也希望大家能喜欢这个项目</view>
        <view class="tn-margin-bottom-xl">（不喜勿喷，北北还在努力成长）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">期待你的5星(⭐⭐⭐⭐⭐)好评</view>
        <view class="tn-margin-bottom-xl">（尽管图鸟UI不是我最完美的作品）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">使用手册 + 图片素材 + 意见反馈 + Bug提交</view>
        <view class="tn-margin-bottom-xl" @click="copyYuque">（https://www.tuniaokj.com/）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">项目正式开始于2021年10月，12月30开源公测，2022年1月30上线正式版</view>
        <view class="tn-margin-bottom-xl">（期间断断续续的在接单恰饭）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">灵感来源于我的上一个原创项目</view>
        <view class="tn-margin-bottom-xl">（项目初衷是拓展业务，寻求商务合作）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold tn-text-xxl"> <text class="tn-icon-vip-fill tn-padding-right-xs"></text> 会员特权 <text class="tn-icon-vip-fill tn-padding-left-xs"></text></view>
        <view class="">①会员尊享更多酷炫模板，模板持续更新</view>
        <view class="">②优先响应会员页面模板需求，icon需求</view>
        <view class="">③会员版本更新，在会员群进行代码发送</view>
        <view class="tn-margin-bottom-xl">④有什么好的建议，可以提出来，多沟通</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold tn-text-xxl"> <text class="tn-icon-moon-fill tn-padding-right-xs"></text> 关于作者 <text class="tn-icon-moon-fill tn-padding-left-xs"></text></view>
        <view class="">蔡北北，95年，广州</view>
        <view class="">浮夸UI设计</view>
        <view class="">菜鸡软件开发</view>
        <view class="">祭天产品经理</view>
        <view class="">背锅项目经理</view>
        <view class="tn-margin-bottom-xl">努力往CTO去发展</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟小小团队感恩你的支持</view>
        <view class="tn-margin-bottom-xl"></view>
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
      return {
        setList: [
        	{
        		title: "图鸟UI",
            title2: "UI组件",
            common: "免费商用",
            common2: "插件市场获取",
            vip: "免费商用",
            vip2: "会员群直接获取"
        	},
        	{
        		title: "图鸟VUE3 ",
            title2: "UI组件",
        		common: "免费商用",
        		common2: "插件市场获取",
        		vip: "免费商用",
        		vip2: "会员群直接获取"
        	},
        	{
        		title: "圈子博客",
            title2: "纯前端模板",
        		common: "免费商用",
        		common2: "插件市场获取",
        		vip: "免费商用",
        		vip2: "会员群直接获取"
        	},
          {
          	title: "简约商圈",
            title2: "纯前端模板",
          	common: "免费商用",
          	common2: "插件市场获取",
          	vip: "免费商用",
          	vip2: "会员群直接获取"
          },
        	{
        		title: "凶姐壁纸",
            title2: "纯前端模板",
        		common: "免费商用",
        		common2: "插件市场获取",
        		vip: "免费商用",
        		vip2: "会员群直接获取"
        	},
          {
          	title: "无名小程序",
            title2: "前后端项目",
          	common: "无",
          	common2: "",
          	vip: "会员专属",
          	vip2: "前后端开发ing"
          }
        ]
      }
    },
    methods: {
      // 复制地址
      copyYuque() {
        uni.setClipboardData({
          data: "https://www.tuniaokj.com/",
        })
      },
      // 复制微信号
      copyWechat() {
        uni.setClipboardData({
          data: "tnkewo",
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  /* 间隔线 start*/
    .tn-strip-bottom-min {
      width: 100%;
      border-bottom: 1rpx solid #F8F9FB;
    }
    
    .tn-strip-bottom {
     width: 100%;
     border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
    }
     /* 间隔线 end*/
  
  /* 页面阴影 start*/
  .tn-bdhook-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
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
