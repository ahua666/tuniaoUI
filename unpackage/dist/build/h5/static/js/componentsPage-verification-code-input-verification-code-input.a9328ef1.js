(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-verification-code-input-verification-code-input"],{"0247":function(t,e,i){"use strict";i.r(e);var n=i("0ccf"),a=i("119a");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f1cf");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0646eb2a",null,!1,n["a"],void 0);e["default"]=c.exports},"0b26":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5ea4")),o={name:"ComponentsVerificationCode",components:{demoTitle:a.default},data:function(){return{value1:"24",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:""}}};e.default=o},"0ccf":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={tnNavBar:i("75e2").default,tnVerificationCodeInput:i("af40").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"components-verification-code-input tn-safe-area-inset-bottom"},[i("tn-nav-bar",{attrs:{fixed:!0}},[t._v("验证码输入")]),i("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[i("demo-title",{attrs:{title:"基础使用"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1),i("demo-title",{attrs:{title:"居中提示线"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{mode:"middleLine"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)],1),i("demo-title",{attrs:{title:"底部提示线"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{mode:"bottomLine"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1)],1),i("demo-title",{attrs:{title:"修改验证码长度"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{maxLength:6},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1)],1),i("demo-title",{attrs:{title:"使用圆点隐藏已输入"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{dotFill:!0},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1)],1),i("demo-title",{attrs:{title:"不带呼吸效果"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{breathe:!1},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})],1)],1),i("demo-title",{attrs:{title:"字体加粗"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{bold:!0},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)],1),i("demo-title",{attrs:{title:"自定义样式"}},[i("v-uni-view",{staticClass:"tn-bg-white"},[i("tn-verification-code-input",{attrs:{fontSize:40,inputWidth:60,activeColor:"#3D7EFF",inactiveColor:"#9EBEFF"},model:{value:t.value8,callback:function(e){t.value8=e},expression:"value8"}})],1)],1),i("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},o=[]},1005:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"demo-title"},[i("v-uni-view",["first"===t.type?i("v-uni-view",{staticClass:"main_title"},[t.leftIcon?i("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),i("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?i("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?i("v-uni-view",{staticClass:"second_title"},[i("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),i("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},a=[]},"119a":function(t,e,i){"use strict";i.r(e);var n=i("0b26"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1bab":function(t,e,i){"use strict";i.r(e);var n=i("c919"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"31a3":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tn-verification-code-class tn-verification-code"},[i("v-uni-view",{staticClass:"tn-code__container"},[i("v-uni-input",{staticClass:"tn-code__input",attrs:{disabled:t.disabledKeyboard,value:t.valueModel,type:"number",focus:t.focus,maxlength:t.maxLength},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getValue.apply(void 0,arguments)}}}),t._l(t.loopCharArr,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"tn-code__item",class:[{"tn-code__item--breathe":t.breathe&&t.charArrLength===n,"tn-code__item__box":"box"===t.mode,"tn-code__item__box--active":"box"===t.mode&&t.charArrLength===n}],style:[t.itemStyle(n)]},["middleLine"!==t.mode?i("v-uni-view",{staticClass:"tn-code__item__line tn-code__item__line--placeholder",style:[t.placeholderLineStyle(n)]}):t._e(),"middleLine"===t.mode&&t.charArrLength<=n?i("v-uni-view",{staticClass:"tn-code__item__line tn-code__item__line--middle",class:[{"tn-code__item__line--bold":t.bold,"tn-code__item--breathe":t.breathe&&t.charArrLength===n,"tn-code__item__line--active":t.charArrLength===n}],style:[t.lineStyle(n)]}):t._e(),"bottomLine"===t.mode?i("v-uni-view",{staticClass:"tn-code__item__line tn-code__item__line--bottom",class:[{"tn-code__item__line--bold":t.bold,"tn-code__item--breathe":t.breathe&&t.charArrLength===n,"tn-code__item__line--active":t.charArrLength===n}],style:[t.lineStyle(n)]}):t._e(),t.dotFill?[i("v-uni-text",{staticClass:"tn-code__item__dot"},[t._v(t._s(t.charArr[n]?"●":""))])]:[i("v-uni-text",[t._v(t._s(t.charArr[n]?t.charArr[n]:""))])]],2)],1)}))],2)],1)},a=[]},"4b34":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},"5ea4":function(t,e,i){"use strict";i.r(e);var n=i("1005"),a=i("e595");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bee7");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5d860f10",null,!1,n["a"],void 0);e["default"]=c.exports},"7efc":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=n},8339:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.components-verification-code-input[data-v-0646eb2a]{background-color:#f4f4f4;min-height:100vh}',""]),t.exports=e},"8edd":function(t,e,i){var n=i("8339");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1cf9a6e8",n,!0,{sourceMap:!1,shadowMode:!1})},9643:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-verification-code[data-v-2d59d568]{text-align:center}.tn-verification-code .tn-code__container[data-v-2d59d568]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;position:relative}.tn-verification-code .tn-code__input[data-v-2d59d568]{position:absolute;top:0;left:-100%;width:200%;height:100%;text-align:left;z-index:9;opacity:0;background:none}.tn-verification-code .tn-code__item[data-v-2d59d568]{position:relative;width:%?80?%;height:%?80?%;line-height:%?80?%;display:flex;flex-direction:row;align-items:center;justify-content:center;margin:%?10?% %?10?%;font-size:%?60?%;font-weight:700;color:#838383}.tn-verification-code .tn-code__item--breathe[data-v-2d59d568]{-webkit-animation:breathe-data-v-2d59d568 2s infinite ease;animation:breathe-data-v-2d59d568 2s infinite ease}.tn-verification-code .tn-code__item__box[data-v-2d59d568]{border:%?2?% solid #aaa;border-radius:%?6?%}.tn-verification-code .tn-code__item__box--active[data-v-2d59d568]{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;overflow:hidden;border:%?2?% solid #01beff}.tn-verification-code .tn-code__item__line[data-v-2d59d568]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#aaa}.tn-verification-code .tn-code__item__line--bold[data-v-2d59d568]{height:4px!important}.tn-verification-code .tn-code__item__line--placeholder[data-v-2d59d568]{display:none;width:%?2?%;height:%?40?%}.tn-verification-code .tn-code__item__line--middle[data-v-2d59d568], .tn-verification-code .tn-code__item__line--bottom[data-v-2d59d568]{width:80%;height:2px;border-radius:2px}.tn-verification-code .tn-code__item__line--bottom[data-v-2d59d568]{top:auto!important;bottom:0;-webkit-transform:translateX(-50%)!important;transform:translateX(-50%)!important}.tn-verification-code .tn-code__item__line--active[data-v-2d59d568]{background-color:#01beff!important}.tn-verification-code .tn-code__item__dot[data-v-2d59d568]{font-size:%?34?%;line-height:%?34?%}@-webkit-keyframes breathe-data-v-2d59d568{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}@keyframes breathe-data-v-2d59d568{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}',""]),t.exports=e},aa04:function(t,e,i){"use strict";var n=i("f3fb"),a=i.n(n);a.a},af40:function(t,e,i){"use strict";i.r(e);var n=i("31a3"),a=i("1bab");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("aa04");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2d59d568",null,!1,n["a"],void 0);e["default"]=c.exports},bee7:function(t,e,i){"use strict";var n=i("e1b1"),a=i.n(n);a.a},c919:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"tn-verification-code",props:{value:{type:[String,Number],default:""},maxLength:{type:Number,default:4},mode:{type:String,default:"box"},dotFill:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},fontSize:{type:[String,Number],default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},inputWidth:{type:Number,default:80},breathe:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},disabledKeyboard:{type:Boolean,default:!1}},computed:{charArr:function(){return this.valueModel.split("")},charArrLength:function(){return this.charArr.length},loopCharArr:function(){return new Array(this.maxLength)},itemStyle:function(){var t=this;return function(e){var i={};return i.fontWeight=t.bold?"bold":"normal",t.fontSize&&(i.fontSize=t.fontSize+"rpx"),t.inputWidth&&(i.width=t.inputWidth+"rpx",i.height=t.inputWidth+"rpx",i.lineHeight=t.inputWidth+"rpx"),t.inactiveColor&&(i.color=t.inactiveColor,i.borderColor=t.inactiveColor),"box"===t.mode&&t.charArrLength===e&&(i.borderColor=t.activeColor),i}},placeholderLineStyle:function(){var t=this;return function(e){var i={};return i.display=t.charArrLength===e?"block":"none",t.inputWidth&&(i.height=.5*t.inputWidth+"rpx"),i}},lineStyle:function(){var t=this;return function(e){var i={};return t.inactiveColor&&(i.backgroundColor=t.inactiveColor),t.charArrLength===e&&t.activeColor&&(i.backgroundColor=t.activeColor),i}}},watch:{value:{handler:function(t){t=String(t),this.valueModel=t.substring(0,this.maxLength)},immediate:!0}},data:function(){return{valueModel:""}},methods:{getValue:function(t){var e=t.detail.value;this.valueModel=e,String(e).length>this.maxLength||(this.$emit("change",e),this.$emit("input",e),String(e).length==this.maxLength&&this.$emit("finish",e))}}};e.default=n},e1b1:function(t,e,i){var n=i("4b34");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("271bb985",n,!0,{sourceMap:!1,shadowMode:!1})},e595:function(t,e,i){"use strict";i.r(e);var n=i("7efc"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f1cf:function(t,e,i){"use strict";var n=i("8edd"),a=i.n(n);a.a},f3fb:function(t,e,i){var n=i("9643");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("31f68d58",n,!0,{sourceMap:!1,shadowMode:!1})}}]);