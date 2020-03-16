import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';
import { SecureStorage } from '@/utils/secure-storage';
import axios from 'axios';

const storage = SecureStorage.getInstance();

export const actions: ActionTree<AuthState, RootState> = {
	login({ commit }, credentials): any {
		return new Promise((resolve, reject) => {
			axios
				.post('/api/login', credentials)
				.then(response => {
					/**
					 * Add custom code after posting login.
					 */
					// commit('setUser', response.data.user);
					// commit('setToken', response.data.access_token);
					resolve(response);
				})
				.catch(error => {
					reject(error);
				});
		});
	},

	logout({ commit }): any {
		const token = storage.get('authToken');
		storage.clear();
		commit('removeToken');

		return new Promise((resolve, reject) => {
			axios
				.post('/api/logout', { token })
				.then(response => {
					resolve(response);
				})
				.catch(error => {
					reject(error);
				});
		});
	},
};
