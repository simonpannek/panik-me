<script>
	import { sponsors } from '$lib/sponsors.js';

	export const prerender = true;
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-xl animate-fade-in px-4 text-center md:max-w-2xl lg:max-w-4xl">
		<h1 class="mb-8 inline-block border-b-2 border-r-2 border-black pb-2 pr-2 text-5xl font-bold">
			Panikecke
		</h1>

		<p class="mb-8 text-lg">
			<strong>Panikecke</strong> started as a group of
			<strong>TUM computer science students</strong>
			who wanted to stay connected during Covid. Since then, it’s grown into a small community where
			people organize
			<strong>meetups</strong>, share <strong>career advice</strong>, and catch up on life after
			graduation. We also fund <strong>scholarships</strong> for TUM students through the Deutschlandstipendium
			— contributors are listed below.
		</p>

		<div class="mx-auto max-w-md md:max-w-lg lg:max-w-xl">
			<h2 class="mb-4 text-2xl font-semibold">Sponsors</h2>

			<p class="text-lg">
				{#each sponsors as sponsor, i}
					{#if sponsor.url}<a href={sponsor.url} class="inline-block underline hover:no-underline"
							>{sponsor.name}</a
						>{:else}<span class="inline-block">{sponsor.name}</span
						>{/if}{#if i < sponsors.length - 1},{' '}{/if}
				{/each}
			</p>
		</div>
	</div>
</div>
