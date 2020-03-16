import { Route } from 'vue-router';

export interface Middleware {
	/**
	 * Naming convention for middleware names is kebab-case.
	 * For example: If a middleware's Class Name is TrustProxies,
	 * then getName should return trust-proxies.
	 *
	 * @return string
	 */
	getName: () => string;
	handle: (next: any, to?: Route, from?: Route) => void;
}
