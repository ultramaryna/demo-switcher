<script>
	import { title, homeTitle, switcher, list, demo, linkInline, linkBlock, demoBlock, image } from './styles.js'
	export let demos
	export let type
	export const isHomepage = type === 'homepage';
</script>

<aside class={!isHomepage && switcher}>
	<p class={isHomepage ? homeTitle : title}>See our other demos!</p>
	<ul class={list}>
		{#each demos as { name, link, img }}
			{#if window.location.origin !== link }
				<li class="{isHomepage ? demoBlock : demo}">
					<a href="{link}" class={isHomepage ? linkBlock : linkInline}>
						{#if isHomepage }
							<img src="{img}" alt="{name}" class={image} />
						{/if}
						{name}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</aside>