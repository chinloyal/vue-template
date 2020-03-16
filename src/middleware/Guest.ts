import { Route } from 'vue-router';
import { Middleware } from '@/middleware/types/Middleware';
import store from '@/store';

export class Guest implements Middleware {
	public getName() {
		return 'guest';
	}

	public handle(next: any, to?: Route, from?: Route) {
		if (store.getters['auth/isLoggedIn']) {
			next({ name: 'home' });
		}

		next();
	}
}
