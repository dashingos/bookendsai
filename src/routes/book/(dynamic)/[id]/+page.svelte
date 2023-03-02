<script>
	import Meta from '$lib/meta.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	const { id } = $page.params;
	import { searchBooksByTitle, ask } from '$lib/utils';
	import { links } from '$lib/links';

	const placeholder = ['What are the top 3 takeaways?'];
	let place_i = 0;

	let loaded = true;
	let search;
	let answering = false;

	let qa = [];
	let qa_i = 0;

	let title = id.replace(/[^\w\s-]/gi, '').replace(/-/g, ' ');

	let volumeInfo;

	function update_result(token) {
		if (qa[qa_i].a == undefined) {
			if (token == '<br>' || token == '<br><br>') return;
			qa[qa_i].a = token;
		} else {
			qa[qa_i].a += token;
		}
	}
	async function new_question() {
		answering = true;
		let query = search;
		if (!query) query = placeholder[place_i];
		qa[qa_i] = {};
		qa[qa_i].q = query;

		await ask(update_result, title, query);
		qa_i += 1;
		answering = false;
	}

	onMount(async () => {
		// const title = id.replace(/[^\w\s-]/gi, '').replace(/-/g, ' ');

		const books = await searchBooksByTitle(title, 1);
		volumeInfo = books[0].volumeInfo;

		loaded = true;
	});
</script>

<Meta {title} />

{#if loaded}
	{#if volumeInfo}
		<div class="sm:flex items-end mb-8">
			<img
				src={volumeInfo.imageLinks.thumbnail}
				alt="{volumeInfo.title} Cover"
				class="object-contain border border-slate-100 rounded m-4"
			/>
			<div class="ml-4">
				<h1 class="font-bold text-3xl mb-1 font-display">{volumeInfo.title}</h1>
				{#if volumeInfo.subtitle}
					<p class="font-medium text-slate-900">{volumeInfo.subtitle}</p>
				{/if}
				<p class="text-sm text-slate-500">By {volumeInfo.authors[0]}</p>

				{#if links[title]}
					<p class="my-2">
						<a
							href={links[title].aff}
							target="_blank"
							rel="noreferrer"
							class="text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded whitespace-nowrap my-1 mr-2 inline-block"
							>Buy Book</a
						>
						<a
							href={links[title].audible}
							target="_blank"
							rel="noreferrer"
							class="text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded whitespace-nowrap my-1 inline-block"
							>Buy Audiobook</a
						>
					</p>
				{/if}
			</div>
		</div>
		<p class="text-slate-700">{volumeInfo.description}</p>
	{/if}
{/if}

<section id="question" class="mt-12">
	<h1 class="font-display text-xl font-extrabold text-slate-900 md:text-3xl mb-1">
		Ask a question about the book
	</h1>
	<div
		class="flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900 border border-slate-200"
	>
		<input
			on:keydown={async (e) => {
				if (e.key == 'Enter') new_question();
			}}
			bind:value={search}
			placeholder={placeholder[place_i]}
			aria-label="Search"
			class="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none border-0"
		/>
		{#if !answering}
			<button
				on:click={new_question}
				class="button inline-flex justify-center rounded-2xl bg-blue-600 py-4 px-6 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 "
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
		{:else}
			<button
				on:click={new_question}
				class="button inline-flex justify-center rounded-2xl bg-blue-500 py-4 px-6 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 "
				disabled
				type="submit"
			>
				<svg
					class="animate-spin h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</button>
		{/if}
	</div>
</section>

<section class="mt-12">
	{#if qa.length > 0}
		{#each qa as { q, a }}
			<div class="mb-12">
				<span class="text-xl font-display font-semibold">{@html q}</span>
				{#if a}
					<p class="leading-7 text-slate-600">{@html a}</p>
				{/if}
			</div>
		{/each}
	{/if}
</section>
