import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthState } from '@/store/auth/types';

export const getters: GetterTree<AuthState, RootState> = {
	isLoggedIn: state => state.token !== null,
	authUser: state => state.authUser,
	isExpired: state =>
		state.decodedToken !== null
			? Date.now() > state.decodedToken.exp * 1000
			: true,
};
