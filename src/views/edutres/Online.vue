<template>
	<div class="Online">
		<!-- 侧边栏-移动端隐藏 -->
		<div class="sideBar">
			<AnchorNavigation :allMenuList="$t('online.allMenuList')"></AnchorNavigation>
		</div>
		<!-- 总标题 -->
		<div class="caption">
			<div class="title">{{$t('online.title')}}</div>
			<div class="subTitle">{{$t('online.subTitle')}}</div>
		</div>
		<!-- 库存物料采购 -->
		<div class="purchase section">
			<div class="grid-container">
				<!-- 标题 -->
				<div class="title flex">
					<div class="mainTitle">{{$t('online.Inventory.mainTitle')}}</div>
					<div class="subTitle">{{$t('online.Inventory.subTitle')}}</div>
				</div>
				<!-- 视频 -->
				<div class="row">
					<div class="col-4" v-for="(item,index) in playerOptions" :key="index">
						<video-player class="video-player vjs-custom-skin video" ref="videoPlayer" :playsinline="true" :options="playerOptions[index]"></video-player>
						<div class="videoText">{{$t('online.Inventory.titleList')[index]}}</div>
					</div>
					<div class="cover"></div>
				</div>
			</div>
		</div>
		<!-- 资产会计 -->
		<div class="accounting section">
			<div class="grid-container">
				<!-- 标题 -->
				<div class="title flex">
					<div class="flex">
						<div class="mainTitle">{{$t('online.Assets.mainTitle')}}</div>
						<div class="subTitle">{{$t('online.Assets.subTitle')}}</div>
					</div>
					<div class="tagTitle flex">
						<div class="tag pointer" v-for="(item,index) in $t('online.Assets.tagTitle')" :key="index">{{item}}</div>
					</div>
				</div>
				<!-- 视频 -->
				<div class="row">
					<div class="col-6" v-for="(item,index) in playerOptions1" :key="index">
						<video-player class="video-player vjs-custom-skin video" ref="videoPlayer" :playsinline="true" :options="playerOptions1[index]"></video-player>
						<div class="videoText">{{$t('online.Assets.titleList')[index]}}</div>
					</div>
					<div class="cover"></div>
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
				playerOptions: [], //库存物料采购
				playerOptions1: [], //资产会计
			}
		},
		created() {
			this.pushPlayerOptions()
		},
		methods: {
			// 建视频
			pushPlayerOptions() {
				for (var i = 0; i < 7; i++) {
					let videoItem = {
						playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
						autoplay: false, //如果true,浏览器准备好时开始回放。
						muted: false, // 默认情况下将会消除任何音频。
						loop: false, // 导致视频一结束就重新开始。
						preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
						language: 'zh-CN',
						aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
						techOrder: ['flash', 'html5'], // 兼容顺序
						flash: {
							hls: { withCredentials: false },
							swf: './static/media/video-js.swf' // 引入静态文件swf
						},
						html5: { hls: { withCredentials: false } },
						sources: [{
							type: "",
							src: require('../../assets/video/edu' + i + '.mp4')
						}],
						poster: "", //你的封面地址
						notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
						controlBar: {
							timeDivider: true,
							durationDisplay: true,
							remainingTimeDisplay: false,
							fullscreenToggle: true //全屏按钮
						}
					}
					if (i < 5) {
						this.playerOptions.push(videoItem)
					}
					if (i == 5 || i == 6) {
						this.playerOptions1.push(videoItem)
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.Online {

		// 遮罩和背景
		.row {
			padding-top: 45px;
			position: relative;

			.cover {
				background-color: #000000;
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				opacity: 0.7;
				z-index: 0;
			}

			.col-4,
			.col-6 {
				z-index: 1;
			}
		}

		.purchase .row {
			background: black url(../../assets/eduTres/bg1.png) 100% fixed no-repeat;
		}

		.accounting .row {
			background: black url(../../assets/eduTres/bg.png) left bottom fixed no-repeat;
		}

		// 总标题
		.caption {
			text-align: center;
			margin-top: 50px;

			.title {
				font-size: 50px;
				font-weight: bold;
				margin-bottom: 30px;
			}
		}

		// 库存物料选购&资产会计
		.purchase,
		.accounting {
			padding: 30px 0;

			.title {
				padding: 30px;
				padding-bottom: 60px;

				.mainTitle {
					padding-bottom: 15px;
					font-size: 30px;
					border-bottom: 1px solid #e5a517;
				}

				.subTitle {
					margin-left: 20px;
					color: #666666;
				}

				.tag {
					padding: 5px 10px;
					border: 1px solid #666666;
					color: #666666;
					margin: 0 10px;
				}

				.tag:hover {
					color: #b8b8b8;
				}
			}

			.video {
				width: 85%;
				margin: 0 auto;
				transition: all .3s;
			}

			.video:hover {
				transform: translateY(10px);
			}

			.videoText {
				text-align: center;
				padding: 20px 0;
				margin-bottom: 25px;
			}
		}

		.accounting .title {
			justify-content: space-between;
		}

		// 移动端适配
		@media screen and (max-width: 1024px) {
			.sideBar {
				display: none;
			}

			.purchase,
			.accounting {
				.title {
					display: block;

					.subTitle {
						display: none;
					}

					.tagTitle {
						margin-top: 10px;
						flex-wrap: wrap;
					}
				}
			}
		}
	}
</style>
