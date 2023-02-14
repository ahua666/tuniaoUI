<template>

  <view class="components-image_upload">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>图片上传</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true" :fullWindowsScroll="fullWindowsScroll" @click="click">
        <tn-image-upload
          ref="imageUpload"
          :action="action"
          :formData="formData"
          :fileList="fileList"
          :disabled="disabled"
          :autoUpload="autoUpload"
          :maxCount="maxCount"
          :showUploadList="showUploadList"
          :showProgress="showProgress"
          :deleteable="deleteable"
          :customBtn="customBtn"
          :beforeUpload="beforeUpload"
          @on-list-change="listChange"
          @on-oversize="oversize"
          @on-exceed="exceed"
          @on-choose-complete="chooseComplete"
          @on-choose-fail="chooseFail"
          @on-uploaded="uploaded"
          @on-success="uploadSuccess"
          @on-change="uploadChange"
          @on-progress="uploadProgress"
          @on-error="uploadError"
          @on-remove="fileRemove"
        >
          <view v-if="!showUploadList" slot="file" style="width: 100%;">
            <view v-for="(item,index) in lists" :key="index" class="tn-image-upload__item">
              <image
                class="tn-image-upload__item__image"
                :src="item.url || item.path"
                mode="aspectFill"
              ></image>
            </view>
          </view>
          <!-- <template v-if="!showUploadList" v-slot:file="data">
            <view v-for="(item,index) in data.file" :key="index" class="tn-image-upload__item">
              <image
                class="tn-image-upload__item__image"
                :src="item.url || item.path"
                mode="aspectFill"
              ></image>
            </view>
          </template> -->
          <view v-if="customBtn" slot="addBtn" class="tn-image-upload__custom-btn" hover-class="tn-hover-class" hover-stay-time="150">
            <view>选择图片</view>
          </view>
        </tn-image-upload>
        <view class="tn-flex tn-margin-top-xs tn-flex-row-center">
          <tn-button backgroundColor="#01BEFF" fontColor="tn-color-white" @tap="upload">上传</tn-button>
          <tn-button fontColor="tn-color-white" backgroundColor="tn-bg-red" margin="0rpx 0rpx 0rpx 20rpx" @tap="clear">清空列表</tn-button>
        </view>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  
  export default {
    components: {dynamicDemoTemplate},
    data() {
      return {
        action: 'https://www.hualigs.cn/api/upload',
        // action: '',
        formData: {
          apiType: 'this,ali',
          token: 'dffc1e06e636cff0fdf7d877b6ae6a2e',
          image: null
        },
        // 预上传列表
        // [{
        //   url: 'http://127.0.0.1:8888/upload/tuniao.jpg'
        // }]
        fileList: [],
        showUploadList: true,
        customBtn: false,
        autoUpload: true,
        showProgress: true,
        deleteable: true,
        customStyle: false,
        maxCount: 9,
        disabled: false,
        
        lists: [],
        
        tips: ['无需依赖额外的样式文件','使用tn-image-upload组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '上传方式',
                optional: ['自动上传','手动上传'],
                methods: 'autoUploadChange'
              },
              {
                title: '进度显示',
                optional: ['是','否'],
                methods: 'showProgressChange'
              },
              {
                title: '删除按钮显示',
                optional: ['是','否'],
                methods: 'deleteableChange'
              },
              {
                title: '最大上传数',
                optional: ['2','6','9'],
                methods: 'maxCountChange',
                current: 2
              },
              {
                title: '自定义列表和上传按钮样式',
                optional: ['是','否'],
                methods: 'customUploadListChange',
                current: 1
              },
              {
                title: '是否禁用',
                optional: ['是','否'],
                methods: 'disabledChange',
                current: 1
              }
            ]
          }
        ],
        fullWindowsScroll: false
      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换上传方式
      autoUploadChange(event) {
        this.autoUpload = event.index === 0 ? true : false
      },
      // 切换进度显示
      showProgressChange(event) {
        this.showProgress = event.index === 0 ? true : false
      },
      // 切换删除按钮显示
      deleteableChange(event) {
        this.deleteable = event.index === 0 ? true : false
      },
      // 切换允许上传数
      maxCountChange(event) {
        this.maxCount = Number(event.name)
      },
      // 切换自定义列表样式
      customUploadListChange(event) {
        if (event.index === 0) {
          this.customStyle = true
          this.showUploadList = false
          this.customBtn = true
        } else if (event.index === 1) {
          this.customStyle = false
          this.showUploadList = true
          this.customBtn = false
        }
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      // 切换禁用
      disabledChange(event) {
        this.disabled = event.index === 0 ? true : false
        this.$refs.demoTemplate.updateSectionScrollView()
      },
      
      // 手动上传文件
      upload() {
        this.$refs.imageUpload.upload()
      },
      // 手动清空列表
      clear() {
        this.$refs.imageUpload.clear()
      },
      
      // 文件上传前执行
      beforeUpload(index, lists) {
        console.log('文件上传前执行', lists, index);
        console.log(this.formData);
        this.formData.image = lists[index].file
        return true
      },
      
      
      listChange(lists, index) {
        console.log('上传文件列表发生改变', lists, index);
        this.lists.splice(0, this.lists.length)
        this.$nextTick(() => {
          this.lists = this.$tn.deepClone(lists)
          if (this.customStyle && lists.length > 4) {
            this.fullWindowsScroll = true
          } else {
            this.$refs.demoTemplate.updateSectionScrollView()
          }
        })
      },
      oversize(val, lists, index) {
        console.log('上传的文件超过大小', val, lists, index);
      },
      exceed(val, lists, index) {
        console.log('上传的文件超过允许数量', val, lists, index);
      },
      chooseComplete(lists, index) {
        console.log('文件选择成功', lists, index);
      },
      chooseFail(err) {
        console.log('文件选择失败', err);
      },
      uploaded(lists, index) {
        console.log('全部上传文件处理完成', lists, index);
      },
      uploadSuccess(data, currentIndex, lists, index) {
        console.log('文件上传成功', data, currentIndex, lists, index);
      },
      uploadChange(res, currentIndex, lists, index) {
        console.log('文件上传信息有变', res, currentIndex, lists, index);
      },
      uploadProgress(res, currentIndex, lists, index) {
        console.log('文件上传进度', res, currentIndex, lists, index);
      },
      uploadError(err, currentIndex, lists, index) {
        console.log('文件上传失败', err, currentIndex, lists, index);
      },
      fileRemove(currentIndex, lists, index) {
        console.log('文件移除成功', currentIndex, lists, index);
      },
    },

  }
</script>

<style lang="scss" scoped>
  
  .tn-image-upload__item {
    width: 100%;
    height: 180rpx;
    border-radius: 30rpx;
    margin-bottom: 20rpx;
    
    &__image {
      width: 100%;
      height: 180rpx;
      border-radius: 30rpx;
    }
  }
  
  .tn-image-upload__custom-btn {
    background-color: $tn-font-holder-color;
    width: 100%;
    height: 180rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30rpx;
  }
</style>
