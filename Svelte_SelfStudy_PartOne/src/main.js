import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Kristian'
	}
});

export default app;