<template>

  <view class="components-read-more tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>ReadMore查看更多</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="基本使用">
        <tn-read-more>
          <rich-text :nodes="content"></rich-text>
        </tn-read-more>
      </demo-title>
      
      <demo-title title="允许展开后收起">
        <tn-read-more :closeBtn="true">
          <rich-text :nodes="content"></rich-text>
        </tn-read-more>
      </demo-title>
      
      <demo-title title="修改显示内容的高度">
        <tn-read-more :closeBtn="true" :showHeight="200">
          <rich-text :nodes="content"></rich-text>
        </tn-read-more>
      </demo-title>
      
      <demo-title title="自定义展开收起文本和图标">
        <tn-read-more :closeBtn="true" openText="付费查看剩余内容" openIcon="lucky-money" closeText="下次再看" closeIcon="close">
          <rich-text :nodes="content"></rich-text>
        </tn-read-more>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>

    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsReadMore',
    components: {demoTitle},
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
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" scoped>

</style>
