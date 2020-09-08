<template>
	<div class="Header">
		<!-- 手机端样式 -->
		<div class="mp flex">
			<!-- 侧边导航栏 -->
			<div class="mpNav">
				<!-- 按钮 -->
				<i class="btn iconfont icon-daohang-" @click="mpNav=true"></i>
				<!-- 导航 -->
				<transition name="slide">
					<div class="mpNavBox" v-show="mpNav">
						<!-- 关闭按钮 -->
						<div class="close flex" @click="mpNav=false">
							<i class="iconfont icon-guanbi"></i>
						</div>
						<!-- 列表 -->
						<ul v-for="(item,index) in $t('header.navList')" :key="index">
							<!-- 一级导航 -->
							<li class="navItem">
								<ul @click="mpNav=false">
									<router-link class="title" :to="item.link" :class="changeNavNum==index?'aChange':''">{{item.name}}</router-link>
								</ul>
								<!-- 二级导航 -->
								<ul class="navList" @click="changeNav(index),mpNav=false">
									<li v-for="(item,index) in item.children" :key='index'>
										<router-link :to="item.link">{{item.name}}</router-link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</transition>
			</div>
			<!-- logo -->
			<div class="left">{{$t('header.logo')}}</div>
			<!-- 切换语言 -->
			<div class="right" @click="changeLangEvent()">
				<!-- 中国国旗 -->
				<svg class="icon" aria-hidden="true" v-show="isCn">
					<use xlink:href="#icon-zhongguo"></use>
				</svg>
				<!-- 英国国旗 -->
				<svg class="icon" aria-hidden="true" v-show="!isCn">
					<use xlink:href="#icon-meiguo"></use>
				</svg>
			</div>
		</div>
		<!-- 电脑端样式 -->
		<div class="pc flex" @mouseleave="navIndex=null">
			<!-- logo -->
			<div class="left">{{$t('header.logo')}}</div>
			<!-- 导航 -->
			<div class="center flex">
				<ul v-for="(item,index) in $t('header.navList')" :key="index">
					<!-- 一级导航 -->
					<li class="navItem" @mouseenter="navIndex=index" @click="changeNavNum=index">
						<router-link :to="item.link" :class="changeNavNum==index?'aChange':''">{{item.name}}</router-link>
						<!-- 二级导航 -->
						<transition name="bounce">
							<ul class="navList" v-show="navIndex==index" @click="changeNav(index)" @mouseleave="navIndex=null">
								<li class="text" v-for="(item,index) in item.children" :key='index'>
									<router-link :to="item.link">{{item.name}}</router-link>
								</li>
							</ul>
						</transition>
					</li>
				</ul>
			</div>
			<!-- 功能 -->
			<div class="right flex">
				<!-- 试用购买 -->
				<div class="item pointer">{{$t('header.right')}}</div>
				<!-- 用户 -->
				<i class="item pointer iconfont icon-yonghu"></i>
				<div></div>
				<!-- 中国国旗 -->
				<svg class="icon" aria-hidden="true" v-show="isCn">
					<use xlink:href="#icon-zhongguo"></use>
				</svg>
				<!-- 英国国旗 -->
				<svg class="icon" aria-hidden="true" v-show="!isCn">
					<use xlink:href="#icon-meiguo"></use>
				</svg>
				<!-- 中英文切换 -->
				<div class="pointer" @click="changeLangEvent()">{{changetext}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mpNav: false, //手机端导航显示
				isCn: true, //是否中文
				changetext: '简体中文', //文字切换
				navIndex: 0, //控制展开哪个二级菜单
				changeNavNum: null, //当前高亮的一级菜单
				currentNav: '', //当前选择的菜单名
			}
		},
		mounted() {
			this.currentNav = this.$route.name
			console.log(this.currentNav)
		},
		updated() {
			this.currentNav = this.$route.name
			console.log(this.currentNav)
		},
		watch: {
			currentNav() {
				if (this.currentNav == "Index") {
					this.changeNavNum = 0
					this.mpNav = false
				}
				if (this.currentNav == "S4Hana" || this.currentNav == "S4HanaCloud" || this.currentNav == "SuccessFactors") {
					this.changeNavNum = 1
				}
				// if (this.currentNav == "name") {
				// 	this.changeNavNum = 2
				// }
				if (this.currentNav == "Online") {
					this.changeNavNum = 3
				}
				if (this.currentNav == "Attest") {
					this.changeNavNum = 4
				}
			}
		},
		methods: {
			// 改变语言包
			changeLangEvent() {
				if (this.isCn) {
					this.isCn = !this.isCn
					this.$i18n.locale = 'en-US';
					this.changetext = 'English'
				} else {
					this.isCn = !this.isCn
					this.$i18n.locale = 'zh-CN';
					this.changetext = '简体中文'
				}
			},
			// 点击二级菜单，变色
			changeNav(index) {
				this.changeNavNum = index
			}
		}
	}
</script>

<style lang="scss">
	.Header {

		.pc,
		.mp {
			width: 90%;
			margin: 0 auto;
			justify-content: space-between;
		}

		.mp {
			display: none;
		}

		a {
			color: white;
			transition: all .3s;
		}

		.aChange {
			color: orange;
		}

		.left {
			font-size: 18px;
			cursor: default;
		}

		.center {
			.navItem {
				position: relative;
				padding: 0 25px;

				a:hover {
					color: #e5a517;
				}

				.navList {
					width: 205px;
					position: absolute;
					top: 49px;
					left: 10px;
					line-height: 1;
					background-color: rgba(0, 0, 0, 0.8);
					box-shadow: 3px 0 3px #000;

					.text {
						padding: 15px 20px;
					}

					.text:hover {
						background-color: rgba(0, 0, 0, 1);

						a {
							color: #e5a517;
						}
					}
				}
			}
		}

		.right {
			.icon {
				width: 28px;
				height: 28px;
				margin-right: 5px;
			}

			.item {
				margin-right: 15px;
			}

			i {
				font-size: 20px;
				line-height: 75px;
			}
		}

		.bounce-enter-active {
			animation: bounce-in .3s;
		}

		.bounce-leave-active {
			animation: bounce-in .3s reverse;
		}

		@keyframes bounce-in {
			0% {
				top: 20px;
				opacity: 0;
			}
		}

		/*手机和平板*/
		@media screen and (max-width:1366px) {
			.pc {
				display: none;
			}

			.mp {
				display: flex;
			}

			.mpNav {
				.btn {
					font-size: 18px;
					line-height: 75px;
				}

				.mpNavBox {
					position: fixed;
					top: 0;
					left: 0;
					width: 300px;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.9);
					padding: 20px;
					box-sizing: border-box;
					overflow: auto;

					.close {
						line-height: 20px;
						justify-content: flex-end;
					}

					.navItem {
						margin: 20px;

						ul {
							margin: 5px 0;

							.title {
								padding: 3px;
								background-color: #404040;
							}
						}

						.navList {

							li {
								line-height: 2;
								padding-left: 20px;
								border-bottom: 1px solid #666;
							}
						}
					}
				}
			}

			.slide-enter-active {
				animation: slide .5s;
			}

			.slide-leave-active {
				animation: slide .5s reverse;
			}

			@keyframes slide {
				0% {
					left: -300px;
					opacity: 0;
				}
			}
		}
	}
</style>
