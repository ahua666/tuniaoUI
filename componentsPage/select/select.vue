<template>

  <view class="components-select">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Select列选择器</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <view class="tn-flex tn-flex-row-center"><tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @click="showSelect">弹出Select</tn-button></view>
        <view class="select-result tn-border-dashed">
          {{ result }}
        </view>
      </dynamic-demo-template>

    </view>
    
    <!-- select -->
    <tn-select
      v-model="show"
      :mode="mode"
      title="请选择数据"
      :list="list"
      :maskCloseable="maskCloseable"
      @cancel="cancelSelect"
      @confirm="confirmSelect"
    >
    </tn-select>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  
  export default {
    name: 'componentsSelect',
    components: {dynamicDemoTemplate},
    data() {
      return {
        result: 'Select结果',
        show: false,
        mode: 'single',
        list: [
          {
            value: 1,
            label: '哆啦A梦'
          },
          {
            value: 2,
            label: '大熊'
          },
          {
            value: 3,
            label: '小夫'
          },
          {
            value: 4,
            label: '静香'
          },
          {
            value: 5,
            label: '胖虎'
          },
          {
            value: 6,
            label: '大星'
          },
        ],
        maskCloseable: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-select组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '模式',
                optional: ['单列','多列','自动多列'],
                methods: 'modeChange'
              },
              {
                title: '点击遮罩关闭',
                optional: ['是','否'],
                methods: 'maskCloseableChange'
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
      // 弹出Select
      showSelect(event) {
        this.openSelect()
      },
      // 切换模式
      modeChange(event) {
        switch(event.index) {
          case 0:
            this.mode = 'single'
            this.list = [
              {
                value: 1,
                label: '哆啦A梦'
              },
              {
                value: 2,
                label: '大熊'
              },
              {
                value: 3,
                label: '小夫'
              },
              {
                value: 4,
                label: '静香'
              },
              {
                value: 5,
                label: '胖虎'
              }
            ]
            break
          case 1:
            this.mode = 'multi'
            this.list = [
              [
                {
                  value: 1,
                  label: '哆啦A梦'
                },
                {
                  value: 2,
                  label: '大熊'
                },
                {
                  value: 3,
                  label: '小夫'
                },
                {
                  value: 4,
                  label: '静香'
                },
                {
                  value: 5,
                  label: '胖虎'
                },
              ],
              [
                {
                  value: 1,
                  label: '家'
                },
                {
                  value: 2,
                  label: '学校'
                },
                {
                  value: 3,
                  label: '操场'
                }
              ]
            ]
            break
          case 2:
            this.mode = 'multi-auto'
            this.list = [
              {
                value: 11,
                label: '森林—1',
                children: [
                  {
                    value: 1101,
                    label: '树-11',
                    children: [
                      {
                        value: 110101,
                        label: '树叶-111'
                      },
                      {
                        value: 110102,
                        label: '树叶-112'
                      },
                      {
                        value: 110103,
                        label: '树叶-113'
                      },
                      {
                        value: 110104,
                        label: '树叶-114'
                      }
                    ]
                  },
                  {
                    value: 1102,
                    label: '树-12',
                    children: [
                      {
                        value: 110201,
                        label: '树叶-121'
                      },
                      {
                        value: 110202,
                        label: '树叶-122'
                      },
                      {
                        value: 110203,
                        label: '树叶-123'
                      },
                      {
                        value: 110204,
                        label: '树叶-124'
                      }
                    ]
                  },
                  {
                    value: 1103,
                    label: '树-13',
                    children: [
                      {
                        value: 110301,
                        label: '树叶-131'
                      },
                      {
                        value: 110302,
                        label: '树叶-132'
                      },
                      {
                        value: 110303,
                        label: '树叶-133'
                      },
                      {
                        value: 110304,
                        label: '树叶-134'
                      }
                    ]
                  }
                ]
              },
              {
                value: 12,
                label: '森林—2',
                children: [
                  {
                    value: 1201,
                    label: '树-21',
                    children: [
                      {
                        value: 120101,
                        label: '树叶-211'
                      },
                      {
                        value: 120102,
                        label: '树叶-212'
                      },
                      {
                        value: 120103,
                        label: '树叶-213'
                      },
                      {
                        value: 120104,
                        label: '树叶-214'
                      }
                    ]
                  },
                  {
                    value: 1202,
                    label: '树-22',
                    children: [
                      {
                        value: 120201,
                        label: '树叶-221'
                      },
                      {
                        value: 120202,
                        label: '树叶-222'
                      },
                      {
                        value: 120203,
                        label: '树叶-223'
                      },
                      {
                        value: 120204,
                        label: '树叶-224'
                      }
                    ]
                  },
                  {
                    value: 1203,
                    label: '树-23',
                    children: [
                      {
                        value: 120301,
                        label: '树叶-231'
                      },
                      {
                        value: 120302,
                        label: '树叶-232'
                      },
                      {
                        value: 120303,
                        label: '树叶-233'
                      },
                      {
                        value: 120304,
                        label: '树叶-234'
                      }
                    ]
                  }
                ]
              }
            ]
            break
        }
        this.openSelect()
      },
      // 切换点击遮罩关闭
      maskCloseableChange(event) {
        this.maskCloseable = event.index === 0 ? true : false
        this.openSelect()
      },
      
      // 点击取消按钮
      cancelSelect(event) {
        this.$tn.message.toast('点击了取消按钮')
      },
      // 点击确认按钮
      confirmSelect(event) {
        console.log(event);
        switch (this.mode) {
          case 'single':
            this.result = event[0]['label']
            break
          case 'multi':
            this.result = ''
            if (event.length) {
              event.map((item, index) => {
                if (index !== 0) this.result += ' - ' 
                this.result += item.label
              })
            }
            break
          case 'multi-auto':
            this.result = ''
            if (event.length) {
              event.map((item, index) => {
                if (index !== 0) this.result += ' - ' 
                this.result += item.label
              })
            }
            break
        }
      },
      
      // 打开Select
      openSelect() {
        this.show = true
      },

    },

  }
</script>

<style lang="scss" scoped>
  
  .select-result {
    margin-top: 10rpx;
    padding: 10rpx 30rpx;
    background-color: $tn-font-holder-color;
    text-align: center;
  }
</style>
