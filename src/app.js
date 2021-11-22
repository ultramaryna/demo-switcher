import Switcher from './Switcher.svelte'
import defaultData from './data.json'

class HatimeriaDemoSwitcher {
	render({target, data, type}) {
		new Switcher({
			target: document.querySelector(target),
			props: {
				demos: data || defaultData.demos,
				type: type || 'demo'
			}
		});
	}
}

window.HatimeriaDemoSwitcher = HatimeriaDemoSwitcher
document.dispatchEvent(new CustomEvent('switcherLoaded'))

export default HatimeriaDemoSwitcher;