(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-color-color"],{"2a8b":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o}));var o={tnNavBar:r("72c2").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"basic-background"},[r("tn-nav-bar",{attrs:{fixed:!0}},[t._v("背景")]),r("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[r("v-uni-view",{staticClass:"tn-flex tn-flex-nowrap background-container"},[r("v-uni-view",{staticClass:"background__left-container"},[r("v-uni-scroll-view",{style:[t.scrollViewStyle],attrs:{"scroll-y":!0}},[r("v-uni-view",{staticClass:"background__left__picker"},[r("v-uni-view",{staticClass:"background__left__picker__item-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerColorClick(0)}}},[r("v-uni-view",{staticClass:"background__left__picker__item background__left__picker__item--basic picker-color-item-0",class:[{"tn-shadow-blur":0===t.currentColorIndex}],staticStyle:{"background-color":"#01BEFF"}},[r("v-uni-text",{staticClass:"tn-icon-logo-tuniao"})],1)],1),t._l(t.colorList,(function(e,o){return[r("v-uni-view",{key:o+"_0",staticClass:"background__left__picker__item-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerColorClick(o+1)}}},[r("v-uni-view",{staticClass:"background__left__picker__item",class:["picker-color-item-"+(o+1)+" tn-bg-"+e.color,{"tn-shadow-blur":t.currentColorIndex===o+1}]})],1)]})),r("v-uni-view",{staticClass:"background__left__picker__item__select-wrapper",style:[t.colorSelectItemStyle]},[r("v-uni-view",{staticClass:"circle-wrapper right"},[r("v-uni-view",{staticClass:"circle-progress right-circle",style:{borderColor:0===t.currentColorIndex?"#01BEFF":t.colorList[t.currentColorIndex-1]["value"]["dark"]}})],1),r("v-uni-view",{staticClass:"circle-wrapper left"},[r("v-uni-view",{staticClass:"circle-progress left-circle",style:{borderColor:0===t.currentColorIndex?"#01BEFF":t.colorList[t.currentColorIndex-1]["value"]["dark"]}})],1)],1)],2)],1)],1),r("v-uni-view",{staticClass:"background__right-container"},[t.isUpdateColorInfo?t._e():r("v-uni-scroll-view",{style:[t.scrollViewStyle],attrs:{"scroll-y":!0,"refresher-enabled":!0,"lower-threshold":"20","refresher-triggered":t.containerRefreshFlag},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.containerScroll.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.containerScrollLower.apply(void 0,arguments)},refresherrefresh:function(e){arguments[0]=e=t.$handleEvent(e),t.containerRefresh.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"background__right__show"},[0===t.currentColorIndex?[r("v-uni-view",{staticClass:"background__right__show--title"},[t._v("图鸟基础配色")]),r("v-uni-view",{staticClass:"box"},t._l(16,(function(t,e){return r("v-uni-view",{key:e,class:"colorwheel-box colorwheel-"+(e+1)})})),1),r("v-uni-view",{staticClass:"background__right__show__content"},[r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#01BEFF"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"},[t._v("主色蓝")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value"},[t._v("#01BEFF")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#FBBD12"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"},[t._v("主色橙")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value"},[t._v("#FBBD12")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#00FFC6"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title background__right__show__content__item--title--light"},[t._v("点缀青")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value"},[t._v("#00FFC6")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#FFF00D"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title background__right__show__content__item--title--light"},[t._v("点缀黄")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value"},[t._v("#FFF00D")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#FF71D2"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"},[t._v("辅助粉")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value"},[t._v("#FF71D2")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#82B2FF"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"},[t._v("辅助蓝")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value background__right__show__content__item--value--light"},[t._v("#82B2FF")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#080808"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"},[t._v("文字颜色")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value background__right__show__content__item--value--light"},[t._v("#080808")])],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",staticStyle:{"background-color":"#F4F4F4"}},[r("v-uni-view",{staticClass:"background__right__show__content__item--title background__right__show__content__item--title--light"},[t._v("背景灰")]),r("v-uni-view",{staticClass:"background__right__show__content__item--value background__right__show__content__item--value--light"},[t._v("#F4F4F4")])],1)],1)]:[r("v-uni-view",{staticClass:"background__right__show--title"},[t._v(t._s(t.selectColorInfo.name)+"-"+t._s(t.selectColorInfo.color))]),r("v-uni-view",{staticClass:"background__right__show__content"},[t._l(t.selectColorInfo.value,(function(e,o,a){return[r("v-uni-view",{key:a+"_0",staticClass:"background__right__show__content__item tn-shadow-blur",class:["normal"===o?"tn-bg-"+t.selectColorInfo.color:"tn-bg-"+t.selectColorInfo.color+"--"+o]},[r("v-uni-view",{staticClass:"background__right__show__content__item--title",class:[["disabled","light"].includes(o)?"background__right__show__content__item--title--light":""]},[t._v(t._s(o))]),r("v-uni-view",{staticClass:"background__right__show__content__item--value",class:[["disabled","light"].includes(o)?"background__right__show__content__item--value--light":"",{"tn-color-white":"gray"===t.selectColorInfo.color&&"normal"===o}]},[t._v(t._s(e))])],1)]}))],2),["brown","grey","gray"].includes(t.selectColorInfo.color)?t._e():[r("v-uni-view",{staticClass:"background__right__show--title background__right__show--title--gradient",class:["tn-cool-bg-color-"+(t.currentColorIndex%16+1)]},[t._v("渐变色")]),r("v-uni-view",{staticClass:"background__right__show__content"},[r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",class:["tn-main-gradient-"+t.selectColorInfo.color]},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"}),r("v-uni-view",{staticClass:"background__right__show__content__item--value"})],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",class:["tn-main-gradient-"+t.selectColorInfo.color+"--reverse"]},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"}),r("v-uni-view",{staticClass:"background__right__show__content__item--value"})],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",class:["tn-main-gradient-"+t.selectColorInfo.color+"--light"]},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"}),r("v-uni-view",{staticClass:"background__right__show__content__item--value"})],1),r("v-uni-view",{staticClass:"background__right__show__content__item tn-shadow-blur",class:["tn-main-gradient-"+t.selectColorInfo.color+"--light--reverse"]},[r("v-uni-view",{staticClass:"background__right__show__content__item--title"}),r("v-uni-view",{staticClass:"background__right__show__content__item--value"})],1)],1)]]],2)],1)],1)],1)],1)],1)},n=[]},6603:function(t,e,r){"use strict";r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac1f"),r("d81d"),r("14d9");var o={name:"basicBackground",data:function(){return{colorList:[{name:"红色",color:"red",value:{normal:"#E83A30",dark:"#BA2E26",disabled:"#F39C97",light:"#FAD8D6"}},{name:"紫红色",color:"purplered",value:{normal:"#E72F8C",dark:"#B9266F",disabled:"#F397C5",light:"#FAD5E8"}},{name:"紫色",color:"purple",value:{normal:"#892FE8",dark:"#6E26BA",disabled:"#C497F3",light:"#E7D5FA"}},{name:"蓝紫色",color:"bluepurple",value:{normal:"#5F4FD9",dark:"#4C3FAE",disabled:"#AFA7EC",light:"#DFDCF7"}},{name:"海蓝色",color:"aquablue",value:{normal:"#3646FF",dark:"#2B38CC",disabled:"#9AA2FF",light:"#D7DAFF"}},{name:"蓝色",color:"blue",value:{normal:"#3D7EFF",dark:"#3165CC",disabled:"#9EBEFF",light:"#D8E5FF"}},{name:"靛蓝色",color:"indigo",value:{normal:"#31C9E8",dark:"#27A1BA",disabled:"#98E4F3",light:"#D6F4FA"}},{name:"青色",color:"cyan",value:{normal:"#2DE8BD",dark:"#24BA97",disabled:"#96F3DE",light:"#D5FAF2"}},{name:"青绿色",color:"teal",value:{normal:"#24F083",dark:"#1DC069",disabled:"#91F7C1",light:"#D3FCE6"}},{name:"绿色",color:"green",value:{normal:"#31E749",dark:"#27B93A",disabled:"#98F3A4",light:"#D6FADB"}},{name:"黄绿色",color:"yellowgreen",value:{normal:"#A4E82F",dark:"#82BA26",disabled:"#D1F397",light:"#EDFAD5"}},{name:"酸橙色",color:"lime",value:{normal:"#D5EB00",dark:"#AABC00",disabled:"#E9F57F",light:"#F7FBCC"}},{name:"黄色",color:"yellow",value:{normal:"#FFF420",dark:"#CCC21A",disabled:"#FFF88F",light:"#FFFDD2"}},{name:"橘黄色",color:"orangeyellow",value:{normal:"#FFCA28",dark:"#CCA220",disabled:"#FFE493",light:"#FFF4D4"}},{name:"橙色",color:"orange",value:{normal:"#FFA726",dark:"#CC851E",disabled:"#FFD392",light:"#FFEDD4"}},{name:"橘红色",color:"orangered",value:{normal:"#FF7043",dark:"#CC5A36",disabled:"#FFB7A1",light:"#FFE2D9"}},{name:"棕色",color:"brown",value:{normal:"#914F2C",dark:"#743F23",disabled:"#C8A795",light:"#E9DCD5"}},{name:"玄灰色",color:"grey",value:{normal:"#78909C",dark:"#5F7E8B",disabled:"#C6D1D8",light:"#E4E9EC"}},{name:"灰色",color:"gray",value:{normal:"#AAAAAA",dark:"#838383",disabled:"#E6E6E6",light:"#F8F7F8"}}],scrollViewStyle:{height:0},pickerColorInfos:[],colorSelectItemStyle:{top:0,left:0},currentColorIndex:0,containerScrollTop:0,isUpdateColorInfo:!1,containerRefreshFlag:!1,selectColorInfo:{}}},onLoad:function(){},onReady:function(){var t=this;setTimeout((function(){t.initScrollViewHeight()}),10)},methods:{initScrollViewHeight:function(){var t=this;uni.getSystemInfo({success:function(e){t.scrollViewStyle.height=e.safeArea.height-t.vuex_custom_bar_height+e.statusBarHeight+"px",t.getPickerColorItemInfo()}})},containerScroll:function(t){},containerRefresh:function(t){var e=this;this.containerRefreshFlag||(this.containerRefreshFlag=!0,setTimeout((function(){e.containerRefreshFlag=!1}),10),this.currentColorIndex-1<0||this.isUpdateColorInfo||this.pickerColorClick(this.currentColorIndex-1))},containerScrollLower:function(t){t.detail.direction},getPickerColorItemInfo:function(){var t=this;this._tGetRect(".background__left__picker").then((function(e){for(var r=uni.createSelectorQuery().in(t),o=0;o<=t.colorList.length;o++)r.select(".picker-color-item-"+o).boundingClientRect();r.exec((function(r){r.length||setTimeout((function(){t.getPickerColorItemInfo()}),10),r.map((function(r,o){t.pickerColorInfos.push({x:r.top-e.top+r.height/2,y:r.left-e.left+r.width/2}),t.updatePickerColorSelectItem(),t.updateSelectColorInfo()}))}))}))},pickerColorClick:function(t){t!==this.currentColorIndex&&(this.currentColorIndex=t,this.updatePickerColorSelectItem(),this.updateSelectColorInfo())},updatePickerColorSelectItem:function(){var t=this.pickerColorInfos[this.currentColorIndex];this.colorSelectItemStyle.top=t.x-uni.upx2px(40)+"px",this.colorSelectItemStyle.left=t.y-uni.upx2px(40)+"px"},updateSelectColorInfo:function(){var t=this;0!==this.currentColorIndex&&(this.isUpdateColorInfo=!0,this.$tn.message.loading("加载中..."),setTimeout((function(){t.selectColorInfo=t.colorList[t.currentColorIndex-1],t.$tn.message.closeLoading(),t.isUpdateColorInfo=!1}),10))}}};e.default=o},"6fe5":function(t,e,r){var o=r("cee0");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=r("4f06").default;a("5ef9fb78",o,!0,{sourceMap:!1,shadowMode:!1})},"7ffe":function(t,e,r){"use strict";var o=r("6fe5"),a=r.n(o);a.a},8962:function(t,e,r){"use strict";r.r(e);var o=r("2a8b"),a=r("9e69");for(var n in a)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return a[t]}))}(n);r("7ffe");var i=r("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"d7c51344",null,!1,o["a"],void 0);e["default"]=c.exports},"9e69":function(t,e,r){"use strict";r.r(e);var o=r("6603"),a=r.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},cee0:function(t,e,r){var o=r("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */\r\n/* 色盘 start*/.box[data-v-d7c51344]{position:relative;margin:auto;display:block;width:%?550?%;height:%?600?%;background:none}.colorwheel-box[data-v-d7c51344]{position:absolute;width:80%;height:50%;left:10%;bottom:20%;border-radius:100% %?10?%;opacity:.4}.colorwheel-1[data-v-d7c51344]{background:#2de8bd;-webkit-transform:rotate(-78.75deg);transform:rotate(-78.75deg)}.colorwheel-2[data-v-d7c51344]{background:#24f083;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.colorwheel-3[data-v-d7c51344]{background:#31e749;-webkit-transform:rotate(-101.25deg);transform:rotate(-101.25deg)}.colorwheel-4[data-v-d7c51344]{background:#a4e82f;-webkit-transform:rotate(-112.5deg);transform:rotate(-112.5deg)}.colorwheel-5[data-v-d7c51344]{background:#d5eb00;-webkit-transform:rotate(-123.75deg);transform:rotate(-123.75deg)}.colorwheel-6[data-v-d7c51344]{background:#fff420;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.colorwheel-7[data-v-d7c51344]{background:#ffca28;-webkit-transform:rotate(-146.25deg);transform:rotate(-146.25deg)}.colorwheel-8[data-v-d7c51344]{background:#ffa726;-webkit-transform:rotate(-157.5deg);transform:rotate(-157.5deg)}.colorwheel-9[data-v-d7c51344]{background:#ff7043;-webkit-transform:rotate(-168.75deg);transform:rotate(-168.75deg)}.colorwheel-10[data-v-d7c51344]{background:#e83a30;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.colorwheel-11[data-v-d7c51344]{background:#e72f8c;-webkit-transform:rotate(-11.25deg);transform:rotate(-11.25deg)}.colorwheel-12[data-v-d7c51344]{background:#892fe8;-webkit-transform:rotate(-22.5deg);transform:rotate(-22.5deg)}.colorwheel-13[data-v-d7c51344]{background:#5f4fd9;-webkit-transform:rotate(-33.75deg);transform:rotate(-33.75deg)}.colorwheel-14[data-v-d7c51344]{background:#3646ff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.colorwheel-15[data-v-d7c51344]{background:#3d7eff;-webkit-transform:rotate(-56.25deg);transform:rotate(-56.25deg)}.colorwheel-16[data-v-d7c51344]{background:#31c9e8;-webkit-transform:rotate(-67.5deg);transform:rotate(-67.5deg)}\r\n/* 色盘 end*/\r\n/* 背景颜色容器 start */.background-container .background[data-v-d7c51344]{\r\n  /* 左边容器 start */\r\n  /* 左边容器 end */\r\n  /* 右边容器 start */\r\n  /* 右边容器 end */}.background-container .background__left-container[data-v-d7c51344]{width:16%;height:100%;box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.07)}.background-container .background__left__picker[data-v-d7c51344]{display:flex;flex-direction:column;align-items:center;padding-top:%?20?%;position:relative}.background-container .background__left__picker__item-wrapper[data-v-d7c51344]{width:100%}.background-container .background__left__picker__item[data-v-d7c51344]{width:%?50?%;height:%?50?%;margin:%?18?% auto;border-radius:50%;border:none}.background-container .background__left__picker__item--basic[data-v-d7c51344]{text-align:center;color:#fff;line-height:%?50?%}.background-container .background__left__picker__item__select-wrapper[data-v-d7c51344]{width:%?80?%;height:%?80?%;position:absolute}.background-container .background__left__picker__item__select-wrapper .circle-wrapper[data-v-d7c51344]{width:%?40?%;height:%?80?%;position:absolute;top:0;overflow:hidden}.background-container .background__left__picker__item__select-wrapper .circle-wrapper.right[data-v-d7c51344]{right:0}.background-container .background__left__picker__item__select-wrapper .circle-wrapper.left[data-v-d7c51344]{left:0}.background-container .background__left__picker__item__select-wrapper .circle-wrapper .circle-progress[data-v-d7c51344]{display:inline-block;width:%?80?%;height:%?80?%;border:%?6?% solid transparent;border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.background-container .background__left__picker__item__select-wrapper .circle-wrapper .circle-progress.right-circle[data-v-d7c51344]{right:0;border-bottom-color:transparent!important;border-left-color:transparent!important}.background-container .background__left__picker__item__select-wrapper .circle-wrapper .circle-progress.left-circle[data-v-d7c51344]{left:0;border-top-color:transparent!important;border-right-color:transparent!important}.background-container .background__right-container[data-v-d7c51344]{width:84%;height:100%}.background-container .background__right__show[data-v-d7c51344]{padding:%?30?%;overflow:hidden;-webkit-transform-origin:0 50%;transform-origin:0 50%}.background-container .background__right__show--visible[data-v-d7c51344]{opacity:1}.background-container .background__right__show--title[data-v-d7c51344]{font-size:%?46?%;text-transform:capitalize}.background-container .background__right__show--title--gradient[data-v-d7c51344]{-webkit-background-clip:text;color:transparent}.background-container .background__right__show__content[data-v-d7c51344]{margin-top:%?40?%}.background-container .background__right__show__content__item[data-v-d7c51344]{width:100%;height:%?160?%;border-radius:%?10?%;margin-bottom:%?40?%;display:flex;justify-content:flex-start;align-items:center;align-content:center;flex-wrap:wrap;padding-left:%?40?%}.background-container .background__right__show__content__item--title[data-v-d7c51344]{width:100%;font-size:1.4em;line-height:1.4em;color:#fff;text-transform:capitalize}.background-container .background__right__show__content__item--title--light[data-v-d7c51344]{color:#080808!important}.background-container .background__right__show__content__item--value[data-v-d7c51344]{width:100%;font-size:.8em;color:#aaa}.background-container .background__right__show__content__item--value--light[data-v-d7c51344]{color:#818181!important}\r\n/* 背景颜色容器 end */@-webkit-keyframes circleProgressLoad_right-data-v-d7c51344{0%{-webkit-transform:rotate(225deg);transform:rotate(225deg)}100%{-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@-webkit-keyframes circleProgressLoad_left-data-v-d7c51344{0%{-webkit-transform:rotate(225deg);transform:rotate(225deg)}100%{-webkit-transform:rotate(45deg);transform:rotate(45deg)}}',""]),t.exports=e}}]);