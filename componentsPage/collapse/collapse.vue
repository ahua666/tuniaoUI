<template>

  <view class="components-collapse tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Collapse折叠面板</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="手风琴模式">
        <tn-collapse>
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title">
            <view class="tn-text-break-word">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
      </demo-title>
      
      <demo-title title="允许全部展开">
        <tn-collapse :accordion="false">
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title">
            <view class="tn-text-break-word">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
      </demo-title>
      
      <demo-title title="禁止第二项展开">
        <tn-collapse>
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title" :disabled="index === 1">
            <view class="tn-text-break-word">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
      </demo-title>
      
      <demo-title title="关闭点击效果">
        <tn-collapse hoverClass="">
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title">
            <view class="tn-text-break-word">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
      </demo-title>
      
      <demo-title title="隐藏箭头">
        <tn-collapse :arrow="false">
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title">
            <view class="tn-text-break-word">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
      </demo-title>
      
      <demo-title title="自定义样式">
        <tn-collapse :headStyle="headStyle" :bodyStyle="bodyStyle" :itemStyle="itemStyle">
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title" align="center">
            <view class="tn-text-break-word">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
      </demo-title>
    </view>

  </view>

</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'componentsCollapse',
    components: {demoTitle},
    data() {
      return {
        list: [
          {
            title: '关雎',
            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。'
          },
          {
            title: '长歌行',
            content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！'
          },
          {
            title: '秋风辞',
            content: '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！'
          }
        ],
        headStyle: {
          backgroundColor: '#EFEFEF'
        },
        bodyStyle: {
          backgroundColor: '#EFEFEF'
        },
        itemStyle: {
          backgroundColor: '#EFEFEF',
          borderRadius: '20rpx',
          overflow: 'hidden'
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .components-collapse {
    background-color: $tn-bg-gray-color;
  }
</style>
