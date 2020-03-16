<template>
	<v-app>
		<router-view />
		<app-dialog></app-dialog>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component({
	metaInfo: {
		title: store.state.app_name,
		titleTemplate: `%s - ${store.state.app_name}`,
	},
})
export default class App extends Vue {}
</script>

<style>
#app {
	text-align: center;
}
</style>
