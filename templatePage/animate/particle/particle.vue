<template>
  <view class="template-particle">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <canvas canvas-id="star_canvas" class="mycanvas" :style="'width:' + screenWidth + 'px;height:' + screenHeight + 'px;'"></canvas>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  
  const Point = class {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.r = 1 + Math.random() * 2
      this.sx = Math.random() * 2 - 1
      this.sy = Math.random() * 2 - 1
    }
  
    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fillStyle = '#fff'
      ctx.fill()
    }
  
    move(w, h) {
      this.x += this.sx
      this.y += this.sy
      if (this.x > w || this.x < 0) this.sx = -this.sx
      if (this.y > h || this.y < 0) this.sy = -this.sy
    }
  
    drawLine(ctx, p) {
      const dx = this.x - p.x
      const dy = this.y - p.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < 100) {
        var alpha = (100 - d) / 300 * 1
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(p.x, p.y)
        ctx.closePath()
        ctx.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')'
        ctx.strokeWidth = 1
        ctx.stroke()
      }
    }
  }
  
  const sysinfo = uni.getSystemInfoSync()
  const w = 400
  const h = 1000
  
  export default {
    name: 'TemplateParticle',
    mixins: [template_page_mixin],
    data(){
      return {
        ctx: null,
        screenWidth: sysinfo.screenWidth,
        screenHeight: sysinfo.screenHeight,
        timer: null,
        points: []
      }
    },
    onLoad(options) {
      this.from = options.from || ''
      
      for (let i = 0; i < 80; i++) {
        this.points.push(new Point(Math.random() * w, Math.random() * h))
      }
      this.ctx = uni.createCanvasContext('star_canvas')
      // console.log(points)
    
      this.gameloop() //进行
      // this.ctx.setFillStyle('red')
      // this.ctx.fillRect(200, 300, 50, 50)
      // this.ctx.draw()
    },
    onUnload() {
      clearTimeout(this.timer)
    },

    methods: {
      /**粒子进行*/
      gameloop() {
        this.timer = setTimeout(this.gameloop, 100);
        // console.log('gameloop')
        this.paint();
      },
      /**清空画布*/
      paint() {
        this.ctx.clearRect(0, 0, w, h)
        for (var i = 0; i < this.points.length; i++) {
          this.points[i].move(w, h)
          this.points[i].draw(this.ctx)
          for (var j = i + 1; j < this.points.length; j++) {
            this.points[i].drawLine(this.ctx, this.points[j])
          }
        }
        this.ctx.draw();
      }
    }
  }
  
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  
  .template-particle {
    background: -webkit-gradient(linear, left top, right top, from(#892FE8), to(#3D7EFF));
    background: linear-gradient(90deg, #892FE8, #3D7EFF);
    min-height: 100vh
  }
  .template-particle:before {
  		content: "";
  		position: absolute;
  		top: 0;
  		left: 0;
  		bottom: 0;
      right: 0;
  		-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(black));
  		-webkit-mask-image: linear-gradient(to bottom, transparent, black);
  		        mask-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(black));
  		        mask-image: linear-gradient(to bottom, transparent, black);
  		background: -webkit-gradient(linear, left top, right top, from(#E72F8C), to(#892FE8));
  		background: linear-gradient(90deg, #E72F8C, #892FE8);	
    }
  
  .mycanvas {
    background-size: cover;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    color: #fff;
  }
</style>
