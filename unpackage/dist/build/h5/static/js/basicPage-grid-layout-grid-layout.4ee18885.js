(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-grid-layout-grid-layout"],{"348d":function(t,e,n){var i=n("bbba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("80cb156e",i,!0,{sourceMap:!1,shadowMode:!1})},"35af":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-grid-class tn-grid",style:{justifyContent:this.gridAlignStyle}},[this._t("default")],2)},a=[]},"4f4e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-grid[data-v-2c8773b1]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}',""]),t.exports=e},"4ff2":function(t,e,n){"use strict";var i=n("b1e5"),a=n.n(i);a.a},"589c":function(t,e,n){"use strict";n.r(e);var i=n("c90a"),a=n("d726");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6f2e");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"4d97c7e0",null,!1,i["a"],void 0);e["default"]=s.exports},"64f7":function(t,e,n){"use strict";n.r(e);var i=n("35af"),a=n("6ce9");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("aada");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2c8773b1",null,!1,i["a"],void 0);e["default"]=s.exports},"6ce9":function(t,e,n){"use strict";n.r(e);var i=n("aad2"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"6f2e":function(t,e,n){"use strict";var i=n("348d"),a=n.n(i);a.a},"816f":function(t,e,n){"use strict";n.r(e);var i=n("a74e"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},8694:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("47a7")),r={name:"BasicGridLayout",components:{dynamicDemoTemplate:a.default},data:function(){return{showGrid:!0,align:"left",hoverClass:"tn-hover",col:3,icons:["zodiac-shu","zodiac-niu","zodiac-hu","zodiac-tu","zodiac-long","zodiac-she","zodiac-ma","zodiac-yang","zodiac-hou","zodiac-ji","zodiac-gou","zodiac-zhu","logo-tuniao"],tips:["无需依赖额外的样式文件","使用tn-grid、tn-grid-item组件"],sectionList:[{name:"参数切换",section:[{title:"对齐方式",optional:["左对齐","居中","右对齐"],methods:"alignChange"},{title:"点击效果",optional:["开启","关闭"],methods:"hoverChange"},{title:"列数",optional:["3","4"],methods:"colChange"}]}]}},computed:{},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},alignChange:function(t){switch(t.index){case 0:this.align="left";break;case 1:this.align="center";break;case 2:this.align="right";break}},hoverChange:function(t){this.hoverClass=0===t.index?"tn-hover":"none"},colChange:function(t){this.col=0===t.index?3:4,this.$refs.demoTemplate.updateSectionScrollView()}}};e.default=r},a74e:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=i(n("0912")),r={mixins:[a.default],name:"tn-grid-item",props:{index:{type:[Number,String],default:""}},data:function(){return{parentData:{hoverClass:"",col:3}}},created:function(){this.updateParentData(),this.parent.children.push(this)},computed:{gridWidth:function(){return 100/Number(this.parentData.col)+"%"},hoverClass:function(){return"none"!==this.parentData.hoverClass?this.parentData.hoverClass+" tn-grid-item--hover":this.parentData.hoverClass}},methods:{updateParentData:function(){this.getParentData("tn-grid")},click:function(){this.$emit("click",this.index),this.parent&&this.parent.click(this.index)}}};e.default=r},aad2:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d81d");var i={name:"tn-grid",props:{col:{type:[Number,String],default:3},align:{type:String,default:"left"},hoverClass:{type:String,default:"tn-hover"}},data:function(){return{}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"===typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},computed:{parentData:function(){return[this.hoverClass,this.col,this.border]},gridAlignStyle:function(){switch(this.align){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}}},methods:{click:function(t){this.$emit("click",t)}}};e.default=i},aada:function(t,e,n){"use strict";var i=n("c8d26"),a=n.n(i);a.a},b1e5:function(t,e,n){var i=n("d0ab");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("60f06e5a",i,!0,{sourceMap:!1,shadowMode:!1})},b6ad:function(t,e,n){"use strict";n.r(e);var i=n("c5fd"),a=n("816f");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("4ff2");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7ff1616e",null,!1,i["a"],void 0);e["default"]=s.exports},bbba:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.icon__item[data-v-4d97c7e0]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;margin-top:0;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon__item--icon[data-v-4d97c7e0]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin:%?30?%;position:relative;z-index:1}.icon__item--icon[data-v-4d97c7e0]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png)}',""]),t.exports=e},c5fd:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-grid-item-class tn-grid-item",class:[t.backgroundColorClass],style:{backgroundColor:t.backgroundColorStyle,width:t.gridWidth},attrs:{"hover-class":t.hoverClass,"hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tn-grid-item__box"},[t._t("default")],2)],1)},a=[]},c8d26:function(t,e,n){var i=n("4f4e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ae67e5a0",i,!0,{sourceMap:!1,shadowMode:!1})},c90a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("0ca8").default,tnGrid:n("64f7").default,tnGridItem:n("b6ad").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"basic-grid"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("Grid布局")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showGrid?n("tn-grid",{attrs:{align:t.align,hoverClass:t.hoverClass,col:t.col}},[t._l(t.icons,(function(t,e){return[n("tn-grid-item",[n("v-uni-view",{staticStyle:{margin:"60rpx 20rpx","font-size":"70rpx",color:"#01BEFF"}},[n("v-uni-text",{class:["tn-icon-"+t]})],1)],1)]}))],2):t._e()],1)],1)],1)},r=[]},d0ab:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-grid-item[data-v-7ff1616e]{box-sizing:border-box;background-color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:center;position:relative;flex-direction:column}.tn-grid-item__box[data-v-7ff1616e]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-direction:column;flex:1;width:100%;height:100%}.tn-grid-item--hover[data-v-7ff1616e]{background:#f8f7f8!important}',""]),t.exports=e},d726:function(t,e,n){"use strict";n.r(e);var i=n("8694"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);