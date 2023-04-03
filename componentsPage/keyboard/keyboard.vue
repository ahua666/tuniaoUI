<template>

	<view class="components-keyboard">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed>keyboard键盘</tn-nav-bar>

		<!-- 页面内容 -->
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="true"
				@click="click">
				<view v-if="mode === 'number' || mode === 'card'" class="number-value">
					<tn-input v-model="inputValue" type="text" :disabled="true" :border="true" placeholder="键盘输入的内容"
						@click="showKeyboard"></tn-input>
					<tn-button class="clear-btn" backgroundColor="tn-bg-gray" fontColor="white" width="120rpx"
						height="70rpx" @click="clearInputValue">清空</tn-button>
				</view>
				<view v-else class="car-value">
					<block v-for="(item, index) in 8" :key="index">
						<view class="car-input" :class="{'new-energy': index === 7 && !licensePlateValue[index]}"
							@tap="chooseLicensePlateNumber(index)">
							<block v-if="index === 7 && !licensePlateValue[index]">
								<view class="new-energy-car">
									<view class="icon tn-icon-add"></view>
									<view class="text">新能源</view>
								</view>
							</block>
							<block v-else>
								<block v-if="licensePlateValue[index]===''">

								</block>
								<block v-else>
									{{ licensePlateValue[index]}}
								</block>
							</block>
						</view>
						<view class="car-point" v-if="index === 1">
							<view class="point"></view>
						</view>
					</block>
				</view>
			</dynamic-demo-template>

		</view>

		<!-- 键盘 -->
		<tn-keyboard v-model="value" :mode="mode" :dotEnabled="dotEnabled" :randomEnabled="randomEnabled"
			:switchEnMode="switchEnMode" :tooltip="tooltip" :mask="mask" @change="onChange" @cancel="onCancel"
			@confirm="onConfirm" @backspace="onBackspace"></tn-keyboard>

	</view>

</template>

<script>
	import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
	export default {
		name: 'componentsKeyboard',
		components: {
			dynamicDemoTemplate
		},
		data() {
			return {
				value: false,
				mode: 'number',
				dotEnabled: true,
				randomEnabled: false,
				switchEnMode: false,
				tooltip: true,
				mask: true,

				// 输入的值
				inputValue: '',
				// 输入的车牌
				licensePlateValue: ['', '', '', '', '', '', '', ''],
				// 当前选择输入的车牌号码位置
				currentLicensePlateIndex: 0,

				tips: ['无需依赖额外的样式文件', '使用tn-keyboard组件'],
				sectionList: [{
					name: '参数切换',
					section: [{
							title: '模式',
							optional: ['数字', '身份证', '车牌'],
							methods: 'modeChange'
						},
						{
							title: '显示点',
							optional: ['显示', '隐藏'],
							methods: 'dotEnabledChange'
						},
						{
							title: '打乱顺序',
							optional: ['是', '否'],
							methods: 'randomEnabledChange',
							current: 1
						},
						{
							title: '显示顶部工具栏',
							optional: ['显示', '隐藏'],
							methods: 'tooltipChange'
						},
						{
							title: '遮罩显示',
							optional: ['是', '否'],
							methods: 'maskChange'
						}
					]
				}]
			}
		},
		watch: {
			mode(value) {
				switch (value) {
					case 'number':
						this.$refs.demoTemplate.updateSectionBtnsValue(0, 0, 0)
						break
					case 'card':
						this.$refs.demoTemplate.updateSectionBtnsValue(0, 0, 1)
						break
					case 'car':
						this.$refs.demoTemplate.updateSectionBtnsValue(0, 0, 2)
						break
				}
			},
			currentLicensePlateIndex(value) {
				if (value === 0) {
					this.switchEnMode = false
				} else {
					this.switchEnMode = true
				}
			}
		},
		methods: {
			click(event) {
				this[event.methods] && this[event.methods](event)
			},
			// 弹出键盘
			showKeyboard() {
				this.value = true
			},
			// 切换模式
			modeChange(event) {
				switch (event.index) {
					case 0:
						this.mode = 'number'
						this.dotEnabled = true
						this.value = true
						this.$refs.demoTemplate.updateSectionBtnsState(1, true)
						break
					case 1:
						this.mode = 'card'
						this.value = true
						this.$refs.demoTemplate.updateSectionBtnsState(1, false)
						break
					case 2:
						this.mode = 'car'
						this.licensePlateValue = ['', '', '', '', '', '', '', '']
						this.$refs.demoTemplate.updateSectionBtnsState(1, false)
						break
				}
			},
			// 切换点显示
			dotEnabledChange(event) {
				this.dotEnabled = event.index === 0 ? true : false
				this.value = true
			},
			// 切换乱序显示
			randomEnabledChange(event) {
				this.randomEnabled = event.index === 0 ? true : false
				this.value = true
			},
			// 切换顶部工具栏显示
			tooltipChange(event) {
				this.tooltip = event.index === 0 ? true : false
				this.value = true
			},
			// 切换遮罩状态
			maskChange(event) {
				this.mask = event.index === 0 ? true : false
				this.value = true
			},

			// 键盘输入值改变
			onChange(e) {
				if (this.mode === 'number' || this.mode === 'card') {
					this.inputValue += e
				} else if (this.mode === 'car') {
					// 判断输入的值是否正确
					if (this.currentLicensePlateIndex === 0 && !this.$tn.test.chinese(e)) {
						this.$tn.message.toast('车牌归属地选择错误')
						return
					} else if (this.currentLicensePlateIndex === 1 && !this.$tn.test.letter(e)) {
						this.$tn.message.toast('车牌归属地字母选择错误')
						return
					}
					if (this.currentLicensePlateIndex !== 0 && !this.$tn.test.enOrNum(e)) {
						this.$tn.message.toast('车牌号码选择错误')
						return
					}
					// this.licensePlateValue[this.currentLicensePlateIndex] = e
					this.$set(this.licensePlateValue, this.currentLicensePlateIndex, e)
					this.currentLicensePlateIndex++
					// 判断车牌是否已经选择完成
					if (this.currentLicensePlateIndex === 8) {
						this.value = false
					}
				}
			},
			// 点击了取消按钮
			onCancel() {
				this.$tn.message.toast('点击了取消按钮')
			},
			// 点击了确认按钮
			onConfirm() {
				this.$tn.message.toast('点击了确认按钮')
				this.value = false
			},
			// 点击了退格按钮
			onBackspace() {
				if (this.mode === 'number' || this.mode === 'card') {
					if (!this.inputValue) {
						return
					}
					this.inputValue = this.inputValue.substring(0, this.inputValue.length - 1)
				} else if (this.mode === 'car') {
					let licensePlateIndex = this.currentLicensePlateIndex > 7 ? 7 : this.currentLicensePlateIndex
					if (this.licensePlateValue[licensePlateIndex] !== '') {
						this.$set(this.licensePlateValue, licensePlateIndex, '')
					} else {
						licensePlateIndex = licensePlateIndex < 1 ? 0 : --licensePlateIndex
						this.$set(this.licensePlateValue, licensePlateIndex, '')
					}
					this.currentLicensePlateIndex = licensePlateIndex
				}
			},

			// 点击车牌对于位置进行选择输入
			chooseLicensePlateNumber(index) {
				this.currentLicensePlateIndex = index
				this.mode = 'car'
				this.value = true
			},

			// 清空内容
			clearInputValue() {
				this.inputValue = ''
			}

		},

	}
</script>

<style lang="scss" scoped>
	.number-value {
		display: flex;
		align-items: center;

		.clear-btn {
			margin-left: 10rpx;
		}
	}

	.car-value {
		display: flex;

		.car-input {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 74rpx;
			width: 64rpx;
			border: 1px solid $tn-border-solid-color;
			border-radius: 18rpx;
			text-align: center;
			font-size: 38rpx;
			line-height: 1;
			margin-left: 10rpx;
			background-color: #FFFFFF;

			&.new-energy {
				background: transparent;
				border-style: dashed;
			}
		}

		.car-point {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 74rpx;
			width: 20rpx;
			margin-left: 10rpx;

			.point {
				width: 20rpx;
				height: 20rpx;
				background-color: $tn-font-holder-color;
				border-radius: 50%;
			}
		}

		.new-energy-car {
			display: flex;
			flex-direction: column;
			font-size: 16rpx;
			color: $tn-font-sub-color;

			.icon {
				margin-bottom: 8rpx;
			}
		}
	}
</style>