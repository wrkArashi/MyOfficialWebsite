<template>
	<div class="S4HanaCloud grid-container">
		<div class="nav flex">
			<div class="title pointer" @click="show=true" :class="{'blue':show}">{{$t('productHanaCloud.nav1')}}</div>
			<div class="title pointer" @click="show=false" :class="{'blue':!show}">{{$t('productHanaCloud.nav2')}}</div>
		</div>
		<!-- 激活方法 -->
		<div class="activate" v-if="show">
			<div class="title">{{$t('productHanaCloud.ACtitle')}}</div>
			<div class="detail">
				<img :src="$t('productHanaCloud.ACimg')" alt="">
				<img :src="$t('productHanaCloud.ACimg1')" alt="">
			</div>

		</div>
		<!-- 实施方法论 -->
		<div class="enforce" v-if="!show">
			<div class="title">{{$t('productHanaCloud.ENtitle')}}</div>
			<div class="detail">
				<img :src="$t('productHanaCloud.ENimg')" alt="">
				<img :src="$t('productHanaCloud.transports')" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		}
	}
</script>

<style lang="scss">
	.S4HanaCloud {

		// 选项卡
		.nav {
			margin: 50px auto;

			.title {
				font-size: 20px;
				padding: 10px 20px;
				transition: all .3s;
			}

			.blue {
				font-size: 22px;
				color: rgb(0, 138, 212);
			}
		}

		// 激活方法&&实施方法论
		.activate,
		.enforce {
			margin: 0 auto;
			text-align: center;

			.title {
				font-size: 28px;
				padding-bottom: 10px;
			}

			.detail {
				img {
					padding: 50px 0;
				}

				overflow: auto; //移动端滑动查看
			}
		}

		.enforce .detail {
			img {
				padding-bottom: 0;
			}
		}

		// 适配
		@media screen and (max-width: 1024px) {
		}
	}
</style>
