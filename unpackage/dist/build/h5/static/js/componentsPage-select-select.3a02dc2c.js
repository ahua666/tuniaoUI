(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-select-select"],{"0b16":function(e,t,a){var l=a("24fb");t=l(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),e.exports=t},"20a67":function(e,t,a){var l=a("24fb");t=l(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.select-result[data-v-4d7db352]{margin-top:%?10?%;padding:%?10?% %?30?%;background-color:#e6e6e6;text-align:center}',""]),e.exports=t},"4fc9":function(e,t,a){"use strict";a("7a82");var l=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("c975"),a("fb6a"),a("baa5"),a("caad"),a("2532");var n=l(a("c846")),i={mixins:[n.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var e="";switch(this.shape){case"icon":case"round":e+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var t=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);e+=" tn-shadow-".concat(t)}else e+=" tn-shadow-blur";if(this.fontBold&&(e+=" tn-text-bold"),this.plain&&(e+=" tn-btn--plain",this.border&&(e+=" tn-border-solid",this.borderBold&&(e+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var a=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);e+=" tn-border-".concat(a)}return e},buttonStyle:function(){var e={};switch(this.size){case"sm":e.padding="0 20rpx",e.fontSize="22rpx",e.height=this.height||"48rpx";break;case"lg":e.padding="0 40rpx",e.fontSize="32rpx",e.height=this.height||"80rpx";break;default:e.padding="0 30rpx",e.fontSize="28rpx",e.height=this.height||"64rpx"}return this.padding&&(e.padding=this.padding),this.margin&&(e.margin=this.margin),this.fontSize&&(e.fontSize=this.fontSize+this.fontUnit),e.width="icon"===this.shape?e.height:this.width,e.padding="icon"===this.shape?"0":e.padding,this.fontColorStyle&&(e.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?e.borderColor=this.backgroundColorStyle||"#080808":e.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?e.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(e.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),e}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var e=this;if(!this.disabled){if(this.blockRepeatClick){var t=(new Date).getTime();if(t-this.clickTime<=this.clickIntervalTime)return;this.clickTime=t,setTimeout((function(){e.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,a=void 0===t?{}:t;this.$emit("getuserinfo",a)},handleContact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,a=void 0===t?{}:t;this.$emit("contact",a)},handleGetPhoneNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,a=void 0===t?{}:t;this.$emit("getphonenumber",a)},handleError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,a=void 0===t?{}:t;this.$emit("error",a)}}};t.default=i},"5c0a":function(e,t,a){"use strict";a.r(t);var l=a("e45d"),n=a("d82a");for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("8035");var o=a("f0c5"),r=Object(o["a"])(n["default"],l["b"],l["c"],!1,null,"4d7db352",null,!1,l["a"],void 0);t["default"]=r.exports},"7f9f":function(e,t,a){"use strict";a.r(t);var l=a("4fc9"),n=a.n(l);for(var i in l)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(i);t["default"]=n.a},8035:function(e,t,a){"use strict";var l=a("d35b"),n=a.n(l);n.a},"82bf":function(e,t,a){var l=a("0b16");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var n=a("4f06").default;n("727924a0",l,!0,{sourceMap:!1,shadowMode:!1})},baa5:function(e,t,a){var l=a("23e7"),n=a("e58c");l({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},ce46:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[e.buttonClass,e.backgroundColorClass,e.fontColorClass],style:[e.buttonStyle],attrs:{"hover-class":"tn-hover",loading:e.loading,disabled:e.disabled,"form-type":e.formType,"open-type":e.openType},on:{getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(t){arguments[0]=t=e.$handleEvent(t),e.handleContact.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.handleError.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default")],2)},n=[]},d35b:function(e,t,a){var l=a("20a67");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var n=a("4f06").default;n("3b23f909",l,!0,{sourceMap:!1,shadowMode:!1})},d82a:function(e,t,a){"use strict";a.r(t);var l=a("e733"),n=a.n(l);for(var i in l)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(i);t["default"]=n.a},e45d:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l}));var l={tnNavBar:a("75e2").default,tnButton:a("ef28").default,tnSelect:a("8f47").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"components-select"},[a("tn-nav-bar",{attrs:{fixed:!0}},[e._v("Select列选择器")]),a("v-uni-view",{style:{paddingTop:e.vuex_custom_bar_height+"px"}},[a("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:e.tips,sectionList:e.sectionList,full:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.click.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tn-flex tn-flex-row-center"},[a("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showSelect.apply(void 0,arguments)}}},[e._v("弹出Select")])],1),a("v-uni-view",{staticClass:"select-result tn-border-dashed"},[e._v(e._s(e.result))])],1)],1),a("tn-select",{attrs:{mode:e.mode,title:"请选择数据",list:e.list,maskCloseable:e.maskCloseable},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelSelect.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmSelect.apply(void 0,arguments)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},i=[]},e510:function(e,t,a){"use strict";var l=a("82bf"),n=a.n(l);n.a},e733:function(e,t,a){"use strict";a("7a82");var l=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d81d");var n=l(a("5a5f")),i={name:"componentsSelect",components:{dynamicDemoTemplate:n.default},data:function(){return{result:"Select结果",show:!1,mode:"single",list:[{value:1,label:"哆啦A梦"},{value:2,label:"大熊"},{value:3,label:"小夫"},{value:4,label:"静香"},{value:5,label:"胖虎"},{value:6,label:"大星"}],maskCloseable:!0,tips:["无需依赖额外的样式文件","使用tn-select组件"],sectionList:[{name:"参数切换",section:[{title:"模式",optional:["单列","多列","自动多列"],methods:"modeChange"},{title:"点击遮罩关闭",optional:["是","否"],methods:"maskCloseableChange"}]}]}},methods:{click:function(e){this[e.methods]&&this[e.methods](e)},showSelect:function(e){this.openSelect()},modeChange:function(e){switch(e.index){case 0:this.mode="single",this.list=[{value:1,label:"哆啦A梦"},{value:2,label:"大熊"},{value:3,label:"小夫"},{value:4,label:"静香"},{value:5,label:"胖虎"}];break;case 1:this.mode="multi",this.list=[[{value:1,label:"哆啦A梦"},{value:2,label:"大熊"},{value:3,label:"小夫"},{value:4,label:"静香"},{value:5,label:"胖虎"}],[{value:1,label:"家"},{value:2,label:"学校"},{value:3,label:"操场"}]];break;case 2:this.mode="multi-auto",this.list=[{value:11,label:"森林—1",children:[{value:1101,label:"树-11",children:[{value:110101,label:"树叶-111"},{value:110102,label:"树叶-112"},{value:110103,label:"树叶-113"},{value:110104,label:"树叶-114"}]},{value:1102,label:"树-12",children:[{value:110201,label:"树叶-121"},{value:110202,label:"树叶-122"},{value:110203,label:"树叶-123"},{value:110204,label:"树叶-124"}]},{value:1103,label:"树-13",children:[{value:110301,label:"树叶-131"},{value:110302,label:"树叶-132"},{value:110303,label:"树叶-133"},{value:110304,label:"树叶-134"}]}]},{value:12,label:"森林—2",children:[{value:1201,label:"树-21",children:[{value:120101,label:"树叶-211"},{value:120102,label:"树叶-212"},{value:120103,label:"树叶-213"},{value:120104,label:"树叶-214"}]},{value:1202,label:"树-22",children:[{value:120201,label:"树叶-221"},{value:120202,label:"树叶-222"},{value:120203,label:"树叶-223"},{value:120204,label:"树叶-224"}]},{value:1203,label:"树-23",children:[{value:120301,label:"树叶-231"},{value:120302,label:"树叶-232"},{value:120303,label:"树叶-233"},{value:120304,label:"树叶-234"}]}]}];break}this.openSelect()},maskCloseableChange:function(e){this.maskCloseable=0===e.index,this.openSelect()},cancelSelect:function(e){this.$tn.message.toast("点击了取消按钮")},confirmSelect:function(e){var t=this;switch(console.log(e),this.mode){case"single":this.result=e[0]["label"];break;case"multi":this.result="",e.length&&e.map((function(e,a){0!==a&&(t.result+=" - "),t.result+=e.label}));break;case"multi-auto":this.result="",e.length&&e.map((function(e,a){0!==a&&(t.result+=" - "),t.result+=e.label}));break}},openSelect:function(){this.show=!0}}};t.default=i},ef28:function(e,t,a){"use strict";a.r(t);var l=a("ce46"),n=a("7f9f");for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("e510");var o=a("f0c5"),r=Object(o["a"])(n["default"],l["b"],l["c"],!1,null,"778c77a3",null,!1,l["a"],void 0);t["default"]=r.exports}}]);