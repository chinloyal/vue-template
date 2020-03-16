<template>
	<app-layout>
		<h1>This is an about page</h1>
	</app-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppLayout from '@/layouts/AppLayout.vue';

@Component({
	components: {
		AppLayout,
	},
})
export default class About extends Vue {}
</script>
