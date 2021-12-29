<template>
  
  <view class="basic-flex">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Flex布局</tn-nav-bar>
    
    
    
    
    <!-- 页面内容 -->
    <view class="tn-margin-bottom-xl" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-xl">
          固定尺寸 & 元素
        </view>
      </view>
      <view class="tn-margin">
        <view class="tn-flex tn-flex-wrap">
          <view class="tn-flex-basic-xs tn-padding tn-margin-top-sm tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">xs(20%)</view>
          <view class="tn-flex-basic-md"></view>
          <view class="tn-flex-basic-sm tn-padding tn-margin-top-sm tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">sm(40%)</view>
          <view class="tn-flex-basic-md"></view>
          <view class="tn-flex-basic-md tn-padding tn-margin-top-sm tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">md(50%)</view>
          <view class="tn-flex-basic-lg tn-padding tn-margin-top-sm tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">lg(60%)</view>
          <view class="tn-flex-basic-xl tn-padding tn-margin-top-sm tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">xl(80%)</view>
          <view class="tn-flex-basic-full tn-padding tn-margin-top-sm tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">full(100%)</view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例1
        </view>
      </view>
      <view class="tn-margin-sm">
        <view class="tn-flex tn-flex-wrap">
          <view class="tn-flex-basic-md">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
          <view class="tn-flex-basic-md">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
          <view class="tn-flex-basic-xs">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
          <view class="tn-flex-basic-xs">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
          <view class="tn-flex-basic-xs">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
          <view class="tn-flex-basic-xs">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
          <view class="tn-flex-basic-xs">
            <view class="tn-padding-lg tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
          </view>
        </view>
      </view>
      
      <!-- <view class="tn-margin">
        <view class="tn-flex tn-flex-wrap">
          <view class="tn-flex-basic-xs tn-padding-lg tn-margin-top-sm tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="tn-flex-basic-md"></view>
          <view class="tn-flex-basic-sm tn-padding-lg tn-margin-top-sm tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="tn-flex-basic-md"></view>
          <view class="tn-flex-basic-md tn-padding-lg tn-margin-top-sm tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="tn-flex-basic-lg tn-padding-lg tn-margin-top-sm tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="tn-flex-basic-xl tn-padding-lg tn-margin-top-sm tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="tn-flex-basic-full tn-padding-lg tn-margin-top-sm tn-radius bg-flex-shadow tn-shadow-blur"></view>
        </view>
      </view> -->    

      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-xl">
          比例布局 & 元素
        </view>
      </view>
      <view class="tn-margin-sm">
        <view class="tn-flex">
          <view class="tn-flex-1 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">1</view>
          <view class="tn-flex-1 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">1</view>
        </view>
        <view class="tn-flex">
          <view class="tn-flex-1 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">1</view>
          <view class="tn-flex-2 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">2</view>
        </view>
        <view class="tn-flex">
          <view class="tn-flex-1 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">1</view>
          <view class="tn-flex-2 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">2</view>
          <view class="tn-flex-3 tn-padding tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">3</view>
        </view>
      </view>  
        
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例1
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例2
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-2 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例3
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-3 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例4
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-2 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-2 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-3">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin  tn-text-bold tn-text-lg">
          应用示例5
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例6
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
      </view>
      
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例7
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例8
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-3">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例9
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例10
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-2">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-3 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例11
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例12
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        
        <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-3">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例13
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
        <view class="tn-flex-3 tn-padding-sm tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例14
        </view>
      </view>
      <view class="tn-flex tn-margin-sm">
        <view class="tn-flex-1">
          <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
          <view class="tn-padding-xl tn-margin-left-xs tn-margin-right-xs tn-margin-top-sm tn-margin-bottom-xs tn-radius bg-flex-shadow tn-shadow-blur">
          </view>
        </view>
      </view>  
      
      
      
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-xl">
          水平对齐 & justify
        </view>
      </view>
      <view class="tn-margin-sm">
        <view class="tn-flex tn-flex-row-left">
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">start</view>
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">start</view>
        </view>
        <view class="tn-flex tn-flex-row-right tn-margin-top-sm">
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">end</view>
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">end</view>
        </view>
        <view class="tn-flex tn-flex-row-center tn-margin-top-sm">
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">center</view>
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">center</view>
        </view>
        <view class="tn-flex tn-flex-row-around tn-margin-top-sm">
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">around</view>
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">around</view>
        </view>
        <view class="tn-flex tn-flex-row-between tn-margin-top-sm">
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">between</view>
          <view class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">between</view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例1
        </view>
      </view>
      <view class="tn-margin">
        <view class="tn-flex tn-flex-row-center tn-margin-top-sm">
          <view class="justify-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="justify-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="justify-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        </view>
      </view>
           
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例2
        </view>
      </view>
      
      <view class="tn-margin">
        <view class="tn-flex tn-flex-row-center tn-margin-top-sm">
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例3
        </view>
      </view>
      <view class="tn-margin">
        <view class="tn-flex tn-flex-row-around tn-margin-top-sm">
          <view class="justify-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="justify-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="justify-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"></view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例4
        </view>
      </view>
      <view class="tn-margin">
        <view class="tn-flex tn-flex-row-around tn-margin-top-sm">
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例5
        </view>
      </view>
      <view class="tn-margin">
        <view class="tn-flex tn-flex-row-between tn-margin-top-sm">
          <view class="justify-content-item tn-padding-xl tn-text-center tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="justify-content-item tn-padding-xl tn-text-center tn-radius bg-flex-shadow tn-shadow-blur"></view>
          <view class="justify-content-item tn-padding-xl tn-text-center tn-radius bg-flex-shadow tn-shadow-blur"></view>
        </view>
      </view>
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-lg">
          应用示例6
        </view>
      </view>
      <view class="tn-margin">
        <view class="tn-flex tn-flex-row-between tn-margin-top-sm">
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
          <view class="justify-content-item">
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur">
            </view>
            <view class="tn-padding-xl tn-radius bg-flex-shadow tn-shadow-blur" style="margin-top: 20rpx;">
            </view>
          </view>
        </view>
      </view>
      
      
      <view class="tn-padding-top">
        <view class="tn-margin tn-text-bold tn-text-xl">
          垂直对齐 & align
        </view>
      </view>
      
      <view class="tn-margin-sm">
        <view class="tn-flex tn-flex-col-top">
          <view class="align-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">left</view>
          <view class="align-content-item tn-padding-sm tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">top</view>
        </view>
        <view class="tn-flex tn-flex-col-center tn-margin-top-sm">
          <view class="align-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">left</view>
          <view class="align-content-item tn-padding-sm tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">center</view>
        </view>
        <view class="tn-flex tn-flex-col-bottom tn-margin-top-sm">
          <view class="align-content-item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">left</view>
          <view class="align-content-item tn-padding-sm tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-2 tn-shadow-blur">bottom</view>
        </view>
      </view>
        
      
    </view>
    
  </view>
  
</template>

<script>
  export default {
    name: 'BasicFlexLayout',
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  
  @import '@/static/css/components/demo_page_common.scss';
  
  /* 内容容器 start */
  .bg-flex-shadow{
    background-color: #00C3FF;
    z-index: 9999;
  }
  /* 内容容器 end */
  
</style>
