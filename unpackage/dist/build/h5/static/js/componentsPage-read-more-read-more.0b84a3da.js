(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-read-more-read-more"],{"0c75":function(t,e,n){"use strict";n.r(e);var i=n("5ae4"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},1074:function(t,e,n){"use strict";var i=n("de99"),o=n.n(i);o.a},"196c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo-title"},[n("v-uni-view",["first"===t.type?n("v-uni-view",{staticClass:"main_title"},[t.leftIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),n("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?n("v-uni-view",{staticClass:"second_title"},[n("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),n("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},o=[]},"29c8":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-read-more__content[data-v-f701570c]{font-size:%?28?%;color:#080808;line-height:1.8;text-align:left;overflow:hidden;transition:all .3s linear}.tn-read-more__show-more[data-v-f701570c]{padding-top:0;background:none;margin-top:%?20?%}.tn-read-more__show-more__wrap[data-v-f701570c]{position:relative;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;padding-bottom:%?26?%}.tn-read-more__show-more--text[data-v-f701570c]{display:flex;flex-direction:row;align-items:center;justify-content:center;line-height:1}.tn-read-more__show-more--icon[data-v-f701570c]{margin-left:%?14?%}',""]),t.exports=e},"2cc6":function(t,e,n){"use strict";n.r(e);var i=n("ce19"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},3702:function(t,e,n){var i=n("29c8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1e05a3be",i,!0,{sourceMap:!1,shadowMode:!1})},"494b":function(t,e,n){"use strict";n.r(e);var i=n("534f"),o=n("2cc6");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2b70a51e",null,!1,i["a"],void 0);e["default"]=r.exports},"534f":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("5d18").default,tnReadMore:n("a276").default},o=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"components-read-more tn-safe-area-inset-bottom"},[e("tn-nav-bar",{attrs:{fixed:!0}},[this._v("ReadMore查看更多")]),e("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[e("demo-title",{attrs:{title:"基本使用"}},[e("tn-read-more",[e("v-uni-rich-text",{attrs:{nodes:this.content}})],1)],1),e("demo-title",{attrs:{title:"允许展开后收起"}},[e("tn-read-more",{attrs:{closeBtn:!0}},[e("v-uni-rich-text",{attrs:{nodes:this.content}})],1)],1),e("demo-title",{attrs:{title:"修改显示内容的高度"}},[e("tn-read-more",{attrs:{closeBtn:!0,showHeight:200}},[e("v-uni-rich-text",{attrs:{nodes:this.content}})],1)],1),e("demo-title",{attrs:{title:"自定义展开收起文本和图标"}},[e("tn-read-more",{attrs:{closeBtn:!0,openText:"付费查看剩余内容",openIcon:"lucky-money",closeText:"下次再看",closeIcon:"close"}},[e("v-uni-rich-text",{attrs:{nodes:this.content}})],1)],1),e("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},a=[]},"53ce":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},"5ae4":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=i},a276:function(t,e,n){"use strict";n.r(e);var i=n("baf8"),o=n("e583");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("cbc7");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"f701570c",null,!1,i["a"],void 0);e["default"]=r.exports},baf8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"tn-read-more-class tn-read-more"},[n("v-uni-view",{staticClass:"tn-read-more__content",style:[t.contentStyle],attrs:{id:t.elId}},[t._t("default")],2),t.isLongContent?n("v-uni-view",{staticClass:"tn-read-more__show-more__wrap",class:{"tn-read-more__show-more":t.showMore},style:[t.innerShadowStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleReadMore.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"tn-read-more__show-more--text",style:[t.fontStyle]},[t._v(t._s(t.showMore?t.closeText:t.openText))]),n("v-uni-view",{staticClass:"tn-read-more__show-more--icon"},[n("v-uni-view",{class:[t.tipIconClass],style:[t.fontStyle]})],1)],1):t._e()],1)],1)},o=[]},cbc7:function(t,e,n){"use strict";var i=n("3702"),o=n.n(i);o.a},cce8:function(t,e,n){"use strict";n.r(e);var i=n("196c"),o=n("0c75");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("1074");var s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5d860f10",null,!1,i["a"],void 0);e["default"]=r.exports},ce19:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("cce8")),a={name:"componentsReadMore",components:{demoTitle:o.default},data:function(){return{content:"噫吁嚱，危乎高哉！\n                蜀道之难，难于上青天！\n                蚕丛及鱼凫，开国何茫然！\n                尔来四万八千岁，不与秦塞通人烟。\n                西当太白有鸟道，可以横绝峨眉巅。\n                地崩山摧壮士死，然后天梯石栈相钩连。\n                上有六龙回日之高标，下有冲波逆折之回川。\n                黄鹤之飞尚不得过，猿猱欲度愁攀援。\n                青泥何盘盘，百步九折萦岩峦。\n                扪参历井仰胁息，以手抚膺坐长叹。\n\n                问君西游何时还？畏途巉岩不可攀。\n                但见悲鸟号古木，雄飞雌从绕林间。\n                又闻子规啼夜月，愁空山。\n                蜀道之难，难于上青天，使人听此凋朱颜！\n                连峰去天不盈尺，枯松倒挂倚绝壁。\n                飞湍瀑流争喧豗，砯崖转石万壑雷。\n                其险也如此，嗟尔远道之人胡为乎来哉！(也如此 一作：也若此)\n\n                剑阁峥嵘而崔嵬，一夫当关，万夫莫开。\n                所守或匪亲，化为狼与豺。\n                朝避猛虎，夕避长蛇，磨牙吮血，杀人如麻。\n                锦城虽云乐，不如早还家。\n                蜀道之难，难于上青天，侧身西望长咨嗟！"}},methods:{}};e.default=a},cfce:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("99af");var o=i(n("7187")),a={name:"tn-read-more",mixins:[o.default],props:{showHeight:{type:Number,default:400},closeBtn:{type:Boolean,default:!1},openText:{type:String,default:"展开阅读全文"},closeText:{type:String,default:"收起"},openIcon:{type:String,default:"down"},closeIcon:{type:String,default:"up"},shadowStyle:{type:Object,default:function(){return{backgroundImage:"linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",paddingTop:"300rpx",marginTop:"-300rpx"}}},index:{type:[Number,String],default:""}},computed:{paramsChange:function(){return"".concat(this.open,"-").concat(this.showHeight)},contentStyle:function(){var t={};return this.isLongContent&&!this.showMore?t.height="".concat(this.showHeight,"rpx"):this.initHeight?t.height="".concat(this.contentHeight,"px"):t.height="auto",t},innerShadowStyle:function(){var t={};return this.showMore||(t=Object.assign(t,this.shadowStyle)),t},fontStyle:function(){var t={};return t.color=this.fontColorStyle?this.fontColorStyle:"#01BEFF",t.fontSize=this.fontSizeStyle?this.fontSizeStyle:"28rpx",t},tipIconClass:function(){if(this.showMore){if(this.closeIcon)return"tn-icon-".concat(this.closeIcon)}else if(this.openIcon)return"tn-icon-".concat(this.openIcon)}},data:function(){return{elId:this.$tn.uuid(),initHeight:!1,isLongContent:!1,showMore:!1,contentHeight:0}},watch:{paramsChange:function(t){var e=this;this.initHeight=!1,this.isLongContent=!1,this.showMore=!0,this.$nextTick((function(){e.init()}))}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;this._tGetRect("#"+this.elId).then((function(e){t.contentHeight=e.height,t.initHeight=!0,e.height>uni.upx2px(t.showHeight)&&(t.isLongContent=!0,t.showMore=!1)}))},toggleReadMore:function(){this.showMore=!this.showMore,this.closeBtn||(this.isLongContent=!1),this.$emit(this.showMore?"open":"closed",this.index)}}};e.default=a},de99:function(t,e,n){var i=n("53ce");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("918657ae",i,!0,{sourceMap:!1,shadowMode:!1})},e583:function(t,e,n){"use strict";n.r(e);var i=n("cfce"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);