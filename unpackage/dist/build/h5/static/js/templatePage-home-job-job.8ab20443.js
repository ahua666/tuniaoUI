(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-home-job-job"],{"0655":function(t,e,n){var i=n("7128");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("37b91bb2",i,!0,{sourceMap:!1,shadowMode:!1})},"090b":function(t,e,n){var i=n("93b9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("1349402e",i,!0,{sourceMap:!1,shadowMode:!1})},"2e86":function(t,e,n){"use strict";n.r(e);var i=n("331e"),r=n("5019");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("6c6f");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"e58dbdec",null,!1,i["a"],void 0);e["default"]=s.exports},"331e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav-index-button",style:{bottom:t.bottom+"rpx",right:t.right+"rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navIndex.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"nav-index-button__content"},[n("v-uni-view",{staticClass:"nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-cool-bg-color-7"},[n("v-uni-view",{staticClass:"tn-icon-home-vertical-fill"})],1)],1),n("v-uni-view",{staticClass:"nav-index-button__meteor"},[n("v-uni-view",{staticClass:"nav-index-button__meteor__wrapper"},t._l(6,(function(t,e){return n("v-uni-view",{key:e,staticClass:"nav-index-button__meteor__item",style:{transform:"rotateX("+(30*e-60)+"deg) rotateZ("+(30*e-60)+"deg)"}},[n("v-uni-view",{staticClass:"nav-index-button__meteor__item--pic"})],1)})),1)],1)],1)},r=[]},3839:function(t,e,n){var i=n("9558");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("0a965ebd",i,!0,{sourceMap:!1,shadowMode:!1})},"402b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975");var i={name:"tn-swiper",props:{list:{type:Array,default:function(){return[]}},current:{type:Number,default:0},height:{type:Number,default:250},backgroundColor:{type:String,default:"transparent"},name:{type:String,default:"image"},title:{type:Boolean,default:!1},titleName:{type:String,default:"title"},titleStyle:{type:Object,default:function(){return{}}},radius:{type:Number,default:8},mode:{type:String,default:"round"},indicatorPosition:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousSpacing:{type:Number,default:50},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},duration:{type:Number,default:500},circular:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"}},computed:{backgroundColorStyle:function(){return this.$tn.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$tn.color.getBackgroundColorInternalClass(this.backgroundColor)},swiperStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.height&&(t.height=this.height+"rpx"),t},indicatorStyle:function(){var t={};return"topLeft"!==this.indicatorPosition&&"bottomLeft"!==this.indicatorPosition||(t.justifyContent="flex-start"),"topCenter"!==this.indicatorPosition&&"bottomCenter"!==this.indicatorPosition||(t.justifyContent="center"),"topRight"!==this.indicatorPosition&&"bottomRight"!==this.indicatorPosition||(t.justifyContent="flex-end"),["topLeft","topCenter","topRight"].indexOf(this.indicatorPosition)>=0?(t.top="12rpx",t.bottom="auto"):(t.top="auto",t.bottom="12rpx"),t.padding="0 ".concat(this.effect3d?"74rpx":"24rpx"),t},swiperTitleStyle:function(){var t={};return"none"!==this.mode&&""!==this.mode||(t.paddingBottom="12rpx"),["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"===this.mode?t.paddingBottom="60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"!==this.mode?t.paddingBottom="40rpx":t.paddingBottom="12rpx",t=Object.assign(t,this.titleStyle),t}},data:function(){return{swiperIndex:this.current}},watch:{list:function(t,e){t.length!==e.length&&(this.swiperIndex=0)},current:function(t){this.swiperIndex=t}},methods:{click:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.swiperIndex=e,this.$emit("change",e)}}};e.default=i},"4c15":function(t,e,n){"use strict";n.r(e);var i=n("e977"),r=n("503d");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("7df2");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"518e09e4",null,!1,i["a"],void 0);e["default"]=s.exports},"4c59":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("62dd")),a=i(n("2e86")),o={name:"TemplateJob",mixins:[r.default],components:{NavIndexButton:a.default},data:function(){return{banner:[{image:"https://tnuiimage.tnkjapp.com/swiper/tnbanner1.jpg"},{image:"https://tnuiimage.tnkjapp.com/swiper/tnbanner2.jpg"},{image:"https://tnuiimage.tnkjapp.com/swiper/tnbanner3.jpg"},{image:"https://tnuiimage.tnkjapp.com/swiper/tnbanner4.jpg"}],tuniaoData:[{title:"职位推荐",icon:"praise",color:"purplered",value:"32"},{title:"课程专区",icon:"discover",color:"green",value:"65"},{title:"精选专题",icon:"topics",color:"orange",value:"26"},{title:"在线简历",icon:"honor",color:"indigo",value:"6"}],icons:[{icon:"shop",title:"电商"},{icon:"video",title:"直播"},{icon:"company",title:"建筑"},{icon:"computer",title:"互联网"},{icon:"focus",title:"猎头"},{icon:"sing",title:"音乐"},{icon:"code",title:"软件开发"},{icon:"medical",title:"医疗"},{icon:"biology",title:"生物"},{icon:"pharmacy",title:"制药"},{icon:"chemistry",title:"化学"},{icon:"creative",title:"教师"},{icon:"gloves",title:"行政文秘"},{icon:"caring",title:"通信技术"},{icon:"refund",title:"外贸"},{icon:"level",title:"土木"},{icon:"deploy",title:"机械"},{icon:"server",title:"电气"},{icon:"hardware",title:"电子"},{icon:"group-circle",title:"化工"},{icon:"cube",title:"材料"},{icon:"safe",title:"保险"},{icon:"coupon",title:"证券"},{icon:"funds",title:"银行"},{icon:"map",title:"会展"},{icon:"service",title:"客服"},{icon:"trophy",title:"销售"},{icon:"image-text",title:"编辑运营"},{icon:"brand",title:"投行"},{icon:"trusty",title:"法务"},{icon:"comment",title:"咨询"},{icon:"logistics",title:"快递物流"},{icon:"moon",title:"艺术设计"},{icon:"bankcard",title:"财务"},{icon:"trust",title:"人力"},{icon:"flag",title:"市场营销"},{icon:"signpost",title:"其他"}]}},methods:{}};e.default=o},5019:function(t,e,n){"use strict";n.r(e);var i=n("68a1"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"503d":function(t,e,n){"use strict";n.r(e);var i=n("4c59"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"5b73":function(t,e,n){"use strict";var i=n("090b"),r=n.n(i);r.a},"5ec3":function(t,e,n){"use strict";n.r(e);var i=n("402b"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"62dd":function(t,e,n){var i=n("7ec2").default,r=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return r(i().mark((function e(){var n,r,a;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:a=e.sent,n=a.customBarHeight,r=a.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",r),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"68a1":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index/index"}},methods:{navIndex:function(){var t=getCurrentPages();if(t&&t.length>0){var e=this.indexPath||"/pages/index/index",n=t[0];1!=t.length||n.route&&n.route==e.substring(1,e.length)?uni.navigateBack({delta:1}):uni.reLaunch({url:e})}else uni.reLaunch({url:indexPath})}}};e.default=i},"6c6f":function(t,e,n){"use strict";var i=n("3839"),r=n.n(i);r.a},7128:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-518e09e4]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-518e09e4]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-518e09e4]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 自定义导航栏内容 start */.custom-nav[data-v-518e09e4]{height:100%}.custom-nav__back[data-v-518e09e4]{margin:auto %?5?%;font-size:%?40?%;margin-right:%?10?%;margin-left:%?30?%;flex-basis:5%}.custom-nav__search[data-v-518e09e4]{flex-basis:60%;width:100%;height:100%}.custom-nav__search__box[data-v-518e09e4]{width:100%;height:70%;padding:%?10?% 0;margin:0 %?30?%;border-radius:%?60?% %?60?% 0 %?60?%;font-size:%?24?%;background-color:hsla(0,0%,100%,.2)}.custom-nav__search__icon[data-v-518e09e4]{padding-right:%?10?%;margin-left:%?20?%;font-size:%?30?%}\r\n/* 自定义导航栏内容 end */\r\n/*logo start */.logo-image[data-v-518e09e4]{width:%?65?%;height:%?65?%;position:relative}.logo-pic[data-v-518e09e4]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:50%}\r\n/* 信息展示 start */.tn-info__container[data-v-518e09e4]{margin-top:%?40?%}.tn-info__item[data-v-518e09e4]{width:48%;margin:%?15?% %?0?%;padding:%?38?% %?28?%;border-radius:%?10?%}.tn-info__item__left--icon[data-v-518e09e4]{width:%?80?%;height:%?80?%;border-radius:50%;font-size:%?40?%;margin-right:%?20?%;position:relative;z-index:1}.tn-info__item__left--icon[data-v-518e09e4]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg3.png)}.tn-info__item__left__content[data-v-518e09e4]{font-size:%?30?%}.tn-info__item__left__content--data[data-v-518e09e4]{margin-top:%?5?%;font-weight:700}.tn-info__item__right--icon[data-v-518e09e4]{font-size:%?30?%;opacity:.5}.job-shadow[data-v-518e09e4]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.07);border-radius:%?20?%}\r\n/* 信息展示 end */\r\n/* 图标容器16 start */.tn-cool-color-icon16[data-v-518e09e4]{-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-fill-color:transparent}.icon16__item[data-v-518e09e4]{background-color:#fff;border-radius:%?10?%;padding:%?0?%;margin:%?0?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon16__item--icon[data-v-518e09e4]{width:%?100?%;height:%?100?%;font-size:%?70?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}\r\n/* 图标容器16 end */\r\n/* 底部tabbar start*/.footerfixed[data-v-518e09e4]{position:fixed;width:100%;bottom:0;z-index:999;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.tabbar[data-v-518e09e4]{display:flex;align-items:center;min-height:%?110?%;justify-content:space-between;padding:0;height:calc(%?110?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.tabbar .action[data-v-518e09e4]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.tabbar .action .bar-icon[data-v-518e09e4]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-518e09e4]{width:%?50?%;height:%?50?%;display:inline-block}.tabbar .action .bar-circle[data-v-518e09e4]{position:relative;display:block;margin:%?-30?% auto %?20?%;text-align:center;font-size:%?52?%;line-height:%?90?%;background-color:#e72f8c;width:%?90?%!important;height:%?90?%!important;overflow:hidden;border-radius:50%;box-shadow:%?0?% %?0?% %?20?% %?0?% rgba(231,47,140,.5)}.tabbar .action .bar-circle uni-image[data-v-518e09e4]{width:%?60?%;height:%?60?%;display:inline-block;margin:%?15?% auto %?15?%}',""]),t.exports=e},"7df2":function(t,e,n){"use strict";var i=n("0655"),r=n.n(i);r.a},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function r(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(E){d=function(t,e,n){return t[e]=n}}function f(t,e,n,i){var r=e&&e.prototype instanceof h?e:h,a=Object.create(r.prototype),s=new P(i||[]);return o(a,"_invoke",{value:C(t,n,s)}),a}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}e.wrap=f;var p={};function h(){}function b(){}function g(){}var m={};d(m,c,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==n&&a.call(w,c)&&(m=w);var x=g.prototype=h.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;o(this,"_invoke",{value:function(r,o){function s(){return new e((function(n,s){(function n(r,o,s,c){var l=v(t[r],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)})(r,o,n,s)}))}return n=n?n.then(s,s):s()}})}function C(t,e,n){var i="suspendedStart";return function(r,a){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw a;return z()}for(n.method=r,n.arg=a;;){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=v(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function j(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=v(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:z}}function z(){return{value:void 0,done:!0}}return b.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=d(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,d(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},y(k.prototype),d(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,i,r,a){void 0===a&&(a=Promise);var o=new k(f(t,n,i,r),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(x),d(x,u,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return o.type="throw",o.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},"93b9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-swiper__wrap[data-v-4ef6b447]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.tn-swiper__item[data-v-4ef6b447]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.tn-swiper__item__image[data-v-4ef6b447]{width:100%;height:100%;will-change:transform;display:block;pointer-events:none}.tn-swiper__item__image__wrap[data-v-4ef6b447]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.tn-swiper__item__image--scale[data-v-4ef6b447]{-webkit-transform-origin:center center;transform-origin:center center}.tn-swiper__item__title[data-v-4ef6b447]{width:100%;position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.8)}.tn-swiper__indicator[data-v-4ef6b447]{padding:0 %?24?%;position:absolute;display:flex;flex-direction:row;width:100%;z-index:1}.tn-swiper__indicator__rect[data-v-4ef6b447]{width:%?26?%;height:%?8?%;background-color:rgba(0,0,0,.3);transition:all .5s}.tn-swiper__indicator__rect--active[data-v-4ef6b447]{background-color:hsla(0,0%,100%,.8)}.tn-swiper__indicator__dot[data-v-4ef6b447]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;background-color:rgba(0,0,0,.3);transition:all .5s}.tn-swiper__indicator__dot--active[data-v-4ef6b447]{background-color:hsla(0,0%,100%,.8)}.tn-swiper__indicator__round[data-v-4ef6b447]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;background-color:rgba(0,0,0,.3);transition:all .5s}.tn-swiper__indicator__round--active[data-v-4ef6b447]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.tn-swiper__indicator__number[data-v-4ef6b447]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);color:hsla(0,0%,100%,.8);border-radius:%?100?%;font-size:%?26?%}',""]),t.exports=e},9558:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.nav-index-button[data-v-e58dbdec]{position:fixed;-webkit-animation:suspension-data-v-e58dbdec 3s ease-in-out infinite;animation:suspension-data-v-e58dbdec 3s ease-in-out infinite;z-index:999999}.nav-index-button__content[data-v-e58dbdec]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-index-button__content--icon[data-v-e58dbdec]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.nav-index-button__content--icon[data-v-e58dbdec]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png)}.nav-index-button__meteor[data-v-e58dbdec]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.nav-index-button__meteor__wrapper[data-v-e58dbdec]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-e58dbdec 20s linear infinite;animation:spin-data-v-e58dbdec 20s linear infinite}.nav-index-button__meteor__item[data-v-e58dbdec]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.nav-index-button__meteor__item--pic[data-v-e58dbdec]{display:block;width:100%;height:100%;background:url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc3.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-e58dbdec 4s linear infinite;animation:arc-data-v-e58dbdec 4s linear infinite}@-webkit-keyframes suspension-data-v-e58dbdec{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@keyframes suspension-data-v-e58dbdec{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@-webkit-keyframes spin-data-v-e58dbdec{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-e58dbdec{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-e58dbdec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-e58dbdec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},a9c2:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-swiper__wrap-class tn-swiper__wrap",style:{borderRadius:t.radius+"rpx"}},[n("v-uni-swiper",{staticClass:"tn-swiper",class:[t.backgroundColorClass],style:[t.swiperStyle],attrs:{current:t.current,interval:t.interval,circular:t.circular,autoplay:t.autoplay,duration:t.duration,"previous-margin":t.effect3d?t.effect3dPreviousSpacing+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousSpacing+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"tn-swiper__item"},[n("v-uni-view",{staticClass:"tn-swiper__item__image__wrap",class:[t.swiperIndex!==i?"tn-swiper__item__image--scale":""],style:{borderRadius:t.radius+"rpx",transform:t.effect3d&&t.swiperIndex!==i?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.swiperIndex!==i?"0 20rpx":0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(i)}}},[n("v-uni-image",{staticClass:"tn-swiper__item__image",attrs:{src:e[t.name]||e,mode:t.imageMode}}),t.title&&e[t.titleName]?n("v-uni-view",{staticClass:"tn-swiper__item__title tn-text-ellipsis",style:[t.titleStyle]},[t._v(t._s(e[t.titleName]))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"tn-swiper__indicator",style:[t.indicatorStyle]},["rect"===t.mode?t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tn-swiper__indicator__rect",class:{"tn-swiper__indicator__rect--active":t.swiperIndex===i}})})):t._e(),"dot"===t.mode?t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tn-swiper__indicator__dot",class:{"tn-swiper__indicator__dot--active":t.swiperIndex===i}})})):t._e(),"round"===t.mode?t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tn-swiper__indicator__round",class:{"tn-swiper__indicator__round--active":t.swiperIndex===i}})})):t._e(),"number"===t.mode?[n("v-uni-view",{staticClass:"tn-swiper__indicator__number"},[t._v(t._s(t.swiperIndex+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},r=[]},c973:function(t,e,n){function i(t,e,n,i,r,a,o){try{var s=t[a](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,r)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,c,"next",t)}function c(t){i(o,r,a,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},ccc9:function(t,e,n){"use strict";n.r(e);var i=n("a9c2"),r=n("5ec3");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5b73");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"4ef6b447",null,!1,i["a"],void 0);e["default"]=s.exports},e977:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("75e2").default,tnSwiper:n("ccc9").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-job tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,isBack:!1,bottomShadow:!1,backgroundColor:"#FFFFFF"}},[n("v-uni-view",{staticClass:"custom-nav tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"custom-nav__back"},[n("v-uni-view",{staticClass:"logo-pic tn-shadow-blur",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/logo/logo2.png')"}},[n("v-uni-view",{staticClass:"logo-image"})],1)],1),n("v-uni-view",{staticClass:"custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center "},[n("v-uni-view",{staticClass:"custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark tn-bg-gray--light"},[n("v-uni-view",{staticClass:"custom-nav__search__icon tn-icon-search"}),n("v-uni-view",{staticClass:"custom-nav__search__text tn-padding-left-xs"},[t._v("好想搜点什么")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-margin-top",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("tn-swiper",{attrs:{list:t.banner,height:350,effect3d:!0,mode:"round"}})],1),n("v-uni-view",{staticClass:"tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin"},[t._l(t.tuniaoData,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between job-shadow"},[n("v-uni-view",{staticClass:"tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center tn-color-white",class:["tn-bg-"+e.color]},[n("v-uni-view",{class:["tn-icon-"+e.icon]})],1),n("v-uni-view",{staticClass:"tn-info__item__left__content"},[n("v-uni-view",{staticClass:"tn-info__item__left__content--title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"tn-info__item__left__content--data tn-padding-top-xs"},[t._v(t._s(e.value))])],1)],1),n("v-uni-view",{staticClass:"tn-info__item__right"},[n("v-uni-view",{staticClass:"tn-info__item__right--icon"},[n("v-uni-view",{staticClass:"tn-icon-right"})],1)],1)],1)]}))],2),n("v-uni-view",{staticClass:"tn-flex tn-flex-wrap tn-margin job-shadow"},[t._l(t.icons,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:" ",staticStyle:{width:"25%"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center  tn-padding-xl"},[n("v-uni-view",{staticClass:"icon16__item--icon tn-flex tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"tn-cool-color-icon16",class:[t.$tn.color.getRandomCoolBgClass(i)+" tn-icon-"+e.icon]})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-lg tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v(t._s(e.title))])],1)],1)],1)]}))],2),n("v-uni-view",{staticClass:"tabbar footerfixed"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/job-home.png"}})],1),n("v-uni-view",{staticClass:"tn-color-black"},[t._v("职位")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/job-honor.png"}})],1),n("v-uni-view",{staticClass:"tn-color-black"},[t._v("简历")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-circle tn-shadow-blur"},[n("v-uni-view",{staticClass:"tn-icon-message-fill tn-color-white"})],1)],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/job-up.png"}})],1),n("v-uni-view",{staticClass:"tn-color-black"},[t._v("提升")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/job-my.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("我的")])],1)],1),n("v-uni-view",{staticClass:"tn-padding-xl"}),n("nav-index-button")],1)},a=[]}}]);