module.exports = {
	// 头部
	header: {
		logo: '莱茵科斯特 SAP',
		navList: [{
			name: '首页',
			link: '/'
		}, {
			name: 'SAP产品',
			link: '',
			children: [
				{ 'name': 'SAP S4/HANA', 'link': '/product/s4Hana' },
				{ 'name': 'SAP S4/HANA Cloud', 'link': '/product/s4HanaCloud' },
				{ 'name': 'SuccessFactors', 'link': '/product/successFactors' }
			]
		}, {
			name: 'PA全球顾问认证',
			link: '',
			children: [
				{ 'name': '认证价值', 'link': '' },
				{ 'name': '认证方式', 'link': '' }
			]
		}, {
			name: '教育培训资源',
			link: '',
			children: [
				{ 'name': '师资力量', 'link': '' },
				{ 'name': '系统支撑', 'link': '' },
				{ 'name': '线上教学资源', 'link': '/edutres/online' },
				{ 'name': '教学环境', 'link': '' }
			]
		}, {
			name: '教育培训解决方案',
			link: '',
			children: [
				{ 'name': '项目实战培训', 'link': '' },
				{ 'name': '认证培训', 'link': '/edutsol/attest' },
				{ 'name': '企业用户培训', 'link': '' }
			]
		}],
		right: '试用和购买'
	},
	// 主页
	index: {
		banner: {
			title: '莱茵科斯特 SAP',
			detail1: 'SAP商务智能解决方案提供全面的商务智能功能，赋予用户根据坚实的数据和分析结果来制定有效且明智决策的能力。',
			detail2: '从高端分析师到普通业务用户的所有用户都可访问他们所需的信息，尽可能不依赖 IT 资源和开发人员。'
		},
		titleBox: {
			box1: {
				LTitle: "SAP产品",
				MTitle: 'SAP products'
			},
			box2: {
				LTitle: "PA全球顾问认证",
				MTitle: 'PA Global Consultant Certification'
			},
			box3: {
				LTitle: "教育培训资源",
				MTitle: 'Education and training resources'
			},
			box4: {
				LTitle: "教育培训解决方案",
				MTitle: 'Education and training solutions'
			}
		},
		threeBox: [{
			url: require('../../assets/index/pic1.jpg'),
			text: 'SAP S4/HANA',
			textDetail: 'SAP S/4HANA是一款集成式智能 ERP 系统，基于内存数据库SAP HANA 运行。可帮助企业实现业务转型，适应不断变化的行业环境，提升企业绩效。',
			link: '/product/s4Hana'
		}, {
			url: require('../../assets/index/pic2.jpg'),
			text: 'SAP S4/HANA Cloud',
			textDetail: '借助 SAP S/4HANA Cloud，你能够自信地以任意节奏推进企业发展和变革，实时了解业务状况，并利用该洞察，即时采取明智的行动。',
			link: '/product/s4HanaCloud'
		}, {
			url: require('../../assets/index/pic3.jpg'),
			text: 'SuccessFactors',
			textDetail: '借助SAP SuccessFactors 能够高效地招聘、培训和管理员工，将员工反馈和运营数据整合起来，了解员工的感受及原因，进而为员工提供卓越体验。',
			link: '/product/successFactors'
		}],
		twoBox: [{
			url: require('../../assets/index/pic4.jpg'),
			text: '认证价值',
			textDetail: 'PA认证是SAPERP咨询顾问资质的证明，是被全球公认和赞誉的。持有PA认证的人员通过严谨的学习来获取SAP的产品知识和技术，通过了严格的、面向过程的考试，展现出自己的能力，从而获得业内的认可。它说明持有PA认证的人已经具备了成功操作SAP系统所必需的知识。PA认证顾问可以直接访问SAP的service网站,获取更多的资源，用高质量、最新的资讯使客户受益。',
			link: ''
		}, {
			url: require('../../assets/index/pic5.jpg'),
			text: '认证方式',
			textDetail: '所有的PA认证考试都是基于PC的在线考试，从报名开始，一年有效期，有六次考试机会。考试时间为1-3小时，题型为选择题。这些试题反映了SAP ERP咨询顾问的实际工作任务。认证考试采用全球统一的标准，在SAP培训部的统一监督下进行。',
			link: ''
		}],
		threeBox2: [{
			url: require('../../assets/index/pic10.jpg'),
			text: '项目实战培训',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: ''
		}, {
			url: require('../../assets/index/pic11.jpg'),
			text: '认证培训',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: '/edutsol/attest'
		}, {
			url: require('../../assets/index/pic12.jpg'),
			text: '企业用户培训',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: ''
		}],
		fourBox: [{
			url: require('../../assets/index/pic6.jpg'),
			text: '师资力量',
			textDetail1: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: ''
		}, {
			url: require('../../assets/index/pic7.jpg'),
			text: '系统支撑',
			textDetail1: '1.用于学员实战训练真实业务场景的S/4 HANA系统',
			textDetail2: "2.用于手把手教学员进行系统操作训练的SAP Enable Now",
			textDetail3: "3.用于学员可模拟考试流程，检测学习结果的自研发模拟考试系统",
			link: ''
		}, {
			url: require('../../assets/index/pic8.jpg'),
			text: '线上教学资源',
			textDetail1: '1.库存物料采购：创建采购申请、采购申请转换采购订单、直接创建采购订单、过账收货、供应商发票校验',
			textDetail2: "2.资产会计：主数据、购置、在建工程资本化、公司代码内转移、报废、资产月结",
			link: '/edutres/online'
		}, {
			url: require('../../assets/index/pic9.jpg'),
			text: '教学环境',
			textDetail1: 'S/4 HANA 1809官方授权系统',
			link: ''
		}],
	},
	// SAP产品
	productHana: {
		// 箭头标题
		polygonList: [{
			src: require('../../assets/product/s4Hana/polygon1.png'),
			text: "SAP HANA",
			detailList: ["§ 内存平台"]
		}, {
			src: require('../../assets/product/s4Hana/polygon2.png'),
			text: "Sap 商业仓库，由 sap hana 供电",
			detailList: ["§ 实时分析", "§ 实时报道"]
		}, {
			src: require('../../assets/product/s4Hana/polygon3.png'),
			text: "Sap 商业套件，由 sap hana 供电",
			detailList: ["§ 实时业务", "§ Olap 和 oltp 一起", "§ sap hana 企业云为 sap 商业套件在 sap hana"],
			versionList: [{
				title: "SAP ERP 6.0",
				version: ["EhP7", "EhP8"]
			}, {
				title: "SAP NetWeaver",
				version: ["7.40", "7.50"]
			}, {
				title: "SAP HANA",
				version: ["1.0"]
			}]
		}, {
			src: require('../../assets/product/s4Hana/polygon4.png'),
			text: "简单金融",
			detailList: ["§ 即时财务洞察力", "§ 无聚集体", "§ 真相的唯一来源"],
			versionList: [{
				title: "SAP S/4HANA",
				subTitle: "Finance",
				version: ["1503", "1605"]
			}, {
				title: "SAP NetWeaver",
				version: ["7.40", "7.50"]
			}, {
				title: "SAP HANA",
				version: ["1.0"]
			}]
		}, {
			src: require('../../assets/product/s4Hana/polygon5.png'),
			text: "SAP S/4 HANA",
			detailList: ["简化数据模型", "§ 新的用户体验", "§ 高级处理", "§ 部署的选择"],
			versionList: [{
				title: "SAP S/4HANA",
				version: ["1511", "1610", "1709", "1809+", "..."]
			}, {
				title: "SAP NetWeaver",
				version: ["7.50", "7.51", "7.52", "...", "..."]
			}, {
				title: "SAP HANA",
				version: ["2.0"],
				coverVersion: "1.0"
			}]
		}],
		// 点击后的页面
		clickPage: {
			titleTop: "SAP S/4HANA 架构和组件",
			titleTopSub: "简化数据模型",
			titleBottom: "物质价值",
			titleBottomSub1: "SAP S/4HANA",
			titleBottomSub2: "材料数量",
		}
	},
	productHanaCloud: {
		nav1: "激活方法",
		nav2: "实施方法论",
		ACtitle: "SAP 激活执行方法",
		ACimg: require('../../assets/product/s4HanaCloud/zh-activationMethodBW.png'),
		ACimg1: require('../../assets/product/s4HanaCloud/zh-activationDetail.png'),
		ENtitle: "实施方法",
		ENimg: require('../../assets/product/s4HanaCloud/zh-methodOfImplementationBW.png'),
		transports: require("../../assets/product/s4HanaCloud/zh-transports.png"),
	},
	// 线上教学资源
	online: {
		// 资产会计
		allMenuList: ['库存物料采购', '资产会计'],
		title: "教育培训 —— 线上教学资源",
		subTitle: "Education and training -- online educational resources",
		Assets: {
			mainTitle: "资产会计",
			subTitle: "Asset accounting",
			tagTitle: ['主数据', '购置', '在建工程资本化', '公司代码内转移', '报废', '资产月结'],
			titleList: ["购置——有供应商购置（集成应付账款，无采购订单）", "购置——过账购置（非集成）含自动抵消条目"]
		},
		// 库存物料采购
		Inventory: {
			mainTitle: '库存物料采购',
			subTitle: 'Stock purchase',
			titleList: ['创建采购申请', '采购申请转换采购订单', '直接创建采购订单', '过账收货', '供应商发票校检验']
		}
	},
	// 教育培训解决方案
	eduScheme: {
		// 认证培训
		attest: {
			title: "SAP S/4HANA 财务-财务会计",
			subTitle: "开发实现和定制 SAP S/4HANA 财务特性所需的技能，重点关注财务会计",
			textList: [
				[
					'• 注册咨询: 咨询基本服务/升级服务相关内容',
					'• 拟备考试文件: 考试大纲/相关考试手册/考试程序简介',
					'• 阶梯测试: 考试系统帐户分配/在线能力验证测试',
					'• 培训服务: 环境设置/sap 系统帐户分配/在线培训',
					'• 考试服务: 预约考试服务/考试过程咨询及问答',
					'• 服务结束: 取得证书/更新服务/退款或取回'
				],
				[
					'• S4F12',
					'财务会计定制的基础知识:',
					'GL, AP, AR in SAP S/4HANA',
					'• S4F13',
					'附加财务会计配置在',
					'SAP S/4HANA',
					'• S4F17',
					'SAP S/4HANA 中的资产会计',
					'• S4F15',
					'SAP S/4HANA 的财务结算'
				],
				[
					'• 分配 SEN 帐户',
					'• 业务介绍',
					'• 模拟实际操作',
					'• 分配 S/4 HANA 系统账户',
					'• 业务操作',
				],
				[
					'• 梯级试验',
					'• 按章检验',
					'• 按照教科书进行测试',
					'• 综合试验',
				]
			],
			dialogList: [
				{ src: require('../../assets/eduTsol/attest/zh-dialogBox1.png') },
				{ src: require('../../assets/eduTsol/attest/zh-dialogBox2.png') },
				{ src: require('../../assets/eduTsol/attest/zh-dialogBox3.png') },
				{ src: require('../../assets/eduTsol/attest/zh-dialogBox4.png') },
			],
		}
	},
	// 悬浮导航
	allMenuList: ['SAP 产品', 'PA全球顾问认证', '教育培训资源', '教育培训解决方案'],
	// 新-联系
	NewContact: {
		text1: "QQ咨询",
		text2: "联系电话",
		text3: "官方微信",
		text4: "邮箱地址",
		text5: "扫一扫关注我们",
	},
	//新-底部
	NewFooter: {
		text1: "高校SAP学科",
		text2: "SAP专业培训服务",
		text3: "SAP项目实施",
		detail1: '专业共建 | 教育体系支撑 | 教材输出 | 教师团队培养 | PA认证服务 | 项目实践培训 | 项目支持',
		detail2: '地址：青岛市黄岛区中德生态园国家质检装备产业园 (邮编：266000)',
		text4: "关注我们：",
		copy: '莱茵科斯特SAP © 2020 版权所有 鲁ICP备16030071号'
	}
}
