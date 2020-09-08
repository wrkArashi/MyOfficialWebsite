<template>
	<div>
		<div class="header">
			<Header></Header>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
		<div class="footer">
			<Footer></Footer>
		</div>
		<div class="contact">
			<Contact></Contact>
		</div>
		<div class="back">
			<BackTop></BackTop>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Footer from "@/components/Footer.vue";
	import Contact from "@/components/Contact.vue";
	import BackTop from "@/components/BackTop.vue";
	export default {
		components: {
			Header,
			Footer,
			Contact,
			BackTop
		},
		data() {
			return {

			}
		},
		mounted() {

		}
	}
</script>

<style lang='scss'>
	.header {
		width: 100%;
		height: 75px;
		background: rgba(0, 0, 0, 0.8);
		box-shadow: 3px 0 7px #000;
		position: fixed;
		top: 0;
		z-index: 99;
	}

	.main {
		min-height: calc(100vh - 352px);
		padding-top: 75px;
	}

	.footer {
		font-size: 14px;
	}

	@media screen and (max-width:1024px) {
		.contact {
			display: none;
		}
	}
</style>
