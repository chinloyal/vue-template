import { Route } from '@/router/types/Route';

export const routes: Route[] = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: 'Home' */ '@/views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: 'About' */ '@/views/About.vue'),
	},
];
