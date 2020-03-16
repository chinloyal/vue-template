// Vuex structure based on https://codeburst.io/vuex-and-typescript-3427ba78cfa8
import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from '@/store/auth';
import { RootState } from '@/store/types';

Vue.use(Vuex);

const state: RootState = {
	version: '1.0.0',
	app_name: 'My App Name',
};

export default new Vuex.Store({
	state,
	modules: {
		auth,
	},
});
