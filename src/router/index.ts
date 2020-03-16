import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from '@/store';
import { routes } from '@/router/routes';
import { middlewarePipeline } from '@/router/kernel';

Vue.use(Meta);
Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	// Middleware checking
	middlewarePipeline(to, from, next);

	next();
});

sync(store, router);
export default router;
