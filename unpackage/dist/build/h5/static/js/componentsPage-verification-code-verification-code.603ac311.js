(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-verification-code-verification-code"],{"005b":function(t,e,n){"use strict";var i=n("fa27"),o=n.n(i);o.a},"02d0":function(t,e,n){"use strict";var i=n("3ac9"),o=n.n(i);o.a},"0890":function(t,e,n){"use strict";n.r(e);var i=n("aaa3"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"0f25":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-form-class tn-form"},[this._t("default")],2)},o=[]},"0fc0":function(t,e,n){"use strict";n.r(e);var i=n("2991"),o=n("c0e0");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("1056");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"778c77a3",null,!1,i["a"],void 0);e["default"]=s.exports},1056:function(t,e,n){"use strict";var i=n("86d0"),o=n.n(i);o.a},"17db":function(t,e,n){"use strict";n.r(e);var i=n("fe30"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},2953:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var o=i(n("8054")),a={mixins:[o.default],name:"tn-input",props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:"color: #AAAAAA"},disabled:{type:Boolean,default:!1},maxLength:{type:Number,default:255},height:{type:Number,default:0},autoHeight:{type:Boolean,default:!0},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},selectOpen:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},cursorSpacing:{type:Number,default:0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},trim:{type:Boolean,default:!0},showConfirmBar:{type:Boolean,default:!0},showRightIcon:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},computed:{inputStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"===this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},elSelectionStart:function(){return String(this.selectionStart)},elSelectionEnd:function(){return String(this.selectionEnd)}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!==e&&"select"===this.type&&this.handleInput({detail:{value:t}})}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$t.string.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("tn-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this,n=t.detail.value;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",n),setTimeout((function(){e.dispatch("tn-form-item","on-form-blur",n)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=a},2991:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},3754:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-input[data-v-22f87c42]{display:flex;flex-direction:row;position:relative;flex:1}.tn-input__input[data-v-22f87c42]{font-size:%?28?%;color:#080808;flex:1}.tn-input__textarea[data-v-22f87c42]{width:auto;font-size:%?28?%;color:#080808;padding:%?10?% 0;line-height:normal;flex:1}.tn-input--border[data-v-22f87c42]{border-radius:%?6?%;border:%?2?% solid rgba(0,0,0,.1)}.tn-input--error[data-v-22f87c42]{border-color:#e83a30!important}.tn-input__right-icon[data-v-22f87c42]{line-height:1}.tn-input__right-icon .icon[data-v-22f87c42]{color:#aaa}.tn-input__right-icon__item[data-v-22f87c42]{margin-left:%?10?%}.tn-input__right-icon__clear .icon[data-v-22f87c42]{font-size:%?32?%}.tn-input__right-icon__select[data-v-22f87c42]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.tn-input__right-icon__select .icon[data-v-22f87c42]{font-size:%?26?%}.tn-input__right-icon__select--reverse[data-v-22f87c42]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},"3ac9":function(t,e,n){var i=n("f2f7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2f827f78",i,!0,{sourceMap:!1,shadowMode:!1})},"49ac":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319");var o=i(n("ade3")),a=i(n("47a7")),r={name:"componentsVerificationCode",components:{dynamicDemoTemplate:a.default},data:function(){var t;return t={tips:"获取验证码",keepRunning:!0,seconds:60,startText:"获取验证码",countDownText:"s秒后重新获取",endText:"重新获取"},(0,o.default)(t,"tips",["无需依赖额外的样式文件","使用tn-verification-code组件"]),(0,o.default)(t,"sectionList",[{name:"参数切换",section:[{title:"倒计时间",optional:["60s","30s","5s"],methods:"secondsChange"},{title:"退出后保持运行",optional:["是","否"],methods:"keepRunningChange"},{title:"自定义提示语",optional:["默认","自定义"],methods:"customTitleChange"}]}]),t},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},secondsChange:function(t){this.seconds=Number(t.name.replace("s",""))},keepRunningChange:function(t){this.keepRunning=0===t.index},customTitleChange:function(t){switch(t.index){case 0:this.startText="点击获取验证码",this.countDownText="重新获取s秒后",this.endText="再次获取";break;case 1:this.startText="获取验证码",this.countDownText="s秒后重新获取",this.endText="重新获取";break}this.reset()},getCode:function(){var t=this;this.$refs.code.canGetCode?(this.$t.message.loading("正在获取验证码"),setTimeout((function(){t.$t.message.closeLoading(),t.$t.message.toast("验证码已经发送"),t.$refs.code.start()}),2e3)):this.$t.message.toast(this.$refs.code.secNum+"秒后再重试")},reset:function(){this.$refs.code.reset()},codeStart:function(){this.$t.message.toast("倒计时开始")},codeEnd:function(){this.$t.message.toast("倒计时结束")},codeChange:function(t){this.tips=t}}};e.default=r},"5f121":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-input-class tn-input",class:{"tn-input--border":t.border,"tn-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"===t.type?n("v-uni-textarea",{staticClass:"tn-input__input tn-input__textarea",style:[t.inputStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"tn-input__input",style:[t.inputStyle],attrs:{type:"password"===t.type?"text":t.type,value:t.defaultValue,password:"password"===t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,focus:t.focus,confirmType:t.confirmType,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"tn-input__right-icon tn-flex tn-flex-col-center"},[t.clearable&&""!==t.value&&t.focused?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon tn-icon-close"})],1):"text"===t.type&&!t.focused&&t.showRightIcon&&""!==t.rightIcon?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear"},[n("v-uni-view",{staticClass:"icon",class:["tn-icon-"+t.rightIcon]})],1):t._e(),t.passwordIcon&&"password"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[t.showPassword?n("v-uni-view",{staticClass:"icon tn-icon-eye"}):n("v-uni-view",{staticClass:"tn-icon-eye-hide"})],1):t._e(),"select"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__select",class:{"tn-input__right-icon__select--reverse":t.selectOpen}},[n("v-uni-view",{staticClass:"icon tn-icon-up-triangle"})],1):t._e()],1)],1)},o=[]},"6dd6":function(t,e,n){"use strict";n.r(e);var i=n("5f121"),o=n("8943");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("005b");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"22f87c42",null,!1,i["a"],void 0);e["default"]=s.exports},"6dd9":function(t,e,n){"use strict";n.r(e);var i=n("49ac"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"75c3":function(t,e,n){"use strict";n.r(e);var i=n("81b6"),o=n("0890");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("02d0");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0d62945d",null,!1,i["a"],void 0);e["default"]=s.exports},7819:function(t,e,n){"use strict";n.r(e);var i=n("0f25"),o=n("17db");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7c338b32",null,!1,i["a"],void 0);e["default"]=s.exports},"7ac7":function(t,e,n){"use strict";n.r(e);var i=n("86a3"),o=n("6dd9");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"4857c2f7",null,!1,i["a"],void 0);e["default"]=s.exports},"81b6":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-code-class tn-code"})},o=[]},"86a3":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("0ca8").default,tnForm:n("7819").default,tnFormItem:n("a6dd").default,tnInput:n("6dd6").default,tnButton:n("0fc0").default,tnVerificationCode:n("75c3").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"components-verification_code"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("验证码倒计时")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-flex-wrap"},[n("v-uni-view",{staticStyle:{width:"100%"}},[n("tn-form",{attrs:{labelWidth:120,borderBottom:!0}},[n("tn-form-item",{attrs:{label:"验证码"}},[n("tn-input"),n("v-uni-view",{attrs:{slot:"right"},slot:"right"},[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white",size:"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.tips))])],1)],1)],1)],1),n("v-uni-view",{staticStyle:{width:"100%"}},[n("tn-button",{staticStyle:{width:"100%"},attrs:{width:"100%",backgroundColor:"tn-bg-red",fontColor:"tn-color-white",margin:"30rpx 0 0 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[t._v("重置")])],1)],1)],1)],1),n("tn-verification-code",{ref:"code",attrs:{keepRunning:t.keepRunning,seconds:t.seconds,startText:t.startText,countDownText:t.countDownText,endText:t.endText},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.codeEnd.apply(void 0,arguments)},start:function(e){arguments[0]=e=t.$handleEvent(e),t.codeStart.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}})],1)},a=[]},"86d0":function(t,e,n){var i=n("d953");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("e2228cc4",i,!0,{sourceMap:!1,shadowMode:!1})},8943:function(t,e,n){"use strict";n.r(e);var i=n("2953"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"9acc":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad"),n("2532");var o=i(n("0912")),a={mixins:[o.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=a},aaa3:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319");var i={name:"tn-verification-code",props:{seconds:{type:Number,default:60},startText:{type:String,default:"获取验证码"},countDownText:{type:String,default:"s秒后重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{timer:null,secNum:this.seconds,canGetCode:!0}},watch:{seconds:{handler:function(t){this.secNum=t},immediate:!0}},mounted:function(){this.checkKeepRunning()},beforeDestroy:function(){this.setTimeToStorage(),this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$tCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var e=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>e?(this.secNum=t-e,uni.removeStorageSync(this.uniqueKey+"_$tCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.countDownText.replace(/s|S/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.countDownText.replace(/s|S/,t.secNum)):(t.reset(),t.$emit("end"))}),1e3)},reset:function(){this.canGetCode=!0,this.timer&&(clearInterval(this.timer),this.timer=null),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorageSync(this.uniqueKey+"_$tCountDownTimestamp",t+this.secNum)}}}};e.default=i},baa5:function(t,e,n){var i=n("23e7"),o=n("e58c");i({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},c0e0:function(t,e,n){"use strict";n.r(e);var i=n("9acc"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d953:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e},f2f7:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-code[data-v-0d62945d]{width:0;height:0;position:fixed;z-index:-1}',""]),t.exports=e},fa27:function(t,e,n){var i=n("3754");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7327375b",i,!0,{sourceMap:!1,shadowMode:!1})},fe30:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d81d"),n("d3b7"),n("c975");var i={name:"tn-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:Number,default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{tnForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[]},methods:{setRules:function(t){this.rules=t},resetFields:function(){this.fields.map((function(t){t.resetField()}))},validate:function(t){var e=this;return new Promise((function(n){var i=!0,o=0,a=[];e.fields.map((function(r){r.validation("",(function(r){r&&(i=!1,a.push(r)),++o===e.fields.length&&(n(i),-1===e.errorType.indexOf("none")&&e.errorType.indexOf("toast")>=0&&a.length>0&&e.$t.message.toast(a[0]),"function"==typeof t&&t(i))}))}))}))}}};e.default=i}}]);