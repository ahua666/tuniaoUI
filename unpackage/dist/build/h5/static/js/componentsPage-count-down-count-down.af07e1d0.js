(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-count-down-count-down"],{"056d":function(t,e,n){"use strict";n.r(e);var o=n("555d"),a=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=a.a},"0c2d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}));var o={tnNavBar:n("0ca8").default,tnCountDown:n("24ba").default},a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"components-count_down tn-safe-area-inset-bottom"},[e("tn-nav-bar",{attrs:{fixed:!0}},[this._v("countdown倒计时")]),e("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[e("demo-title",{attrs:{title:"基本使用"}},[e("tn-count-down",{attrs:{timestamp:3600}})],1),e("demo-title",{attrs:{title:"显示边框"}},[e("tn-count-down",{attrs:{timestamp:3600,showBorder:!0}})],1),e("demo-title",{attrs:{title:"中文分割时间"}},[e("tn-count-down",{attrs:{timestamp:3600,separator:"cn"}})],1),e("demo-title",{attrs:{title:"天数为零时不隐藏"}},[e("tn-count-down",{attrs:{timestamp:3600,hideZeroDay:!0}})],1),e("demo-title",{attrs:{title:"显示天"}},[e("tn-count-down",{attrs:{timestamp:36e4,showDays:!0,showHours:!1,showMinutes:!1,showSeconds:!1}})],1),e("demo-title",{attrs:{title:"显示天时"}},[e("tn-count-down",{attrs:{timestamp:36e4,showDays:!0,showHours:!0,showMinutes:!1,showSeconds:!1}})],1),e("demo-title",{attrs:{title:"显示天时分"}},[e("tn-count-down",{attrs:{timestamp:36e4,showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!1}})],1),e("demo-title",{attrs:{title:"显示天时分秒"}},[e("tn-count-down",{attrs:{timestamp:36e4,showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!0}})],1),e("demo-title",{attrs:{title:"自定义尺寸"}},[e("tn-count-down",{attrs:{timestamp:3600,fontSize:60,separatorSize:60}})],1),e("demo-title",{attrs:{title:"自定义颜色"}},[e("tn-count-down",{attrs:{timestamp:3600,backgroundColor:"tn-main-gradient-indigo",fontColor:"#FFFFFF"}})],1),e("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},s=[]},"24ba":function(t,e,n){"use strict";n.r(e);var o=n("eee0"),a=n("056d");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("4340");var i=n("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"07b116da",null,!1,o["a"],void 0);e["default"]=r.exports},"348c":function(t,e,n){"use strict";n.r(e);var o=n("0c2d"),a=n("8107");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("a586");var i=n("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"26a14233",null,!1,o["a"],void 0);e["default"]=r.exports},4340:function(t,e,n){"use strict";var o=n("5430"),a=n.n(o);a.a},"53c8":function(t,e,n){"use strict";var o=n("cabe"),a=n.n(o);a.a},5430:function(t,e,n){var o=n("5da7");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("74755827",o,!0,{sourceMap:!1,shadowMode:!1})},"555d":function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=o(n("0912")),s={name:"tn-count-down",mixins:[a.default],props:{timestamp:{type:Number,default:0},autoplay:{type:Boolean,default:!0},height:{type:[String,Number],default:"auto"},separator:{type:String,default:"en"},separatorSize:{type:Number,default:30},separatorColor:{type:String,default:"#080808"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#080808"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.$t.string.getLengthUnitValue(this.height),t.width=t.height),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1rpx"),t.backgroundColor=this.backgroundColorStyle||"#FFFFFF",t},letterStyle:function(){var t={};return t.fontSize=this.fontSizeStyle||"30rpx",t.color=this.fontColorStyle||"#080808",t}},data:function(){return{d:"00",h:"00",m:"00",s:"00",timer:null,seconds:0}},watch:{timestamp:function(t){this.clearTimer(),this.start()}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},beforeDestroy:function(){this.clearTimer()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e,n=0,o=0,a=0;n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n;var s=null;s=this.showDays?e:Math.floor(t/3600),o=Math.floor(t/60)-60*e-24*n*60,a=Math.floor(t)-60*o-60*e*60-24*n*60*60,s=this.$t.number.formatNumberAddZero(s),o=this.$t.number.formatNumberAddZero(o),a=this.$t.number.formatNumberAddZero(a),n=this.$t.number.formatNumberAddZero(n),this.d=n,this.h=s,this.m=o,this.s=a},end:function(){this.clearTimer(),this.$emit("end")},clearTimer:function(){null!==this.timer&&(clearInterval(this.timer),this.timer=null)}}};e.default=s},"5da7":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-countdown[data-v-07b116da]{display:inline-flex;align-items:center}.tn-countdown__item[data-v-07b116da]{box-sizing:initial;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.tn-countdown__item__time[data-v-07b116da]{margin:0;padding:0;line-height:1}.tn-countdown__separator[data-v-07b116da]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 %?5?%;line-height:1}',""]),t.exports=e},"7f8d":function(t,e,n){"use strict";n.r(e);var o=n("e1bb"),a=n("cbf9");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("53c8");var i=n("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"5d860f10",null,!1,o["a"],void 0);e["default"]=r.exports},8107:function(t,e,n){"use strict";n.r(e);var o=n("bc8f"),a=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=a.a},a586:function(t,e,n){"use strict";var o=n("af20"),a=n.n(o);a.a},af20:function(t,e,n){var o=n("d955");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("e220f7c2",o,!0,{sourceMap:!1,shadowMode:!1})},bc8f:function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("7f8d")),s={name:"componentsCountDown",components:{demoTitle:a.default},data:function(){return{}},methods:{}};e.default=s},bfaf:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=o},cabe:function(t,e,n){var o=n("db60");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("93b048fc",o,!0,{sourceMap:!1,shadowMode:!1})},cbf9:function(t,e,n){"use strict";n.r(e);var o=n("bfaf"),a=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=a.a},d955:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.components-count_down[data-v-26a14233]{min-height:100vh}',""]),t.exports=e},db60:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},e1bb:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo-title"},[n("v-uni-view",["first"===t.type?n("v-uni-view",{staticClass:"main_title"},[t.leftIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),n("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?n("v-uni-view",{staticClass:"second_title"},[n("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),n("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},a=[]},eee0:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-countdown-class tn-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?n("v-uni-view",{staticClass:"tn-countdown__item",class:[t.backgroundColorClass],style:[t.itemStyle]},[n("v-uni-view",{staticClass:"tn-countdown__item__time",class:[t.fontColorClass],style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showHours&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?n("v-uni-view",{staticClass:"tn-countdown__separator",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"en"===t.separator?"4rpx":0}},[t._v(t._s("en"===t.separator?":":"天"))]):t._e(),t.showHours?n("v-uni-view",{staticClass:"tn-countdown__item",class:[t.backgroundColorClass],style:[t.itemStyle]},[n("v-uni-view",{staticClass:"tn-countdown__item__time",class:[t.fontColorClass],style:[t.letterStyle]},[t._v(t._s(t.h))])],1):t._e(),t.showMinutes?n("v-uni-view",{staticClass:"tn-countdown__separator",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"en"===t.separator?"4rpx":0}},[t._v(t._s("en"===t.separator?":":"时"))]):t._e(),t.showMinutes?n("v-uni-view",{staticClass:"tn-countdown__item",class:[t.backgroundColorClass],style:[t.itemStyle]},[n("v-uni-view",{staticClass:"tn-countdown__item__time",class:[t.fontColorClass],style:[t.letterStyle]},[t._v(t._s(t.m))])],1):t._e(),t.showSeconds?n("v-uni-view",{staticClass:"tn-countdown__separator",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"en"===t.separator?"4rpx":0}},[t._v(t._s("en"===t.separator?":":"分"))]):t._e(),t.showSeconds?n("v-uni-view",{staticClass:"tn-countdown__item",class:[t.backgroundColorClass],style:[t.itemStyle]},[n("v-uni-view",{staticClass:"tn-countdown__item__time",class:[t.fontColorClass],style:[t.letterStyle]},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"cn"===t.separator?n("v-uni-view",{staticClass:"tn-countdown__separator",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"en"===t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},a=[]}}]);