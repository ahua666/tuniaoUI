(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-load-more-load-more"],{1005:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo-title"},[n("v-uni-view",["first"===t.type?n("v-uni-view",{staticClass:"main_title"},[t.leftIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),n("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?n("v-uni-view",{staticClass:"second_title"},[n("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),n("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},i=[]},"17ae":function(t,e,n){var a=n("c7de");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3d5069bc",a,!0,{sourceMap:!1,shadowMode:!1})},1877:function(t,e,n){"use strict";n.r(e);var a=n("e22d"),i=n("401b");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"50ab3605",null,!1,a["a"],void 0);e["default"]=s.exports},"34e7":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("v-uni-view",{staticClass:"tn-loading-class tn-loading",class:["tn-loading-"+this.mode,this.animation?"tn-loading-"+this.mode+"--animation":""],style:[this.loadStyle]}):this._e()},i=[]},"401b":function(t,e,n){"use strict";n.r(e);var a=n("4d72"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"4b34":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},"4c92":function(t,e,n){var a=n("9ce2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("37519b28",a,!0,{sourceMap:!1,shadowMode:!1})},"4d72":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5ea4")),o={name:"ComponentsLoadMore",components:{demoTitle:i.default},data:function(){return{loadText:{loadmore:"下拉加载",loading:"快速加载中...",nomore:"已经没有了啊"}}}};e.default=o},"5ea4":function(t,e,n){"use strict";n.r(e);var a=n("1005"),i=n("e595");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("bee7");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5d860f10",null,!1,a["a"],void 0);e["default"]=s.exports},"66ff":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={tnLoading:n("d2d4").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-load-more-class tn-load-more"},[n("v-uni-view",{staticClass:"tn-load-more__wrap",class:[t.backgroundColorClass],style:[t.loadStyle]},[n("v-uni-view",{staticClass:"tn-load-more__line"}),n("v-uni-view",{staticClass:"tn-load-more__content",class:[{"tn-load-more__content--more":"loadmore"===t.status||"nomore"===t.status}]},[n("v-uni-view",{staticClass:"tn-load-more__loading"},[n("tn-loading",{staticClass:"tn-load-more__loading__icon",attrs:{mode:t.loadingIconType,show:"loading"===t.status&&t.loadingIcon,color:t.loadingIconColor}})],1),n("v-uni-view",{staticClass:"tn-load-more__text",class:[t.fontColorClass,{"tn-load-more__text--dot":"nomore"===t.status&&t.dot}],style:[t.loadTextStyle]},[t._v(t._s(t.showText))])],1),n("v-uni-view",{staticClass:"tn-load-more__line"})],1)],1)},o=[]},"7b3b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={name:"tn-loading",props:{mode:{type:String,default:"circle"},show:{type:Boolean,default:!0},animation:{type:Boolean,default:!0},color:{type:String,default:""},size:{type:Number,default:34}},computed:{loadStyle:function(){var t={};return t.width=this.size+"rpx",t.height=t.width,"circle"===this.mode&&(t.borderColor="#E6E6E6 #E6E6E6 #E6E6E6 ".concat(this.color?this.color:"#AAAAAA")),t}}};e.default=a},"7efc":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=a},"99ab":function(t,e,n){"use strict";var a=n("4c92"),i=n.n(a);i.a},"9ce2":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-load-more__wrap[data-v-2e2f359e]{background-color:initial;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#838383}.tn-load-more__line[data-v-2e2f359e]{vertical-align:middle;border:1px solid #838383;width:%?50?%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tn-load-more__content[data-v-2e2f359e]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 %?12?%}.tn-load-more__content--more[data-v-2e2f359e]{position:relative}.tn-load-more__loading[data-v-2e2f359e]{margin-right:%?8?%}.tn-load-more__loading__icon[data-v-2e2f359e]{display:flex;flex-direction:row;justify-content:center;align-items:center}.tn-load-more__text[data-v-2e2f359e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:%?30?%}.tn-load-more__text--dot[data-v-2e2f359e]{font-size:%?28?%}',""]),t.exports=e},a6e4:function(t,e,n){"use strict";var a=n("17ae"),i=n.n(a);i.a},bc24:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("b64b");var i=a(n("c846")),o={name:"tn-load-more",mixins:[i.default],props:{status:{type:String,default:"loadmore"},loadingIcon:{type:Boolean,default:!0},loadingIconType:{type:String,default:"circle"},loadingIconColor:{type:String,default:""},loadText:{type:Object,default:function(){return{loadmore:"加载更多",loading:"正在加载...",nomore:"没有更多了"}}},dot:{type:Boolean,default:!1},customStyle:{type:Object,default:function(){return{}}}},computed:{loadStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),Object.keys(this.customStyle).length>0&&Object.assign(t,this.customStyle),t},loadTextStyle:function(){var t={};return this.fontColorStyle&&(t.color=this.fontColorStyle),this.fontSizeStyle&&(t.fontSize=this.fontSizeStyle,t.lineHeight=this.$tn.string.getLengthUnitValue(this.fontSize+2,this.fontUnit)),t},showText:function(){var t="";return t="loadmore"===this.status?this.loadText.loadmore||"加载更多":"loading"===this.status?this.loadText.loading||"正在加载...":"nomore"===this.status&&this.dot?this.dotText:this.loadText.nomore||"没有更多了",t}},data:function(){return{dotText:"●"}},methods:{loadMore:function(){"loadmore"===this.status&&this.$emit("loadmore")}}};e.default=o},bee7:function(t,e,n){"use strict";var a=n("e1b1"),i=n.n(a);i.a},c7de:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-loading-circle[data-v-198243dd]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e6e6e6 #e6e6e6 #e6e6e6 #aaa}.tn-loading-circle--animation[data-v-198243dd]{animation:tn-circle-data-v-198243dd 1s linear infinite;-webkit-animation:tn-circle-data-v-198243dd 1s linear infinite}.tn-loading-flower[data-v-198243dd]{display:inline-block;vertical-align:middle;width:%?28?%;height:%?28?%;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.tn-loading-flower--animation[data-v-198243dd]{animation:tn-flower-data-v-198243dd 1s steps(12) infinite;-webkit-animation:tn-flower-data-v-198243dd 1s steps(12) infinite}@-webkit-keyframes tn-flower-data-v-198243dd{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes tn-flower-data-v-198243dd{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes tn-circle-data-v-198243dd{0%{transform:rotate(0);-webkit-transform:rotate(0)}100%{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes tn-circle-data-v-198243dd{0%{transform:rotate(0);-webkit-transform:rotate(0)}100%{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}',""]),t.exports=e},c8b6:function(t,e,n){"use strict";n.r(e);var a=n("66ff"),i=n("cbca");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("99ab");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2e2f359e",null,!1,a["a"],void 0);e["default"]=s.exports},cbca:function(t,e,n){"use strict";n.r(e);var a=n("bc24"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d2d4:function(t,e,n){"use strict";n.r(e);var a=n("34e7"),i=n("ec1b");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("a6e4");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"198243dd",null,!1,a["a"],void 0);e["default"]=s.exports},e1b1:function(t,e,n){var a=n("4b34");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("271bb985",a,!0,{sourceMap:!1,shadowMode:!1})},e22d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("75e2").default,tnLoadMore:n("c8b6").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"components-load-more tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("加载更多")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"默认"}},[n("tn-load-more")],1),n("demo-title",{attrs:{title:"加载中"}},[n("tn-load-more",{attrs:{status:"loading",loadingIcon:!1}}),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"loading"}})],1),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"loading",loadingIconColor:"#01BEFF"}})],1),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"loading",loadingIconType:"flower"}})],1)],1),n("demo-title",{attrs:{title:"没有更多"}},[n("tn-load-more",{attrs:{status:"nomore"}}),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"nomore",dot:!0}})],1)],1),n("demo-title",{attrs:{title:"修改提示语"}},[n("tn-load-more",{attrs:{status:"loadmore",loadText:t.loadText}}),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"loading",loadText:t.loadText}})],1),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"nomore",loadText:t.loadText}})],1)],1),n("demo-title",{attrs:{title:"修改颜色"}},[n("tn-load-more",{attrs:{status:"loadmore",loadText:t.loadText,fontColor:"#01BEFF"}}),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"loading",loadText:t.loadText,fontColor:"tn-color-indigo"}})],1),n("v-uni-view",{staticClass:"tn-margin-top"},[n("tn-load-more",{staticClass:"tn-margin-top",attrs:{status:"nomore",loadText:t.loadText,fontColor:"rgba(255, 129, 129, 0.8)"}})],1)],1),n("demo-title",{attrs:{title:"修改字体尺寸"}},[n("tn-load-more",{attrs:{fontSize:32}})],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},o=[]},e595:function(t,e,n){"use strict";n.r(e);var a=n("7efc"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},ec1b:function(t,e,n){"use strict";n.r(e);var a=n("7b3b"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);