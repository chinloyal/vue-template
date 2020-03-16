import { MutationTree } from 'vuex';
import { AuthState } from '@/store/auth/types';
import { SecureStorage } from '@/utils/secure-storage';
import decode from 'jwt-decode';
export const mutations: MutationTree<AuthState> = {
	setUser(state, user) {
		const storage = SecureStorage.getInstance();
		const authUser = {
			name: user.name,
			email: user.email,
			id: user.id,
		};
		state.authUser = authUser;

		storage.set('authUser', authUser);
	},

	setToken(state, token) {
		const storage = SecureStorage.getInstance();

		state.token = token;
		state.decodedToken = decode(token);
		storage.set('authToken', token);
		storage.set('decodedToken', state.decodedToken);
		window.axios.defaults.headers.common.Authorization = 'Bearer ' + token;
	},

	removeToken() {
		window.axios.defaults.headers.common.Authorization = null;
	},
};
