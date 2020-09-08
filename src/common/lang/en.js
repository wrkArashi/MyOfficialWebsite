module.exports = {
	// 头部
	header: {
		logo: 'RheinKoester SAP',
		navList: [{
			name: 'Home',
			link: '/',
		}, {
			name: 'SAP Products',
			link: '',
			children: [
				{ 'name': 'SAP S4/HANA', 'link': '/product/s4Hana' },
				{ 'name': 'SAP S4/HANA Cloud', 'link': '/product/s4HanaCloud' },
				{ 'name': 'SuccessFactors', 'link': '/product/successFactors' },
			]
		}, {
			name: 'PA Global Consultant Certification',
			link: '',
			children: [
				{ 'name': 'Certified value', 'link': '' },
				{ 'name': 'Authentication mode', 'link': '' },
			]
		}, {
			name: 'Education and training resources',
			link: '',
			children: [
				{ 'name': 'Faculty strength', 'link': '' },
				{ 'name': 'System support', 'link': '' },
				{ 'name': 'Online teaching resources', 'link': '/edutres/online' },
				{ 'name': 'Teaching Environment', 'link': '' }
			]
		}, {
			name: 'Education and training solutions',
			link: '',
			children: [
				{ 'name': 'Project Field Training', 'link': '' },
				{ 'name': 'Certification Training', 'link': '/edutsol/attest' },
				{ 'name': 'Enterprise user training', 'link': '' },
			]
		}],
		right: 'Trial and purchase'
	},
	// 主页
	index: {
		banner: {
			title: 'RheinKoester SAP',
			detail1: 'The SAP Business Intelligence Solution provides comprehensive business intelligence capabilities, giving users the ability to make effective and informed decisions based on solid data and analysis',
			detail2: 'All users, from high-end analysts to ordinary business users, have access to the information they need, with as little reliance on IT resources and developers as possible.'
		},
		titleBox: {
			box1: {
				LTitle: "SAP products",
				MTitle: 'SAP产品'
			},
			box2: {
				LTitle: "PA Global Consultant Certification",
				MTitle: 'PA全球顾问认证'
			},
			box3: {
				LTitle: "Education and training resources",
				MTitle: '教育培训资源'
			},
			box4: {
				LTitle: "Education and training solutions",
				MTitle: '教育培训解决方案'
			}
		},
		threeBox: [{
			url: require('../../assets/index/pic1.jpg'),
			text: 'SAP S4/HANA',
			textDetail: 'Sap S/4hana is an integrated intelligent ERP system that runs on an in-memory database called Sap Hana. Can help enterprises to achieve business transformation, adapt to the changing industry environment, improve enterprise performance.',
			link: '/product/s4Hana'
		}, {
			url: require('../../assets/index/pic2.jpg'),
			text: 'SAP S4/HANA Cloud',
			textDetail: 'With Sap S/4hana Cloud, you can confidently move your business forward and change at any pace, know what is going on in real time, and use that insight to take intelligent, immediate action.',
			link: '/product/s4HanaCloud'
		}, {
			url: require('../../assets/index/pic3.jpg'),
			text: 'SuccessFactors',
			textDetail: 'With SAP success factors, we can efficiently recruit, train and manage employees, integrate employee feedback and operational data, understand employees feelings and reasons, and then provide excellent experience for employees.',
			link: '/product/successFactors'
		}],
		twoBox: [{
			url: require('../../assets/index/pic4.jpg'),
			text: 'Certified value',
			textDetail: "The PA certification is a certification of SAPERP consultants'qualifications and is recognized and appreciated worldwide. PA-CERTIFIED PERSONNEL ACQUIRE SAP product knowledge and technology through rigorous learning, pass rigorous, process-oriented examinations, demonstrate their capabilities, and gain industry recognition. It indicates that the holder of the PA has acquired the knowledge necessary for successful operation of the SAP system.",
			link: ''
		}, {
			url: require('../../assets/index/pic5.jpg'),
			text: 'Authentication mode',
			textDetail: "All PA certification tests are online, based on the PC, and are available six times a year, starting with registration. The examination time is 1-3 hours, the question type is the multiple choice. These questions reflect the actual work of SAP ERP consultant. The certification examinations are conducted under the unified supervision of the SAP Training Department under the globally unified standards.",
			link: ''
		}],
		threeBox2: [{
			url: require('../../assets/index/pic10.jpg'),
			text: 'Project Field Training',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: ''
		}, {
			url: require('../../assets/index/pic11.jpg'),
			text: 'Certification Training',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: '/edutsol/attest'
		}, {
			url: require('../../assets/index/pic12.jpg'),
			text: 'Enterprise user training',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: ''
		}],
		fourBox: [{
			url: require('../../assets/index/pic6.jpg'),
			text: 'Faculty strength',
			textDetail: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			link: ''
		}, {
			url: require('../../assets/index/pic7.jpg'),
			text: 'System support',
			textDetail1: '1.S/4 HANA system for real-world business scenario of student training',
			textDetail2: "2.SAP Enable Now for hands-on System Operation Training",
			textDetail3: "3.For students can simulate the examination process, test learning results of the self-developed simulation examination system",
			link: ''
		}, {
			url: require('../../assets/index/pic8.jpg'),
			text: 'Online teaching resources',
			textDetail1: '1.STOCK PURCHASE: purchase request creation, purchase request conversion purchase order, direct creation purchase order, posting receipt, supplier Invoice Verification ',
			textDetail2: "2.Asset Accounting: Master data, acquisition, capitalization of construction in progress, transfer within company Code, scrap, monthly closing of assets",
			link: '/edutres/online'
		}, {
			url: require('../../assets/index/pic9.jpg'),
			text: 'Teaching Environment',
			textDetail1: 'S/4 HANA 1809 official authorization system',
			link: ''
		}],
	},
	// SAP产品
	productHana: {
		// 箭头标题
		polygonList: [{
			src: require('../../assets/product/s4Hana/polygon1.png'),
			text: "SAP HANA",
			detailList: ["§ In-memory platformt"]
		}, {
			src: require('../../assets/product/s4Hana/polygon2.png'),
			text: "SAP Business Warehouse powered by SAP HANA",
			detailList: ["§ Real-time analysis", "§ Real-time reporting"]
		}, {
			src: require('../../assets/product/s4Hana/polygon3.png'),
			text: "SAP Business Suite powered by SAP HANA",
			detailList: ["§ Real-time business", "§ OLAP and OLTP together",
				"§ SAP HANA Enterprise Cloud for SAP Business Suite on SAP HANA"
			],
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
			text: "SAP Simple Finance",
			detailList: ["§ Instant financial insight", "§ No aggregates", "§ Single source of truth"],
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
			detailList: ["Simplified data model", "§ New user experience", "§ Advanced processing", "§ Choice of deployment"],
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
			titleTop: "SAP S/4HANA Architecture and Components",
			titleTopSub: "Simplified data model",
			// titleSales:"SALES",
			// titleDoc:"Document",
			// titleFinance:"FINANCE",
			titleBottom: "MATERIAL VALUES",
			titleBottomSub1: "SAP S/4HANA",
			titleBottomSub2: "MATERIAL QUANTITIES",
		}
	},
	productHanaCloud: {
		nav1: "Activation method",
		nav2: "Implementation Methodology",
		ACtitle: "SAP Activate implementation methodology",
		ACimg: require('../../assets/product/s4HanaCloud/en-activationMethodBW.png'),
		ACimg1: require('../../assets/product/s4HanaCloud/en-activationDetail.png'),
		ENtitle: "Implementation Methodology",
		ENimg: require('../../assets/product/s4HanaCloud/en-methodOfImplementationBW.png'),
		transports: require("../../assets/product/s4HanaCloud/en-transports.png"),
	},
	// 线上教学资源
	online: {
		// 资产会计
		allMenuList: ['Stock purchase', 'Asset accounting'],
		title: "Education and training -- online educational resources",
		subTitle: "教育培训 —— 线上教学资源",
		Assets: {
			mainTitle: "Asset accounting",
			subTitle: "资产会计",
			tagTitle: ['Master data', 'Purchase', 'Capitalization of construction in progress', 'Intra-company code transfer',
				'Scrapping', 'Monthly statement of assets'
			],
			titleList:["PURCHASE -- Foshan with vendor purchase (integrated accounts payable, no purchase order)","PURCHASE -- over-the-counter purchase (non-integrated) includes an auto-cancellation entry"]
		},
		// 库存物料采购
		Inventory: {
			mainTitle: 'Stock purchase',
			subTitle: '库存物料采购',
			titleList: ['Create a purchase request', 'Purchase requisition conversion purchase order',
				'Create purchase orders directly', 'Posting receipt',
				'Supplier invoice inspection'
			],
		}
	},
	// 教育培训解决方案
	eduScheme: {
		// 认证培训
		attest: {
			title: "SAP S/4HANA Finance - Financial Accounting",
			subTitle: "Develop the skills neededto implement and customize features of SAP S/4HANA Finance,with a focus on Financial Accounting",
			textList: [
				[
					'• Registration consultation：Consulting Basic Service / Upgrade Service related content',
					'• Preparation of examination documents：Examination Outline / Related Examination Books / Introduction to Examination Process',
					'• Ladder level Test：Examination System Account Allocation / Online Proficiency Testing',
					'• Training Service：Environment Setup / SAP System Account Assignment /The Online Training',
					'• Examination Service ：Appointment Examination Service / Examination Process Consultation and Q&A',
					'• End of the service：Obtain Certificate / Update Service / Refund or Retake'
				],
				[
					'• S4F12',
					'Basics of Customizing for Financial Accounting:',
					'GL, AP, AR in SAP S/4HANA',
					'• S4F13',
					'Additional Financial Accounting Configuration in',
					'SAP S/4HANA',
					'• S4F17',
					'Asset Accounting in SAP S/4HANA',
					'• S4F15',
					'Financial Closing in SAP S/4HANA'
				],
				[
					'• Assign SEN account',
					'• Business Presentation',
					'• Simulate Actual Operation',
					'• Allocate S/4 HANA System account',
					'• Business Practice Operation',
				],
				[
					'• Ladder level Test',
					'• Test according to chapter',
					'• Test according to textbook',
					'• Comprehensive test',
				]
			],
			dialogList: [
				{ src: require('../../assets/eduTsol/attest/dialogBox1.png') },
				{ src: require('../../assets/eduTsol/attest/dialogBox2.png') },
				{ src: require('../../assets/eduTsol/attest/dialogBox3.png') },
				{ src: require('../../assets/eduTsol/attest/dialogBox4.png') },
			],
		}
	},
	// 悬浮导航
	allMenuList: ['SAP products', 'PA Global Consultant Certification', 'Education and training resources',
		'Education and training solutions'
	],
	// 新-联系
	NewContact: {
		text1: "QQ",
		text2: "Phone",
		text3: "Wechat",
		text4: "Mail",
		text5: "Sweep it",
	},
	//新-底部
	NewFooter: {
		text1: "SAP discipline",
		text2: "SAP Professional Training Services",
		text3: "SAP Project Implementation",
		detail1: 'Education system | Textbook | Faculty | PA Attestation | Project practice training',
		detail2: 'Add：Sino-German Eco-Park,West Coast District,Qingdao,Shandong',
		text4: "To pay attention to us：",
		copy: 'RheinKoester SAP © 2020 CopyRight Shandong Registered No 16030071'
	}
}
