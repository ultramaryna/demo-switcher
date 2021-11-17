<script>
	import data from './data.json'
	import { title, switcher, list, demo, linkItem } from './styles.js';
	export let demos = data.demos;
</script>

<aside class={switcher}>
	<p class={title}>See our other demos!</p>
	<ul class={list}>
		{#each demos as { name, link }, i}
			<li class="{demo}">
				<a href="{link}"class={linkItem}>
					{name}
				</a>
			</li>
		{/each}
	</ul>
</aside>