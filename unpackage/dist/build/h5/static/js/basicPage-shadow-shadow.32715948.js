(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-shadow-shadow"],{"504b":function(t,n,e){"use strict";e.r(n);var a=e("5b57"),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},"53c8":function(t,n,e){"use strict";var a=e("cabe"),i=e.n(a);i.a},"5b57":function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("7f8d")),s={name:"basicShadow",components:{demoTitle:i.default},data:function(){return{}},methods:{}};n.default=s},"7f8d":function(t,n,e){"use strict";e.r(n);var a=e("e1bb"),i=e("cbf9");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("53c8");var o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5d860f10",null,!1,a["a"],void 0);n["default"]=c.exports},"982a":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.basic-shadow[data-v-18226ffa]{background-color:#f4f4f4;min-height:100vh}.shadow-content[data-v-18226ffa]{height:%?80?%;background-color:#fff;margin:%?30?% 0}.shadow-content__image[data-v-18226ffa]{z-index:1;background-image:url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7207d16b-b9c3-4105-8d0d-e9e0c7785f66/605563a1-a210-42f3-99e4-8de3c655c59e.jpg);background-size:cover;background-position:top;background-repeat:no-repeat}.shadow-content__text[data-v-18226ffa]{font-size:%?60?%;text-align:center}',""]),t.exports=n},bfaf:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=a},cabe:function(t,n,e){var a=e("db60");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("93b048fc",a,!0,{sourceMap:!1,shadowMode:!1})},cbf9:function(t,n,e){"use strict";e.r(n);var a=e("bfaf"),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},d1e5:function(t,n,e){var a=e("982a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("50483c1a",a,!0,{sourceMap:!1,shadowMode:!1})},db60:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},dbf7:function(t,n,e){"use strict";var a=e("d1e5"),i=e.n(a);i.a},e1bb:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"demo-title"},[e("v-uni-view",["first"===t.type?e("v-uni-view",{staticClass:"main_title"},[t.leftIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),e("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?e("v-uni-view",{staticClass:"second_title"},[e("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),e("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},i=[]},e68b:function(t,n,e){"use strict";e.r(n);var a=e("ff60"),i=e("504b");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("dbf7");var o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"18226ffa",null,!1,a["a"],void 0);n["default"]=c.exports},ff60:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={tnNavBar:e("0ca8").default},i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"basic-shadow tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[this._v("阴影")]),n("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"普通阴影"}},[n("v-uni-view",{staticClass:"shadow-content tn-shadow"}),n("v-uni-view",{staticClass:"shadow-content tn-shadow-warp"})],1),n("demo-title",{attrs:{title:"有色阴影"}},[n("v-uni-view",{staticClass:"shadow-content tn-bg-teal tn-shadow-teal"}),n("v-uni-view",{staticClass:"shadow-content tn-bg-indigo tn-shadow-indigo"})],1),n("demo-title",{attrs:{title:"背景图片阴影"}},[n("v-uni-view",{staticClass:"shadow-content shadow-content__image tn-shadow-blur"})],1),n("demo-title",{attrs:{title:"文字阴影"}},[n("v-uni-view",{staticClass:"shadow-content__text tn-color-indigo tn-text-shadow-indigo"},[this._v("图鸟UI，专注UI开发")])],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},s=[]}}]);