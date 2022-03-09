<p align="center">
	<img alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/top.jpg" width="60%" />
</p>


<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">Tuniao UI</h3>
<h3 align="center">提供丰富组件和炫酷页面的UI框架</h3>

<p align="center">
    <a href="https://gitee.com/TSpecific/tuniao-ui/stargazers" target="_blank">
    	<img src="https://svg.hamm.cn/gitee.svg?type=star&user=TSpecific&project=tuniao-ui"/>
    </a>
    <a href="https://gitee.com/TSpecific/tuniao-ui/members" target="_blank">
    	<img src="https://svg.hamm.cn/gitee.svg?type=fork&user=TSpecific&project=tuniao-ui"/>
    </a>
    <img src="https://svg.hamm.cn/badge.svg?key=Platform&value=uni-app"/>
</p>



## 说明

**图鸟UI**，是基于uni-app进行开发的UI框架，提供丰富的组件进行快速开发，已经支持`H5`和`微信小程序`，包含常用表单组件、信息展示组件等，并提供`丰富的酷炫页面模板`。



### 开源版本中所使用到的图片均做了防盗链，只能在调试中使用，不保证在生产环境中可以使用。

### 图片资源以上传到[图鸟社区](https://www.yuque.com/tuniao)。



## 特点

- 包含基础常用的布局元素，flex、grid、浮动
- 完整一体的配色体系，包含4种色深模式，同时包含4套渐变配色
- 300+风格统一的图标icon，后续可继续增加
- 30+精选组件，让开发者可以快速进行开发
- 酷炫常用的页面模板，更有让你眼前一亮的界面效果
- 图片素材语雀便捷下载，图鸟社区共同成长
- 使用文档详尽说明，让你一文读懂图鸟UI



## 链接

- [图鸟社区](https://www.yuque.com/tuniao)
- [使用手册](https://tuniaoui.tuniaokj.com/components/introduce.html)



## 安装

下载地址 ------> [图鸟UI - DCloud 插件市场](https://ext.dcloud.net.cn/plugin?id=7088)



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
let vuexStore = require('@/store/$t.mixin.js')
Vue.mixin(vuexStore)
```



#### 4.引入TuniaoUI的全局SCSS主题文件

在项目根目录的`uni.scss`中引入此文件。

```scss
@import 'tuniao-ui/theme.scss'
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

此配置需要在根目录的`page.json`中进行。

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



## UI截图

<p>
    <img style="margin-top: 10px; margin-left: 10px;" alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/1.jpg" width="300" />
    <img style="margin-top: 10px; margin-left: 10px;" alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/2.jpg" width="300" />
    <img style="margin-top: 10px; margin-left: 10px;" alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/3.jpg" width="300" />
    <img style="margin-top: 10px; margin-left: 10px;" alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/4.jpg" width="300" />
    <img style="margin-top: 10px; margin-left: 10px;" alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/5.jpg" width="300" />
    <img style="margin-top: 10px; margin-left: 10px;" alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/6.jpg" width="300" />
</p>



## 联系作者

<p>
    <img alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/bottom.jpg" width="380" />
</p>


### 微信群聊二维码

<p>
    <img alt="图鸟UI" src="https://tnuiimage.tnkjapp.com/gitee_introduce_file/group_code.jpg" width="380" />
</p>




## 版权信息

`TuniaoUI开源版`遵循`Apache`协议，意味着您无需支付任何费用，也无需授权，即可将TuniaoUI开源版应用到您的产品中，但是需要保留TuniaoUI的信息。
