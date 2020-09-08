import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 字体图标
import './assets/fonts/iconfont.js'
import './assets/fonts/iconfont.css'
// 视频播放
import VideoPlayer from 'vue-video-player'
require('vue-video-player/node_modules/video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


Vue.config.productionTip = false

/*---------使用语言包-----------*/
const i18n = new VueI18n({
	locale: 'zh-CN', // 语言标识
	//this.$i18n.locale // 通过切换locale的值来实现语言切换
	messages: {
		'zh-CN': require('./common/lang/zh'), // 中文语言包
		'en-US': require('./common/lang/en') // 英文语言包
	}
});

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
