<template>

  <view class="components-calendar">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Calendar日历</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <view class="tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-center">
          <tn-button style="width: 100%;" width="100%" backgroundColor="#01BEFF" fontColor="tn-color-white" @click="showCalendar">弹出日历</tn-button>
          <view v-if="result !== ''" class="calendar-result tn-border-dashed">
            {{ result }}
          </view>
        </view>
      </dynamic-demo-template>

    </view>
    
    <!-- Calendar -->
    <tn-calendar
      v-if="show"
      v-model="show"
      :mode="mode"
      :showLunar="showLunar"
      :activeBgColor="activeBgColor"
      :activeColor="activeColor"
      :rangeBgColor="rangeBgColor"
      :rangeColor="rangeColor"
      :btnColor="btnColor"
      :lunarColor="lunarColor"
      :startText="startText"
      :endText="endText"
      :toolTips="toolTips"
      :changeYear="changeYear"
      :changeMonth="changeMonth"
      @change="onChange"
    ></tn-calendar>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsCalendar',
    components: {dynamicDemoTemplate},
    data() {
      return {
        show: false,
        mode: 'date',
        showLunar: true,
        activeBgColor: '#01BEFF',
        activeColor: '#FFFFFF',
        rangeBgColor: '#E6E6E655',
        rangeColor: '#01BEFF',
        btnColor: '#01BEFF',
        lunarColor: '#AAAAAA',
        startText: '开始',
        endText: '结束',
        toolTips: '请选择日期',
        changeYear: true,
        changeMonth: true,
        result: '',
        
        tips: ['无需依赖额外的样式文件','使用tn-calendar组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '模式',
                optional: ['单个日期','日期范围'],
                methods: 'modeChange'
              },
              {
                title: '农历显示',
                optional: ['显示','隐藏'],
                methods: 'showLunarChange'
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '自定义文案',
                optional: ['默认','自定义'],
                methods: 'textChange'
              },
              {
                title: '年月切换',
                optional: ['年月切换','月切换'],
                methods: 'yearMonthChange'
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
      // 弹出日历
      showCalendar() {
        this.openCalendar()
      },
      // 切换模式
      modeChange(event) {
        switch (event.index) {
          case 0:
            this.mode = 'date'
            break
          case 1:
            this.mode = 'range'
        }
        this.openCalendar()
      },
      // 切换农历显示
      showLunarChange(event) {
        this.showLunar = event.index === 0 ? true : false
        this.openCalendar()
      },
      // 切换颜色
      colorChange(event) {
        switch (event.index) {
          case 0:
            this.activeBgColor = '#01BEFF'
            this.activeColor = '#FFFFFF'
            this.rangeBgColor = '#E6E6E655'
            this.rangeColor = '#01BEFF'
            this.btnColor = '#01BEFF'
            this.lunarColor = '#AAAAAA'
            break
          case 1:
            this.activeBgColor = '#E83A30'
            this.activeColor = '#FFFFFF'
            this.rangeBgColor = '#E6E6E680'
            this.rangeColor = '#E72F8C'
            this.btnColor = '#E83A30'
            this.lunarColor = '#080808'
            break
        }
        this.openCalendar()
      },
      // 切换文案
      textChange(event) {
        switch (event.index) {
          case 0:
            this.startText = '开始'
            this.endText = '结束'
            this.toolTips = '请选择日期'
            break
          case 1:
            this.startText = '入住'
            this.endText = '离店'
            this.toolTips = '入住/离店日期'
            break
        }
        this.openCalendar()
      },
      // 切换年月
      yearMonthChange(event) {
        switch (event.index) {
          case 0:
            this.changeYear = true
            this.changeMonth = true
            break
          case 1:
            this.changeYear = false
            this.changeMonth = true
            break
        }
        this.openCalendar()
      },
      
      
      // 打开日历
      openCalendar() {
        this.show = true
      },
      
      // 日历日期有改变
      onChange(event) {
        if (this.mode === 'date') {
          this.result = event.date
        }
        if (this.mode === 'range') {
          this.result = `${event.startDate} 至 ${event.endDate}`
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      }

    },

  }
</script>

<style lang="scss" scoped>

  .calendar-result {
    width: 100%;
    margin-top: 20rpx;
    padding: 10rpx 30rpx;
    background-color: $tn-font-holder-color;
    text-align: center;
  }
</style>
