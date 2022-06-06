<template>
  <view class="components-lazy-load">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>懒加载</tn-nav-bar>
      
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="content">
        <block v-for="(item, index) in list" :key="index">
          <view class="item">
            <tn-lazy-load
              :index="index"
              :image="item.src"
              :threshold="-450"
              :height="400"
              imgMode="aspectFill"
            ></tn-lazy-load>
          </view>
        </block>
      </view>
      
      <tn-load-more :status="status" @loadmore="getData"></tn-load-more>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'ComponentsLazyLoad',
    data() {
      return {
        status: 'loadmore',
        list: [],
        data: [
          { src: 'https://tnuiimage.tnkjapp.com/shop/bag1.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/bag2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/banner1.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/banner3.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/card.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/computer1.jpg' },
          { src: 'error.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/content.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/cup1.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/cup2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/office.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/pillow.jpg' },
          { src: 'error.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/pillow2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg' },
          { src: 'https://tnuiimage.tnkjapp.com/shop/watch2.jpg' },
          { src: 'error.jpg' }
        ]
      }
    },
    onLoad() {
      this.getData()
    },
    onReachBottom() {
      uni.$emit('tOnLazyLoadReachBottom')
      this.getData()
    },
    methods: {
      getData() {
        let index = 0
        this.status = 'loading'
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            index = this.$t.number.randomInt(0, this.data.length - 1)
            this.list.push({
              src: this.data[index].src
            })
          }
          this.status = 'loadmore'
        }, 1500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30rpx;
    
    .item {
      flex: 0 0 335rpx;
      height: 400rpx;
      margin-bottom: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
    }
  }
</style>
