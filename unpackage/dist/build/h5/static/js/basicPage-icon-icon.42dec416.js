(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-icon-icon"],{"0288":function(i,n,e){var o=e("24fb");n=o(!1),n.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.search-fixed[data-v-70bd88cd]{position:fixed;width:100%;transition:all .25s ease-out;z-index:1}\r\n/* 搜索框 start */.search-content[data-v-70bd88cd]{padding-top:%?16?%;margin:%?40?% %?40?%}.search-content__input[data-v-70bd88cd]{caret-color:#01beff;width:100%;height:%?70?%;line-height:%?60?%;border-radius:%?100?%;text-align:center;margin:0 auto;background-color:#fff;color:#080808;box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.05)}.search-content__input-placeholder[data-v-70bd88cd]{font-size:%?24?%}\r\n/* 搜索框 end */\r\n/* 图标容器 start */.icon-shadow[data-v-70bd88cd]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.06)}.icon__container[data-v-70bd88cd]{margin-bottom:%?30?%}.icon__item[data-v-70bd88cd]{width:30.4%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;margin-top:0;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear,-webkit-transform .2s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon__item--active[data-v-70bd88cd]{-webkit-transform:scale(.95);transform:scale(.95);box-shadow:inset %?10?% %?10?% %?18?% rgba(0,0,120,.04),inset %?-8?% %?-8?% %?20?% rgba(0,0,120,.03)}.icon__item--icon[data-v-70bd88cd]{width:%?80?%;height:%?80?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}.icon__item--icon[data-v-70bd88cd]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png)}.icon__item--title[data-v-70bd88cd]{width:100%;text-align:center}\r\n/* 图标容器 end */',""]),i.exports=n},"5a5f6":function(i,n,e){"use strict";e("7a82");var o=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("e9c4"),e("4de4"),e("d3b7"),e("caad"),e("2532");var a=o(e("ec76")),c={name:"basicIcon",data:function(){return{iconList:a.default.data,searchValue:"",currentIconIndex:-1}},computed:{resultIconList:function(){var i=this,n=JSON.parse(JSON.stringify(a.default.data));return this.searchValue?n.filter((function(n){if(n.icons=n.icons.filter((function(n){if(n.name.includes(i.searchValue)||n.icon.includes(i.searchValue))return n})),n.icons.length>0)return n})):a.default.data}},methods:{saerchInput:function(i){this.currentIconIndex=-1,this.searchValue=i.target.value,this.resultIconList},clickIcon:function(i,n,e){var o=this;this.currentIconIndex=i,uni.setClipboardData({data:e,showToast:!1,success:function(){console.log("success"),o.$tn.message.toast("已复制："+e,!1,null,"none",5e3)}})}}};n.default=c},"6a0a":function(i,n,e){"use strict";e.r(n);var o=e("9258"),a=e("e9ba");for(var c in a)["default"].indexOf(c)<0&&function(i){e.d(n,i,(function(){return a[i]}))}(c);e("f49e");var d=e("f0c5"),m=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"70bd88cd",null,!1,o["a"],void 0);n["default"]=m.exports},9258:function(i,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var o={tnNavBar:e("75e2").default},a=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("v-uni-view",{staticClass:"basic-icon"},[e("tn-nav-bar",{attrs:{fixed:!0}},[i._v("图标")]),e("v-uni-view",{style:{paddingTop:i.vuex_custom_bar_height+"px"}},[e("v-uni-view",{staticClass:"search-fixed"},[e("v-uni-view",{staticClass:"search-content"},[e("v-uni-input",{staticClass:"search-content__input",attrs:{"placeholder-class":"search-content__input-placeholder tn-color-blue",placeholder:"搜索 中文名/英文名"},on:{input:function(n){arguments[0]=n=i.$handleEvent(n),i.saerchInput.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{style:{marginTop:i.vuex_custom_bar_height+"px"}},[i._l(i.resultIconList,(function(n,o){return[e("v-uni-view",{key:o+"_0",staticClass:"tn-text-center tn-text-xl tn-text-bold tn-margin-lg"},[e("v-uni-text",{staticClass:"tn-icon-font"}),e("v-uni-text",{staticClass:"tn-padding-left-sm tn-padding-right-sm"},[i._v(i._s(n.title))]),e("v-uni-text",{staticClass:"tn-icon-font"})],1),e("v-uni-view",{key:o+"_1",staticClass:"icon__container tn-flex tn-flex-wrap tn-flex-row-left tn-flex-col-center tn-margin"},i._l(n.icons,(function(n,o){return e("v-uni-view",{key:o,staticClass:"icon__item tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center icon-shadow",class:[{"icon__item--active":o===i.currentIconIndex}],on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.clickIcon(o,n.name,n.icon)}}},[e("v-uni-view",{staticClass:"icon__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"},[e("v-uni-view",{class:["tn-icon-"+n.icon]})],1),e("v-uni-view",{staticClass:"icon__item--title tn-text-ellipsis tn-text-df tn-color-grey"},[i._v(i._s(n.icon))])],1)})),1)]}))],2),e("v-uni-view",{staticClass:"tn-text-center tn-margin-bottom-xl"},[e("v-uni-view",[i._v("icon目前700+，支持"),e("v-uni-text",{staticClass:"tn-color-orange tn-text-lg tn-padding-xs"},[i._v("中文、英文")]),i._v("搜索")],1),e("v-uni-button",{staticClass:" tn-button--clear-style",attrs:{"open-type":"feedback"}},[e("v-uni-view",{staticClass:"tn-margin tn-text-center"},[e("v-uni-text",[i._v("里面缺少你想要的吗？UI期待你的需求")]),e("v-uni-text",{staticClass:"tn-color-blue"},[i._v("留言")])],1)],1)],1),e("v-uni-view",{staticClass:"tn-padding-bottom"})],1)],1)},c=[]},d8c0:function(i,n,e){var o=e("0288");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);var a=e("4f06").default;a("4104d89d",o,!0,{sourceMap:!1,shadowMode:!1})},e9ba:function(i,n,e){"use strict";e.r(n);var o=e("5a5f6"),a=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(i){e.d(n,i,(function(){return o[i]}))}(c);n["default"]=a.a},ec76:function(i,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:[{id:26,name:"basics",title:"基础图标",icons:[{id:97,icon:"font",name:"字体文字"},{id:153,icon:"search",name:"搜索"},{id:204,icon:"scan",name:"扫描扫码扫一扫"},{id:202,icon:"qr-code",name:"二维码扫码"},{id:621,icon:"qr-code-circle",name:"小程序码扫码"},{id:203,icon:"qr-barcode",name:"条形码条码扫码"},{id:201,icon:"qr-beibei",name:"微信码扫码北北"},{id:319,icon:"circle-lack",name:"刷新加载圆"},{id:320,icon:"circle-arrow",name:"刷新箭头圆"},{id:712,icon:"refresh-simple",name:"刷新箭头圆"},{id:608,icon:"refresh",name:"刷新圆加载"},{id:609,icon:"refresh-square",name:"刷新方加载"},{id:490,icon:"loading",name:"加载"},{id:703,icon:"history",name:"历史记录"},{id:398,icon:"title",name:"标题竖线"},{id:399,icon:"sort",name:"排序排列"},{id:206,icon:"filter",name:"筛选过滤"},{id:392,icon:"sequence-vertical",name:"排序排列纵向"},{id:393,icon:"sequence",name:"排序排列横向"},{id:709,icon:"totop-simple",name:"返回顶部"},{id:740,icon:"cloud",name:"云"},{id:741,icon:"cloud-fill",name:"云"},{id:207,icon:"upload",name:"云上传"},{id:208,icon:"download",name:"云下载"},{id:644,icon:"upload-simple",name:"上传"},{id:643,icon:"download-simple",name:"下载"},{id:109,icon:"my-add",name:"人员增加添加"},{id:553,icon:"my-reduce",name:"人员减少删除"},{id:316,icon:"sex",name:"性别两性男女"},{id:317,icon:"sex-female",name:"女性"},{id:318,icon:"sex-male",name:"男性"},{id:322,icon:"circle",name:"圆形单选"},{id:321,icon:"circle-fill",name:"圆形单选选中"},{id:325,icon:"square",name:"方形多选"},{id:555,icon:"square-fill",name:"方形多选选中"},{id:467,icon:"install",name:"安装设置"},{id:466,icon:"install-fill",name:"安装设置"},{id:337,icon:"send",name:"发送分享转发"},{id:336,icon:"send-fill",name:"发送分享转发"},{id:332,icon:"share-triangle",name:"发送分享转发"},{id:335,icon:"share",name:"发送分享转发"},{id:334,icon:"share-circle",name:"发送分享转发"},{id:333,icon:"share-square",name:"发送分享转发"},{id:142,icon:"all",name:"全部"}]},{id:10,name:"internet",title:"社交电商",icons:[{id:225,icon:"wechat",name:"微信"},{id:226,icon:"wechat-fill",name:"微信"},{id:606,icon:"bookmark",name:"书签标签"},{id:607,icon:"bookmark-fill",name:"书签标签"},{id:343,icon:"star",name:"星星收藏"},{id:342,icon:"star-fill",name:"星星收藏"},{id:711,icon:"praise-simple",name:"点赞赞扬认可"},{id:705,icon:"praise-simple-fill",name:"点赞赞扬认可"},{id:713,icon:"tread-simple",name:"踩不认可"},{id:715,icon:"tread-simple-fill",name:"踩不认可"},{id:341,icon:"praise",name:"点赞赞扬认可"},{id:340,icon:"praise-fill",name:"点赞赞扬认可"},{id:612,icon:"tread",name:"踩不认可"},{id:610,icon:"tread-fill",name:"踩不认可"},{id:351,icon:"like-break",name:"心碎不喜欢"},{id:352,icon:"like-lack",name:"爱心喜欢心动"},{id:353,icon:"like",name:"爱心喜欢心动"},{id:354,icon:"like-fill",name:"爱心喜欢心动凶姐"},{id:362,icon:"flower",name:"花朵美好赞美"},{id:361,icon:"flower-fill",name:"花朵美好赞美"},{id:697,icon:"floral",name:"花朵美好赞美"},{id:700,icon:"floral-fill",name:"花朵美好赞美"},{id:293,icon:"image",name:"图片照片"},{id:294,icon:"image-fill",name:"图片照片"},{id:500,icon:"theme",name:"主题色板"},{id:642,icon:"theme-fill",name:"主题色板"},{id:224,icon:"moments",name:"时刻朋友圈"},{id:270,icon:"commissary",name:"杂货店小卖部商店"},{id:551,icon:"commissary-fill",name:"杂货店小卖部商店"},{id:268,icon:"shop",name:"商店商城商铺"},{id:269,icon:"shop-fill",name:"商店商城商铺"},{id:521,icon:"paperbag",name:"购物袋购买买买"},{id:522,icon:"paperbag-fill",name:"购物袋购买买买"},{id:274,icon:"shopbag",name:"购物袋购买买买"},{id:273,icon:"shopbag-fill",name:"购物袋购买买买"},{id:559,icon:"buy",name:"购物袋购买买买"},{id:560,icon:"buy-fill",name:"购物袋购买买买"},{id:276,icon:"basket",name:"购物车购买买买"},{id:275,icon:"basket-fill",name:"购物车购买买买"},{id:278,icon:"cart",name:"购物车购买买买"},{id:277,icon:"cart-fill",name:"购物车购买买买"},{id:272,icon:"coupon",name:"优惠券折扣"},{id:271,icon:"coupon-fill",name:"优惠券折扣"},{id:619,icon:"inventory",name:"库存清单"},{id:616,icon:"inventory-fill",name:"库存清单"},{id:260,icon:"tag",name:"标签折扣"},{id:259,icon:"tag-fill",name:"标签折扣"},{id:192,icon:"lucky-money",name:"红包福利"},{id:193,icon:"lucky-money-fill",name:"红包福利"},{id:279,icon:"ticket",name:"票据小票"},{id:280,icon:"ticket-fill",name:"票据小票"},{id:281,icon:"receipt",name:"收据回执"},{id:282,icon:"receipt-fill",name:"收据回执"},{id:470,icon:"first",name:"排名第一"},{id:472,icon:"second",name:"排名第二"},{id:471,icon:"third",name:"排名第三"},{id:256,icon:"trophy",name:"奖杯奖项"},{id:255,icon:"trophy-fill",name:"奖杯奖项"},{id:154,icon:"brand",name:"品牌商标"},{id:461,icon:"brand-fill",name:"品牌商标"},{id:93,icon:"sword",name:"剑战斗"},{id:7,icon:"sword-fill",name:"剑战斗"},{id:346,icon:"fire",name:"火热门"},{id:347,icon:"fire-fill",name:"火热门"},{id:120,icon:"vip",name:"会员"},{id:121,icon:"vip-fill",name:"会员"},{id:266,icon:"baby",name:"奶瓶娃娃宝宝"},{id:267,icon:"baby-fill",name:"奶瓶娃娃宝宝"},{id:227,icon:"service",name:"客服"},{id:228,icon:"service-fill",name:"客服"},{id:633,icon:"service-simple",name:"客服"},{id:632,icon:"service-simple-fill",name:"客服"},{id:738,icon:"fireworks",name:"烟花礼花火花"},{id:541,icon:"birthday",name:"生日蛋糕"},{id:194,icon:"prize",name:"奖品礼品礼盒"},{id:195,icon:"gift",name:"礼物礼品礼盒"},{id:39,icon:"vip-text",name:"会员"},{id:556,icon:"allday",name:"24小时全天"},{id:2,icon:"text-zgs",name:"掌柜说"},{id:626,icon:"text-xzx",name:"心之选"},{id:628,icon:"text-sale",name:"销售促销"},{id:625,icon:"text-free",name:"免费"},{id:624,icon:"text-best",name:"最好的"},{id:627,icon:"text-like",name:"喜欢"},{id:629,icon:"text-hot",name:"热门"}]},{id:25,name:"safe",title:"账号安全",icons:[{id:287,icon:"identity",name:"身份证卡片名片"},{id:288,icon:"identity-fill",name:"身份证卡片名片"},{id:286,icon:"bankcard",name:"卡片会员卡银行卡"},{id:285,icon:"bankcard-fill",name:"卡片会员卡银行卡"},{id:283,icon:"cardbag",name:"卡包"},{id:284,icon:"cardbag-fill",name:"卡包"},{id:196,icon:"pay",name:"钱包支付"},{id:554,icon:"pay-fill",name:"钱包支付"},{id:529,icon:"payment-wechat",name:"微信支付"},{id:533,icon:"payment-alipay",name:"支付宝支付"},{id:197,icon:"refund",name:"付款收款退款支付钱包"},{id:198,icon:"money",name:"付款收款退款支付钱包"},{id:506,icon:"money-fill",name:"付款收款退款支付钱包"},{id:116,icon:"funds",name:"资金支付钱包"},{id:117,icon:"funds-fill",name:"资金支付钱包"},{id:302,icon:"trusty",name:"保证认证"},{id:301,icon:"trusty-fill",name:"保证认证"},{id:304,icon:"safe",name:"安全防护"},{id:303,icon:"safe-fill",name:"安全防护"},{id:314,icon:"unlock",name:"安全解锁"},{id:315,icon:"lock",name:"安全上锁"},{id:310,icon:"eye-hide",name:"闭眼不可见"},{id:311,icon:"eye-close",name:"闭眼不可见"},{id:312,icon:"eye",name:"眼睛可见"},{id:313,icon:"eye-fill",name:"眼睛可见"},{id:13,icon:"login",name:"登录登入"},{id:12,icon:"logout",name:"退出登出"},{id:200,icon:"fingerprint",name:"指纹解锁"},{id:199,icon:"power",name:"关机关闭"},{id:653,icon:"password",name:"手势密码"}]},{id:19,name:"message",title:"消息提示",icons:[{id:360,icon:"message",name:"消息评论"},{id:359,icon:"message-fill",name:"消息评论"},{id:358,icon:"comment",name:"消息评论"},{id:357,icon:"comment-fill",name:"消息评论"},{id:349,icon:"topics",name:"话题讨论"},{id:350,icon:"topics-fill",name:"话题讨论"},{id:355,icon:"reply",name:"消息回复"},{id:356,icon:"reply-fill",name:"消息回复"},{id:496,icon:"email",name:"邮件信息"},{id:502,icon:"email-fill",name:"邮件信息"},{id:96,icon:"notice",name:"通知提示"},{id:95,icon:"notice-fill",name:"通知提示"},{id:94,icon:"notice-no",name:"关闭通知提示"},{id:552,icon:"notice-no-fill",name:"关闭通知提示"},{id:254,icon:"creative",name:"订阅灵感创意"},{id:253,icon:"creative-fill",name:"订阅灵感创意"},{id:251,icon:"creative-stop",name:"无订阅灵感创意"},{id:252,icon:"creative-stop-fill",name:"无订阅灵感创意"},{id:237,icon:"clock",name:"闹钟提醒"},{id:238,icon:"clock-fill",name:"闹钟提醒"},{id:240,icon:"time",name:"时间时钟"},{id:239,icon:"time-fill",name:"时间时钟"},{id:734,icon:"tip",name:"提示提醒"},{id:421,icon:"tip-fill",name:"提示提醒"},{id:420,icon:"tips",name:"提示提醒"},{id:735,icon:"tips-fill",name:"提示提醒"},{id:404,icon:"warning",name:"警告警示"},{id:405,icon:"warning-fill",name:"警告警示"},{id:418,icon:"help",name:"帮助中心"},{id:419,icon:"help-fill",name:"帮助中心"}]},{id:9,name:"edit",title:"文档操作",icons:[{id:586,icon:"folder",name:"文档文件"},{id:587,icon:"folder-fill",name:"文档文件"},{id:720,icon:"folder-add",name:"增加文档文件"},{id:724,icon:"folder-add-fill",name:"增加文档文件"},{id:726,icon:"folder-reduce",name:"减少文档文件"},{id:725,icon:"folder-reduce-fill",name:"减少文档文件"},{id:590,icon:"folder-upload",name:"文档文件上传"},{id:592,icon:"folder-upload-fill",name:"文档文件上传"},{id:591,icon:"folder-download",name:"文档文件下载"},{id:588,icon:"folder-download-fill",name:"文档文件下载"},{id:291,icon:"order",name:"订单列表"},{id:292,icon:"order-fill",name:"订单列表"},{id:289,icon:"calendar",name:"日历日期日签"},{id:290,icon:"calendar-fill",name:"日历日期日签"},{id:295,icon:"image-text",name:"图文详情"},{id:296,icon:"image-text-fill",name:"图文详情"},{id:305,icon:"edit",name:"编辑编写"},{id:306,icon:"edit-form",name:"编辑编写"},{id:307,icon:"edit-write",name:"编辑编写"},{id:18,icon:"edit-write-fill",name:"编辑编写"},{id:309,icon:"write",name:"编辑编写"},{id:308,icon:"write-fill",name:"编辑编写"},{id:730,icon:"write-feather",name:"编辑编写"},{id:736,icon:"write-feather-fill",name:"编辑编写"},{id:710,icon:"pushpin",name:"书签图钉"},{id:716,icon:"pushpin-fill",name:"书签图钉"},{id:45,icon:"shears",name:"剪刀剪掉"},{id:578,icon:"tailor",name:"裁剪剪掉"},{id:538,icon:"pin",name:"别针回形针"},{id:155,icon:"link",name:"链接跳转"},{id:573,icon:"move",name:"移动操作"},{id:562,icon:"expend",name:"全屏"},{id:561,icon:"compress",name:"全屏"},{id:526,icon:"fullscreen",name:"全屏"},{id:527,icon:"narrow",name:"全屏"},{id:563,icon:"fullscreen-all",name:"全屏"},{id:572,icon:"narrow-all",name:"全屏"},{id:672,icon:"bigscreen",name:"全屏"},{id:528,icon:"smallscreen",name:"全屏"},{id:324,icon:"copy",name:"复制粘贴"},{id:323,icon:"copy-fill",name:"复制粘贴"},{id:623,icon:"task",name:"复制粘贴"},{id:622,icon:"task-fill",name:"复制粘贴"},{id:205,icon:"revoke",name:"返回取消"},{id:414,icon:"success",name:"成功对的"},{id:416,icon:"close",name:"关闭错的"},{id:412,icon:"success-circle",name:"成功"},{id:411,icon:"success-circle-fill",name:"成功"},{id:417,icon:"close-circle",name:"关闭"},{id:415,icon:"close-fill",name:"关闭"},{id:410,icon:"success-square",name:"成功多选"},{id:413,icon:"success-square-fill",name:"成功多选"},{id:549,icon:"close-square",name:"关闭删除"},{id:550,icon:"close-square-fill",name:"关闭删除"},{id:382,icon:"backspace",name:"回退删除"},{id:383,icon:"backspace-fill",name:"回退删除"},{id:242,icon:"delete",name:"删除垃圾桶"},{id:243,icon:"delete-fill",name:"删除垃圾桶"},{id:244,icon:"clear",name:"清除打扫"},{id:462,icon:"clear-fill",name:"清除打扫"},{id:447,icon:"add",name:"添加增加"},{id:449,icon:"reduce",name:"减少删除"},{id:446,icon:"add-circle",name:"添加增加"},{id:448,icon:"add-fill",name:"添加增加"},{id:452,icon:"reduce-circle",name:"减少删除"},{id:453,icon:"reduce-circle-fill",name:"减少删除"},{id:547,icon:"add-square",name:"添加增加"},{id:548,icon:"add-square-fill",name:"添加增加"},{id:451,icon:"reduce-square",name:"减少删除"},{id:450,icon:"reduce-square-fill",name:"减少删除"},{id:605,icon:"add-rhombus",name:"添加增加"},{id:604,icon:"add-rhombus-fill",name:"添加增加"},{id:676,icon:"reduce-rhombus",name:"减少删除"},{id:678,icon:"reduce-rhombus-fill",name:"减少删除"},{id:409,icon:"zoom-in",name:"放大"},{id:408,icon:"zoom-in-fill",name:"放大"},{id:406,icon:"zoom-out",name:"缩小"},{id:407,icon:"zoom-out-fill",name:"缩小"},{id:688,icon:"norm",name:"规则规范"},{id:689,icon:"norm-fill",name:"规则规范"},{id:402,icon:"more-circle",name:"更多"},{id:403,icon:"more-circle-fill",name:"更多"},{id:476,icon:"circle-more",name:"更多组"},{id:330,icon:"group-circle",name:"更多组"},{id:331,icon:"group-null",name:"更多组"},{id:401,icon:"more-horizontal",name:"更多组"},{id:400,icon:"more-vertical",name:"更多组"},{id:329,icon:"group-triangle",name:"更多组"},{id:328,icon:"group-square",name:"更多组"},{id:327,icon:"group-double",name:"更多组"},{id:396,icon:"align-left",name:"左对齐"},{id:394,icon:"align-center",name:"居中对齐"},{id:395,icon:"align-right",name:"右对齐"},{id:397,icon:"align",name:"两端对齐"}]},{id:8,name:"direction",title:"箭头方向",icons:[{id:442,icon:"up-circle",name:"向上往上上面"},{id:445,icon:"up-fill",name:"向上往上上面"},{id:439,icon:"right-circle",name:"向右往右右边"},{id:435,icon:"right-fill",name:"向右往右右边"},{id:430,icon:"down-circle",name:"向下往下下面"},{id:432,icon:"down-fill",name:"向下往下下面"},{id:426,icon:"left-circle",name:"向左往左左边"},{id:424,icon:"left-fill",name:"向左往左左边"},{id:441,icon:"up-arrow",name:"向上往上上面"},{id:436,icon:"right-arrow",name:"向右往右右边"},{id:429,icon:"down-arrow",name:"向下往下下面"},{id:427,icon:"left-arrow",name:"向左往左左边"},{id:440,icon:"up",name:"向上往上上面"},{id:434,icon:"right",name:"向右往右右边"},{id:428,icon:"down",name:"向下往下下面"},{id:422,icon:"left",name:"向左往左左边"},{id:444,icon:"up-double",name:"向上往上上面"},{id:437,icon:"right-double",name:"向右往右右边"},{id:431,icon:"down-double",name:"向下往下下面"},{id:425,icon:"left-double",name:"向左往左左边"},{id:443,icon:"up-triangle",name:"向上往上上面"},{id:438,icon:"right-triangle",name:"向右往右右边"},{id:433,icon:"down-triangle",name:"向下往下下面"},{id:423,icon:"left-triangle",name:"向左往左左边"},{id:645,icon:"on",name:"打开"},{id:646,icon:"off",name:"关上关闭"}]},{id:18,name:"media",title:"媒体音乐",icons:[{id:371,icon:"sing",name:"唱歌音乐"},{id:372,icon:"music-fill",name:"播放音乐"},{id:373,icon:"music-stop",name:"停止播放音乐"},{id:377,icon:"voice",name:"话筒语音"},{id:376,icon:"voice-fill",name:"话筒语音"},{id:375,icon:"video",name:"视频播放"},{id:374,icon:"video-fill",name:"视频播放"},{id:614,icon:"video-square",name:"视频播放"},{id:615,icon:"video-square-fill",name:"视频播放"},{id:613,icon:"play",name:"播放"},{id:380,icon:"play-fill",name:"播放"},{id:381,icon:"stop",name:"停止播放"},{id:687,icon:"previous-song",name:"上一首上一曲"},{id:691,icon:"previous-song-fill",name:"上一首上一曲"},{id:679,icon:"next-song",name:"下一首下一曲"},{id:685,icon:"next-song-fill",name:"下一首下一曲"},{id:378,icon:"previous-fill",name:"快退上一首"},{id:379,icon:"next-fill",name:"快进下一首"},{id:390,icon:"sound-add",name:"音量增加"},{id:391,icon:"sound-add-fill",name:"音量增加"},{id:389,icon:"sound-reduce",name:"音量减少"},{id:388,icon:"sound-reduce-fill",name:"音量减少"},{id:385,icon:"sound-close",name:"静音音量"},{id:384,icon:"sound-close-fill",name:"静音音量"},{id:387,icon:"sound",name:"声音音量"},{id:386,icon:"sound-fill",name:"声音音量"},{id:611,icon:"audio",name:"音频语音"}]},{id:5,name:"electronics",title:"设备程序",icons:[{id:161,icon:"phone",name:"手机"},{id:162,icon:"phone-fill",name:"手机"},{id:159,icon:"ipad",name:"平板"},{id:160,icon:"ipad-fill",name:"平板"},{id:44,icon:"headset",name:"耳机"},{id:677,icon:"headset-fill",name:"耳机"},{id:42,icon:"mouse",name:"鼠标"},{id:463,icon:"mouse-fill",name:"鼠标"},{id:46,icon:"notebook",name:"笔记本"},{id:43,icon:"notebook-fill",name:"笔记本"},{id:28,icon:"platform",name:"电脑显示屏数据"},{id:27,icon:"platform-fill",name:"电脑显示屏数据"},{id:157,icon:"computer",name:"电脑显示屏"},{id:158,icon:"computer-fill",name:"电脑显示屏"},{id:258,icon:"game",name:"游戏机"},{id:257,icon:"game-fill",name:"游戏机"},{id:367,icon:"camera",name:"相机拍照拍摄"},{id:368,icon:"camera-fill",name:"相机拍照拍摄"},{id:369,icon:"live-stream",name:"直播录像"},{id:370,icon:"live-stream-fill",name:"直播录像"},{id:544,icon:"monitor",name:"监控摄像头"},{id:464,icon:"monitor-fill",name:"监控摄像头"},{id:102,icon:"server",name:"服务器"},{id:33,icon:"server-fill",name:"服务器"},{id:163,icon:"tel",name:"电话"},{id:165,icon:"tel-circle",name:"电话"},{id:164,icon:"tel-circle-fill",name:"电话"},{id:248,icon:"keyboard",name:"键盘"},{id:247,icon:"keyboard-circle",name:"键盘"},{id:460,icon:"keyboard-circle-fill",name:"键盘"},{id:530,icon:"cursor",name:"鼠标箭头光标"},{id:531,icon:"cursor-fill",name:"鼠标箭头光标"},{id:474,icon:"program",name:"小程序"},{id:475,icon:"program-fill",name:"小程序"},{id:543,icon:"iot",name:"物联网"},{id:545,icon:"iot-fill",name:"物联网"},{id:156,icon:"code",name:"代码编程"},{id:492,icon:"bigbug",name:"漏洞虫子爬虫"},{id:15,icon:"bug",name:"漏洞"},{id:16,icon:"bug-fill",name:"漏洞"},{id:209,icon:"fork",name:"分支"},{id:211,icon:"master",name:"主分支"},{id:210,icon:"relation",name:"关系连接"},{id:250,icon:"wifi",name:"有wifi"},{id:249,icon:"wifi-no",name:"无wifi"},{id:52,icon:"bluetooth",name:"蓝牙"},{id:593,icon:"hotspot",name:"热点"},{id:47,icon:"battery-empty",name:"没电"},{id:48,icon:"battery-low",name:"低电量"},{id:49,icon:"battery-mid",name:"电量中"},{id:50,icon:"battery-high",name:"电量高"},{id:51,icon:"battery-full",name:"满电"}]},{id:6,name:"health",title:"运动健康",icons:[{id:170,icon:"sport-jog",name:"慢跑"},{id:171,icon:"sport-run",name:"跑步"},{id:172,icon:"sport-swim",name:"游泳"},{id:173,icon:"sport-cycle",name:"骑车"},{id:520,icon:"heartbeat",name:"心跳"},{id:107,icon:"medical",name:"医疗"},{id:99,icon:"biology",name:"生物"},{id:98,icon:"chemistry",name:"化学"},{id:166,icon:"watercup",name:"水杯"},{id:106,icon:"pharmacy",name:"药物"},{id:495,icon:"chain",name:"分子"},{id:494,icon:"dna",name:"基因"},{id:489,icon:"cell",name:"细胞"},{id:493,icon:"dinosaur",name:"恐龙"},{id:169,icon:"covid-19",name:"病毒"},{id:465,icon:"covid-19-fill",name:"病毒"}]},{id:7,name:"living",title:"生活居家",icons:[{id:455,icon:"bed",name:"床"},{id:454,icon:"bed-fill",name:"床"},{id:574,icon:"pillow",name:"枕头"},{id:576,icon:"pillow-fill",name:"枕头"},{id:542,icon:"sofa",name:"沙发"},{id:525,icon:"sofa-fill",name:"沙发"},{id:558,icon:"bathtub",name:"浴缸"},{id:557,icon:"bathtub-fill",name:"浴缸"},{id:575,icon:"plant",name:"植物"},{id:577,icon:"plant-fill",name:"植物"},{id:168,icon:"gloves",name:"手套"},{id:167,icon:"gloves-fill",name:"手套"},{id:594,icon:"router",name:"路由器"},{id:595,icon:"router-fill",name:"路由器"},{id:727,icon:"food",name:"食物美食"},{id:728,icon:"food-fill",name:"食物美食"},{id:719,icon:"eat",name:"吃饭食物美食"},{id:718,icon:"eat-fill",name:"吃饭食物美食"},{id:721,icon:"eat-west",name:"吃饭食物美食"},{id:722,icon:"eat-west-fill",name:"吃饭食物美食"},{id:717,icon:"eat-other",name:"吃饭食物美食"},{id:723,icon:"eat-other-fill",name:"吃饭食物美食"}]},{id:12,name:"travel",title:"交通出行",icons:[{id:35,icon:"errands",name:"步行"},{id:36,icon:"errands-fill",name:"步行"},{id:38,icon:"delivery",name:"骑车"},{id:37,icon:"delivery-fill",name:"骑车"},{id:263,icon:"taxi",name:"出租车"},{id:262,icon:"taxi-fill",name:"出租车"},{id:261,icon:"logistics",name:"物流"},{id:458,icon:"logistics-fill",name:"物流"},{id:364,icon:"location",name:"位置"},{id:363,icon:"location-fill",name:"位置"},{id:366,icon:"map",name:"地图地点"},{id:365,icon:"map-fill",name:"地图地点"},{id:118,icon:"signpost",name:"指示牌"},{id:119,icon:"signpost-fill",name:"指示牌"},{id:663,icon:"route",name:"路线"},{id:664,icon:"route-fill",name:"路线"},{id:583,icon:"suitcase",name:"行李箱"},{id:584,icon:"suitcase-fill",name:"行李箱"},{id:241,icon:"footprint",name:"足迹"},{id:674,icon:"footprint-fill",name:"足迹"},{id:178,icon:"balancecar",name:"平衡车"},{id:179,icon:"electromobile",name:"小电瓶"},{id:177,icon:"bus",name:"公交车"},{id:176,icon:"steamship",name:"轮船"},{id:175,icon:"train",name:"train"},{id:174,icon:"airplane",name:"飞机"},{id:743,icon:"departures",name:"飞机起飞"},{id:739,icon:"arrivals",name:"飞机降落"},{id:658,icon:"global",name:"地球"},{id:108,icon:"wheelchair",name:"轮椅残疾人"},{id:582,icon:"escalator",name:"扶梯电梯"},{id:468,icon:"restroom-female",name:"女卫生间女洗手间女厕所"},{id:469,icon:"restroom-male",name:"男卫生间女洗手间男厕所"}]},{id:22,name:"gesture",title:"手势动作",icons:[{id:566,icon:"gesture-one",name:"手势一"},{id:569,icon:"gesture-two",name:"手势二"},{id:568,icon:"gesture-three",name:"手势三"},{id:567,icon:"gesture-four",name:"手势四"},{id:565,icon:"gesture-five",name:"手势五"},{id:564,icon:"gesture-dropdown",name:"手势下滑下拉"},{id:326,icon:"open",name:"打开展开"}]},{id:23,name:"data",title:"数据图表",icons:[{id:299,icon:"statistics",name:"数据统计"},{id:300,icon:"statistics-fill",name:"数据统计"},{id:297,icon:"data",name:"数据分享"},{id:298,icon:"data-fill",name:"数据分享"}]},{id:20,name:"menu",title:"菜单分类",icons:[{id:132,icon:"home",name:"首页"},{id:133,icon:"home-fill",name:"首页"},{id:134,icon:"home-vertical",name:"首页"},{id:135,icon:"home-vertical-fill",name:"首页"},{id:136,icon:"home-smile",name:"首页"},{id:137,icon:"home-smile-fill",name:"首页"},{id:570,icon:"home-love",name:"首页"},{id:571,icon:"home-love-fill",name:"首页"},{id:486,icon:"home-in",name:"首页"},{id:485,icon:"home-in-fill",name:"首页"},{id:487,icon:"home-loading",name:"首页"},{id:488,icon:"home-loading-fill",name:"首页"},{id:516,icon:"home-totop",name:"首页"},{id:515,icon:"home-totop-fill",name:"首页"},{id:630,icon:"home-leaf",name:"首页"},{id:631,icon:"home-leaf-fill",name:"首页"},{id:138,icon:"home-capsule",name:"首页"},{id:139,icon:"home-capsule-fill",name:"首页"},{id:100,icon:"level",name:"等级列表"},{id:20,icon:"level-fill",name:"等级列表"},{id:101,icon:"deploy",name:"分类调试"},{id:23,icon:"deploy-fill",name:"分类调试"},{id:512,icon:"block",name:"分类菜单"},{id:511,icon:"block-fill",name:"分类菜单"},{id:150,icon:"menu-circle",name:"分类菜单"},{id:19,icon:"menu-circle-fill",name:"分类菜单"},{id:680,icon:"menu-grille",name:"分类菜单"},{id:684,icon:"menu-grille-fill",name:"分类菜单"},{id:523,icon:"menu-match",name:"分类菜单"},{id:524,icon:"menu-match-fill",name:"分类菜单"},{id:144,icon:"assort",name:"分类菜单"},{id:143,icon:"assort-fill",name:"分类菜单"},{id:149,icon:"menu",name:"分类菜单"},{id:21,icon:"menu-fill",name:"分类菜单"},{id:145,icon:"menu-list",name:"分类菜单"},{id:34,icon:"menu-list-fill",name:"分类菜单"},{id:146,icon:"menu-sorts",name:"分类菜单"},{id:32,icon:"menu-sorts-fill",name:"分类菜单"},{id:147,icon:"menu-sort",name:"分类菜单"},{id:30,icon:"menu-sort-fill",name:"分类菜单"},{id:148,icon:"menu-more",name:"分类菜单"},{id:24,icon:"menu-more-fill",name:"分类菜单"},{id:457,icon:"menu-flex",name:"分类菜单"},{id:456,icon:"menu-flex-fill",name:"分类菜单"},{id:513,icon:"menu-classify",name:"分类菜单"},{id:514,icon:"menu-classify-fill",name:"分类菜单"},{id:507,icon:"menu-alone",name:"分类菜单"},{id:508,icon:"menu-alone-fill",name:"分类菜单"},{id:596,icon:"menu-rhombus",name:"分类菜单"},{id:597,icon:"menu-rhombus-fill",name:"分类菜单"},{id:151,icon:"search-menu",name:"菜单搜索"},{id:25,icon:"search-menu-fill",name:"菜单搜索"},{id:152,icon:"search-list",name:"搜索列表"},{id:29,icon:"search-list-fill",name:"搜索列表"},{id:599,icon:"plane",name:"菜单飞机"},{id:598,icon:"plane-fill",name:"菜单飞机"},{id:659,icon:"reload-home",name:"首页重载"},{id:661,icon:"reload-home-fill",name:"首页重载"},{id:660,icon:"reload-planet",name:"星球重载"},{id:662,icon:"reload-planet-fill",name:"星球重载"},{id:635,icon:"meteor",name:"流星"},{id:634,icon:"meteor-fill",name:"流星"},{id:92,icon:"rocket",name:"火箭"},{id:9,icon:"rocket-fill",name:"火箭"},{id:10,icon:"totop",name:"火箭返回顶部"},{id:11,icon:"totop-fill",name:"火箭返回顶部"},{id:91,icon:"job",name:"工作领带"},{id:8,icon:"job-fill",name:"工作领带"},{id:53,icon:"science",name:"科学"},{id:22,icon:"science-fill",name:"科学"},{id:126,icon:"count",name:"运算计算"},{id:127,icon:"count-fill",name:"运算计算"},{id:696,icon:"assign",name:"分配指派"},{id:698,icon:"assign-fill",name:"分配指派"},{id:124,icon:"honor",name:"荣誉证书"},{id:125,icon:"honor-fill",name:"荣誉证书"},{id:128,icon:"discover-planet",name:"行星发现"},{id:129,icon:"discover-planet-fill",name:"行星发现"},{id:130,icon:"discover",name:"发现"},{id:131,icon:"discover-fill",name:"发现"},{id:535,icon:"module",name:"模块"},{id:539,icon:"module-fill",name:"模块"},{id:344,icon:"caring",name:"关心"},{id:345,icon:"caring-fill",name:"关心"},{id:682,icon:"ai",name:"人工智能"},{id:681,icon:"ai-fill",name:"人工智能"},{id:505,icon:"ghost",name:"幽灵"},{id:459,icon:"ghost-fill",name:"幽灵"},{id:110,icon:"my",name:"我的个人中心"},{id:111,icon:"my-fill",name:"我的个人中心"},{id:671,icon:"my-lack",name:"我的个人中心"},{id:670,icon:"my-lack-fill",name:"我的个人中心"},{id:647,icon:"my-circle",name:"我的个人中心"},{id:648,icon:"my-circle-fill",name:"我的个人中心"},{id:666,icon:"my-simple",name:"我的个人中心"},{id:665,icon:"my-simple-fill",name:"我的个人中心"},{id:707,icon:"my-formal",name:"我的个人中心商务"},{id:706,icon:"my-formal-fill",name:"我的个人中心商务"},{id:704,icon:"my-job",name:"我的个人中心商务"},{id:708,icon:"my-job-fill",name:"我的个人中心商务"}]},{id:14,name:"system",title:"管理系统",icons:[{id:702,icon:"fold",name:"收起折叠"},{id:714,icon:"unfold",name:"展开展示"},{id:534,icon:"dashboard",name:"仪表盘"},{id:540,icon:"dashboard-fill",name:"仪表盘"},{id:229,icon:"team",name:"员工团队"},{id:230,icon:"team-fill",name:"员工团队"},{id:104,icon:"organizatio",name:"组织架构"},{id:26,icon:"organizatio-fill",name:"组织架构"},{id:105,icon:"company",name:"公司企业"},{id:17,icon:"company-fill",name:"公司企业"},{id:264,icon:"flag",name:"目标旗帜"},{id:265,icon:"flag-fill",name:"目标旗帜"},{id:122,icon:"hardware",name:"电子硬件"},{id:123,icon:"hardware-fill",name:"电子硬件"},{id:112,icon:"trust",name:"合作伙伴"},{id:113,icon:"trust-fill",name:"合作伙伴"},{id:245,icon:"set",name:"系统设置"},{id:246,icon:"set-fill",name:"系统设置"},{id:14,icon:"expand",name:"子菜单"}]},{id:2,name:"brand",title:"知名品牌",icons:[{id:1,icon:"nintendo-switch",name:"任天堂"},{id:216,icon:"logo-tuniao",name:"图鸟"},{id:4,icon:"huawei",name:"华为"},{id:5,icon:"iphone",name:"苹果"},{id:222,icon:"alipay",name:"支付宝"},{id:218,icon:"taobao",name:"淘宝"},{id:223,icon:"qq",name:"企鹅"},{id:221,icon:"dingtalk",name:"钉钉"},{id:217,icon:"sina",name:"新浪"},{id:6,icon:"tiktok",name:"抖音"},{id:41,icon:"logo-shangpu",name:"上铺"},{id:692,icon:"seafox",name:"海狐"},{id:580,icon:"windows",name:"微软"},{id:732,icon:"vscode",name:"代码编辑器"},{id:219,icon:"gitee",name:"码云"},{id:220,icon:"github",name:"章鱼猫"},{id:214,icon:"linkedin",name:"领英"},{id:215,icon:"twitter",name:"推特"},{id:212,icon:"facebook",name:"脸书"},{id:213,icon:"google",name:"谷歌"}]},{id:24,name:"idea",title:"创意logo",icons:[{id:40,icon:"panda",name:"熊猫"},{id:695,icon:"fish",name:"鱼"},{id:484,icon:"dragon",name:"龙"},{id:510,icon:"rabbit",name:"兔子"},{id:478,icon:"mammoth",name:"猛犸象"},{id:483,icon:"whale",name:"蓝鲸"},{id:477,icon:"windmill",name:"风车"},{id:509,icon:"tree",name:"树"},{id:491,icon:"orange",name:"橙子"},{id:479,icon:"alien",name:"外星人"}]},{id:27,name:"symbol",title:"表情符号",icons:[{id:235,icon:"emoji-good",name:"微笑好评"},{id:236,icon:"emoji-good-fill",name:"微笑好评"},{id:233,icon:"emoji-general",name:"平静中评"},{id:234,icon:"emoji-general-fill",name:"平静中评"},{id:231,icon:"emoji-sad",name:"悲伤差评"},{id:232,icon:"emoji-sad-fill",name:"悲伤差评"},{id:694,icon:"skull",name:"骨头骷髅"},{id:693,icon:"skull-fill",name:"骨头骷髅"},{id:536,icon:"at-sign",name:"圈人"},{id:537,icon:"copyright",name:"版权"},{id:579,icon:"trademark",name:"商标"},{id:600,icon:"spiral",name:"螺旋"},{id:737,icon:"prohibit",name:"禁止禁用"},{id:141,icon:"focus",name:"瞄准"},{id:742,icon:"parking",name:"停车停止"},{id:618,icon:"percent",name:"百分比"},{id:617,icon:"percent-fill",name:"百分比"},{id:699,icon:"equal",name:"等于相等"},{id:701,icon:"equal-fill",name:"等于相等"},{id:348,icon:"topic",name:"指令话题"},{id:546,icon:"cute",name:"可爱"}]},{id:17,name:"geometry",title:"抽象几何",icons:[{id:589,icon:"pyramid",name:"锥体金字塔"},{id:504,icon:"molecule",name:"分子"},{id:67,icon:"constellation",name:"星座星系"},{id:620,icon:"activity",name:"活动"},{id:103,icon:"cube",name:"立方体"},{id:31,icon:"cube-fill",name:"立方体"},{id:729,icon:"honeycomb",name:"honeycomb"},{id:731,icon:"honeycomb-fill",name:"honeycomb-fill"},{id:668,icon:"around",name:"围绕"},{id:667,icon:"around-fill",name:"围绕"},{id:656,icon:"unite",name:"团结"},{id:657,icon:"unite-fill",name:"团结"}]},{id:28,name:"culture",title:"文化元素",icons:[{id:481,icon:"knot",name:"中国结绳结"},{id:473,icon:"ninja",name:"忍者"},{id:601,icon:"lotus",name:"莲花"},{id:517,icon:"petal",name:"花瓣"},{id:480,icon:"taichi",name:"太极"},{id:602,icon:"koi",name:"锦鲤"},{id:603,icon:"koi-fill",name:"锦鲤"},{id:519,icon:"clover",name:"幸运草"},{id:518,icon:"clover-fill",name:"幸运草"},{id:690,icon:"piggy-bank",name:"存钱罐猪"},{id:686,icon:"piggy-bank-fill",name:"存钱罐猪"},{id:637,icon:"dice-one",name:"色子一"},{id:641,icon:"dice-two",name:"色子二"},{id:638,icon:"dice-three",name:"色子三"},{id:640,icon:"dice-four",name:"色子四"},{id:636,icon:"dice-five",name:"色子五"},{id:639,icon:"dice-six",name:"色子六"}]},{id:4,name:"zodiac",title:"生肖星座",icons:[{id:191,icon:"zodiac-shu",name:"生肖鼠"},{id:190,icon:"zodiac-niu",name:"生肖牛"},{id:189,icon:"zodiac-hu",name:"生肖虎"},{id:188,icon:"zodiac-tu",name:"生肖兔"},{id:187,icon:"zodiac-long",name:"生肖龙"},{id:186,icon:"zodiac-she",name:"生肖蛇"},{id:185,icon:"zodiac-ma",name:"生肖马"},{id:184,icon:"zodiac-yang",name:"生肖羊"},{id:183,icon:"zodiac-hou",name:"生肖猴"},{id:182,icon:"zodiac-ji",name:"生肖鸡"},{id:181,icon:"zodiac-gou",name:"生肖狗"},{id:180,icon:"zodiac-zhu",name:"生肖猪"},{id:55,icon:"con-aquarius",name:"星座水瓶座"},{id:56,icon:"con-pisces",name:"星座双鱼座"},{id:57,icon:"con-aries",name:"星座白羊座"},{id:58,icon:"con-taurus",name:"星座金牛座"},{id:59,icon:"con-gemini",name:"星座双子座"},{id:60,icon:"con-cancer",name:"星座巨蟹座"},{id:61,icon:"con-leo",name:"星座狮子座"},{id:62,icon:"con-virgo",name:"星座处女座"},{id:63,icon:"con-libra",name:"星座天秤座"},{id:64,icon:"con-scorpio",name:"星座天蝎座"},{id:65,icon:"con-sagittarius",name:"星座射手座"},{id:66,icon:"con-apricorn",name:"星座摩羯座"}]},{id:3,name:"weather",title:"气象天气",icons:[{id:655,icon:"umbrella",name:"雨伞"},{id:675,icon:"umbrella-fill",name:"雨伞"},{id:114,icon:"moon",name:"月亮黑夜"},{id:115,icon:"moon-fill",name:"月亮黑夜"},{id:339,icon:"light",name:"闪电雷电"},{id:338,icon:"light-fill",name:"闪电雷电"},{id:482,icon:"snowflake",name:"雪花"},{id:733,icon:"starry",name:"繁星流星"},{id:69,icon:"wea-cloud",name:"云"},{id:68,icon:"wea-cloud-more",name:"多云"},{id:70,icon:"wea-cloud-sun",name:"多云转晴"},{id:71,icon:"wea-rain",name:"小雨"},{id:72,icon:"wea-rain-middle",name:"中雨"},{id:73,icon:"wea-rain-heavy",name:"大雨"},{id:74,icon:"wea-snow",name:"下雪"},{id:75,icon:"wea-wind",name:"微风吹风"},{id:76,icon:"wea-sun",name:"太阳晴天"},{id:651,icon:"sunrise",name:"日出"},{id:652,icon:"sunset",name:"日落"},{id:649,icon:"temperature-f",name:"华氏度温度"},{id:650,icon:"temperature-c",name:"摄氏度温度"}]},{id:13,name:"blank",title:"空白缺省",icons:[{id:84,icon:"empty-search",name:"搜索空白缺省"},{id:90,icon:"empty-page",name:"内容空白缺省"},{id:79,icon:"empty-cart",name:"购物车空白缺省"},{id:88,icon:"empty-address",name:"地址空白缺省"},{id:89,icon:"empty-permission",name:"权限空白缺省"},{id:80,icon:"empty-history",name:"记录空白缺省"},{id:78,icon:"empty-message",name:"消息空白缺省"},{id:86,icon:"empty-comment",name:"评论空白缺省"},{id:77,icon:"empty-data",name:"数据空白缺省"},{id:82,icon:"empty-list",name:"列表空白缺省"},{id:85,icon:"empty-order",name:"订单空白缺省"},{id:87,icon:"empty-coupon",name:"优惠券空白缺省"},{id:81,icon:"empty-favor",name:"收藏空白缺省"},{id:83,icon:"empty-network",name:"网络空白缺省断网"}]},{id:1,name:"tuniao",title:"其他类别",icons:[{id:54,icon:"clip",name:"爱心碰撞"},{id:501,icon:"book",name:"书本教育学习"},{id:497,icon:"education",name:"教育毕业大学"},{id:503,icon:"maths",name:"数学几何"},{id:498,icon:"english",name:"英语翻译"},{id:140,icon:"cross-fill",name:"交叉"},{id:499,icon:"seal",name:"公章盖章印章"},{id:532,icon:"check",name:"勾选支付"},{id:683,icon:"cargoship",name:"货轮"},{id:3,icon:"tabs-smile",name:"微笑选中"}]}]}},f49e:function(i,n,e){"use strict";var o=e("d8c0"),a=e.n(o);a.a}}]);