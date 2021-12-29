<template>

  <view class="basic-avatar">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed>头像</tn-nav-bar>

    <!-- 页面内容 -->
    <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false" @click="click">
        <block v-if="singleAvatarShow">
          <tn-avatar
            :backgroundColor="backgroundColor"
            :src="src"
            :text="text"
            :icon="icon"
            :shape="shape"
            :size="size"
            :shadow="shadow"
            :border="border"
            :borderColor="borderColor"
            :imgMode="imgMode"
            :badge="badge"
            :badgeSize="badgeSize"
            :badgeBgColor="badgeBgColor"
            :badgeColor="badgeColor"
            :badgeIcon="badgeIcon"
            :badgeText="badgeText"
            :badgePosition="badgePosition"
          >
          </tn-avatar>
        </block>
        <block v-else>
          <tn-avatar-group
            :lists="groupList"
            :shape="shape"
            :size="size"
            :gap="0.4"
          ></tn-avatar-group>
        </block>
      </dynamic-demo-template>

    </view>

  </view>

</template>

<script>
  import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
  export default {
    name: 'basicAvatar',
    components: {dynamicDemoTemplate},
    data() {
      return {
        backgroundColor: '',
        src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai4.jpg',
        text: '',
        icon: '',
        shape: 'circle',
        size: '',
        shadow: false,
        border: false,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        imgMode: 'aspectFill',
        badge: false,
        badgeSize: 28,
        badgeBgColor: '#AAAAAA',
        badgeColor: '#FFFFFF',
        badgeIcon: 'sex-male',
        badgeText: '',
        badgePosition: [0, 0],
        
        groupList: [
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg'},
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'},
          {text: 'TN'},
          {icon: 'logo-tuniao'},
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg'},
          {src: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai2.jpg'},
        ],
        
        // 头像显示方式切换
        singleAvatarShow: true,
        
        tips: ['无需依赖额外的样式文件','使用tn-avatar组件'],
        sectionList: [
          {
            name: '参数切换',
            section: [
              {
                title: '形状',
                optional: ['圆形','方形'],
                methods: 'shapeChange'
              },
              {
                title: '类型',
                optional: ['图片','文字','图标'],
                methods: 'typeChange'
              },
              {
                title: '大小',
                optional: ['默认','sm','lg','xl','120rpx'],
                methods: 'sizeChange'
              },
              {
                title: '阴影',
                optional: ['显示','隐藏'],
                methods: 'shadowChange',
                current: 1
              },
              {
                title: '边框',
                optional: ['显示','隐藏'],
                methods: 'borderChange',
                current: 1
              },
              {
                title: '自定义颜色',
                optional: ['默认','自定义'],
                methods: 'colorChange'
              },
              {
                title: '角标',
                optional: ['显示','隐藏'],
                methods: 'badgeChange',
                current: 1
              },
              {
                title: '角标大小',
                optional: ['默认','20'],
                methods: 'badgeSizeChange',
                show: false
              },
              {
                title: '角标内容',
                optional: ['图标','文字'],
                methods: 'badgeContentChange',
                show: false
              },
              {
                title: '角标位置',
                optional: ['默认','[8,8]'],
                methods: 'badgePositionChange',
                show: false
              }
            ]
          },
          {
            name: '样式切换',
            section: [
              {
                title: '方式',
                optional: ['单头像','头像组'],
                methods: 'singleAvatarChange'
              }
            ]
          }
        ]

      }
    },
    methods: {
      click(event) {
        this[event.methods] && this[event.methods](event)
      },
      // 切换头像形状
      shapeChange(event) {
        this.shape = event.index === 0 ? 'circle' : 'square'
      },
      // 切换头像类型
      typeChange(event) {
        switch (event.index) {
          case 0:
            this.src = 'https://tnuiimage.tnkjapp.com/avatar/xiaomai4.jpg'
            this.text = ''
            this.icon = ''
            break
          case 1:
            this.src = ''
            this.text = 'TN'
            this.icon = ''
            break
          case 2:
            this.src = ''
            this.text = ''
            this.icon = 'logo-tuniao'
            break
        }
      },
      // 切换头像大小
      sizeChange(event) {
        this.size = event.index === 0 ? '' : event.name
      },
      // 切换阴影状态
      shadowChange(event) {
        this.shadow = event.index === 0 ? true : false
      },
      // 切换边框状态
      borderChange(event) {
        this.border = event.index === 0 ? true : false
      },
      // 切换颜色
      colorChange(event) {
        if (event.index === 0) {
          this.backgroundColor = ''
          this.borderColor = 'rgba(0, 0, 0, 0.1)'
          this.badgeBgColor = '#AAAAAA'
          this.badgeColor = '#FFFFFF'
        } else {
          this.backgroundColor = '#01BEFF'
          this.borderColor = '#E6E6E6'
          this.badgeBgColor = 'tn-bg-red'
          this.badgeColor = '#FFFFFF'
        }
      },
      // 切换角标状态
      badgeChange(event) {
        if (event.index === 0) {
          this.badge = true
          this.$refs.demoTemplate.updateSectionBtnsState([7,8,9], true)
        } else {
          this.badge = false
          this.$refs.demoTemplate.updateSectionBtnsState([7,8,9], false)
        }
      },
      // 切换角标大小
      badgeSizeChange(event) {
        this.badgeSize = event.index === 0 ? 28 : Number(event.name)
      },
      // 切换角标内容
      badgeContentChange(event) {
        switch(event.index) {
          case 0:
            this.badgeIcon = 'sex-male'
            this.badgeText = ''
            this.badgeSizeChange({index: 0})
            this.$refs.demoTemplate.updateSectionBtnsValue(0, 7, 0)
            break
          case 1:
            this.badgeIcon = ''
            this.badgeText = '99+'
            this.badgeSize = 0
            break
        }
      },
      // 切换角标位置
      badgePositionChange(event) {
        switch(event.index) {
          case 0:
            this.badgePosition = [0, 0]
            break
          case 1:
            this.badgePosition = [8, 8]
            break
        }
      },
      
      // 单头像、头像组切换
      singleAvatarChange(event) {
        this.singleAvatarShow = event.index === 0
      }

    },

  }
</script>

<style lang="scss" scoped>

</style>
