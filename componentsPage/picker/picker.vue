<template>

  <view class="components-picker">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Picker选择器</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <view class="tn-flex tn-flex-row-center"><tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @tap="showPicker">弹出Picker</tn-button></view>
        <view class="picker-result tn-border-dashed">
          {{ result }}
        </view>
      </dynamic-demo-template>

    </view>
    
    <!-- picker -->
    <tn-picker
      v-model="show"
      :mode="mode"
      :params="params"
      :range="range"
      :rangeKey="rangeKey"
      :defaultSelector="defaultSelector"
      :showTimeTag="showTimeTag"
      :startYear="startYear"
      :endYear="endYear"
      :defaultTime="defaultTime"
      :defaultRegin="defaultRegion"
      :areaCode="areaCode"
      :maskCloseable="maskCloseable"
      @cancel="cancelPicker"
      @confirm="confirmPicker"
    >
    </tn-picker>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  
  export default {
    name: 'componentsPicker',
    components: {dynamicDemoTemplate},
    data() {
      return {
        result: 'Picker结果',
        show: false,
        mode: 'selector',
        params: {
          year: true,
          month: true,
          day: true,
          hour: false,
          minute: false,
          second: false,
          province: true,
          city: true,
          area: true,
          timestamp: true
        },
        showTimeTag: false,
        startYear: 2000,
        endYear: 2100,
        defaultTime: '2021/10/01 12:00:00',
        defaultRegion: ['广东省','广州市','天河区'],
        areaCode: [],
        maskCloseable: true,
        range: ['哆啦A梦','大熊','小夫','静香','胖虎'],
        rangeKey: '',
        defaultSelector: [0],
        
        tips: ['无需依赖额外的样式文件','使用tn-picker组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '模式',
                optional: ['单列','多列','时间','地区'],
                methods: 'modeChange'
              },
              {
                title: '显示时分秒',
                optional: ['隐藏','显示'],
                methods: 'timeSecondChange',
                show: false
              },
              {
                title: '显示时间单位',
                optional: ['隐藏','显示'],
                methods: 'showTimeTagChange',
                show: false
              },
              {
                title: '指定起始年份',
                optional: ['2000-2100','2020-2030'],
                methods: 'timeRangeChange',
                show: false
              },
              {
                title: '默认时间',
                optional: ['2021/10/01 12:00:00','2021-10-01 17:00:00'],
                methods: 'defaultTimeChange',
                show: false
              },
              {
                title: '默认地区',
                optional: ['广东省-广州市-天河区','44-4401-440107'],
                methods: 'defaultRegionChange',
                show: false
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
      // 弹出Picker
      showPicker(event) {
        this.openPicker()
      },
      // 切换模式
      modeChange(event) {
        switch(event.index) {
          case 0:
            this.mode = 'selector'
            this.range = ['哆啦A梦','大熊','小夫','静香','胖虎']
            this.defaultSelector = [0]
            this.rangeKey = ''
            this.$refs.demoTemplate.updateSectionBtnsState([1,2,3,4], false)
            this.$refs.demoTemplate.updateSectionBtnsState(5, false)
            break
          case 1:
            this.mode = 'multiSelector'
            this.range = [
              [
                {
                  id: 1,
                  name: '哆啦A梦'
                },
                {
                  id: 2,
                  name: '大熊'
                },
                {
                  id: 3,
                  name: '小夫'
                },
                {
                  id: 4,
                  name: '静香'
                },
                {
                  id: 5,
                  name: '胖虎'
                },
              ],
              [
                {
                  id: 1,
                  name: '家'
                },
                {
                  id: 2,
                  name: '学校'
                },
                {
                  id: 3,
                  name: '操场'
                }
              ]
            ]
            this.defaultSelector = [0,0]
            this.rangeKey = 'name'
            this.$refs.demoTemplate.updateSectionBtnsState([1,2,3,4], false)
            this.$refs.demoTemplate.updateSectionBtnsState(5, false)
            break
          case 2:
            this.mode = 'time'
            this.$refs.demoTemplate.updateSectionBtnsState([1,2,3,4], true)
            this.$refs.demoTemplate.updateSectionBtnsState(5, false)
            break
          case 3:
            this.mode = 'region'
            this.$refs.demoTemplate.updateSectionBtnsState([1,2,3,4], false)
            this.$refs.demoTemplate.updateSectionBtnsState(5, true)
            break
        }
        this.openPicker()
      },
      // 切换显示时分秒
      timeSecondChange(event) {
        this.params = {
          year: true,
          month: true,
          day: true,
          hour: true,
          minute: true,
          second: true,
          province: true,
          city: true,
          area: true,
          timestamp: true
        }
        this.openPicker()
      },
      // 切换显示时间单位
      showTimeTagChange(event) {
        this.showTimeTag = event.index === 0 ? false : true
        this.openPicker()
      },
      // 切换起始年份
      timeRangeChange(event) {
        if (event.index === 0) {
          this.startYear = 2000
          this.endYear = 2100
        } else if (event.index === 1) {
          this.startYear = 2020
          this.endYear = 2030
        }
        this.openPicker()
      },
      // 切换默认时间
      defaultTimeChange(event) {
        this.defaultTime = event.name
        this.openPicker()
      },
      // 切换默认地区
      defaultRegionChange(event) {
        if (event.index === 0) {
          this.defaultRegion = ['广东省','广州市','天河区']
          this.areaCode = []
        } else if (event.index === 1) {
          this.defaultRegion = []
          this.areaCode = ['44','4401','440111']
        }
        this.openPicker()
      },
      // 切换点击遮罩关闭
      maskCloseableChange(event) {
        this.maskCloseable = event.index === 0 ? true : false
        this.openPicker()
      },
      
      // 点击取消按钮
      cancelPicker(event) {
        this.$tn.message.toast('点击了取消按钮')
      },
      // 点击确认按钮
      confirmPicker(event) {
        switch (this.mode) {
          case 'selector':
            this.result = this.range[event[0]]
            this.defaultSelector = event
            break
          case 'multiSelector':
            this.result = `${this.range[0][event[0]][this.rangeKey]} - ${this.range[1][event[1]][this.rangeKey]}`
            this.defaultSelector = event
            break
          case 'time':
            this.result = `${event.year}-${event.month}-${event.day} ${this.params.hour ? event.hour+':' : ''}${this.params.minute ? event.minute+':' : ''}${this.params.second ? event.second : ''}`
            this.defaultTime = this.result
            break
          case 'region':
            this.result = `${event.province.label}-${event.city.label}-${event.area.label}`
            break
        }
      },
      
      // 打开Picker
      openPicker() {
        this.show = true
      },

    },

  }
</script>

<style lang="scss" scoped>
  
  .picker-result {
    margin-top: 20rpx;
    padding: 10rpx 30rpx;
    background-color: $tn-font-holder-color;
    text-align: center;
  }
</style>
