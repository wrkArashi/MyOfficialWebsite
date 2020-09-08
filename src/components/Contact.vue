<template>
	<div class="Contact" v-if="flag">
		<!-- qq咨询 -->
		<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1806637966&site=qq&menu=yes">
			<div class="item">
				<i class="iconfont icon-qq"></i>
				<div>{{$t('NewContact.text1')}}</div>
			</div>
		</a>
		<!-- 官方微信 -->
		<div class="item wechat pointer">
			<i class="iconfont icon-weixin1"></i>
			<div>{{$t('NewContact.text3')}}</div>
			<!-- 详情 -->
			<div class="wechatDetail">
				<img src="../assets/index/qrcode.jpg" alt="">
				<div>{{$t('NewContact.text5')}}</div>
			</div>
		</div>
		<!-- 联系电话 -->
		<div class="item phone pointer">
			<i class="iconfont icon-phone"></i>
			<div>{{$t('NewContact.text2')}}</div>
			<!-- 详情 -->
			<div class="phoneDetail">+86(0)532-87075257</div>
		</div>
		<!--邮箱地址-->
		<div class="item mail pointer">
			<i class="iconfont icon-emailicon"></i>
			<div>{{$t('NewContact.text4')}}</div>
			<!-- 详情 -->
			<div class="mailDetail">rongke.wang@rheinchina.com</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 控制显隐
				flag: false
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
				if (that.scrollTop > 600) {
					that.flag = true
				} else {
					that.flag = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.Contact {
		font-size: 14px;
		position: fixed;
		right: 0px;
		top: 35%;
		border-bottom: none;
		z-index: 99;

		.item {
			text-align: center;
			background-color: rgb(241, 241, 241);
			padding: 18px 7px;
			width: 56px;
			border-bottom: 1px solid #d9d9d9;
			color: #838383;
		}

		.item:hover {
			color: #e5a517;
		}

		.mail,
		.wechat,
		.phone {
			position: relative;
		}

		.mailDetail,
		.wechatDetail,
		.phoneDetail {
			height: 78px;
			overflow: hidden;
			font-size: 20px;
			position: absolute;
			top: 0;
			right: 70px;
			background-color: #e5a517;
			color: white;
			width: 0px;
			opacity: 0;
			transition: all .3s;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}

		.wechatDetail {
			top: -47px;
		}

		.mailDetail,
		.phoneDetail {
			line-height: 78px;
		}

		.wechatDetail {
			padding: 10px 0;
			height: 160px;
			overflow: hidden;
		}

		.mail:hover {
			.mailDetail {
				opacity: 1;
				width: 305px;
			}
		}

		.wechat:hover {
			.wechatDetail {
				opacity: 1;
				width: 180px;
			}
		}

		.phone:hover {
			.phoneDetail {
				opacity: 1;
				width: 220px;
			}
		}

		.iconfont {
			font-size: 20px;
		}
	}
</style>
