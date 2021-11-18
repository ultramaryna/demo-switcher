<script>
	import { title, switcher, list, demo, linkItem } from './styles.js'
	export let demos
	export let type
	console.log(type);
</script>

<aside class={switcher}>
	<p class={title}>See our other demos!</p>
	<ul class={list}>
		{#each demos as { name, link }}
			{#if window.location.origin !== link }
				<li class="{demo}">
					<a href="{link}" class={linkItem}>
						{name}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</aside>