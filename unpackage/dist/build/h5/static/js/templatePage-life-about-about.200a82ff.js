(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-life-about-about"],{4442:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("75e2").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-bubble"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-canvas",{staticClass:"bubble",style:{width:t.windowWidth+"px",height:t.windowHeight+"px"},attrs:{"canvas-id":"bubble",id:"bubble"}}),n("v-uni-view",{staticClass:"container about-bg",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/about/about.png')"}})],1)},o=[]},4530:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("b64b"),n("d3b7"),n("159b");var i=r(n("62dd")),o={name:"TemplateBubble",mixins:[i.default],data:function(){return{windowHeight:0,windowWidth:0,actionTimer:null,animationTimer:null,queue:{},ctx:null}},onLoad:function(){this.getSystemInfo()},onReady:function(){var t=this;this.$nextTick((function(){t.queue={},t.ctx=uni.createCanvasContext("bubble",t),setTimeout((function(){t.actionTimer=setInterval((function(){t.generateBubble()}),500)}),1e3)}))},onUnload:function(){this.clearActionTimer(),this.clearAnimationTimer()},methods:{getSystemInfo:function(){var t=this,e=uni.getSystemInfoSync();e?(this.windowHeight=e.safeArea.height,this.windowWidth=e.safeArea.width):setTimeout((function(){t.getSystemInfo()}),50)},generateBubble:function(){var t=this,e="https://tnuiimage.tnkjapp.com/bubble/"+this.$tn.number.randomInt(1,33)+".png";uni.getImageInfo({src:e,success:function(e){if("getImageInfo:ok"===e.errMsg){var n={id:(new Date).getTime(),timer:0,opacity:0,pathData:t.generatePathData(),image:e.path,factor:{speed:6e-4,t:.1}};Object.keys(t.queue).length>0?t.queue[n.id]=n:(t.queue[n.id]=n,t.bubbleAnimate())}}})},generatePathData:function(){var t=this.windowWidth,e=this.windowHeight,n={x:.72*t,y:e},r={x:this.$tn.number.random(.22*t,.33*t),y:this.$tn.number.random(.5*e,.75*e)},i={x:this.$tn.number.random(0,.88*t),y:this.$tn.number.random(.25*e,.5*e)},o={x:this.$tn.number.random(0,.88*t),y:this.$tn.number.random(0,.125*e)};return[n,r,i,o]},updatePath:function(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],a=e.t,u=3*(r.x-n.x),c=3*(i.x-r.x)-u,s=o.x-n.x-u-c,f=3*(r.y-n.y),l=3*(i.y-r.y)-f,d=o.y-n.y-f-l,h=s*(a*a*a)+c*(a*a)+u*a+n.x,p=d*(a*a*a)+l*(a*a)+f*a+n.y;return{x:h,y:p}},bubbleAnimate:function(){var t=this,e=(this.windowWidth,this.windowHeight);Object.keys(this.queue).forEach((function(n){var r=t.queue[+n],i=t.updatePath(r.pathData,r.factor),o=i.x,a=i.y,u=r.factor.speed;r.factor.t+=u;var c=30;c=(e-a)/1.5,c=Math.min(30,c);var s=r.opacity;s=a/(.3*e),s=Math.min(1,s),t.ctx.globalAlpha=s,t.ctx.drawImage(r.image,o-c/2,a,c,c),r.factor.t>1&&delete t.queue[r.id],a>e&&delete t.queue[r.id]})),this.ctx.draw(),Object.keys(this.queue).length>0?this.animationTimer=setTimeout((function(){t.bubbleAnimate()}),5):(this.clearAnimationTimer()(),this.ctx.draw())},clearActionTimer:function(){this.actionTimer&&clearInterval(this.actionTimer)},clearAnimationTimer:function(){this.animationTimer&&clearTimeout(this.animationTimer)}}};e.default=o},"62dd":function(t,e,n){var r=n("7ec2").default,i=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(r().mark((function e(){var n,i,o;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:o=e.sent,n=o.customBarHeight,i=o.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",i),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"68eb":function(t,e,n){var r=n("785e");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("78f9448b",r,!0,{sourceMap:!1,shadowMode:!1})},"785e":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-6de7743b]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-6de7743b]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-6de7743b]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}.template-bubble[data-v-6de7743b]{margin:0;width:100%;height:100vh;color:#fff;background:linear-gradient(-120deg,#f15bb5,#9a5ce5,#01beff,#00f5d4);\r\n  /* background: linear-gradient(-120deg,  #9A5CE5, #01BEFF, #00F5D4, #43e97b); */\r\n  /* background: linear-gradient(-120deg,#c471f5, #ec008c, #ff4e50,#f9d423); */\r\n  /* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */background-size:500% 500%;-webkit-animation:gradientBG-data-v-6de7743b 15s ease infinite;animation:gradientBG-data-v-6de7743b 15s ease infinite;position:relative}.template-bubble .bubble[data-v-6de7743b]{position:fixed;bottom:-10vh;right:0;z-index:1024;pointer-events:none}.about-bg[data-v-6de7743b]{background-size:cover;width:100vw;height:100vh;justify-content:center;flex-direction:column;color:#fff}@-webkit-keyframes gradientBG-data-v-6de7743b{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@keyframes gradientBG-data-v-6de7743b{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}.container[data-v-6de7743b]{width:100%;position:absolute;text-align:center}',""]),t.exports=e},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function i(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),u=new O(r||[]);return a(o,"_invoke",{value:L(t,n,u)}),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=d;var p={};function v(){}function b(){}function g(){}var m={};l(m,c,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(I([])));x&&x!==n&&o.call(x,c)&&(m=x);var w=g.prototype=v.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;a(this,"_invoke",{value:function(i,a){function u(){return new e((function(n,u){(function n(i,a,u,c){var s=h(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==r(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)})(i,a,n,u)}))}return n=n?n.then(u,u):u()}})}function L(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return B()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=T(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function T(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=h(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:B}}function B(){return{value:void 0,done:!0}}return b.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:b,configurable:!0}),b.displayName=l(g,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,f,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},k(_.prototype),l(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new _(d(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),l(w,f,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},a488:function(t,e,n){"use strict";n.r(e);var r=n("4530"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},ae67:function(t,e,n){"use strict";var r=n("68eb"),i=n.n(r);i.a},c973:function(t,e,n){function r(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function u(t){r(a,i,o,u,c,"next",t)}function c(t){r(a,i,o,u,c,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},e178:function(t,e,n){"use strict";n.r(e);var r=n("4442"),i=n("a488");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("ae67");var a=n("f0c5"),u=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"6de7743b",null,!1,r["a"],void 0);e["default"]=u.exports}}]);