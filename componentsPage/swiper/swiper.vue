<template>

  <view class="components-swiper">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Swiper轮播图</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-swiper
          :list="list"
          :height="height"
          :backgroundColor="backgroundColor"
          :title="title"
          :titleStyle="titleStyle"
          :radius="radius"
          :mode="mode"
          :indicatorPosition="indicatorPosition"
          :effect3d="effect3d"
          :effect3dPreviousSpacing="effect3dPreviousSpacing"
          :interval="interval"
          :duration="duration"
          :circular="circular"
        ></tn-swiper>
      </dynamic-demo-template>

    </view>
    
    <!-- Toast -->
    <tn-toast
      ref="toast"
      @closed="closedToast"
    ></tn-toast>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsSwiper',
    components: {dynamicDemoTemplate},
    data() {
      return {
        list: [
          {image: 'https://tnuiimage.tnkjapp.com/swiper/spring.jpg', title: '春天'},
          {image: 'https://tnuiimage.tnkjapp.com/swiper/summer.jpg', title: '夏天'},
          {image: 'https://tnuiimage.tnkjapp.com/swiper/autumn.jpg', title: '秋天'}
        ],
        height: 250,
        backgroundColor: '',
        title: false,
        titleStyle: {},
        radius: 8,
        mode: 'round',
        indicatorPosition: 'bottomCenter',
        effect3d: false,
        effect3dPreviousSpacing: 50,
        interval: 3000,
        duration: 500,
        circular: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-swiper组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '指示器模式',
                optional: ['方形','圆角方形','点','数值','隐藏'],
                methods: 'modeChange',
                current: 1
              },
              {
                title: '指示器位置',
                optional: ['左上','中上','右上','左下','中下','右下'],
                methods: 'indicatorPositionChange',
                current: 4
              },
              {
                title: '标题',
                optional: ['显示','隐藏'],
                methods: 'titleChange',
                current: 1
              },
              {
                title: '自定义样式',
                optional: ['默认','自定义'],
                methods: 'styleChange'
              },
              {
                title: '3d切换效果',
                optional: ['开启','关闭'],
                methods: 'effect3dChange',
                current: 1
              },
              {
                title: '切换时间',
                optional: ['默认','5000'],
                methods: 'intervalChange'
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
      // 切换指示器模式
      modeChange(event) {
        switch (event.index) {
          case 0:
            this.mode = 'rect'
            break
          case 1:
            this.mode = 'round'
            break
          case 2:
            this.mode = 'dot'
            break
          case 3:
            this.mode = 'number'
            break
          case 4:
            this.mode = ''
            break
        }
      },
      // 切换指示器位置
      indicatorPositionChange(event) {
        switch (event.index) {
          case 0:
            this.indicatorPosition = 'topLeft'
            break
          case 1:
            this.indicatorPosition = 'topCenter'
            break
          case 2:
            this.indicatorPosition = 'topRight'
            break
          case 3:
            this.indicatorPosition = 'bottomLeft'
            break
          case 4:
            this.indicatorPosition = 'bottomCenter'
            break
          case 5:
            this.indicatorPosition = 'bottomRight'
            break
        }
      },
      // 切换标题
      titleChange(event) {
        this.title = event.index === 0 ? true : false
      },
      // 切换自定义样式
      styleChange(event) {
        switch (event.index) {
          case 0:
            this.height = 250
            this.backgroundColor = ''
            this.titleStyle = {}
            this.radius = 8
            this.effect3dPreviousSpacing = 50
            break
          case 1:
            this.height = 300
            this.backgroundColor = '#E6E6E6'
            this.titleStyle = {
              color: '#FFFFFF'
            }
            this.radius = 12
            this.effect3dPreviousSpacing = 100
            break
        }
      },
      // 切换3d效果
      effect3dChange(event) {
        this.effect3d = event.index === 0 ? true : false
      },
      // 切换切换时间
      intervalChange(event) {
        switch (event.index) {
          case 0:
            this.interval = 3000
            this.duration = 500
            break
          case 1:
            this.interval = 5000
            this.duration = 800
            break
        }
      },
      
      
      // 打开Toast
      openToast() {
        this.$refs.toast.show({
          title: this.title,
          content: this.content,
          icon: this.icon,
          image: this.image,
          duration: this.duration
        })
      },
      // 关闭Toast
      closedToast() {
        this.$t.messageUtils.toast('Toast关闭')
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
