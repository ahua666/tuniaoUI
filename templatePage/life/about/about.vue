<template>
  <view class="template-bubble">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <canvas canvas-id="bubble" id="bubble" class="bubble" :style="{width: `${windowWidth}px`, height: `${windowHeight}px`}"></canvas>
    
    <view class="container about-bg" style="background-image:url('https://tnuiimage.tnkjapp.com/about/about.png')">
    </view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateBubble',
    mixins: [template_page_mixin],
    data(){
      return {
        windowHeight: 0,
        windowWidth: 0,
        actionTimer: null,
        animationTimer: null,
        queue: {},
        ctx: null
      }
    },
    onLoad() {
      this.getSystemInfo()
    },
    onReady() {
      this.$nextTick(() => {
        this.queue = {}
        this.ctx = uni.createCanvasContext("bubble", this)
        
        setTimeout(() => {
          this.actionTimer = setInterval(() => {
            this.generateBubble()
          }, 500)
        }, 1000)
      })
    },
    onUnload() {
      this.clearActionTimer()
      this.clearAnimationTimer()
    },
    methods: {
      // 获取系统信息
      getSystemInfo() {
        const systemInfo = uni.getSystemInfoSync()
        if (!systemInfo) {
          setTimeout(() => {
            this.getSystemInfo()
          }, 50)
          return
        }
        
        this.windowHeight = systemInfo.safeArea.height
        this.windowWidth = systemInfo.safeArea.width
      },
      
      // 生成泡泡
      generateBubble() {
        const image = "https://tnuiimage.tnkjapp.com/bubble/" + this.$tn.number.randomInt(1, 33) + ".png"
        uni.getImageInfo({
          src: image,
          success: (res) => {
            if (res.errMsg === 'getImageInfo:ok') {
              const anmationData = {
                id: new Date().getTime(),
                timer: 0,
                opacity: 0,
                pathData: this.generatePathData(),
                image: res.path,
                factor: {
                  speed: 0.0006, // 运动速度，值越小越慢
                  t: 0.1 //  贝塞尔函数系数，当为0，就是从无到有，这时候屏幕高度也要调一下
                }
              }
              if (Object.keys(this.queue).length > 0) {
                this.queue[anmationData.id] = anmationData
              } else {
                this.queue[anmationData.id] = anmationData
                this.bubbleAnimate()
              }
            }
          }
        })
      },
      
      /* 动画相关 */
      // 生成运动的路径数据
      generatePathData() {
        let width = this.windowWidth,
          height = this.windowHeight;
        const p0 = {
          x: 0.72 * width,
          y: height
        }
        const p1 = {
          x: this.$tn.number.random(0.22 * width, 0.33 * width),
          y: this.$tn.number.random(0.5 * height, 0.75 * height)
        }
        const p2 = {
          x: this.$tn.number.random(0, 0.88 * width),
          y: this.$tn.number.random(0.25 * height, 0.5 * height)
        }
        const p3 = {
          x: this.$tn.number.random(0, 0.88 * width),
          y: this.$tn.number.random(0, 0.125 * height)
        }
        return [p0, p1, p2, p3]
      },
      // 更新运动的路径
      updatePath(data, factor) {
        const p0 = data[0]
        const p1 = data[1]
        const p2 = data[2]
        const p3 = data[3]
      
        const t = factor.t
      
        /*计算多项式系数 （下同）*/
        const cx1 = 3 * (p1.x - p0.x)
        const bx1 = 3 * (p2.x - p1.x) - cx1
        const ax1 = p3.x - p0.x - cx1 - bx1
      
        const cy1 = 3 * (p1.y - p0.y)
        const by1 = 3 * (p2.y - p1.y) - cy1
        const ay1 = p3.y - p0.y - cy1 - by1
      
        const x = ax1 * (t * t * t) + bx1 * (t * t) + cx1 * t + p0.x
        const y = ay1 * (t * t * t) + by1 * (t * t) + cy1 * t + p0.y
        // console.log(p0.y, p1.y, p2.y, p3.y, y);
        return {
          x,
          y
        }
      },
      // 执行泡泡动画
      bubbleAnimate() {
        let width = this.windowWidth,
          height = this.windowHeight;
        Object.keys(this.queue).forEach(key => {
          const anmationData = this.queue[+key];
          const {
            x,
            y
          } = this.updatePath(
            anmationData.pathData,
            anmationData.factor
          )
          const speed = anmationData.factor.speed
          anmationData.factor.t += speed
      
          var curWidth = 30
          curWidth = (height - y) / 1.5
          curWidth = Math.min(30, curWidth)
      
          var curAlpha = anmationData.opacity
          curAlpha = y / (0.3 * height) //消失的高度适当调一下
          curAlpha = Math.min(1, curAlpha)
          this.ctx.globalAlpha = curAlpha
          this.ctx.drawImage(anmationData.image, x - curWidth / 2, y, curWidth, curWidth)
          // this.ctx.setFillStyle('red')
          // this.ctx.fillRect(x - curWidth / 2, y, 50, 50)
          if (anmationData.factor.t > 1) {
            delete this.queue[anmationData.id]
          }
          if (y > height) {
            delete this.queue[anmationData.id]
          }
        })
        this.ctx.draw()
        if (Object.keys(this.queue).length > 0) {
          this.animationTimer = setTimeout(() => {
            this.bubbleAnimate()
          }, 5)
        } else {
          this.clearAnimationTimer()()
          this.ctx.draw() // 清空画面
        }
      },
      
      // 清除定时器
      clearActionTimer() {
        if (this.actionTimer) {
          clearInterval(this.actionTimer)
        }
      },
      clearAnimationTimer() {
        if (this.animationTimer) {
          clearTimeout(this.animationTimer)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  .template-bubble {
    margin: 0;
    width: 100%;
    height: 100vh;
    color: #fff;
    background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
    /* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */
    /* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */
    /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
    background-size: 500% 500%;
    animation: gradientBG 15s ease infinite;
    
    position: relative;
    
    .bubble {
      position: fixed;
      bottom: -10vh;
      right: 0;
      z-index: 1024;
      pointer-events: none;
      // background-color: red;
    }
  }
  
  
  .about-bg {
    background-size: cover;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }
  

  

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
  
    50% {
      background-position: 100% 50%;
    }
  
    100% {
      background-position: 0% 50%;
    }
  }
  
  .container {
    width: 100%;
    position: absolute;
    text-align: center;
  }
  
</style>
