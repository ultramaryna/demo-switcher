import Switcher from './Switcher.svelte'

class HatimeriaDemoSwitcher {
	render(target) {
		new Switcher({
			target: document.querySelector(target)
		});
	}
}

window.HatimeriaDemoSwitcher = HatimeriaDemoSwitcher;

export default HatimeriaDemoSwitcher;