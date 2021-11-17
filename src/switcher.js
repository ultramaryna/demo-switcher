import Switcher from './Switcher.svelte'
import data from './data.json'

const switcher = new Switcher({
	target: document.querySelector('#demo-switcher'),
	props: {
		demos: data.demos
	}
});

export default switcher;