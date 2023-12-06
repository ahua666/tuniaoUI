[![图鸟UI](https://resource.tuniaokj.com/images/uniapp_market/8.jpg "图鸟UI")](https://resource.tuniaokj.com/images/uniapp_market/8.jpg "图鸟UI")

<p align="center">
    <a href="https://gitee.com/TSpecific/tuniao-ui/stargazers" target="_blank">
    	<img src="https://svg.hamm.cn/gitee.svg?type=star&user=TSpecific&project=tuniao-ui"/>
    </a>
    <a href="https://gitee.com/TSpecific/tuniao-ui/members" target="_blank">
    	<img src="https://svg.hamm.cn/gitee.svg?type=fork&user=TSpecific&project=tuniao-ui"/>
    </a>
    <img src="https://svg.hamm.cn/badge.svg?key=Platform&value=uni-app"/>
</p>


## **说明**

**`图鸟UI vue2`**，是基于uni-app进行开发的UI框架，提供丰富的组件进行快速开发，支持`微信小程序`、`APP`和`H5`，包含常用表单组件、信息展示组件等，并提供丰富的酷炫页面模板。

开源版本中所使用到的图片均做了`防盗链`，只能在调试中使用，不保证在生产环境中可以使用。
图片资源已上传到 [图鸟社区](https://www.yuque.com/tuniao/)。

## 图鸟UI特点

-   包含基础常用的布局元素，flex、grid、浮动
-   完整一体的配色体系，包含4种色深模式，同时包含4套渐变配色
-   700+风格统一的图标icon，60+精选组件，让开发者可以快速进行开发
-   酷炫常用的页面模板，更有让你眼前一亮的界面效果
-   图片素材语雀便捷下载，图鸟生态共同成长
-   使用文档详尽说明，让你一文读懂图鸟UI

## 官方链接

[图鸟UI 开源项目](https://ext.dcloud.net.cn/publisher?id=356088)

[使用文档 vue2](https://vue2.tuniaokj.com/)

## 快速上手

#### 1.复制文件到项目的根目录

- ##### 必要文件夹

    - 复制tuniao-ui文件夹
    - 复制store文件夹

- ##### 如果使用了模板页面则需要复制以下文件夹

    - 复制libs文件夹
    - 复制static文件夹



#### 2.引入TuniaoUI主JS库

在项目根目录中的`main.js`中，引入并使用TuniaoUI的JS库，注意这两行配置代码要放在import Vue之后。

```javascript
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)
```



#### 3.引入TuniaoUI提供的vuex

在项目根目录的`main.js`中引入store

```js
// 引入store
import store from './store'
...
const app = new Vue({
  store,
  ...App
})
```

在项目根目录中的`main.js`中，引入并使用TuniaoUI的vuex，注意这两行配置代码要放在import Vue之后。

```js
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)
```



#### 4.引入TuniaoUI的全局SCSS主题文件

在项目根目录的`uni.scss`中引入此文件。

```scss
@import 'tuniao-ui/theme.scss';
```



#### 5.引入TuniaoUI基础样式和图标文件

::: danger 注意
在`App.vue`中`style标签`首行的位置引入，注意给style标签加入lang="scss"属性
:::

```scss
<style lang="scss">
  /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
  @import './tuniao-ui/index.scss';
  @import './tuniao-ui/iconfont.css';
</style>
```



#### 6.配置easycom组件模式

此配置需要在根目录的`pages.json`中进行。

::: tip 温馨提示

1. uni-app为了调试性能的原因，修改`easycom`规则不会实时生效，配置完后，您需要重启HBuilderX或者重新编译项目才能正常使用TuniaoUI的功能。
2. 请确保您的`pages.json`中只有一个`easycom`字段，否则请自行合并多个引入规则。
   :::

```
// pages.json
{
  "easycom": {
  	"^tn-(.*)": "@/tuniao-ui/components/tn-$1/tn-$1.vue"
  },
  "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      // ......
    }
  ]
  // ......
}
```



## 图鸟UI开源项目（图鸟UI、图鸟vue3、模板1234 已上传；模板5678、图表暂未上传）

[![开源项目](https://resource.tuniaokj.com/images/uniapp_market/qr-code-all1.jpg "开源项目")](https://resource.tuniaokj.com/images/uniapp_market/qr-code-all1.jpg "开源项目")



## 图鸟UI-vue3开源项目（[Github下载](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)，[Dcloud插件市场下载](https://ext.dcloud.net.cn/plugin?id=13530)）

[![开源项目](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg "开源项目")](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg "开源项目")

[![图鸟vue3](https://resource.tuniaokj.com/images/vue3/market/vue3-code-min.jpg)](https://resource.tuniaokj.com/images/vue3/market/vue3-code-min.jpg)

#### **(2023年7月1日上线，图鸟UI vue3正式版，下载链接请看下方)**

[图鸟UI vue3 Dcloud下载地址-uni_modules](https://ext.dcloud.net.cn/plugin?id=13530)

[图鸟UI vue3 Github下载地址](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

[图鸟UI vue3 Github演示代码](https://github.com/tuniaoTech/tuniaoui-uniapp-v3-demo)

[图鸟vue3使用文档](https://vue3.tuniaokj.com/)



## 联系作者

微信 tnkewo

微信群内气氛挺不错的，应该或许可能大概，算是为数不多的，专搞技术的前端群，偶尔聊天摸鱼

[![作者微信 tnkewo](https://resource.tuniaokj.com/images/uniapp_market/tn_author_qrcode.jpg)](https://resource.tuniaokj.com/images/uniapp_market/tn_author_qrcode.jpg)



## 版权信息

`TuniaoUI开源版`遵循`Apache`协议，意味着您无需支付任何费用，也无需授权，即可将TuniaoUI开源版应用到您的产品中，但是需要保留TuniaoUI的信息。
