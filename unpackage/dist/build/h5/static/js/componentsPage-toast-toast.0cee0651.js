(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-toast-toast"],{"0b16":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=n},"2b7e":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.visible?e("v-uni-view",[e("v-uni-view",{staticClass:"tn-toast-class tn-toast",class:[t.toastClass],style:[t.toastStyle]},[t.image?e("v-uni-image",{staticClass:"tn-toast__img",class:{"tn-margin-bottom-sm":t.title||t.content},attrs:{src:t.image}}):t._e(),t.icon?e("v-uni-view",{staticClass:"tn-toast__icon"},[e("v-uni-view",{class:["tn-icon-"+t.icon]})],1):t._e(),t.title?e("v-uni-view",{staticClass:"tn-toast__text",class:[t.haveIcon||t.haveContent?"":"tn-toast--unicon"]},[t._v(t._s(t.title))]):t._e(),t.haveContent?e("v-uni-view",{staticClass:"tn-toast__text tn-toast__content"},[t._v(t._s(t.content))]):t._e()],1),e("v-uni-view",{staticClass:"tn-toast__mask",class:[t.visible?"tn-toast__mask--show":""],style:[t.maskStyle]})],1):t._e()},o=[]},"4fc9":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3"),e("c975"),e("fb6a"),e("baa5"),e("caad"),e("2532");var o=i(e("c846")),a={mixins:[o.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(n)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(e)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var n=(new Date).getTime();if(n-this.clickTime<=this.clickIntervalTime)return;this.clickTime=n,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("getuserinfo",e)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("contact",e)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("getphonenumber",e)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("error",e)}}};n.default=a},"713c":function(t,n,e){"use strict";e.r(n);var i=e("ac7e"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"7a94":function(t,n,e){var i=e("bd5b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("7231a4d7",i,!0,{sourceMap:!1,shadowMode:!1})},"7f9f":function(t,n,e){"use strict";e.r(n);var i=e("4fc9"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"82bf":function(t,n,e){var i=e("0b16");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("727924a0",i,!0,{sourceMap:!1,shadowMode:!1})},"941f":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3");var o=i(e("5a5f")),a={name:"componentsToast",components:{dynamicDemoTemplate:o.default},data:function(){return{title:"提示信息",content:"欢迎使用图鸟UI",icon:"balancecar",image:"",duration:2e3,tips:["无需依赖额外的样式文件","使用tn-toast组件"],sectionList:[{name:"参数切换",section:[{title:"标题",optional:["无标题","有标题"],methods:"titleChange",current:1},{title:"内容",optional:["无内容","有内容"],methods:"contentChange",current:1},{title:"图标",optional:["无图标","balancecar","图片"],methods:"iconChange",current:1},{title:"关闭时间",optional:["默认","5000"],methods:"durationChange"}]}]}},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},showToast:function(){this.openToast()},titleChange:function(t){this.title=0===t.index?"":"提示信息",this.openToast()},contentChange:function(t){this.content=0===t.index?"":"欢迎使用图鸟UI",this.openToast()},iconChange:function(t){switch(t.index){case 0:this.icon="",this.image="";break;case 1:this.icon=t.name,this.image="";break;case 2:this.icon="",this.image="/static/favicon.ico";break}this.openToast()},durationChange:function(t){this.duration=0===t.index?2e3:Number(t.name),this.openToast()},openToast:function(){this.$refs.toast.show({title:this.title,content:this.content,icon:this.icon,image:this.image,duration:this.duration})},closedToast:function(){this.$tn.message.toast("Toast关闭")}}};n.default=a},"943d":function(t,n,e){"use strict";e.r(n);var i=e("2b7e"),o=e("713c");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("b80f");var s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4d0b74b4",null,!1,i["a"],void 0);n["default"]=r.exports},ab8f:function(t,n,e){"use strict";e.r(n);var i=e("941f"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},ac7e:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3");var i={name:"tn-toast",props:{zIndex:{type:Number,default:0}},computed:{toastClass:function(){var t="";return this.visible&&(t+=" tn-toast--show"),this.content&&(t+=" tn-toast--padding"),(this.icon||this.image)&&(t+=" tn-toast--unicon"),t},toastStyle:function(){var t={width:"auto"};return this.icon||this.image,t.zIndex=this.zIndex?this.zIndex:this.$tn.zIndex.toast,t},maskStyle:function(){var t={},n=this.zIndex?this.zIndex:this.$tn.zIndex.toast;return t.zIndex=n-1,t},haveIcon:function(){return this.icon||this.image},haveContent:function(){return this.content}},data:function(){return{timer:null,visible:!1,title:"操作成功",content:"",icon:"",image:""}},methods:{show:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.duration,i=void 0===e?2e3:e,o=n.title,a=void 0===o?"":o,s=n.content,r=void 0===s?"":s,d=n.icon,c=void 0===d?"":d,l=n.image,u=void 0===l?"":l;if(null!==this.timer&&clearTimeout(this.timer),!c&&!u&&!a&&!r)return this._clearOptions(),void this.$emit("closed");this.visible=!0,this.title=a,this.content=r,this.icon=c,c||(this.image=u),this.timer=setTimeout((function(){t.visible=!1,clearTimeout(t.timer),t.timer=null,t._clearOptions(),t.$emit("closed")}),i)},_clearOptions:function(){this.title="",this.content="",this.icon="",this.image=""}}};n.default=i},b80f:function(t,n,e){"use strict";var i=e("7a94"),o=e.n(i);o.a},baa5:function(t,n,e){var i=e("23e7"),o=e("e58c");i({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},bd5b:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-toast[data-v-4d0b74b4]{height:auto;background-color:rgba(0,0,0,.4);border-radius:%?10?%;opacity:0;position:fixed;left:50%;top:48%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:.3 ease-in-out;transition-property:opacity,visibility;display:flex;align-items:center;flex-direction:column;padding:%?20?% %?20?% %?20?% %?20?%;box-sizing:border-box}.tn-toast--show[data-v-4d0b74b4]{opacity:1}.tn-toast--show.tn-toast--padding[data-v-4d0b74b4]{padding-top:%?50?%!important;padding-bottom:%?50?%!important}.tn-toast--show.tn-toast--unicon[data-v-4d0b74b4]{padding:%?20?% %?20?% %?20?% %?20?%!important}.tn-toast__img[data-v-4d0b74b4]{width:%?120?%;height:%?120?%;display:block}.tn-toast__text[data-v-4d0b74b4]{font-size:%?28?%;line-height:%?28?%;color:#fff;text-align:center}.tn-toast__icon[data-v-4d0b74b4]{color:#fff;font-size:%?64?%}.tn-toast__content[data-v-4d0b74b4]{padding-top:%?10?%;font-size:%?24?%!important}.tn-toast--unicon[data-v-4d0b74b4]{padding:0;word-break:break-all}.tn-toast--padding[data-v-4d0b74b4]{padding:%?10?%}.tn-toast__mask[data-v-4d0b74b4]{width:100%;height:100%;position:fixed;top:0;left:0;right:0;border:0;background-color:transparent;transition:.3s ease-in-out;transition-property:opacity;opacity:0}.tn-toast__mask--show[data-v-4d0b74b4]{height:100%;opacity:1}',""]),t.exports=n},bda8:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("75e2").default,tnButton:e("ef28").default,tnToast:e("943d").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"components-toast"},[e("tn-nav-bar",{attrs:{fixed:!0}},[t._v("Toast")]),e("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[e("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!1},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)}}},[e("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showToast.apply(void 0,arguments)}}},[t._v("弹出Toast")])],1)],1),e("tn-toast",{ref:"toast",on:{closed:function(n){arguments[0]=n=t.$handleEvent(n),t.closedToast.apply(void 0,arguments)}}})],1)},a=[]},ce46:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(n){arguments[0]=n=t.$handleEvent(n),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(n){arguments[0]=n=t.$handleEvent(n),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(n){arguments[0]=n=t.$handleEvent(n),t.handleContact.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.handleError.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},dfdb:function(t,n,e){"use strict";e.r(n);var i=e("bda8"),o=e("ab8f");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);var s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"1fb316a0",null,!1,i["a"],void 0);n["default"]=r.exports},e510:function(t,n,e){"use strict";var i=e("82bf"),o=e.n(i);o.a},ef28:function(t,n,e){"use strict";e.r(n);var i=e("ce46"),o=e("7f9f");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("e510");var s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"778c77a3",null,!1,i["a"],void 0);n["default"]=r.exports}}]);