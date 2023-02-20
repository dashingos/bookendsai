<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	const { id } = $page.params;
	import { searchBooksByTitle } from '$lib/utils';

	const placeholder = ['What are the top 3 takeaways?'];
	let place_i = 0;

	let loaded = true;
	let search;

	// let volumeInfo;
	let volumeInfo = {
		title: 'Atomic Habits',
		authors: ['James Clear'],
		subtitle: 'Making Better Habits',
		description: `The #1 New York Times bestseller. Over 4 million copies sold! Tiny Changes, Remarkable Results
		No matter your goals, Atomic Habits offers a proven framework for improving--every day. James
		Clear, one of the world's leading experts on habit formation, reveals practical strategies that
		will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors
		that lead to remarkable results. If you're having trouble changing your habits, the problem
		isn't you. The problem is your system. Bad habits repeat themselves again and again not because
		you don't want to change, but because you have the wrong system for change. You do not rise to
		the level of your goals. You fall to the level of your systems. Here, you'll get a proven system
		that can take you to new heights. Clear is known for his ability to distill complex topics into
		simple behaviors that can be easily applied to daily life and work. Here, he draws on the most
		proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide
		for making good habits inevitable and bad habits impossible. Along the way, readers will be
		inspired and entertained with true stories from Olympic gold medalists, award-winning artists,
		business leaders, life-saving physicians, and star comedians who have used the science of small
		habits to master their craft and vault to the top of their field. Learn how to: make time for
		new habits (even when life gets crazy); overcome a lack of motivation and willpower; design your
		environment to make success easier; get back on track when you fall off course; ...and much
		more. Atomic Habits will reshape the way you think about progress and success, and give you the
		tools and strategies you need to transform your habits--whether you are a team looking to win a
		championship, an organization hoping to redefine an industry, or simply an individual who wishes
		to quit smoking, lose weight, reduce stress, or achieve any other goal.`,
		imageLinks: {
			thumbnail:
				'http://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
		}
	};

	onMount(async () => {
		const title = id.replace(/[^\w\s-]/gi, '').replace(/-/g, ' ');
		// const books = await searchBooksByTitle(title, 1);
		// volumeInfo = books[0].volumeInfo;

		loaded = true;
	});
</script>

{#if loaded}
	{#if volumeInfo}
		<div class="flex items-end mb-8">
			<img
				src={volumeInfo.imageLinks.thumbnail}
				alt="{volumeInfo.title} Cover"
				class="object-contain"
			/>
			<div class="ml-4">
				<h1 class="font-bold text-3xl mb-1">{volumeInfo.title}</h1>
				{#if volumeInfo.subtitle}
					<p class="font-medium text-slate-900">{volumeInfo.subtitle}</p>
				{/if}
				<p class="text-sm text-slate-500">By {volumeInfo.authors[0]}</p>
			</div>
		</div>
		<p class="text-slate-700">{volumeInfo.description}</p>
	{/if}
{/if}

<div
	class="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900 border border-slate-200"
>
	<input
		on:keydown={async (e) => {
			// if (e.key == 'Enter') books = await searchBooksByTitle(search);
		}}
		bind:value={search}
		placeholder={placeholder[place_i]}
		aria-label="Search"
		class="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none border-0"
	/><button
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
		</span></button
	>
</div>
