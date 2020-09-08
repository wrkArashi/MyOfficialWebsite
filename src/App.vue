<template>
	<router-view></router-view>
</template>

<style lang="scss">
	body {
		font-family: "Helvetica, Tahoma, Arial, STXihei, “华文细黑”, “Microsoft YaHei”, “微软雅黑”, SimSun, “宋体”, Heiti, “黑体”, sans-serif";
		-webkit-font-smoothing: antialiased; //抗锯齿
		-moz-osx-font-smoothing: grayscale; //抗锯齿
		font-size: 16px;
		color: white;
		background-color: black
	}

	* {
		margin: 0;
		padding: 0;
	}

	.flex {
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
	}

	ul,
	li {
		list-style: none;
	}

	.pointer {
		cursor: pointer;
	}

	.grid-container {
		width: 90%;
		margin: 0 auto;

		// max-width: 1200px;
		.row {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			[class*='col-'] {
				box-sizing: border-box;
			}

			.col-1 {
				width: 8.33%;
			}

			.col-2 {
				width: 16.665%;
			}

			.col-3 {
				width: 25%;
			}

			.col-4 {
				width: 33.33%;
			}

			.col-5 {
				width: 41.665%;
			}

			.col-6 {
				width: 50%;
			}

			.col-7 {
				width: 58.33%;
			}

			.col-8 {
				width: 66.665%;
			}

			.col-9 {
				width: 75%;
			}

			.col-10 {
				width: 83.33%;
			}

			.col11 {
				width: 91.665%;
			}

			.col-12 {
				width: 100%;
			}
		}

	}

	/*平板*/
	@media screen and (min-width:600px) and (max-width:960px) {
	}

	/*手机*/
	@media screen and (max-width:1024px) {
		.grid-container .row {
			[class*='col-'] {
				width: 100%;
			}
		}
	}
</style>
