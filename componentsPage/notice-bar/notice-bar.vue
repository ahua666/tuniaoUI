<template>

  <view class="components-notice-bar">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>noticeBar通知栏</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-notice-bar
          :show="show"
          :list="list"
          :mode="mode"
          :backgroundColor="backgroundColor"
          :fontColor="fontColor"
          :fontSize="fontSize"
          :playStatus="playStatus"
          :leftIcon="leftIcon"
          :leftIconName="leftIconName"
          :leftIconSize="leftIconSize"
          :rightIcon="rightIcon"
          :rightIconName="rightIconName"
          :rightIconSize="rightIconSize"
          :closeBtn="closeBtn"
          :radius="radius"
          :padding="padding"
          :autoplay="autoplay"
          :duration="duration"
          :speed="speed"
          :circular="circular"
          :autoHidden="autoHidden"
          @click="onClick"
          @close="close"
          @clickLeft="onLeftClick"
          @clickRight="onRightClick"
          @end="end"
        ></tn-notice-bar>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsNoticeBar',
    components: {dynamicDemoTemplate},
    data() {
      return {
        list: [
          'TuniaoUI现已发布V1.0.0',
          '今天天气晴朗，适合处理bug',
          'TuniaoUIV2.0.0即将发布',
          '今天想提前下班，领导不允许："你提前走人就算你是旷工了啊！"'
        ],
        
        show: true,
        mode: 'horizontal',
        backgroundColor: '',
        fontColor: '',
        fontSize: 0,
        playStatus: 'play',
        leftIcon: true,
        leftIconName: 'sound',
        leftIconSize: 34,
        rightIcon: false,
        rightIconName: 'right',
        rightIconSize: 26,
        closeBtn: false,
        radius: 0,
        padding: '18rpx 24rpx',
        autoplay: true,
        duration: 2000,
        speed: 160,
        circular: true,
        autoHidden: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-notice-bar组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '滚动模式',
                optional: ['水平连续','水平不连续','垂直'],
                methods: 'modeChange'
              },
              {
                title: '显示状态',
                optional: ['显示','隐藏'],
                methods: 'showChange'
              },
              {
                title: '播放状态',
                optional: ['播放','暂停'],
                methods: 'playStatusChange'
              },
              {
                title: '速度控制',
                optional: ['减速','加速'],
                methods: 'speedChange'
              },
              {
                title: '图标显示',
                optional: ['默认','显示右边图标','显示关闭按钮','全部不显示'],
                methods: 'iconChange'
              },
              {
                title: '自定义图标',
                optional: ['默认','自定义'],
                methods: 'iconNameChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '自定义样式',
                optional: ['默认','自定义'],
                methods: 'styleChange'
              }
              
            ]
          }
        ]

      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换滚动模式
      modeChange(event) {
        this.speed = 160
        this.duration = 2000
        switch (event.index) {
          case 0:
            this.mode = 'horizontal'
            this.circular = true
            break
          case 1:
            this.mode = 'horizontal'
            this.circular = false
            break
          case 2:
            this.mode = 'vertical'
            break
        }
      },
      // 切换显示状态
      showChange(event) {
        this.show = event.index === 0 ? true : false
      },
      // 切换播放状态
      playStatusChange(event) {
        this.playStatus = event.index === 0 ? 'play' : 'paused'
      },
      // 切换滚动速度
      speedChange(event) {
        switch (event.index) {
          case 0:
            if (this.mode === 'horizontal' && this.circular) {
              const speed = this.speed - 10
              this.speed = speed > 0 ? speed : 0
            } else {
              const duration = this.duration + 100
              if (duration > 3000) {
                this.$t.messageUtils.toast('达到速度最小值')
                this.duration = 3000
              } else {
                this.duration = duration
              }
            }
            break
          case 1:
            if (this.mode === 'horizontal' && this.circular) {
              const speed = this.speed + 10
              if (speed > 300) {
                this.$t.messageUtils.toast('达到速度最大值')
                this.speed = 300
              } else {
                this.speed = speed
              }
            } else {
              const duration = this.duration - 100
              this.duration = this.duration > 0 ? duration : 0
            }
            break
        }
      },
      // 切换图标显示
      iconChange(event) {
        switch (event.index) {
          case 0:
            this.leftIcon = true
            this.rightIcon = false
            this.closeBtn = false
            break
          case 1:
            this.rightIcon = true
            break
          case 2:
            this.closeBtn = true
            break
          case 3:
            this.leftIcon = false
            this.rightIcon = false
            this.closeBtn = false
            break
        }
      },
      // 切换自定义图标
      iconNameChange(event) {
        switch (event.index) {
          case 0:
            this.leftIconName = 'sound'
            this.rightIconName = 'right'
            break
          case 1:
            this.leftIconName = 'tag'
            this.rightIconName = 'trophy'
            break
        }
      },
      // 切换自定义颜色
      colorChange(event) {
        switch (event.index) {
          case 0:
            this.backgroundColor = ''
            this.fontColor = ''
            break
          case 1:
            this.backgroundColor = 'tn-bg-red'
            this.fontColor = '#FFFFFF'
            break
        }
      },
      // 切换自定义样式
      styleChange(event) {
        switch (event.index) {
          case 0:
            this.fontSize = 0
            this.radius = 0
            this.leftIconSize = 34
            this.rightIconSize = 26
            break
          case 1:
            this.fontSize = 40
            this.radius = 10
            this.leftIconSize = 50
            this.rightIconSize = 30
            break
        }
      },
      
      
      // 点击消息
      onClick(index) {
        this.$t.messageUtils.toast('点击了消息')
      },
      // 点击关闭按钮
      close() {
        this.$t.messageUtils.toast('点击关闭按钮')
      },
      // 点击左边图标
      onLeftClick() {
        this.$t.messageUtils.toast('点击左边图标')
      },
      // 点击右边图标
      onRightClick() {
        this.$t.messageUtils.toast('点击右边图标')
      },
      // 一个周期滚动结束
      end() {
        console.log('滚动结束');
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
