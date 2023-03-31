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
<div class="flex flex-col min-h-screen">
	<main class="scroll-smooth bg-white antialiased grow">
		<slot />
	</main>

	<footer class="bg-white lg:pl-36" aria-labelledby="footer-heading">
		<div class="max-w-4xl m-auto px-6 pt-8 pb-12 border-t border-slate-200">
			<p class="mt-8 text-xs leading-5 text-slate-400 md:order-1 md:mt-0 float-left">
				&copy; {new Date().getFullYear()} BookendsAI
			</p>
		</div>
	</footer>
</div>
