<script>
	import { searchBooksByTitle } from '$lib/utils';
	const placeholder = ['Atomic Habits by James Clear'];
	let place_i = 0;

	let search = '';
	let books = [];
</script>

<div class="max-w-2xl m-auto mt-32 px-2">
	<h1 class="font-display text-5xl font-extrabold text-slate-900 md:text-6xl text-center">
		◫ Bookends AI
	</h1>
	<p class="my-4 text-3xl text-slate-600 text-center">Search for a book or author</p>

	<div
		class="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900 border border-slate-200"
	>
		<input
			on:keydown={async (e) => {
				if (e.key == 'Enter') books = await searchBooksByTitle(search);
			}}
			bind:value={search}
			placeholder={placeholder[place_i]}
			aria-label="Search"
			class="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none border-0"
		/><button
			on:click={async () => (books = await searchBooksByTitle(search))}
			class="inline-flex justify-center rounded-2xl bg-blue-600 py-4 px-6 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 "
			type="submit"
			><span class="sr-only sm:not-sr-only">Search</span><span class="sm:hidden"
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
			</span></button
		>
	</div>
</div>

<section id="results" class="max-w-2xl m-auto mt-8 px-4">
	<ul class="divide-y divide-slate-200">
		{#each books as { volumeInfo }}
			{#if volumeInfo}
				<li class="my-4">
					<a
						class="flex py-4"
						href="/book/{volumeInfo.title
							.toLowerCase()
							.replace(/ /g, '-')
							.replace(/[^a-z0-9-]/g, '')}"
					>
						{#if volumeInfo.imageLinks.smallThumbnail}
							<img src={volumeInfo.imageLinks.smallThumbnail} alt="{volumeInfo.title} Cover" />
						{/if}
						<div class="ml-3">
							<p class="text-base font-medium text-slate-900">{volumeInfo.title}</p>
							{#if volumeInfo.subtitle}
								<p class="text-sm font-medium text-slate-900">{volumeInfo.subtitle}</p>
							{/if}
							<p class="text-sm text-slate-500">By {volumeInfo.authors[0]}</p>
						</div>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</section>
