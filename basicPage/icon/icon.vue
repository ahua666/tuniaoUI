<template>

	<view class="basic-icon">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed>图标</tn-nav-bar>

		<!-- 页面内容 -->
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view class="search-fixed">
				<view class="search-content">
					<input class="search-content__input" placeholder-class="search-content__input-placeholder tn-color-blue"
						placeholder="搜索 中文名/英文名" @input="saerchInput" />
				</view>
			</view>


			<view class="" :style="{marginTop: vuex_custom_bar_height + 'px'}">

				<block v-for="(item, index) in resultIconList" :key="index">

					<!-- 分类标题-->
					<view class="tn-text-center tn-text-xl tn-text-bold tn-margin-lg">
						<text class="tn-icon-font"></text>
						<text class="tn-padding-left-sm tn-padding-right-sm">{{ item.title }}</text>
						<text class="tn-icon-font"></text>
					</view>

					<view class="icon__container tn-flex tn-flex-wrap tn-flex-row-left tn-flex-col-center tn-margin">
						<view v-for="(icons_item, icons_index) in item.icons" :key="icons_index"
							class="icon__item tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center icon-shadow"
							:class="[{'icon__item--active': icons_index === currentIconIndex}]"
							@click="clickIcon(icons_index, icons_item.name, icons_item.icon)">
							<view class="icon__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
								<view :class="[`tn-icon-${icons_item.icon}`]"></view>
							</view>
							<view class="icon__item--title tn-text-ellipsis tn-text-df tn-color-grey">{{ icons_item.icon }}</view>
              <!-- <view class="icon__item--title tn-text-ellipsis tn-text-xs tn-color-grey">{{ icons_item.name }}</view> -->
						</view>
					</view>

				</block>
			</view>

			<view class="tn-text-center tn-margin-bottom-xl">
				<view>
          icon目前700+，支持
          <text class="tn-color-orange tn-text-lg tn-padding-xs">中文、英文</text>
          搜索
        </view>
				<button class=" tn-button--clear-style" open-type="feedback">
					<view class="tn-margin tn-text-center">
						<text>里面缺少你想要的吗？UI期待你的需求</text>
						<text class="tn-color-blue">留言</text>
					</view>
				</button>
			</view>

			<view class="tn-padding-bottom"></view>

		</view>

	</view>

</template>

<script>
	import iconData from './iconfont.js'
	export default {
		name: 'basicIcon',
		data() {
			return {
				// 图标列表
				iconList: iconData.data,
				// 用户输入的内容
				searchValue: '',
				// 当前点击的图标序号
				currentIconIndex: -1,
			}
		},
		computed: {
			resultIconList() {
				//filter会改变原数组，故使用深拷贝
				var newArr = JSON.parse(JSON.stringify(iconData.data))
				if (!this.searchValue) return iconData.data
				return newArr.filter((item1) => {
					item1.icons = item1.icons.filter((item2) => {
						if (item2.name.includes(this.searchValue) || item2.icon.includes(this.searchValue)) {
							return item2
						}
					})
					if (item1.icons.length > 0) {
						return item1
					}
				})


			}
		},
		methods: {
			// input输入的内容
			saerchInput(e) {
				//重新设置为-1，避免选中之前选中的图标
				this.currentIconIndex=-1;
				this.searchValue = e.target.value;
				this.resultIconList
			},
			// 点击图标
			clickIcon(index, name ,icon) {
				this.currentIconIndex = index
				// this.$tn.message.toast(name, false, null, 'none', 5000)
				//这里点击后直接复制图标名称。
				uni.setClipboardData({
					data: icon,
					showToast: false,
					success: () => {
						console.log('success'); //复制成功
						this.$tn.message.toast('已复制：' + icon, false, null, 'none', 5000)
					}
				});
				// const save = function (e) {
				//         e.clipboardData.setData('text/plain', name)
				//         e.preventDefault() // 阻止默认行为
				// }
				// const once = {
				//     once: true
				// }
				// document.addEventListener('copy', save, once) // 添加一个copy事件,当触发时执行一次,执行完删除
				// document.execCommand('copy') // 执行copy方法

			},
		}
	}
</script>

<style lang="scss" scoped>
	.search-fixed {
		position: fixed;
		width: 100%;
		transition: all 0.25s ease-out;
		z-index: 1;
	}

	/* 搜索框 start */
	.search-content {
		padding-top: 16rpx;
		margin: 40rpx 40rpx;

		&__input {
			caret-color: $tn-main-color;
			width: 100%;
			height: 70rpx;
			line-height: 60rpx;
			border-radius: 100rpx;
			text-align: center;
			margin: 0 auto;
			background-color: #FFFFFF;
			color: #080808;
			box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.05);
		}

		&__input-placeholder {
			font-size: 24rpx;
		}
	}

	/* 搜索框 end */

	/* 图标容器 start */
	.icon-shadow {
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.06);
	}

	.icon {
		&__container {
			margin-bottom: 30rpx;
		}

		&__item {
			width: 30.4%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			margin-top: 0;
			transform: scale(1);
			transition: transform 0.2s linear;
			transform-origin: center center;

			&--active {
				transform: scale(0.95);
				box-shadow:
					inset 10rpx 10rpx 18rpx rgba(0, 0, 120, 0.04),
					inset -8rpx -8rpx 20rpx rgba(0, 0, 120, 0.03);
			}

			&--icon {
				width: 80rpx;
				height: 80rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}

			&--title {
				width: 100%;
				text-align: center;
			}
		}
	}

	/* 图标容器 end */
</style>
