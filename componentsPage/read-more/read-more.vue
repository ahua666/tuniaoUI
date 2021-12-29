<template>

  <view class="components-read-more">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>ReadMore查看更多</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" :fullWindowsScroll="fullWindowsScroll" @click="click">
        <tn-read-more
          :showHeight="showHeight"
          :closeBtn="closeBtn"
          :openText="openText"
          :closeText="closeText"
          :openIcon="openIcon"
          :closeIcon="closeIcon"
          :fontColor="fontColor"
          :fontSize="fontSize"
          :shadowStyle="shadowStyle"
          @open="open"
          @closed="closed">
          <rich-text :nodes="content"></rich-text>
        </tn-read-more>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsReadMore',
    components: {dynamicDemoTemplate},
    data() {
      return {
        content: `噫吁嚱，危乎高哉！
                  蜀道之难，难于上青天！
                  蚕丛及鱼凫，开国何茫然！
                  尔来四万八千岁，不与秦塞通人烟。
                  西当太白有鸟道，可以横绝峨眉巅。
                  地崩山摧壮士死，然后天梯石栈相钩连。
                  上有六龙回日之高标，下有冲波逆折之回川。
                  黄鹤之飞尚不得过，猿猱欲度愁攀援。
                  青泥何盘盘，百步九折萦岩峦。
                  扪参历井仰胁息，以手抚膺坐长叹。

                  问君西游何时还？畏途巉岩不可攀。
                  但见悲鸟号古木，雄飞雌从绕林间。
                  又闻子规啼夜月，愁空山。
                  蜀道之难，难于上青天，使人听此凋朱颜！
                  连峰去天不盈尺，枯松倒挂倚绝壁。
                  飞湍瀑流争喧豗，砯崖转石万壑雷。
                  其险也如此，嗟尔远道之人胡为乎来哉！(也如此 一作：也若此)

                  剑阁峥嵘而崔嵬，一夫当关，万夫莫开。
                  所守或匪亲，化为狼与豺。
                  朝避猛虎，夕避长蛇，磨牙吮血，杀人如麻。
                  锦城虽云乐，不如早还家。
                  蜀道之难，难于上青天，侧身西望长咨嗟！`,
        showHeight: 400,
        closeBtn: false,
        openText: '展开阅读全文',
        closeText: '收起',
        openIcon: 'down',
        closeIcon: 'up',
        fontColor: '',
        fontSize: 0,
        shadowStyle: {
          backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
          paddingTop: "300rpx",
          marginTop: "-300rpx"
        },
        
        fullWindowsScroll: false,
        tips: ['无需依赖额外的样式文件','使用tn-read-more组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '默认高度',
                optional: ['200','400', '600'],
                methods: 'showHeightChange',
                current: 1
              },
              {
                title: '显示收起按钮',
                optional: ['显示','隐藏'],
                methods: 'closeBtnChange',
                current: 1
              },
              {
                title: '自定义样式',
                optional: ['默认','自定义'],
                methods: 'customChange'
              }
            ]
          }
        ]

      }
    },
    onReady() {
      setTimeout(() => {
        this.$refs.demoTemplate.updateSectionScrollView()
      }, 100)
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换默认高度
      showHeightChange(event) {
        this.showHeight = Number(event.name)
      },
      // 切换收起按钮模式
      closeBtnChange(event) {
        this.closeBtn = event.index === 0 ? true : false
      },
      // 切换自定义样式
      customChange(event) {
        switch (event.index) {
          case 0:
            this.openText = '展开阅读全文'
            this.closeText = '收起'
            this.openIcon = 'down'
            this.closeIcon = 'up'
            this.fontColor = ''
            this.fontSize = 0
            this.shadowStyle = {
              backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
              paddingTop: "300rpx",
              marginTop: "-300rpx"
            }
            break
          case 1:
            this.openText = '付费解锁剩余内容'
            this.closeText = '折起来'
            this.openIcon = 'money'
            this.closeIcon = 'close-circle'
            this.fontSize = 30
            this.shadowStyle = {
              backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #AAA 100%)",
              paddingTop: "300rpx",
              marginTop: "-300rpx"
            }
            break
        }
      },
      
      
      // 展开
      open() {
        // setTimeout(() => {
        //   this.$refs.demoTemplate.updateSectionScrollView()
        // }, 350)
        this.fullWindowsScroll = true
      },
      // 收起
      closed() {
        setTimeout(() => {
          this.fullWindowsScroll = false
          this.$refs.demoTemplate.updateSectionScrollView()
        }, 350)
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
