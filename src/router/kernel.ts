import * as middleware from '@/middleware';
import { Route } from 'vue-router';

const keys = Object.keys(middleware);
const kernel: object = {};

for (const key of keys) {
	kernel[new middleware[key]().getName()] = new middleware[key]();
}

export default kernel;

export function middlewarePipeline(to: Route, from: Route, next: any) {
	const middlewares = to.meta.middleware;

	if (middlewares !== undefined) {
		to.meta.middleware.forEach((mw: string) => {
			kernel[mw].handle(next, to, from);
		});
	}
}
