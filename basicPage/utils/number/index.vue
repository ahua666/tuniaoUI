<template>
  <view class="basic-utils__number tn-safe-area-inset-bottom">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Number工具</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <demo-title title="超过指定长度自动添加'+'号">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>超过2位自动添加'+'号</view>
              <view>{{ $tn.number.formatNumberString(56) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>超过2位自动添加'+'号</view>
              <view>{{ $tn.number.formatNumberString(100) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>超过3位自动添加'+'号</view>
              <view>{{ $tn.number.formatNumberString(899, 3) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>超过3位自动添加'+'号</view>
              <view>{{ $tn.number.formatNumberString(1000, 3) }}</view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <demo-title title="往数字前添加'0'">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>只有一位时会往前面添加'0'</view>
              <view>{{ $tn.number.formatNumberAddZero(6) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>超过两位时不会往前面添加'0'</view>
              <view>{{ $tn.number.formatNumberAddZero(16) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>超过两位时不会往前面添加'0'</view>
              <view>{{ $tn.number.formatNumberAddZero(106) }}</view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <demo-title title="数值转换为带单位金额">
        <tn-list-view backgroundColor="tn-bg-white">
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>不带单位</view>
              <view>{{ $tn.number.formatNumberAddPriceUnit(100) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>不带单位</view>
              <view>{{ $tn.number.formatNumberAddPriceUnit(100.88) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>带K单位</view>
              <view>{{ $tn.number.formatNumberAddPriceUnit(1000) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>带K单位</view>
              <view>{{ $tn.number.formatNumberAddPriceUnit(1032.89) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>带W单位</view>
              <view>{{ $tn.number.formatNumberAddPriceUnit(10000) }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell>
            <view class="tn-flex tn-flex-col-center tn-flex-row-between">
              <view>带W单位</view>
              <view>{{ $tn.number.formatNumberAddPriceUnit(10875.90) }}</view>
            </view>
          </tn-list-cell>
        </tn-list-view>
      </demo-title>
      
      <demo-title title="获取随机值">
        <view class="tn-bg-white">
          <tn-form-item>
            <view class="tn-margin-left"><tn-input v-model="randomValue" :disabled="true"></tn-input></view>
            <template slot="right">
              <view class="tn-margin-right-sm">
                <tn-button size="sm" backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="getRandomValue">获取随机值</tn-button>
              </view>
            </template>
          </tn-form-item>
          <tn-form-item>
            <view class="tn-margin-left"><tn-input v-model="intRandomValue" :disabled="true"></tn-input></view>
            <template slot="right">
              <view class="tn-margin-right-sm">
                <tn-button size="sm" backgroundColor="#01BEFF" fontColor="#FFFFFF" @click="getIntRandomValue">获取整数随机值</tn-button>
              </view>
            </template>
          </tn-form-item>
        </view>
      </demo-title>
      
      <view class="tn-padding-bottom-lg"></view>
    </view>
    
  </view>
</template>

<script>
  import demoTitle from '@/libs/components/demo-title.vue'
  export default {
    name: 'basicUtilsNumber',
    components: {demoTitle},
    data() {
      return {
        randomValue: '',
        intRandomValue: '',
      }
    },
    methods: {
      // 获取随机值
      getRandomValue() {
        this.randomValue = this.$tn.number.random(0, 100.99)
      },
      // 获取整数随机值
      getIntRandomValue() {
        this.intRandomValue = this.$tn.number.randomInt(0, 100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-utils__number {
    background-color: $tn-bg-gray-color;
    min-height: 100vh;
  }
</style>
