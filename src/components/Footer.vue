<template>
	<div class="Footer">
		<div class="content">
			<div class="item flex">
				<div class="text pointer">{{$t('NewFooter.text1')}}</div>
				<div class="text pointer">{{$t('NewFooter.text2')}}</div>
				<div class="text pointer">{{$t('NewFooter.text3')}}</div>
				<div class="detail">
					<div>{{$t('NewFooter.detail1')}}</div>
					<div>{{$t('NewFooter.detail2')}}</div>
				</div>
				<div>
					<div>{{changeInfo}}</div>
					<div v-show="qrcode">
						<img src="../assets/index/qrcode.jpg" alt="">
					</div>
					<span>{{$t('NewFooter.text4')}}</span>
					<i class="iconfont icon-phone pointer" @mouseenter="changeInfo='+86(0)532-87075257',qrcode=false"></i>
					<i class="iconfont icon-emailicon pointer" @mouseenter="changeInfo='rongke.wang@rheinchina.com',qrcode=false"></i>
					<i class="iconfont icon-weixin1 pointer" @mouseenter="qrcode=true,changeInfo=''"></i>
				</div>
			</div>
			<div class="copy">{{$t('NewFooter.copy')}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				changeInfo: ' ',
				qrcode: false
			}
		}
	}
</script>

<style lang="scss">
	.Footer {
		text-align: center;
		padding-bottom: 30px;
		padding-top: 100px;
		line-height: 2;
		width: 100%;
		color: #838383;

		i:hover {
			color: #e5a517;
		}

		.content {
			max-width: 1750px;
			margin: 0 auto;

			.item {
				justify-content: center;

				.text {
					padding: 1px 10px;
					border: 1px solid gray;
					margin-right: 20px;
				}

				.detail {
					margin: 0 30px;
				}

				.iconfont {
					font-size: 20px;
					margin-left: 20px;
				}
			}

			.copy {
				margin-top: 30px;
				padding-top: 20px;
				border-top: 1px solid rgb(241, 241, 241);
			}
		}

		@media screen and (max-width:1024px) {
			padding-top: 50px;

			.text,
			.detail {
				display: none;
			}
		}
	}
</style>
