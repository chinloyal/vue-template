import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#41b883',
				secondary: '#424242',
				accent: '#82b1ff',
				error: '#ff5252',
				info: '#2196f3',
				success: '#4caf50',
			},
		},
	},
	icons: {
		iconfont: 'mdi',
	},
});
