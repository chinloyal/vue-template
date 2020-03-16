<template>
	<v-app>
		<router-view />
		<app-dialog></app-dialog>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style>
#app {
	text-align: center;
}
</style>
