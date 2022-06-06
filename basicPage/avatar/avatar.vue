<template>

  <view class="basic-avatar tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>头像</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基础">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <view class="tn-margin-sm">
            <tn-avatar></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar backgroundColor="#FFFFFF"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar icon="link" backgroundColor="#FFFFFF"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar text="TN" backgroundColor="#FFFFFF"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :shadow="true" :src="src"></tn-avatar>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="大小">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <view class="tn-margin-sm">
            <tn-avatar size="sm" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar size="lg" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar size="xl" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar size="160rpx" :src="src"></tn-avatar>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="形状">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <view class="tn-margin-sm">
            <tn-avatar shape="circle" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar shape="square" :src="src"></tn-avatar>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="边框">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <view class="tn-margin-sm">
            <tn-avatar :border="true" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :border="true" borderColor="#01BEFF" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :border="true" borderColor="#01BEFF" :borderSize="4" :src="src"></tn-avatar>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="角标">
        <view class="tn-flex tn-flex-col-center tn-flex-row-left tn-flex-wrap">
          <view class="tn-margin-sm">
            <tn-avatar :badge="true" badgeText="99+" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :badge="true" badgeIcon="vip" :src="src"></tn-avatar>
          </view>
          <view class="tn-margin-sm">
            <tn-avatar :badge="true" badgeIcon="vip" badgeBgColor="transparent" badgeColor="tn-color-orange" :badgeSize="40" :badgePosition="[-8, 18]" :src="src"></tn-avatar>
          </view>
        </view>
      </demo-title>
      
      <demo-title title="头像组">
        <view class="tn-margin-sm">
          <tn-avatar-group :lists="groupList"></tn-avatar-group>
        </view>
        <view class="tn-margin-sm">
          <tn-avatar-group :lists="groupList" shape="shape"></tn-avatar-group>
        </view>
        <view class="tn-margin-sm">
          <tn-avatar-group :lists="groupList" size="lg"></tn-avatar-group>
        </view>
        <view class="tn-margin-sm">
          <tn-avatar-group :lists="groupList" size="lg" :gap="0.5"></tn-avatar-group>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicAvatar',
    components: {demoTitle},
    data() {
      return {
        src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai4.jpg',
        groupList: [
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg'},
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'},
          {text: 'TN'},
          {icon: 'logo-tuniao'},
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg'},
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'},
        ]
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>
  .basic-avatar {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
