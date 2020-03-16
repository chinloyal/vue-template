<template>
	<v-container fluid fill-height>
		<v-app-bar app clipped-left color="primary" dark>
			<v-toolbar-title>{{ $store.state.app_name }}</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<v-btn text to="/">Home</v-btn>
				<v-btn text to="/about">About</v-btn>
			</v-toolbar-items>
		</v-app-bar>
		<v-content>
			<slot></slot>
		</v-content>
	</v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppLayout extends Vue {}
</script>
