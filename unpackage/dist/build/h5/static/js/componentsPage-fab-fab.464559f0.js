(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-fab-fab"],{1183:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tn-fab-class tn-fab",on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n)}}},[e("v-uni-view",{staticClass:"tn-fab__box",class:{"tn-fab--right":"auto"===t.left},style:{left:t.$tn.string.getLengthUnitValue(t.fabLeft||t.left),right:t.$tn.string.getLengthUnitValue(t.fabRight||t.right),bottom:t.$tn.string.getLengthUnitValue(t.fabBottom||t.bottom),zIndex:t.elZIndex}},[t.visibleSync?e("v-uni-view",{staticClass:"tn-fab__btns",class:["tn-fab__btns__animation--"+t.animationType,t.showFab?"tn-fab__btns--visible--"+t.animationType:""]},t._l(t.btnList,(function(n,i){return e("v-uni-view",{key:i,staticClass:"tn-fab__item",class:["tn-fab__item__animation--"+t.animationType,{"tn-fab__item--left":"auto"===t.right}],style:[t.fabItemStyle(i)],on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.handleClick(i)}}},["around"!==t.animationType&&(n.imgUrl||n.icon)?e("v-uni-view",{class:["auto"===t.left?"tn-fab__item__text--right":"tn-fab__item__text--left"],style:{color:n.textColor||"#FFF",fontSize:t.$tn.string.getLengthUnitValue(n.textSize||28)}},[t._v(t._s(n.text||""))]):t._e(),e("v-uni-view",{staticClass:"tn-fab__item__btn",class:[n.bgColor?"":t.backgroundColorClass],style:{width:t.$tn.string.getLengthUnitValue(t.width),height:t.$tn.string.getLengthUnitValue(t.height),lineHeight:t.$tn.string.getLengthUnitValue(t.height),backgroundColor:n.bgColor||t.backgroundColorStyle||"#01BEFF",borderRadius:t.$tn.string.getLengthUnitValue(t.radius)}},[n.imgUrl||n.icon?t._e():e("v-uni-view",{staticClass:"tn-fab__item__btn__title",style:{color:n.textColor||"#fff",fontSize:t.$tn.string.getLengthUnitValue(n.textSize||28)}},[t._v(t._s(n.text||""))]),n.icon?e("v-uni-view",{staticClass:"tn-fab__item__btn__icon",class:["tn-icon-"+n.icon],style:{color:n.iconColor||"#fff",fontSize:t.$tn.string.getLengthUnitValue(n.iconSize||t.iconSize||64)}}):!n.icon&&n.imgUrl?e("v-uni-image",{staticClass:"tn-fab__item__btn__image",style:{width:t.$tn.string.getLengthUnitValue(n.imgWidth||64),height:t.$tn.string.getLengthUnitValue(n.imgHeight||64)},attrs:{src:n.imgUrl}}):t._e()],1)],1)})),1):t._e(),e("v-uni-view",{staticClass:"tn-fab__item__btn tn-fab__item__btn--fab",class:[t.backgroundColorClass,t.fontColorClass,{"tn-fab__item__btn--active":t.showFab}],style:{width:t.$tn.string.getLengthUnitValue(t.width),height:t.$tn.string.getLengthUnitValue(t.height),backgroundColor:t.backgroundColorStyle||!t.backgroundColorClass?"#01BEFF":"",color:t.fontColorStyle||"#fff",borderRadius:t.$tn.string.getLengthUnitValue(t.radius),zIndex:t.elZIndex-1},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.fabClick.apply(void 0,arguments)}}},[t._t("default",[e("v-uni-view",{staticClass:"tn-fab__item__btn__icon",class:["tn-icon-"+t.icon],style:{fontSize:t.$tn.string.getLengthUnitValue(t.iconSize||64)}})])],2)],1),t.visibleSync&&t.showMask?e("v-uni-view",{staticClass:"tn-fab__mask",class:{"tn-fab__mask--visible":t.showFab},style:{zIndex:t.elZIndex-3},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickMask()}}}):t._e()],1)},a=[]},"1e9e":function(t,n,e){"use strict";var i=e("cdc1"),a=e.n(i);a.a},2024:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-fab__box[data-v-b7ce6caa]{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;position:fixed;transition:all .25s ease-in-out}.tn-fab--right[data-v-b7ce6caa]{align-items:flex-end}.tn-fab__btns[data-v-b7ce6caa]{transition:all .25s cubic-bezier(0,.13,0,1.43);-webkit-transform-origin:80% bottom;transform-origin:80% bottom}.tn-fab__btns__animation--up[data-v-b7ce6caa]{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.tn-fab__btns__animation--around[data-v-b7ce6caa]{position:absolute;top:0;left:0}.tn-fab__btns--visible--up[data-v-b7ce6caa]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.tn-fab__item[data-v-b7ce6caa]{display:flex;justify-content:flex-end;align-items:center;padding-bottom:%?20?%}.tn-fab__item__animation--around[data-v-b7ce6caa]{position:absolute;top:0;left:0;transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;padding-bottom:0!important}.tn-fab__item--left[data-v-b7ce6caa]{flex-flow:row-reverse}.tn-fab__item__text--left[data-v-b7ce6caa]{padding-left:%?14?%}.tn-fab__item__text--right[data-v-b7ce6caa]{padding-right:%?14?%}.tn-fab__item__btn[data-v-b7ce6caa]{display:flex;align-items:center;justify-content:center;box-shadow:0 0 %?5?% %?2?% rgba(0,0,0,.07);transition:all .2s linear}.tn-fab__item__btn--active[data-v-b7ce6caa]{-webkit-animation-name:fab-button-animation-data-v-b7ce6caa;animation-name:fab-button-animation-data-v-b7ce6caa;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:cubic-bezier(0,.13,0,1.43);animation-timing-function:cubic-bezier(0,.13,0,1.43)}.tn-fab__item__btn__title[data-v-b7ce6caa]{width:90%;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tn-fab__item__btn__icon[data-v-b7ce6caa]{text-align:center;font-size:%?64?%}.tn-fab__item__btn__image[data-v-b7ce6caa]{display:block}.tn-fab__mask[data-v-b7ce6caa]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);transition:all .2s ease-in-out;opacity:0}.tn-fab__mask--visible[data-v-b7ce6caa]{opacity:1}@-webkit-keyframes fab-button-animation-data-v-b7ce6caa{0%{-webkit-transform:scale(.6);transform:scale(.6)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes fab-button-animation-data-v-b7ce6caa{0%{-webkit-transform:scale(.6);transform:scale(.6)}100%{-webkit-transform:scale(1);transform:scale(1)}}',""]),t.exports=n},"4caf":function(t,n,e){"use strict";e.r(n);var i=e("db83"),a=e("e563");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var s=e("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"8220881c",null,!1,i["a"],void 0);n["default"]=r.exports},"5f05":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("5a5f")),o={name:"componentsFab",components:{dynamicDemoTemplate:a.default},data:function(){return{left:"auto",right:40,bottom:100,width:88,height:88,iconSize:64,backgroundColor:"#01BEFF",fontColor:"#FFFFFF",icon:"open",animationType:"up",showMask:!0,btnList:[{icon:"logo-tuniao",text:"图鸟科技",bgColor:"#E72F8C"},{text:"UI",textSize:32,bgColor:"#FF7043"},{icon:"share-triangle",iconSize:32,iconColor:"#AAAAAA",bgColor:"#24F083"}],tips:["无需依赖额外的样式文件","使用tn-fab组件"],sectionList:[{name:"参数切换",section:[{title:"悬浮按钮位置",optional:["左侧","右侧"],methods:"positionChange",current:1},{title:"自定义悬浮按钮信息",optional:["默认","自定义"],methods:"customFabChange"},{title:"自定义尺寸",optional:["默认","自定义"],methods:"sizeChange"},{title:"动画类型",optional:["向上弹出","圆环弹出"],methods:"animationChange"},{title:"遮罩显示",optional:["显示","隐藏"],methods:"maskChange"}]}]}},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},positionChange:function(t){switch(t.index){case 0:this.left=40,this.right="auto",this.bottom=100;break;case 1:this.left="auto",this.right=40,this.bottom=100;break}},customFabChange:function(t){switch(t.index){case 0:this.backgroundColor="#01BEFF",this.fontColor="#FFFFFF",this.icon="open";break;case 1:this.backgroundColor="tn-cool-bg-color-1",this.fontColor="#FFFFFF",this.icon="up";break}},sizeChange:function(t){switch(t.index){case 0:this.width=88,this.height=88,this.iconSize=64;break;case 1:this.width=64,this.height=64,this.iconSize=48;break}},maskChange:function(t){switch(t.index){case 0:this.showMask=!0;break;case 1:this.showMask=!1;break}},animationChange:function(t){switch(t.index){case 0:this.animationType="up";break;case 1:this.animationType="around";break}},clickFabItem:function(t){this.$tn.message.toast("点击了第 ".concat(t.index," 个选项"))}}};n.default=o},"70c5":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("c7eb")),o=i(e("1da1"));e("a9e3"),e("99af");var s=i(e("c846")),r={name:"tn-fab",mixins:[s.default],props:{btnList:{type:Array,default:function(){return[]}},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:88},height:{type:[String,Number],default:88},iconSize:{type:[String,Number],default:64},icon:{type:String,default:"open"},radius:{type:[String,Number],default:"50%"},left:{type:[String,Number],default:"auto"},right:{type:[String,Number],default:"auto"},bottom:{type:[String,Number],default:100},animationType:{type:String,default:"up"},aroundBtnDistance:{type:Number,default:10},zIndex:{type:Number,default:0},showMask:{type:Boolean,default:!0},maskCloseable:{type:Boolean,default:!0}},data:function(){return{showFab:!1,visibleSync:!1,timer:null,fabLeft:0,fabRight:0,fabBottom:0,fabBtnInfo:{width:0,height:0,left:0,right:0,bottom:0},systemInfo:{width:0,height:0},updateProps:!1}},computed:{elZIndex:function(){return this.zIndex||this.$tn.zIndex.fab},propsData:function(){return[this.width,this.height,this.left,this.right,this.bottom]},fabItemStyle:function(){var t=this;return function(n){var e={zIndex:t.elZIndex-2};if("up"===t.animationType||!t.showFab)return e;var i=1;return"auto"===t.left?i=1:"auto"===t.right&&(i=-1),e.transform="rotate(".concat(i*n*60,"deg) translateX(").concat((t.aroundBtnDistance+t.fabBtnInfo.width)*-i,"px)"),e}}},watch:{propsData:function(){this.updateProps=!0}},mounted:function(){var t=this;this.$nextTick((function(){t.getFabBtnRectInfo()}))},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},methods:{handleClick:function(t){this.close(),this.$emit("click",{index:t})},fabClick:function(){if(this.showFab)this.close();else{if(this.visibleSync)return void(this.visibleSync=!1);this.open()}},clickMask:function(){this.showMask&&this.maskCloseable&&this.close()},open:function(){this.change("visibleSync","showFab",!0),this.translateFabPosition()},close:function(){this.change("showFab","visibleSync",!1),this.fabLeft=0,this.fabRight=0,this.fabBottom=0},change:function(t,n,e){var i=this;this[t]=e,this.timer=e?setTimeout((function(){i[n]=e,i.$emit(e?"open":"close"),clearTimeout(i.timer)}),10):setTimeout((function(){i[n]=e,i.$emit(e?"open":"close"),clearTimeout(i.timer)}),250)},getFabBtnRectInfo:function(){var t=this;return(0,o.default)((0,a.default)().mark((function n(){var e,i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=uni.getSystemInfoSync(),n.next=3,t._tGetRect(".tn-fab__item__btn--fab");case 3:if(i=n.sent,i){n.next=7;break}return setTimeout((function(){t.getFabBtnRectInfo()}),10),n.abrupt("return");case 7:console.log(i),t.systemInfo={width:e.windowWidth,height:e.windowHeight},t.fabBtnInfo.width=i.width,t.fabBtnInfo.height=i.height,t.fabBtnInfo.left=i.left,t.fabBtnInfo.right=i.right,t.fabBtnInfo.bottom=i.bottom;case 14:case"end":return n.stop()}}),n)})))()},translateFabPosition:function(){if(this.updateProps&&(this.getFabBtnRectInfo(),this.updateProps=!1),"up"!==this.animationType){var t=this.fabBtnInfo.width+this.aroundBtnDistance+10;"auto"===this.left&&t>this.systemInfo.width-this.fabBtnInfo.right?this.fabRight=t+"px":"auto"===this.right&&t>this.fabBtnInfo.left&&(this.fabLeft=t+"px"),t>this.systemInfo.height-this.fabBtnInfo.bottom&&(this.fabBottom=t+"px")}}}};n.default=r},8439:function(t,n,e){"use strict";e.r(n);var i=e("1183"),a=e("d269");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("1e9e");var s=e("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"b7ce6caa",null,!1,i["a"],void 0);n["default"]=r.exports},cdc1:function(t,n,e){var i=e("2024");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("0bf0b2e4",i,!0,{sourceMap:!1,shadowMode:!1})},d269:function(t,n,e){"use strict";e.r(n);var i=e("70c5"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},db83:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("75e2").default,tnFab:e("8439").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"components-fab"},[e("tn-nav-bar",{attrs:{fixed:!0}},[t._v("fab悬浮按钮")]),e("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[e("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!1},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)}}},[e("v-uni-view",[t._v("请点击下边悬浮按钮")])],1)],1),e("tn-fab",{attrs:{btnList:t.btnList,left:t.left,right:t.right,bottom:t.bottom,width:t.width,height:t.height,iconSize:t.iconSize,backgroundColor:t.backgroundColor,fontColor:t.fontColor,icon:t.icon,animationType:t.animationType,showMask:t.showMask},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickFabItem.apply(void 0,arguments)}}})],1)},o=[]},e563:function(t,n,e){"use strict";e.r(n);var i=e("5f05"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}}]);