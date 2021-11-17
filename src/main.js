import App from './App.svelte'
import data from './data.json';

const app = new App({
	target: document.querySelector('#demo-switcher'),
	props: {
		name: 'world',
		demos: data
	}
});

export default app;