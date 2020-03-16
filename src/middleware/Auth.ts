import { Route } from 'vue-router';
import { Middleware } from '@/middleware/types/Middleware';
import store from '@/store';

export class Auth implements Middleware {
	public getName() {
		return 'auth';
	}

	public handle(next: any, to?: Route, from?: Route) {
		if (!store.getters['auth/isLoggedIn']) {
			next({ name: 'login' });
		}

		next();
	}
}
