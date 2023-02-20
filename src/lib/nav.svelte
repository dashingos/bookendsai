<script>
	let mobile_nav = false;
	let menu_items = [{ slug: '/contact', title: 'Contact' }];
</script>

<section class="overflow-hidden">
	<div class="flex items-center justify-between px-8 py-5 bg-white">
		<div class="w-auto">
			<div class="flex flex-wrap items-center">
				<div class="w-auto mr-14">
					<a href="/">
						<img src="/favicon.png" class="w-6 h-6" alt="" />
					</a>
				</div>
			</div>
		</div>
		<div class="w-auto">
			<div class="flex flex-wrap items-center">
				<div class="w-auto hidden lg:block">
					<ul class="flex items-center mr-10">
						{#each menu_items as { slug, title }}
							<li class="font-heading mr-9 text-stone-900 hover:text-stone-700 text-lg">
								<a href={slug}>{title}</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="w-auto lg:hidden">
					<button on:click={() => (mobile_nav = true)}>
						<svg
							class="navbar-burger text-stone-800"
							width="51"
							height="51"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="56" height="56" rx="28" fill="currentColor" />
							<path
								d="M37 32H19M37 24H19"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div
		class="{mobile_nav
			? 'block'
			: 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
	>
		<div
			class="navbar-backdrop fixed inset-0 bg-stone-800 opacity-80"
			on:click={() => (mobile_nav = false)}
		/>
		<nav class="relative z-10 px-9 py-8 bg-white h-full">
			<div class="w-full h-12">
				<div class="flex items-center justify-between -m-2">
					<div class="w-auto p-2">
						<a class="inline-block" href="#">
							<img src="/favicon.png" class="w-6 h-6" alt="" />
						</a>
					</div>
					<div class="w-auto p-2">
						<button on:click={() => (mobile_nav = false)}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 18L18 6M6 6L18 18"
									stroke="#111827"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="flex flex-col justify-top py-8 w-full grow">
				<ul>
					{#each menu_items as { slug, title }}
						<li class="mb-12">
							<a
								class="font-heading font-medium text-lg text-stone-900 hover:text-stone-700"
								href={slug}>{title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</div>
</section>
