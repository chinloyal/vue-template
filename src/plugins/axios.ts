import Vue, { PluginObject } from 'vue';
import axios from '$axios';
// import { SecureStorage } from '@/utils/secure-storage';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common.Authorization = 'AUTH_TOKEN';
// const storage: SecureStorage = SecureStorage.getInstance();

const config = {
	// baseURL: process.env.baseURL || process.env.apiUrl || ""
	// timeout: 60 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.defaults.headers.Accept = 'application/json';
/* if (storage.get('authToken').length > 0) {
	_axios.defaults.headers.common.Authorization = `Bearer ${storage.get(
		'authToken'
	)}`;
}
 */
_axios.interceptors.request.use(
	cfg => {
		// Do something before request is sent

		return cfg;
	},
	err => {
		// Do something with request error

		return Promise.reject(err);
		// tslint:disable-next-line: trailing-comma
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	res => {
		// Do something with response data

		return res;
	},
	err => {
		// Do something with response error

		return Promise.reject(err);
		// tslint:disable-next-line: trailing-comma
	}
);

const Plugin: PluginObject<any> = {
	install: Vue => {
		Vue.$axios = _axios;
	},
};
Plugin.install = Vue => {
	Vue.$axios = _axios;
	window.axios = _axios;
	Object.defineProperties(Vue.prototype, {
		$axios: {
			get() {
				return _axios;
			},
		},
	});
};

Vue.use(Plugin);

export default Plugin;
