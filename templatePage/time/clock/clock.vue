<template>
  <view class="template-clock">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    <view class="clock">
    	<view class="clock__hand clock__hand--hr"></view>
    	<view class="clock__hand clock__hand--min"></view>
    	<view class="clock__hand clock__hand--sec"></view>
    </view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateClock',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  .template-clock{
    // background: linear-gradient(#e3e4e8, #abafba);
  }
  /* 时钟 start*/
  
 /* * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  */
  /* :root {
    --bg: linear-gradient(#e3e4e8, #abafba);

    font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
  } */
  
  /* body {
    background: var(--bg);
    color: var(--fg);
    font: 1em/1.5 sans-serif;
    height: 100vh;
    min-height: 480px;
    display: grid;
    place-items: center;
  } */
  
  .clock {
    margin: 20% auto;
    box-shadow: 0 -1em 1em rgba(0, 0, 0, 0.3) inset, 0 0.5em 1em rgba(255, 255, 255, 0.1) inset, 0 -0.5em 1em rgba(255, 255, 255, 0.2), 0 1em 1em rgba(0, 0, 0, 0.3);
    position: relative;
    width: 16em;
    height: 16em;
  }
  .clock, .clock:before, .clock:after {
    border-radius: 50%;
  }
  .clock:before, .clock:after, .clock__hand {
    position: absolute;
  }
  .clock:before, .clock:after {
    content: "";
    display: block;
  }
  .clock:before {
    box-shadow: 0 0 1em 0.5em rgba(0, 0, 0, 0.1) inset, 0 -0.5em 1em 0.5em rgba(0, 0, 0, 0.1);
    top: 2.5em;
    left: 2.5em;
    width: 11em;
    height: 11em;
  }
  .clock:after {
    box-shadow: 0 0.1em 0.1em rgba(255, 255, 255, 0.3) inset, 0 -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0 0.2em 0.2em rgba(0, 0, 0, 0.3);
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
    width: 1em;
    height: 1em;
  }
  .clock__hand {
    box-shadow: 0 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0 -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0 1em 0.5em rgba(0, 0, 0, 0.3);
    bottom: 50%;
    transform-origin: 50% 100%;
    transform: rotate(0) translateY(-1.25em);
  }
  .clock__hand--hr {
    animation: shortHand 86400s linear infinite;
    background: #255ff4;;
    border-radius: 0.5em;
    left: calc(50% - 0.5em);
    width: 1em;
    height: 3.2em;
  }
  .clock__hand--min {
    animation: longHand 3600s linear infinite;
    background: #5583f6;
    border-radius: 0.4em;
    left: calc(50% - 0.4em);
    width: 0.8em;
    height: 3.6em;
  }
  .clock__hand--sec {
    animation: longHand 60s cubic-bezier(0.8, 0, 0.2, 1) infinite;
    background: #17181c;
    border-radius: 0.3em;
    left: calc(50% - 0.3em);
    width: 0.6em;
    height: 4em;
  }
  
  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    
  
    .clock {
      box-shadow: 0 -1em 1em rgba(0, 0, 0, 0.3) inset, 0 0.5em 1em rgba(255, 255, 255, 0.05) inset, 0 -0.5em 1em rgba(255, 255, 255, 0.05), 0 1em 1em rgba(0, 0, 0, 0.4);
    }
    .clock:before {
      box-shadow: 0 0 1em 0.5em rgba(0, 0, 0, 0.2) inset, 0 -0.5em 1em 0.5em rgba(0, 0, 0, 0.2);
    }
    .clock:after {
      box-shadow: 0 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0 -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0 0.2em 0.2em rgba(0, 0, 0, 0.7);
    }
  }
  /* Animations */
  @keyframes shortHand {
    0% {
      box-shadow: 0em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0em 1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(0deg) translateY(-1.25em);
    }
    0.83% {
      box-shadow: 0.01em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.02em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.1em 0.99em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(6deg) translateY(-1.25em);
    }
    1.67% {
      box-shadow: 0.02em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.03em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.21em 0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(12deg) translateY(-1.25em);
    }
    2.5% {
      box-shadow: 0.03em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.04em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.31em 0.95em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(18deg) translateY(-1.25em);
    }
    3.33% {
      box-shadow: 0.04em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.41em 0.91em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(24deg) translateY(-1.25em);
    }
    4.17% {
      box-shadow: 0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.5em 0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(30deg) translateY(-1.25em);
    }
    5% {
      box-shadow: 0.06em 0.08em 0.1em rgba(255, 255, 255, 0.1) inset, -0.06em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.59em 0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(36deg) translateY(-1.25em);
    }
    5.83% {
      box-shadow: 0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.07em -0.08em 0.1em rgba(0, 0, 0, 0.3) inset, 0.67em 0.74em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(42deg) translateY(-1.25em);
    }
    6.67% {
      box-shadow: 0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.08em -0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.74em 0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(48deg) translateY(-1.25em);
    }
    7.5% {
      box-shadow: 0.08em 0.06em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.81em 0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(54deg) translateY(-1.25em);
    }
    8.33% {
      box-shadow: 0.09em 0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.87em 0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(60deg) translateY(-1.25em);
    }
    9.17% {
      box-shadow: 0.09em 0.04em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.91em 0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(66deg) translateY(-1.25em);
    }
    10% {
      box-shadow: 0.1em 0.03em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.04em 0.1em rgba(0, 0, 0, 0.3) inset, 0.95em 0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(72deg) translateY(-1.25em);
    }
    10.83% {
      box-shadow: 0.1em 0.02em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.03em 0.1em rgba(0, 0, 0, 0.3) inset, 0.98em 0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(78deg) translateY(-1.25em);
    }
    11.67% {
      box-shadow: 0.1em 0.01em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.02em 0.1em rgba(0, 0, 0, 0.3) inset, 0.99em 0.1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(84deg) translateY(-1.25em);
    }
    12.5% {
      box-shadow: 0.1em 0em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.01em 0.1em rgba(0, 0, 0, 0.3) inset, 1em 0em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(90deg) translateY(-1.25em);
    }
    13.33% {
      box-shadow: 0.1em -0.02em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.01em 0.1em rgba(0, 0, 0, 0.3) inset, 0.99em -0.11em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(96deg) translateY(-1.25em);
    }
    14.17% {
      box-shadow: 0.1em -0.03em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.02em 0.1em rgba(0, 0, 0, 0.3) inset, 0.98em -0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(102deg) translateY(-1.25em);
    }
    15% {
      box-shadow: 0.1em -0.04em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.03em 0.1em rgba(0, 0, 0, 0.3) inset, 0.95em -0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(108deg) translateY(-1.25em);
    }
    15.83% {
      box-shadow: 0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.04em 0.1em rgba(0, 0, 0, 0.3) inset, 0.91em -0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(114deg) translateY(-1.25em);
    }
    16.67% {
      box-shadow: 0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em 0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.87em -0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(120deg) translateY(-1.25em);
    }
    17.5% {
      box-shadow: 0.08em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em 0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.81em -0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(126deg) translateY(-1.25em);
    }
    18.33% {
      box-shadow: 0.07em -0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.08em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.74em -0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(132deg) translateY(-1.25em);
    }
    19.17% {
      box-shadow: 0.07em -0.08em 0.1em rgba(255, 255, 255, 0.1) inset, -0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.67em -0.75em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(138deg) translateY(-1.25em);
    }
    20% {
      box-shadow: 0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.06em 0.08em 0.1em rgba(0, 0, 0, 0.3) inset, 0.59em -0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(144deg) translateY(-1.25em);
    }
    20.83% {
      box-shadow: 0.05em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.5em -0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(150deg) translateY(-1.25em);
    }
    21.67% {
      box-shadow: 0.04em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.41em -0.92em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(156deg) translateY(-1.25em);
    }
    22.5% {
      box-shadow: 0.03em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.04em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.31em -0.96em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(162deg) translateY(-1.25em);
    }
    23.33% {
      box-shadow: 0.02em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.03em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.21em -0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(168deg) translateY(-1.25em);
    }
    24.17% {
      box-shadow: 0.01em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.02em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.1em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(174deg) translateY(-1.25em);
    }
    25% {
      box-shadow: 0em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.01em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(180deg) translateY(-1.25em);
    }
    25.83% {
      box-shadow: -0.02em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.01em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.11em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(186deg) translateY(-1.25em);
    }
    26.67% {
      box-shadow: -0.03em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.02em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.21em -0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(192deg) translateY(-1.25em);
    }
    27.5% {
      box-shadow: -0.04em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.03em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.31em -0.96em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(198deg) translateY(-1.25em);
    }
    28.33% {
      box-shadow: -0.05em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.04em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.41em -0.92em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(204deg) translateY(-1.25em);
    }
    29.17% {
      box-shadow: -0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.51em -0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(210deg) translateY(-1.25em);
    }
    30% {
      box-shadow: -0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.06em 0.08em 0.1em rgba(0, 0, 0, 0.3) inset, -0.59em -0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(216deg) translateY(-1.25em);
    }
    30.83% {
      box-shadow: -0.07em -0.08em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.67em -0.75em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(222deg) translateY(-1.25em);
    }
    31.67% {
      box-shadow: -0.08em -0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.75em -0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(228deg) translateY(-1.25em);
    }
    32.5% {
      box-shadow: -0.09em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.08em 0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.81em -0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(234deg) translateY(-1.25em);
    }
    33.33% {
      box-shadow: -0.09em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em 0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.87em -0.51em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(240deg) translateY(-1.25em);
    }
    34.17% {
      box-shadow: -0.1em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em 0.04em 0.1em rgba(0, 0, 0, 0.3) inset, -0.92em -0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(246deg) translateY(-1.25em);
    }
    35% {
      box-shadow: -0.1em -0.04em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.03em 0.1em rgba(0, 0, 0, 0.3) inset, -0.96em -0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(252deg) translateY(-1.25em);
    }
    35.83% {
      box-shadow: -0.1em -0.03em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.02em 0.1em rgba(0, 0, 0, 0.3) inset, -0.98em -0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(258deg) translateY(-1.25em);
    }
    36.67% {
      box-shadow: -0.1em -0.02em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.01em 0.1em rgba(0, 0, 0, 0.3) inset, -1em -0.11em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(264deg) translateY(-1.25em);
    }
    37.5% {
      box-shadow: -0.1em -0.01em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0em 0.1em rgba(0, 0, 0, 0.3) inset, -1em -0.01em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(270deg) translateY(-1.25em);
    }
    38.33% {
      box-shadow: -0.1em 0.01em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.02em 0.1em rgba(0, 0, 0, 0.3) inset, -1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(276deg) translateY(-1.25em);
    }
    39.17% {
      box-shadow: -0.1em 0.02em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.03em 0.1em rgba(0, 0, 0, 0.3) inset, -0.98em 0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(282deg) translateY(-1.25em);
    }
    40% {
      box-shadow: -0.1em 0.03em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.04em 0.1em rgba(0, 0, 0, 0.3) inset, -0.96em 0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(288deg) translateY(-1.25em);
    }
    40.83% {
      box-shadow: -0.1em 0.04em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.92em 0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(294deg) translateY(-1.25em);
    }
    41.67% {
      box-shadow: -0.09em 0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.87em 0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(300deg) translateY(-1.25em);
    }
    42.5% {
      box-shadow: -0.09em 0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.08em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.81em 0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(306deg) translateY(-1.25em);
    }
    43.33% {
      box-shadow: -0.08em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em -0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.75em 0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(312deg) translateY(-1.25em);
    }
    44.17% {
      box-shadow: -0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em -0.08em 0.1em rgba(0, 0, 0, 0.3) inset, -0.67em 0.74em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(318deg) translateY(-1.25em);
    }
    45% {
      box-shadow: -0.06em 0.08em 0.1em rgba(255, 255, 255, 0.1) inset, 0.06em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.59em 0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(324deg) translateY(-1.25em);
    }
    45.83% {
      box-shadow: -0.06em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.05em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.51em 0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(330deg) translateY(-1.25em);
    }
    46.67% {
      box-shadow: -0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.04em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.41em 0.91em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(336deg) translateY(-1.25em);
    }
    47.5% {
      box-shadow: -0.04em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.03em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.31em 0.95em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(342deg) translateY(-1.25em);
    }
    48.33% {
      box-shadow: -0.03em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.02em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.21em 0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(348deg) translateY(-1.25em);
    }
    49.17% {
      box-shadow: -0.02em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.01em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.11em 0.99em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(354deg) translateY(-1.25em);
    }
    50% {
      box-shadow: -0.01em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.01em 1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(360deg) translateY(-1.25em);
    }
    50.83% {
      box-shadow: 0.01em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.02em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.1em 0.99em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(366deg) translateY(-1.25em);
    }
    51.67% {
      box-shadow: 0.02em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.03em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.21em 0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(372deg) translateY(-1.25em);
    }
    52.5% {
      box-shadow: 0.03em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.04em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.31em 0.95em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(378deg) translateY(-1.25em);
    }
    53.33% {
      box-shadow: 0.04em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.41em 0.91em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(384deg) translateY(-1.25em);
    }
    54.17% {
      box-shadow: 0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.5em 0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(390deg) translateY(-1.25em);
    }
    55% {
      box-shadow: 0.06em 0.08em 0.1em rgba(255, 255, 255, 0.1) inset, -0.06em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.59em 0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(396deg) translateY(-1.25em);
    }
    55.83% {
      box-shadow: 0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.07em -0.08em 0.1em rgba(0, 0, 0, 0.3) inset, 0.67em 0.74em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(402deg) translateY(-1.25em);
    }
    56.67% {
      box-shadow: 0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.08em -0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.74em 0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(408deg) translateY(-1.25em);
    }
    57.5% {
      box-shadow: 0.08em 0.06em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.81em 0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(414deg) translateY(-1.25em);
    }
    58.33% {
      box-shadow: 0.09em 0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.87em 0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(420deg) translateY(-1.25em);
    }
    59.17% {
      box-shadow: 0.09em 0.04em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.91em 0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(426deg) translateY(-1.25em);
    }
    60% {
      box-shadow: 0.1em 0.03em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.04em 0.1em rgba(0, 0, 0, 0.3) inset, 0.95em 0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(432deg) translateY(-1.25em);
    }
    60.83% {
      box-shadow: 0.1em 0.02em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.03em 0.1em rgba(0, 0, 0, 0.3) inset, 0.98em 0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(438deg) translateY(-1.25em);
    }
    61.67% {
      box-shadow: 0.1em 0.01em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.02em 0.1em rgba(0, 0, 0, 0.3) inset, 0.99em 0.1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(444deg) translateY(-1.25em);
    }
    62.5% {
      box-shadow: 0.1em 0em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.01em 0.1em rgba(0, 0, 0, 0.3) inset, 1em 0em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(450deg) translateY(-1.25em);
    }
    63.33% {
      box-shadow: 0.1em -0.02em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.01em 0.1em rgba(0, 0, 0, 0.3) inset, 0.99em -0.11em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(456deg) translateY(-1.25em);
    }
    64.17% {
      box-shadow: 0.1em -0.03em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.02em 0.1em rgba(0, 0, 0, 0.3) inset, 0.98em -0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(462deg) translateY(-1.25em);
    }
    65% {
      box-shadow: 0.1em -0.04em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.03em 0.1em rgba(0, 0, 0, 0.3) inset, 0.95em -0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(468deg) translateY(-1.25em);
    }
    65.83% {
      box-shadow: 0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.04em 0.1em rgba(0, 0, 0, 0.3) inset, 0.91em -0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(474deg) translateY(-1.25em);
    }
    66.67% {
      box-shadow: 0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em 0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.87em -0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(480deg) translateY(-1.25em);
    }
    67.5% {
      box-shadow: 0.08em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em 0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.81em -0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(486deg) translateY(-1.25em);
    }
    68.33% {
      box-shadow: 0.07em -0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.08em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.74em -0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(492deg) translateY(-1.25em);
    }
    69.17% {
      box-shadow: 0.07em -0.08em 0.1em rgba(255, 255, 255, 0.1) inset, -0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.67em -0.75em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(498deg) translateY(-1.25em);
    }
    70% {
      box-shadow: 0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.06em 0.08em 0.1em rgba(0, 0, 0, 0.3) inset, 0.59em -0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(504deg) translateY(-1.25em);
    }
    70.83% {
      box-shadow: 0.05em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.5em -0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(510deg) translateY(-1.25em);
    }
    71.67% {
      box-shadow: 0.04em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.41em -0.92em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(516deg) translateY(-1.25em);
    }
    72.5% {
      box-shadow: 0.03em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.04em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.31em -0.96em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(522deg) translateY(-1.25em);
    }
    73.33% {
      box-shadow: 0.02em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.03em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.21em -0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(528deg) translateY(-1.25em);
    }
    74.17% {
      box-shadow: 0.01em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.02em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.1em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(534deg) translateY(-1.25em);
    }
    75% {
      box-shadow: 0em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.01em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(540deg) translateY(-1.25em);
    }
    75.83% {
      box-shadow: -0.02em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.01em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.11em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(546deg) translateY(-1.25em);
    }
    76.67% {
      box-shadow: -0.03em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.02em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.21em -0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(552deg) translateY(-1.25em);
    }
    77.5% {
      box-shadow: -0.04em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.03em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.31em -0.96em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(558deg) translateY(-1.25em);
    }
    78.33% {
      box-shadow: -0.05em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.04em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.41em -0.92em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(564deg) translateY(-1.25em);
    }
    79.17% {
      box-shadow: -0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.51em -0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(570deg) translateY(-1.25em);
    }
    80% {
      box-shadow: -0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.06em 0.08em 0.1em rgba(0, 0, 0, 0.3) inset, -0.59em -0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(576deg) translateY(-1.25em);
    }
    80.83% {
      box-shadow: -0.07em -0.08em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.67em -0.75em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(582deg) translateY(-1.25em);
    }
    81.67% {
      box-shadow: -0.08em -0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.75em -0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(588deg) translateY(-1.25em);
    }
    82.5% {
      box-shadow: -0.09em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.08em 0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.81em -0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(594deg) translateY(-1.25em);
    }
    83.33% {
      box-shadow: -0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em 0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.87em -0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(600deg) translateY(-1.25em);
    }
    84.17% {
      box-shadow: -0.1em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em 0.04em 0.1em rgba(0, 0, 0, 0.3) inset, -0.92em -0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(606deg) translateY(-1.25em);
    }
    85% {
      box-shadow: -0.1em -0.04em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.03em 0.1em rgba(0, 0, 0, 0.3) inset, -0.96em -0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(612deg) translateY(-1.25em);
    }
    85.83% {
      box-shadow: -0.1em -0.03em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.02em 0.1em rgba(0, 0, 0, 0.3) inset, -0.98em -0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(618deg) translateY(-1.25em);
    }
    86.67% {
      box-shadow: -0.1em -0.02em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.01em 0.1em rgba(0, 0, 0, 0.3) inset, -1em -0.11em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(624deg) translateY(-1.25em);
    }
    87.5% {
      box-shadow: -0.1em -0.01em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0em 0.1em rgba(0, 0, 0, 0.3) inset, -1em -0.01em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(630deg) translateY(-1.25em);
    }
    88.33% {
      box-shadow: -0.1em 0.01em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.02em 0.1em rgba(0, 0, 0, 0.3) inset, -1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(636deg) translateY(-1.25em);
    }
    89.17% {
      box-shadow: -0.1em 0.02em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.03em 0.1em rgba(0, 0, 0, 0.3) inset, -0.98em 0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(642deg) translateY(-1.25em);
    }
    90% {
      box-shadow: -0.1em 0.03em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.04em 0.1em rgba(0, 0, 0, 0.3) inset, -0.96em 0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(648deg) translateY(-1.25em);
    }
    90.83% {
      box-shadow: -0.1em 0.04em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.92em 0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(654deg) translateY(-1.25em);
    }
    91.67% {
      box-shadow: -0.09em 0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.87em 0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(660deg) translateY(-1.25em);
    }
    92.5% {
      box-shadow: -0.09em 0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.08em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.81em 0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(666deg) translateY(-1.25em);
    }
    93.33% {
      box-shadow: -0.08em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em -0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.75em 0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(672deg) translateY(-1.25em);
    }
    94.17% {
      box-shadow: -0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em -0.08em 0.1em rgba(0, 0, 0, 0.3) inset, -0.67em 0.74em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(678deg) translateY(-1.25em);
    }
    95% {
      box-shadow: -0.06em 0.08em 0.1em rgba(255, 255, 255, 0.1) inset, 0.06em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.59em 0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(684deg) translateY(-1.25em);
    }
    95.83% {
      box-shadow: -0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.05em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.5em 0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(690deg) translateY(-1.25em);
    }
    96.67% {
      box-shadow: -0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.04em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.41em 0.91em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(696deg) translateY(-1.25em);
    }
    97.5% {
      box-shadow: -0.04em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.03em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.31em 0.95em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(702deg) translateY(-1.25em);
    }
    98.33% {
      box-shadow: -0.03em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.02em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.21em 0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(708deg) translateY(-1.25em);
    }
    99.17% {
      box-shadow: -0.02em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.01em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.11em 0.99em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(714deg) translateY(-1.25em);
    }
    100% {
      box-shadow: -0.01em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.01em 1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(720deg) translateY(-1.25em);
    }
  }
  @keyframes longHand {
    0% {
      box-shadow: 0em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0em 1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(0deg) translateY(-1.25em);
    }
    1.67% {
      box-shadow: 0.01em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.02em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.1em 0.99em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(6deg) translateY(-1.25em);
    }
    3.33% {
      box-shadow: 0.02em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.03em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.21em 0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(12deg) translateY(-1.25em);
    }
    5% {
      box-shadow: 0.03em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.04em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.31em 0.95em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(18deg) translateY(-1.25em);
    }
    6.67% {
      box-shadow: 0.04em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.41em 0.91em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(24deg) translateY(-1.25em);
    }
    8.33% {
      box-shadow: 0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.5em 0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(30deg) translateY(-1.25em);
    }
    10% {
      box-shadow: 0.06em 0.08em 0.1em rgba(255, 255, 255, 0.1) inset, -0.06em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.59em 0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(36deg) translateY(-1.25em);
    }
    11.67% {
      box-shadow: 0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.07em -0.08em 0.1em rgba(0, 0, 0, 0.3) inset, 0.67em 0.74em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(42deg) translateY(-1.25em);
    }
    13.33% {
      box-shadow: 0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.08em -0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.74em 0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(48deg) translateY(-1.25em);
    }
    15% {
      box-shadow: 0.08em 0.06em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.81em 0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(54deg) translateY(-1.25em);
    }
    16.67% {
      box-shadow: 0.09em 0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.87em 0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(60deg) translateY(-1.25em);
    }
    18.33% {
      box-shadow: 0.09em 0.04em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.91em 0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(66deg) translateY(-1.25em);
    }
    20% {
      box-shadow: 0.1em 0.03em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.04em 0.1em rgba(0, 0, 0, 0.3) inset, 0.95em 0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(72deg) translateY(-1.25em);
    }
    21.67% {
      box-shadow: 0.1em 0.02em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.03em 0.1em rgba(0, 0, 0, 0.3) inset, 0.98em 0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(78deg) translateY(-1.25em);
    }
    23.33% {
      box-shadow: 0.1em 0.01em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.02em 0.1em rgba(0, 0, 0, 0.3) inset, 0.99em 0.1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(84deg) translateY(-1.25em);
    }
    25% {
      box-shadow: 0.1em 0em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em -0.01em 0.1em rgba(0, 0, 0, 0.3) inset, 1em 0em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(90deg) translateY(-1.25em);
    }
    26.67% {
      box-shadow: 0.1em -0.02em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.01em 0.1em rgba(0, 0, 0, 0.3) inset, 0.99em -0.11em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(96deg) translateY(-1.25em);
    }
    28.33% {
      box-shadow: 0.1em -0.03em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.02em 0.1em rgba(0, 0, 0, 0.3) inset, 0.98em -0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(102deg) translateY(-1.25em);
    }
    30% {
      box-shadow: 0.1em -0.04em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.03em 0.1em rgba(0, 0, 0, 0.3) inset, 0.95em -0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(108deg) translateY(-1.25em);
    }
    31.67% {
      box-shadow: 0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.1em 0.04em 0.1em rgba(0, 0, 0, 0.3) inset, 0.91em -0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(114deg) translateY(-1.25em);
    }
    33.33% {
      box-shadow: 0.09em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em 0.05em 0.1em rgba(0, 0, 0, 0.3) inset, 0.87em -0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(120deg) translateY(-1.25em);
    }
    35% {
      box-shadow: 0.08em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, -0.09em 0.06em 0.1em rgba(0, 0, 0, 0.3) inset, 0.81em -0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(126deg) translateY(-1.25em);
    }
    36.67% {
      box-shadow: 0.07em -0.07em 0.1em rgba(255, 255, 255, 0.1) inset, -0.08em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.74em -0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(132deg) translateY(-1.25em);
    }
    38.33% {
      box-shadow: 0.07em -0.08em 0.1em rgba(255, 255, 255, 0.1) inset, -0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, 0.67em -0.75em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(138deg) translateY(-1.25em);
    }
    40% {
      box-shadow: 0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.06em 0.08em 0.1em rgba(0, 0, 0, 0.3) inset, 0.59em -0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(144deg) translateY(-1.25em);
    }
    41.67% {
      box-shadow: 0.05em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.5em -0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(150deg) translateY(-1.25em);
    }
    43.33% {
      box-shadow: 0.04em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, 0.41em -0.92em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(156deg) translateY(-1.25em);
    }
    45% {
      box-shadow: 0.03em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.04em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.31em -0.96em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(162deg) translateY(-1.25em);
    }
    46.67% {
      box-shadow: 0.02em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.03em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.21em -0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(168deg) translateY(-1.25em);
    }
    48.33% {
      box-shadow: 0.01em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.02em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0.1em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(174deg) translateY(-1.25em);
    }
    50% {
      box-shadow: 0em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, -0.01em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, 0em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(180deg) translateY(-1.25em);
    }
    51.67% {
      box-shadow: -0.02em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.01em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.11em -1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(186deg) translateY(-1.25em);
    }
    53.33% {
      box-shadow: -0.03em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.02em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.21em -0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(192deg) translateY(-1.25em);
    }
    55% {
      box-shadow: -0.04em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.03em 0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.31em -0.96em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(198deg) translateY(-1.25em);
    }
    56.67% {
      box-shadow: -0.05em -0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.04em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.41em -0.92em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(204deg) translateY(-1.25em);
    }
    58.33% {
      box-shadow: -0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.05em 0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.51em -0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(210deg) translateY(-1.25em);
    }
    60% {
      box-shadow: -0.06em -0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.06em 0.08em 0.1em rgba(0, 0, 0, 0.3) inset, -0.59em -0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(216deg) translateY(-1.25em);
    }
    61.67% {
      box-shadow: -0.07em -0.08em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.67em -0.75em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(222deg) translateY(-1.25em);
    }
    63.33% {
      box-shadow: -0.08em -0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em 0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.75em -0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(228deg) translateY(-1.25em);
    }
    65% {
      box-shadow: -0.09em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.08em 0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.81em -0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(234deg) translateY(-1.25em);
    }
    66.67% {
      box-shadow: -0.09em -0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em 0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.87em -0.51em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(240deg) translateY(-1.25em);
    }
    68.33% {
      box-shadow: -0.1em -0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em 0.04em 0.1em rgba(0, 0, 0, 0.3) inset, -0.92em -0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(246deg) translateY(-1.25em);
    }
    70% {
      box-shadow: -0.1em -0.04em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.03em 0.1em rgba(0, 0, 0, 0.3) inset, -0.96em -0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(252deg) translateY(-1.25em);
    }
    71.67% {
      box-shadow: -0.1em -0.03em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.02em 0.1em rgba(0, 0, 0, 0.3) inset, -0.98em -0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(258deg) translateY(-1.25em);
    }
    73.33% {
      box-shadow: -0.1em -0.02em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0.01em 0.1em rgba(0, 0, 0, 0.3) inset, -1em -0.11em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(264deg) translateY(-1.25em);
    }
    75% {
      box-shadow: -0.1em -0.01em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em 0em 0.1em rgba(0, 0, 0, 0.3) inset, -1em -0.01em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(270deg) translateY(-1.25em);
    }
    76.67% {
      box-shadow: -0.1em 0.01em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.02em 0.1em rgba(0, 0, 0, 0.3) inset, -1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(276deg) translateY(-1.25em);
    }
    78.33% {
      box-shadow: -0.1em 0.02em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.03em 0.1em rgba(0, 0, 0, 0.3) inset, -0.98em 0.21em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(282deg) translateY(-1.25em);
    }
    80% {
      box-shadow: -0.1em 0.03em 0.1em rgba(255, 255, 255, 0.1) inset, 0.1em -0.04em 0.1em rgba(0, 0, 0, 0.3) inset, -0.96em 0.31em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(288deg) translateY(-1.25em);
    }
    81.67% {
      box-shadow: -0.1em 0.04em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em -0.05em 0.1em rgba(0, 0, 0, 0.3) inset, -0.92em 0.41em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(294deg) translateY(-1.25em);
    }
    83.33% {
      box-shadow: -0.09em 0.05em 0.1em rgba(255, 255, 255, 0.1) inset, 0.09em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.87em 0.5em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(300deg) translateY(-1.25em);
    }
    85% {
      box-shadow: -0.09em 0.06em 0.1em rgba(255, 255, 255, 0.1) inset, 0.08em -0.06em 0.1em rgba(0, 0, 0, 0.3) inset, -0.81em 0.59em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(306deg) translateY(-1.25em);
    }
    86.67% {
      box-shadow: -0.08em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em -0.07em 0.1em rgba(0, 0, 0, 0.3) inset, -0.75em 0.67em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(312deg) translateY(-1.25em);
    }
    88.33% {
      box-shadow: -0.07em 0.07em 0.1em rgba(255, 255, 255, 0.1) inset, 0.07em -0.08em 0.1em rgba(0, 0, 0, 0.3) inset, -0.67em 0.74em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(318deg) translateY(-1.25em);
    }
    90% {
      box-shadow: -0.06em 0.08em 0.1em rgba(255, 255, 255, 0.1) inset, 0.06em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.59em 0.81em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(324deg) translateY(-1.25em);
    }
    91.67% {
      box-shadow: -0.06em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.05em -0.09em 0.1em rgba(0, 0, 0, 0.3) inset, -0.51em 0.87em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(330deg) translateY(-1.25em);
    }
    93.33% {
      box-shadow: -0.05em 0.09em 0.1em rgba(255, 255, 255, 0.1) inset, 0.04em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.41em 0.91em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(336deg) translateY(-1.25em);
    }
    95% {
      box-shadow: -0.04em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.03em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.31em 0.95em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(342deg) translateY(-1.25em);
    }
    96.67% {
      box-shadow: -0.03em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.02em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.21em 0.98em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(348deg) translateY(-1.25em);
    }
    98.33% {
      box-shadow: -0.02em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0.01em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.11em 0.99em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(354deg) translateY(-1.25em);
    }
    100% {
      box-shadow: -0.01em 0.1em 0.1em rgba(255, 255, 255, 0.1) inset, 0em -0.1em 0.1em rgba(0, 0, 0, 0.3) inset, -0.01em 1em 0.5em rgba(0, 0, 0, 0.3);
      transform: rotate(360deg) translateY(-1.25em);
    }
  }

</style>
