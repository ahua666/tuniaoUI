(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-login-demo1-demo1"],{"0ec4":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("75e2").default,tnButton:n("ef28").default,tnVerificationCode:n("75c0").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-login"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login__bg login__bg--top"},[n("v-uni-image",{staticClass:"bg",attrs:{src:"https://resource.tuniaokj.com/images/login/1/login_top2.jpg",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"login__bg login__bg--top"},[n("v-uni-image",{staticClass:"rocket rocket-sussuspension",attrs:{src:"https://resource.tuniaokj.com/images/login/1/login_top3.png",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"login__wrapper"},[n("v-uni-view",{staticClass:"login__mode tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center"},[n("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":0===t.currentModeIndex}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.modeSwitch(0)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":1===t.currentModeIndex}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.modeSwitch(1)}}},[t._v("注册")]),n("v-uni-view",{staticClass:"login__mode__slider tn-cool-bg-color-15--reverse",style:[t.modeSliderStyle]})],1),n("v-uni-view",{staticClass:"login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[0===t.currentModeIndex?[n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-phone"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入登录手机号码"}})],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-lock"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[n("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),1===t.currentModeIndex?[n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-phone"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入注册手机号码"}})],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-code"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content login__info__item__input__content--verify-code"},[n("v-uni-input",{attrs:{"placeholder-class":"input-placeholder",placeholder:"请输入验证码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-verify-code",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm",padding:"5rpx 10rpx",width:"100%",shape:"round"}},[t._v(t._s(t.tips))])],1)],1),n("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[n("v-uni-view",{staticClass:"tn-icon-lock"})],1),n("v-uni-view",{staticClass:"login__info__item__input__content"},[n("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),n("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[n("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),n("v-uni-view",{staticClass:"login__info__item__button tn-cool-bg-color-7--reverse",attrs:{"hover-class":"tn-hover","hover-stay-time":150}},[t._v(t._s(0===t.currentModeIndex?"登录":"注册"))]),0===t.currentModeIndex?n("v-uni-view",{staticClass:"login__info__item__tips"},[t._v("忘记密码?")]):t._e()],2),n("v-uni-view",{staticClass:"login__way tn-flex tn-flex-col-center tn-flex-row-center"},[n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[n("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-green tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-wechat-fill"})],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[n("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-sina"})],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[n("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-qq"})],1)],1)],1)],1),n("v-uni-view",{staticClass:"login__bg login__bg--bottom"},[n("v-uni-image",{attrs:{src:"https://resource.tuniaokj.com/images/login/1/login_bottom_bg.jpg",mode:"widthFix"}})],1)],1),n("tn-verification-code",{ref:"code",attrs:{uniqueKey:"login-demo-1",seconds:60},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}})],1)},r=[]},3039:function(t,e,n){"use strict";n.r(e);var i=n("0ec4"),o=n("72ea6");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("6935");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"5105880e",null,!1,i["a"],void 0);e["default"]=s.exports},4507:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-5105880e]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-5105880e]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-5105880e]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 悬浮 */.rocket-sussuspension[data-v-5105880e]{-webkit-animation:suspension-data-v-5105880e 3s ease-in-out infinite;animation:suspension-data-v-5105880e 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-5105880e{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}@keyframes suspension-data-v-5105880e{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}.login[data-v-5105880e]{position:relative;height:100%;z-index:1\r\n  /* 背景图片 start */\r\n  /* 背景图片 end */\r\n  /* 内容 start */\r\n  /* 切换 start */\r\n  /* 切换 end */\r\n  /* 登录注册信息 start */\r\n  /* 登录注册信息 end */\r\n  /* 登录方式切换 start */\r\n  /* 登录方式切换 end */\r\n  /* 内容 end */}.login__bg[data-v-5105880e]{z-index:-1;position:fixed}.login__bg--top[data-v-5105880e]{top:0;left:0;right:0;width:100%}.login__bg--top .bg[data-v-5105880e]{width:%?750?%;will-change:transform}.login__bg--top .rocket[data-v-5105880e]{margin:%?50?% 28%;width:%?400?%;will-change:transform}.login__bg--bottom[data-v-5105880e]{bottom:%?-10?%;left:0;right:0;width:100%;margin-bottom:env(safe-area-inset-bottom)}.login__bg--bottom uni-image[data-v-5105880e]{width:%?750?%;will-change:transform}.login__wrapper[data-v-5105880e]{margin-top:%?403?%;width:100%}.login__mode[data-v-5105880e]{position:relative;margin:0 auto;width:%?476?%;height:%?77?%;background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?39?%}.login__mode__item[data-v-5105880e]{height:%?77?%;width:100%;line-height:%?77?%;text-align:center;font-size:%?31?%;color:#908f8f;letter-spacing:1em;text-indent:1em;z-index:2;transition:all .4s}.login__mode__item--active[data-v-5105880e]{font-weight:700;color:#fff}.login__mode__slider[data-v-5105880e]{position:absolute;height:inherit;width:calc(%?476?% / 2);border-radius:inherit;box-shadow:%?0?% %?18?% %?72?% %?18?% rgba(0,195,255,.1);z-index:1;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.login__info[data-v-5105880e]{margin:0 %?30?%;margin-top:%?105?%;padding:%?30?% %?51?%;padding-bottom:0;border-radius:%?20?%;background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1)}.login__info__item__input[data-v-5105880e]{margin-top:%?59?%;width:100%;height:%?77?%;border:%?1?% solid #e6e6e6;border-radius:%?39?%}.login__info__item__input__left-icon[data-v-5105880e]{width:10%;font-size:%?44?%;margin-left:%?20?%;color:#aaa}.login__info__item__input__content[data-v-5105880e]{width:80%;padding-left:%?10?%}.login__info__item__input__content--verify-code[data-v-5105880e]{width:56%}.login__info__item__input__content uni-input[data-v-5105880e]{font-size:%?24?%}.login__info__item__input__right-icon[data-v-5105880e]{width:10%;font-size:%?44?%;margin-right:%?20?%;color:#aaa}.login__info__item__input__right-verify-code[data-v-5105880e]{width:34%;margin-right:%?20?%}.login__info__item__button[data-v-5105880e]{margin-top:%?75?%;margin-bottom:%?39?%;width:100%;height:%?77?%;text-align:center;font-size:%?31?%;font-weight:700;line-height:%?77?%;letter-spacing:1em;text-indent:1em;border-radius:%?39?%;box-shadow:%?1?% %?10?% %?24?% %?0?% rgba(60,129,254,.35)}.login__info__item__tips[data-v-5105880e]{margin:%?30?% 0;color:#aaa}.login__way[data-v-5105880e]{margin:0 auto;margin-top:%?110?%}.login__way__item--icon[data-v-5105880e]{width:%?77?%;height:%?77?%;font-size:%?50?%;border-radius:%?100?%;margin-bottom:%?18?%;position:relative;z-index:1}.login__way__item--icon[data-v-5105880e]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png)}[data-v-5105880e] .input-placeholder{font-size:%?24?%;color:#e6e6e6}',""]),t.exports=e},"62dd":function(t,e,n){var i=n("7ec2").default,o=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return o(i().mark((function e(){var n,o,r;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,o=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:r=e.sent,n=r.customBarHeight,o=r.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",o),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},6935:function(t,e,n){"use strict";var i=n("b325"),o=n.n(i);o.a},"72ea6":function(t,e,n){"use strict";n.r(e);var i=n("e887"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=n("7037")["default"];function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch($){d=function(t,e,n){return t[e]=n}}function f(t,e,n,i){var o=e&&e.prototype instanceof h?e:h,r=Object.create(o.prototype),s=new j(i||[]);return a(r,"_invoke",{value:k(t,n,s)}),r}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch($){return{type:"throw",arg:$}}}e.wrap=f;var v={};function h(){}function g(){}function p(){}var m={};d(m,c,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(z([])));x&&x!==n&&r.call(x,c)&&(m=x);var b=p.prototype=h.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;a(this,"_invoke",{value:function(o,a){function s(){return new e((function(n,s){(function n(o,a,s,c){var l=_(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)})(o,a,n,s)}))}return n=n?n.then(s,s):s()}})}function k(t,e,n){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return O()}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=_(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=_(i,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function z(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return g.prototype=p,a(b,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:g,configurable:!0}),g.displayName=d(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,d(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},y(C.prototype),d(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,i,o,r){void 0===r&&(r=Promise);var a=new C(f(t,n,i,o),r);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(b),d(b,u,"Generator"),d(b,c,(function(){return this})),d(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=z,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports["default"]=t.exports},b325:function(t,e,n){var i=n("4507");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1c9cd6bb",i,!0,{sourceMap:!1,shadowMode:!1})},c973:function(t,e,n){function i(t,e,n,i,o,r,a){try{var s=t[r](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,o)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,c,"next",t)}function c(t){i(a,o,r,s,c,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},e887:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("62dd")),r={name:"login-demo-1",mixins:[o.default],data:function(){return{currentModeIndex:0,modeSliderStyle:{left:0},showPassword:!1,tips:"获取验证码"}},watch:{currentModeIndex:function(t){var e=uni.upx2px(238);this.modeSliderStyle.left="".concat(e*t,"px")}},methods:{modeSwitch:function(t){this.currentModeIndex=t,this.showPassword=!1},getCode:function(){var t=this;this.$refs.code.canGetCode?(this.$tn.message.loading("正在获取验证码"),setTimeout((function(){t.$tn.message.closeLoading(),t.$tn.message.toast("验证码已经发送"),t.$refs.code.start()}),2e3)):this.$tn.message.toast(this.$refs.code.secNum+"秒后再重试")},codeChange:function(t){this.tips=t}}};e.default=r}}]);