import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';
import { getters } from '@/store/auth/getters';
import { mutations } from '@/store/auth/mutations';
import { actions } from '@/store/auth/actions';
import { SecureStorage } from '@/utils/secure-storage';

const namespaced: boolean = true;
const storage = SecureStorage.getInstance();

const state: AuthState = {
	token: storage.get('authToken') || null,
	decodedToken: storage.get('decodedToken') || null,
	authUser: storage.get('authUser') || null,
};

export const auth: Module<AuthState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations,
};
