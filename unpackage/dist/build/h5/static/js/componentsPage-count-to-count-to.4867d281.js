(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-count-to-count-to"],{"0246":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return e}));var e={tnNavBar:a("72c2").default,tnCountTo:a("8a5f").default},i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"components-count_to tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[this._v("countTo数字跳转")]),n("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"基本使用"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",[n("tn-count-to",{attrs:{startVal:0,endVal:1e3}})],1),n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-count-to",{attrs:{startVal:100,endVal:2e3}})],1)],1)],1),n("demo-title",{attrs:{title:"显示小数"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",[n("tn-count-to",{attrs:{startVal:0,endVal:1000.9,decimals:1}})],1),n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-count-to",{attrs:{startVal:0,endVal:1000.99,decimals:2}})],1)],1)],1),n("demo-title",{attrs:{title:"字体加大加粗显示"}},[n("tn-count-to",{attrs:{startVal:0,endVal:1e3,bold:!0,fontSize:100}})],1),n("demo-title",{attrs:{title:"自定义字体颜色"}},[n("tn-count-to",{attrs:{startVal:0,endVal:1e3,fontColor:"#A4E82F"}})],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},s=[]},"15e0":function(t,n,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("a9e3"),a("ac1f"),a("00b4"),a("5319"),a("acd8");var i=e(a("1910")),s={name:"tn-count-to",mixins:[i.default],props:{startVal:{type:Number,default:0},endVal:{type:Number,default:0,required:!0},autoplay:{type:Boolean,default:!0},duration:{type:Number,default:2e3},useEasing:{type:Boolean,default:!0},decimals:{type:Number,default:0},decimalSeparator:{type:String,default:"."},thousandthsSeparator:{type:String,default:""},bold:{type:Boolean,default:!1}},computed:{countDown:function(){return this.startVal>this.endVal}},data:function(){return{localStartVal:this.startVal,localDuration:this.duration,displayValue:this.formatNumber(this.startVal),printValue:null,paused:!1,startTime:null,remainingTime:null,timestamp:null,lastTime:0,rAF:null}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remainingTime,this.localStartVal=this.printValue,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cnacelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},destroyed:function(){this.cancelAnimationFrame(this.rAF)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var n=t-this.startTime;this.remainingTime=this.localDuration-n,this.useEasing?(this.countDown&&(this.printValue=this.localStartVal-this.easingFn(n,0,this.localStartVal-this.endVal,this.localDuration)),this.printValue=this.easingFn(n,this.localStartVal,this.endVal-this.localStartVal,this.localDuration)):this.countDown?this.printValue=this.localStartVal-(this.localStartVal-this.endVal)*(n/this.localDuration):this.printValue=this.localStartVal+(this.endVal-this.localStartVal)*(n/this.localDuration),this.countDown?this.printValue=this.printValue<this.endVal?this.endVal:this.printValue:this.printValue=this.printValue>this.endVal?this.endVal:this.printValue,this.displayValue=this.formatNumber(this.printValue),n<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},easingFn:function(t,n,a,e){return a*(1-Math.pow(2,-10*t/e))*1024/1023+n},requestAnimationFrame:function(t){var n=(new Date).getTime(),a=Math.max(0,16-(n-this.lastTime)),e=setTimeout((function(){t&&t(n+a)}),a);return this.lastTime=n+a,e},clearAnimationFrame:function(t){clearTimeout(t)},formatNumber:function(t){var n=/(\d+)(\d{3})/;t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var a=t.split("."),e=a[0],i=a.length>1?this.decimalSeparator+a[1]:"";if(this.thousandthsSeparator&&!this.isNumber(this.thousandthsSeparator))while(n.test(e))e=e.replace(n,"$1"+this.thousandthsSeparator+"$2");return e+i},isNumber:function(t){return!isNaN(parseFloat(t))}}};n.default=s},"3e86":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"demo-title"},[a("v-uni-view",["first"===t.type?a("v-uni-view",{staticClass:"main_title"},[t.leftIcon?a("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),a("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?a("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?a("v-uni-view",{staticClass:"second_title"},[a("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),a("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},i=[]},"4bce":function(t,n,a){"use strict";a.r(n);var e=a("3e86"),i=a("8cde");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);a("dc15");var r=a("f0c5"),o=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"5d860f10",null,!1,e["a"],void 0);n["default"]=o.exports},5081:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=e},"55ef":function(t,n,a){"use strict";var e=a("eff7"),i=a.n(e);i.a},7528:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.components-count_to[data-v-1393bf4a]{min-height:100vh}',""]),t.exports=n},"7bce":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},"7d48":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-count-num[data-v-430c269e]{display:inline-flex;text-align:center;line-height:1}',""]),t.exports=n},"7fad":function(t,n,a){var e=a("7bce");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("5bd29539",e,!0,{sourceMap:!1,shadowMode:!1})},"812a":function(t,n,a){"use strict";var e=a("bffc"),i=a.n(e);i.a},"8a5f":function(t,n,a){"use strict";a.r(n);var e=a("c1b3"),i=a("dea2");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);a("812a");var r=a("f0c5"),o=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"430c269e",null,!1,e["a"],void 0);n["default"]=o.exports},"8cde":function(t,n,a){"use strict";a.r(n);var e=a("5081"),i=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},a4db:function(t,n,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("4bce")),s={name:"componentsCountTo",components:{demoTitle:i.default},data:function(){return{}},methods:{}};n.default=s},bb96:function(t,n,a){"use strict";a.r(n);var e=a("a4db"),i=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},bc54:function(t,n,a){"use strict";a.r(n);var e=a("0246"),i=a("bb96");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);a("55ef");var r=a("f0c5"),o=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"1393bf4a",null,!1,e["a"],void 0);n["default"]=o.exports},bffc:function(t,n,a){var e=a("7d48");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("40a7ae74",e,!0,{sourceMap:!1,shadowMode:!1})},c1b3:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"tn-count-num-class tn-count-num",class:[this.fontColorClass],style:{fontSize:this.fontSizeStyle||"50rpx",fontWeight:this.bold?"bold":"normal",color:this.fontColorStyle||"#080808"}},[this._v(this._s(this.displayValue))])},i=[]},dc15:function(t,n,a){"use strict";var e=a("7fad"),i=a.n(e);i.a},dea2:function(t,n,a){"use strict";a.r(n);var e=a("15e0"),i=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},eff7:function(t,n,a){var e=a("7528");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("4bda4498",e,!0,{sourceMap:!1,shadowMode:!1})}}]);