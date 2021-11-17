import Switcher from './Switcher.svelte'

class App {
	render(target) {
		new Switcher({
			target: document.querySelector(target)
		});
	}
}

export default App;