(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-list-list"],{"073f":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={name:"tn-loading",props:{mode:{type:String,default:"circle"},show:{type:Boolean,default:!0},animation:{type:Boolean,default:!0},color:{type:String,default:""},size:{type:Number,default:34}},computed:{loadStyle:function(){var t={};return t.width=this.size+"rpx",t.height=t.width,"circle"===this.mode&&(t.borderColor="#E6E6E6 #E6E6E6 #E6E6E6 ".concat(this.color?this.color:"#AAAAAA")),t}}};i.default=n},1891:function(t,i,e){"use strict";e.r(i);var n=e("f671"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"1e45":function(t,i,e){"use strict";e.r(i);var n=e("330a"),a=e("1891");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("2655");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"56192e3f",null,!1,n["a"],void 0);i["default"]=l.exports},2655:function(t,i,e){"use strict";var n=e("f6cc"),a=e.n(n);a.a},"27a2":function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3"),e("caad"),e("2532"),e("fb6a"),e("baa5");var a=n(e("1910")),s={mixins:[a.default],options:{virtualHost:!0},name:"tn-tag",props:{index:{type:[Number,String],default:"0"},shape:{type:String,default:""},size:{type:String,default:""},width:{type:String,default:""},height:{type:String,default:""},padding:{type:String,default:""},margin:{type:String,default:"0"},plain:{type:Boolean,default:!1},originLeft:{type:Boolean,default:!1},originRight:{type:Boolean,default:!1}},computed:{tagClass:function(){var t="";switch(this.shape){case"radius":t+=" tn-radius";break;case"circle":t+=" tn-round";break;case"circleLeft":t+=" tn-tag--fillet-left";break;case"circleRight":t+=" tn-tag--fillet-right";break}if(this.plain&&(t+=" tn-tag--plain tn-border-solid",""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg"))){var i=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(i)}return this.originLeft&&(t+=" tn-tag--origin-left"),this.originRight&&(t+=" tn-tag--origin-right"),t},tagStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 12rpx",t.fontSize="20rpx",t.height="32rpx";break;case"lg":t.padding="0 20rpx",t.fontSize="28rpx",t.height="62rpx";break;default:t.padding="0 16rpx",t.fontSize="24rpx",t.height="48rpx";break}return t.width=this.width||"120rpx",t.height=this.height||t.height,t.padding=this.padding||t.padding,this.margin&&(t.margin=this.margin),this.fontColorStyle&&(t.color=this.fontColorStyle),0!==this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),this.backgroundColorClass||(t.backgroundColor=this.plain?"":this.backgroundColorStyle||"#FFFFFF",this.plain&&(t.borderColor=this.backgroundColorStyle||"#080808")),t}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}}};i.default=s},"27b3":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={tnNavBar:e("72c2").default,tnListView:e("d224").default,tnButton:e("01c1").default,tnListCell:e("7cc0").default,tnTag:e("a308").default,tnAvatarGroup:e("309b").default,tnAvatar:e("26b4").default,tnModal:e("1e45").default,tnSwitch:e("a350").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"components-list tn-safe-area-inset-bottom"},[e("tn-nav-bar",{attrs:{fixed:!0}},[t._v("列表")]),e("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[e("demo-title",{attrs:{title:"基础"}},[e("v-uni-view",[e("tn-list-view",{attrs:{unlined:"bottom",customTitle:!0}},[e("template",{slot:"title"},[e("v-uni-view",{staticClass:"custom-title"},[e("tn-button",{attrs:{shape:"",backgroundColor:"tn-main-gradient-indigo"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openOptions.apply(void 0,arguments)}}},[t._v("设置")])],1)],1),e("tn-list-cell",{attrs:{arrow:t.cellArrow,arrowRight:t.cellArrowRight,unlined:t.cellUnlined,lineLeft:t.cellLineLeft,lineRight:t.cellLineRight}},[t._v("菜单一")]),e("tn-list-cell",{attrs:{arrow:t.cellArrow,arrowRight:t.cellArrowRight,unlined:t.cellUnlined,lineLeft:t.cellLineLeft,lineRight:t.cellLineRight}},[t._v("菜单二")]),e("tn-list-cell",{attrs:{arrow:t.cellArrow,arrowRight:t.cellArrowRight,unlined:t.cellUnlined,lineLeft:t.cellLineLeft,lineRight:t.cellLineRight}},[t._v("菜单三")])],2)],1),e("v-uni-view",{staticClass:"tn-margin-top"},[e("tn-list-view",{attrs:{card:!0,title:"卡片式列表",backgroundColor:"#EFEFEF"}},[e("tn-list-cell",{attrs:{arrow:t.cellArrow,arrowRight:t.cellArrowRight,unlined:t.cellUnlined,lineLeft:t.cellLineLeft,lineRight:t.cellLineRight}},[t._v("菜单一")]),e("tn-list-cell",{attrs:{arrow:t.cellArrow,arrowRight:t.cellArrowRight,unlined:t.cellUnlined,lineLeft:t.cellLineLeft,lineRight:t.cellLineRight}},[t._v("菜单二")]),e("tn-list-cell",{attrs:{arrow:t.cellArrow,arrowRight:t.cellArrowRight,unlined:t.cellUnlined,lineLeft:t.cellLineLeft,lineRight:t.cellLineRight}},[t._v("菜单三")])],1)],1)],1),e("demo-title",{attrs:{title:"列表项单独使用"}},[e("v-uni-view",[e("tn-list-cell",[t._v("普通列表")])],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",{attrs:{radius:!0}},[t._v("圆角列表")])],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",[e("v-uni-view",{staticClass:"list-icon-text"},[e("v-uni-view",{staticClass:"list__left"},[e("v-uni-view",{staticClass:"list__left__icon tn-icon-discover tn-color-gray"}),e("v-uni-view",{staticClass:"list__left__text"},[t._v("图标 + 文字")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",[e("v-uni-view",{staticClass:"list-image-text"},[e("v-uni-view",{staticClass:"list__left"},[e("v-uni-image",{staticClass:"list__left__image",attrs:{src:"/static/favicon.ico"}}),e("v-uni-view",{staticClass:"list__left__text"},[t._v("图片 + 文字")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",[e("v-uni-view",{staticClass:"list-icon-text"},[e("v-uni-view",{staticClass:"list__left"},[e("v-uni-view",{staticClass:"list__left__icon tn-icon-order tn-color-indigo"}),e("v-uni-view",{staticClass:"list__left__text"},[t._v("文本")])],1),e("v-uni-view",{staticClass:"list__right"},[e("v-uni-view",{staticClass:"tn-text-sm tn-color-gray"},[t._v("定一个小目标吧")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",[e("v-uni-view",{staticClass:"list-icon-text"},[e("v-uni-view",{staticClass:"list__left"},[e("v-uni-view",{staticClass:"list__left__icon tn-icon-upload tn-color-cyan"}),e("v-uni-view",{staticClass:"list__left__text"},[t._v("按钮")])],1),e("v-uni-view",{staticClass:"list__right"},[e("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",shape:"round",size:"sm"}},[e("v-uni-text",{staticClass:"tn-icon-upload tn-margin-right-xs"}),t._v("上传")],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",[e("v-uni-view",{staticClass:"list-icon-text"},[e("v-uni-view",{staticClass:"list__left"},[e("v-uni-view",{staticClass:"list__left__icon tn-icon-tag tn-text-clip tn-main-gradient-orangeyellow"}),e("v-uni-view",{staticClass:"list__left__text"},[t._v("标签")])],1),e("v-uni-view",{staticClass:"list__right"},[e("tn-tag",{attrs:{backgroundColor:"tn-main-gradient-indigo",shape:"circle",margin:"0rpx 5rpx"}},[t._v("篮球")]),e("tn-tag",{attrs:{backgroundColor:"tn-main-gradient-indigo",shape:"circle",margin:"0rpx 5rpx"}},[t._v("足球")]),e("tn-tag",{attrs:{backgroundColor:"tn-main-gradient-indigo",shape:"circle",margin:"0rpx 5rpx"}},[t._v("小球")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-margin-top-sm"},[e("tn-list-cell",[e("v-uni-view",{staticClass:"list-icon-text"},[e("v-uni-view",{staticClass:"list__left"},[e("v-uni-view",{staticClass:"list__left__icon tn-icon-emoji-good tn-text-clip tn-main-gradient-orangered"}),e("v-uni-view",{staticClass:"list__left__text"},[t._v("头像组")])],1),e("v-uni-view",{staticClass:"list__right"},[e("tn-avatar-group",{attrs:{lists:t.avatarGroupList,size:"sm"}})],1)],1)],1)],1)],1),e("demo-title",{attrs:{title:"聊天示例"}},[e("tn-list-view",{attrs:{title:"消息列表",unlined:"bottom"}},[e("tn-list-cell",{attrs:{unlined:!0}},[e("v-uni-view",{staticClass:"message"},[e("v-uni-view",{staticClass:"message__left"},[e("tn-avatar",{attrs:{src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg"}})],1),e("v-uni-view",{staticClass:"message__middle"},[e("v-uni-view",{staticClass:"message__name"},[t._v("小图鸟")]),e("v-uni-view",{staticClass:"message__content tn-text-ellipsis"},[t._v("欢迎使用图鸟UI，图鸟UI专做UI界面100年")])],1),e("v-uni-view",{staticClass:"message__right"},[e("v-uni-view",{staticClass:"message__time"},[t._v("13:14")]),e("v-uni-view",{staticClass:"message__tips"},[e("tn-tag",{attrs:{backgroundColor:"tn-bg-red",fontColor:"tn-color-white",shape:"circle",width:"auto",size:"sm"}},[t._v("99")])],1)],1)],1)],1),e("tn-list-cell",{attrs:{unlined:!0}},[e("v-uni-view",{staticClass:"message"},[e("v-uni-view",{staticClass:"message__left"},[e("tn-avatar",{attrs:{src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg",badge:!0,badgeText:"99",badgeBgColor:"tn-bg-red",badgeColor:"tn-color-white"}})],1),e("v-uni-view",{staticClass:"message__middle"},[e("v-uni-view",{staticClass:"message__name"},[t._v("小图鸟")]),e("v-uni-view",{staticClass:"message__content tn-text-ellipsis"},[t._v("欢迎使用图鸟UI，图鸟UI专做UI界面100年")])],1),e("v-uni-view",{staticClass:"message__right"},[e("v-uni-view",{staticClass:"message__time"},[t._v("13:14")]),e("v-uni-view",{staticClass:"message__tips"},[e("v-uni-text",{staticClass:"message__tips__icon tn-icon-sound-close"})],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"tn-padding-bottom-lg"}),e("tn-modal",{attrs:{custom:!0,padding:"0"},model:{value:t.showListOptions,callback:function(i){t.showListOptions=i},expression:"showListOptions"}},[e("tn-list-view",[e("tn-list-cell",[e("v-uni-view",{staticClass:"list__options"},[e("v-uni-view",{staticClass:"list__options__title"},[t._v("下划线")]),e("v-uni-view",{staticClass:"list__options__switch"},[e("tn-switch",{attrs:{leftIcon:"close",rightIcon:"success"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.closeOptions.apply(void 0,arguments)}},model:{value:t.cellShowBorderLine,callback:function(i){t.cellShowBorderLine=i},expression:"cellShowBorderLine"}})],1)],1)],1),t.cellUnlined?t._e():e("tn-list-cell",[e("v-uni-view",{staticClass:"list__options"},[e("v-uni-view",{staticClass:"list__options__title"},[t._v("长下划线")]),e("v-uni-view",{staticClass:"list__options__switch"},[e("tn-switch",{attrs:{leftIcon:"close",rightIcon:"success"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.closeOptions.apply(void 0,arguments)}},model:{value:t.cellLongBorderLine,callback:function(i){t.cellLongBorderLine=i},expression:"cellLongBorderLine"}})],1)],1)],1),e("tn-list-cell",[e("v-uni-view",{staticClass:"list__options"},[e("v-uni-view",{staticClass:"list__options__title"},[t._v("箭头")]),e("v-uni-view",{staticClass:"list__options__switch"},[e("tn-switch",{attrs:{leftIcon:"close",rightIcon:"success"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.closeOptions.apply(void 0,arguments)}},model:{value:t.cellArrow,callback:function(i){t.cellArrow=i},expression:"cellArrow"}})],1)],1)],1),t.cellArrow?e("tn-list-cell",[e("v-uni-view",{staticClass:"list__options"},[e("v-uni-view",{staticClass:"list__options__title"},[t._v("无边距箭头")]),e("v-uni-view",{staticClass:"list__options__switch"},[e("tn-switch",{attrs:{leftIcon:"close",rightIcon:"success"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.closeOptions.apply(void 0,arguments)}},model:{value:t.cellNoPaddingArrow,callback:function(i){t.cellNoPaddingArrow=i},expression:"cellNoPaddingArrow"}})],1)],1)],1):t._e()],1)],1)],1)],1)},s=[]},"309b":function(t,i,e){"use strict";e.r(i);var n=e("f6b4"),a=e("7ac2");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("5e9e");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2e0066d9",null,!1,n["a"],void 0);i["default"]=l.exports},"30c3":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-avatar-group[data-v-2e0066d9]{display:flex;flex-direction:row}.tn-avatar-group__item[data-v-2e0066d9]{position:relative}',""]),t.exports=i},"31f4":function(t,i,e){var n=e("9b54");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2686aab8",n,!0,{sourceMap:!1,shadowMode:!1})},"330a":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={tnPopup:e("9a45").default,tnButton:e("01c1").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.value?e("v-uni-view",{staticClass:"tn-modal-class tn-modal"},[e("tn-popup",{attrs:{mode:"center",popup:!1,borderRadius:t.radius,width:t.width,zoom:t.zoom,safeAreaInsetBottom:t.safeAreaInsetBottom,maskCloseable:t.maskCloseable,zIndex:t.zIndex,closeBtn:t.showCloseBtn},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}},[e("v-uni-view",{staticClass:"tn-modal__box",class:[t.backgroundColorClass],style:[t.boxStyle]},[t.custom?e("v-uni-view",[t._t("default")],2):e("v-uni-view",[t.title&&""!==t.title?e("v-uni-view",{staticClass:"tn-modal__box__title"},[t._v(t._s(t.title))]):t._e(),e("v-uni-view",{staticClass:"tn-modal__box__content",class:[t.fontColorClass,t.contentClass],style:t.contentStyle},[t._v(t._s(t.content))]),t.button&&t.button.length?e("v-uni-view",{staticClass:"tn-modal__box__btn-box",class:[2!=t.button.length?"tn-flex-direction-column":""]},[t._l(t.button,(function(i,n){return[e("tn-button",{key:n+"_0",class:[t.button.length>2?"tn-margin-bottom":""],style:{width:2!=t.button.length?"80%":"46%"},attrs:{width:"100%",height:"68rpx",fontSize:26,backgroundColor:i.backgroundColor||"",fontColor:i.fontColor||"",plain:i.plain||!1,shape:i.shape||"round"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick(n)}}},[t._v(t._s(i.text))])]}))],2):t._e()],1)],1)],1)],1):t._e()},s=[]},"35aa":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var n={name:"tn-switch",props:{value:{type:Boolean,default:!1},shape:{type:String,default:"circle"},disabled:{type:Boolean,default:!1},size:{type:Number,default:50},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},loading:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1}},computed:{switchStyle:function(){var t={};return t.fontSize=this.$tn.string.getLengthUnitValue(this.size),t.backgroundColor=this.value?this.activeColor?this.activeColor:"#01BEFF":this.inactiveColor?this.inactiveColor:"#AAAAAA",t},switchNodeStyle:function(){var t={};return t.width=this.$tn.string.getLengthUnitValue(this.size),t.height=t.width,t},iconStyle:function(){var t={};return t.fontSize=this.$tn.string.getLengthUnitValue(this.size-20),t.lineHeight=this.$tn.string.getLengthUnitValue(this.size),t},loadingColor:function(){return this.value?this.activeColor:""}},data:function(){return{}},methods:{click:function(){var t=this;this.disabled||this.loading||(this.vibrateShort&&uni.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){t.$emit("change",t.value?t.activeValue:t.inactiveValue)})))}}};i.default=n},"3c0d":function(t,i,e){var n=e("cdd5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("451d44e2",n,!0,{sourceMap:!1,shadowMode:!1})},4561:function(t,i,e){"use strict";e.r(i);var n=e("27b3"),a=e("d2fb");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("847d");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"01a92c0b",null,!1,n["a"],void 0);i["default"]=l.exports},"4f79":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3"),e("ac1f"),e("5319"),e("00b4");var n={name:"tn-avatar-group",props:{lists:{type:Array,default:function(){return[]}},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},imgMode:{type:String,default:"aspectFill"},gap:{type:Number,default:.4}},computed:{itemStyle:function(){var t=this;return function(i){var e={};if(t._checkSizeIsInline())switch(t.size){case"sm":e.marginLeft=0!=i?"".concat(-48*t.gap,"rpx"):"";break;case"lg":e.marginLeft=0!=i?"".concat(-96*t.gap,"rpx"):"";break;case"xl":e.marginLeft=0!=i?"".concat(-128*t.gap,"rpx"):"";break}else{var n=Number(t.size.replace(/(px|rpx)/g,""))||64;e.marginLeft=0!=i?"-".concat(n*t.gap,"rpx"):""}return e}}},data:function(){return{}},methods:{_checkSizeIsInline:function(){return!!/(xs|sm|md|lg|xl|xxl)/.test(this.size)}}};i.default=n},"5dc6":function(t,i,e){var n=e("7f89");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("3ffd7264",n,!0,{sourceMap:!1,shadowMode:!1})},"5e9e":function(t,i,e){"use strict";var n=e("7e24"),a=e.n(n);a.a},6906:function(t,i,e){"use strict";var n=e("b8b3"),a=e.n(n);a.a},"7ac2":function(t,i,e){"use strict";e.r(i);var n=e("4f79"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"7d6c":function(t,i,e){"use strict";e.r(i);var n=e("073f"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"7e24":function(t,i,e){var n=e("30c3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2cead7a4",n,!0,{sourceMap:!1,shadowMode:!1})},"7f89":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.components-list[data-v-01a92c0b]{background-color:#f4f4f4;min-height:100vh}.custom-title[data-v-01a92c0b]{display:flex;align-items:flex-end;justify-content:flex-end;padding:%?10?% %?20?%}.list__options[data-v-01a92c0b]{display:flex;align-items:center;justify-content:space-between}.list__left[data-v-01a92c0b]{display:flex;align-items:center;justify-content:flex-start}.list__left__icon[data-v-01a92c0b], .list__left__image[data-v-01a92c0b]{margin-right:%?18?%}.list__right[data-v-01a92c0b]{display:flex;align-items:center;justify-content:flex-end}.list-icon-text[data-v-01a92c0b], .list-image-text[data-v-01a92c0b]{display:flex;align-items:center;justify-content:space-between}.list-image-text .list__left__image[data-v-01a92c0b]{width:%?20?%;height:%?20?%}.message[data-v-01a92c0b]{display:flex;flex-direction:row;align-items:center;justify-content:space-around}.message__left[data-v-01a92c0b]{width:10%}.message__middle[data-v-01a92c0b]{width:80%;padding-left:%?20?%;padding-right:%?40?%}.message__right[data-v-01a92c0b]{width:10%;display:flex;flex-direction:column;align-items:center;justify-content:center}.message__name[data-v-01a92c0b]{font-size:%?32?%;margin-bottom:%?8?%}.message__content[data-v-01a92c0b]{font-size:%?26?%;color:#838383}.message__tips__icon[data-v-01a92c0b]{font-size:%?36?%;color:#aaa}',""]),t.exports=i},"847d":function(t,i,e){"use strict";var n=e("5dc6"),a=e.n(n);a.a},"8e70":function(t,i,e){"use strict";e.r(i);var n=e("27a2"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"92bc":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-loading-circle[data-v-198243dd]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e6e6e6 #e6e6e6 #e6e6e6 #aaa}.tn-loading-circle--animation[data-v-198243dd]{animation:tn-circle-data-v-198243dd 1s linear infinite;-webkit-animation:tn-circle-data-v-198243dd 1s linear infinite}.tn-loading-flower[data-v-198243dd]{display:inline-block;vertical-align:middle;width:%?28?%;height:%?28?%;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.tn-loading-flower--animation[data-v-198243dd]{animation:tn-flower-data-v-198243dd 1s steps(12) infinite;-webkit-animation:tn-flower-data-v-198243dd 1s steps(12) infinite}@-webkit-keyframes tn-flower-data-v-198243dd{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes tn-flower-data-v-198243dd{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes tn-circle-data-v-198243dd{0%{transform:rotate(0);-webkit-transform:rotate(0)}100%{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes tn-circle-data-v-198243dd{0%{transform:rotate(0);-webkit-transform:rotate(0)}100%{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}',""]),t.exports=i},9344:function(t,i,e){"use strict";e.r(i);var n=e("35aa"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"9b54":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-tag[data-v-d81ec1c8]{vertical-align:middle;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,sans-serif;white-space:nowrap}.tn-tag--fillet-left[data-v-d81ec1c8]{border-radius:%?50?% 0 0 %?50?%}.tn-tag--fillet-right[data-v-d81ec1c8]{border-radius:0 %?50?% %?50?% 0}.tn-tag--plain[data-v-d81ec1c8]{background-color:initial!important;background-image:none}.tn-tag--plain.tn-round[data-v-d81ec1c8]{border-radius:%?1000?%!important}.tn-tag--plain.tn-radius[data-v-d81ec1c8]{border-radius:%?12?%!important}.tn-tag--origin-left[data-v-d81ec1c8]{-webkit-transform-origin:0 center;transform-origin:0 center}.tn-tag--origin-right[data-v-d81ec1c8]{-webkit-transform-origin:100% center;transform-origin:100% center}',""]),t.exports=i},a308:function(t,i,e){"use strict";e.r(i);var n=e("a650"),a=e("8e70");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("bdba");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"d81ec1c8",null,!1,n["a"],void 0);i["default"]=l.exports},a350:function(t,i,e){"use strict";e.r(i);var n=e("d2c2"),a=e("9344");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("f531");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3f0db124",null,!1,n["a"],void 0);i["default"]=l.exports},a650:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tn-tag-class tn-tag",class:[t.tagClass,t.backgroundColorClass,t.fontColorClass],style:[t.tagStyle],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},a=[]},aa82:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement,i=this._self._c||t;return this.show?i("v-uni-view",{staticClass:"tn-loading-class tn-loading",class:["tn-loading-"+this.mode,this.animation?"tn-loading-"+this.mode+"--animation":""],style:[this.loadStyle]}):this._e()},a=[]},b8b3:function(t,i,e){var n=e("92bc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("ca598720",n,!0,{sourceMap:!1,shadowMode:!1})},bdba:function(t,i,e){"use strict";var n=e("31f4"),a=e.n(n);a.a},cdd5:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-switch[data-v-3f0db124]{display:inline-block;position:relative;box-sizing:initial;width:2em;height:1em;font-size:%?50?%;background-color:#aaa;transition:background-color .3s}.tn-switch__node[data-v-3f0db124]{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:1;background-color:#fff;-webkit-transform:scale(.9);transform:scale(.9);box-shadow:0 %?6?% %?2?% 0 rgba(0,0,0,.05),0 %?4?% %?4?% 0 rgba(0,0,0,.1),0 %?6?% %?6?% 0 rgba(0,0,0,.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);-webkit-transition:transform .3s cubic-bezier(.3,1.05,.4,1.05)}.tn-switch__node__loading[data-v-3f0db124]{display:flex;flex-direction:row;align-items:center;justify-content:center}.tn-switch__node--circle[data-v-3f0db124]{border-radius:100%}.tn-switch__node--square[data-v-3f0db124]{border-radius:15%}.tn-switch__icon[data-v-3f0db124]{color:#fff;font-size:%?30?%;line-height:%?50?%;height:100%;vertical-align:middle;position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.tn-switch__icon--left[data-v-3f0db124]{top:0;left:%?10?%}.tn-switch__icon--right[data-v-3f0db124]{top:0;right:%?10?%}.tn-switch__icon--show[data-v-3f0db124]{-webkit-transform:scale(1);transform:scale(1)}.tn-switch--circle[data-v-3f0db124]{border-radius:1em}.tn-switch--square[data-v-3f0db124]{border-radius:.1em}.tn-switch--on[data-v-3f0db124]{background-color:#01beff}.tn-switch--on .tn-switch__node[data-v-3f0db124]{-webkit-transform:translateX(100%) scale(.9);transform:translateX(100%) scale(.9)}.tn-switch--disabled[data-v-3f0db124]{opacity:.4}',""]),t.exports=i},d047:function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("4bce")),s={name:"componentsList",components:{demoTitle:a.default},data:function(){return{showListOptions:!1,cellShowBorderLine:!0,cellLongBorderLine:!1,cellNoPaddingArrow:!1,cellArrow:!1,cellArrowRight:!0,cellUnlined:!1,cellLineLeft:!0,cellLineRight:!0,avatarGroupList:[{src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg"},{src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg"},{src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg"},{src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg"}]}},watch:{cellShowBorderLine:function(t){this.cellUnlined=!t},cellLongBorderLine:function(t){t?(this.cellLineLeft=!1,this.cellLineRight=!1):(this.cellLineLeft=!0,this.cellLineRight=!0)},cellNoPaddingArrow:function(t){this.cellArrowRight=!t}},methods:{openOptions:function(){this.showListOptions=!0},closeOptions:function(){this.showListOptions=!1}}};i.default=s},d2c2:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={tnLoading:e("fa64").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tn-switch-class tn-switch",class:[t.value?"tn-switch--on":"",t.disabled?"tn-switch--disabled":"","tn-switch--"+t.shape],style:[t.switchStyle],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tn-switch__node",class:["tn-switch__node--"+t.shape],style:[t.switchNodeStyle]},[e("tn-loading",{staticClass:"tn-switch__node__loading",attrs:{show:t.loading,mode:"flower",size:.6*t.size,color:t.loadingColor}})],1),""!==t.leftIcon?e("v-uni-view",{staticClass:"tn-switch__icon tn-switch__icon--left",class:["tn-icon-"+t.leftIcon,t.value?"tn-switch__icon--show":""],style:[t.iconStyle]}):t._e(),""!==t.rightIcon?e("v-uni-view",{staticClass:"tn-switch__icon tn-switch__icon--right",class:["tn-icon-"+t.rightIcon,t.value?"":"tn-switch__icon--show"],style:[t.iconStyle]}):t._e()],1)},s=[]},d2fb:function(t,i,e){"use strict";e.r(i);var n=e("d047"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},f531:function(t,i,e){"use strict";var n=e("3c0d"),a=e.n(n);a.a},f671:function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var a=n(e("1910")),s={mixins:[a.default],name:"tn-modal",props:{value:{type:Boolean,default:!1},width:{type:String,default:"84%"},padding:{type:String,default:""},radius:{type:Number,default:12},title:{type:String,default:""},content:{type:String,default:""},button:{type:Array,default:function(){return[]}},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseable:{type:Boolean,default:!0},showCloseBtn:{type:Boolean,default:!1},zoom:{type:Boolean,default:!0},custom:{type:Boolean,default:!1},zIndex:{type:Number,default:0}},computed:{boxStyle:function(){var t={};return this.padding&&(t.padding=this.padding),this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),t},contentClass:function(){var t="";return this.title?t+=" tn-margin-top":t+=" tn-modal__box__content--no-title",t},contentStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),this.fontColorStyle&&(t.color=this.fontColorStyle),t}},data:function(){return{}},methods:{handleClick:function(t){this.value&&this.$emit("click",{index:Number(t)})},close:function(){this.$emit("cancel"),this.$emit("input",!1)}}};i.default=s},f6b4:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={tnAvatar:e("26b4").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tn-avatar-group-class tn-avatar-group"},t._l(t.lists,(function(i,n){return e("v-uni-view",{key:n,staticClass:"tn-avatar-group__item",style:[t.itemStyle(n)]},[e("tn-avatar",{attrs:{src:i.src||"",text:i.text||"",icon:i.icon||"",size:t.size,shape:t.shape,imgMode:t.imgMode,border:!0,borderSize:4}})],1)})),1)},s=[]},f6cc:function(t,i,e){var n=e("f9cd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("3dbe72d3",n,!0,{sourceMap:!1,shadowMode:!1})},f9cd:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-modal__box[data-v-56192e3f]{position:relative;box-sizing:border-box;background-color:#fff;padding:%?40?% %?64?%}.tn-modal__box__title[data-v-56192e3f]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tn-modal__box__content[data-v-56192e3f]{text-align:center;padding-bottom:%?30?%;color:#080808;font-size:%?28?%}.tn-modal__box__content--no-title[data-v-56192e3f]{padding-bottom:%?0?%!important}.tn-modal__box__btn-box[data-v-56192e3f]{width:100%;display:flex;align-items:center;justify-content:space-between}.tn-modal__box__content ~ .tn-modal__box__btn-box[data-v-56192e3f]{margin-top:%?30?%}',""]),t.exports=i},fa64:function(t,i,e){"use strict";e.r(i);var n=e("aa82"),a=e("7d6c");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("6906");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"198243dd",null,!1,n["a"],void 0);i["default"]=l.exports}}]);