(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-blog-prefer-prefer"],{"005b":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c7eb")),r=i(n("1da1"));n("a9e3"),n("99af"),n("fb6a"),n("14d9"),n("a434"),n("e9c4"),n("c740");var o={name:"tn-waterfall",props:{value:{type:Array,default:function(){return[]}},idKey:{type:String,default:"id"},addTime:{type:Number,default:200}},computed:{copyValue:function(){return this.cloneData(this.value)}},watch:{copyValue:function(t,e){var n=Array.isArray(e)&&e.length>0?e.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(n))),this.splitData()}},data:function(){return{leftList:[],rightList:[],tempList:[]}},mounted:function(){this.tempList=this.cloneData(this.copyValue),this.splitData()},methods:{splitData:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var n,i,r;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.tempList.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t._tGetRect("#tn-waterfall-left");case 4:return n=e.sent,e.next=7,t._tGetRect("#tn-waterfall-right");case 7:if(i=e.sent,r=t.tempList[0],r){e.next=11;break}return e.abrupt("return");case 11:n.height<i.height?t.leftList.push(r):n.height>i.height?t.rightList.push(r):t.leftList.length<=t.rightList.length?t.leftList.push(r):t.rightList.push(r),t.tempList.splice(0,1),t.tempList.length?setTimeout((function(){t.splitData()}),t.addTime):t.$emit("finish");case 14:case"end":return e.stop()}}),e)})))()},cloneData:function(t){return JSON.parse(JSON.stringify(t))},clear:function(){this.leftList=[],this.rightList=[],this.$emit("input",[]),this.tempList=[]},remove:function(t){var e=this,n=-1;n=this.leftList.findIndex((function(n){return n[e.idKey]==t})),-1!=n?this.leftList.splice(n,1):(n=this.rightList.findIndex((function(n){return n[e.idKey]==t})),-1!=n&&this.rightList.splice(n,1)),n=this.value.findIndex((function(n){return n[e.idKey]==t})),-1!=n&&this.$emit("input",this.value.splice(n,1))},modify:function(t,e,n){var i=this,a=-1;if(a=this.leftList.findIndex((function(e){return e[i.idKey]==t})),-1!=a?this.leftList[a][e]=n:(a=this.rightList.findIndex((function(e){return e[i.idKey]==t})),-1!=a&&(this.rightList[a][e]=n)),a=this.value.findIndex((function(e){return e[i.idKey]==t})),-1!=a){var r=this.cloneData(this.value);r[a][e]=n,this.$emit("input",r)}}}};e.default=o},"13c7":function(t,e,n){"use strict";n.r(e);var i=n("caa0"),a=n("edeb");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("af3d");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0f96822e",null,!1,i["a"],void 0);e["default"]=s.exports},"2e86":function(t,e,n){"use strict";n.r(e);var i=n("331e"),a=n("5019");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6c6f");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"e58dbdec",null,!1,i["a"],void 0);e["default"]=s.exports},"331e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav-index-button",style:{bottom:t.bottom+"rpx",right:t.right+"rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navIndex.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"nav-index-button__content"},[n("v-uni-view",{staticClass:"nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-cool-bg-color-7"},[n("v-uni-view",{staticClass:"tn-icon-home-vertical-fill"})],1)],1),n("v-uni-view",{staticClass:"nav-index-button__meteor"},[n("v-uni-view",{staticClass:"nav-index-button__meteor__wrapper"},t._l(6,(function(t,e){return n("v-uni-view",{key:e,staticClass:"nav-index-button__meteor__item",style:{transform:"rotateX("+(30*e-60)+"deg) rotateZ("+(30*e-60)+"deg)"}},[n("v-uni-view",{staticClass:"nav-index-button__meteor__item--pic"})],1)})),1)],1)],1)},a=[]},"35a2":function(t,e,n){"use strict";var i=n("afd9"),a=n.n(i);a.a},3839:function(t,e,n){var i=n("9558");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("73689b69",i,!0,{sourceMap:!1,shadowMode:!1})},3969:function(t,e,n){"use strict";n.r(e);var i=n("cb7f"),a=n("c728");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("7a15");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"36aa842e",null,!1,i["a"],void 0);e["default"]=s.exports},"3d87":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-scroll-list[data-v-6f1316ae]{padding-bottom:%?20?%}.tn-scroll-list__scroll-view[data-v-6f1316ae]{display:flex;flex-direction:row}.tn-scroll-list__scroll-view__content[data-v-6f1316ae]{display:flex;flex-direction:row}.tn-scroll-list__indicator[data-v-6f1316ae]{display:flex;flex-direction:row;justify-content:center;margin-top:%?30?%}.tn-scroll-list__indicator__line[data-v-6f1316ae]{width:%?120?%;height:%?8?%;border-radius:%?200?%;overflow:hidden}.tn-scroll-list__indicator__line__bar[data-v-6f1316ae]{width:%?40?%;height:%?8?%;border-radius:%?200?%}',""]),t.exports=e},5019:function(t,e,n){"use strict";n.r(e);var i=n("68a1"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"62dd":function(t,e,n){var i=n("7ec2").default,a=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return a(i().mark((function e(){var n,a,r;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:r=e.sent,n=r.customBarHeight,a=r.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",a),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},6553:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-scroll-list-class tn-scroll-list"},[n("v-uni-scroll-view",{staticClass:"tn-scroll-list__scroll-view",attrs:{"scroll-x":!0,"upper-threshold":0,"lower-threshold":0},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollHandler.apply(void 0,arguments)},scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToUpperHandler.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToLowerHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tn-scroll-list__scroll-view__content"},[t._t("default")],2)],1),t.indicator?n("v-uni-view",{staticClass:"tn-scroll-list__indicator",style:[t.indicatorStyle]},[n("v-uni-view",{staticClass:"tn-scroll-list__indicator__line",style:[t.lineStyle]},[n("v-uni-view",{staticClass:"tn-scroll-list__indicator__line__bar",style:[t.barStyle]})],1)],1):t._e()],1)},a=[]},"68a1":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index/index"}},methods:{navIndex:function(){var t=getCurrentPages();if(t&&t.length>0){var e=this.indexPath||"/pages/index/index",n=t[0];1!=t.length||n.route&&n.route==e.substring(1,e.length)?uni.navigateBack({delta:1}):uni.reLaunch({url:e})}else uni.reLaunch({url:indexPath})}}};e.default=i},"6c6f":function(t,e,n){"use strict";var i=n("3839"),a=n.n(i);a.a},"7a15":function(t,e,n){"use strict";var i=n("9027"),a=n.n(i);a.a},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(S){d=function(t,e,n){return t[e]=n}}function f(t,e,n,i){var a=e&&e.prototype instanceof h?e:h,r=Object.create(a.prototype),s=new I(i||[]);return o(r,"_invoke",{value:C(t,n,s)}),r}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=f;var p={};function h(){}function m(){}function g(){}var _={};d(_,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(E([])));w&&w!==n&&r.call(w,c)&&(_=w);var x=g.prototype=h.prototype=Object.create(_);function y(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;o(this,"_invoke",{value:function(a,o){function s(){return new e((function(n,s){(function n(a,o,s,c){var l=v(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)})(a,o,n,s)}))}return n=n?n.then(s,s):s()}})}function C(t,e,n){var i="suspendedStart";return function(a,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===a)throw r;return O()}for(n.method=a,n.arg=r;;){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=v(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=v(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=d(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,d(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},y(k.prototype),d(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,i,a,r){void 0===r&&(r=Promise);var o=new k(f(t,n,i,a),r);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(x),d(x,u,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=E,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return o.type="throw",o.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;T(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},"83f5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.template-prefer[data-v-0f96822e]{min-height:100vh}\r\n/* 图标容器11 start */.icon11__item[data-v-0f96822e]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon11__item--icon[data-v-0f96822e]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}.icon11__item--icon[data-v-0f96822e]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png)}\r\n/* 标题 start */.nav_title[data-v-0f96822e]{-webkit-background-clip:text;color:transparent}.nav_title--wrap[data-v-0f96822e]{position:relative;display:flex;height:%?120?%;align-items:center;justify-content:center;font-weight:700;background-image:url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);background-size:cover}\r\n/* 标题 end */.product__item[data-v-0f96822e]{background-color:#fff;border-radius:%?10?%;overflow:hidden;margin:0 %?10?%;margin-bottom:%?20?%;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.product__item .item[data-v-0f96822e]{\r\n  /* 图片 start */\r\n  /* 图片 end */\r\n  /* 内容 start */\r\n  /* 标题 start */\r\n  /* 标题 end */\r\n  /* 标签 start */\r\n  /* 标签 end */\r\n  /* 价格 start */\r\n  /* 价格 end */\r\n  /* 内容 end */}.product__item .item__image[data-v-0f96822e]{width:100%;height:auto;background-color:#fff}.product__item .item__data[data-v-0f96822e]{padding:%?8?% %?14?%}.product__item .item__title-container[data-v-0f96822e]{text-align:justify;line-height:%?38?%;vertical-align:middle}.product__item .item__store-type[data-v-0f96822e]{height:%?28?%;font-size:%?20?%;position:relative;display:inline-flex;align-items:center;justify-content:center;padding:0 %?4?%;border-radius:%?6?%;white-space:nowrap;text-align:center;top:%?-2?%;margin-right:%?6?%}.product__item .item__tags-container[data-v-0f96822e]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start}.product__item .item__tag[data-v-0f96822e]{margin:%?10?%;color:#e83a30;border:%?2?% solid #e83a30;padding:0 %?6?%;border-radius:%?10?%;font-size:%?20?%}.product__item .item__tag[data-v-0f96822e]:first-child{margin-left:%?0?%!important}.product__item .item__price-container[data-v-0f96822e]{font-size:%?24?%;color:#e83a30;font-weight:700}.product__item .item__price--integer[data-v-0f96822e]{font-size:%?38?%}\r\n/* 底部tabbar start*/.footerfixed[data-v-0f96822e]{position:fixed;width:100%;bottom:0;z-index:999;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.tabbar[data-v-0f96822e]{display:flex;align-items:center;min-height:%?110?%;justify-content:space-between;padding:0;height:calc(%?110?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.tabbar .action[data-v-0f96822e]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.bar-center[data-v-0f96822e]{-webkit-animation:suspension-data-v-0f96822e 3s ease-in-out infinite;animation:suspension-data-v-0f96822e 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-0f96822e{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}.tabbar .action .bar-icon[data-v-0f96822e]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-0f96822e]{width:%?50?%;height:%?50?%;display:inline-block}.tabbar .action .bar-circle[data-v-0f96822e]{position:relative;display:block;margin:%?0?% auto %?0?%;text-align:center;font-size:%?52?%;line-height:%?90?%;width:%?100?%!important;height:%?100?%!important;overflow:hidden}.tabbar .action .bar-circle uni-image[data-v-0f96822e]{width:%?100?%;height:%?100?%;display:inline-block;margin:%?0?% auto %?0?%}\r\n/* 流星+悬浮 */.nav-index-button[data-v-0f96822e]{-webkit-animation:suspension-data-v-0f96822e 3s ease-in-out infinite;animation:suspension-data-v-0f96822e 3s ease-in-out infinite;z-index:999999}.nav-index-button__content[data-v-0f96822e]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-index-button__content--icon[data-v-0f96822e]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.nav-index-button__content--icon[data-v-0f96822e]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%}.nav-index-button__meteor[data-v-0f96822e]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.nav-index-button__meteor__wrapper[data-v-0f96822e]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-0f96822e 20s linear infinite;animation:spin-data-v-0f96822e 20s linear infinite}.nav-index-button__meteor__item[data-v-0f96822e]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.nav-index-button__meteor__item--pic[data-v-0f96822e]{display:block;width:100%;height:100%;background:url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc1.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-0f96822e 4s linear infinite;animation:arc-data-v-0f96822e 4s linear infinite}@keyframes suspension-data-v-0f96822e{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.6rem);transform:translateY(-.6rem)}}@-webkit-keyframes spin-data-v-0f96822e{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-0f96822e{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-0f96822e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-0f96822e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},9027:function(t,e,n){var i=n("dfb2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("132d75cd",i,!0,{sourceMap:!1,shadowMode:!1})},9558:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.nav-index-button[data-v-e58dbdec]{position:fixed;-webkit-animation:suspension-data-v-e58dbdec 3s ease-in-out infinite;animation:suspension-data-v-e58dbdec 3s ease-in-out infinite;z-index:999999}.nav-index-button__content[data-v-e58dbdec]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-index-button__content--icon[data-v-e58dbdec]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.nav-index-button__content--icon[data-v-e58dbdec]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png)}.nav-index-button__meteor[data-v-e58dbdec]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.nav-index-button__meteor__wrapper[data-v-e58dbdec]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-e58dbdec 20s linear infinite;animation:spin-data-v-e58dbdec 20s linear infinite}.nav-index-button__meteor__item[data-v-e58dbdec]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.nav-index-button__meteor__item--pic[data-v-e58dbdec]{display:block;width:100%;height:100%;background:url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc3.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-e58dbdec 4s linear infinite;animation:arc-data-v-e58dbdec 4s linear infinite}@-webkit-keyframes suspension-data-v-e58dbdec{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@keyframes suspension-data-v-e58dbdec{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@-webkit-keyframes spin-data-v-e58dbdec{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-e58dbdec{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-e58dbdec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-e58dbdec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"9b67":function(t,e,n){"use strict";n.r(e);var i=n("e47b"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},af3d:function(t,e,n){"use strict";var i=n("e9e87"),a=n.n(i);a.a},afd9:function(t,e,n){var i=n("3d87");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("721c84e0",i,!0,{sourceMap:!1,shadowMode:!1})},c728:function(t,e,n){"use strict";n.r(e);var i=n("005b"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c973:function(t,e,n){function i(t,e,n,i,a,r,o){try{var s=t[r](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,a)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){i(o,a,r,s,c,"next",t)}function c(t){i(o,a,r,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},c9fa:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4"),n("14d9"),n("c975");var a=i(n("62dd")),r=i(n("2e86")),o={name:"TemplateMyblog",mixins:[a.default],components:{NavIndexButton:r.default},data:function(){return{historyData:[{title:"分销中心",icon:"organizatio",color:"orange"},{title:"积分商城",icon:"level",color:"purple"},{title:"限时秒杀",icon:"clock",color:"blue"},{title:"社区团购",icon:"team",color:"purplered"},{title:"大转盘",icon:"group-circle",color:"teal"},{title:"商品核销",icon:"scan",color:"orangered"},{title:"满减优惠",icon:"coupon",color:"indigo"},{title:"视频直播",icon:"video",color:"green"}],current:0,scrollList:[{name:"推荐",count:"10"},{name:"周边"},{name:"科技"},{name:"音乐"},{name:"电影"},{name:"游戏"}],loadStatus:"loadmore",list:[],data:[{title:"图鸟科技 设计师专属笔记本 告别卡慢热",mainImage:"https://tnuiimage.tnkjapp.com/shop/computer1.jpg",storeType:1,newProduct:!0,tags:["满1000减80","免息"],price:6999},{title:"图鸟科技 开发便携笔记本 告别笨重外出",mainImage:"https://tnuiimage.tnkjapp.com/shop/computer2.jpg",storeType:1,newProduct:!1,tags:["免息"],price:7999},{title:"图鸟科技 T10 宇宙9000 10G全网通",mainImage:"https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg",storeType:1,newProduct:!0,tags:[],price:4999},{title:"图鸟科技 T10Pro 宇宙9010 10G全网通",mainImage:"https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg",storeType:1,newProduct:!0,tags:[],price:6999},{title:"图鸟科技 运动手表 不用插卡即可通话",mainImage:"https://tnuiimage.tnkjapp.com/shop/watch1.jpg",storeType:1,newProduct:!1,tags:[],price:2999},{title:"图鸟科技 页面设计 专为第三方提供精美酷炫页面",mainImage:"https://tnuiimage.tnkjapp.com/shop/card.jpg",storeType:2,newProduct:!1,tags:["酷炫"],price:10999},{title:"图鸟科技 海报设计 想不到就过来聊聊吧",mainImage:"https://tnuiimage.tnkjapp.com/shop/prototype1.jpg",storeType:2,newProduct:!1,tags:["哎呀"],price:399},{title:"图鸟科技 环保袋",mainImage:"https://tnuiimage.tnkjapp.com/shop/bag1.jpg",storeType:1,newProduct:!1,tags:["合作免费送"],price:0},{title:"图鸟科技 纸杯",mainImage:"https://tnuiimage.tnkjapp.com/shop/cup2.jpg",storeType:1,newProduct:!1,tags:["合作免费送"],price:0},{title:"图鸟科技 抱枕",mainImage:"https://tnuiimage.tnkjapp.com/shop/pillow.jpg",storeType:1,newProduct:!1,tags:[],price:99}]}},onLoad:function(){this.getRandomData()},onReachBottom:function(){this.getRandomData()},methods:{tabChange:function(t){this.current=t},getRandomData:function(){this.loadStatus="loading";for(var t=0;t<10;t++){var e=this.$tn.number.randomInt(0,this.data.length-1),n=JSON.parse(JSON.stringify(this.data[e])),i=this.getPrice(n.price);n.id=this.$tn.uuid(),n.priceInteger=i[0],n.priceDecimal=i[1],this.list.push(n)}},handleWaterFallFinish:function(){this.loadStatus="loadmore"},getPrice:function(t){var e=String(t);return-1!==e.indexOf(".")?e.split("."):[e,"00"]},navTuniaoUI:function(t){uni.navigateTo({url:"/pages/index/index"})}}};e.default=o},caa0:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("75e2").default,tnTabs:n("3c2b").default,tnScrollList:n("d085").default,tnWaterfall:n("3969").default,tnLazyLoad:n("fcba").default,tnLoadMore:n("c8b6").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-prefer tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{isBack:!1,bottomShadow:!1,backgroundColor:"#FFFFFF"}},[n("v-uni-view",{staticStyle:{width:"72vw",overflow:"hidden"}},[n("tn-tabs",{attrs:{list:t.scrollList,current:t.current,activeColor:"#000",bold:"true",fontSize:36},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"tn-padding-top-sm tn-padding-bottom-sm",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("tn-scroll-list",{attrs:{indicatorWidth:100,indicatorBarWidth:30,indicatorColor:"#FFE2D9",indicatorActiveColor:"#FF7043"}},[n("v-uni-view",{staticClass:"tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top"},[t._l(t.historyData,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"tn-flex-1 tn-padding-sm tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur",class:["tn-bg-"+e.color+"--light tn-color-"+e.color]},[n("v-uni-view",{class:["tn-icon-"+e.icon]})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-sm tn-text-center tn-margin-top-sm"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v(t._s(e.title))])],1)],1)],1)]}))],2)],1)],1),n("v-uni-view",{},[n("v-uni-view",{staticClass:"nav_title--wrap"},[n("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-15"},[n("v-uni-text",{staticClass:"tn-icon-relation tn-padding-right-sm tn-text-xxl"}),n("v-uni-text",{staticClass:"tn-text-xl"},[t._v("好物推荐 · 商品优选")]),n("v-uni-text",{staticClass:"tn-icon-relation tn-padding-left-sm tn-text-xxl"})],1)],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"tn-padding"},[n("tn-waterfall",{ref:"waterfall",on:{finish:function(e){arguments[0]=e=t.$handleEvent(e),t.handleWaterFallFinish.apply(void 0,arguments)}},scopedSlots:t._u([{key:"left",fn:function(e){var i=e.leftList;return t._l(i,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"product__item"},[n("v-uni-view",{staticClass:"item__image"},[n("tn-lazy-load",{attrs:{threshold:-450,height:"100%",image:e.mainImage,index:e.id,imgMode:"widthFix"}})],1),n("v-uni-view",{staticClass:"item__data"},[n("v-uni-view",{staticClass:"item__title-container"},[e.newProduct?n("v-uni-view",{staticClass:"item__store-type tn-cool-bg-color-8"},[t._v("图鸟社区")]):1===e.storeType?n("v-uni-view",{staticClass:"item__store-type tn-cool-bg-color-1"},[t._v("自营")]):t._e(),n("v-uni-text",{staticClass:"item__title"},[t._v(t._s(e.title))])],1),e.tags&&e.tags.length>0?n("v-uni-view",{staticClass:"item__tags-container"},t._l(e.tags,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item__tag"},[t._v(t._s(e))])})),1):t._e(),n("v-uni-view",{staticClass:"item__price-container"},[n("v-uni-text",{staticClass:"item__price--unit"},[t._v("￥")]),n("v-uni-text",{staticClass:"item__price--integer"},[t._v(t._s(e.priceInteger))]),n("v-uni-text",{staticClass:"item__price--dot"},[t._v(".")]),n("v-uni-text",{staticClass:"item__price--decimal"},[t._v(t._s(e.priceDecimal))])],1)],1)],1)}))}},{key:"right",fn:function(e){var i=e.rightList;return t._l(i,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"product__item"},[n("v-uni-view",{staticClass:"item__image"},[n("tn-lazy-load",{attrs:{threshold:-450,height:"100%",image:e.mainImage,index:e.id,imgMode:"widthFix"}})],1),n("v-uni-view",{staticClass:"item__data"},[n("v-uni-view",{staticClass:"item__title-container"},[1===e.storeType?n("v-uni-view",{staticClass:"item__store-type tn-cool-bg-color-1"},[t._v("自营")]):t._e(),n("v-uni-text",{staticClass:"item__title"},[t._v(t._s(e.title))])],1),e.tags&&e.tags.length>0?n("v-uni-view",{staticClass:"item__tags-container"},t._l(e.tags,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item__tag"},[t._v(t._s(e))])})),1):t._e(),n("v-uni-view",{staticClass:"item__price-container"},[n("v-uni-text",{staticClass:"item__price--unit"},[t._v("￥")]),n("v-uni-text",{staticClass:"item__price--integer"},[t._v(t._s(e.priceInteger))]),n("v-uni-text",{staticClass:"item__price--dot"},[t._v(".")]),n("v-uni-text",{staticClass:"item__price--decimal"},[t._v(t._s(e.priceDecimal))])],1)],1)],1)}))}}]),model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),n("tn-load-more",{attrs:{status:t.loadStatus}}),n("v-uni-view",{staticClass:"tabbar footerfixed"},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/home_tn.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("首页")])],1),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/information_tn.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("圈子")])],1),n("v-uni-view",{staticClass:"action bar-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"nav-index-button"},[n("v-uni-view",{staticClass:"nav-index-button__content"},[n("v-uni-view",{staticClass:"nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"bar-circle"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/bless/bless-tiger.png"}})],1)],1)],1),n("v-uni-view",{staticClass:"nav-index-button__meteor"},[n("v-uni-view",{staticClass:"nav-index-button__meteor__wrapper"},t._l(6,(function(t,e){return n("v-uni-view",{key:e,staticClass:"nav-index-button__meteor__item",style:{transform:"rotateX("+(30*e-60)+"deg) rotateZ("+(30*e-60)+"deg)"}},[n("v-uni-view",{staticClass:"nav-index-button__meteor__item--pic"})],1)})),1)],1)],1)],1),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/case_tnnew.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("优选")])],1),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/my_tn.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("我的")])],1)],1),n("v-uni-view",{staticClass:"tn-padding-xl tn-margin-bottom"}),n("nav-index-button")],1)],1)},r=[]},cb7f:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-waterfall-class tn-waterfall"},[e("v-uni-view",{staticClass:"tn-waterfall__column",attrs:{id:"tn-waterfall-left"}},[this._t("left",null,{leftList:this.leftList})],2),e("v-uni-view",{staticClass:"tn-waterfall__column",attrs:{id:"tn-waterfall-right"}},[this._t("right",null,{rightList:this.rightList})],2)],1)},a=[]},d085:function(t,e,n){"use strict";n.r(e);var i=n("6553"),a=n("9b67");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("35a2");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"6f1316ae",null,!1,i["a"],void 0);e["default"]=s.exports},dfb2:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-waterfall[data-v-36aa842e]{display:flex;flex-direction:row;align-items:flex-start}.tn-waterfall__column[data-v-36aa842e]{display:flex;flex-direction:column;flex:1;height:auto}',""]),t.exports=e},e47b:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"tn-scroll-list",props:{indicator:{type:Boolean,default:!0},indicatorWidth:{type:[String,Number],default:50},indicatorBarWidth:{type:[String,Number],default:20},indicatorColor:{type:String,default:"#E6E6E6"},indicatorActiveColor:{type:String,default:"#01BEFF"},indicatorStyle:{type:Object,default:function(){return{}}}},computed:{barStyle:function(){var t={},e=this.scrollInfo.scrollLeft,n=this.scrollInfo.scrollWidth,i=uni.upx2px(this.indicatorWidth)-uni.upx2px(this.indicatorBarWidth),a=e/(n-this.scrollWidth)*i;return t.transform="translateX(".concat(a,"px)"),t.width="".concat(this.indicatorBarWidth,"rpx"),t.backgroundColor=this.indicatorActiveColor,t},lineStyle:function(){var t={};return t.width="".concat(this.indicatorWidth,"rpx"),t.backgroundColor=this.indicatorColor,t}},data:function(){return{scrollInfo:{scrollLeft:0,scrollWidth:0},scrollWidth:0}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){this.getComponentWidth()},scrollHandler:function(t){this.scrollInfo=t.detail},scrollToUpperHandler:function(){this.$emit("left"),this.scrollInfo.scrollLeft=0},scrollToLowerHandler:function(){this.$emit("right")},getComponentWidth:function(){var t=this;this._tGetRect(".tn-scroll-list").then((function(e){e?t.scrollWidth=e.width:setTimeout((function(){t.getComponentWidth()}),10)}))}}};e.default=i},e9e87:function(t,e,n){var i=n("83f5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7c4bf067",i,!0,{sourceMap:!1,shadowMode:!1})},edeb:function(t,e,n){"use strict";n.r(e);var i=n("c9fa"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);