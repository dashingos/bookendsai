<script>
	import Meta from '$lib/meta.svelte';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// import { browser } from '$app/environment';
	const { id } = $page.params;
	import { searchBooksByTitle, ask } from '$lib/utils';

	const placeholder = ['What are the top 3 takeaways?'];
	let place_i = 0;

	let loaded = true;
	let search;
	let result;

	export let title;
	export let subtitle;
	export let description;
	export let src;
	export let authors = [];
	export let buy_link;

	function update_result(letter) {
		if (result == undefined) {
			result = letter;
		} else {
			result += letter;
		}
	}

	onMount(async () => {
		// const title = id.replace(/[^\w\s-]/gi, '').replace(/-/g, ' ');
		const books = await searchBooksByTitle(title, 1);
		volumeInfo = books[0].volumeInfo;

		loaded = true;
	});
</script>

<Meta {title} />

<div class="flex items-end mb-8">
	{#if src}<img {src} alt="{title} Cover" class="object-contain" />{/if}
	<div class="ml-4">
		<h1 class="font-bold text-3xl mb-1 font-display">{title}</h1>
		<p class="font-medium text-slate-900">{subtitle ? subtitle : ''}</p>
		{#if authors.length > 0}<p class="text-sm text-slate-500">By {authors[0]}</p>{/if}
	</div>
</div>
<p class="text-slate-700">{description ? description : ''}</p>

<section id="question" class="mt-12">
	<h1 class="font-display text-xl font-extrabold text-slate-900 md:text-3xl mb-1">
		Ask a question about the book
	</h1>
	<div
		class="flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900 border border-slate-200"
	>
		<input
			on:keydown={async (e) => {
				if (e.key == 'Enter') await ask(update_result, title, search);
			}}
			bind:value={search}
			placeholder={placeholder[place_i]}
			aria-label="Search"
			class="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none border-0"
		/><button
			on:click={async () => {
				await ask(update_result, title, search);
			}}
			class="inline-flex justify-center rounded-2xl bg-blue-600 py-4 px-6 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 "
			type="submit"
			><span class="sr-only sm:not-sr-only">Ask</span><span class="sm:hidden"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</span>
		</button>
	</div>
</section>

<section class="mt-12">
	{#if result}
		{@html result}
	{/if}
</section>
