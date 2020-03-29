const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path');

const ROOT = path.resolve(__dirname);

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [ROOT].concat(args));
}

module.exports = {
	transpileDependencies: ['vuetify'],
	productionSourceMap: false,
	configureWebpack: {
		mode: process.env.NODE_ENV,
		resolve: {
			alias: {
				vue$: 'vue/dist/vue.esm.js',
				$axios: root('node_modules/axios/index'),
				'@': root('src'),
				axios: root('src/utils/axios-configured'),
			},
			extensions: ['*', '.js', '.ts', '.tsx', '.vue', '.json'],
			plugins: [new TsConfigPathsPlugin()],
		},
	},
};
