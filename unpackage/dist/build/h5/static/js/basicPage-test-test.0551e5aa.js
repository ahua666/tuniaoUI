(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-test-test"],{"1bd4":function(e,t,n){var i=n("27de");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("e096da50",i,!0,{sourceMap:!1,shadowMode:!1})},"27de":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.basic-test[data-v-4882ac95]{min-height:100vh}.swiper[data-v-4882ac95]{width:100%;height:%?400?%}.swiper[data-v-4882ac95] .uni-swiper-slides{inset:0 %?260?%}.swiper__item--prev[data-v-4882ac95]{left:%?-10?%}.swiper__item--next[data-v-4882ac95]{left:%?10?%}.swiper__item--current[data-v-4882ac95]{left:0}.swiper__item__content[data-v-4882ac95]{width:100%;height:100%;margin:0 auto;border-radius:%?30?%;overflow:hidden;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease;-webkit-transform:scale(.8);transform:scale(.8)}.swiper__item__content--prev[data-v-4882ac95]{-webkit-transform:scale(.8) perspective(%?200?%) rotateY(10deg);transform:scale(.8) perspective(%?200?%) rotateY(10deg)}.swiper__item__content--next[data-v-4882ac95]{-webkit-transform:scale(.8) perspective(%?200?%) rotateY(-10deg);transform:scale(.8) perspective(%?200?%) rotateY(-10deg)}.swiper__item__content--current[data-v-4882ac95]{-webkit-transform:scale(1);transform:scale(1)}.swiper__item__content uni-image[data-v-4882ac95]{width:100%;height:100%}.phone-swiper[data-v-4882ac95]{margin-top:%?180?%;height:%?900?%}.phone-swiper[data-v-4882ac95] .uni-swiper-slides{inset:0 %?190?%}.phone-swiper__item__content[data-v-4882ac95]{transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease;-webkit-transform:scale(.8);transform:scale(.8)}.phone-swiper__item__content--prev[data-v-4882ac95]{-webkit-transform:scale(.8) perspective(%?200?%) rotateY(10deg);transform:scale(.8) perspective(%?200?%) rotateY(10deg)}.phone-swiper__item__content--next[data-v-4882ac95]{-webkit-transform:scale(.8) perspective(%?200?%) rotateY(-10deg);transform:scale(.8) perspective(%?200?%) rotateY(-10deg)}.phone-swiper__item__content--current[data-v-4882ac95]{-webkit-transform:scale(1);transform:scale(1)}.phone-swiper__item .demo-image[data-v-4882ac95]{display:flex;align-items:center;justify-content:center}.phone-swiper__item .demo-image uni-image[data-v-4882ac95]{width:100%;height:%?730?%}\r\n/* tnphone-black-min 细边框 start */.tnphone-black-min[data-v-4882ac95]{width:%?380?%;height:%?760?%;border-radius:%?40?%;background:#c6d1d8;padding:%?7?%;display:table;color:#333;box-sizing:border-box;box-shadow:%?0?% %?0?% %?0?% %?5?% rgba(80,80,80,.8) inset;cursor:default;position:relative}.tnphone-black-min .skin[data-v-4882ac95]{width:100%;height:100%;border-radius:%?40?%;background:#222;padding:%?10?%;box-shadow:%?0?% %?0?% %?0?% %?7?% rgba(68,68,68,.3)}.tnphone-black-min .screen[data-v-4882ac95]{width:100%;height:100%;border-radius:%?30?%;background:#fff;position:relative;overflow:hidden}.tnphone-black-min .head[data-v-4882ac95]{width:100%;height:%?90?%;text-align:center;position:absolute;padding:%?45?% %?15?% %?10?% %?15?%}.tnphone-black-min .peak[data-v-4882ac95]{left:22%;width:56%;height:%?27?%;margin:%?-2?% auto %?0?%;border-radius:0 0 %?20?% %?20?%;background:#222;position:absolute}.tnphone-black-min .sound[data-v-4882ac95]{width:%?48?%;height:%?6?%;border-radius:%?15?%;background:#555;position:absolute;left:50%;top:50%;margin-left:%?-24?%;margin-top:%?-10?%;box-shadow:%?0?% %?4?% %?4?% %?0?% #444 inset}.tnphone-black-min .lens[data-v-4882ac95]{width:%?6?%;height:%?6?%;border-radius:50%;background:#2c5487;position:absolute;left:50%;top:50%;margin-left:%?34?%;margin-top:%?-10?%}.tnphone-black-min .talk[data-v-4882ac95]{width:50%;height:%?6?%;border-radius:%?15?%;background:rgba(0,0,0,.3);position:absolute;bottom:%?8?%;left:50%;margin-left:-25%}.tnphone-black-min .area-l[data-v-4882ac95], .tnphone-black-min .area-r[data-v-4882ac95]{width:%?70?%;height:%?16?%;position:absolute;top:%?6?%}.tnphone-black-min .area-l[data-v-4882ac95]{left:0;text-align:center;font-size:%?12?%;line-height:%?22?%;text-indent:%?10?%;font-weight:600;padding-left:%?20?%}.tnphone-black-min .area-r[data-v-4882ac95]{right:0;text-align:center;font-size:%?12?%;line-height:%?22?%;text-indent:%?10?%;font-weight:600;padding-right:%?20?%}.tnphone-black-min .fa-feed[data-v-4882ac95]{float:left;font-size:%?12?%!important;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);margin-top:%?4?%;margin-right:%?8?%}.tnphone-black-min .fa-battery-full[data-v-4882ac95]{float:left;font-size:%?12?%!important;margin-top:%?6?%}.tnphone-black-min .fa-chevron-left[data-v-4882ac95]{float:left;margin-top:%?4?%}.tnphone-black-min .fa-cog[data-v-4882ac95]{float:right;margin-top:%?4?%}.tnphone-black-min .btn01[data-v-4882ac95]{width:%?3?%;height:%?28?%;border-radius:%?3?% 0 0 %?3?%;background:#222;position:absolute;top:%?105?%;left:%?-3?%}.tnphone-black-min .btn02[data-v-4882ac95]{width:%?3?%;height:%?54?%;border-radius:%?3?% 0 0 %?3?%;background:#222;position:absolute;top:%?160?%;left:%?-3?%}.tnphone-black-min .btn03[data-v-4882ac95]{width:%?3?%;height:%?54?%;border-radius:%?3?% 0 0 %?3?%;background:#222;position:absolute;top:%?230?%;left:%?-3?%}.tnphone-black-min .btn04[data-v-4882ac95]{width:%?3?%;height:%?86?%;border-radius:0 %?3?% %?3?% 0;background:#222;position:absolute;top:%?180?%;right:%?-3?%}\r\n/* tnphone-black-min 细边框 end */',""]),e.exports=t},"343a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"basic-test"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,current:e.currentSwiperIndex,"previous-margin":"260rpx","next-margin":"260rpx"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)}}},e._l(e.swiperList,(function(t,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper__item",class:[e.swiperItemClass(i)]},[n("v-uni-view",{staticClass:"swiper__item__content",class:[e.swiperContentClass(i)]},[n("v-uni-image",{attrs:{src:t,mode:"scaleToFill"}})],1)],1)})),1),n("v-uni-swiper",{staticClass:"phone-swiper",attrs:{circular:!0,current:e.phoneCurrentSwiperIndex,"previous-margin":"190rpx","next-margin":"190rpx"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.phoneSwiperChange.apply(void 0,arguments)}}},e._l(e.phoneSwiperList,(function(t,i){return n("v-uni-swiper-item",{key:i,staticClass:"phone-swiper__item"},[n("v-uni-view",{staticClass:"tnphone-black-min phone-swiper__item__content wow fadeInLeft2",class:[e.phoneSwiperContentClass(i)]},[n("v-uni-view",{staticClass:"skin wow fadeInRight2"},[n("v-uni-view",{staticClass:"screen wow fadeInUp2"},[n("v-uni-view",{staticClass:"peak wow"},[n("v-uni-view",{staticClass:"sound"}),n("v-uni-view",{staticClass:"lens"})],1),n("v-uni-view",{staticClass:"demo-image"},[n("v-uni-image",{attrs:{src:t.url,mode:"aspectFill"}})],1)],1)],1)],1)],1)})),1)],1)},a=[]},5832:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={name:"TestPage",data:function(){return{swiperList:["https://resource.tuniaokj.com/images/swiper/spring.jpg","https://resource.tuniaokj.com/images/swiper/summer.jpg","https://resource.tuniaokj.com/images/swiper/autumn.jpg","https://resource.tuniaokj.com/images/swiper/winter.jpg","https://resource.tuniaokj.com/images/swiper/winter.jpg"],phoneSwiperList:[{id:0,type:"image",name:"总有你想不到的创意",text:"海量分享",url:"https://resource.tuniaokj.com/images/swiper/test.jpg",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d1.png"},{id:1,type:"image",name:"寻找一起成长的小伙伴",text:"愉快玩耍",url:"https://resource.tuniaokj.com/images/swiper/banner-animate.png",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d4.png"},{id:2,type:"image",name:"更多彩蛋等你探索",text:"酷炫多彩",url:"https://resource.tuniaokj.com/images/swiper/test.jpg",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d5.png"},{id:3,type:"image",name:"更多彩蛋等你探索",text:"酷炫多彩",url:"https://resource.tuniaokj.com/images/swiper/banner-animate.png",pngurl:"https://resource.tuniaokj.com/images/swiper/c4d5.png"}],currentSwiperIndex:0,phoneCurrentSwiperIndex:0}},computed:{swiperItemClass:function(){var e=this;return function(t){return 0===e.currentSwiperIndex&&t===e.swiperList.length-1||e.currentSwiperIndex-1===t?"swiper__item--prev":e.currentSwiperIndex===e.swiperList.length-1&&0===t||e.currentSwiperIndex+1===t?"swiper__item--next":e.currentSwiperIndex===t?"swiper__item--current":void 0}},swiperContentClass:function(){var e=this;return function(t){return e.currentSwiperIndex===t?"swiper__item__content--current":0===e.currentSwiperIndex&&t===e.swiperList.length-1||e.currentSwiperIndex-1===t?"swiper__item__content--prev":e.currentSwiperIndex===e.swiperList.length-1&&0===t||e.currentSwiperIndex+1===t?"swiper__item__content--next":void 0}},phoneSwiperContentClass:function(){var e=this;return function(t){return e.phoneCurrentSwiperIndex===t?"phone-swiper__item__content--current":0===e.phoneCurrentSwiperIndex&&t===e.phoneSwiperList.length-1||e.phoneCurrentSwiperIndex-1===t?"phone-swiper__item__content--prev":e.phoneCurrentSwiperIndex===e.phoneSwiperList.length-1&&0===t||e.phoneCurrentSwiperIndex+1===t?"phone-swiper__item__content--next":void 0}}},onReady:function(){},methods:{swiperChange:function(e){this.currentSwiperIndex=e.detail.current},phoneSwiperChange:function(e){this.phoneCurrentSwiperIndex=e.detail.current}}}},7547:function(e,t,n){"use strict";n.r(t);var i=n("343a"),a=n("f522");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("7d12");var s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4882ac95",null,!1,i["a"],void 0);t["default"]=o.exports},"7d12":function(e,t,n){"use strict";var i=n("1bd4"),a=n.n(i);a.a},f522:function(e,t,n){"use strict";n.r(t);var i=n("5832"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}}]);