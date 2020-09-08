import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout.vue'

Vue.use(Router)

let router = new Router({
	routes: [{
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [{
			path: 'index',
			alias: '/',
			name: 'Index',
			component: () => import('../views/Index.vue')
		}]
	}, {
		path: '/edutres/',
		name: 'Edutres',
		component: Layout,
		children: [{
			path: 'online',
			name: 'Online',
			component: () => import('../views/edutres/Online.vue')
		}]
	}, {
		path: '/edutsol/',
		name: 'Edutsol',
		component: Layout,
		children: [{
			path: 'attest',
			name: 'Attest',
			component: () => import('../views/edutsol/Attest.vue')
		}]
	}, {
		path: '/product/',
		name: 'Product',
		component: Layout,
		children: [{
			path: 's4Hana',
			name: 'S4Hana',
			component: () => import('../views/product/S4Hana.vue')
		}, {
			path: 's4HanaCloud',
			name: 'S4HanaCloud',
			component: () => import('../views/product/S4HanaCloud.vue')
		}, {
			path: 'successFactors',
			name: 'SuccessFactors',
			component: () => import('../views/product/SuccessFactors.vue')
		}]
	}],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router