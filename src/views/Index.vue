<template>
	<div class="Index">
		<!-- 侧边栏-移动端隐藏 -->
		<div class="sideBar">
			<AnchorNavigation :allMenuList="$t('allMenuList')"></AnchorNavigation>
		</div>
		<!-- banner -->
		<div class="banner">
			<img src='../assets/index/banner.jpg' alt="banner">
			<!-- logo-移动端显示 -->
			<img class="logo" src="../assets/index/logo.png" alt="">
			<!-- 遮罩-移动端隐藏 -->
			<div class="cover">
				<div class="content">
					<div class="title">{{$t('index.banner.title')}}</div>
					<div class="detail">{{$t('index.banner.detail1')}}</div>
					<div class="detail">{{$t('index.banner.detail2')}}</div>
					<div class="btn pointer" @click="next()">DETAIL</div>
				</div>
			</div>
		</div>
		<!-- 区块一 SAP产品 3 -->
		<div class="item section">
			<div class="grid-container">
				<!-- 标题 -->
				<div class="titleBox">
					<div class="LTitle">{{$t('index.titleBox.box1.LTitle')}}</div>
					<div class="MTitle">{{$t('index.titleBox.box1.MTitle')}}</div>
				</div>
				<!-- 内容 -->
				<div class="row contentBoxThree">
					<div class="col-4" v-for="(item,index) in $t('index.threeBox')" :key='index' @mouseenter="changeIndexThree=index"
					 @mouseleave="changeIndexThree=null">
						<div class="list" :class="{'listChange':changeIndexThree==index}">
							<div class="imgBox">
								<img :src="item.url" alt="">
								<div class="cover">
									<div class="text">{{item.text}}</div>
									<div>{{item.textDetail}}</div>
								</div>
							</div>
							<router-link :to="item.link">
								<div class="link">→</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 区块二 PA全球顾问认证 1 -->
		<div class="item item1 section">
			<div class="grid-container">
				<!-- 标题 -->
				<div class="titleBox">
					<div class="LTitle">{{$t('index.titleBox.box2.LTitle')}}</div>
					<div class="MTitle">{{$t('index.titleBox.box2.MTitle')}}</div>
				</div>
				<!-- 内容 -->
				<div class="row contentBoxTwo">
					<div class="col-12" v-for="(item,index) in $t('index.twoBox')" :key='index' @mouseenter="changeIndexTwo=index"
					 @mouseleave="changeIndexTwo=null">
						<div class="list" :class="{'listChange':changeIndexTwo==index}">
							<!-- 上 -->
							<div class="imgTextBox flex" v-if="index==0">
								<div class="imgBox">
									<img :src="item.url" alt="">
									<div class="cover"></div>
								</div>
								<div class="right">
									<div class="text">
										<div class="title">{{item.text}}</div>
										<div class="detail">{{item.textDetail}}</div>
									</div>
									<router-link :to="item.link">
										<div class="link"><span>MORE</span></div>
									</router-link>
								</div>
							</div>
							<!-- 下 -->
							<div class="imgTextBox flex" v-if="index==1">
								<div class="right">
									<div class="text">
										<div class="title">{{item.text}}</div>
										<div class="detail">{{item.textDetail}}</div>
									</div>
									<router-link :to="item.link">
										<div class="link"><span>MORE</span></div>
									</router-link>
								</div>
								<div class="imgBox">
									<img :src="item.url" alt="">
									<div class="cover"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 区块三 教育培训资源 -->
		<div class="item section">
			<div class="grid-container">
				<!-- 标题 -->
				<div class="titleBox">
					<div class="LTitle">{{$t('index.titleBox.box3.LTitle')}}</div>
					<div class="MTitle">{{$t('index.titleBox.box3.MTitle')}}</div>
				</div>
				<!-- 内容 -->
				<div class="row contentBoxFour">
					<div class="col-3" v-for="(item,index) in $t('index.fourBox')" :key='index' @mouseenter="changeIndexFour=index"
					 @mouseleave="changeIndexFour=null">
						<div class="list" :class="{'listChange':changeIndexFour==index}">
							<div class="imgBox">
								<img :src="item.url" alt="">
							</div>
							<div class="detail">
								<div class="text">
									<div class="title">{{item.text}}</div>
									<div class="detail">{{item.textDetail1}}</div>
									<div class="detail">{{item.textDetail2}}</div>
									<div class="detail">{{item.textDetail3}}</div>
								</div>
								<router-link :to="item.link">
									<div class="more">
										<div class="link">MORE</div>
										<div class="go">></div>
									</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 区块四 教育培训解决方案 -->
		<div class="item item1 section">
			<div class="grid-container">
				<!-- 标题 -->
				<div class="titleBox">
					<div class="LTitle">{{$t('index.titleBox.box4.LTitle')}}</div>
					<div class="MTitle">{{$t('index.titleBox.box4.MTitle')}}</div>
				</div>
				<!-- 内容 -->
				<div class="row contentBoxThree">
					<div class="col-4" v-for="(item,index) in $t('index.threeBox2')" :key='index' @mouseenter="changeIndexThree2=index"
					 @mouseleave="changeIndexThree2=null">
						<div class="list" :class="{'listChange':changeIndexThree2==index}">
							<div class="imgBox">
								<img :src="item.url" alt="">
								<div class="cover">
									<div class="text">{{item.text}}</div>
									<div>{{item.textDetail}}</div>
								</div>
							</div>
							<router-link :to="item.link">
								<div class="link">→</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AnchorNavigation from '@/components/AnchorNavigation.vue'
	export default {
		components: { AnchorNavigation },
		data() {
			return {
				scrollTop: 0,
				changeIndexFour: null,
				changeIndexThree: null,
				changeIndexThree2: null,
				changeIndexTwo: null,
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
		methods: {
			scrollToTop() {
				const that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
			},
			next() {
				const that = this
				let jump = document.getElementsByClassName('section');
				let total = jump[0].offsetTop;
				document.documentElement.scrollTop = document.body.scrollTop = total - 70
			}
		}
	}
</script>

<style lang="scss">
	.Index {

		// 标题
		.titleBox {
			padding: 50px 0;
			text-align: center;

			.LTitle {
				font-size: 34px;
				margin-bottom: 5px;
			}

			.MTitle {
				color: #666666;
			}
		}

		// 区块
		.item {
			padding: 30px 0 100px 0;
		}

		.item1 {
			background-color: rgb(34, 34, 34);
		}

		// 图片
		img {
			display: block;
			width: 100%;
			transition: all 0.5s;
		}

		// 背景图
		.banner {
			width: 100%;
			max-height: calc(100vh - 75px);
			overflow: hidden;
			position: relative;

			.logo {
				display: none;
			}

			.cover {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				text-align: center;

				.content {
					height: 300px;
					width: 85%;
					margin: 10% auto;

					.title {
						font-size: 56px;
						font-weight: bold;
						margin-bottom: 50px;
					}

					.detail {
						color: rgb(204, 204, 204);
						margin: 5px 0;
					}

					.btn {
						margin: 0 auto;
						margin-top: 50px;
						line-height: 40px;
						width: 120px;
						border-radius: 5px;
						background-color: #e5a517;
						border: 3px solid transparent;
						transition: all .5s;
					}

					.btn:hover {
						background-color: transparent;
						border: 3px solid #e5a517;
					}
				}

			}
		}

		// sap产品
		.contentBoxThree {
			.list {
				width: 95%;
				margin: 0 auto;
				border-radius: 5px;
				background-color: rgb(78, 78, 78);
				border: 3px solid rgb(78, 78, 78);
				transition: all .3s;

				.imgBox {
					width: 85%;
					margin: 20px auto;
					position: relative;
					overflow: hidden;

					.cover {
						position: absolute;
						top: 0;
						width: 100%;
						height: 100%;
						box-sizing: border-box;
						transition: 0.5s;
						opacity: 0;
						line-height: 2;
						padding: 20PX;

						.text {
							font-size: 22px;
							text-align: center;
						}
					}
				}

				.link {
					text-align: center;
					color: white;
					width: 44px;
					margin: 0 auto;
					margin-bottom: 20px;
					line-height: 44px;
					font-size: 30px;
					background-color: #e5a517;
					border-radius: 50%;
					transition: all 0.5s;
				}

			}

			// 动画-橙色边框+半透明遮罩+按钮旋转并变色
			.listChange {
				border: 3px solid #e5a517;

				.imgBox .cover {
					opacity: 1;
					background-color: rgba(0, 0, 0, 0.5);
				}

				@keyframes myfirst {
					50% {
						background-color: #191d69;
					}
				}

				.link {
					transform: rotate(360deg);
					animation: myfirst 0.5s alternate;
				}

			}
		}

		//PA全球顾问 
		.contentBoxTwo {
			.list {
				border-radius: 5px;
				overflow: hidden;
				transition: all .3s;

				.imgTextBox {
					background-color: rgb(78, 78, 78);
					margin-bottom: 30px;

					.imgBox {
						width: 30%;
						margin: 20px;
						overflow: hidden;
						position: relative;
					}

					.right {
						width: 70%;
						color: white;
						padding: 0 20px;
						line-height: 2;
						color: rgb(224, 224, 224);

						.text {
							margin-bottom: 10px;
							transition: all 1s;

							.title {
								font-size: 22px;
								text-align: center;
								padding-bottom: 10px;
							}

							.detail {
								padding: 0 100px;
							}
						}

						.link {
							text-align: center;
							color: #0077AA;
							transition: all .1s;
							padding-top: 10px;
							color: rgb(78, 78, 78);
							font-weight: bold;

							span {
								border: 1px solid rgb(78, 78, 78);
								padding: 10px 20px;
								transition: all .5s;
							}

							span:hover {
								border: 1px solid #e5a517;
							}
						}

					}

					.cover {
						position: absolute;
						top: 0;
						width: 100%;
						height: 100%;
						transition: all 0.5s;
						opacity: 0;
					}
				}
			}

			// 动画-向下移动+字体变白色+图片变小+文字翻转+按钮出现+遮罩出现
			.listChange {
				transform: translateY(10px);

				.imgTextBox {
					.imgBox {
						img {
							transform: scale(0.9, 0.9);
						}

						.cover {
							opacity: 1;
							background-color: rgba(0, 0, 0, 0.3);
						}
					}

					.right {
						@keyframes textChange {
							0% {
								transform: rotateX(90deg);
							}

							100% {
								transform: rotateX(0deg);
							}
						}

						.text {
							animation: textChange 1s;
							color: white;
						}

						.link {
							color: #e5a517;
						}
					}
				}
			}
		}

		// 教育培训资源
		.contentBoxFour {

			.list {
				width: 95%;
				margin: 0 auto;
				min-height: 530px;
				background-color: rgb(78, 78, 78);
				border-radius: 5px;
				transition: all .3s;

				.imgBox {
					overflow: hidden;
				}

				.detail {
					transition: all 0.5s;
					color: rgb(224, 224, 224);

					.text {
						padding: 15px;
						font-size: 15px;
						line-height: 2;

						.title {
							font-size: 22px;
						}

					}

					.more {
						padding: 0 15px 20px 0;
						text-align: right;
						position: relative;
						color: white;

						.link {
							transition: all .2s;
						}

						.go {
							position: absolute;
							right: 27px;
							top: 17px;
							opacity: 0;
							transition: all .2s;
						}
					}
				}
			}

			// 动画-变背景色+图片变大+按钮变位改色+箭头出现
			.listChange {
				background-color: rgb(34, 34, 34);

				.imgBox {
					img {
						transform: scale(1.2, 1.2);
					}
				}

				.detail {
					.more {
						font-weight: bold;
						color: #e5a517;

						.link {
							transform: translateX(-30px);
						}

						.go {
							transform: translateY(-17px);
							opacity: 1;
						}
					}
				}
			}
		}

		// 适配
		// 手机&平板隐藏侧边栏、隐藏banner遮罩、显示logo、显示3box遮罩、隐藏2box图片&调按钮位置、添加list间距、四列变两列
		@media screen and (max-width:1024px) {
			.sideBar {
				display: none;
			}

			.banner {
				.cover {
					display: none;
				}

				.logo {
					display: block;
					width: 400px;
					position: absolute;
					bottom: 75px;
					right: 60px;
				}
			}

			.contentBoxThree .list .imgBox .cover {
				opacity: 1;
				background-color: rgba(0, 0, 0, 0.5);
				overflow: auto;
			}

			.contentBoxTwo .list .imgTextBox {

				.imgBox {
					display: none;
				}

				.right {
					width: 100%;
					padding: 0;
					margin: 0;

					.text {
						.detail {
							padding: 0 20px;
						}
					}

					.link {
						padding: 10px;
					}

					.link span {
						padding: 2px 5px;
					}
				}
			}

			.contentBoxThree .list,
			.contentBoxFour .list {
				margin-bottom: 10px;
			}

			.grid-container .row .col-3 {
				width: 50%;
			}
		}

		// 手机-调整logo位置、取消4box最小高度、两列变一列
		@media screen and (max-width:600px) {
			.banner .logo {
				width: 200px;
				bottom: 35px;
				right: 35px;
			}

			.contentBoxFour .list {
				min-height: 0px;
			}

			.grid-container .row .col-3 {
				width: 100%;
			}
		}
	}
</style>
