<template>
  <view class="components-form">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>Form表单</tn-nav-bar>
    
    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" :fullWindowsScroll="true" @click="click">
        <tn-form :model="model" ref="form" :errorType="errorType" :labelPosition="labelPosition" :labelWidth="labelWidth" :labelAlign="labelAlign">
          <tn-form-item label="姓名" prop="name" leftIcon="identity" :required="true" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.name" type="text" placeholder="请输入姓名" :border="border"></tn-input>
          </tn-form-item>
          <tn-form-item label="性别" prop="sex" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.sex" type="select" placeholder="请选择性别" :border="border" :selectOpen="actionSheetShow" @click="actionSheetShow = true"></tn-input>
          </tn-form-item>
          <tn-form-item label="手机号码" prop="phone" rightIcon="phone" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.phone" type="number" placeholder="请输入手机号码" :border="border"></tn-input>
          </tn-form-item>
          <tn-form-item label="介绍" prop="desc" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.desc" type="textarea" placeholder="请输入介绍" :border="border" inputAlign="center"></tn-input>
          </tn-form-item>
          <tn-form-item label="密码" prop="password" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.password" type="password" placeholder="请输入密码" :border="border" :passwordIcon="true"></tn-input>
          </tn-form-item>
          <tn-form-item label="确认密码" prop="rePassword" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.rePassword" type="password" placeholder="请再次输入密码" :border="border"></tn-input>
          </tn-form-item>
          <tn-form-item label="水果" prop="fruit" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-checkbox-group v-model="model.fruit" :width="checkboxWidth" :wrap="checkboxWrap" @change="checkboxGroupChange">
              <tn-checkbox v-for="(item, index) in checkboxList" :key="index" v-model="item.check" :name="item.name" :disabled="item.disabled">{{ item.name }}</tn-checkbox>
            </tn-checkbox-group>
          </tn-form-item>
          <tn-form-item label="支付方式" prop="payType" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-radio-group v-model="model.payType" :width="radioWidth" :wrap="radioWrap" @change="radioGroupChange">
              <tn-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">{{ item.name }}</tn-radio>
            </tn-radio-group>
          </tn-form-item>
          <tn-form-item label="所在地区" prop="region" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.region" type="select" placeholder="请选择所在地区" :border="border" :selectOpen="pickerShow" @click="pickerShow = true"></tn-input>
          </tn-form-item>
          <tn-form-item label="商品类型" prop="goodsType" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.goodsType" type="select" placeholder="请选择商品类型" :border="border" :selectOpen="selectShow" @click="selectShow = true"></tn-input>
          </tn-form-item>
          <tn-form-item label="验证码" prop="code" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-input v-model="model.code" type="text" placeholder="请输入验证码" :border="border"></tn-input>
            <tn-button slot="right" size="sm" backgroundColor="tn-bg-green" fontColor="tn-color-white" @click="getCode">{{ codeTips }}</tn-button>
          </tn-form-item>
          <tn-form-item label="记住密码" prop="remember" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-switch v-model="model.remember" slot="right"></tn-switch>
          </tn-form-item>
          <tn-form-item label="上传图片" prop="photo" :labelPosition="labelPosition" :labelAlign="labelAlign">
            <tn-image-upload :fileList="model.photo" @on-list-change="imageUploadChange"></tn-image-upload>
          </tn-form-item>
        </tn-form>
        <view class="agreement">
          <tn-checkbox v-model="model.agreement" @change="agreementCheckChange"></tn-checkbox>
          <view class="agreement-text">勾选同意当前协议</view>
        </view>
        <tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" width="100%" @click="submit">提交</tn-button>
      </dynamic-demo-template>
      
      <!-- 性别选项 -->
      <tn-action-sheet
        v-model="actionSheetShow"
        :list="actionSheetList"
        @click="actionSheetClick"
      ></tn-action-sheet>
      <!-- 地区picker -->
      <tn-picker
        v-model="pickerShow"
        mode="region"
        @confirm="regionPickerConfirm"
      ></tn-picker>
      <!-- 商品类型select -->
      <tn-select
        v-model="selectShow"
        mode="single"
        :list="selectList"
        @confirm="goodsTypeSelectConfirm"
      ></tn-select>
      <!-- 验证码倒计时 -->
      <tn-verification-code
        ref="code"
        :seconds="60"
        @change="codeChange"
      ></tn-verification-code>
      
    </view>
    
  </view>
</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'componentsForm',
    components: {dynamicDemoTemplate},
    data() {
      return {
        errorType: ['message','border-bottom','toast'],
        labelPosition: 'left',
        labelAlign: 'right',
        border: false,
        actionSheetShow: false,
        labelWidth: 140,
        checkboxWidth: 'auto',
        checkboxWrap: false,
        radioWidth: 'auto',
        radioWrap: false,
        pickerShow: false,
        selectShow: false,
        codeTips: '获取验证码',
        checkboxList:[
          {
            name: '苹果',
            disabled: false
          },
          {
            name: '橘子',
            disabled: false
          },
          {
            name: '香蕉',
            disabled: false
          },
          {
            name: '榴莲',
            disabled: true
          }
        ],
        radioList:[
          {
            name: '微信',
            disabled: false
          },
          {
            name: '支付宝',
            disabled: true
          },
          {
            name: '云闪付',
            disabled: false
          }
        ],
        actionSheetList:[
          {
            text: '男'
          },
          {
            text: '女'
          },
          {
            text: '保密'
          }
        ],
        selectList: [
          {
            label: '手机',
            value: 1101
          },
          {
            label: '笔记本',
            value: 1102
          },
          {
            label: '手表',
            value: 1103
          }
        ],
        model: {
          name: '',
          sex: '',
          phone: '',
          desc: '',
          password: '',
          rePassword: '',
          fruit: ['橘子'],
          payType: '微信',
          region: '',
          goodsType: '',
          code: '',
          remember: false,
          photo: [],
          agreement: false
        },
        rules: {
          name: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
            	min: 3,
            	max: 5,
            	message: '姓名长度在3到5个字符',
            	trigger: ['change','blur'],
            },
            {
            	// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
            	validator: (rule, value, callback) => {
            		return this.$tn.test.chinese(value);
            	},
            	message: '姓名必须为中文',
            	// 触发器可以同时用blur和change，二者之间用英文逗号隔开
            	trigger: ['change','blur'],
            },
            {
            	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
            	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
            	asyncValidator: (rule, value, callback) => {
                if (value === '图鸟') {
                  callback(new Error('姓名重复'));
                } else {
                  // 没有错误，也要执行callback()回调
                  callback();
                }
            	},
              trigger: ['blur'],
            }
          ],
          sex: [
          	{
          		required: true,
          		message: '请选择性别',
          		trigger: 'change'
          	}
          ],
          phone: [
          	{
          		required: true,
          		message: '请输入手机号码',
          		trigger: 'change'
          	}
          ],
          desc: [
            {
              min: 5,
              message: '简介不能少于5个字',
              trigger: 'change'
            },
            {
              // 正则表达式验证演示
              pattern: /^[\u4e00-\u9fa5]+$/gi,
              message: '简介只能包含中文',
              trigger: 'change'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: ['change','blur']
            },
            {
              pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
              message: '需同时含有字母和数字，长度在6-12之间',
              trigger: ['change','blur'] 
            }
          ],
          rePassword: [
            {
              required: true,
              message: '请再次输入密码',
              trigger: ['change','blur']
            },
            {
              validator: (rule, value, callback) => {
              	return value === this.model.password;
              },
              message: '两次输入的密码不相等',
              trigger: ['change','blur'],
            }
          ],
          fruit: [
            {
              required: true,
              message: '请选择水果',
              trigger: 'change',
              type: 'array'
            }
          ],
          payType: [
            {
              required: true,
              message: '请选择支付方式',
              trigger: 'change'
            }
          ],
          region: [
            {
              required: true,
              message: '所在地区不能为空',
              trigger: 'change'
            }
          ],
          goodsType: [
            {
              required: true,
              message: '商品类型不能为空',
              trigger: 'change'
            }
          ],
          code: [
            {
              required: true,
              message: '验证码不能为空',
              trigger: 'change'
            }
          ],
          remember: [
            {
              required: true,
              message: '记住密码不能为空',
              trigger: 'change'
            }
          ],
          photo: [
            {
              required: true,
              message: '请选择图片',
              trigger: 'change',
              type: 'array'
            }
          ],
        },
        
        tips: ['无需依赖额外的样式文件','使用tn-toast组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: 'label显示位置',
                optional: ['左边','上边'],
                methods: 'labelPositionChange'
              },
              {
                title: 'label对齐方式',
                optional: ['左对齐','右对齐','居中'],
                methods: 'labelAlignChange',
                current: 1
              },
              {
                title: '边框显示',
                optional: ['显示','隐藏'],
                methods: 'borderChange',
                current: 1
              },
              {
                title: '可选项排列方式',
                optional: ['默认','宽度的50%','换行'],
                methods: 'checkRadioStyleChange'
              },
              {
                title: '错误提示方式',
                optional: ['message','toast','下划线','输入框'],
                methods: 'errorTypeChange'
              }
            ]
          }
        ]
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换label显示位置
      labelPositionChange(event) {
        switch (event.index) {
          case 0:
            this.labelPosition = 'left'
            break
          case 1:
            this.labelPosition = 'top'
            break
        }
      },
      // 切换label对其方式
      labelAlignChange(event) {
        switch (event.index) {
          case 0:
            this.labelAlign = 'left'
            break
          case 1:
            this.labelAlign = 'right'
            break
          case 2:
            this.labelAlign = 'center'
            break
        }
      },
      // 切换边框显示
      borderChange(event) {
        this.border = event.index === 0 ? true : false
      },
      // 切换可选项样式
      checkRadioStyleChange(event) {
        switch (event.index) {
          case 0:
            this.checkboxWidth = 'auto'
            this.checkboxWrap = false
            this.radioWidth = 'auto'
            this.radioWrap = false
            break
          case 1:
            this.checkboxWidth = '50%'
            this.checkboxWrap = false
            this.radioWidth = '50%'
            this.radioWrap = false
            break
          case 2:
            this.checkboxWidth = 'auto'
            this.checkboxWrap = true
            this.radioWidth = 'auto'
            this.radioWrap = true
            break
        }
      },
      // 切换错误提示方式
      errorTypeChange(event) {
        switch (event.index) {
          case 0:
            this.errorType = ['message']
            break
          case 1:
            this.errorType = ['toast']
            break
          case 2:
            this.errorType = ['border-bottom']
            break
          case 3:
            this.errorType = ['border']
            break
        }
      },
      
      
      // 表单提交
      submit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            // 验证通过
            if (!this.model.agreement) {
              this.$tn.message.toast('请勾选协议')
              return
            }
          } else {
            // 验证失败
          }
        })
      },
      // 点击actionSheet选择性别
      actionSheetClick(index) {
        uni.hideKeyboard()
        this.model.sex = this.actionSheetList[index].text
      },
      // 点击地区选择器
      regionPickerConfirm(event) {
        this.model.region = event.province.label + '-' + event.city.label + '-' + event.area.label
      },
      // 点击商品类型列选择器
      goodsTypeSelectConfirm(event) {
        this.model.goodsType = `${event[0]['label']}`
      },
      // 多选项值改变事件
      checkboxGroupChange(event) {
        this.model.fruit = event
      },
      // 单选项值改变事件
      radioGroupChange(event) {
        this.model.payType = event
      },
      // 获取验证码
      getCode() {
        if (this.$refs.code.canGetCode) {
          this.$tn.message.loading('正在获取验证码')
          setTimeout(() => {
            this.$tn.message.closeLoading()
            this.$tn.message.toast('验证码已经发送')
            // 通知组件开始计时
            this.$refs.code.start()
          }, 2000)
        } else {
          this.$tn.message.toast(this.$refs.code.secNum + '秒后再重试')
        }
      },
      // 验证码倒计时时间改变
      codeChange(text) {
        this.codeTips = text
      },
      // 图片有修改
      imageUploadChange(lists) {
        this.model.photo = lists
      },
      // 同意协议状态修改
      agreementCheckChange(event) {
        this.model.agreement = event.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .agreement {
    display: flex;
    align-items: center;
    margin: 40rpx 0;
    
    &-text {
      padding-left: 8rpx;
      color: $tn-font-sub-color;
    }
  }
  
</style>
