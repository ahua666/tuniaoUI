(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-animate-hollow-hollow"],{3207:function(t,e,n){var r=n("eda2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("20cf9368",r,!0,{sourceMap:!1,shadowMode:!1})},"4c10":function(t,e,n){"use strict";n.r(e);var r=n("8971"),i=n("85c4");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("bfdd");var o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"8c9c1c6c",null,!1,r["a"],void 0);e["default"]=c.exports},"62dd":function(t,e,n){var r=n("7ec2").default,i=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(r().mark((function e(){var n,i,a;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:a=e.sent,n=a.customBarHeight,i=a.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",i),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"7a8a":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("62dd")),a={name:"TemplateHollow",mixins:[i.default],data:function(){return{}},methods:{}};e.default=a},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function i(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(T){d=function(t,e,n){return t[e]=n}}function v(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=v;var p={};function h(){}function g(){}function m(){}var b={};d(b,s,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&a.call(x,s)&&(b=x);var y=m.prototype=h.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;o(this,"_invoke",{value:function(i,o){function c(){return new e((function(n,c){(function n(i,o,c,s){var u=f(t[i],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==r(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)})(i,o,n,c)}))}return n=n?n.then(c,c):c()}})}function C(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var c=j(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return g.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=d(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,d(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},_(k.prototype),d(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new k(v(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(y),d(y,l,"Generator"),d(y,s,(function(){return this})),d(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},"85c4":function(t,e,n){"use strict";n.r(e);var r=n("7a8a"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},8971:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("75e2").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-hollow"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px;margin-top:250rpx"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-margin-xl"},[n("v-uni-view",{staticClass:"justify-content-item",staticStyle:{"margin-top":"50rpx"}},[n("v-uni-view",{staticClass:"tn-radius tn-margin-bottom-xl"},[n("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg')"}},[n("v-uni-view",{staticClass:"image-hollow"})],1),n("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("Jaylen")])],1),n("v-uni-view",{staticClass:"tn-radius tn-margin-bottom"},[n("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg')"}},[n("v-uni-view",{staticClass:"image-hollow"})],1),n("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("浅浅遇")])],1)],1),n("v-uni-view",{staticClass:"justify-content-item"},[n("v-uni-view",{staticClass:"tn-radius tn-margin-bottom-xl"},[n("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg')"}},[n("v-uni-view",{staticClass:"image-hollow"})],1),n("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("可我会像")])],1),n("v-uni-view",{staticClass:"tn-radius tn-margin-bottom"},[n("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg')"}},[n("v-uni-view",{staticClass:"image-hollow"})],1),n("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("北北同学")])],1)],1),n("v-uni-view",{staticClass:"justify-content-item",staticStyle:{"margin-top":"50rpx"}},[n("v-uni-view",{staticClass:"tn-radius tn-margin-bottom-xl"},[n("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg')"}},[n("v-uni-view",{staticClass:"image-hollow"})],1),n("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("福哥")])],1),n("v-uni-view",{staticClass:"tn-radius tn-margin-bottom"},[n("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg')"}},[n("v-uni-view",{staticClass:"image-hollow"})],1),n("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("锋哥")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"bottom-backgroup"},[n("v-uni-image",{staticClass:"backgroud-image",attrs:{src:"https://tnuiimage.tnkjapp.com/animate/hollow.jpg",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"hollow"},[n("v-uni-view",{staticClass:"tn-text-xxl"},[n("v-uni-text",{},[t._v("Hi，图鸟的小伙伴")])],1),n("v-uni-view",{staticClass:"tn-text-xl tn-padding-top"},[t._v("技术的友情，有你真好")]),n("v-uni-view",{staticClass:"tn-text-xl tn-padding-top"},[t._v("TnUI，感谢一路陪伴与支持")])],1)],1)},a=[]},bfdd:function(t,e,n){"use strict";var r=n("3207"),i=n.n(r);i.a},c973:function(t,e,n){function r(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},eda2:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-8c9c1c6c]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-8c9c1c6c]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-8c9c1c6c]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 背景图 start */.bottom-backgroup[data-v-8c9c1c6c]{height:%?700?%;z-index:-1}.bottom-backgroup .backgroud-image[data-v-8c9c1c6c]{border-radius:%?60?% %?60?% 0 0;width:100%;height:%?3373?%}\r\n/* 背景图 end */\r\n/* 镂空 start*/.hollow[data-v-8c9c1c6c]{position:fixed;text-align:center;width:87%;padding:%?30?%;margin:0 6.5%;top:%?180?%;font-weight:700;z-index:1000;background:hsla(0,0%,100%,.95);color:#000;border-radius:%?20?%;\r\n  /* overlay; difference;lighten;hue;这些都是参数值，但东东觉得lighten好看点*/mix-blend-mode:lighten}\r\n/* 效果布局 start*/.image-hollow[data-v-8c9c1c6c]{width:%?200?%;height:%?400?%;font-size:%?40?%;font-weight:300;position:relative}.image-pic[data-v-8c9c1c6c]{height:100%;background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?10?%}',""]),t.exports=e}}]);