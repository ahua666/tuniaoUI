(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-scroll-view-index"],{"14ff":function(t,n,i){"use strict";i.r(n);var e=i("61f9"),a=i("15a8");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(s);var o=i("f0c5"),r=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"45cc2d00",null,!1,e["a"],void 0);n["default"]=r.exports},"15a8":function(t,n,i){"use strict";i.r(n);var e=i("572d"),a=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},"2baa":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("d81d");var e={name:"multiple-options-demo",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{tuniaoColorList:["red","purplered","purple","bluepurple","aquablue","blue","indigo","cyan","teal","green","orange","orangered"],listData:[]}},watch:{list:function(t){this.initList()}},created:function(){this.initList()},methods:{initList:function(){var t=this;this.listData=this.list.map((function(n,i){return n.bgColorIndex=t.getBgNum(),n.mainIcon=(null===n||void 0===n?void 0:n.mainIcon)||"computer-fill",n.subIcon=(null===n||void 0===n?void 0:n.subIcon)||"share",n}))},navOptionsPage:function(t){uni.navigateTo({url:t})},getBgNum:function(){return Math.floor(Math.random()*this.tuniaoColorList.length)}}};n.default=e},3546:function(t,n,i){"use strict";var e=i("54cd"),a=i.n(e);a.a},"54cd":function(t,n,i){var e=i("9067");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("528cd61a",e,!0,{sourceMap:!1,shadowMode:!1})},"572d":function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("8ee3")),s={name:"VipComponentsScrollView",components:{multipleOptionsDemo:a.default},data:function(){return{optionsList:[{title:"普通下拉加载",desc:"使用默认的下拉样式",url:"/vipPage/components/scroll-view/basic/scroll-view"},{title:"自定义下拉加载",desc:"通过传递的事件自定义下拉样式",url:"/vipPage/components/scroll-view/custom/scroll-view"}]}}};n.default=s},"61f9":function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var e={tnNavBar:i("5d18").default},a=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"vip-component-scroll-view"},[n("tn-nav-bar",{attrs:{fixed:!0}},[this._v("自定义下拉刷新")]),n("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[n("multiple-options-demo",{attrs:{list:this.optionsList}})],1)],1)},s=[]},"8ee3":function(t,n,i){"use strict";i.r(n);var e=i("ce85"),a=i("b204");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("3546");var o=i("f0c5"),r=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"3be4dde5",null,!1,e["a"],void 0);n["default"]=r.exports},9067:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.list__item[data-v-3be4dde5]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:calc(100% - %?60?%);margin:%?108?% %?30?% %?0?% %?30?%;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?20?%}.list__content[data-v-3be4dde5]{flex:1;margin:%?34?% %?0?% %?27?% %?37?%}.list__content__title[data-v-3be4dde5]{font-size:%?36?%;font-weight:700;margin-bottom:%?12?%}.list__content__desc[data-v-3be4dde5]{font-size:%?28?%}.list__icon[data-v-3be4dde5]{flex:1;margin-right:%?26?%;position:relative}.list__icon__main[data-v-3be4dde5], .list__icon__sub[data-v-3be4dde5]{-webkit-background-clip:text;color:transparent;position:absolute;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.list__icon__main[data-v-3be4dde5]{font-size:%?200?%;width:%?190?%;line-height:%?200?%;top:0;right:%?0?%;-webkit-transform:translateY(-60%);transform:translateY(-60%)}.list__icon__sub[data-v-3be4dde5]{font-size:%?70?%;top:0;right:%?175?%;-webkit-transform:translateY(%?-5?%);transform:translateY(%?-5?%)}',""]),t.exports=n},b204:function(t,n,i){"use strict";i.r(n);var e=i("2baa"),a=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},ce85:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"multiple-options"},[i("v-uni-view",{staticClass:"list"},[t._l(t.listData,(function(n,e){return[i("v-uni-view",{key:e+"_0",staticClass:"list__item",class:["tn-main-gradient-"+t.tuniaoColorList[n.bgColorIndex]+"--light"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navOptionsPage(n.url)}}},[i("v-uni-view",{staticClass:"list__content"},[i("v-uni-view",{staticClass:"list__content__title"},[t._v(t._s(n.title))]),i("v-uni-view",{staticClass:"list__content__desc"},[t._v(t._s(n.desc))])],1),i("v-uni-view",{staticClass:"list__icon"},[i("v-uni-view",{staticClass:"list__icon__main",class:["tn-icon-"+n.mainIcon,"tn-main-gradient-"+t.tuniaoColorList[n.bgColorIndex]]}),i("v-uni-view",{staticClass:"list__icon__sub",class:["tn-icon-"+n.subIcon,"tn-main-gradient-"+t.tuniaoColorList[n.bgColorIndex]]})],1)],1)]}))],2)],1)},a=[]}}]);