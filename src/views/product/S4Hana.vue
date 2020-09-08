<template>
	<div class="S4Hana">
		<!-- 页面1：箭头流程 -->
		<div class="arrowPage grid-container" v-if="arrowPageIsShow">
			<div class="row">
				<div class="col-1"></div>
				<div class="col-2" v-for="(item,index) in $t('productHana.polygonList')" :key="index" :class="{'col-3':index==4}">
					<!-- 箭头盒子 -->
					<div class="arrowBox flex" @mouseenter="change(index)" @mouseleave="changeLeave(index)" @click="changePage(index)">
						<img :src="item.src" alt="">
						<div class="textList">
							<div class="text" :class="{'color102':index==3,'color126':index==2,'color184':index==1,'color223':index==0,'white':changeIndex==index&&(changeIndex==2||changeIndex==3)}">
								{{item.text}}
							</div>
						</div>
					</div>
					<!-- 文字盒子 -->
					<div class="textBox" v-show="textBoxShow">
						<div class="text" v-for="(item,index) in item.detailList" :key="index">{{item}}</div>
					</div>
					<!-- 版本盒子 -->
					<div class="versionBox" v-show="!textBoxShow" :class="{'versionShow':changeIndex==index}">
						<div class="box" v-for="(item,index) in item.versionList" :key="index" :class="{'box1':index==2}">
							<div class="title">{{item.title}}</div>
							<div class="subTitle">{{item.subTitle}}</div>
							<div class="flex">
								<div class="version" v-for="(item,index) in item.version" :key="index">{{item}}</div>
								<div class="coverVersion">{{item.coverVersion}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 时间轴 -->
			<div class="row" v-show="textBoxShow">
				<div class="line col-12">
					<img src="../../assets/product/s4Hana/timeLine.png" alt="">
					<div class="years flex">
						<div class="yearsNum">2011</div>
						<div class="yearsNum">2012</div>
						<div class="yearsNum">2013</div>
						<div class="yearsNum">2014</div>
						<div class="yearsNum blue">2015...</div>
					</div>
				</div>
			</div>
			<!-- 移动端显示(切换文字盒子和版本盒子) -->
			<i class="tip pointer iconfont icon-qiehuan-" @click="textBoxShow=!textBoxShow"></i>
		</div>
		<!-- 页面2：hana详情 -->
		<div class="hanaPage grid-container" v-if="!arrowPageIsShow">
			<!-- 返回箭头流程页按钮 -->
			<div class="back pointer" @click="arrowPageIsShow=true"><i class="iconfont icon-jiantou_xiangzuo"></i> BACK</div>
			<!-- 上 -->
			<div class="boxTop">
				<!-- 标题 -->
				<div class="title">{{$t('productHana.clickPage.titleTop')}}</div>
				<div class="subTitle">{{$t('productHana.clickPage.titleTopSub')}}</div>
				<div class="row">
					<!-- Sales框 -->
					<div class="sales col-5">
						<!-- 小标题 -->
						<div class="salesTitle">
							<div class="row">
								<div class="col-12" style="font-weight: bold;">SALES</div>
							</div>
							<div class="row">
								<div class="col-2"></div>
								<div class="col-2" style="font-weight: bold;">Document</div>
							</div>
							<div class="row">
								<div class="col-2">Header</div>
								<div class="col-2"></div>
								<div class="col-2">Item</div>
							</div>
						</div>
						<!-- 块 -->
						<div class="row">
							<div class="col-2" v-for="(item,index) in salesBox" :key="index">
								<div class="item flex" :class="{'sel':item.text!=''}">{{item.text}}</div>
							</div>
						</div>
					</div>
					<!-- Finance框 -->
					<div class="finance col-7">
						<!-- 小标题 -->
						<div class="financeTitle">
							<div class="row">
								<div class="col-12" style="font-weight: bold;">FINANCE</div>
							</div>
							<div class="row">
								<div class="col-3" style="font-weight: bold;">Document</div>
							</div>
							<div class="row">
								<div class="col-2">Header</div>
								<div class="col-2">Item</div>
							</div>
						</div>
						<!-- 块 -->
						<div class="row">
							<div class="col-2" v-for="(item,index) in financeBox" :key="index">
								<div class="item flex" :class="{'sel':item.text!=''}">{{item.text}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 下 -->
			<div class="boxBottom">
				<!-- 标题 -->
				<div class="title flex">
					<div class="subTitle">{{$t('productHana.clickPage.titleBottom')}}</div>
					<div class="mainTitle">{{$t('productHana.clickPage.titleBottomSub1')}}</div>
					<div class="subTitle">{{$t('productHana.clickPage.titleBottomSub2')}}</div>
				</div>
				<div class="row" style="align-items: flex-end;">
					<!-- values框 -->
					<div class="values col-5">
						<!-- 小标题 -->
						<div class="valuesTitle">
							<div class="row">
								<div class="col-4"></div>
								<div class="col-2">Used for Master Data only</div>
								<div class="col-6"></div>
								<div class="col-2">ML Valuation</div>
							</div>
						</div>
						<!-- 块 -->
						<div class="row">
							<div class="col-2" v-for="(item,index) in valuesBox" :key="index">
								<div class="item flex" :class="{'sel':item.text!=''}">{{item.text}}</div>
							</div>
						</div>
					</div>
					<!-- quantities框 -->
					<div class="quantities col-7">
						<div class="row">
							<div class="col-1" v-for="(item,index) in quantitiesBox" :key="index" :class="{'col-3':index==21,'col-2':index==0}">
								<div class="item flex" :class="{'sel':item.text!=''}">{{item.text}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arrowPageIsShow: true, //箭头页和hana页切换
				textBoxShow: true, //文字盒子和版本盒子切换
				changeIndex: null, //hover显示index个版本盒子隐藏文字盒子
				salesBox: [],
				financeBox: [],
				valuesBox: [],
				quantitiesBox: [],
			}
		},
		created() {
			this.createSalesBox()
			this.createFinanceBox()
			this.createValuesBox()
			this.createQuantitiesBox()
		},
		methods: {
			createSalesBox() {
				for (var i = 0; i < 36; i++) {
					this.salesBox.push({ "text": '' })
				}
				this.salesBox[0].text = "VBAK"
				this.salesBox[2].text = "VBAP"
				this.salesBox[6].text = "LIKP"
				this.salesBox[8].text = "KIPS"
				this.salesBox[12].text = "VBRK"
				this.salesBox[14].text = "VBRP"
				this.salesBox[25].text = "PRCD_Elements(new)"
				this.salesBox[31].text = "VBFA(Simplified)"
			},
			createFinanceBox() {
				for (var i = 0; i < 54; i++) {
					this.financeBox.push({ "text": '' })
				}
				this.financeBox[0].text = "BKPF"
				this.financeBox[1].text = "BSEG"
				this.financeBox[19].text = "ACDOCA"
				this.financeBox[28].text = "FAAT_DOC_IT"
				this.financeBox[37].text = "FAAT_YODA"
				this.financeBox[46].text = "FAAT_PLAN VALUES"
			},
			createValuesBox() {
				for (var i = 0; i < 28; i++) {
					this.valuesBox.push({ "text": '' })
				}
				this.valuesBox[2].text = "MBEW"
				this.valuesBox[6].text = "MLDOC"
				this.valuesBox[9].text = "EBEW"
				this.valuesBox[13].text = "MLDOCCCS"
				this.valuesBox[16].text = "QBEW"
				this.valuesBox[23].text = "OBEW"
			},
			createQuantitiesBox() {
				for (var i = 0; i < 47; i++) {
					this.quantitiesBox.push({ "text": '' })
				}
				this.quantitiesBox[0].text = "Material Document"
				this.quantitiesBox[9].text = "MATDOC"
				this.quantitiesBox[10].text = "MATDOC_EXTRACT"
				this.quantitiesBox[21].text = "Used for Master Data only"
				this.quantitiesBox[28].text = "MCHB"
				this.quantitiesBox[29].text = "MARC"
				this.quantitiesBox[30].text = "MARD"
				this.quantitiesBox[31].text = "MSKU"
				this.quantitiesBox[38].text = "MSKA"
				this.quantitiesBox[39].text = "MKOL"
				this.quantitiesBox[40].text = "MSPR"
				this.quantitiesBox[41].text = "MSLB"
			},
			change(index) {
				this.changeIndex = index
				if (index == 2 || index == 3 || index == 4) {
					this.textBoxShow = false
				}
			},
			changeLeave(index) {
				this.changeIndex = null
				this.textBoxShow = true
			},
			changePage(index) {
				if (index == 4) {
					this.arrowPageIsShow = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.S4Hana {
		margin-top: 50px;

		.tip {
			display: none;
			font-size: 20px;
			padding: 17px 10px;
			position: fixed;
			bottom: 50%;
			right: 0;
			background-color: rgb(78, 78, 78);
		}

		img {
			width: 100%;
			height: 100%;
		}

		// hana页面
		.hanaPage {

			// 返回按钮
			.back {
				text-align: right;
				color: #e5a517;
				font-weight: bold;
				font-size: 20px;
				transition: all .3s;
			}

			.back:hover {
				transform: translateX(-10px);
			}

			[class*='col-'] {
				text-align: center;
				margin: 5px 0;
				overflow: auto;
			}

			// 每个小格子
			.boxTop .sales,
			.boxTop .finance,
			.boxBottom .values,
			.boxBottom .quantities {
				.item {
					width: 90%;
					height: 45px;
					color: rgb(223, 223, 223);
					border: 1px solid rgb(183, 183, 183);
					padding: 0 2px;
					overflow: auto;
					word-break: break-all;
					justify-content: center;
				}

				.sel {
					border: 1px solid rgb(0, 138, 212);
				}

			}

			.boxBottom .quantities {

				.col-3,
				.col-2 {
					.sel {
						border: 1px solid transparent;
					}
				}
			}

			.boxTop .sales,
			.boxBottom .values {
				padding-right: 25px;
			}

			.boxTop .finance,
			.boxBottom .quantities {
				padding-left: 25px;
			}

			// 下
			.boxBottom {

				// 标题
				.title {
					margin: 120px 0 50px 0;
					text-align: center;
					justify-content: center;

					.subTitle {
						margin: 0 20px;
						color: rgb(223, 223, 223);
					}

					.mainTitle {
						font-size: 42px;
						font-weight: bold;
					}
				}

				// values框
				.values {
					.col-2 {
						width: 14.285%;
					}

					.col-4 {
						width: 28.57%;
					}

					.col-6 {
						width: 42.857%;
					}
				}

				// quantities框
				.quantities {
					.col-1 {
						width: 10%;
					}

					.col-2 {
						width: 20%;
					}

					.col-3 {
						width: 30%;
					}
				}
			}

			// 上
			.boxTop {

				// 标题
				.title {
					font-size: 32px;
					margin-top: 50px;
					margin-left: 60px;
				}

				.subTitle {
					margin: 5px 0 50px 60px;
					color: rgb(223, 223, 223);
				}

				// sales框
				.sales {
					.col-2 {
						width: 16.665%;
					}
				}

				// finance框
				.finance {
					.col-2 {
						width: 11.11%;
					}

					.col-3 {
						width: 22%;
					}
				}

			}
		}

		// 箭头页面
		.arrowPage {

			// 时间轴
			.line {
				width: 90%;
				margin: 0 auto;

				.years {

					.yearsNum {
						text-align: center;
						width: 20%;
					}

					.blue {
						width: 30%;
						color: rgb(0, 138, 212);
					}
				}
			}

			// 盒子5
			.col-3 {
				margin-left: -50px;

				.arrowBox .textList .text {
					margin: 0 0 0 40px;
					font-size: 46px;
					font-weight: bold;
					transition: all .3s;
				}
			}

			.col-3:hover {
				.arrowBox .textList .text {
					color: orange;
				}
			}

			// 箭头盒子
			.arrowBox {
				max-width: 350px;
				max-height: 200px;
				position: relative;
				overflow: hidden;
				cursor: pointer;

				.textList {
					position: absolute;
					width: 100%;

					.text {
						width: 62%;
						margin: 0 auto;
						font-size: 22px;
					}
				}
			}

			// 文字盒子
			.textBox {
				height: 210px;
				margin-top: 130px;
				overflow: auto;

				.text {
					line-height: 2;
					margin: 0 40px;
				}
			}

			// 版本盒子
			.versionBox {
				height: 500px;
				margin-top: 70px;
				overflow: auto;
				opacity: 0;
				transition: all .3s;

				.box {
					text-align: center;
					border: 2px solid #e5a517;
					margin: 20px 10px;
					padding: 10px 0px;
					border-radius: 15px;


					.title {
						font-size: 20px;
						padding: 10px;
						color: rgb(0, 138, 212);
					}

					.subTitle {
						color: #838383;
					}

					.flex {
						justify-content: center;
						flex-wrap: wrap;
						position: relative;
					}

					.version {
						padding: 5px 10px;
						margin: 10px;
						background-color: rgb(126, 126, 126);
					}

					.coverVersion {
						position: absolute;
						color: #838383;
						left: 30px;
						top: 0;
						width: 20%;
						line-height: 30px;
						background-color: #d9d9d9;
					}
				}

				.box1 {
					.version {
						width: 60%;
					}
				}

				.boxShow {
					opacity: 1;
				}
			}

			.versionShow {
				opacity: 1;
			}

			.color102 {
				color: rgb(102, 102, 102);
			}

			.color126 {
				color: rgb(126, 126, 126);
			}

			.color184 {
				color: rgb(184, 184, 184);
			}

			.color223 {
				color: rgb(223, 223, 223);
			}

			.white {
				color: white;
			}
		}


		// 适配
		@media screen and (max-width: 1024px) {

			// 箭头页面
			.arrowPage {
				.arrowBox {
					margin: 0 auto;
				}

				.textBox {
					text-align: center;
					margin: 20px 0;
					height: auto;
				}

				.col-3 {
					margin: 0;
				}

				.line {
					display: none;
				}

				.versionBox {
					opacity: 1;
					height: auto;
					margin: 0;
				}

				.tip {
					display: block;
				}
			}

			// hana页面
			.hanaPage {

				.boxTop .sales,
				.boxBottom .values,
				.boxTop .finance,
				.boxBottom .quantities {
					padding: 20px 0;
				}
				.boxTop .title,
				.boxTop .subTitle{
					margin-left: 0;
				}

			}
		}
	}
</style>
