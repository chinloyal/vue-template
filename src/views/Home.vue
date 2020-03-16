<template>
	<app-layout>
		<img alt="Vue logo" src="../assets/logo.png" />
		<hello-world msg="Welcome to Your Vue.js App" />
	</app-layout>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {
		HelloWorld,
		AppLayout,
	},
})
export default class Home extends Vue {}
</script>
