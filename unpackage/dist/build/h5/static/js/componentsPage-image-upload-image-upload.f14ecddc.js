(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-image-upload-image-upload"],{"0225":function(e,t,n){var a=n("955e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("74b64ae8",a,!0,{sourceMap:!1,shadowMode:!1})},"0e9a":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-image-upload[data-v-030a5bf2]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.tn-image-upload__item[data-v-030a5bf2]{display:flex;align-items:center;justify-content:center;width:%?200?%;height:%?200?%;overflow:hidden;margin:%?12?%;margin-left:0;background-color:#e6e6e6;position:relative;border-radius:%?10?%}.tn-image-upload__item-preview[data-v-030a5bf2]{border:%?1?% solid rgba(0,0,0,.1)}.tn-image-upload__item-preview__delete[data-v-030a5bf2]{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;z-index:10;border-top:%?60?% solid;border-left:%?60?% solid transparent;border-top-color:#e83a30;width:%?0?%;height:%?0?%}.tn-image-upload__item-preview__delete--icon[data-v-030a5bf2]{position:absolute;top:%?-50?%;right:%?6?%;color:#fff;font-size:%?24?%;line-height:1}.tn-image-upload__item-preview__progress[data-v-030a5bf2]{position:absolute;width:auto;bottom:%?0?%;left:%?0?%;right:%?0?%;z-index:9}.tn-image-upload__item-preview__error-btn[data-v-030a5bf2]{position:absolute;bottom:0;left:0;right:0;background-color:#e83a30;color:#fff;font-size:%?20?%;padding:%?8?% 0;text-align:center;z-index:9;line-height:1}.tn-image-upload__item-preview__image[data-v-030a5bf2]{display:block;width:100%;height:100%;border-radius:%?10?%}.tn-image-upload__item-add[data-v-030a5bf2]{flex-direction:column;color:#838383;font-size:%?26?%}.tn-image-upload__item-add--icon[data-v-030a5bf2]{font-size:%?40?%}.tn-image-upload__item-add__tips[data-v-030a5bf2]{margin-top:%?20?%;line-height:%?40?%}.tn-image-upload__add[data-v-030a5bf2]{width:auto;display:inline-block}.tn-image-upload__add--custom[data-v-030a5bf2]{width:100%}',""]),e.exports=t},"0fc0":function(e,t,n){"use strict";n.r(t);var a=n("2991"),i=n("c0e0");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("1056");var s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"778c77a3",null,!1,a["a"],void 0);t["default"]=r.exports},1056:function(e,t,n){"use strict";var a=n("86d0"),i=n.n(a);i.a},1541:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-line-progress[data-v-5a63c194]{display:inline-flex;align-items:center;width:100%;height:%?28?%;overflow:hidden;border-radius:%?100?%;background-color:#f0f0f0}.tn-line-progress--active[data-v-5a63c194]{display:flex;flex-direction:row;align-items:center;justify-items:flex-end;justify-content:space-around;width:0;height:100%;font-size:%?20?%;color:#fff;background-color:#01beff;transition:all .3s ease}.tn-line-progress__striped[data-v-5a63c194]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:%?80?% %?80?%}.tn-line-progress__striped--active[data-v-5a63c194]{-webkit-animation:progress-striped-data-v-5a63c194 2s linear infinite;animation:progress-striped-data-v-5a63c194 2s linear infinite}@-webkit-keyframes progress-striped-data-v-5a63c194{0%{background-position:0 0}100%{background-position:%?80?% 0}}@keyframes progress-striped-data-v-5a63c194{0%{background-position:0 0}100%{background-position:%?80?% 0}}',""]),e.exports=t},"1c46":function(e,t,n){"use strict";var a=n("d098"),i=n.n(a);i.a},2991:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[e.buttonClass,e.backgroundColorClass,e.fontColorClass],style:[e.buttonStyle],attrs:{"hover-class":"tn-hover",loading:e.loading,disabled:e.disabled,"form-type":e.formType,"open-type":e.openType},on:{getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(t){arguments[0]=t=e.$handleEvent(t),e.handleContact.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.handleError.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default")],2)},i=[]},3270:function(e,t,n){"use strict";var a=n("0225"),i=n.n(a);i.a},"3f58":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={tnLineProgress:n("f665").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?e._e():n("v-uni-view",{staticClass:"tn-image-upload-class tn-image-upload"},[e.showUploadList?e._l(e.lists,(function(t,a){return n("v-uni-view",{key:a,staticClass:"tn-image-upload__item tn-image-upload__item-preview",style:{width:e.$t.string.getLengthUnitValue(e.width),height:e.$t.string.getLengthUnitValue(e.height)}},[e.deleteable?n("v-uni-view",{staticClass:"tn-image-upload__item-preview__delete",style:{borderTopColor:e.deleteBackgroundColor},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.deleteItem(a)}}},[n("v-uni-view",{staticClass:"tn-image-upload__item-preview__delete--icon",class:["tn-icon-"+e.deleteIcon],style:{color:e.deleteColor}})],1):e._e(),e.showProgress&&t.progress>0&&!t.error?n("tn-line-progress",{staticClass:"tn-image-upload__item-preview__progress",attrs:{percent:t.progress,showPercent:!1,round:!1,height:8}}):e._e(),t.error?n("v-uni-view",{staticClass:"tn-image-upload__item-preview__error-btn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.retry(a)}}},[e._v("点击重试")]):e._e(),n("v-uni-image",{staticClass:"tn-image-upload__item-preview__image",attrs:{src:t.url||t.path,mode:e.imageMode},on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.doPreviewImage(t.url||t.path,a)}}})],1)})):e._e(),e._t("file",null,{file:e.lists}),e.maxCount>e.lists.length?n("v-uni-view",{staticClass:"tn-image-upload__add",class:{"tn-image-upload__add--custom":e.customBtn},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectFile.apply(void 0,arguments)}}},[e.customBtn?e._e():n("v-uni-view",{staticClass:"tn-image-upload__item tn-image-upload__item-add",style:{width:e.$t.string.getLengthUnitValue(e.width),height:e.$t.string.getLengthUnitValue(e.height)},attrs:{"hover-class":"tn-hover-class","hover-stay-time":"150"}},[n("v-uni-view",{staticClass:"tn-image-upload__item-add--icon tn-icon-add"}),n("v-uni-view",{staticClass:"tn-image-upload__item-add__tips"},[e._v(e._s(e.uploadText))])],1),n("v-uni-view",[e._t("addBtn")],2)],1):e._e()],2)},o=[]},"6b7e":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={tnNavBar:n("0ca8").default,tnImageUpload:n("c548").default,tnButton:n("0fc0").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"components-image_upload"},[n("tn-nav-bar",{attrs:{fixed:!0}},[e._v("图片上传")]),n("v-uni-view",{style:{paddingTop:e.vuex_custom_bar_height+"px"}},[n("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:e.tips,sectionList:e.sectionList,full:!0,fullWindowsScroll:e.fullWindowsScroll},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.click.apply(void 0,arguments)}}},[n("tn-image-upload",{ref:"imageUpload",attrs:{action:e.action,formData:e.formData,fileList:e.fileList,disabled:e.disabled,autoUpload:e.autoUpload,maxCount:e.maxCount,showUploadList:e.showUploadList,showProgress:e.showProgress,deleteable:e.deleteable,customBtn:e.customBtn,beforeUpload:e.beforeUpload},on:{"on-list-change":function(t){arguments[0]=t=e.$handleEvent(t),e.listChange.apply(void 0,arguments)},"on-oversize":function(t){arguments[0]=t=e.$handleEvent(t),e.oversize.apply(void 0,arguments)},"on-exceed":function(t){arguments[0]=t=e.$handleEvent(t),e.exceed.apply(void 0,arguments)},"on-choose-complete":function(t){arguments[0]=t=e.$handleEvent(t),e.chooseComplete.apply(void 0,arguments)},"on-choose-fail":function(t){arguments[0]=t=e.$handleEvent(t),e.chooseFail.apply(void 0,arguments)},"on-uploaded":function(t){arguments[0]=t=e.$handleEvent(t),e.uploaded.apply(void 0,arguments)},"on-success":function(t){arguments[0]=t=e.$handleEvent(t),e.uploadSuccess.apply(void 0,arguments)},"on-change":function(t){arguments[0]=t=e.$handleEvent(t),e.uploadChange.apply(void 0,arguments)},"on-progress":function(t){arguments[0]=t=e.$handleEvent(t),e.uploadProgress.apply(void 0,arguments)},"on-error":function(t){arguments[0]=t=e.$handleEvent(t),e.uploadError.apply(void 0,arguments)},"on-remove":function(t){arguments[0]=t=e.$handleEvent(t),e.fileRemove.apply(void 0,arguments)}}},[e.showUploadList?e._e():n("v-uni-view",{staticStyle:{width:"100%"},attrs:{slot:"file"},slot:"file"},e._l(e.lists,(function(e,t){return n("v-uni-view",{key:t,staticClass:"tn-image-upload__item"},[n("v-uni-image",{staticClass:"tn-image-upload__item__image",attrs:{src:e.url||e.path,mode:"aspectFill"}})],1)})),1),e.customBtn?n("v-uni-view",{staticClass:"tn-image-upload__custom-btn",attrs:{slot:"addBtn","hover-class":"tn-hover-class","hover-stay-time":"150"},slot:"addBtn"},[n("v-uni-view",[e._v("选择图片")])],1):e._e()],1),n("v-uni-view",{staticClass:"tn-flex tn-margin-top-xs tn-flex-row-center"},[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upload.apply(void 0,arguments)}}},[e._v("上传")]),n("tn-button",{attrs:{fontColor:"tn-color-white",backgroundColor:"tn-bg-red",margin:"0rpx 0rpx 0rpx 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._v("清空列表")])],1)],1)],1)],1)},o=[]},"6c60":function(e,t,n){"use strict";n.r(t);var a=n("7b5e"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"7b5e":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a={name:"tn-line-progress",props:{percent:{type:Number,default:0,validator:function(e){return e>=0&&e<=100}},height:{type:Number,default:0},round:{type:Boolean,default:!0},striped:{type:Boolean,default:!1},stripedAnimation:{type:Boolean,default:!0},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},showPercent:{type:Boolean,default:!1}},computed:{progressStyle:function(){var e={};return e.borderRadius=this.round?"100rpx":0,this.height&&(e.height=this.$t.string.getLengthUnitValue(this.height)),this.inactiveColor&&(e.backgroundColor=this.inactiveColor),e},progressActiveStyle:function(){var e={};return e.width=this.percent+"%",this.$t.color.getBackgroundColorStyle(this.activeColor)&&(e.backgroundColor=this.$t.color.getBackgroundColorStyle(this.activeColor)),e}},data:function(){return{}}};t.default=a},"86d0":function(e,t,n){var a=n("d953");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("e2228cc4",a,!0,{sourceMap:!1,shadowMode:!1})},"8a89":function(e,t,n){"use strict";var a=n("b026"),i=n.n(a);i.a},"955e":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-image-upload__item[data-v-2c1b7ebd]{width:100%;height:%?180?%;border-radius:%?30?%;margin-bottom:%?20?%}.tn-image-upload__item__image[data-v-2c1b7ebd]{width:100%;height:%?180?%;border-radius:%?30?%}.tn-image-upload__custom-btn[data-v-2c1b7ebd]{background-color:#e6e6e6;width:100%;height:%?180?%;display:flex;align-items:center;justify-content:center;border-radius:%?30?%}',""]),e.exports=t},"9a20":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"tn-line-progress-class tn-line-progress",style:[e.progressStyle]},[n("v-uni-view",{staticClass:"tn-line-progress--active",class:[e.$t.color.getBackgroundColorInternalClass(e.activeColor),e.striped?e.stripedAnimation?"tn-line-progress__striped tn-line-progress__striped--active":"tn-line-progress__striped":""],style:[e.progressActiveStyle]},[e.$slots.default||e.$slots.$default?e._t("default"):e.showPercent?[e._v(e._s(e.percent+"%"))]:e._e()],2)],1)},i=[]},"9acc":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("c975"),n("fb6a"),n("baa5"),n("caad"),n("2532");var i=a(n("0912")),o={mixins:[i.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var e="";switch(this.shape){case"icon":case"round":e+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var t=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);e+=" tn-shadow-".concat(t)}else e+=" tn-shadow-blur";if(this.fontBold&&(e+=" tn-text-bold"),this.plain&&(e+=" tn-btn--plain",this.border&&(e+=" tn-border-solid",this.borderBold&&(e+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);e+=" tn-border-".concat(n)}return e},buttonStyle:function(){var e={};switch(this.size){case"sm":e.padding="0 20rpx",e.fontSize="22rpx",e.height=this.height||"48rpx";break;case"lg":e.padding="0 40rpx",e.fontSize="32rpx",e.height=this.height||"80rpx";break;default:e.padding="0 30rpx",e.fontSize="28rpx",e.height=this.height||"64rpx"}return this.padding&&(e.padding=this.padding),this.margin&&(e.margin=this.margin),this.fontSize&&(e.fontSize=this.fontSize+this.fontUnit),e.width="icon"===this.shape?e.height:this.width,e.padding="icon"===this.shape?"0":e.padding,this.fontColorStyle&&(e.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?e.borderColor=this.backgroundColorStyle||"#080808":e.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?e.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(e.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),e}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var e=this;if(!this.disabled){if(this.blockRepeatClick){var t=(new Date).getTime();if(t-this.clickTime<=this.clickIntervalTime)return;this.clickTime=t,setTimeout((function(){e.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,n=void 0===t?{}:t;this.$emit("getuserinfo",n)},handleContact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,n=void 0===t?{}:t;this.$emit("contact",n)},handleGetPhoneNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,n=void 0===t?{}:t;this.$emit("getphonenumber",n)},handleError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.detail,n=void 0===t?{}:t;this.$emit("error",n)}}};t.default=o},a772:function(e,t,n){"use strict";n.r(t);var a=n("ece8"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},b026:function(e,t,n){var a=n("0e9a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("0e6af06f",a,!0,{sourceMap:!1,shadowMode:!1})},b62f:function(e,t,n){"use strict";(function(e){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("a434");var i=a(n("47a7")),o={components:{dynamicDemoTemplate:i.default},data:function(){return{action:"https://www.hualigs.cn/api/upload",formData:{apiType:"this,ali",token:"dffc1e06e636cff0fdf7d877b6ae6a2e",image:null},fileList:[],showUploadList:!0,customBtn:!1,autoUpload:!0,showProgress:!0,deleteable:!0,customStyle:!1,maxCount:9,disabled:!1,lists:[],tips:["无需依赖额外的样式文件","使用tn-image-upload组件"],sectionList:[{name:"参数切换",section:[{title:"上传方式",optional:["自动上传","手动上传"],methods:"autoUploadChange"},{title:"进度显示",optional:["是","否"],methods:"showProgressChange"},{title:"删除按钮显示",optional:["是","否"],methods:"deleteableChange"},{title:"最大上传数",optional:["2","6","9"],methods:"maxCountChange",current:2},{title:"自定义列表和上传按钮样式",optional:["是","否"],methods:"customUploadListChange",current:1},{title:"是否禁用",optional:["是","否"],methods:"disabledChange",current:1}]}],fullWindowsScroll:!1}},methods:{click:function(e){this[e.methods]&&this[e.methods](e)},autoUploadChange:function(e){this.autoUpload=0===e.index},showProgressChange:function(e){this.showProgress=0===e.index},deleteableChange:function(e){this.deleteable=0===e.index},maxCountChange:function(e){this.maxCount=Number(e.name)},customUploadListChange:function(e){0===e.index?(this.customStyle=!0,this.showUploadList=!1,this.customBtn=!0):1===e.index&&(this.customStyle=!1,this.showUploadList=!0,this.customBtn=!1),this.$refs.demoTemplate.updateSectionScrollView()},disabledChange:function(e){this.disabled=0===e.index,this.$refs.demoTemplate.updateSectionScrollView()},upload:function(){this.$refs.imageUpload.upload()},clear:function(){this.$refs.imageUpload.clear()},beforeUpload:function(t,n){return e("log","文件上传前执行",n,t," at componentsPage/image-upload/image-upload.vue:195"),e("log",this.formData," at componentsPage/image-upload/image-upload.vue:196"),this.formData.image=n[t].file,!0},listChange:function(t,n){var a=this;e("log","上传文件列表发生改变",t,n," at componentsPage/image-upload/image-upload.vue:203"),this.lists.splice(0,this.lists.length),this.$nextTick((function(){a.lists=a.$t.deepClone(t),a.customStyle&&t.length>4?a.fullWindowsScroll=!0:a.$refs.demoTemplate.updateSectionScrollView()}))},oversize:function(t,n,a){e("log","上传的文件超过大小",t,n,a," at componentsPage/image-upload/image-upload.vue:215")},exceed:function(t,n,a){e("log","上传的文件超过允许数量",t,n,a," at componentsPage/image-upload/image-upload.vue:218")},chooseComplete:function(t,n){e("log","文件选择成功",t,n," at componentsPage/image-upload/image-upload.vue:221")},chooseFail:function(t){e("log","文件选择失败",t," at componentsPage/image-upload/image-upload.vue:224")},uploaded:function(t,n){e("log","全部上传文件处理完成",t,n," at componentsPage/image-upload/image-upload.vue:227")},uploadSuccess:function(t,n,a,i){e("log","文件上传成功",t,n,a,i," at componentsPage/image-upload/image-upload.vue:230")},uploadChange:function(t,n,a,i){e("log","文件上传信息有变",t,n,a,i," at componentsPage/image-upload/image-upload.vue:233")},uploadProgress:function(t,n,a,i){e("log","文件上传进度",t,n,a,i," at componentsPage/image-upload/image-upload.vue:236")},uploadError:function(t,n,a,i){e("log","文件上传失败",t,n,a,i," at componentsPage/image-upload/image-upload.vue:239")},fileRemove:function(t,n,a){e("log","文件移除成功",t,n,a," at componentsPage/image-upload/image-upload.vue:242")}}};t.default=o}).call(this,n("0de9")["log"])},baa5:function(e,t,n){var a=n("23e7"),i=n("e58c");a({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},be02:function(e,t,n){"use strict";n.r(t);var a=n("b62f"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},c0e0:function(e,t,n){"use strict";n.r(t);var a=n("9acc"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},c548:function(e,t,n){"use strict";n.r(t);var a=n("3f58"),i=n("a772");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("8a89");var s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"030a5bf2",null,!1,a["a"],void 0);t["default"]=r.exports},d098:function(e,t,n){var a=n("1541");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("23de2d35",a,!0,{sourceMap:!1,shadowMode:!1})},d2d8:function(e,t,n){"use strict";n.r(t);var a=n("6b7e"),i=n("be02");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("3270");var s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2c1b7ebd",null,!1,a["a"],void 0);t["default"]=r.exports},d953:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),e.exports=t},ece8:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1"));n("a9e3"),n("d81d"),n("d3b7"),n("ac1f"),n("00b4"),n("caad"),n("a434"),n("5319");var o={name:"tn-image-upload",props:{fileList:{type:Array,default:function(){return[]}},action:{type:String,default:""},name:{type:String,default:"file"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},maxCount:{type:Number,default:9},showUploadList:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"},previewFullImage:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},deleteable:{type:Boolean,default:!0},deleteIcon:{type:String,default:"close"},deleteBackgroundColor:{type:String,default:""},deleteColor:{type:String,default:""},uploadText:{type:String,default:"选择图片"},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:Number,default:200},height:{type:Number,default:200},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},multiple:{type:Boolean,default:!0},maxSize:{type:Number,default:10485760},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},index:{type:[Number,String],default:""}},computed:{},data:function(){return{lists:[],uploading:!1}},watch:{fileList:{handler:function(e){var t=this;e.map((function(e){var n=t.lists.some((function(t){return t.url===e.url}));!n&&t.lists.push({url:e.url,error:!1,progress:100})}))},immediate:!0},lists:function(e){this.$emit("on-list-change",e,this.index)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var e=this;if(!this.disabled){this.name;var t=this.maxCount,n=this.multiple,a=this.maxSize,i=this.sizeType,o=this.lists,s=(this.camera,this.compressed,this.sourceType),r=null,l=t-o.length;r=new Promise((function(e,t){uni.chooseImage({count:n?l>9?9:l:1,sourceType:s,sizeType:i,success:e,fail:t})})),r.then((function(i){var s=o.length;i.tempFiles.map((function(i,s){if(e.checkFileExt(i)&&(n||!(s>=1)))if(i.size>a)e.$emit("on-oversize",i,o,e.index),e.showToast("超出可允许文件大小");else{if(t<=o.length)return e.$emit("on-exceed",i,o,e.index),void e.showToast("超出最大允许的文件数");o.push({url:i.path,progress:0,error:!1,file:i})}})),e.$emit("on-choose-complete",e.lists,e.index),e.autoUpload&&e.uploadFile(s)})).catch((function(t){e.$emit("on-choose-fail",t)}))}},showToast:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||t)&&this.$t.message.toast(e)},upload:function(){this.uploadFile()},retry:function(e){this.lists[e].progress=0,this.lists[e].error=!1,this.lists[e].response=null,this.$t.message.loading("重新上传"),this.uploadFile(e)},uploadFile:function(){var e=arguments,t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:0,!t.disabled){n.next=3;break}return n.abrupt("return");case 3:if(!t.uploading){n.next=5;break}return n.abrupt("return");case 5:if(!(a>=t.lists.length)){n.next=8;break}return t.$emit("on-uploaded",t.lists,t.index),n.abrupt("return");case 8:if(100!==t.lists[a].progress){n.next=12;break}return t.lists[a].uploadTask=null,t.autoUpload&&t.uploadFile(a+1),n.abrupt("return");case 12:if(!t.beforeUpload||"function"!==typeof t.beforeUpload){n.next=23;break}if(i=t.beforeUpload.bind(t.$t.$parent.call(t))(a,t.lists),!i||"function"!==typeof i.then){n.next=19;break}return n.next=17,i.then((function(e){})).catch((function(e){return t.uploadFile(a+1)}));case 17:n.next=23;break;case 19:if(!1!==i){n.next=23;break}return n.abrupt("return",t.uploadFile(a+1));case 23:if(t.action){n.next=26;break}return t.showToast("请配置上传地址",!0),n.abrupt("return");case 26:t.lists[a].error=!1,t.uploading=!0,o=uni.uploadFile({url:t.action,filePath:t.lists[a].url,name:t.name,formData:t.formData,header:t.header,success:function(e){var n=t.toJson&&t.$t.test.jsonString(e.data)?JSON.parse(e.data):e.data;[200,201,204].includes(e.statusCode)?(t.lists[a].response=n,t.lists[a].progress=100,t.lists[a].error=!1,t.$emit("on-success",n,a,t.lists,t.index)):t.uploadError(a,n)},fail:function(e){t.uploadError(a,e)},complete:function(e){t.$t.message.closeLoading(),t.uploading=!1,t.uploadFile(a+1),t.$emit("on-change",e,a,t.lists,t.index)}}),t.lists[a].uploadTask=o,o.onProgressUpdate((function(e){e.progress>0&&(t.lists[a].progress=e.progress,t.$emit("on-progress",e,a,t.lists,t.index))}));case 31:case"end":return n.stop()}}),n)})))()},uploadError:function(e,t){this.lists[e].progress=0,this.lists[e].error=!0,this.lists[e].response=null,this.showToast("上传失败，请重试"),this.$emit("on-error",t,e,this.lists,this.index)},deleteItem:function(e){var t=this;this.deleteable&&this.$t.message.modal("提示","您确定要删除吗？",(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.beforeRemove||"function"!==typeof t.beforeRemove){n.next=10;break}if(a=t.beforeRemove.bind(t.$t.$parent.call(t))(e,t.lists),!a||"function"!==typeof a.then){n.next=7;break}return n.next=5,a.then((function(n){t.handlerDeleteItem(e)})).catch((function(e){t.showToast("删除操作被中断")}));case 5:n.next=8;break;case 7:!1===a?t.showToast("删除操作被中断"):t.handlerDeleteItem(e);case 8:n.next=11;break;case 10:t.handlerDeleteItem(e);case 11:case"end":return n.stop()}}),n)}))),!0)},handlerDeleteItem:function(e){this.lists[e].progress<100&&this.lists[e].progress>0&&"undefined"!==typeof this.lists[e].uploadTask&&this.lists[e].uploadTask.abort(),this.lists.splice(e,1),this.$forceUpdate(),this.$emit("on-remove",e,this.lists,this.index),this.showToast("删除成功")},remove:function(e){this.deleteable&&e>=0&&e<this.lists.length&&this.lists.splice(e,1)},doPreviewImage:function(e,t){var n=this;if(this.previewFullImage){var a=this.lists.map((function(e){return e.url||e.path}));uni.previewImage({urls:a,current:e,success:function(){n.$emit("on-preview",e,n.lists,n.index)},fail:function(){n.showToast("预览图片失败")}})}},checkFileExt:function(e){var t,n;return n=e.name.replace(/.+\./,"").toLowerCase(),t=this.limitType.some((function(e){return e.toLowerCase()===n})),t||this.showToast("不支持".concat(n,"格式的文件")),t}}};t.default=o},f665:function(e,t,n){"use strict";n.r(t);var a=n("9a20"),i=n("6c60");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("1c46");var s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5a63c194",null,!1,a["a"],void 0);t["default"]=r.exports}}]);