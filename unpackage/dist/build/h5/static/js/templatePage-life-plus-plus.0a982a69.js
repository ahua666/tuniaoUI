(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-life-plus-plus"],{"5e22":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-1673ed45]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-1673ed45]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-1673ed45]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 间隔线 start*/.tn-strip-bottom-min[data-v-1673ed45]{width:100%;border-bottom:%?1?% solid #f8f9fb}.tn-strip-bottom[data-v-1673ed45]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.8)}\r\n/* 间隔线 end*/\r\n/* 页面阴影 start*/.tn-bdhook-shadow[data-v-1673ed45]{border-radius:%?15?%;box-shadow:%?0?% %?0?% %?50?% %?0?% rgba(0,0,0,.07)}\r\n/* 内容 开始 */.plus-box[data-v-1673ed45]{counter-reset:index;padding:0;max-width:100vw;background-image:linear-gradient(0deg,#ffa726,#2de8bd);background-attachment:fixed;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.plus-text[data-v-1673ed45]{counter-increment:index;display:initial;align-items:center;padding:12px 0;box-sizing:border-box}.plus-text[data-v-1673ed45]::before{content:counters(index,".",decimal-leading-zero);font-size:1.5rem;font-weight:700;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";font-variant-numeric:tabular-nums;align-self:flex-start}',""]),t.exports=e},"62dd":function(t,e,n){var i=n("7ec2").default,r=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return r(i().mark((function e(){var n,r,a;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:a=e.sent,n=a.customBarHeight,r=a.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",r),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"6bde":function(t,e,n){var i=n("5e22");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("6512e1c7",i,!0,{sourceMap:!1,shadowMode:!1})},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function r(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function v(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(B){v=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var r=e&&e.prototype instanceof x?e:x,a=Object.create(r.prototype),s=new j(i||[]);return o(a,"_invoke",{value:k(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(B){return{type:"throw",arg:B}}}e.wrap=d;var p={};function x(){}function h(){}function m(){}var w={};v(w,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(I([])));b&&b!==n&&a.call(b,u)&&(w=b);var _=m.prototype=x.prototype=Object.create(w);function y(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;o(this,"_invoke",{value:function(r,o){function s(){return new e((function(n,s){(function n(r,o,s,u){var c=f(t[r],t,o);if("throw"!==c.type){var l=c.arg,v=l.value;return v&&"object"==i(v)&&a.call(v,"__await")?e.resolve(v.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(v).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)})(r,o,n,s)}))}return n=n?n.then(s,s):s()}})}function k(t,e,n){var i="suspendedStart";return function(r,a){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw a;return P()}for(n.method=r,n.arg=a;;){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var u=f(t,e,n);if("normal"===u.type){if(i=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=f(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m,o(_,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:h,configurable:!0}),h.displayName=v(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,v(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},y(C.prototype),v(C.prototype,c,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,i,r,a){void 0===a&&(a=Promise);var o=new C(d(t,n,i,r),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(_),v(_,l,"Generator"),v(_,u,(function(){return this})),v(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return o.type="throw",o.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),u=a.call(r,"finallyLoc");if(s&&u){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},"9ed2":function(t,e,n){"use strict";n.r(e);var i=n("af60"),r=n("ee9e");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("fb48");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"1673ed45",null,!1,i["a"],void 0);e["default"]=s.exports},af60:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("75e2").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-plus"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("v-uni-view",{staticClass:"tn-bdhook-shadow",staticStyle:{"border-radius":"10rpx",overflow:"hidden",margin:"50rpx 30rpx 30rpx 30rpx"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-padding tn-text-center tn-color-white",staticStyle:{background:"linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C)"}},[n("v-uni-view",{staticClass:"tn-flex-1"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("开源项目")]),n("v-uni-view",{staticClass:"tn-text-sm"},[t._v("不喜勿喷")])],1),n("v-uni-view",{staticClass:"tn-flex-1"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("普通用户")]),n("v-uni-view",{staticClass:"tn-text-sm"},[t._v("免费开源")])],1),n("v-uni-view",{staticClass:"tn-flex-1"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-lg"},[t._v("至尊VIP")]),n("v-uni-view",{staticClass:"tn-text-sm"},[t._v("会员福利")])],1)],1),t._l(t.setList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-strip-bottom-min tn-padding-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tn(e.url)}}},[n("v-uni-view",{staticClass:"tn-flex-1 tn-text-center"},[n("v-uni-view",{},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"tn-flex-1"},[n("v-uni-view",{},[t._v(t._s(e.common))]),n("v-uni-view",{},[t._v(t._s(e.common2))])],1),n("v-uni-view",{staticClass:"tn-flex-1"},[n("v-uni-view",{},[t._v(t._s(e.vip))]),n("v-uni-view",{},[t._v(t._s(e.vip2))])],1)],1)}))],2)],1),n("v-uni-view",{staticClass:"tn-text-center tn-margin tn-text-lg plus-box",staticStyle:{"padding-top":"60rpx"}},[n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("图鸟UI小程序，免费开源可商用")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（会员有更多福利鸭）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("图鸟UI Plus会员，初步定价")]),n("v-uni-view",{staticClass:"tn-text-bold"},[n("v-uni-text",{staticClass:"tn-text-xl-xxl"},[t._v("699￥")]),n("v-uni-text",{staticClass:"tn-text-xl"},[t._v("1299￥")]),n("v-uni-text",{staticStyle:{margin:"-10rpx 10rpx 0 -115rpx"}},[t._v("————")]),n("v-uni-text",{staticClass:"tn-text-xl-xxl"},[t._v("/")]),n("v-uni-text",{staticClass:"tn-text-xxl tn-padding-left-sm"},[t._v("终身")])],1),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（大约等于2个酷炫前端页面价格💕）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("不断更新酷炫组件以及页面模板")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（偶尔恰饭时常更新啦）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("请勿转售，转售是会慢慢追究法律责任的")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（毕竟前端开发圈子就那么小）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("图鸟北北，微信号："),n("v-uni-text",{staticClass:"tn-text-bold tn-text-xxl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyWechat.apply(void 0,arguments)}}},[t._v("tnkewo")])],1),n("v-uni-view",{},[t._v("（如需入群，可备注：进微信群）")]),n("v-uni-view",{},[t._v("（如需合作，可备注：商业合作）")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（如需会员，可备注：咨询会员）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("入群须知，群内禁止黄赌毒+广告+吵架")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（可进群与群友合作，拓展人脉）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("开源希望能得到理解")]),n("v-uni-view",{},[t._v("（做开源本身就不是为了赚取）")]),n("v-uni-view",{},[t._v("（毕竟还不如多找几个会员进行项目合作）")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（会员费用仅垫付服务器+工作室支出）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("也希望大家能喜欢这个项目")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（不喜勿喷，北北还在努力成长）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("期待你的5星(⭐⭐⭐⭐⭐)好评")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（尽管图鸟UI不是我最完美的作品）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("使用手册 + 图片素材 + 意见反馈 + Bug提交")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyYuque.apply(void 0,arguments)}}},[t._v("（https://www.tuniaokj.com/）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("项目正式开始于2021年10月，12月30开源公测，2022年1月30上线正式版")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（期间断断续续的在接单恰饭）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("灵感来源于我的上一个原创项目")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("（项目初衷是拓展业务，寻求商务合作）")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-xxl"},[n("v-uni-text",{staticClass:"tn-icon-vip-fill tn-padding-right-xs"}),t._v("会员特权"),n("v-uni-text",{staticClass:"tn-icon-vip-fill tn-padding-left-xs"})],1),n("v-uni-view",{},[t._v("①会员尊享更多酷炫模板，模板持续更新")]),n("v-uni-view",{},[t._v("②优先响应会员页面模板需求，icon需求")]),n("v-uni-view",{},[t._v("③会员版本更新，在会员群进行代码发送")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("④有什么好的建议，可以提出来，多沟通")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold tn-text-xxl"},[n("v-uni-text",{staticClass:"tn-icon-moon-fill tn-padding-right-xs"}),t._v("关于作者"),n("v-uni-text",{staticClass:"tn-icon-moon-fill tn-padding-left-xs"})],1),n("v-uni-view",{},[t._v("蔡北北，95年，广州")]),n("v-uni-view",{},[t._v("浮夸UI设计")]),n("v-uni-view",{},[t._v("菜鸡软件开发")]),n("v-uni-view",{},[t._v("祭天产品经理")]),n("v-uni-view",{},[t._v("背锅项目经理")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"},[t._v("努力往CTO去发展")])],1),n("v-uni-view",{staticClass:"plus-text"},[n("v-uni-view",{staticClass:"tn-text-bold"},[t._v("图鸟小小团队感恩你的支持")]),n("v-uni-view",{staticClass:"tn-margin-bottom-xl"})],1)],1),n("v-uni-view",{staticClass:"tn-padding-bottom"})],1)},a=[]},c973:function(t,e,n){function i(t,e,n,i,r,a,o){try{var s=t[a](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(i,r)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,u,"next",t)}function u(t){i(o,r,a,s,u,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},dac9:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("62dd")),a={name:"TemplatePlus",mixins:[r.default],data:function(){return{setList:[{title:"图鸟UI",title2:"UI组件",common:"免费商用",common2:"插件市场获取",vip:"免费商用",vip2:"会员群直接获取"},{title:"图鸟VUE3 ",title2:"UI组件",common:"免费商用",common2:"插件市场获取",vip:"免费商用",vip2:"会员群直接获取"},{title:"圈子博客",title2:"纯前端模板",common:"免费商用",common2:"插件市场获取",vip:"免费商用",vip2:"会员群直接获取"},{title:"简约商圈",title2:"纯前端模板",common:"免费商用",common2:"插件市场获取",vip:"免费商用",vip2:"会员群直接获取"},{title:"凶姐壁纸",title2:"纯前端模板",common:"免费商用",common2:"插件市场获取",vip:"免费商用",vip2:"会员群直接获取"},{title:"无名小程序",title2:"前后端项目",common:"无",common2:"",vip:"会员专属",vip2:"前后端开发ing"}]}},methods:{copyYuque:function(){uni.setClipboardData({data:"https://www.tuniaokj.com/"})},copyWechat:function(){uni.setClipboardData({data:"tnkewo"})}}};e.default=a},ee9e:function(t,e,n){"use strict";n.r(e);var i=n("dac9"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},fb48:function(t,e,n){"use strict";var i=n("6bde"),r=n.n(i);r.a}}]);