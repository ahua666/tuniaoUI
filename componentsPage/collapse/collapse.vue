<template>

  <view class="components-collapse">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Collapse折叠面板</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" @click="click">
        <tn-collapse v-if="!customCollapse" :accordion="accordion" :headStyle="headStyle" :bodyStyle="bodyStyle" :itemStyle="itemStyle" :arrow="arrow" :arrowColor="arrowColor" :hoverClass="hoverClass" @change="change">
          <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title" :disabled="item.disabled" :align="align">
            <view class="collapse-item-content">
              {{ item.content }}
            </view>
          </tn-collapse-item>
        </tn-collapse>
        <tn-collapse v-else :accordion="accordion" :headStyle="headStyle" :bodyStyle="bodyStyle" :itemStyle="itemStyle" :arrow="arrow" :arrowColor="arrowColor" :hoverClass="hoverClass" @change="change">
          <tn-collapse-item title="足迹" :align="align">
            <tn-list-cell>广州</tn-list-cell>
            <tn-list-cell>深圳</tn-list-cell>
            <tn-list-cell>佛山</tn-list-cell>
          </tn-collapse-item>
          <tn-collapse-item title="时间">
            <tn-list-cell>12月</tn-list-cell>
            <tn-list-cell>11月</tn-list-cell>
            <tn-list-cell>10月</tn-list-cell>
          </tn-collapse-item>
        </tn-collapse>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsCollapse',
    components: {dynamicDemoTemplate},
    data() {
      return {
        list: [
          {
            title: '关雎',
            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
            disabled: false
          },
          {
            title: '长歌行',
            content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！',
            disabled: false
          },
          {
            title: '秋风辞',
            content: '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！',
            disabled: false
          }
        ],
        accordion: true,
        headStyle: {},
        bodyStyle: {},
        itemStyle: {},
        arrow: true,
        arrowColor: '#AAAAAA',
        hoverClass: 'tn-hover',
        align: 'left',
        
        customCollapse: false,
        
        tips: ['无需依赖额外的样式文件','使用tn-collapse、tn-collapse-item组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '手风琴模式',
                optional: ['开启','关闭'],
                methods: 'accoraionChange'
              },
              {
                title: '禁用打开',
                optional: ['无','禁止第二项打开'],
                methods: 'disabledChange'
              },
              {
                title: '点击效果',
                optional: ['默认','无'],
                methods: 'hoverClassChange'
              },
              {
                title: '箭头显示',
                optional: ['显示','隐藏'],
                methods: 'arrowChange'
              },
              {
                title: '自定义样式',
                optional: ['默认','自定义'],
                methods: 'styleChange'
              },
              {
                title: '自定义Item内容',
                optional: ['默认','自定义'],
                methods: 'customItemChange'
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
      // 切换手风琴模式
      accoraionChange(event) {
        this.accordion = event.index === 0 ? true : false
      },
      // 切换Item禁止打开
      disabledChange(event) {
        if (event.index === 0) {
          this.list[1].disabled = false
        } else {
          this.list[1].disabled = true
        }
        
      },
      // 切换点击效果
      hoverClassChange(event) {
        this.hoverClass = event.index === 0 ? 'tn-hover' : ''
      },
      // 切换箭头显示
      arrowChange(event) {
        this.arrow = event.index === 0 ? true : false
      },
      // 切换自定义样式
      styleChange(event) {
        switch (event.index) {
          case 0:
            this.headStyle = {}
            this.bodyStyle = {}
            this.itemStyle = {}
            this.arrowColor = '#AAAAAA'
            this.align = 'left'
            break
          case 1:
            this.headStyle = {
              borderBottom: '1rpx solid #AAAAAA'
            }
            this.bodyStyle = {
              margin: '10rpx'
            }
            this.itemStyle = {
              'text-indent': '2em'
            }
            this.arrowColor = '#E6E6E6'
            this.align = 'center'
            break
        }
      },
      // 切换自定义item内容
      customItemChange(event) {
        switch (event.index) {
          case 0:
            this.customCollapse = false
            this.$refs.demoTemplate.updateSectionBtnsState(1, true)
            break
          case 1:
            this.customCollapse = true
            this.$refs.demoTemplate.updateSectionBtnsState(1, false)
            break
        }
      },
      
      // 面板发生了改变
      change() {
        setTimeout(() => {
          this.$refs.demoTemplate.updateSectionScrollView()
        }, 300)
      }
    },

  }
</script>

<style lang="scss" scoped>
  .collapse-item-content {
    word-wrap: break-word;
  }
</style>
