(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-tree-view-tree-view"],{1005:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"demo-title"},[n("v-uni-view",["first"===e.type?n("v-uni-view",{staticClass:"main_title"},[e.leftIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+e.leftIcon]}):e._e(),n("v-uni-view",{staticClass:"main_title__content"},[e._v(e._s(e.title))]),e.rightIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+e.rightIcon]}):e._e()],1):e._e(),"second"===e.type?n("v-uni-view",{staticClass:"second_title"},[n("v-uni-view",{staticClass:"second_title__content"},[e._v(e._s(e.title))])],1):e._e()],1),n("v-uni-view",{staticClass:"content",class:[{"content--padding":e.contentPadding}]},[e._t("default")],2)],1)},a=[]},"27ce":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"tn-tree-view",props:{treeData:{type:Array,default:function(){return[]}},collapsible:{type:Boolean,default:!0},triangle:{type:Boolean,default:!0}},methods:{handleClick:function(e){this.$emit("click",e)}}};t.default=i},"2b68":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5ea4")),r={name:"VipComponentTreeView",components:{demoTitle:a.default},data:function(){return{treeData:[{text:"TuniaoUI",value:1,image:"/vipPage/static/images/tree_view/folder.png",activeImage:"/vipPage/static/images/tree_view/folder_open.png",collapsed:!1,children:[{text:"tn-button",value:10,image:"/vipPage/static/images/tree_view/folder.png",activeImage:"/vipPage/static/images/tree_view/folder_open.png",collapsed:!1,children:[{text:"tn-button.vue",value:100,image:"/vipPage/static/images/tree_view/file_vue.png"},{text:"tn-button.js",value:101,image:"/vipPage/static/images/tree_view/file_js.png"},{text:"tn-button.css",value:102,image:"/vipPage/static/images/tree_view/file_css.png"}]},{text:"tn-avatar",value:11,image:"/vipPage/static/images/tree_view/folder.png",activeImage:"/vipPage/static/images/tree_view/folder_open.png",collapsed:!0,children:[{text:"tn-avatar.vue",value:110,image:"/vipPage/static/images/tree_view/file_vue.png"},{text:"tn-avatar.js",value:111,image:"/vipPage/static/images/tree_view/file_js.png"},{text:"tn-avatar.css",value:112,image:"/vipPage/static/images/tree_view/file_css.png"}]},{text:"tn-icon",value:12,image:"/vipPage/static/images/tree_view/folder.png",activeImage:"/vipPage/static/images/tree_view/folder_open.png",collapsed:!0,children:[{text:"tn-icon.vue",value:120,image:"/vipPage/static/images/tree_view/file_vue.png"},{text:"tn-icon.js",value:121,image:"/vipPage/static/images/tree_view/file_js.png"},{text:"tn-icon.css",value:122,image:"/vipPage/static/images/tree_view/file_css.png"}]},{text:"tn-navbar",value:13,image:"/vipPage/static/images/tree_view/folder.png",activeImage:"/vipPage/static/images/tree_view/folder_open.png",collapsed:!0,children:[{text:"tn-navbar.vue",value:130,image:"/vipPage/static/images/tree_view/file_vue.png"},{text:"tn-navbar.js",value:131,image:"/vipPage/static/images/tree_view/file_js.png"},{text:"tn-navbar.css",value:132,image:"/vipPage/static/images/tree_view/file_css.png"}]}]}]}},methods:{onClick:function(e){this.$tn.message.toast("点击了".concat(e.text,"节点"))}}};t.default=r},3134:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={tnTreeNode:n("c01f").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"tn-tree-view-class tn-tree-view"},e._l(e.treeData,(function(t,i){return n("tn-tree-node",{key:i,attrs:{node:t,collapsible:e.collapsible,triangle:e.triangle},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}})})),1)},r=[]},"3e70":function(e,t,n){"use strict";n.r(t);var i=n("27ce"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"3fa8":function(e,t,n){"use strict";n.r(t);var i=n("4977"),a=n("f87f");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2f058e9b",null,!1,i["a"],void 0);t["default"]=l.exports},4977:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={tnNavBar:n("75e2").default,tnTreeView:n("95e2").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"vip-component-tree-view tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[e._v("树形菜单")]),n("v-uni-view",{style:{paddingTop:e.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"基础"}},[n("tn-tree-view",{attrs:{treeData:e.treeData},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},r=[]},"4b34":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),e.exports=t},"4f1c":function(e,t,n){"use strict";n.r(t);var i=n("5ef3"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"586b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={tnTreeNode:n("c01f").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"tn-tree-node-class tn-tree-node"},[n("v-uni-view",{staticClass:"tn-tree__label",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e.node.children&&e.node.children.length>0&&e.triangle?n("v-uni-view",{staticClass:"tn-tree__triangle",class:[{"tn-tree__triangle--90deg":!e.collapsed}]}):e._e(),n("v-uni-view",{staticClass:"tn-tree__label__item"},[e.collapsed&&e.node.image?n("v-uni-view",{staticClass:"tn-tree__label__item__image"},[n("v-uni-image",{attrs:{src:e.node.image,mode:"widthFix"}})],1):e._e(),!e.collapsed&&e.node.activeImage?n("v-uni-view",{staticClass:"tn-tree__label__item__image"},[n("v-uni-image",{attrs:{src:e.node.activeImage,mode:"widthFix"}})],1):e._e(),n("v-uni-view",{staticClass:"tn-tree__label__item__text"},[e._v(e._s(e.node.text))])],1)],1),!e.collapsed&&e.node.children&&e.node.children.length>0?n("v-uni-view",{staticClass:"tn-tree__children"},e._l(e.node.children,(function(t,i){return n("tn-tree-node",{key:i,attrs:{node:t,collapsible:e.collapsible,triangle:e.triangle},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.nodeClick.apply(void 0,arguments)}}})})),1):e._e()],1)},r=[]},"5ea4":function(e,t,n){"use strict";n.r(t);var i=n("1005"),a=n("e595");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("bee7");var s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5d860f10",null,!1,i["a"],void 0);t["default"]=l.exports},"5ef3":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"tn-tree-node",props:{node:{type:Object,default:function(){return{}}},collapsible:{type:Boolean,default:!0},triangle:{type:Boolean,default:!0}},watch:{node:function(e){e.collapsed!==this.collapsed&&this.node.children&&this.node.children.length>0&&(this.collapsed=e.collapsed)}},data:function(){return{collapsed:!0}},created:function(){!1===this.node.collapsed&&(this.collapsed=!1)},methods:{handleClick:function(e){this.collapsible&&this.node.children&&this.node.children.length>0&&(this.collapsed=!this.collapsed),this.$emit("click",this.node)},nodeClick:function(e){this.$emit("click",e)}}};t.default=i},"5fae":function(e,t,n){"use strict";var i=n("b812"),a=n.n(i);a.a},"69b1":function(e,t,n){"use strict";var i=n("e284"),a=n.n(i);a.a},"706b":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-tree-view[data-v-6eb635bd]{width:100%;position:relative}',""]),e.exports=t},"7efc":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};t.default=i},"95e2":function(e,t,n){"use strict";n.r(t);var i=n("3134"),a=n("3e70");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("5fae");var s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6eb635bd",null,!1,i["a"],void 0);t["default"]=l.exports},b812:function(e,t,n){var i=n("706b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5201f524",i,!0,{sourceMap:!1,shadowMode:!1})},bee7:function(e,t,n){"use strict";var i=n("e1b1"),a=n.n(i);a.a},c01f:function(e,t,n){"use strict";n.r(t);var i=n("586b"),a=n("4f1c");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("69b1");var s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"727e8160",null,!1,i["a"],void 0);t["default"]=l.exports},e1b1:function(e,t,n){var i=n("4b34");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("271bb985",i,!0,{sourceMap:!1,shadowMode:!1})},e284:function(e,t,n){var i=n("f2c9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("27618d54",i,!0,{sourceMap:!1,shadowMode:!1})},e595:function(e,t,n){"use strict";n.r(t);var i=n("7efc"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},f2c9:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-tree-node .tn-tree__label[data-v-727e8160]{position:relative;display:inline-flex;align-items:center;padding:%?20?% %?30?%;background-color:initial;cursor:pointer;-webkit-font-smoothing:antialiased}.tn-tree-node .tn-tree__label__item[data-v-727e8160]{display:flex;flex-direction:row;align-items:center}.tn-tree-node .tn-tree__label__item__image[data-v-727e8160]{width:%?40?%;height:%?40?%;margin-right:%?16?%}.tn-tree-node .tn-tree__label__item__image uni-image[data-v-727e8160]{width:100%;height:100%}.tn-tree-node .tn-tree__children[data-v-727e8160]{padding-left:%?60?%;position:relative}.tn-tree-node .tn-tree__triangle[data-v-727e8160]{width:0;height:0;border-top:%?12?% solid transparent;border-bottom:%?12?% solid transparent;border-left:%?16?% solid #080808;margin-right:%?20?%;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out;flex-shrink:0}.tn-tree-node .tn-tree__triangle--90deg[data-v-727e8160]{-webkit-transform:rotate(90deg) translateZ(0);transform:rotate(90deg) translateZ(0)}',""]),e.exports=t},f87f:function(e,t,n){"use strict";n.r(t);var i=n("2b68"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}}]);