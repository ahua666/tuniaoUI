(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-waterfall-waterfall"],{"005b":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c7eb")),s=a(i("1da1"));i("a9e3"),i("99af"),i("fb6a"),i("14d9"),i("a434"),i("e9c4"),i("c740");var r={name:"tn-waterfall",props:{value:{type:Array,default:function(){return[]}},idKey:{type:String,default:"id"},addTime:{type:Number,default:200}},computed:{copyValue:function(){return this.cloneData(this.value)}},watch:{copyValue:function(t,e){var i=Array.isArray(e)&&e.length>0?e.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(i))),this.splitData()}},data:function(){return{leftList:[],rightList:[],tempList:[]}},mounted:function(){this.tempList=this.cloneData(this.copyValue),this.splitData()},methods:{splitData:function(){var t=this;return(0,s.default)((0,n.default)().mark((function e(){var i,a,s;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.tempList.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t._tGetRect("#tn-waterfall-left");case 4:return i=e.sent,e.next=7,t._tGetRect("#tn-waterfall-right");case 7:if(a=e.sent,s=t.tempList[0],s){e.next=11;break}return e.abrupt("return");case 11:i.height<a.height?t.leftList.push(s):i.height>a.height?t.rightList.push(s):t.leftList.length<=t.rightList.length?t.leftList.push(s):t.rightList.push(s),t.tempList.splice(0,1),t.tempList.length?setTimeout((function(){t.splitData()}),t.addTime):t.$emit("finish");case 14:case"end":return e.stop()}}),e)})))()},cloneData:function(t){return JSON.parse(JSON.stringify(t))},clear:function(){this.leftList=[],this.rightList=[],this.$emit("input",[]),this.tempList=[]},remove:function(t){var e=this,i=-1;i=this.leftList.findIndex((function(i){return i[e.idKey]==t})),-1!=i?this.leftList.splice(i,1):(i=this.rightList.findIndex((function(i){return i[e.idKey]==t})),-1!=i&&this.rightList.splice(i,1)),i=this.value.findIndex((function(i){return i[e.idKey]==t})),-1!=i&&this.$emit("input",this.value.splice(i,1))},modify:function(t,e,i){var a=this,n=-1;if(n=this.leftList.findIndex((function(e){return e[a.idKey]==t})),-1!=n?this.leftList[n][e]=i:(n=this.rightList.findIndex((function(e){return e[a.idKey]==t})),-1!=n&&(this.rightList[n][e]=i)),n=this.value.findIndex((function(e){return e[a.idKey]==t})),-1!=n){var s=this.cloneData(this.value);s[n][e]=i,this.$emit("input",s)}}}};e.default=r},"0205":function(t,e,i){var a=i("9354");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e3beb7d0",a,!0,{sourceMap:!1,shadowMode:!1})},"09b4":function(t,e,i){"use strict";i.r(e);var a=i("4fcf"),n=i("393d");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("4ae5");var r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"73fc0b6f",null,!1,a["a"],void 0);e["default"]=c.exports},"393d":function(t,e,i){"use strict";i.r(e);var a=i("6e5a"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},3969:function(t,e,i){"use strict";i.r(e);var a=i("cb7f"),n=i("c728");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7a15");var r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"36aa842e",null,!1,a["a"],void 0);e["default"]=c.exports},"4ae5":function(t,e,i){"use strict";var a=i("0205"),n=i.n(a);n.a},"4fcf":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={tnNavBar:i("75e2").default,tnWaterfall:i("3969").default,tnLazyLoad:i("fcba").default,tnLoadMore:i("c8b6").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"vip-component-waterfall"},[i("tn-nav-bar",{attrs:{fixed:!0}},[t._v("瀑布流")]),i("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[i("v-uni-view",{staticClass:"tn-padding"},[i("tn-waterfall",{ref:"waterfall",on:{finish:function(e){arguments[0]=e=t.$handleEvent(e),t.handleWaterFallFinish.apply(void 0,arguments)}},scopedSlots:t._u([{key:"left",fn:function(e){var a=e.leftList;return t._l(a,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"product__item"},[i("v-uni-view",{staticClass:"item__image"},[i("tn-lazy-load",{attrs:{threshold:-450,height:"100%",image:e.mainImage,index:e.id,imgMode:"widthFix"}})],1),i("v-uni-view",{staticClass:"item__data"},[i("v-uni-view",{staticClass:"item__title-container"},[e.newProduct?i("v-uni-view",{staticClass:"item__store-type tn-cool-bg-color-8"},[t._v("图鸟趋势")]):1===e.storeType?i("v-uni-view",{staticClass:"item__store-type tn-cool-bg-color-1"},[t._v("自营")]):t._e(),i("v-uni-text",{staticClass:"item__title"},[t._v(t._s(e.title))])],1),e.tags&&e.tags.length>0?i("v-uni-view",{staticClass:"item__tags-container"},t._l(e.tags,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item__tag"},[t._v(t._s(e))])})),1):t._e(),i("v-uni-view",{staticClass:"item__price-container"},[i("v-uni-text",{staticClass:"item__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"item__price--integer"},[t._v(t._s(e.priceInteger))]),i("v-uni-text",{staticClass:"item__price--dot"},[t._v(".")]),i("v-uni-text",{staticClass:"item__price--decimal"},[t._v(t._s(e.priceDecimal))])],1)],1)],1)}))}},{key:"right",fn:function(e){var a=e.rightList;return t._l(a,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"product__item"},[i("v-uni-view",{staticClass:"item__image"},[i("tn-lazy-load",{attrs:{threshold:-450,height:"100%",image:e.mainImage,index:e.id,imgMode:"widthFix"}})],1),i("v-uni-view",{staticClass:"item__data"},[i("v-uni-view",{staticClass:"item__title-container"},[1===e.storeType?i("v-uni-view",{staticClass:"item__store-type tn-cool-bg-color-1"},[t._v("自营")]):t._e(),i("v-uni-text",{staticClass:"item__title"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"item__tags-container"},t._l(e.tags,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item__tag"},[t._v(t._s(e))])})),1),i("v-uni-view",{staticClass:"item__price-container"},[i("v-uni-text",{staticClass:"item__price--unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"item__price--integer"},[t._v(t._s(e.priceInteger))]),i("v-uni-text",{staticClass:"item__price--dot"},[t._v(".")]),i("v-uni-text",{staticClass:"item__price--decimal"},[t._v(t._s(e.priceDecimal))])],1)],1)],1)}))}}]),model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),i("tn-load-more",{attrs:{status:t.loadStatus}})],1)],1)},s=[]},"6e5a":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("14d9"),i("c975");var a={data:function(){return{loadStatus:"loadmore",list:[],data:[{title:"图鸟科技 设计师专属笔记本 告别卡慢热",mainImage:"https://resource.tuniaokj.com/images/shop/computer1.jpg",storeType:1,newProduct:!0,tags:["满1000减80","免息"],price:6999},{title:"图鸟科技 开发便携笔记本 告别笨重外出",mainImage:"https://resource.tuniaokj.com/images/shop/computer2.jpg",storeType:1,newProduct:!1,tags:["免息"],price:7999},{title:"图鸟科技 T10 宇宙9000 10G全网通",mainImage:"https://resource.tuniaokj.com/images/shop/phonecase2.jpg",storeType:1,newProduct:!0,tags:[],price:4999},{title:"图鸟科技 T10Pro 宇宙9010 10G全网通",mainImage:"https://resource.tuniaokj.com/images/shop/phonecase1.jpg",storeType:1,newProduct:!0,tags:[],price:6999},{title:"图鸟科技 运动手表 不用插卡即可通话",mainImage:"https://resource.tuniaokj.com/images/shop/watch1.jpg",storeType:1,newProduct:!1,tags:[],price:2999},{title:"图鸟科技 页面设计 专为第三方提供精美酷炫页面",mainImage:"https://resource.tuniaokj.com/images/shop/card.jpg",storeType:2,newProduct:!1,tags:["酷炫"],price:10999},{title:"图鸟科技 海报设计 想不到就过来聊聊吧",mainImage:"https://resource.tuniaokj.com/images/shop/prototype1.jpg",storeType:2,newProduct:!1,tags:["哎呀"],price:399},{title:"图鸟科技 环保袋",mainImage:"https://resource.tuniaokj.com/images/shop/bag1.jpg",storeType:1,newProduct:!1,tags:["合作免费送"],price:0},{title:"图鸟科技 纸杯",mainImage:"https://resource.tuniaokj.com/images/shop/cup2.jpg",storeType:1,newProduct:!1,tags:["合作免费送"],price:0},{title:"图鸟科技 抱枕",mainImage:"https://resource.tuniaokj.com/images/shop/pillow.jpg",storeType:1,newProduct:!1,tags:[],price:99}]}},onLoad:function(){this.getRandomData()},onReachBottom:function(){this.getRandomData()},methods:{getRandomData:function(){this.loadStatus="loading";for(var t=0;t<10;t++){var e=this.$tn.number.randomInt(0,this.data.length-1),i=JSON.parse(JSON.stringify(this.data[e])),a=this.getPrice(i.price);i.id=this.$tn.uuid(),i.priceInteger=a[0],i.priceDecimal=a[1],this.list.push(i)}},handleWaterFallFinish:function(){this.loadStatus="loadmore"},getPrice:function(t){var e=String(t);return-1!==e.indexOf(".")?e.split("."):[e,"00"]}}};e.default=a},"7a15":function(t,e,i){"use strict";var a=i("9027"),n=i.n(a);n.a},9027:function(t,e,i){var a=i("dfb2");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("132d75cd",a,!0,{sourceMap:!1,shadowMode:!1})},9354:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.vip-component-waterfall[data-v-73fc0b6f]{background-color:#f4f4f4;min-height:100vh}.product__item[data-v-73fc0b6f]{background-color:#fff;border-radius:%?10?%;overflow:hidden;margin:0 %?10?%;margin-bottom:%?20?%}.product__item .item[data-v-73fc0b6f]{\r\n  /* 图片 start */\r\n  /* 图片 end */\r\n  /* 内容 start */\r\n  /* 标题 start */\r\n  /* 标题 end */\r\n  /* 标签 start */\r\n  /* 标签 end */\r\n  /* 价格 start */\r\n  /* 价格 end */\r\n  /* 内容 end */}.product__item .item__image[data-v-73fc0b6f]{width:100%;height:auto;background-color:#fff}.product__item .item__data[data-v-73fc0b6f]{padding:%?8?% %?14?%}.product__item .item__title-container[data-v-73fc0b6f]{text-align:justify;line-height:%?38?%;vertical-align:middle}.product__item .item__store-type[data-v-73fc0b6f]{height:%?28?%;font-size:%?20?%;position:relative;display:inline-flex;align-items:center;justify-content:center;padding:0 %?4?%;border-radius:%?6?%;white-space:nowrap;text-align:center;top:%?-2?%;margin-right:%?6?%}.product__item .item__tags-container[data-v-73fc0b6f]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start}.product__item .item__tag[data-v-73fc0b6f]{margin-left:%?10?%;color:#e83a30;border:%?2?% solid #e83a30;padding:0 %?6?%;border-radius:%?10?%;font-size:%?20?%}.product__item .item__tag[data-v-73fc0b6f]:first-child{margin-left:%?0?%!important}.product__item .item__price-container[data-v-73fc0b6f]{font-size:%?24?%;color:#e83a30;font-weight:700}.product__item .item__price--integer[data-v-73fc0b6f]{font-size:%?38?%}',""]),t.exports=e},c728:function(t,e,i){"use strict";i.r(e);var a=i("005b"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},cb7f:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-waterfall-class tn-waterfall"},[e("v-uni-view",{staticClass:"tn-waterfall__column",attrs:{id:"tn-waterfall-left"}},[this._t("left",null,{leftList:this.leftList})],2),e("v-uni-view",{staticClass:"tn-waterfall__column",attrs:{id:"tn-waterfall-right"}},[this._t("right",null,{rightList:this.rightList})],2)],1)},n=[]},dfb2:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-waterfall[data-v-36aa842e]{display:flex;flex-direction:row;align-items:flex-start}.tn-waterfall__column[data-v-36aa842e]{display:flex;flex-direction:column;flex:1;height:auto}',""]),t.exports=e}}]);