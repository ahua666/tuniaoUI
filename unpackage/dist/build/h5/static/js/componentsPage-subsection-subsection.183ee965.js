(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-subsection-subsection"],{"0c75":function(t,n,i){"use strict";i.r(n);var e=i("5ae4"),o=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=o.a},1074:function(t,n,i){"use strict";var e=i("de99"),o=i.n(e);o.a},"196c":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"demo-title"},[i("v-uni-view",["first"===t.type?i("v-uni-view",{staticClass:"main_title"},[t.leftIcon?i("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),i("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?i("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?i("v-uni-view",{staticClass:"second_title"},[i("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),i("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},o=[]},"279e":function(t,n,i){var e=i("8940");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("60d21ee3",e,!0,{sourceMap:!1,shadowMode:!1})},"30d08":function(t,n,i){"use strict";i.r(n);var e=i("6151"),o=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=o.a},"4c53":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"tn-subsection-class tn-subsection",class:[t.subsectionBackgroundColorClass],style:[t.subsectionStyle]},[t._l(t.listInfo,(function(n,e){return[i("v-uni-view",{key:e+"_0",staticClass:"tn-subsection__item tn-text-ellipsis",class:["section-item-"+e,t.noBorderRight(e)],style:[t.itemStyle(e)],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click(e)}}},[i("v-uni-view",{staticClass:"tn-subsection__item--text tn-text-ellipsis",style:[t.textStyle(e)]},[t._v(t._s(n.name))])],1)]})),i("v-uni-view",{staticClass:"tn-subsection__bg",class:[t.itemBarClass],style:[t.itemBarStyle]})],2)},o=[]},"53ce":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},"5ae4":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=e},6151:function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("cce8")),s={name:"ComponentsSubsection",components:{demoTitle:o.default},data:function(){return{list:["全部","未付款","待发货","待收货","待评价"]}}};n.default=s},"7a14":function(t,n,i){"use strict";i.r(n);var e=i("4c53"),o=i("9cb9");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(s);i("aeca");var a=i("f0c5"),r=Object(a["a"])(o["default"],e["b"],e["c"],!1,null,"17564c58",null,!1,e["a"],void 0);n["default"]=r.exports},8940:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-subsection[data-v-17564c58]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.tn-subsection__item[data-v-17564c58]{display:flex;flex-direction:row;flex:1;text-align:center;font-size:%?26?%;height:100%;align-items:center;justify-content:center;color:#fff;padding:0 %?6?%}.tn-subsection__item--text[data-v-17564c58]{transition:all .3s;color:#fff;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}.tn-subsection__item--first[data-v-17564c58]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.tn-subsection__item--last[data-v-17564c58]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.tn-subsection__item--none-border-right[data-v-17564c58]{border-right:none!important}.tn-subsection__bg[data-v-17564c58]{background-color:#01beff;position:absolute;z-index:-1;transition-property:all;transition-duration:0s;transition-timing-function:linear}.tn-subsection__bg__animation[data-v-17564c58]{transition-duration:.25s!important}.tn-subsection__bg__animation--cubic-bezier[data-v-17564c58]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)!important}',""]),t.exports=n},9008:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var e={tnNavBar:i("5d18").default,tnSubsection:i("7a14").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"components-subsection tn-safe-area-inset-bottom"},[i("tn-nav-bar",{attrs:{fixed:!0}},[t._v("分段器")]),i("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[i("demo-title",{attrs:{title:"基本使用"}},[i("tn-subsection",{attrs:{list:t.list}})],1),i("demo-title",{attrs:{title:"按钮模式"}},[i("tn-subsection",{attrs:{list:t.list,mode:"button"}}),i("v-uni-view",{staticClass:"tn-margin-top"},[i("tn-subsection",{attrs:{list:t.list,mode:"button",borderRadius:50}})],1)],1),i("demo-title",{attrs:{title:"取消切换动画"}},[i("tn-subsection",{attrs:{list:t.list,animation:!1}})],1),i("demo-title",{attrs:{title:"贝塞尔曲线切换动画"}},[i("tn-subsection",{attrs:{list:t.list,animationType:"cubic-bezier"}}),i("v-uni-view",{staticClass:"tn-margin-top"},[i("tn-subsection",{attrs:{list:t.list,mode:"button",borderRadius:50,animationType:"cubic-bezier"}})],1)],1),i("demo-title",{attrs:{title:"选中字体设置为粗体"}},[i("tn-subsection",{attrs:{list:t.list,bold:!0}})],1),i("demo-title",{attrs:{title:"自定义样式"}},[i("tn-subsection",{attrs:{list:t.list,height:40,fontSize:20}}),i("v-uni-view",{staticClass:"tn-margin-top"},[i("tn-subsection",{attrs:{list:t.list,mode:"button",borderRadius:50,backgroundColor:"tn-cool-bg-color-9",buttonColor:"tn-cool-bg-color-7",inactiveColor:"#FFFFFF",activeColor:"#27A1BA"}})],1),i("v-uni-view",{staticClass:"tn-margin-top"},[i("tn-subsection",{attrs:{list:t.list,borderRadius:50,backgroundColor:"#FFFFFF",buttonColor:"#E83A30",inactiveColor:"#838383"}})],1)],1),i("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},s=[]},"9cb9":function(t,n,i){"use strict";i.r(n);var e=i("9fd7"),o=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=o.a},"9fd7":function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("53ca"));i("a9e3"),i("d81d"),i("99af"),i("ac1f");var s=e(i("7187")),a={mixins:[s.default],name:"tn-subsection",props:{mode:{type:String,default:"subsection"},height:{type:Number,default:60},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#FFFFFF"},inactiveColor:{type:String,default:"#AAAAAA"},bold:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#F4F4F4"},buttonColor:{type:String,default:"#01BEFF"},borderRadius:{type:Number,default:10},animation:{type:Boolean,default:!0},animationType:{type:String,default:""},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%"},currentIndex:this.current,buttonPadding:3,firstVibrateShort:!0}},watch:{list:{handler:function(t){this.listInfo=t.map((function(t,n){if("object"!==(0,o.default)(t)){var i={width:0,name:t};return i}return t.width=0,obj}))},immediate:!0,deep:!0},current:{handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)},immediate:!0}},created:function(){this.listInfo=this.list.map((function(t,n){if("object"!==(0,o.default)(t)){var i={width:0,name:t};return i}return t.width=0,obj}))},computed:{noBorderRight:function(){var t=this;return function(n){if("subsection"===t.mode){var i="";return n<t.list.length-1&&(i+=" tn-subsection__item--none-border-right"),0===n&&(i+=" tn-subsection__item--first"),n===t.list.length-1&&(i+=" tn-subsection__item--last"),i}}},textStyle:function(){var t=this;return function(n){var i={};return n===t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,n===t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=(t.fontSize||26)+t.fontUnit,i}},itemStyle:function(){var t=this;return function(n){var i={};return t.fontSizeStyle&&(i.fontSize=t.fontSizeStyle),"subsection"===t.mode&&(i.borderColor=t.buttonColor,i.borderWidth="1rpx",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=this.height+"rpx","button"===this.mode&&(t.backgroundColor=this.backgroundColorStyle,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"rpx")),t},subsectionBackgroundColorClass:function(){var t="";return"button"===this.mode&&this.backgroundColorClass&&(t=this.backgroundColorClass),t},itemBarClass:function(){var t="",n=this.$tn.color.getBackgroundColorInternalClass(this.buttonColor);return this.animation&&(t+=" tn-subsection__bg__animation",this.animationType&&(t+=" tn-subsection__bg__animation--".concat(this.animationType))),n&&(t+=" ".concat(n)),t},itemBarStyle:function(){var t={},n=this.$tn.color.getBackgroundColorStyle(this.buttonColor);return n&&(t.backgroundColor=this.buttonColor),t.zIndex=1,"button"===this.mode&&(t.borderRadius="".concat(this.borderRadius,"rpx"),t.bottom="".concat(this.buttonPadding,"px"),t.height=this.height-4*this.buttonPadding+"rpx",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var n=this;"subsection"===this.mode&&(t===this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0===t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){n.itemBgLeft()}),10),this.vibrateShort&&this.firstVibrateShort,this.firstVibrateShort=!1},getTabsInfo:function(){for(var t=this,n=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)n.select(".section-item-"+i).boundingClientRect();n.exec((function(n){n.length||setTimeout((function(){t.getTabsInfo()}),10),n.map((function(n,i){t.listInfo[i].width=n.width})),("subsection"===t.mode||"button"===t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this,n=0;this.listInfo.map((function(i,e){e<t.currentIndex&&(n+=i.width)})),"subsection"===this.mode?this.itemBgStyle.left=n+"px":"button"===this.mode&&(this.itemBgStyle.left=n+this.buttonPadding+"px")},click:function(t){t!==this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",{index:Number(t),name:this.listInfo[t]["name"]}))}}};n.default=a},a8e6:function(t,n,i){"use strict";i.r(n);var e=i("9008"),o=i("30d08");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(s);var a=i("f0c5"),r=Object(a["a"])(o["default"],e["b"],e["c"],!1,null,"700e99d4",null,!1,e["a"],void 0);n["default"]=r.exports},aeca:function(t,n,i){"use strict";var e=i("279e"),o=i.n(e);o.a},cce8:function(t,n,i){"use strict";i.r(n);var e=i("196c"),o=i("0c75");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(s);i("1074");var a=i("f0c5"),r=Object(a["a"])(o["default"],e["b"],e["c"],!1,null,"5d860f10",null,!1,e["a"],void 0);n["default"]=r.exports},de99:function(t,n,i){var e=i("53ce");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("918657ae",e,!0,{sourceMap:!1,shadowMode:!1})}}]);