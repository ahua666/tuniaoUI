(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-login-demo2-demo2"],{"01c5":function(t,e,n){"use strict";n.r(e);var i=n("d0b6"),o=n("dfd3");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("eb45");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"64cab4a6",null,!1,i["a"],void 0);e["default"]=s.exports},4632:function(t,e,n){var i=n("6896");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("660d0406",i,!0,{sourceMap:!1,shadowMode:!1})},"62dd":function(t,e,n){var i=n("7ec2").default,o=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return o(i().mark((function e(){var n,o,r;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,o=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:r=e.sent,n=r.customBarHeight,o=r.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",o),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},6896:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-64cab4a6]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-64cab4a6]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-64cab4a6]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 粒子背景 start*/.template-login2[data-v-64cab4a6]{background:linear-gradient(90deg,#892fe8,#3d7eff);min-height:100vh}.mycanvas[data-v-64cab4a6]{position:absolute;background-size:cover;width:100vw;height:100vh;justify-content:center;flex-direction:column;color:#fff}.login[data-v-64cab4a6]{position:relative;height:100%;z-index:1\r\n  /* 内容 start */\r\n  /* 切换 start */\r\n  /* 切换 end */\r\n  /* 登录注册信息 start */\r\n  /* 登录注册信息 end */\r\n  /* 登录方式切换 start */\r\n  /* 登录方式切换 end */\r\n  /* 内容 end */}.login__wrapper[data-v-64cab4a6]{padding-top:%?400?%;width:100%}.login__mode[data-v-64cab4a6]{position:relative;margin:0 auto;width:%?476?%;height:%?77?%;background-color:hsla(0,0%,100%,.2);backdrop-filter:blur(%?6?%);-webkit-backdrop-filter:blur(%?6?%);box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?39?%}.login__mode__item[data-v-64cab4a6]{height:%?77?%;width:100%;line-height:%?77?%;text-align:center;font-size:%?31?%;color:#fff;letter-spacing:1em;text-indent:1em;z-index:2;transition:all .4s}.login__mode__item--active[data-v-64cab4a6]{font-weight:700;color:#fff}.login__mode__slider[data-v-64cab4a6]{position:absolute;height:inherit;width:calc(%?476?% / 2);border-radius:inherit;box-shadow:%?0?% %?18?% %?72?% %?18?% rgba(0,195,255,.1);z-index:1;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.login__info[data-v-64cab4a6]{margin:0 %?50?%;margin-top:%?105?%;padding:%?30?% %?51?%;padding-bottom:0;border-radius:%?20?%;background-color:hsla(0,0%,100%,.2);backdrop-filter:blur(%?6?%);-webkit-backdrop-filter:blur(%?6?%);border:%?2?% solid hsla(0,0%,100%,.1);box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1)}.login__info__item__input[data-v-64cab4a6]{margin-top:%?59?%;width:100%;height:%?77?%;border:%?1?% solid #fff;border-radius:%?39?%}.login__info__item__input__left-icon[data-v-64cab4a6]{width:10%;font-size:%?44?%;margin-left:%?20?%;color:#fff}.login__info__item__input__content[data-v-64cab4a6]{width:80%;padding-left:%?10?%}.login__info__item__input__content--verify-code[data-v-64cab4a6]{width:56%}.login__info__item__input__content uni-input[data-v-64cab4a6]{font-size:%?24?%;color:#fff}.login__info__item__input__right-icon[data-v-64cab4a6]{width:10%;font-size:%?44?%;margin-right:%?20?%;color:#fff}.login__info__item__input__right-verify-code[data-v-64cab4a6]{width:34%;margin-right:%?20?%}.login__info__item__button[data-v-64cab4a6]{margin-top:%?75?%;margin-bottom:%?39?%;width:100%;height:%?77?%;text-align:center;font-size:%?31?%;font-weight:700;line-height:%?77?%;letter-spacing:1em;text-indent:1em;border-radius:%?100?%;color:#fff;background-color:hsla(0,0%,100%,.2)}.login__info__item__tips[data-v-64cab4a6]{margin:%?30?% 0;color:#fff}.login__way[data-v-64cab4a6]{margin:0 auto;margin-top:%?110?%}.login__way__item--icon[data-v-64cab4a6]{width:%?77?%;height:%?77?%;font-size:%?50?%;border-radius:%?100?%;margin-bottom:%?18?%;position:relative;z-index:1}.login__way__item--icon[data-v-64cab4a6]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png)}[data-v-64cab4a6] .input-placeholder{font-size:%?24?%;color:#e6e6e6}',""]),t.exports=e},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(I){f=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var o=e&&e.prototype instanceof v?e:v,r=Object.create(o.prototype),s=new M(i||[]);return a(r,"_invoke",{value:k(t,n,s)}),r}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=d;var _={};function v(){}function p(){}function g(){}var m={};f(m,c,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&r.call(x,c)&&(m=x);var b=g.prototype=v.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;a(this,"_invoke",{value:function(o,a){function s(){return new e((function(n,s){(function n(o,a,s,c){var l=h(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==i(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)})(o,a,n,s)}))}return n=n?n.then(s,s):s()}})}function k(t,e,n){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return z()}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===_)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=h(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===_)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var o=h(i,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,_;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,_):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:z}}function z(){return{value:void 0,done:!0}}return p.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:p,configurable:!0}),p.displayName=f(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},y(C.prototype),f(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,i,o,r){void 0===r&&(r=Promise);var a=new C(d(t,n,i,o),r);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(b),f(b,u,"Generator"),f(b,c,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=S,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),_}},e}t.exports=o,t.exports.__esModule=!0,t.exports["default"]=t.exports},c973:function(t,e,n){function i(t,e,n,i,o,r,a){try{var s=t[r](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,o)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,c,"next",t)}function c(t){i(a,o,r,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},cb29:function(t,e,n){var i=n("23e7"),o=n("81d5"),r=n("44d2");i({target:"Array",proto:!0},{fill:o}),r("fill")},d0b6:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("75e2").default,tnButton:n("ef28").default,tnVerificationCode:n("75c0").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-login2"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-canvas",{staticClass:"mycanvas",style:"width:"+t.screenWidth+"px;height:"+t.screenHeight+"px;",attrs:{"canvas-id":"star_canvas"}}),n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login__wrapper"},[n("v-uni-view",{staticClass:"login__mode tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center"},[n("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":0===t.currentModeIndex}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.modeSwitch(0)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":1===t.currentModeIndex}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.modeSwitch(1)}}},[t._v("注册")]),n("v-uni-view",{staticClass:"login__mode__slider tn-cool-bg-color-15--reverse",style:[t.modeSliderStyle]})],1),n("v-uni-view",{staticClass:"login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[0===t.currentModeIndex?[n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-phone"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入登录手机号码"}})],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-lock"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[n("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),1===t.currentModeIndex?[n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-phone"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入注册手机号码"}})],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-code"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content login__info__item__input__content--verify-code"},[n("v-uni-input",{attrs:{"placeholder-class":"input-placeholder",placeholder:"请输入验证码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-verify-code",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm",padding:"5rpx 10rpx",width:"100%",shape:"round"}},[t._v(t._s(t.tips))])],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-lock"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[n("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),n("v-uni-view",{staticClass:"login__info__item__button tn-cool-bg-color-7--reverse",attrs:{"hover-class":"tn-hover","hover-stay-time":150}},[t._v(t._s(0===t.currentModeIndex?"登录":"注册"))]),0===t.currentModeIndex?n("v-uni-view",{staticClass:"login__info__item__tips"},[t._v("忘记密码?")]):t._e()],2),n("v-uni-view",{staticClass:"login__way tn-flex tn-flex-col-center tn-flex-row-center"},[n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[n("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-green tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-wechat-fill"})],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[n("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-sina"})],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[n("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-qq"})],1)],1)],1)],1)],1),n("tn-verification-code",{ref:"code",attrs:{uniqueKey:"login-demo-2",seconds:60},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}})],1)},r=[]},dfd3:function(t,e,n){"use strict";n.r(e);var i=n("e024"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},e024:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("cb29"),n("14d9");var o=i(n("d4ec")),r=i(n("bee2")),a=i(n("62dd")),s=function(){function t(e,n){(0,o.default)(this,t),this.x=e,this.y=n,this.r=1+2*Math.random(),this.sx=2*Math.random()-1,this.sy=2*Math.random()-1}return(0,r.default)(t,[{key:"draw",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),t.closePath(),t.fillStyle="#fff",t.fill()}},{key:"move",value:function(t,e){this.x+=this.sx,this.y+=this.sy,(this.x>t||this.x<0)&&(this.sx=-this.sx),(this.y>e||this.y<0)&&(this.sy=-this.sy)}},{key:"drawLine",value:function(t,e){var n=this.x-e.x,i=this.y-e.y,o=Math.sqrt(n*n+i*i);if(o<100){var r=(100-o)/300*1;t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(e.x,e.y),t.closePath(),t.strokeStyle="rgba(255, 255, 255, "+r+")",t.strokeWidth=1,t.stroke()}}}]),t}(),c=uni.getSystemInfoSync(),l=1e3,u={name:"login-demo-2",mixins:[a.default],data:function(){return{ctx:null,screenWidth:c.screenWidth,screenHeight:c.screenHeight,timer:null,points:[],currentModeIndex:0,modeSliderStyle:{left:0},showPassword:!1,tips:"获取验证码"}},onLoad:function(t){this.from=t.from||"";for(var e=0;e<80;e++)this.points.push(new s(400*Math.random(),Math.random()*l));this.ctx=uni.createCanvasContext("star_canvas"),this.gameloop()},onUnload:function(){clearTimeout(this.timer)},watch:{currentModeIndex:function(t){var e=uni.upx2px(238);this.modeSliderStyle.left="".concat(e*t,"px")}},methods:{gameloop:function(){this.timer=setTimeout(this.gameloop,100),this.paint()},paint:function(){this.ctx.clearRect(0,0,400,l);for(var t=0;t<this.points.length;t++){this.points[t].move(400,l),this.points[t].draw(this.ctx);for(var e=t+1;e<this.points.length;e++)this.points[t].drawLine(this.ctx,this.points[e])}this.ctx.draw()},modeSwitch:function(t){this.currentModeIndex=t,this.showPassword=!1},getCode:function(){var t=this;this.$refs.code.canGetCode?(this.$tn.message.loading("正在获取验证码"),setTimeout((function(){t.$tn.message.closeLoading(),t.$tn.message.toast("验证码已经发送"),t.$refs.code.start()}),2e3)):this.$tn.message.toast(this.$refs.code.secNum+"秒后再重试")},codeChange:function(t){this.tips=t}}};e.default=u},eb45:function(t,e,n){"use strict";var i=n("4632"),o=n.n(i);o.a}}]);