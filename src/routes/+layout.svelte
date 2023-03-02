<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
	/>
</svelte:head>

<div class="scroll-smooth bg-white antialiased">
	<slot />
</div>

<!-- <footer class="bg-white lg:pl-36" aria-labelledby="footer-heading">
	<div class="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
		<h2 id="footer-heading" class="font-display text-4xl pb-4 font-bold">Book lists</h2>

		<div class="xl:grid xl:grid-cols-2 xl:gap-8">
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="font-semibold leading-6 text-slate-900 font-display">Business</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900"
									>Marketing</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Startup</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Stategy</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900"
									>Insights</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="font-semibold leading-6 text-slate-900 font-display">Self-Improvement</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900"
									>Neuroscience</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900"
									>Relationships</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900"
									>Parenting</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Health</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="font-semibold leading-6 text-slate-900 font-display">Fiction</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Sci Fi</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="font-semibold leading-6 text-slate-900 font-display">Fiction</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Claim</a>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Privacy</a
								>
							</li>

							<li>
								<a href="#" class="text-sm leading-6 text-slate-600 hover:text-slate-900">Terms</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="max-w-4xl m-auto px-6 pt-8 pb-12 border-t border-slate-200">
		<p class="mt-8 text-xs leading-5 text-slate-400 md:order-1 md:mt-0 float-left">
			&copy; {new Date().getFullYear()} BookendsAI
		</p>
		<p class="mt-8 text-xs leading-5 text-slate-400 md:order-1 md:mt-0 float-right">
			<a class="px-4 hover:underline" href="/affiliate-disclaimer">Affiliate Disclaimer</a>
		</p>
	</div>
</footer> -->
